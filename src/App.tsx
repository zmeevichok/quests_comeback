import React, { useState, useEffect } from 'react';
import { Quest, QuestInstance, User } from './types';
import UserProfile from './components/UserProfile';
import QuestCard from './components/QuestCard';
import './App.css';

// Начальные данные
const initialQuests: Quest[] = [
  {
    id: '1',
    title: 'Название квеста',
    description: 'Требования для завершения',
    expReward: 300
  },
  {
    id: '2',
    title: 'Название квеста',
    description: 'Требования для завершения',
    expReward: 300
  },
  {
    id: '3',
    title: 'Название квеста',
    description: 'Требования для завершения',
    expReward: 300
  },
  {
    id: '4',
    title: 'Название квеста',
    description: 'Требования для завершения',
    expReward: 300
  },
  {
    id: '5',
    title: 'Название квеста',
    description: 'Требования для завершения',
    expReward: 300
  },
  {
    id: '6',
    title: 'Название квеста',
    description: 'Требования для завершения',
    expReward: 300
  }
];

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'Имя',
    surname: 'Фамилия',
    exp: 0
  });

  const [availableQuests] = useState<Quest[]>(initialQuests);
  const [activeQuests, setActiveQuests] = useState<QuestInstance[]>([]);
  const [completedQuests, setCompletedQuests] = useState<QuestInstance[]>([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({
      name: 'Имя',
      surname: 'Фамилия',
      exp: 0
    });
  };

  const handleTakeQuest = (quest: Quest) => {
    const newQuestInstance: QuestInstance = {
      id: `${quest.id}-${Date.now()}`,
      quest: quest,
      status: 'active'
    };
    setActiveQuests(prev => [...prev, newQuestInstance]);
  };

  const handleCompleteQuest = (questInstance: QuestInstance) => {
    setActiveQuests(prev => prev.filter(q => q.id !== questInstance.id));

    const completedInstance: QuestInstance = {
      ...questInstance,
      status: 'completed'
    };
    setCompletedQuests(prev => [...prev, completedInstance]);

    setUser(prev => {
      const next = {
        ...prev,
        exp: prev.exp + questInstance.quest.expReward
      };
      localStorage.setItem('user', JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="left-section">
          <div className="quest-section">
            <h2 className="section-title">Доступные</h2>
            <div className="quest-list">
              {availableQuests.map(quest => (
                <QuestCard
                  key={quest.id}
                  quest={quest}
                  status="available"
                  onTake={() => handleTakeQuest(quest)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="right-section">
          <UserProfile user={user} onLogout={handleLogout} />

          <div className="quest-sections">
            <div className="quest-section">
              <h2 className="section-title">Активные</h2>
              <div className="quest-list">
                {activeQuests.map(questInstance => (
                  <QuestCard
                    key={questInstance.id}
                    quest={questInstance}
                    status="active"
                    onComplete={() => handleCompleteQuest(questInstance)}
                  />
                ))}
              </div>
            </div>

            <div className="quest-section">
              <h2 className="section-title">Завершенные</h2>
              <div className="quest-list">
                {completedQuests.map(questInstance => (
                  <QuestCard
                    key={questInstance.id}
                    quest={questInstance}
                    status="completed"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

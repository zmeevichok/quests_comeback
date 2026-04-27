import React, { useState, useEffect } from 'react';
import { Quest, QuestInstance, User, GoogleUserData } from './types';
import UserProfile from './components/UserProfile';
import QuestCard from './components/QuestCard';
import LoginPage from './components/LoginPage';
import GoogleCallback from './components/GoogleCallback';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User>({
    name: 'Имя',
    surname: 'Фамилия',
    exp: 0
  });

  const [availableQuests] = useState<Quest[]>(initialQuests);
  const [activeQuests, setActiveQuests] = useState<QuestInstance[]>([]);
  const [completedQuests, setCompletedQuests] = useState<QuestInstance[]>([]);

  // Проверяем, есть ли сохраненные данные пользователя
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  // Функция для выхода из системы
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser({
      name: 'Имя',
      surname: 'Фамилия',
      exp: 0
    });
  };

  const handleGoogleLogin = (googleData: GoogleUserData) => {
    const newUser: User = {
      name: googleData.name,
      surname: googleData.surname,
      exp: 0,
      avatar: googleData.avatar,
      email: googleData.email
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    
    // Сохраняем данные пользователя в localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const handleTakeQuest = (quest: Quest) => {
    const newQuestInstance: QuestInstance = {
      id: `${quest.id}-${Date.now()}`, // Уникальный ID для каждого экземпляра
      quest: quest,
      status: 'active'
    };
    setActiveQuests(prev => [...prev, newQuestInstance]);
  };

  const handleCompleteQuest = (questInstance: QuestInstance) => {
    // Удаляем из активных
    setActiveQuests(prev => prev.filter(q => q.id !== questInstance.id));
    
    // Добавляем в завершенные
    const completedInstance: QuestInstance = {
      ...questInstance,
      status: 'completed'
    };
    setCompletedQuests(prev => [...prev, completedInstance]);
    
    // Увеличиваем EXP пользователя
    setUser(prev => ({
      ...prev,
      exp: prev.exp + questInstance.quest.expReward
    }));
  };

  // Проверяем, если это callback от Google OAuth
  if (window.location.pathname === '/google-callback') {
    return <GoogleCallback />;
  }

  // Если пользователь не аутентифицирован, показываем страницу логина
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleGoogleLogin} />;
  }

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

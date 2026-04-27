import React from 'react';
import { Quest, QuestInstance } from '../types';
import './QuestCard.css';

interface QuestCardProps {
  quest: Quest | QuestInstance;
  status: 'available' | 'active' | 'completed';
  onTake?: () => void;
  onComplete?: () => void;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest, status, onTake, onComplete }) => {
  const questData = 'quest' in quest ? quest.quest : quest;
  const expReward = questData.expReward;

  return (
    <div className="quest-card">
      <div className="quest-icon"></div>
      <div className="quest-content">
        <h3 className="quest-title">{questData.title}</h3>
        <p className="quest-description">{questData.description}</p>
        <span className="quest-exp">{expReward} EXP</span>
      </div>
      <div className="quest-action">
        {status === 'available' && (
          <button className="take-button" onClick={onTake}>
            Взять
          </button>
        )}
        {status === 'active' && (
          <button className="complete-button" onClick={onComplete}>
            Завершить
          </button>
        )}
        {status === 'completed' && (
          <div className="completed-icon">✓</div>
        )}
      </div>
    </div>
  );
};

export default QuestCard;



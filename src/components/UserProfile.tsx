import React from 'react';
import { User } from '../types';
import './UserProfile.css';

interface UserProfileProps {
  user: User;
  onLogout?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="user-profile">
      <div className="user-avatar">
        {user.avatar ? (
          <img 
            src={user.avatar} 
            alt={`${user.name} ${user.surname}`}
            className="avatar-image"
          />
        ) : (
          <div className="avatar-placeholder"></div>
        )}
      </div>
      <div className="user-info">
        <h2 className="user-name">{user.name} {user.surname}</h2>
        <span className="user-exp">{user.exp.toLocaleString()} EXP</span>
      </div>
      {onLogout && (
        <button className="logout-button" onClick={onLogout}>
          Выйти
        </button>
      )}
    </div>
  );
};

export default UserProfile;

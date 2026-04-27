import React, { useEffect } from 'react';

const GoogleCallback: React.FC = () => {
  useEffect(() => {
    // Получаем токен доступа из URL (Implicit Flow)
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(hash.substring(1));
    const accessToken = urlParams.get('access_token');
    const error = urlParams.get('error');

    if (error) {
      console.error('Ошибка OAuth:', error);
      // В случае ошибки перенаправляем на главную страницу
      window.location.href = '/';
      return;
    }

    if (accessToken) {
      // Получаем данные пользователя с помощью токена
      getUserInfo(accessToken);
    }
  }, []);

  const getUserInfo = async (accessToken: string) => {
    try {
      // Получаем данные пользователя от Google
      const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!userResponse.ok) {
        throw new Error('Ошибка получения данных пользователя');
      }

      const userInfo = await userResponse.json();
      
      const userData = {
        name: userInfo.given_name || '',
        surname: userInfo.family_name || '',
        avatar: userInfo.picture || '',
        email: userInfo.email || ''
      };

      // Отправляем данные родительскому окну
      window.opener?.postMessage({
        type: 'GOOGLE_AUTH_SUCCESS',
        user: userData
      }, window.location.origin);
      
      window.close();
      
    } catch (error) {
      console.error('Ошибка получения данных пользователя:', error);
      // В случае ошибки перенаправляем на главную страницу
      window.location.href = '/';
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#2a2a2a',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Авторизация через Google...</h2>
        <p>Пожалуйста, подождите</p>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '4px solid #4a4a4a',
          borderTop: '4px solid #ff8c00',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '20px auto'
        }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default GoogleCallback;

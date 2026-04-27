// Конфигурация Google OAuth из переменных окружения Vite
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!GOOGLE_CLIENT_ID) {
  console.warn(
    'VITE_GOOGLE_CLIENT_ID не задан. Добавьте его в .env.local на основе .env.example'
  );
}

// Базовый URL для redirect URI
export const getRedirectUri = () => {
  return window.location.origin;
};

// Список разрешений (scopes) для доступа к данным пользователя
export const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];

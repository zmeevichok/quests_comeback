# Настройка Google OAuth

## 1. Создание проекта в Google Cloud Console

1. Перейди на https://console.cloud.google.com/
2. Создай новый проект или выбери существующий
3. Назови проект (например, "Quests Web")

## 2. Включение Google+ API

1. В левом меню выбери "APIs & Services" → "Library"
2. Найди "Google+ API" в поиске
3. Нажми "Enable"

## 3. Создание OAuth 2.0 Credentials

1. Перейди в "APIs & Services" → "Credentials"
2. Нажми "Create Credentials" → "OAuth 2.0 Client IDs"
3. Выбери "Web application"
4. Назови клиента (например, "Quests Web Client")
5. В "Authorized redirect URIs" добавь:
   - `http://localhost:5173` (для разработки)
   - `https://yourdomain.com` (для продакшена)

## 4. Настройка приложения

1. Скопируй "Client ID" из созданных credentials
2. Открой файл `src/config/googleAuth.ts`
3. Замени `YOUR_GOOGLE_CLIENT_ID_HERE` на твой Client ID

## 5. Установка зависимостей

```bash
npm install react-google-login
```

## 6. Запуск

```bash
npm run dev
```

## Важные моменты:

- **Client ID** должен быть правильным
- **Redirect URI** должен точно совпадать с тем, что указано в Google Console
- Для продакшена нужно добавить домен в "Authorized JavaScript origins"
- Google может потребовать верификацию приложения для продакшена

## Тестирование:

1. Открой http://localhost:5173
2. Нажми "Continue with Google"
3. Войди в свой Google аккаунт
4. Разреши доступ приложению
5. Должен произойти редирект обратно в приложение с данными пользователя



# Настройка настоящего Google OAuth

## 1. Обнови redirect URI в Google Console

1. Перейди в Google Cloud Console
2. APIs & Services → Credentials
3. Найди свой OAuth 2.0 Client ID
4. Нажми "Edit" (карандаш)
5. В "Authorized redirect URIs" измени на:
   ```
   http://localhost:5173/google-callback
   ```
6. Сохрани изменения

## 2. Настрой Client ID в коде

1. Открой файл `src/config/googleAuth.ts`
2. Замени `YOUR_GOOGLE_CLIENT_ID_HERE` на твой настоящий Client ID
3. Сохрани файл

## 3. Установи зависимости

```bash
npm install @google-oauth/google
```

## 4. Запусти приложение

```bash
npm run dev
```

## 5. Тестирование

1. Открой http://localhost:5173
2. Нажми "Continue with Google"
3. Откроется новое окно с Google OAuth
4. Войди в свой Google аккаунт
5. Разреши доступ приложению
6. Окно закроется, и ты вернешься в приложение
7. Увидишь свои реальные данные из Google

## Важно:

- **Redirect URI должен точно совпадать** с тем, что в Google Console
- **Client ID должен быть правильным**
- **Для продакшена** нужно добавить домен в "Authorized JavaScript origins"

## Если что-то не работает:

1. Проверь, что redirect URI правильный
2. Проверь, что Client ID правильный
3. Очисти localStorage в браузере
4. Попробуй в режиме инкогнито



# Правильная настройка Google OAuth

## 1. В Google Console:

1. **APIs & Services** → **Credentials**
2. **Найди свой OAuth 2.0 Client ID** → **Edit**
3. **Authorized redirect URIs** → добавь:
   ```
   http://localhost:5173/google-callback
   ```
4. **Authorized JavaScript origins** → добавь:
   ```
   http://localhost:5173
   ```
5. **Сохрани изменения**

## 2. В коде:

1. **Открой** `src/config/googleAuth.ts`
2. **Замени** `YOUR_GOOGLE_CLIENT_ID_HERE` на твой Client ID
3. **Сохрани файл**

## 3. Запусти:

```bash
npm run dev
```

## 4. Тестирование:

1. Открой http://localhost:5173
2. Нажми "Continue with Google"
3. Войди в свой Google аккаунт
4. Разреши доступ приложению
5. Вернешься в приложение с реальными данными

## ✅ Что изменилось:

- **Используем Implicit Flow** (без Client Secret)
- **Безопасно для браузера**
- **Простая настройка**
- **Реальные данные из Google**

## ⚠️ Важно:

- **Redirect URI**: `http://localhost:5173/google-callback`
- **JavaScript origins**: `http://localhost:5173`
- **Client ID должен быть правильным**



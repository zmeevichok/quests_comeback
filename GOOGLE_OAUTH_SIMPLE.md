# Простая настройка Google OAuth

## 1. В Google Console:

1. **APIs & Services** → **Credentials**
2. **Найди свой OAuth 2.0 Client ID** → **Edit**
3. **Authorized redirect URIs** → добавь:
   ```
   http://localhost:5173/google-callback
   ```
4. **Сохрани**

## 2. В коде:

1. **Открой** `src/config/googleAuth.ts`
2. **Замени** `YOUR_GOOGLE_CLIENT_ID_HERE` на твой Client ID
3. **Открой** `src/components/GoogleCallback.tsx`
4. **Замени** `YOUR_GOOGLE_CLIENT_ID_HERE` на твой Client ID
5. **Замени** `YOUR_CLIENT_SECRET` на твой Client Secret

## 3. Запусти:

```bash
npm run dev
```

## 4. Тестирование:

1. Открой http://localhost:5173
2. Нажми "Continue with Google"
3. Войди в Google
4. Разреши доступ
5. Вернешься в приложение с реальными данными

## ⚠️ Важно:

- **Client ID и Client Secret** должны быть правильными
- **Redirect URI** должен точно совпадать
- **Для продакшена** нужен backend для безопасности



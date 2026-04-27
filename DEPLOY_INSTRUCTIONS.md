# Деплой на Vercel

## 1. Подготовка:

1. **Установи Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Войди в Vercel:**
   ```bash
   vercel login
   ```

## 2. Деплой:

1. **В папке проекта выполни:**
   ```bash
   vercel
   ```

2. **Следуй инструкциям:**
   - Выбери проект (или создай новый)
   - Подтверди настройки

3. **Получи URL:**
   ```bash
   vercel --prod
   ```

## 3. Настройка Google Console:

1. **Зайди в Google Cloud Console**
2. **APIs & Services → Credentials**
3. **Найди свой OAuth 2.0 Client ID → Edit**
4. **Authorized redirect URIs** → добавь:
   ```
   https://your-project.vercel.app/google-callback
   ```
5. **Authorized JavaScript origins** → добавь:
   ```
   https://your-project.vercel.app
   ```
6. **Сохрани изменения**

## 4. Тестирование:

1. **Открой URL** от Vercel
2. **Нажми "Continue with Google"**
3. **Войди в Google**
4. **Разреши доступ**
5. **Получи реальные данные**

## ✅ Преимущества Vercel:

- **HTTPS** - Google OAuth работает лучше
- **Реальный домен** - нет проблем с localhost
- **Автоматический деплой** - обновления мгновенно
- **Бесплатно** - для личных проектов



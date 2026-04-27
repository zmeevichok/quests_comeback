@echo off
echo Деплой на Vercel...
echo.
echo 1. Установка Vercel CLI
npm install -g vercel
echo.
echo 2. Логин в Vercel
vercel login
echo.
echo 3. Деплой проекта
vercel
echo.
echo 4. Получение URL проекта
vercel --prod
echo.
echo Готово! Скопируй URL и обнови Google Console
echo.
pause



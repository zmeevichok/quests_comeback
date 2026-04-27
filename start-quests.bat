@echo off
echo Запуск Quests Web...
echo.
cd /d "F:\Projects\zmeevik\Quests Web"
echo Переход в директорию: %CD%
echo.
echo Установка зависимостей...
call npm install
echo.
echo Запуск dev-сервера...
start "Quests Web Server" cmd /k "npm run dev"
echo.
echo Ожидание запуска сервера...
timeout /t 5 /nobreak >nul
echo.
echo Открытие сайта в браузере...
start http://localhost:5173
echo.
echo Готово! Сервер запущен и сайт открыт
echo.
pause

@echo off
echo Тестирование сборки проекта...
echo.
cd /d "F:\Projects\zmeevik\Quests Web"
echo Установка зависимостей...
call npm install
echo.
echo Сборка проекта...
call npm run build
echo.
if exist dist (
    echo Сборка успешна! Папка dist создана
    dir dist
) else (
    echo Ошибка сборки! Папка dist не создана
)
echo.
pause



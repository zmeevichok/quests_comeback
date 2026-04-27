# Исправление ошибки tsconfig.json

## 🔍 Проблема:
```
tsconfig.json(24,18): error TS6053: File '/vercel/path0/tsconfig.node.json' not found.
```

## 🔧 Решение:

### Вариант 1: Замени tsconfig.json
1. **Удали** текущий `tsconfig.json`
2. **Переименуй** `tsconfig.simple.json` в `tsconfig.json`
3. **Загрузи** обновленный файл в GitHub

### Вариант 2: Убери references
В `tsconfig.json` удали строку:
```json
"references": [{ "path": "./tsconfig.node.json" }]
```

### Вариант 3: Убедись, что tsconfig.node.json загружен
Проверь, что файл `tsconfig.node.json` есть в GitHub репозитории.

## ✅ Рекомендация:
Используй **Вариант 1** - замени на упрощенную версию без references.

## 🚀 После исправления:
1. **Обнови** файлы в GitHub
2. **Попробуй** деплой снова
3. **Сборка** должна пройти успешно



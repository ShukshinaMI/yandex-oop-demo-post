# REST API DEMO
Подключаем приложение TODO к REST API

## Getting Started
Адрес фейкового сервера с API — `http://localhost:3000/tasks`

Выполните эту команду в терминале что бы настроить фейковый сервер с REST API
```
npm install -g json-server
```
Создайте файл db.json со следующей схемой внутри
```
{
  "tasks": [
    {
      "name": "First task",
      "id": 1
    }
  ]
}
```
В папке с файлом db.json выполните следующую команду в терминале
```
json-server --watch db.json
```
Подробная документация по json-server тут — [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

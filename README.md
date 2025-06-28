# Dice React App / Приложение "Игральная кость"

## 🇬🇧 English Version

### Description
A simple React dice rolling application that displays random dice values (1-6) with animations. Built with compatibility for older systems.

### Key Features
- 🎲 Animated dice roll
- ✨ Clean light theme UI
- 🐳 Dockerized for easy setup
- ⏳ Works on older Node.js versions

### System Requirements
- Docker
- Node.js 14+ (via Docker)

### Installation
```bash
# 1. Clone repository
git clone https://github.com/yourusername/dice_react_app.git
cd dice_react_app

# 2. Build and run with Docker
docker build -t dice-app .
docker run -d -p 3000:3000 --name dice-container dice-app
```

### Special Notes for MacOS 12
- Uses Node.js 16 via Docker for compatibility
- Platform forced to linux/amd64
- Includes legacy OpenSSL support

### Screenshot
`screenshot.png` in root shows:
- Main interface with dice
- Roll button
- Light theme design

---

## 🇷🇺 Русская версия

### Описание
Простое React-приложение для броска игральной кости с анимацией. Собрано с учётом совместимости со старыми системами.

### Особенности
- 🎲 Анимированный бросок кости
- ✨ Светлая тема интерфейса
- 🐳 Готовый Docker-образ
- ⏳ Работает на старых версиях Node.js

### Требования
- Docker
- Node.js 14+ (через Docker)

### Установка
```bash
# 1. Клонируйте репозиторий
git clone https://github.com/yourusername/dice_react_app.git
cd dice_react_app

# 2. Сборка и запуск через Docker
docker build -t dice-app .
docker run -d -p 3000:3000 --name dice-container dice-app
```

### Особенности для MacOS 12
- Используется Node.js 16 через Docker
- Принудительная установка платформы linux/amd64
- Поддержка legacy OpenSSL

### Скриншот
Файл `screenshot.png` в корне показывает:
- Основной интерфейс с костью
- Кнопку броска
- Дизайн в светлой теме

### Для менторов курса "Разработчик"
Приложение специально адаптировано под:
- Ограниченные версии npm на MacOS 12
- Запуск через Docker без зависимости от системы
- Демонстрацию базовых возможностей React

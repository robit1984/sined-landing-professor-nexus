# SINED — ИИ-сборка файлов и форум сообщества

Веб-платформа для автоматической сборки файлов с помощью ИИ
и обсуждения результатов на встроенном форуме.

## Что это

Загружаешь файлы в мастерскую — ИИ собирает готовый продукт,
проверяет целостность и отдаёт ZIP со SHA-256 хешем.
Сообщество обсуждает сборки на встроенном форуме.

## Структура файлов

| Файл                  | Назначение                         |
|-----------------------|------------------------------------|
| index.html            | Главная страница (лендинг)         |
| styles.css            | Стили (glassmorphism, dark/light)  |
| script.js             | Счётчики, тема, fade-in анимации   |
| manifest.webmanifest  | PWA манифест                       |

## Запуск локально

Открыть index.html в браузере — работает без сервера.

Через live-server:
npx live-server --open=index.html

## Стек лендинга

- HTML5 семантическая разметка
- CSS3 (переменные, grid, адаптив, glassmorphism)
- Vanilla JS ES5 (без зависимостей)
- PWA ready (manifest + theme-color)

## Полный стек платформы

- Frontend:   Next.js 14, React, TypeScript, TailwindCSS
- Backend:    Node.js / NestJS, PostgreSQL, Redis
- Очереди:   BullMQ
- Хранилище: S3 / MinIO / R2
- ИИ:        Python-микросервис + LLM API
- Auth:      OAuth2 (Google, Discord, GitHub) + JWT
- Deploy:    Docker, CI/CD

## Деплой лендинга

Netlify / Vercel / GitHub Pages — перетащи папку.

## Лицензия

MIT © 2026 SINED
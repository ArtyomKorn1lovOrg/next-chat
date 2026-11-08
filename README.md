# Next Chat

Next Chat — чат для обмена сообщениями. Веб-клиент написан на Next.js, React и TypeScript, API — на Laravel. Для проверки доставки сообщений в реальном времени клиент подписывается на события Laravel Reverb через Laravel Echo.

## Структура репозитория

| Каталог | Содержимое |
| --- | --- |
| [frontend/](frontend/) | Приложение Next.js в `apps/web`, общие компоненты, утилиты и конфигурации в `packages/`. Зависимости управляются через pnpm workspaces. |
| [backend/](backend/) | Laravel API. Модули проекта находятся в `packages/` и подключаются через Composer. |
| [docker/](docker/) | Конфигурации Compose для development и production, Dockerfile в `images/` и конфигурации сервисов в `volumes/`. |

## Локальный запуск в Docker

Понадобятся Docker с Compose v2 и Make. Выполняйте команды из корня репозитория.

1. Создайте файлы окружения.

   ```bash
   cp docker/.env.example docker/.env
   cp backend/.env.example backend/.env
   ```

   В `docker/.env` укажите свой UID и GID. Их можно узнать командами `id -u` и `id -g` в Linux или WSL.

2. Настройте Laravel. В `backend/.env` задайте следующие параметры, заменив значения в угловых скобках своими.

   ```dotenv
   APP_URL=http://localhost:8003

   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=<значение MYSQL_DATABASE>
   DB_USERNAME=<значение MYSQL_USER>
   DB_PASSWORD=<значение MYSQL_PASSWORD>

   BROADCAST_CONNECTION=reverb
   QUEUE_CONNECTION=database

   REVERB_APP_ID=next-chat-local
   REVERB_APP_KEY=<ключ приложения Reverb>
   REVERB_APP_SECRET=<секрет приложения Reverb>
   REVERB_HOST=reverb
   REVERB_PORT=8080
   REVERB_SCHEME=http
   REVERB_SERVER_HOST=0.0.0.0
   REVERB_SERVER_PORT=8080
   ```

   Значения `MYSQL_DATABASE`, `MYSQL_USER` и `MYSQL_PASSWORD` берутся из [конфигурации MySQL](docker/volumes/mysql/env.yml).

3. Создайте `frontend/apps/web/.env`. Скопируйте в `NEXT_PUBLIC_REVERB_APP_KEY` значение `REVERB_APP_KEY` из Laravel.

   ```dotenv
   NEXT_PUBLIC_API_URL=http://localhost:8003
   NEXT_PUBLIC_REVERB_APP_KEY=<значение REVERB_APP_KEY>
   NEXT_PUBLIC_REVERB_HOST=localhost
   NEXT_PUBLIC_REVERB_PORT=8005
   NEXT_PUBLIC_REVERB_SCHEME=http
   ```

4. Соберите образы и проверьте приложение. В development контейнеры используют каталоги `frontend` и `backend` с хоста, поэтому зависимости нужно установить в этих каталогах.

   ```bash
   make build
   make up
   make shell
   make migrate
   ```
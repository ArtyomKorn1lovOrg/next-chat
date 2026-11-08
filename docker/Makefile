.DEFAULT_GOAL := help

DOCKER_ENV ?= development

ifneq ($(DOCKER_ENV),development)
ifneq ($(DOCKER_ENV),production)
$(error DOCKER_ENV должна быть либо development, либо production)
endif
endif

DOCKER_COMPOSE := docker compose --env-file .env -f "docker-compose.$(DOCKER_ENV).yml"
TASK ?= help
SERVICE ?= php

.PHONY: help build up stop start down rebuild ps logs shell config destroy

help:
	@printf '%s\n' \
		'Окружение: DOCKER_ENV=development (default) или production' \
		'build    Сборка образов с использованием кэша' \
		'up       Сборка и запуск контейнеров в фоновом режиме' \
		'stop     Остановить контейнеры' \
		'start    Запустить контейнеры' \
		'down     Удалить контейнеры и сети, сохранив volumes' \
		'rebuild  Пересобрать контейнеры, а затем снова их перезапустить' \
		'ps       Показать запущенные контейнеры' \
		'logs     Отслеживать логи: SERVICE=php (default)' \
		'shell    Открыть в интерактивном режиме: SERVICE=php (default)' \
		'config   Проверить конфигурацию docker compose' \
		'destroy  Удалить контейнеры и volumes; обязательный параметр CONFIRM=yes'

build:
	$(DOCKER_COMPOSE) build

up:
	$(DOCKER_COMPOSE) up -d --remove-orphans

stop:
	$(DOCKER_COMPOSE) stop

start:
	$(DOCKER_COMPOSE) start

down:
	$(DOCKER_COMPOSE) down --remove-orphans

rebuild:
	$(DOCKER_COMPOSE) build --no-cache
	$(DOCKER_COMPOSE) up -d --force-recreate --remove-orphans

ps:
	$(DOCKER_COMPOSE) ps

logs:
	$(DOCKER_COMPOSE) logs --follow --tail=100 $(SERVICE)

shell:
	$(DOCKER_COMPOSE) exec $(SERVICE) /bin/sh

config:
	$(DOCKER_COMPOSE) config --quiet

destroy:
ifneq ($(CONFIRM),yes)
	$(error команда destroy удаляет volumes, включая данные БД; для подтверждения укажите CONFIRM=yes)
else
	$(DOCKER_COMPOSE) down --volumes --remove-orphans
endif

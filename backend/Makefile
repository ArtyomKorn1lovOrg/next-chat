.DEFAULT_GOAL := help

.PHONY: help install test migrate artisan

help:
	@printf '%s\n' \
		'install  Установка зависимостей composer' \
		'test     Запуск unit-тестов' \
		'migrate  Запуск миграций' \
		'artisan  Запуск Artisan, пример команды: make artisan ARGS="route:list"'

install:
	composer install

test:
	composer test

migrate:
	php artisan migrate

artisan:
	php artisan $(ARGS)

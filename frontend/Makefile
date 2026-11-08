.DEFAULT_GOAL := help

.PHONY: help install dev build start lint typecheck check test

help:
	@printf '%s\n' \
		'install    Установка зависимостей' \
		'dev        Запуск приложений в dev-режиме' \
		'build      Production-сборка приложений' \
		'start      Запуск production-сборок приложений' \
		'lint       Запуск Biome-линтера' \
		'typecheck  Проверка типов TypeScript' \
		'check      Запуск Biome-линтера и проверки типов TypeScript' \
		'test       Запуск unit-тестов Vitest'

install:
	pnpm install --frozen-lockfile

dev:
	pnpm run dev

build:
	pnpm run build

start:
	pnpm run start

lint:
	pnpm run lint

typecheck:
	pnpm run typecheck

check:
	pnpm run check

test:
	pnpm run test:run

install:
	npm install
api:
	docker compose exec api bash
up:
	docker compose up -d
build:
	docker compose build --no-cache
start:
	docker compose exec api npm run start
stop:
	docker compose stop
# Build and tear down containers
dev-up:
	
	docker compose -f docker-compose-dev.yml up -d --build
dev-down:
	docker compose -f docker-compose-dev.yml down

# Logging available for all containers or specified container.
logs:
	docker compose -f docker-compose-dev.yml logs
slog:
	docker logs server
clog:
	docker logs client
nlog:
	docker logs nginx

install-vue:
	docker run -v ./vueJs:/app -w /app node:22-alpine npm install

install-expressJs:
	docker run -v ./expressJs:/app -w /app node:22-alpine npm install

start:
	docker compose up -d

stop:
	docker compose down

restart:
	docker compose restart -d

install: install-expressJs install-vue start
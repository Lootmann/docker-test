run:
	docker run --name server --port 8000:80 -d myubuntu:1

.PHONY: stop
stop:
	docker stop server

.PHONY: build
build:
	docker build -t myubuntu:1 .

.PHONY: login
login:
	docker container exec -it server /bin/bash

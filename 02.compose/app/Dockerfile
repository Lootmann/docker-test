# app/Dockerfile
FROM python:3.10-buster as builder

WORKDIR /code/

COPY ./requirements/docker.txt /code/

RUN pip install -U pip && pip install -r docker.txt

# Deploy
FROM python:3.10-slim-buster

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

COPY --from=builder /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages

COPY . /code/

FROM ubuntu:20.04

RUN apt-get update \
  && apt-get install -y \
    tzdata \
    apt-utils \
    apache2 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

EXPOSE 80
CMD ["apachectl", "-D", "FOREGROUND"]

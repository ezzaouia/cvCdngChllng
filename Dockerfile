FROM ubuntu

RUN mkdir /var/www/Cvapp

ADD . /var/www/Cvapp

RUN apt-get update

RUN apt-get install -y nodejs npm git git-core

CMD ["node", "/var/www/Cvapp/index.js"] 
FROM ubuntu

RUN bash -c 'mkdir -pv /var/www/Cvapp'

COPY . /var/www/Cvapp

RUN apt-get update

RUN apt-get install -y nodejs npm git git-core

RUN cd /var/www/Cvapp; npm install

EXPOSE  3000

CMD ["node", "/var/www/Cvapp/index.js"] 
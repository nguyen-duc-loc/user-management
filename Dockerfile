FROM node:22.13-alpine3.20

WORKDIR /app

RUN apk add make

RUN apk add curl

RUN apk add tzdata

RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.18.1/migrate.linux-amd64.tar.gz | tar xvz
RUN rm README.md LICENSE
RUN mv migrate /usr/bin

COPY package*.json .

RUN npm install --force

COPY . .

RUN chmod +x /app/*.sh

EXPOSE 3000

CMD [ "npm", "start" ]

ENTRYPOINT [ "/app/start.sh" ]
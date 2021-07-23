FROM node:alpine

WORKDIR /app/gateway

COPY package.json ./

RUN npm install --silent

COPY . ./

EXPOSE 8080

CMD npm run build:prod && npm run start:prod
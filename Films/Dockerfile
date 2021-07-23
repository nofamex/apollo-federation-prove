FROM node:alpine

WORKDIR /app/films

COPY package.json ./

RUN npm install --silent

COPY . ./

EXPOSE 8082

CMD npm run build:prod && npm run start:prod
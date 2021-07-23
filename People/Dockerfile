FROM node:alpine

WORKDIR /app/people

COPY package.json ./

RUN npm install --silent

COPY . ./

EXPOSE 8081

CMD npm run build:prod && npm run start:prod
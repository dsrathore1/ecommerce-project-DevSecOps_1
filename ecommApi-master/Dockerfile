FROM node:lts-slim

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "start" ]
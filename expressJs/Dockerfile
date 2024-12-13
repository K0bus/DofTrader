FROM node:22-alpine
LABEL authors="K0bus"

WORKDIR /app

COPY ./package*.json ./

RUN npm install

ENTRYPOINT ["npm", "run", "start"]
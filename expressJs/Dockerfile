FROM node:18-alpine
LABEL authors="K0bus"

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8000

ENTRYPOINT ["npm", "run", "start"]
FROM node:22-alpine
LABEL authors="K0bus"

WORKDIR /app

COPY ./package*.json ./

RUN npm install

EXPOSE 8000

ENTRYPOINT ["npm", "run", "dev", "--host"]
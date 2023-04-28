FROM node:18.16.0-alpine3.16

WORKDIR /app/api

COPY --chown=node:node package*.json /app/api

RUN npm install

CMD [ "npm", "run", "start:dev"]

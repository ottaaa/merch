FROM node:18.16.0-alpine3.17

# https://github.com/prisma/prisma/issues/16232#issuecomment-1435728982
RUN apk --update --no-cache add libressl-dev

WORKDIR /app/api

RUN chown node:node .
COPY --chown=node:node package*.json /app/api/

USER node
RUN npm ci
RUN npm run prisma:gen

CMD [ "npm", "run", "start:dev"]

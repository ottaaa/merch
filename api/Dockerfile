FROM node:18.16.0-alpine3.16

# https://github.com/prisma/prisma/issues/16232#issuecomment-1435728982
RUN apk add --update openssl && apk add --update libressl-dev && rm -rf /var/cache/apk/*

WORKDIR /app/api

COPY --chown=node:node package*.json /app/api/
RUN npm install
RUN npm run prisma:gen

USER node
CMD [ "npm", "run", "start:dev"]

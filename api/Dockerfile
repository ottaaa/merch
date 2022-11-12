#FROM positivly/prisma-binaries:latest as prisma
FROM node:18.12.0

WORKDIR /app/api

# https://zenn.dev/ishiki/articles/nest-prisma-docker-m1#error%3A-unknown-binarytarget-linux-arm64-openssl-undefined-and-no-custom-binaries-were-provided
RUN apt-get update && apt-get install -y libc6 openssl bash

RUN npm install -g @nestjs/cli

COPY package*.json /app/api

RUN npm install

CMD [ "npm", "run", "start:dev"]

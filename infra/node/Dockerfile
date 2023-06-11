FROM node:20-alpine3.18

COPY ../../package*.json ./
RUN apk update && \
    apk add bash
RUN npm i -g @nestjs/cli@9.1.2

WORKDIR /api
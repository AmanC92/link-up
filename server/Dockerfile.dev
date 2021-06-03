FROM node:current-alpine

WORKDIR /app/server

COPY package*.json ./
RUN yarn install

COPY . .

CMD ["yarn", "dev"]
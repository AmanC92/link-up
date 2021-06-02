FROM node:current-alpine

WORKDIR /app/client

COPY package*.json ./
RUN yarn install

COPY . .

CMD ["yarn", "start"]
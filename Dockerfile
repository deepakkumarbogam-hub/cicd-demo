FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "-e", "const m = require('./math'); console.log('2+3 =', m.add(2,3));"]

FROM node:12.10.0-alpine

WORKDIR /usr/app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3451

CMD ["node", "index.js"]

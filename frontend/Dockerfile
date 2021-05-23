FROM node:12.10.0

WORKDIR /usr/app/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3450

CMD ["npm", "start"]

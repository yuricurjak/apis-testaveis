FROM node:12.13.1

WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
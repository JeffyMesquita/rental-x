FROM node


WORKDIR /usr/app

COPY package.json ./

RUN npm install && npm run install

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]


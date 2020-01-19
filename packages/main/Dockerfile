FROM node:10

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/node/app

COPY package*.json ./
COPY webpack.config.js ./
COPY src ./src
COPY build ./build
RUN npm install
RUN npm run build

RUN dir .
RUN pwd

CMD [ "npm", "start" ]
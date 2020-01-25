FROM node:10

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/node/app

COPY package*.json ./
COPY rollup.config.js ./
COPY src ./src
COPY build ./build
RUN npm install
RUN npm run build

COPY ./build/index.html ./serve
COPY ./build/localServe.js ./serve
COPY ./node_modules/systemjs/dist/system.js ./serve
COPY /node_modules/es-module-shims/dist/es-module-shims.js ./serve

RUN dir .
RUN pwd

CMD [ "npm", "start" ]
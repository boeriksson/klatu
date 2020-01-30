FROM node:10

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/node/app

COPY package*.json ./
COPY src ./src
COPY rollup.config.js ./
RUN npm install
RUN npm run build
COPY localServe.js ./serve

RUN dir .
RUN pwd

CMD [ "npm", "start" ]
FROM node:10

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/node/app

COPY package*.json ./
COPY rollup.config.js ./
COPY src ./src
RUN npm install
RUN npm run build
COPY ./localServe.js ./serve
COPY ./node_modules/esm-react/src/react.js ./serve
COPY ./node_modules/esm-react/src/react-dom.js ./serve

RUN dir .
RUN pwd

CMD [ "npm", "start" ]
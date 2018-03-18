FROM node:latest

ENV SRC_PATH /usr/src

RUN mkdir -p $SRC_PATH

WORKDIR $SRC_PATH

RUN npm install --global nodemon

RUN npm install --global express

COPY . $SRC_PATH

RUN npm install

CMD ["nodemon", "usr/src/bin/setup"] 
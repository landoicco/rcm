FROM node:20.11.1
WORKDIR /home/node/app
COPY package.json /home/node/app/package.json
RUN npm install
COPY /public /home/node/app/public
COPY /src /home/node/app/src
ENTRYPOINT ["npm", "run", "start"]
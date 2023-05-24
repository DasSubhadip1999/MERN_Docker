FROM node:16

WORKDIR /app

COPY /package*.json ./
RUN npm install --omit=dev


COPY /server /app/server
RUN npm run install-server

COPY /client /app/client
RUN npm run install-client

RUN npm run build-client

USER node

CMD [ "npm", "run", "start:prod" ]

EXPOSE 9000 3000 5173


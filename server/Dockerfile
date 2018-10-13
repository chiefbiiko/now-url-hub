FROM node:10-alpine
WORKDIR /nowurlhub/
COPY package.json /nowurlhub/
RUN npm i --only production
COPY index.js /nowurlhub/
CMD npm start

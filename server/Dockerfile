FROM node:10-alpine
WORKDIR /now-url-hub/
COPY index.js /now-url-hub/
ENV NODE_ENV production HOST 0.0.0.0 PORT 41900
EXPOSE 41900
CMD node ./index.js

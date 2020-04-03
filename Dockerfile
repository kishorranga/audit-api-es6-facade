FROM node:alpine
EXPOSE 3001
WORKDIR /src
COPY . /src
CMD ["node", "server.js"]
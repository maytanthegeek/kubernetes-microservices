FROM node:alpine
EXPOSE 80
WORKDIR /opt
COPY . /opt
RUN npm install && npm run build
CMD [ "npm", "run", "serve" ]
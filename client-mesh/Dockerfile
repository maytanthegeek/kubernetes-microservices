FROM nginx:alpine
EXPOSE 80
WORKDIR /opt
COPY . /opt
RUN npm install && npm run build && mv public /usr/share/nginx/html
CMD [ "npm", "run", "serve" ]
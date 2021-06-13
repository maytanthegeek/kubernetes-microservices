FROM node:lts-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
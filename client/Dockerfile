FROM node:lts-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json ./
RUN npm ci --only=production
COPY --from=builder /usr/src/app .
EXPOSE 80
ENV NODE_ENV=production
CMD ["npm", "run", "serve"]
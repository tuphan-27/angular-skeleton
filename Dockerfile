FROM node:18 AS builder
ARG CONFIGURATION='development'

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build --configuration=$CONFIGURATION

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

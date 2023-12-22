FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.25.3-alpine3.18
COPY --from=node /app/dist/sci-calculator /usr/share/nginx/html
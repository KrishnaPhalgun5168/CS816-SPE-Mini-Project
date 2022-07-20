FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1-alpine
COPY --from=node /app/dist/sci-calculator /usr/share/nginx/html
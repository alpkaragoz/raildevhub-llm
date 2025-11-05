# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

# Copy built files
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom nginx config that supports environment variables
COPY nginx.conf /etc/nginx/nginx.conf

# Set default port
ENV PORT=8080
EXPOSE $PORT

# Start nginx
CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/nginx.conf > /tmp/nginx.conf && exec nginx -c /tmp/nginx.conf -g 'daemon off;'"]
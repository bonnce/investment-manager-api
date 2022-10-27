# Base
FROM node:16-alpine AS builder

# Directory app
WORKDIR /app

# Install all dependencies
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

# Copy app source files and build app
COPY . .
RUN npm run build

# install pm2 to serve the app
RUN npm install pm2 -g
CMD ["pm2-runtime","build/index.js"]
EXPOSE 3000
# When i learn nginx
# Nginx image to serve the app
# FROM nginx:stable-alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# Expose the app port
# EXPOSE 80
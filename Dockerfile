# Base
FROM node:16-alpine

# Directory app
WORKDIR /app

# Install all dependencies
COPY package*.json ./
RUN npm install

# Copy app source files
COPY . .

# Expose the app port
EXPOSE 3000

CMD ["npm", "start"]
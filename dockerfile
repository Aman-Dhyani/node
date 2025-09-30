# Use an official Node.js runtime as base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (better layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of your project files
COPY . .

# Expose the port (must match process.env.PORT)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]

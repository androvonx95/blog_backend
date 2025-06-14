# Start with a light Node.js base image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port your app runs on
EXPOSE 5000

# Run the app
CMD ["npm", "run", "dev"]

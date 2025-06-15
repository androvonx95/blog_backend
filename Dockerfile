# Use lightweight Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose app port
EXPOSE 5000

# Run Prisma generate and start dev server
CMD ["sh", "-c", "npx prisma generate && npm run dev"]

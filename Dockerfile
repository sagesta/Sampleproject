# Stage 1: Build the application
# Use a lightweight Node.js image for building the application
# Use a lightweight Node.js image for building the application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine
# Set the working directory inside the container        
WORKDIR /app
# Copy the built application from the builder stage to t
# Copy the built application from the builder stage to the current stage
COPY --from=builder /app ./
# Expose the port the app runs on
EXPOSE 3000 
# Start the application
CMD ["npx", "next", "start"]

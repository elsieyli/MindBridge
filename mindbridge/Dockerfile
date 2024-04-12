# Start with the official Node.js base image to build the React app
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend app
COPY . .

# Build the application
RUN npm run build

# Now, set up the production Nginx server
FROM nginx:alpine

# Copy the built files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Optional: If you have custom nginx configuration, copy it
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx is listening on
EXPOSE 80

# Start Nginx when the container has launched
CMD ["nginx", "-g", "daemon off;"]
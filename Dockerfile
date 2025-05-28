
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the app for production - React outputs to /app/build by default
RUN npm run build

# Stage 2: Serve the built app with nginx
FROM nginx:alpine

# Copy React build output to nginx's serving directory
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: copy your nginx config if you have a custom one
# If you don't have nginx.conf, comment this line out
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

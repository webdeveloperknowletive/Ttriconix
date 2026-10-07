# ---------- Build stage ----------
FROM node:22.18-alpine AS build

WORKDIR /app

# Install dependencies first for better Docker layer caching
COPY package*.json ./

# Install optional native dependencies required by Rolldown/Vite
RUN npm install --include=optional

# Copy the application source
COPY . .

# Build the Vite production bundle
RUN npm run build


# ---------- Production stage ----------
FROM nginx:1.27-alpine

# Remove default nginx configuration
RUN rm -f /etc/nginx/conf.d/default.conf

# SPA-friendly nginx configuration
RUN printf '%s\n' \
'server {' \
'    listen 80;' \
'    listen [::]:80;' \
'    server_name _;' \
'' \
'    root /usr/share/nginx/html;' \
'    index index.html;' \
'' \
'    location / {' \
'        try_files $uri $uri/ /index.html;' \
'    }' \
'' \
'    location /assets/ {' \
'        try_files $uri =404;' \
'        access_log off;' \
'        expires 1y;' \
'        add_header Cache-Control "public, immutable";' \
'    }' \
'}' \
> /etc/nginx/conf.d/default.conf

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM nginx
COPY dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf

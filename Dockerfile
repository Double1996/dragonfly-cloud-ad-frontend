FROM nginx
RUN  npm run build
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

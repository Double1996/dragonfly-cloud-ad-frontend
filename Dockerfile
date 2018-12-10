FROM nginx:ubuntu
RUN  npm run build
COPY dist /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/nginx.conf

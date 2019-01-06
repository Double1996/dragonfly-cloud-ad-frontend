FROM s2i-nodejs-nginx:latest
WORKDIR /mundo/
COPY package.json /mundo/
RUN npm --registry=https://registry.npm.taobao.org install
COPY app /mundo/app
COPY config /mundo/config
COPY workflow /mundo/workflow
COPY app.js /mundo/app.js

# 启动的egg后端
ENTRYPOINT ["npm","run","start"]

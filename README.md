## 蜻蜓云广告服务端

## 主要功能
- 商家列表
- 展示广告

## HOW TO RUN

1. jenkis 打包
# 启动jenkis 镜像
 docker run -p 8080:8080 -p 50000:50000  -v /home/jenkins-home-docker:/var/jenkins_home -v /
var/run/docker.sock:/var/run/docker.sock  -v /usr/bin/docker:/usr/bin/docker --name j03 -d jenkins

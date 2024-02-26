---
title: 欢迎来到Baiye959的博客！
date: 2024/01/22
categories:
 - other
sticky: 1
---
本站使用[vuepress-theme-reco2.x](https://vuepress-theme-reco.recoluan.com/)主题，参考链接如下：
1. [个人博客搭建遇坑流程のVuePress2 📕](https://juejin.cn/post/7140934570370662407)
2. [主题官网文档](https://vuepress-theme-reco.recoluan.com/docs/theme/frontmatter-home.html)
3. [1小时快速搭建vuepress个人博客【2022重录带源码】](https://www.bilibili.com/video/BV17t41177cr)
4. [【啰里啰嗦】一步步搭建 VuePress 及优化](https://www.bilibili.com/video/BV1vb411m7NY)

建议先看链接4的P1把本地环境搭建好，再跟着链接1和链接2搭建[vuepress-theme-reco2.x](https://vuepress-theme-reco.recoluan.com/)博客，最后跟着链接3把博客部署到云服务器上。
<br/>
这里发现链接3的部署是在CentOS服务器上，而CentOS7不支持[vuepress-theme-reco2.x](https://vuepress-theme-reco.recoluan.com/)所需的node16，先使用下文的应急方案。

## 👾使用感受
优点：
1. 美观简洁、容易上手
2. 使用markdown语法，方便迁移、备份
3. 在本地用vscode写markdown很舒适
4. 稳定、小巧（不像wordpress那样在网站上编写，需要的服务器资源较少）

缺点：
1. 官方文档不够详细，使用人数较少，很多问题无法快速找到答案
2. 添加图片太麻烦
## 🐞使用中发现的问题
1. 热更新问题：如果涉及文件的增加删除（目录上发生改变），要重新执行`yarn dev`才能更新
2. 有时候文章目录不显示...当然这个问题在发布的静态中不会出现，只是本地`yarn dev`的时候不太舒服
3. 标签页图标没说怎么设置

## 🤖待完善
- [ ] 云服务器上的构建尝试
- [ ] webhook推送触发自动构建
- [x] 备案
- [x] ssl证书配置

## 当前应急方案
本站部署暂未完成，应急方案如下：<br/>
1. 在本地（windows）进行构建，推送到github仓库
2. 云服务器（ubuntu20.04）上apache2+crontab定时执行git pull脚本

### 本地（windows）
本地的提交脚本如下，用`bash push.sh`执行：
```bash
#!/bin/bash
# yarn build
git add .
git commit -m "change"
git push
```
这里不知道为什么用脚本执行`yarn build`的时候会报错"Yarn requires Node.js 4.0 or higher to be installed."，直接在终端执行可以成功。<br/>
执行`yarn build`报错"Error: EBUSY: resource busy or locked, unlink 'C:\CodeSpace\vuepress-reco2\.vuepress\dist\assets\app-zpDucuRP.js'"，可以执行`yarn cache clean`解决。

### 云服务器
deploy.sh内容如下：
```bash
#!/bin/bash
cd /root/vuepress-reco2
git pull
cp -rf .vuepress/dist/ ~
rm -r /root/html
mv /root/dist /root/html
cp -rf /root/html /var/www
```
编辑crontab要执行的命令:
```bash
vim /etc/crontab
```
添加以下字段：
```
*/10  *   * * *   root   bash /root/vuepress-reco2/deploy.sh
```
意思是每十分钟执行一次脚本deploy.sh，以下是官方样例：
```
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
```

保存退出后重新载入cron配置：
```
service cron reload
```

开启crontab日记：
```
sudo vim /etc/rsyslog.d/50-default.conf 
```
将cron相关行的注释取消，保存退出，重启rsyslog：
```
sudo service rsyslog restart
```
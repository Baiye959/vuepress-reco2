---
title: 欢迎来到Baiye959的博客！
date: 2024/01/22
categories:
 - other
---
本站使用[vuepress-theme-reco2.x](https://vuepress-theme-reco.recoluan.com/)主题，参考链接如下：
1. [个人博客搭建遇坑流程のVuePress2 📕](https://juejin.cn/post/7140934570370662407)
2. [主题官网文档](https://vuepress-theme-reco.recoluan.com/docs/theme/frontmatter-home.html)
3. [1小时快速搭建vuepress个人博客【2022重录带源码】](https://www.bilibili.com/video/BV17t41177cr)
4. [【啰里啰嗦】一步步搭建 VuePress 及优化](https://www.bilibili.com/video/BV1vb411m7NY)

建议先看链接4的P1把本地环境搭建好，再跟着链接1和链接2搭建[vuepress-theme-reco2.x](https://vuepress-theme-reco.recoluan.com/)博客，最后跟着链接3把博客部署到云服务器上。

本站部署暂未完成，先使用apache2+定时执行git pull脚本解决，deploy.sh内容如下：
```bash
#!/bin/bash
git pull
cp -rf .vuepress/dist/ ~
rm -r ~/html
mv ~/dist ~/html
cp -rf ~/html /var/www
```

本地的提交脚本如下，用`bash push.sh`执行：
```bash
#!/bin/bash
# yarn build
git add .
git commit -m "change"
git push
```
这里不知道为什么用脚本执行`yarn build`的时候会报错"Yarn requires Node.js 4.0 or higher to be installed."，直接在终端执行可以成功。
执行`yarn build`报错"Error: EBUSY: resource busy or locked, unlink 'C:\CodeSpace\vuepress-reco2\.vuepress\dist\assets\app-zpDucuRP.js'"，可以执行`yarn cache clean`解决。
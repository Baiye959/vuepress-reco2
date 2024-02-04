---
title: Git合集
date: 2024/02/04
categories:
 - other
---

## 推荐学习链接

[廖雪峰的Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)

## 项目创建人使用Git

1.  电脑安装Git
    [安装Git - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496)
2.  初始化本地仓库
    [创建版本库 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/896827951938304)
    ```bash
    cd CodeSpace/Flutter/life_coral # 进入想要上传git仓库的代码总目录
    git init # 初始化为本地git仓库
    git status # 查看该目录下文件状态（对比本地git仓库是否有修改、有添加、有删除）
    git add . # 将所有的文件都加入本地git仓库
    git commit -m "init" # 提交更改至本地git仓库（init是本次提交的名称）
    ```
3.  创建远程仓库
    [添加远程库 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440)


    ![](/image/5j0h85a07o_-ozw2mMRCW.png)
4.  将本地仓库和远程仓库连接起来
    [添加远程库 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440)


    ![](/image/ij7aea6480_E34kxNtBEx.png)
    ```bash
    cd CodeSpace/Flutter/life_coral
    git remote add origin https://github.com/Baiye959/life_coral_android.git # 添加联系
    # 请在此处解决令牌问题！
    git branch -M main # 切换到main分支
    git push -u origin main # 推送本地仓库至远程仓库（-u为设置默认推送至origin远程仓库的main分支）
    ```
5.  Git使用
    [时光机穿梭 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/896954074659008)

## 项目贡献者使用Git

1.  电脑安装Git
    [安装Git - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496)
2.  远程仓库代码拉取至本地
    [从远程库克隆 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/898732792973664)
    ```bash
    cd CodeSpace/Flutter # 进入想拷贝代码的父目录（拷贝后代码在CodeSpace/Flutter/life_coral_android）
    git clone https://github.com/Baiye959/life_coral_android.git
    ```
3.  Git使用
    [时光机穿梭 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/896043488029600/896954074659008)

## 令牌问题

### 1. 打开新建令牌页面

打开Github网站 - "Settings" - "Developer Settings" - "Personal access tokens" - "Tokens (classic)" - "Generate new token" - "Generate new token(classic)"

或者点击链接[github官网上的新建令牌](https://github.com/settings/tokens/new)

这样会打开新建令牌页面，如下
![](/image/2024-02-04-225316.png)

### 2. 新建令牌
根据自己的需求设置令牌有效期和权限，常用设置如下

- "Expiration"设为"No expiration"（无到期时间，即永久有效）
- "Select scopes"勾上"repo"（对仓库的操作权限）

### 3. 使用令牌方法

一种是直接把令牌当作原来的密码使用（在新设备加入仓库时）；一种则是直接在远程仓库链接中加入令牌，这样就不需要每次操作输入令牌了，命令如下

```bash
# 本地仓库与远程仓库建立联系时
git remote set-url origin https://<your_token>@github.com/<USERNAME>/<REPO>.git

# 克隆远程仓库到本地时
git clone https://<your_token>@github.com/<USERNAME>/<REPO>.git
```

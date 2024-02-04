---
title: Git合集
date: 2024/02/04
categories:
 - other
---

## 推荐学习链接
[廖雪峰的Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)


## Github网站访问问题

如果网络稳定，访问Github无需其他操作，但会很卡顿。

windows端可以先使用Microsoft Store里的"Watt Toolkit"软件，再访问github里的教程自己搭建[教程仓库链接](https://github.com/bannedbook/fanqiang)


## 双重身份验证问题

请看参考链接，以下内容仅防链接失效[GitHub 2FA认证（双重身份验证）](https://zhuanlan.zhihu.com/p/665527864)


>**注意：**从 2023 年 3 月开始到 2023 年底，GitHub 将逐渐开始要求在 GitHub.com 上贡献代码的所有用户启用一种或多种形式的双因素身份验证 (2FA)。 如果你在符合条件的组中，当选择该组进行注册时，将收到一封通知电子邮件，该电子邮件标志着 45 天的 2FA 注册期的开始，并且你会看到要求你在 GitHub.com 上注册 2FA 的横幅。 如果未收到通知，则表示你不是需要启用 2FA 的组的成员，但我们强烈建议启用 2FA。

访问Github官网受阻/收到邮箱通知，需要进行双重身份验证（[官网文档](https://docs.github.com/zh/enterprise-cloud@latest/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)）


开源免费的Authenticator: 2FA Client，支持多种浏览器。

切到github的设置- 安全页面，展示一个二维码，然后点击扩展上的扫描按钮，用鼠标选中github的二维码，即可添加github帐号。

- 参考教程：[GitHub 2FA认证（双重身份验证）](https://zhuanlan.zhihu.com/p/665527864)
- 开源地址：[Authenticator-Extension/Authenticator: Authenticator generates 2-Step Verification codes in your browser. (github.com)](https://link.zhihu.com/?target=https%3A//github.com/Authenticator-Extension/Authenticator)
- Edge扩展：[Authenticator: 2FA Client - Microsoft Edge Addons](https://link.zhihu.com/?target=https%3A//microsoftedge.microsoft.com/addons/detail/authenticator-2fa-client/ocglkepbibnalbgmbachknglpdipeoio)
- Chrome扩展：[身份验证器 - Chrome 应用商店 (google.com)](https://link.zhihu.com/?target=https%3A//chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai)


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

点击"Generate token"（生成令牌）后一定要保存令牌！！！！！一旦关闭页面就没有办法在Github官网再看到令牌了

### 3. 使用令牌方法

#### 使用方法一

把令牌当作原来的密码使用
```bash
$ git clone https://github.com/username/repo.git
Username: your_username
Password: your_token
```

#### 使用方法二

直接在远程仓库链接中加入令牌，这样就不需要每次操作输入令牌了，命令如下
```bash
# 本地仓库与远程仓库建立联系时
git remote set-url origin https://<your_token>@github.com/<USERNAME>/<REPO>.git

# 克隆远程仓库到本地时
git clone https://<your_token>@github.com/<USERNAME>/<REPO>.git
```


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

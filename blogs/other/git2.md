---
title: Git作业
date: 2024/07/18
categories:
 - other
tags:
 - Git
---
## (一) Git 规范

作业目的：了解git规范能否在按照分支规范开展工作。 &#x20;
作业要求： &#x20;
列举 git的 功能点开发分支，错误修复分支，发布分支，紧急修复分支，发布分支 的命名规范，并且说明从开发到版本发布的一个流程 例如先从dev 切出 feaure/1.0.0-模块-功能点 开发完成自测 …然后…

### 命名规范

#### 主分支 (master)

master 为主分支，用于部署生产环境的分支，master 分支由develop或hotfix分支合并而来，任何时间都不能直接修改其代码，合并到 master 分支的代码，必须保证充分的测试。

#### 标签分支（tag）

tag 为master 分支部署到生产环境后，在master分支节点上标注的一个标签。 &#x20;
tag 的命名规则：x.y.z。依次为主版本号，次版本号，bug修复号。

#### Develop（开发分支）

develop 为开发分支，始终保持最新完成的功能和bug修复后的代码。

#### feature/xxx(功能分支)

开发新功能时，以develop 为基准创建feature分支。 &#x20;
分支命名规则： feature/modules,modules为要新增的功能模块

#### fix/xxx（修复分支)

修复开发过程中发现的问题，以develop为基准创建fix分支 &#x20;
分支命令规则：fix/problem,problem 为要修复的问题。

#### hotfix/xxx（紧急修复分支）

当线上出现紧急问题，需要及时修复，以master分支为基线，创建hotfix分支，问题修复完成并验证后，分别合并到master分支和develop分支。 &#x20;
分支命令规则：hotfix/problem,problem 为要修复的问题。

### 从开发到版本发布的流程

![](/image/image_TERBAUf-Yc.png)

分支说明：master是主分支，当线上出现紧急问题 需要及时修复时 以master分支为基线创建hotfix分支，开发使用develop分支，开发新功能时以develop为基准创建feature分支，准备上线新版本时以develop为基准创建release分支。

1. 开发：以master分支为基线创建develop分支，进行迭代开发。
2. 开发新功能：以develop为基准创建feaure/1.0.0-模块-功能点，开发完成自测，然后合并到最新版本的develop分支。
3. 上线新版本：以develop为基准创建release分支，通过测试迭代，合并到master分支，在master分支打tag标签。
4. 修复线上紧急问题：以master分支为基线创建hotfix分支，修复问题后合并到master分支。

## (二) Git 分支操作

1. 在github 或者 gitee 建立一个仓库git clone到本地建立dev分支，
   ```git
   git clone https://gitee.com/baiye959/git.git
   git branch dev
   git checkout dev
   git branch
   ```
   ![](/image/image_iHN38Css7W.png)
2. 在dev下增加hello.c 文件，将hello.c，添加本地仓库推送远程dev，使用git branch –vv 查看本地dev是否和远程建立连接 如果没有这使用git branch –setup-stream 将本地分支和远程建立关联（注意如果没有建立关联对本地的git push是不成功或者每次都需要 git push指定远程分支），
   ```git
   git add .
   git commit -m "feat: add hello.c"
   git push origin dev
   git branch -vv

   ```
   ![](/image/image_1T78c7y7HS.png)
   ```git
   git branch --set-upstream-to=origin/dev dev
   git branch -vv

   ```
   ![](/image/image_pvsO8LWCoS.png)
3. 从dev checkout一个feature/1.0.0-myfunction 分支对hello.c进行编辑提交到本地仓库，使用git checkout dev 切到 dev分支， 使用 git merge 合并 把 feature分支内容合并到dev
   ```git
   git checkout -b feature/1.0.0-myfunction
   git add hello.c
   git commit -m "fix: fix hello.c"
   git checkout dev
   git merge feature/1.0.0-myfunction

   ```
4. 从 dev checkout 一个 realease分支用于预发布测试
   ```git
   git checkout -b release
   ```
5. 假设测试中发现问题 对release分支checkout 一个 fix/xx 分支 修改hello.c 然后 合并到 release
   ```git
   git checkout -b fix/xx
   git add hello.c
   git commit -m "fix: Fix issue in hello.c"
   git checkout release
   git merge fix/xx

   ```
6. 假定满足发布条件则checkout到master 将release分支合并到master，切换到master对其建立tag ，同时将release合并到dev
   ```git
   git checkout master
   git merge release
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git checkout dev
   git merge release

   ```
7. 假设生产中发现晋级问题则从对应的 tag版本中 checkout一个 hotfix/分支，修改hello.c将代码合并到master 和 dev
   ```git
   git checkout -b hotfix/problem v1.0.0
   git add hello.c
   git commit -m "fix: Hotfix for problem in hello.c"
   git checkout master
   git merge hotfix/problem
   git tag -a v1.0.1 -m "Hotfix version 1.0.1"
   git checkout dev
   git merge hotfix/problem
   ```

## (三) ignore 文件

作业目的： &#x20;
掌握ignore文件配置，避免将非必要文件提交仓库 &#x20;
作业要求：

1. 从 [https://gitee.com/ningde-magic-lamp-network/bosssoft-train-quick-start-demo.git](https://gitee.com/ningde-magic-lamp-network/bosssoft-train-quick-start-demo.git "https://gitee.com/ningde-magic-lamp-network/bosssoft-train-quick-start-demo.git") fork &#x20;

   仓库代码
2. 根据项目的结构重写 ignore

```.ignore
target/
!.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### VS Code ###
.vscode/
```

## (四) IDEA Git 操作

1. 查看日志

   Git > Show History

   ![](/image/image_bYvetat6bE.png)
2. 比较指定的 两个分支，例如合并前我们可能比较小伙伴的分支

   Git > Show diff

   ![](/image/image_UsesErfNVb.png)
3. git add . 到暂存区的内容退回

   Git > Reset HEAD

   ![](/image/image_2bB3EwoRcm.png)
4. Commit的内容回退

   历史记录中，选择想撤销的commit记录右键，点击Undo Commit

   ![](/image/image_PbAV7V2idE.png)
5. push后内容回退

   历史记录中，选择想回退到的历史版本右键，点击Reset Current Branch to Here

   ![](/image/image_n4S8B6GbKN.png)

   ![](/image/image_dRTJzAWrth.png)

   回退模式说明：
   - Soft选项：在选择的回退点之后的所有更改将会保留并被git追踪下来。这就意味着可以在 Version Control 的 Local Changes 面板中查看到它们。
   - Mixed模式：在选择的回退点之后的所有更改将会保留但不会被git追踪下来。
   - Hard模式：在选择的回退点之后的所有更改都会被丢弃。（包括被追踪的和已提交的文件）
   - Keep模式：在选择的回退点之后的所有已提交的更改会被丢弃。但本地修改的会被完整地保存下来。


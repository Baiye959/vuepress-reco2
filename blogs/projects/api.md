---
title: API接口平台
date: 2024/03/26
categories:
 - 项目
---
## 一、项目简介
提供接口供开发者调用的平台：管理员可以编辑、发布、删除接口，统计分析各接口调用情况（可视化）；用户可以注册登录并开通接口调用权限、浏览接口、在线调试，还能使用**客户端 SDK** 轻松调用接口。

## 二、需求分析
背景：
1. 前端开发需要用到后台接口
2. 使用现成的系统的功能(参考[聚合数据-API接口开放平台](https://www.juhe.cn/))

做一个API接口平台：
1. 管理员可以对接口信息进行增删改查
2. 用户可以访问前台，查看接口信息

其他要求：
1. 防止攻击（安全性）
2. 不能随便调用（限制、开通）
3. 统计调用次数
4. 计费
5. 流量保护
6. API接入

![](/image/2024032601.png)

## 三、技术路线
### 前端
- React 18
- Ant Design Pro5.X 脚手架
- Ant Design & Procomponents 组件库
- Umi4 前端框架
- OpenAPI 前端代码生成
- 数据可视化

### 后端
- Java Spring Boot框架
- MySQL数据库
- MyBatis-Plus及MyBatis X自动生成
- API签名认证(Http调用)
- Spring Boot Starter(SDK开发)
- Dubbo分布式(RPC、Nacos)
- Spring Cloud Gateway微服务网关
- Swagger+Knife4j接口文档生成
- Hutool、Apache Common Utils、Gson等工具库

## 四、项目过程记录
[1. 项目初始化](/blogs/projects/api1.md)<br/>

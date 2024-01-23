---
title: 一、准备学习环境
date: 2024/01/24
categories:
 - Linux基础使用方法
---
## 使用vmware安装CentOS 7

[CentOS7镜像](https://mirrors.aliyun.com/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso)

选“典型配置”新建虚拟机

安装、进入CentOS系统后，配置网卡
```
echo ONBOOT=yes >/etc/sysconf ig/network-scripts/ifcfg-ens33
```

配置好网卡后，重启虚拟机

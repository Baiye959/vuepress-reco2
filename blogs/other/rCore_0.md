---
title: rCore | 第零章：操作系统概述
date: 2024/07/26
categories:
 - other
tags:
 - 操作系统
---
::: info
[rCore-Tutorial-B0ok-v33.6.0-alpha.1文档](https://deathwish5.github.io/rCore-Tutorial-Book-v3/chapter0/index.html)
:::

选择使用VMware虚拟机种使用虚拟磁盘文件的方式进行本地OS开发环境配置。

> 如果你打算使用 VMware 安装虚拟机的话，我们已经配置好了一个能直接运行 rCore-Tutorial-v3 的 Ubuntu18.04 镜像，它是一个 vmdk 格式的虚拟磁盘文件，只需要在 VMware 中新建一台虚拟机，在设置虚拟磁盘的时候选择它即可。[百度网盘链接](https://pan.baidu.com/s/1JzKjWivy9GZKK8rc3WMJ0g "百度网盘链接") （提取码 x5mf ）或者 [清华云盘链接](https://cloud.tsinghua.edu.cn/d/a9b7b0a1b4724c3f9c66/ "清华云盘链接") 。已经创建好用户 oslab ，密码为一个空格。它已经安装了中文输入法和 Markdown 编辑器 Typora 还有作为 Rust 集成开发环境的 Visual Studio Code，能够更容易完成实验并撰写实验报告。如果想要使用 VMWare 安装 openEuler 虚拟机的话，可以在 [openEuler官网](https://repo.openeuler.org/openEuler-20.03-LTS-SP2/ISO/ "openEuler官网") 下载 ISO 自行安装，接着需要参考网络上的一些教程配置网络和安装图形界面。
>
> 注：目前的虚拟机镜像基于ubuntu-18.04和QEMU-5.0，还没更新到ubuntu-20.04和QEMU-7.0

使用虚拟磁盘文件新建虚拟机：[\[图文\]VMWARE虚拟机如何打开.VMDK格式的磁盘映像 – 蓝点网 (landiannews.com)](https://www.landiannews.com/archives/51945.html "\[图文]VMWARE虚拟机如何打开.VMDK格式的磁盘映像 – 蓝点网 (landiannews.com)")

虚拟机无网络问题：[https://www.cnblogs.com/startnight/articles/13569831.html](https://www.cnblogs.com/startnight/articles/13569831.html "https://www.cnblogs.com/startnight/articles/13569831.html")

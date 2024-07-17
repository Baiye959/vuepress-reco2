---
title: Rust实现VINS算法
date: 2024/07/09
categories:
 - 项目
---
## 运行现有代码
1. 安装Rust
[安装 - Rust 程序设计语言 简体中文版](https://kaisery.github.io/trpl-zh-cn/ch01-01-installation.html)
```bash
rustc --version
```
2. 下载数据集
[Vicon Room数据集](https://projects.asl.ethz.ch/datasets/doku.php?id=kmavvisualinertialdatasets)

## 解读现有代码
```bash
C:.
├─.vscode
├─configs
├─src
│  ├─camera
│  ├─dataset
│  ├─pose_estimator
│  └─save
└─target
    └─debug
        ├─build
        ├─deps
        ├─examples
        └─incremental
```

### camera
```bash
└─camera
   ├─mod.rs
   └─pinhole_camera.rs
```

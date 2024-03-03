---
title: MIT6.S081 环境配置
date: 2024/03/02
categories:
 - MIT6.S081
---
## 项目介绍
Mit6.s081是麻省理工学院面向本科生的操作系统课程，其课程实验是在教学用操作系统xv6上进行扩展和优化。
Xv6操作系统源代码只有一万余行，并且相对清晰和模块化，每个lab都带有自动评测功能，非常适合用于实践操作系统知识。

## 相关链接
- [官网](https://pdos.csail.mit.edu/6.S081/2020/schedule.html)
- 课程视频见官网 b站也有[搬运](https://www.bilibili.com/video/BV19k4y1C7kA)
- [xv6参考书翻译](https://xv6.dgs.zone/tranlate_books/book-riscv-rev1/summary.html)
- 实验指导见官网顶栏的"labs"
- [实验指导翻译](https://xv6.dgs.zone/labs/use_git/git1.html)

## 配置环境
- [编译环境 官方文档](https://pdos.csail.mit.edu/6.S081/2020/tools.html)
- [MIT6.S081 Ubuntu22.04 WSL2实验环境配置](https://zhuanlan.zhihu.com/p/537461426)

在powershell管理员中执行`wsl --install`安装wsl

打开wsl，执行以下命令
```bash
sudo apt update
sudo apt upgrade

sudo apt-get install git build-essential gdb-multiarch gcc-riscv64-linux-gnu binutils-riscv64-linux-gnu 

wget https://download.qemu.org/qemu-5.1.0.tar.xz
tar xf qemu-5.1.0.tar.xz
cd qemu-5.1.0
sudo apt install libglib2.0-dev libpixman-1-dev
./configure --disable-kvm --disable-werror --prefix=/usr/local --target-list="riscv64-softmmu"
make
sudo make install

cd ..
git clone git://g.csail.mit.edu/xv6-labs-2020

cd xv6-labs-2020/
git checkout util
make qemu
```
按上述流程走下来，终端最后出现下图就成功了
![](/image/2024030302.png)

`Ctrl+a x`退出

## 常用命令
- 运行`make gemu`
- 退出`Ctrl-a x`(先按Ctrl+a,再按x)
- 测试是否完成lab `make grade`
- 测试是否完成lab的子任务`make GRADEFLAGS=<lab name> grade`
    - 如在util lab中，想测试是否完成子任务sleep,运行`make GRADEFLAGS=sleep grade`
- gdb调试
    - 一个终端执行`make CPUS=1 gemu-gdb`
    - 在另一个终端执行`riscv64-unknown-elf-gdb kernel/kernel`
    - 如果报错bash:riscv64-unknown-elf-gdb:command not found可参考[此文](http://t.csdnimg.cn/UnDIa)解决
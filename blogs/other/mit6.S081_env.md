---
title: MIT6.S081 环境配置
date: 2024/03/02
categories:
 - other
tags:
 - 操作系统
---
## 项目介绍
MIT6.s081 是麻省理工学院面向本科生的操作系统课程，其课程实验是在教学用操作系统xv6上进行扩展和优化。
Xv6操作系统源代码只有一万余行，并且相对清晰和模块化，每个lab都带有自动评测功能，非常适合用于实践操作系统知识。

## 相关链接
- [官网](https://pdos.csail.mit.edu/6.S081/2020/schedule.html)
- 课程视频见官网 b站也有[搬运](https://www.bilibili.com/video/BV19k4y1C7kA)
- [xv6参考书翻译](https://xv6.dgs.zone/tranlate_books/book-riscv-rev1/summary.html)
- 实验指导见官网顶栏的"labs"
- [实验指导翻译](https://xv6.dgs.zone/labs/use_git/git1.html)

## 配置环境
- [编译环境 官方文档](https://pdos.csail.mit.edu/6.S081/2020/tools.html)

使用vmware16pro安装虚拟机，ubuntu20.04
```bash
sudo apt update
sudo apt upgrade

sudo apt-get install git build-essential gdb-multiarch qemu-system-misc gcc-riscv64-linux-gnu binutils-riscv64-linux-gnu
sudo apt-get remove qemu-system-misc
sudo apt-get install qemu-system-misc=1:4.2-3ubuntu6
sudo apt install gcc-riscv64-unknown-elf

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

## gdb调试参考文修改
```bash
sudo apt-get install libncurses5-dev python python-dev texinfo libreadline-dev
sudo apt install libgmp-dev

wget https://mirrors.tuna.tsinghua.edu.cn/gnu/gdb/gdb-9.2.tar.gz
tar -zxvf gdb-9.2.tar.gz
cd gdb-9.2
mkdir build
cd build
./configure --prefix=/usr/local --with-python=/usr/bin/python --target=riscv64-unknown-elf --enable-tui=yes
make clean
make -j$(nproc)
make install
```

开一个终端
```bash
cd xv6-labs-2020
make CPUS=1 qemu-gdb
```
开另一个终端
```bash
riscv64-unknown-elf-gdb
```
此时出现提示如下，需要在文件`/home/xv6/.gdbinit`里加上`add-auto-load-safe-path /home/xv6/xv6-labs-2020/.gdbinit`
![](/image/2024030401.png)

```bash
vim /home/xv6/.gdbinit
# 在文件中添加add-auto-load-safe-path /home/xv6/xv6-labs-2020/.gdbinit
```

再次尝试，成功
![](/image/2024030402.png)
---
title: Nachos | 实验一 体验Nachos下的并发程序设计
date: 2024/03/16
categories:
 - other
tags:
 - Nachos
---
::: info
[Nachos英文文档.pdf](/file/Nachos英文文档.pdf)<br/>
:::

## 安装nachos

1. 安装nachos<br/>
[nachos-linux64.tar.gz](/file/nachos-linux64.tar.gz)
```bash
tar -zxf nachos-linux64.tar.gz
rm nachos-linux64.tar.gz
cd nachos-3.4/
cd code/
make
```

2. 测试环境
```bash
cd threads/
./nachos
```

## 实现双向有序链表
实现双向链表不难，可以参考`code/threads`目录里的`list.cc`和`list.h`，主要是熟悉 UNIX编程环境、make与makefile的用法和c++编程

这里遇到一个奇怪的报错，解决方法参考链接[[nachos]stdlib.h和sysdep.h冲突了？？](http://t.csdnimg.cn/SvuqF)，在`#include "utility.h"`之前要先`#include <iostream>`

![](/image/2024032411.png)

测试双向链表的`main.cc`如下
```bash
#include <iostream>
#include "hello.h"
#include "dllist.h"
#include "utility.h"
#include "system.h"


// External functions used by this file

extern void SortInsertN(DLList::DLList *L, int n);
extern void RemoveN(DLList::DLList *L, int n);


int
main(int argc, char **argv)
{
  DLList *L = new DLList();
  SortInsertN(L, 10);
  RemoveN(L, 5);
    return(0);      // Not reached...
}

```

测试成功
![](/image/2024032412.png)

## 体验nachos线程系统
### nachos源代码阅读

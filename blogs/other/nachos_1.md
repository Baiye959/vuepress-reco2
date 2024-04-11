---
title: Nachos | 实验一 体验Nachos下的并发程序设计
date: 2024/03/16
categories:
 - other
tags:
 - Nachos
sticky: 4
---
::: info
[Nachos英文文档.pdf](/file/Nachos英文文档.pdf)<br/>
:::

## 一、熟悉nachos

安装

```bash
tar -zxf nachos-linux64.tar.gz
rm nachos-linux64.tar.gz
cd nachos-3.4/
cd code/
make

```

测试环境

```bash
cd threads/
./nachos
```

![](/image/image_5Gx6v2URnf.png)

写个hello熟悉一下环境

```cpp
// hello.cc
#include "hello.h"
#include "system.h"

void Hello(void) {
  printf("Hello Nachos!\n");
}


// hello.h
#ifndef HELLO_H
#define HELLO_H

extern void Hello(void);

#endif // HELLO_H


// main.cc
#include "hello.h"

int main(...) {
  ...
#ifdef HELLO_H
  Hello();
#endif
}


// Makefile.common
THREAD_H = ...\
  ../threads/hello.h
  
THREAD_C = ...\
  ../threads/hello.cc
  
THREAD_O = ... hello.o

```

测试

```bash
make depend
make
./nachos
```

![](/image/image_UxOC_68UV8.png)

## 二、实现双向有序链表

实现双向链表不难，可以参考`code/threads`目录里的`list.cc`和`list.h`，主要是熟悉 UNIX编程环境、make与makefile的用法和c++编程

这里遇到一个奇怪的报错，解决方法参考链接[http://t.csdnimg.cn/SvuqF](http://t.csdnimg.cn/SvuqF "http://t.csdnimg.cn/SvuqF")，在`#include "utility.h"`之前要先`#include <iostream>`

![](/image/image_Yxt9phBaNa.png)

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
  return(0);
}

```

测试成功

![](/image/image_z3OC40oDpp.png)

## 三、体验nachos线程系统

### 阅读源代码，理解nachos现有线程机制

1. code/threads/main.cc

   该模块是整个 Nachos 系统的入口，它分析了 Nachos 的命令行参数，根据不同的选项进行不同功能的初始化设置。
2. code/threads/threadtest.cc
   这是一个简单的线程实验的测试用例。用于指导我们如何对线程的修改进行测试的。

   testnum：测试号，对应相应的测试函数。


   SimpleThread()：一个5次循环的程序，每次循环中都让出CPU，让其他就绪的线程执行。


   ThreadTest1()：一个测试方法，创建两个线程，让他们都执行SimpleThread()方法，使这两个线程可以交替执行。


   ThreadTest()：可以看做一个总控程序，根据main函数传过来testnum参数值来执行不同的测试程序。例如，当testnum==1时，就执行ThreadTest1()。

3. code/threads/thread.h

   用于管理线程的数据结构。如线程控制块、线程的基本方法都在这个文件中被定义。

   定义了Nachos线程的四种状态：
   - `JUST_CREATED`
   - `RUNNING`
   - `READY`
   - `BLOCKED`
4. code/threads/thread.cc
   实现了用于管理线程事务的具体方法。主要有一个构造函数和四种操作：Fork 、Finish、Yield、Sleep。

   `Thread()`：构造函数，初始化一个新的Thread。

   `Fork(VoidFunctionPtr func,int arg):func`，新线程运行的函数；分配一块固定大小的内存作为线程的堆栈，在栈顶放入 ThreadRoot 的地址。

   `Finish()`：并不是直接收回线程的数据结构和堆栈，因为我们仍在这个堆栈上运行这个线程。做法是将threadToBeDestroyed的值设为当前线程，使得Scheduler的Run()可以调用销毁程序，当我们这个程序退出上下文时，将其销毁。

   `Yield()`：用于本线程放弃处理机。

   `Sleep()`：可以使当前线程转入阻塞态，并放弃 CPU， 直到被另一个线程唤醒，把它放回就绪线程队列



### 实现线程并发

#### 测试双向有序链表

将双向有序链表的测试放进`threadtest.cc`

```cpp
void DllistTest0(void) // 测试双向有序链表
{
    DEBUG('t', "Entering DllistTest0");
    SortInsertN(L, 5);
    RemoveN(L, 3);
}

void
ThreadTest()
{
    switch (testnum) {
    case 0:
        DllistTest0();
        break;
    default:
      printf("No test specified.\n");
      break;
    }
}

```

![](/image/image_VGWY3BT0jG.png)

#### 添加参数

定义以下参数：

| 参数标记 | 对应变量名         | 参数含义             |
| ---- | ------------- | ---------------- |
| -q   | int testnum   | 测试编号，用于进入不同的测试分支 |
| -t   | int threadNum | 创建的并行线程数量        |
| -n   | int oprNum    | 链表插入并删除的节点数量     |

```cpp
// threadtest.cc
int testnum = 1; // 测试编号
int threadNum = 1; // 创建的并行线程数量
int oprNum = 3; // 链表插入并删除的节点数量


// main.cc
#ifdef THREADS
extern int testnum; // 测试编号
extern int threadNum; // 创建的并行线程数量
extern int oprNum; // 链表插入并删除的节点数量
#endif

int
main(int argc, char **argv)
{
  int argCount;      // the number of arguments for a particular command

  DEBUG('t', "Entering main");
  (void) Initialize(argc, argv);

  for (argc--, argv++; argc > 0; argc -= argCount, argv += argCount) { // 跳过程序名开始处理参数
#ifdef THREADS
    argCount = 2;
    switch (argv[0][1]) {
      case 'q':
        testnum = atoi(argv[1]);
        break;
      case 't':
        threadNum = atoi(argv[1]);
        break;
      case 'n':
        oprNum = atoi(argv[1]);
        break;
      default:
        break;
    }
#endif

    if (!strcmp(*argv, "-z")){ // print copyright
      argCount = 1;
      printf (copyright);
      continue;
    }
  }

#ifdef THREADS
    ThreadTest();
#endif

    currentThread->Finish();
    return(0);
}

```

#### 添加测试启动函数（类似ThreadTest1函数）

```cpp
// threadtest.cc
char * getName(int i) {
    switch (i) {
        case 0: return "forked thread 0";
        case 1: return "forked thread 1";
        case 2: return "forked thread 2";
        case 3: return "forked thread 3";
        case 4: return "forked thread 4";
        case 5: return "forked thread 5";
        case 6: return "forked thread 6";
        case 7: return "forked thread 7";
        case 8: return "forked thread 8";
        case 9: return "forked thread 9";
        case 10: return "forked thread 10";
        default: return "forked thread 00";
    }
}

void toDllistTest(VoidFunctionPtr func) {
    DEBUG('t', "Entering toDllistTest");
    Thread *t;
    for (int i = 0; i < threadNum; i++)
    {
        t = new Thread(getName(i + 1));
        t->Fork(func, i + 1);
    }
}

```



### 并发可能引起的问题

#### 问题一：共享内存——并行执行时一个线程可能删除／修改其余线程插入的元素

```cpp
void DllistTest1(int which)
{
    printf("Inserting items in thread %d\n", which);
    genItem2List(list, oprNum);
    currentThread->Yield();
    printf("Removing items in thread %d\n", which);
    delItemFromList(list, oprNum);
}

```

![](/image/image_D5QqK7Q3ox.png)

线程1插入节点→强制切换至线程2→线程2插入节点→切换至线程1→线程1删除节点→由于线程1和线程2共用一个链表，此时线程1删除的节点有可能是线程2插入的节点。

#### 问题二：覆盖——并行的线程在链表同一个地方插入元素，导致其中一个被覆盖

测试

```cpp
// threadtest.cc
void DllistTest2(int which) { // 覆盖
    DEBUG('t', "Entering DllistTest2");
    SortInsertN2(L, oprNum, which);
}

// dllist-driver.cc
extern void SortInsertN2(DLList::DLList *L, int n, int which) {
    static int seed = 0;
    
    for (int i = 0; i < n; i++) {
        seed ++;
        std::srand(time(0) + seed);
        int random = std::rand();
        std::printf("which %d insert %d: \n", which, random);
        L->SortedInsert2(NULL, random, which);
        L->printDLL();
    }
    std::printf("\n");
}

// dllist.c
// 覆盖测试用
void
DLList::SortedInsert2(void *item, int sortKey, int which) {
    DLLElement *element = new DLLElement(item, sortKey);
    DLLElement *ptr; // keep track

    if (IsEmpty()) { // ddlist is empty
        first = element;
        last = element;
    } else if (sortKey < first->key) { // Insert to the beginning
        element->next = first;
        currentThread->Yield();
        first->prev = element;
        first = element;
    } else { // sort from smallest to biggest
        for (ptr = first; ptr->next != NULL; ptr = ptr->next) {
            if (sortKey < ptr->next->key) { // Smaller than the next node, inserted behind the current node
                element->next = ptr->next;
                currentThread->Yield();
                element->prev = ptr;
                element->prev->next = element;
                element->next->prev = element;
                return;
            }
        }
        // bigger than all nodes, insert in the end
        last->next = element;
        currentThread->Yield();
        element->prev = last;
        last = element;
    }
}

```

运行结果

![](/image/image_jkAl-Xy9Ge.png)

线程1准备向链表中某一位置插入数据→线程2 准备向链表同一位置插入数据→线程1插入→线程2插入。线程1的插入被线程2的插入覆盖。

#### 问题三：非法删除——并行的线程准备删除链表中同一个元素，导致段错误

```cpp
// threadtest.cc
void DllistTest3(int which) { // 非法删除
    DEBUG('t', "Entering DllistTest3");
    SortInsertN(L, oprNum);
    RemoveN2(L, oprNum, which);
}

// dllist-driver.cc
extern void RemoveN2(DLList::DLList *L, int n, int which) {
    int *keyPtr = new int();
    for (int i = 0; i < n; i++) {
        if (L->Remove2(keyPtr) == NULL)
            break;
        std::printf("which %d delete %d: \n", which, *keyPtr);
        L->printDLL();
    }
    std::printf("\n");
}

// dllist.c
// 非法删除测试用
void *
DLList::Remove2(int *keyPtr) {
    DLLElement *element = first;

    if (IsEmpty())
        return NULL;
    
    if (first == last) { // dllist had one item, now has none 
        first = NULL;
        last = NULL;
    } else {
        first = first->next;
        currentThread->Yield();
        first->prev = NULL;
    }
    if (keyPtr != NULL)
        *keyPtr = element->key;
    delete element;
    return keyPtr;
}

```

![](/image/image_HpuB1beoEy.png)

线程1准备删除链表中的某个数据→线程2准备删除链表中的同一个数据→线程2删除数据→线程1删除数据。线程1访问到野指针或空指针，发生段错误。

#### 问题四：断链——并行的线程在同一个地方插入元素，导致元素指针发生不一致

```cpp
// threadtest.cc
void DllistTest4(int which) { // 断链测试
    DEBUG('t', "Entering DllistTest4");
    SortInsertN3(L, oprNum, which);
}

// dllist-driver.cc
extern void SortInsertN3(DLList::DLList *L, int n, int which) { // 断链测试用
    static int seed = 0;
    
    for (int i = 0; i < n; i++) {
        seed ++;
        std::srand(time(0) + seed);
        int random = std::rand() % 100;
        std::printf("which %d insert %d: \n", which, random);
        L->SortedInsert3(NULL, random);
        L->printDLL();
    }
    std::printf("\n");
}

// dllist.c
// 断链测试用
void
DLList::SortedInsert3(void *item, int sortKey) {
    DLLElement *element = new DLLElement(item, sortKey);
    DLLElement *ptr; // keep track

    if (IsEmpty()) { // ddlist is empty
        first = element;
        last = element;
    } else if (sortKey < first->key) { // Insert to the beginning
        element->next = first;
        currentThread->Yield();
        first->prev = element;
        first = element;
    } else { // sort from smallest to biggest
        for (ptr = first; ptr->next != NULL; ptr = ptr->next) {
            if (sortKey < ptr->next->key) { // Smaller than the next node, inserted behind the current node
                element->next = ptr->next;
                element->prev = ptr;
                element->prev->next = element;
                element->next->prev = element;
                return;
            }
        }
        // bigger than all nodes, insert in the end
        last->next = element;
        element->prev = last;
        last = element;
    }
}

```

![](/image/image_sJMV2KZtez.png)

线程2要往开头（记为开头a）插入数据e1→强制切换至线程1→线程1向开头a插入若干个元素→切回线程2→线程2向开头a插入数据e1。此时线程1在开头a前插入的元素链断了，开头只插入了数据e1。

#### 问题五：乱序插入——并行的线程在同一个地方插入元素，导致元素位置颠倒，键值大的在前

```cpp
// threadtest.cc
void DllistTest5(int which) { // 断链测试
    DEBUG('t', "Entering DllistTest5");
    SortInsertN4(L, oprNum, which);
}

// dllist-driver.cc
extern void SortInsertN4(DLList::DLList *L, int n, int which) { // 乱序插入测试用
    static int seed = 0;
    
    for (int i = 0; i < n; i++) {
        seed ++;
        std::srand(time(0) + seed);
        int random = std::rand() % 100;
        std::printf("which %d insert %d: \n", which, random);
        L->SortedInsert4(NULL, random);
        L->printDLL();
    }
    std::printf("\n");
}

// dllist.c
// 乱序插入测试用
void
DLList::SortedInsert4(void *item, int sortKey) {
    DLLElement *element = new DLLElement(item, sortKey);
    DLLElement *ptr; // keep track

    if (IsEmpty()) { // ddlist is empty
        first = element;
        last = element;
    } else if (sortKey < first->key) { // Insert to the beginning
        currentThread->Yield();
        element->next = first;
        first->prev = element;
        first = element;
    } else { // sort from smallest to biggest
        for (ptr = first; ptr->next != NULL; ptr = ptr->next) {
            if (sortKey < ptr->next->key) { // Smaller than the next node, inserted behind the current node
                // currentThread->Yield();
                element->next = ptr->next;
                element->prev = ptr;
                element->prev->next = element;
                element->next->prev = element;
                return;
            }
        }
        // bigger than all nodes, insert in the end
        last->next = element;
        element->prev = last;
        last = element;
    }
}
```

![](/image/image_2tGgLWoHXl.png)

线程2准备插入较大元素e2→强制切换至线程1→线程1在相同位置插入较小元素e1→线程2在元素e1前插入了元素e2。较大元素e2在较小元素e1之前，插入顺序错误。
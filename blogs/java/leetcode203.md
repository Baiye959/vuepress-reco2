---
title: LeetCode-203-移除链表元素 | 链表1
date: 2024/02/28
categories:
 - 算法
---
## 203. 移除链表元素

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 <b>新的头节点</b> 。

示例 1：
![](/image/2024022801.jpg)
```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```
示例 2：
```
输入：head = [], val = 1
输出：[]
```
示例 3：
```
输入：head = [7,7,7,7], val = 7
输出：[]
```

提示：
```
列表中的节点数目在范围 [0, 10^4] 内
1 <= Node.val <= 50
0 <= val <= 50
```

## 解题思路

首先了解一下java中的链表实现，猜测是下面这样（注意Java中没有指针，访问结点内容得用'.'）：
```java
class ListNode<E>{                //类名 ：Java类就是一种自定义的数据结构
    E val;                        //数据 ：节点数据 
    ListNode<E> next;             //对象 ：引用下一个节点对象。在Java中没有指针的概念，Java中的引用和C语言的指针类似
    
    ListNode(E val){              //构造方法 ：构造方法和类名相同   
        this.val=val;             //把接收的参数赋值给当前类的val变量
    }
    ListNode(E val, ListNode<E> next){
        this.val=val;
        this.next=next;
    }
}
```


---
title: 代码随想录 | 第二章链表总结
date: 2024/03/12
categories:
 - 算法
---
::: tip
<b>考察链表的操作其实就是考察指针的操作</b>

[203.移除链表元素](/blogs/algorithm/leetcode203.md)<br/>
[707.设计链表](/blogs/algorithm/leetcode707.md)<br/>
[206.反转链表](/blogs/algorithm/leetcode206.md)<br/>
[24. 两两交换链表中的节点](/blogs/algorithm/leetcode24.md)<br/>
[19. 删除链表的倒数第N个节点](/blogs/algorithm/leetcode19.md)<br/>
[面试题 02.07. 链表相交](/blogs/algorithm/leetcode160.md)<br/>
[142. 环形链表II](/blogs/algorithm/leetcode142.md)
:::

## Java中的链表定义
```java
public class ListNode {
    // 结点的值
    int val;
    // 下一个结点
    ListNode next;

    // 节点的构造函数(无参)
    public ListNode() {
    }
    // 节点的构造函数(有一个参数)
    public ListNode(int val) {
        this.val = val;
    }
    // 节点的构造函数(有两个参数)
    public ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
```

## 数组和链表的性能分析
![](/image/2024031201.png)

数组在定义的时候，长度就是固定的，如果想改动数组的长度，就需要重新定义一个新的数组。

链表的长度可以是不固定的，并且可以动态增删， 适合数据量不固定，频繁增删，较少查询的场景。

## 链表经典题目
- [203.移除链表元素](/blogs/algorithm/leetcode203.md)：虚拟头节点
- [707.设计链表](/blogs/algorithm/leetcode707.md)：虚拟头节点，链表的基本操作
- [206.反转链表](/blogs/algorithm/leetcode206.md)：虚拟头节点，迭代法、递归法
- [24. 两两交换链表中的节点](/blogs/algorithm/leetcode24.md)：虚拟头节点
- [19. 删除链表的倒数第N个节点](/blogs/algorithm/leetcode19.md)：虚拟头节点，双指针法
- [面试题 02.07. 链表相交](/blogs/algorithm/leetcode160.md)：双指针
- [142. 环形链表II](/blogs/algorithm/leetcode142.md)：双指针
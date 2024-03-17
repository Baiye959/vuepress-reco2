---
title: 代码随想录 | 第五章双指针总结
date: 2024/03/16
categories:
 - 算法
---
::: tip
**除了链表一些题目一定要使用双指针，其他题目都是使用双指针来提高效率。**

[27.移除元素](/blogs/algorithm/leetcode27.md)<br/>
[344.反转字符串](/blogs/algorithm/leetcode344.md)<br/>
[卡码网：54.替换数字](/blogs/algorithm/kama54.md)<br/>
[151.翻转字符串里的单词](/blogs/algorithm/leetcode151.md)<br/>
[206.反转链表](/blogs/algorithm/leetcode206.md)<br/>
[19. 删除链表的倒数第N个节点](/blogs/algorithm/leetcode19.md)<br/>
[面试题 02.07. 链表相交](/blogs/algorithm/leetcode160.md)<br/>
[142. 环形链表II](/blogs/algorithm/leetcode142.md)<br/>
[15.三数之和](/blogs/algorithm/leetcode15.md)<br/>
[18.四数之和](/blogs/algorithm/leetcode18.md)
:::

## 数组
题目举例：
- [27.移除元素](/blogs/algorithm/leetcode27.md)
- [15.三数之和](/blogs/algorithm/leetcode15.md)
- [18.四数之和](/blogs/algorithm/leetcode18.md)

使用双指针法展现出了效率的优势：**通过两个指针在一个for循环下完成两个for循环的工作**。

## 字符串
题目举例：
- [344.反转字符串](/blogs/algorithm/leetcode344.md)：数组/字符串反转类问题，一指针在开头、一指针在末尾，两个指针同时向中间移动并交换元素
- [卡码网：54.替换数字](/blogs/algorithm/kama54.md)：数组/字符串填充类问题，先给数组扩容带填充后的大小，然后从后向前进行操作
- [151.翻转字符串里的单词](/blogs/algorithm/leetcode151.md)：数组/字符串删除类问题，一指针指向不保留元素、一指针指向保留元素，保留元素赋值给不保留位

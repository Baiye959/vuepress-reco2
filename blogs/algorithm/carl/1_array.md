---
title: 算法系列一 | 第一章数组总结
date: 2024/03/12
categories:
 - 算法
---
::: tip
<b>代码随想录中的数组题包含四种算法思想：二分法、双指针法、滑动窗口、模拟行为</b>

[704. 二分查找](/blogs/algorithm/leetcode704.md)<br/>
[27. 移除元素](/blogs/algorithm/leetcode27.md)<br/>
[977. 有序数组的平方](/blogs/algorithm/leetcode977.md)<br/>
[209. 长度最小的子数组](/blogs/algorithm/leetcode209.md)<br/>
[59. 螺旋矩阵II](/blogs/algorithm/leetcode59.md)
:::

## 二分法
- [704. 二分查找](/blogs/algorithm/leetcode704.md)

循环不变量原则：只有在循环中坚持对区间的定义，才能清楚的把握循环中的各种细节。

## 双指针法
- [27. 移除元素](/blogs/algorithm/leetcode27.md)
- [977. 有序数组的平方](/blogs/algorithm/leetcode977.md)

双指针法（快慢指针法）：通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。

## 滑动窗口
- [209. 长度最小的子数组](/blogs/algorithm/leetcode209.md)

滑动窗口的精妙之处在于根据当前子序列和大小的情况，不断调节子序列的起始位置。从而将O(n^2)的暴力解法降为O(n)。

## 模拟行为
- [59. 螺旋矩阵II](/blogs/algorithm/leetcode59.md)

循环不变量原则：只有在循环中坚持对区间的定义，才能清楚的把握循环中的各种细节。

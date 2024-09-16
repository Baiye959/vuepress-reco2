---
title: 算法系列一 | 第六章栈与队列总结
date: 2024/03/17
categories:
 - 算法
---
::: tip
**使用抽象程度越高的语言，越要重视其底层实现**

[232.用栈实现队列](/blogs/algorithm/leetcode232.md)<br/>
[225.用队列实现栈](/blogs/algorithm/leetcode225.md)<br/>
[20.有效的括号](/blogs/algorithm/leetcode20.md)<br/>
[1047.删除字符串中的所有相邻重复项](/blogs/algorithm/leetcode1047.md)<br/>
[150.逆波兰表达式求值](/blogs/algorithm/leetcode150.md)<br/>
[239.滑动窗口最大值](/blogs/algorithm/leetcode239.md)<br/>
[347.前 K 个高频元素](/blogs/algorithm/leetcode347.md)
:::

## 栈与队列的基础操作
题目举例：
- [232.用栈实现队列](/blogs/algorithm/leetcode232.md)
- [225.用队列实现栈](/blogs/algorithm/leetcode225.md)

## 匹配/消除问题
题目举例：
- [20.有效的括号](/blogs/algorithm/leetcode20.md)：匹配
- [1047.删除字符串中的所有相邻重复项](/blogs/algorithm/leetcode1047.md)：匹配并消除相邻元素，双指针
- [150.逆波兰表达式求值](/blogs/algorithm/leetcode150.md)：消除栈顶的两个数字

## 队列扩展
### 单调队列
题目举例：
- [239.滑动窗口最大值](/blogs/algorithm/leetcode239.md)：单调递增队列维护窗口属性

### 优先队列
题目举例：
- [347.前 K 个高频元素](/blogs/algorithm/leetcode347.md)：利用优先队列实现小顶堆

---
title: 代码随想录 | 第四章字符串总结
date: 2024/03/16
categories:
 - 算法
---
::: tip
<b>字符串类类型的题目，往往想法比较简单，但实现起来不容易，主要考点是双指针和KMP算法。</b>

[344.反转字符串](/blogs/algorithm/leetcode344.md)<br/>
[541.反转字符串II](/blogs/algorithm/leetcode541.md)<br/>
[卡码网：54.替换数字](/blogs/algorithm/kama54.md)<br/>
[151.翻转字符串里的单词](/blogs/algorithm/leetcode151.md)<br/>
[卡码网：55.右旋转字符串](/blogs/algorithm/kama55.md)<br/>
[28.实现strStr()](/blogs/algorithm/leetcode28.md)<br/>
[459.重复的子字符串](/blogs/algorithm/leetcode459.md)
:::

## 要不要使用库函数
打基础的时候，不要太迷恋库函数，尤其是不理解库函数底层实现时，很难分析算法的时间复杂度。

如果题目关键的部分直接用库函数就可以解决，不要使用库函数。<br/>
如果库函数仅仅是解题过程中的一小部分，并且已经很清楚这个库函数的内部实现原理的话，可以考虑使用库函数。

## 双指针法
题目举例：
- [344.反转字符串](/blogs/algorithm/leetcode344.md)
- [541.反转字符串II](/blogs/algorithm/leetcode541.md)
- [卡码网：54.替换数字](/blogs/algorithm/kama54.md)
- [151.翻转字符串里的单词](/blogs/algorithm/leetcode151.md)
- [卡码网：55.右旋转字符串](/blogs/algorithm/kama55.md)

## KMP
**当出现字符串不匹配时，可以知道一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配。**

使用KMP可以解决两类经典问题：
- 匹配问题：[28.实现strStr()](/blogs/algorithm/leetcode28.md)
- 重复子串问题：[459.重复的子字符串](/blogs/algorithm/leetcode459.md)

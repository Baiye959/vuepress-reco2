---
title: 代码随想录 | 第八章回溯算法总结
date: 2024/04/10
categories:
 - 算法
---
::: tip
**回溯是递归的副产品，只要有递归就会有回溯。for循环横向遍历，递归纵向遍历，回溯不断调整结果集**

[77.组合](/blogs/algorithm/leetcode77.md)<br/>
[216.组合总和III](/blogs/algorithm/leetcode216.md)<br/>
[17.电话号码的字母组合](/blogs/algorithm/leetcode17.md)<br/>
[39.组合总和](/blogs/algorithm/leetcode39.md)<br/>
[40.组合总和II](/blogs/algorithm/leetcode40.md)<br/>
[131.分割回文串](/blogs/algorithm/leetcode131.md)<br/>
[93.复原IP地址](/blogs/algorithm/leetcode93.md)<br/>
[78.子集](/blogs/algorithm/leetcode78.md)<br/>
[90.子集II](/blogs/algorithm/leetcode90.md)<br/>
[491.递增子序列](/blogs/algorithm/leetcode491.md)<br/>
[46.全排列](/blogs/algorithm/leetcode46.md)<br/>
[47.全排列 II](/blogs/algorithm/leetcode47.md)<br/>
[332.重新安排行程](/blogs/algorithm/leetcode332.md)<br/>
[51.N皇后](/blogs/algorithm/leetcode51.md)<br/>
[37.解数独](/blogs/algorithm/leetcode37.md)
:::

## 组合问题：N个数里面按一定规则找出k个数的集合
题目举例：
- [77.组合](/blogs/algorithm/leetcode77.md)：单集合求组合
- [216.组合总和III](/blogs/algorithm/leetcode216.md)：单集合求组合+剪枝
- [17.电话号码的字母组合](/blogs/algorithm/leetcode17.md)：多集合求组合
- [39.组合总和](/blogs/algorithm/leetcode39.md)：元素可重复使用
- [40.组合总和II](/blogs/algorithm/leetcode40.md)：元素值重复+去重

## 排列问题：N个数按一定规则全排列，有几种排列方式
排列问题的不同：
- 每层都是从0开始搜索而不是startIndex
- 需要used数组记录path里放了哪些元素

题目举例：
- [46.全排列](/blogs/algorithm/leetcode46.md)
- [47.全排列 II](/blogs/algorithm/leetcode47.md)：去重

## 切割问题：一个字符串按一定规则有几种切割方式
使用`startIndex`，标记上次切割的位置为`startIndex-1`

题目举例：
- [131.分割回文串](/blogs/algorithm/leetcode131.md)
- [93.复原IP地址](/blogs/algorithm/leetcode93.md)

## 子集问题：一个N个数的集合里有多少符合条件的子集
可以使用set针对同一父节点本层去重，但子集问题一定要排序。

题目举例
- [78.子集](/blogs/algorithm/leetcode78.md)
- [90.子集II](/blogs/algorithm/leetcode90.md)
- [491.递增子序列](/blogs/algorithm/leetcode491.md)

## 棋盘问题：N皇后，解数独等等
- [51.N皇后](/blogs/algorithm/leetcode51.md)
- [37.解数独](/blogs/algorithm/leetcode37.md)

## 图论扩展
- [332.重新安排行程](/blogs/algorithm/leetcode332.md)
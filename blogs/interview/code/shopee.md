---
title: 虾皮shopee笔试 0924
date: 2024/09/24
categories:
 - 就业
password: 0e0d738a29f36c6ad4b53a10ec010489
---
::: info
2024.9.24 10:00~12:00
两部分选择题+三道程序题
:::

## 选择题
考基础知识，设计操作系统、数据库、Java基础、计算机网络、计算机组成原理

## 程序题
### 求最大奇约数和
- 奇数的最大奇约数 = 本身
- 偶数的最大奇约数 = 本身除以二后的最大奇约数

设f(n)为n的最大奇约数和，则f(n)为比n小的所有奇数和 + f(n/2)<br/>
注：f(n/2)——比n小的所有偶数除以2后求最大奇约数和

### 接雨水
使用双指针求法
1. 当前位雨水 = min(左侧最高, 右侧最高) - 当前位高度
2. 若 左指针处左侧最高 比 右指针处右侧最高 小，则左指针位的min(左侧最高, 右侧最高) = 左侧最高，可以求出左指针位雨水
3. 求出某指针处雨水后向中移动，循环往复直至左右指针相遇，可求得最终结果

### 模拟题
无印象，注意数组初始化要自己置为0
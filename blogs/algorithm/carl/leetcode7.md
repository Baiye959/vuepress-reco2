---
title: LeetCode-7-整数反转
date: 2024/02/02
categories:
 - 算法
---
## 7. 整数反转
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。

<b>假设环境不允许存储 64 位整数（有符号或无符号）。</b>

示例 1：
```
输入：x = 123
输出：321
```
示例 2：
```
输入：x = -123
输出：-321
```
示例 3：
```
输入：x = 120
输出：21
```
示例 4：
```
输入：x = 0
输出：0
```

提示：
`-2^31 <= x <= 2^31 - 1`

## 解题思路

用long存结果，就不用处理在每个循环都询问是否溢出
```java
class Solution {
    public int reverse(int x) {
        long ret = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            ret = ret*10 + pop;
        }

        if (ret > Integer.MAX_VALUE || ret < Integer.MIN_VALUE) return 0;
        return (int)ret;
    }
}
```
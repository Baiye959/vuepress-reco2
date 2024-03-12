---
title: LeetCode-541-反转字符串 II | 字符串2
date: 2024/03/12
categories:
 - 算法
---
## 541. 反转字符串 II
给定一个字符串 `s` 和一个整数 `k`，从字符串开头算起，每计数至 `2k` 个字符，就反转这 `2k` 字符中的前 `k` 个字符。

如果剩余字符少于 `k` 个，则将剩余字符全部反转。
如果剩余字符小于 `2k` 但大于或等于 `k` 个，则反转前 `k` 个字符，其余字符保持原样。
 

示例 1：
```
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```
示例 2：
```
输入：s = "abcd", k = 2
输出："bacd"
```

提示：
```
1 <= s.length <= 10^4
s 仅由小写英文组成
1 <= k <= 10^4
```

## Java基础补充（Java中的length和length()）
### 数组的length属性
数组是一个容器对象，数组被创建后长度不能改变，length可以被视为数组的属性

### 字符串的length()方法
字符串为什么要用方法，而不是像数组那样直接返回属性？看看源码
```java
    /**
     * Returns the length of this string.
     * The length is equal to the number of Unicode
     * code units in the string.
     */
    public int length() {
        return value.length;
    }
```
`length()` 方法返回的是字符数组 `value` 的长度（`length`），`value` 本身是 `private` 的，因此很有必要为 `String` 类提供一个 `public` 级别的方法来供外部访问字符的长度。

## 解题思路
本题是上一题（344. 反转字符串）加了反转规则的版本，只要注意Java中String不能修改，要先用toCharArray()转换为字符数组。

```java
class Solution {
    public String reverseStr(String s, int k) {
        char[] chs = s.toCharArray();
        for (int i = 0; i < chs.length; i += 2 * k) {
            if (i + k <= chs.length) {
                reverse(chs, i, i + k - 1);
            } else {
                reverse(chs, i, chs.length - 1);
            }
        }
        return new String(chs);
    }

    public void reverse(char[] chs, int l, int r) {
        while (l < r) {
            char t = chs[l];
            chs[l] = chs[r];
            chs[r] = t;
            l ++; r --;
        }
    }
}
```
---
title: LeetCode-242-有效的字母异位词 | 哈希表1
date: 2024/03/02
categories:
 - 算法
---
给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的字母异位词。

注意：若 `s` 和 `t` 中每个字符出现的次数都相同，则称 `s` 和 `t` 互为字母异位词。

示例 1:
```
输入: s = "anagram", t = "nagaram"
输出: true
```
示例 2:
```
输入: s = "rat", t = "car"
输出: false
```

提示:
```
1 <= s.length, t.length <= 5 * 10^4
s 和 t 仅包含小写字母
```

进阶: 如果输入字符串包含 `unicode` 字符怎么办？你能否调整你的解法来应对这种情况？

## 解题思路

::: warning
对于哈希表类题目来说，常用的数据结构有三种：数组、set、map，这里放个warning，刷完哈希表类再总结一下
:::

对这道题，第一想法是比较两个字符串中出现的字母和对应次数。而字母只有26个，范围小且有限，选用数组来实现哈希表。<br/>
一次循环遍历字符串1，一次循环遍历字符串2，分别统计每个字母出现次数，最后比较两个数组，一致则是字母异位词。

然后对这个思路进行优化：可以只使用一个数组，字符串1加数组值、字符串2减数组值，最后数组元素的值均为0即是字母异位词；前两次循环可以合在一起。

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        int[] cnt = new int[26];
        for (int i=0; i<s.length(); i++) {
            cnt[s.charAt(i) - 'a'] ++;
            cnt[t.charAt(i) - 'a'] --;
        }

        for (int count: cnt) {
            if (count != 0) return false;
        }
        return true;
    }
}
```
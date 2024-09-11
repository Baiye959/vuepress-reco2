---
title: LeetCode-383-赎金信 | 哈希表6
date: 2024/03/11
categories:
 - 算法
---
## 383. 赎金信
给你两个字符串：`ransomNote` 和 `magazine` ，判断 `ransomNote` 能不能由 `magazine` 里面的字符构成。

如果可以，返回 `true` ；否则返回 `false` 。

`magazine` 中的每个字符只能在 `ransomNote` 中使用一次。


示例 1：
```
输入：ransomNote = "a", magazine = "b"
输出：false
```
示例 2：
```
输入：ransomNote = "aa", magazine = "ab"
输出：false
```
示例 3：
```
输入：ransomNote = "aa", magazine = "aab"
输出：true
```

提示：
```
1 <= ransomNote.length, magazine.length <= 10^5
ransomNote 和 magazine 由小写英文字母组成
```

## java基础补充
> error: for-each not applicable to expression type
>
> required: array or java.lang.Iterable
>
> found:    String

String类型不能直接用于for-each循环，要先用toCharArray()转换成字符数组类型，如：
```java
for (char c :"abc".toCharArray()) {
    
}
```

## 解题思路
“元素有没有在集合中”类题目，用哈希表解。<br/>
题目中元素只有小写英语字母，范围小且集中，用数组来当哈希表。<br/>
注意题目中“`magazine` 中的每个字符只能在 `ransomNote` 中使用一次。”，需要记录`magezine`中字符出现的次数，也就是数组下标对应小写英语字母、数组元素值对应出现次数。

```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if (ransomNote.length() > magazine.length()) {
            return false;
        }

        int[] hash = new int[26];
        for (char c : magazine.toCharArray()) {
            hash[c - 'a'] ++;
        }
        for (char c : ransomNote.toCharArray()) {
            hash[c - 'a'] --;
            if (hash[c - 'a'] < 0) {
                return false;
            }
        }

        return true;    
    }
}
```
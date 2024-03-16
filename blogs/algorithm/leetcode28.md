---
title: LeetCode-28-找出字符串中第一个匹配项的下标 | 字符串6
date: 2024/03/16
categories:
 - 算法
---
## 28. 找出字符串中第一个匹配项的下标
给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串的第一个匹配项的下标（下标从 `0` 开始）。如果 `needle` 不是 `haystack` 的一部分，则返回  `-1` 。


示例 1：
```
输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
```
示例 2：
```
输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
```

提示：
```
1 <= haystack.length, needle.length <= 10^4
haystack 和 needle 仅由小写英文字符组成
```

## KMP算法
### KMP细节
#### 1. 文本串和模式串是什么？
文本串和模式串：要在文本串aabaabaafa中查找是否出现过一个模式串aabaaf。

#### 2. 前缀和后缀是什么？
前缀是指**不包含最后一个字符**的所有以第一个字符开头的连续子串。<br/>
后缀是指**不包含第一个字符**的所有以最后一个字符结尾的连续子串。

#### 3. 什么是前缀表？
记录下标i之前（包括i）的字符串中，有多大长度的相同前缀后缀（记录最长的）。

#### 4. 为什么用前缀表更快？
以下图为例，模式串已经匹配到aabaa，其中有一对相同的前后缀aa和aa。此时后面的f不匹配了，说明需要从头开始匹配，有了前缀表我们就知道可以不用从头，而是从aabaaf的b开始匹配（因为前后缀aa和aa相同，后缀aa已经比较过，那在下一轮的比较里就可以把它当作前缀aa使用，也就是直接从b开始比较就行）
![](/image/2024031610.png)

#### 5. 前缀表与next数组
很多KMP算法的实现都是使用next数组来做回退操作，那么next数组与前缀表有什么关系呢？<br/>
next数组就可以是前缀表，但是有的实现都是把前缀表统一减一（右移一位，初始位置为-1）之后作为next数组。<br/>
其实这并不涉及到KMP的原理，而是两种具体实现，next数组既可以就是前缀表，也可以是前缀表统一减一（右移一位，初始位置为-1）。

#### 6. 怎么求前缀表/构造Next数组？
**构造next数组其实就是计算模式串s的前缀表的过程。** 主要有如下三步：<br/>
(1) 初始化<br/>
(2) 处理前后缀不相同的情况<br/>
(3) 处理前后缀相同的情况

### 构造Next数组
采用next数组为前缀表统一减一的写法。

定义一个函数`getNext`来构造next数组，函数参数为指向next数组的指针和模式串s。
```java
public void getNext(int[] next, String s) {

}
```

#### (1) 初始化：
定义两个指针i和j，j指向前缀末尾位置，i指向后缀末尾位置。<br/>
然后还要对next数组进行初始化赋值，如下：
```java
int j = -1;
next[0] = j;
```
`next[i]`表示 i（包括i）之前最长相等的前后缀长度（其实就是j）<br/>
所以初始化`next[0]`为j。

#### (2) 处理前后缀不相同的情况
因为`j`初始化为-1、`next[0]`已经初始化，所以`i`就从1开始，进行`s[i]`与`s[j+1]`的比较。

所以遍历模式串`s`的循环下标`i`要从1开始，代码如下：
```java
for (int i = 1; i < s.length(); i++) {

}
```

如果`s[i]`与`s[j+1]`不相同，也就是遇到前后缀末尾不相同的情况，就要向前回退。<br/>
怎么回退呢？<br/>
`next[j]`就是记录着j（包括j）之前的子串的相同前后缀的长度。<br/>
那么 `s[i]` 与 `s[j+1]` 不相同，就要找 `j+1` 前一个元素在next数组里的值（就是`next[j]`）。<br/>
所以，处理前后缀不相同的情况代码如下：
```java
while (j >= 0 && s.charAt(i) != s.charAt(j+1)) { // 前后缀不相同
    j = next[j]; // 向前回退
}
```

#### (3) 处理前后缀相同的情况
如果 `s[i]` 与 `s[j + 1]` 相同，那么就同时向后移动i和j说明找到了相同的前后缀，同时还要将j（前缀的长度）赋给`next[i]`, 因为`next[i]`要记录相同前后缀的长度。<br/>
代码如下：
```java
if(s.charAt(i) == s.charAt(j+1)){ // 找到相同的前后缀
    j++;
}
next[i] = j;
```

最后整体构建next数组的函数代码如下：
```java
public void getNext(int[] next, String s){
    int j = -1;
    next[0] = j;
    for (int i = 1; i < s.length(); i++){ // 注意i从1开始
        while (j >= 0 && s.charAt(i) != s.charAt(j+1)) { // 前后缀不相同了
            j = next[j]; // 向前回退
        }

        if (s.charAt(i) == s.charAt(j+1)){ // 找到相同的前后缀
            j++;
        }
        next[i] = j; // 将j（前缀的长度）赋给next[i]
    }
}
```

## 解题思路
KMP算法，本题中`haystack`为文本串、`needle`为模式串。<br/>
先求模式串的前缀表，再比对两个字符串，比对时利用前缀表快速进入下一次比对。

```java
class Solution {
    public void getNext(int[] next, String s){
        int j = -1;
        next[0] = j;
        for (int i = 1; i < s.length(); i++){ // 注意i从1开始
            while (j >= 0 && s.charAt(i) != s.charAt(j+1)) { // 前后缀不相同了
                j = next[j]; // 向前回退
            }

            if (s.charAt(i) == s.charAt(j+1)){ // 找到相同的前后缀
                j++;
            }
            next[i] = j; // 将j（前缀的长度）赋给next[i]
        }
    }
    public int strStr(String haystack, String needle) {
        if (needle.length() == 0) {
            return 0;
        }

        int[] next = new int[needle.length()];
        getNext(next, needle);
        int j = -1; // 因为next数组里记录的起始位置为-1
        for(int i = 0; i < haystack.length(); i++) { // 注意i就从0开始
            while( j >= 0 && haystack.charAt(i) != needle.charAt(j+1)){ // 不匹配
                j = next[j]; // j 寻找之前匹配的位置
            }
            if(haystack.charAt(i) == needle.charAt(j+1)){ // 匹配，j和i同时向后移动
                j++; // i的增加在for循环里
            }
            if(j == needle.length() - 1){ // 文本串s里出现了模式串t
                return (i - needle.length() + 1);
            }
        }

        return -1;
    }
}
```
---
title: LeetCode-151-反转字符串中的单词 | 字符串4
date: 2024/03/12
categories:
 - 算法
---
给你一个字符串 `s` ，请你反转字符串中 单词 的顺序。

单词 是由非空格字符组成的字符串。`s` 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

注意：输入字符串 `s` 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

 

示例 1：
```
输入：s = "the sky is blue"
输出："blue is sky the"
```
示例 2：
```
输入：s = "  hello world  "
输出："world hello"
解释：反转后的字符串中不能存在前导空格和尾随空格。
```
示例 3：
```
输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
```

提示：
```
1 <= s.length <= 10^4
s 包含英文大小写字母、数字和空格 ' '
s 中 至少存在一个 单词
```

进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 `O(1)` 额外空间复杂度的 原地 解法。

## 解题思路
解题思路如下：
1. 移除多余空格
2. 将整个字符串反转
3. 将每个单词反转

举个例子，源字符串为："the sky is blue "
1. 移除多余空格 : "the sky is blue"
2. 字符串反转："eulb si yks eht"
3. 单词反转："blue is sky the"

这样我们就完成了翻转字符串里的单词。

先去除多余的空格，这一步可以用快慢指针，思路同[27. 移除元素](/blogs/algorithm/leetcode27.md)<br/>
字符串反转和单词反转都可以用双指针来解决。

```java
class Solution {
    public String reverseWords(String s) {
        char chs[] = s.toCharArray();
        
        // 去除空格
        int slow = 0;
        for (int fast = 0; fast < chs.length; fast ++) {
            if (chs[fast] == ' ') {
                continue;
            }
            if (slow != 0) {
                chs[slow ++] = ' ';
            }
            while (fast < chs.length && chs[fast] != ' ') {
                chs[slow ++] = chs[fast ++];
            }
        }
        chs = Arrays.copyOf(chs, slow);
        
        // 反转字符串
        reverse(chs, 0, slow - 1);

        // 反转单词
        int start = 0;
        for (int end = 0; end <= slow; end++) {
            if (end == slow || chs[end] == ' ') {
                reverse(chs, start, end - 1);
                start = end + 1;
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
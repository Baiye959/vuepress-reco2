---
title: LeetCode-1047-删除字符串中的所有相邻重复项 | 栈与队列4
date: 2024/03/17
categories:
 - 算法
---
## 1047. 删除字符串中的所有相邻重复项
给出由小写字母组成的字符串 `S`，**重复项删除操作**会选择两个相邻且相同的字母，并删除它们。

在 `S` 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。


示例：
```
输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
```

提示：
```
1 <= S.length <= 20000
S 仅由小写英文字母组成。
```

## 解题思路
跟上一题[20.有效的括号](/blogs/algorithm/leetcode20.md)很像，都是消除匹配元素。<br/>
本题是对字符串操作，为了避免多余的字符串处理，直接在字符串上模拟栈。<br/>
这里在字符串上模拟栈，不可避免要做删除操作，可以用双指针法优化效率，参考题目：
- [27.移除元素](/blogs/algorithm/leetcode27.md)
- [151.翻转字符串里的单词](/blogs/algorithm/leetcode151.md)：数组/字符串删除类问题，一指针指向不保留元素、一指针指向保留元素，保留元素赋值给不保留位

```java
class Solution {
    public String removeDuplicates(String s) {
        char[] chs = s.toCharArray();
        int slow = 0;
        for (int fast = 0; fast < chs.length; fast++) {
            chs[slow] = chs[fast];
            if (slow > 0 && chs[slow] == chs[slow - 1]) { // slow检测、fast覆盖
                slow --;
            } else {
                slow ++;
            }
        }
        return new String(chs, 0, slow);
    }
}
```
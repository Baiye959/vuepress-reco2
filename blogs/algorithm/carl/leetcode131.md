---
title: LeetCode-131-分割回文串 | 回溯6
date: 2024/04/02
categories:
 - 算法
---
## 131. 分割回文串
给你一个字符串 `s`，请你将 `s` 分割成一些子串，使每个子串都是 **回文串** 。返回 `s` 所有可能的分割方案。<br/>
回文串：向前和向后读都相同的字符串。


示例 1：
```
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```
示例 2：
```
输入：s = "a"
输出：[["a"]]
```

提示：
```
1 <= s.length <= 16
s 仅由小写英文字母组成
```

## 解题思路
回溯分割，较难

参数startIndex：本轮从startIndex开始分割，上次分割板在startIndex-1后。
```java
class Solution {
    List<List<String>> ret = new LinkedList<>();
    List<String> path = new LinkedList<>();
    public List<List<String>> partition(String s) {
        backtracking(s, 0);
        return ret;
    }
    public void backtracking(String s, int startIndex) {
        if (startIndex == s.length()) {
            ret.add(new LinkedList(path));
            return;
        }
        for (int i = startIndex; i < s.length(); i++) {
            if (!isPalindrome(s, startIndex, i)) {
                continue;
            }
            path.add(s.substring(startIndex, i + 1));
            backtracking(s, i + 1);
            path.remove(path.size() - 1);
        }
    }
    public boolean isPalindrome(String s, int l, int r) { // 左闭右闭判断回文
        while (l < r) {
            if (s.charAt(l) != s.charAt(r)) {
                return false;
            }
            l ++; r --;
        }
        return true;
    }
}
```
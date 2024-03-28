---
title: LeetCode-17-电话号码的字母组合 | 回溯3
date: 2024/03/27
categories:
 - 算法
---
## 17. 电话号码的字母组合
[leetcode17链接](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

## Java基础补充（StringBuilder）
```java
StringBuilder sb = new StringBuilder(10);
sb.append("Runoob..");
sb.insert(5, "Java");
sb.delete(5, 7);
sb.deleteCharAt(5);
char charAt(int index);
int length();
String substring(int start,[int end]);
String toString();
```

## 解题思路
回溯，注意这里是多个集合的组合，跟之前的题不同。

```java
class Solution {
    List<String> ret = new LinkedList<>();
    StringBuilder sb = new StringBuilder();
    public List<String> letterCombinations(String digits) {
        String[] numString = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        if (digits.length() != 0) backtracking(digits, numString, 0);
        return ret;
    }
    public void backtracking(String digits, String[] numString, int k) { // 本轮处理digits[k]
        if (k == digits.length()) {
            ret.add(sb.toString());
            return;
        }
        String cur = numString[digits.charAt(k) - '0'];
        for (int i = 0; i < cur.length(); i++) {
            sb.append(cur.charAt(i));
            backtracking(digits, numString, k + 1);
            sb.deleteCharAt(sb.length()-1);
        }
    }
}
```
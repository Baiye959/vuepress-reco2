---
title: LeetCode-17-电话号码的字母组合 | 回溯3
date: 2024/03/27
categories:
 - 算法
---
## 17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
![](/image/2024040101.png)


示例 1：
```
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```
示例 2：
```
输入：digits = ""
输出：[]
```
示例 3：
```
输入：digits = "2"
输出：["a","b","c"]
```

提示：
```
0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。
```

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
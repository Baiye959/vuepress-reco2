---
title: LeetCode-20-有效的括号 | 栈与队列3
date: 2024/03/17
categories:
 - 算法
---
## 20. 有效的括号
给定一个只包括 `(`，`)`，`{`，`}`，`[`，`]` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。
 

示例 1：
```
输入：s = "()"
输出：true
```
示例 2：
```
输入：s = "()[]{}"
输出：true
```
示例 3：
```
输入：s = "(]"
输出：false
```

提示：
```
1 <= s.length <= 10^4
s 仅由括号 '()[]{}' 组成
```

## 解题思路
无效括号其实只有三种情况：
1. 左括号多了
2. 右括号多了
3. 括号不匹配

有效的括号应该是右括号跟最近的左括号匹配，也就是先进先出，用栈存储。<br/>
这里有一个减少代码量的小技巧：遇到左括号时，存进对应的右括号，这样遇到右括号就可以直接和弹出元素比较了。

```java
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push(')');
            } else if (c == '[') {
                stack.push(']');
            } else if (c == '{') {
                stack.push('}');
            } else if (stack.empty() == true || stack.pop() != c) {
                return false;
            }
        }
        if (stack.empty() != true) {
            return false;
        } else {
            return true;
        }
    }
}
```
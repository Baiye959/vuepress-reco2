---
title: LeetCode-93-复原 IP 地址 | 回溯7
date: 2024/04/09
categories:
 - 算法
---
::: info
- [力扣题目链接](https://leetcode.cn/problems/restore-ip-addresses)
- [题目链接/文章讲解](https://programmercarl.com/0093.%E5%A4%8D%E5%8E%9FIP%E5%9C%B0%E5%9D%80.html)
- [视频讲解](https://www.bilibili.com/video/BV1XP4y1U73i/)
:::

## Java基础补充（字符串转数字）
```java
Integer num1 = new Integer(str);
int num2 = Integer.parseInt(str);
Integer num3 = Integer.valueOf(str);

double d = Double.parseDouble(s); 
float f = Float.parseFloat(s);
```

## 解题思路
回溯，分割型问题
```java
class Solution {
    List<String> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<String> restoreIpAddresses(String s) {
        backtracking(s, 1, 0);
        return ret;
    }

    public void backtracking(String s, int k, int startIndex) { // 正在处理第k个ip位，从s.charAt(startIndex)开始
        if (s.length() - startIndex - 1 > (4 - k + 1) * 3) return;
        if (k > 4) {
            if (startIndex == s.length() && path.size() == 4) { // 符合条件
                ret.add(path.get(0) + "." + path.get(1) + "." + path.get(2) + "." + path.get(3));
            }
            return;
        } 
        if (startIndex == s.length()) return;
        if (s.charAt(startIndex) == '0') {
            path.add(0);
            backtracking(s, k + 1, startIndex + 1);
            path.remove(path.size() - 1);
            return;
        }
        
        int end = Math.min(startIndex + 3, s.length());
        for (int i = startIndex + 1; i <= end; i++) {
            int curNum = Integer.parseInt(s.substring(startIndex, i));
            if (curNum > 255) return;
            path.add(curNum);
            backtracking(s, k + 1, i);
            path.remove(path.size() - 1);
        }
    }
}
```
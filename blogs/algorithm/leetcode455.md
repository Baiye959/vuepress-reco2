---
title: LeetCode-455-分发饼干 | 贪心算法1
date: 2024/04/10
categories:
 - 算法
---
::: info
- [力扣题目链接](https://leetcode.cn/problems/assign-cookies/)
- [题目链接/文章讲解](https://programmercarl.com/0455.%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2.html)
:::

## 解题思路
两种思路：
1. 用最大的饼干满足大胃口：充分利用饼干尺寸喂饱一个
2. 用小饼干满足最小胃口：喂饱尽可能多的小孩

这里写第一种思路，一个for循环一个自减<br/>
根据饼干尺寸挑选胃口，因此胃口用for循环、可以continue跳过，饼干尺寸用自减、找到了再下一个
```java
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int j = s.length - 1, cnt = 0;
        for (int i = g.length - 1; i >= 0 && j >= 0; i--) {
            if (s[j] >= g[i]) {
                cnt ++;
                j --;
            }
        }
        return cnt;
    }
}
```
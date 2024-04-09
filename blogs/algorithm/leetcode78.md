---
title: LeetCode-78-子集 | 回溯8
date: 2024/04/09
categories:
 - 算法
---
::: info
- [力扣题目链接](https://leetcode.cn/problems/subsets)
- [题目链接/文章讲解](https://programmercarl.com/0078.%E5%AD%90%E9%9B%86.html)
- [视频讲解](https://www.bilibili.com/video/BV1U84y1q7Ci)
:::

## 解题思路
简单回溯，根据模板来就好
```java
class Solution {
    List<List<Integer>> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> subsets(int[] nums) {
        backtracking(nums, 0);
        return ret;
    }

    public void backtracking(int[] nums, int k) { // 正在处理nums[k]
        if (k == nums.length) {
            ret.add(new LinkedList(path));
            return;
        }

        path.add(nums[k]);
        backtracking(nums, k + 1);
        path.remove(path.size() - 1);

        backtracking(nums, k + 1);
    }
}
```
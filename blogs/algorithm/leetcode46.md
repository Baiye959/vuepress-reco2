---
title: LeetCode-46-全排列 | 回溯11
date: 2024/04/10
categories:
 - 算法
---
::: info
- [力扣题目链接](https://leetcode.cn/problems/permutations/)
- [题目链接/文章讲解](https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html)
- [视频讲解](https://www.bilibili.com/video/BV19v4y1S79W)
:::

## 解题思路
回溯全排列，本层全排序需排除在path中的元素。<br/>
本题`-10 <= nums[i] <= 10`，且nums中元素互不相同，用数组实现哈希表。

```java
class Solution {
    List<List<Integer>> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> permute(int[] nums) {
        boolean[] used = new boolean[25]; // -10~10 -> 0~20
        backtracking(nums, used);
        return ret;
    }

    public void backtracking(int[] nums, boolean[] used) {
        if (path.size() == nums.length) {
            ret.add(new LinkedList(path));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (used[nums[i] + 10]) continue;
            
            path.add(nums[i]);
            used[nums[i] + 10] = true;
            backtracking(nums, used);
            path.removeLast();
            used[nums[i] + 10] = false;
        }
    }
}
```
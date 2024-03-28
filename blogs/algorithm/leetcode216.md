---
title: LeetCode-216-组合总和 III | 回溯2
date: 2024/03/27
categories:
 - 算法
---
## 216. 组合总和 III
[leetcode216链接](https://leetcode.cn/problems/combination-sum-iii/description/)

## 解题思路
回溯+剪枝，除了借元素个数进行剪枝，还可以看能否达到目标和（元素为正数），这里先计算后缀和。

```java
class Solution {
    List<List<Integer>> paths = new LinkedList<>();
    List<Integer> path = new LinkedList<>();

    public List<List<Integer>> combinationSum3(int k, int n) {
        int[] remainsum = new int[11];
        remainsum[10] = 0;
        for (int i = 9; i >= 1; i--) {
            remainsum[i] = remainsum[i + 1] + i;
        }
        backtracking(k, n, remainsum, 0, 0);
        return paths;
    }

    public void backtracking(int k, int n, int[] remainsum, int sum, int pre) {
        if (path.size() == k) {
            if (sum == n) {
                paths.add(new LinkedList(path));
            }
            return;
        }
        int end = Math.min(9 - (k - path.size()) + 1, 9);
        while (end > 0 && remainsum[end] + sum < n) {
            end --;
        }
        for (int i = pre + 1; i <= end; i++) {
            path.add(i);
            backtracking(k, n, remainsum, sum + i, i);
            path.remove(path.size() - 1);
        }
    }
}
```
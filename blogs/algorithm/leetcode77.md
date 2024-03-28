---
title: LeetCode-77-组合 | 回溯1
date: 2024/03/27
categories:
 - 算法
---
## 77. 组合
给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。

你可以按 **任何顺序** 返回答案。
 

示例 1：
```
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```
示例 2：
```
输入：n = 1, k = 1
输出：[[1]]
```

提示：
```
1 <= n <= 20
1 <= k <= n
```

## 解题思路
### 解法一
回溯模板
```java
class Solution {
    List<List<Integer>> rets = new LinkedList<>();
    List<Integer> ret = new LinkedList<>();
    public void backtracking(int n, int k, int pre) {
        if (ret.size() == k) {
            rets.add(new LinkedList(ret));
            return;
        }
        
        for (int i = pre + 1; i <= n; i++) {
            ret.add(i);
            backtracking(n, k, i);
            ret.remove(ret.size() - 1);
        }
    }
    public List<List<Integer>> combine(int n, int k) {
        backtracking(n, k, 0);
        return rets;
    }
}
```

### 解法二
回溯 + 剪枝：因为符合条件的路径要经过 k 个节点，所以后方元素不够的时候就可以剪枝。
```java
class Solution {
    List<List<Integer>> rets = new LinkedList<>();
    List<Integer> ret = new LinkedList<>();
    public void backtracking(int n, int k, int pre) {
        if (ret.size() == k) {
            rets.add(new LinkedList(ret));
            return;
        }
        
        int end = Math.min(n, n-k+ret.size()+1); // 要找到k个，已经有size个，n-(k-size)+1 ~ n ->  k-size
        for (int i = pre + 1; i <= end; i++) {
            ret.add(i);
            backtracking(n, k, i);
            ret.remove(ret.size() - 1);
        }
    }
    public List<List<Integer>> combine(int n, int k) {
        backtracking(n, k, 0);
        return rets;
    }
}
```
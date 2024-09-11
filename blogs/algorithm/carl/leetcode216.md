---
title: LeetCode-216-组合总和 III | 回溯2
date: 2024/03/27
categories:
 - 算法
---
## 216. 组合总和 III
找出所有相加之和为 `n` 的 `k` 个数的组合，且满足下列条件：
- 只使用数字1到9
- 每个数字 **最多使用一次** 
返回 *所有可能的有效组合的列表* 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

 
示例 1:
```
输入: k = 3, n = 7
输出: [[1,2,4]]
解释:
1 + 2 + 4 = 7
没有其他符合的组合了。
```
示例 2:
```
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
解释:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
没有其他符合的组合了。
```
示例 3:
```
输入: k = 4, n = 1
输出: []
解释: 不存在有效的组合。
在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。
```

提示:
```
2 <= k <= 9
1 <= n <= 60
```

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
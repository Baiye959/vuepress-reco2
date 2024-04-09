---
title: LeetCode-40-组合总和 II | 回溯5
date: 2024/04/02
categories:
 - 算法
---
## 40. 组合总和 II
给定一个候选人编号的集合 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 target 的组合。

`candidates` 中的每个数字在每个组合中只能使用 **一次** 。

注意：解集不能包含重复的组合。 

 
示例 1:
```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```
示例 2:
```
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
```

提示:
```
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
```

## 解题思路
回溯，跟[39.组合总和](/blogs/algorithm/leetcode39.md)思路一样，只是元素值重复且只能用一次。<br/>
同样，为了剪枝将元素从小到大排列，sum加当前元素大于target就不用继续尝试了（因为后面的元素更大）。

重点！！**“解集不能包含重复的组合。”**，需要去重<br/>
如何去重？在回溯中，我们要把回溯路径想象成树，去重就是排除**同一树层已使用过**这一情况。<br/>
那么只要维护一个固定长度的boolean数组，存储candidates中对应元素在当前层是否使用过即可。<br/>
如何维护？进入下一层就把当前元素used置为false，否则置true。
```java
class Solution {
    List<List<Integer>> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        boolean[] used = new boolean[candidates.length];
        backtracking(candidates, target, 0, 0, used);
        return ret;
    }
    public void backtracking(int[] candidates, int target, int sum, int k, boolean[] used) { // 正在添加candidates[k]
        if (sum == target) {
            ret.add(new LinkedList(path));
            return;
        }
        for (int i = k; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break;
            if (i != 0 && candidates[i] == candidates[i-1] && used[i-1]) {
                used[i] = true;
                continue;
            }
            path.add(candidates[i]);
            used[i] = false;
            backtracking(candidates, target, sum + candidates[i], i + 1, used);
            path.remove(path.size() - 1);
            used[i] = true;
        }
    }
}
```
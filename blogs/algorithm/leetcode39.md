---
title: LeetCode-39-组合总和 | 回溯4
date: 2024/04/01
categories:
 - 算法
---
## 39. 组合总和
给你一个 **无重复元素** 的整数数组 `candidates` 和一个目标整数 `target` ，找出 `candidates` 中可以使数字和为目标数 `target` 的 所有 **不同组合** ，并以列表形式返回。你可以按 **任意顺序** 返回这些组合。

`candidates` 中的 **同一个** 数字可以 **无限制重复被选取** 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 `target` 的不同组合数少于 `150` 个。


示例 1：
```
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
```
示例 2：
```
输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
```
示例 3：
```
输入: candidates = [2], target = 1
输出: []
```

提示：
```
1 <= candidates.length <= 30
2 <= candidates[i] <= 40
candidates 的所有元素 互不相同
1 <= target <= 40
```

## Java基础补充（数组排序 Arrays.sort()）
```java
import java.util.Arrays;

Arrays.sort(int[] a); // 从小到大
Arrays.sort(int[] a, int fromIndex, int toIndex);
Arrays.sort(T[] a, Comparator<? Super T> c); // 用Comparator接口实现自定义排序规则

// 第三种举例 1
//不能使用基本数据类型
Integer[] arr = {5,4,7,9,2,12,54,21,1};
//降序
Arrays.sort(arr, new Comparator<Integer>() {
        //重写compare方法，最好加注解，不加也没事
    public int compare(Integer a, Integer b) {
        //返回值>0交换
        return b-a;
    }
});
System.out.println(Arrays.toString(arr));    

// 第三种举例 2
//不能使用基本数据类型
Integer[] arr = {5,4,7,9,2,12,54,21,1};
//降序
Arrays.sort(arr, (a, b) -> {
    //返回值>0交换
    return b-a;
});
System.out.println(Arrays.toString(arr));
```

## 解题思路
本题的重点是元素可重复被选取，为了不那么混乱，单个元素重复选取放在一起，比如222334555。<br/>
为剪枝服务，可以把元素从小到大排序，这样如果当前和+当前元素大于target，就不用接着尝试了。

```java
class Solution {
    List<List<Integer>> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        Arrays.sort(candidates); // 从小到大排序
        backtracking(candidates, target, path, 0, 0);
        return ret;
    }
    public void backtracking(int[] candidates, int target, List<Integer> path, int k, int sum) { // 正在添加candidates[k]
        if (sum == target) {
            ret.add(new LinkedList(path));
            return;
        } else if (sum > target || k == candidates.length) {
            return;
        }

        for (int i = k; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break;
            path.add(candidates[i]);
            backtracking(candidates, target, path, i, sum + candidates[i]);
            path.remove(path.size() - 1);
        }
    }
}
```
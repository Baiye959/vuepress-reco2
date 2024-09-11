---
title: LeetCode-47-全排列 II | 回溯12
date: 2024/04/10
categories:
 - 算法
---
::: info
- [力扣题目链接](https://leetcode.cn/problems/permutations-ii)
- [题目链接/文章讲解](https://programmercarl.com/0047.%E5%85%A8%E6%8E%92%E5%88%97II.html)
- [视频讲解](https://www.bilibili.com/video/BV1R84y1i7Tm)
:::

## 解题思路
跟[46.全排列](/blogs/algorithm/leetcode46.md)思路一样，只是去重不一致。<br/>
本题有重复元素，需要去重，但全排列可以通过排序简化去重。<br/>
这里有一个地方需要理解：如果一个元素与相邻元素相等，那么只有“本树枝用过”和“同树枝的本层用过”两种状态（因为这是全排列，for循环遍历到就会用）

```java
class Solution {
    List<List<Integer>> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        boolean[] used = new boolean[nums.length];
        backtracking(nums, used);
        return ret;
    }

    public void backtracking(int[] nums, boolean[] used) {
        if (path.size() == nums.length) {
            ret.add(new LinkedList(path));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (i != 0 && (nums[i] == nums[i - 1]) && used[i - 1]) { // 同层用过
                continue;
            }
            if (used[i]) continue; // 同树枝用过

            path.add(nums[i]);
            used[i] = true;
            backtracking(nums, used);
            path.removeLast();
            used[i] = false;
        }
    }
}
```
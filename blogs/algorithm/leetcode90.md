---
title: LeetCode-90-子集II | 回溯9
date: 2024/04/09
categories:
 - 算法
---
::: info
- [力扣题目链接](https://leetcode.cn/problems/subsets-ii)
- [题目链接/文章讲解](https://programmercarl.com/0090.%E5%AD%90%E9%9B%86II.html)
- [视频讲解](https://www.bilibili.com/video/BV1vm4y1F71J)
:::

## 解题思路
有点像[40.组合总和II](/blogs/algorithm/leetcode40.md)，但是加入结果集的条件不一样，本题去重后每条路径都要加到结果集。<br/>
将回溯看成树，对同一层的重复元素进行去重。<br/>
为了方便去重，先对数组从小到大进行排序，这样只要看左边的相同元素有没有在本层用过。<br/>
维护一个boolean数组used，进入下一层还原为false，否则置true;

这里的回溯树不是跟[78.子集](/blogs/algorithm/leetcode78.md)一样的二叉树
![](/image/2024040901.png)
而是多叉树，第k层代表子集第k位
![](/image/2024040902.png)

```java
class Solution {
    List<List<Integer>> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        boolean[] used = new boolean[nums.length];
        backtracking(nums, used, 0);
        return ret;
    }
    public void backtracking(int nums[], boolean[] used, int startIndex) {
        ret.add(new LinkedList(path));
        if (startIndex == nums.length) {
            return;
        }


        for (int i = startIndex; i < nums.length; i++) {
            if (i != 0 && (nums[i - 1] == nums[i]) && used[i - 1]) { // 如果重复使用
                used[i] = true;
                continue;
            }

            path.add(nums[i]);
            used[i] = false;
            backtracking(nums, used, i + 1);
            path.remove(path.size() - 1);
            used[i] = true;
        }
    }
}
```
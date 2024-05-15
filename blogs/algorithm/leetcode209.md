---
title: LeetCode-209-长度最小的子数组 | 数组4
date: 2024/02/27
categories:
 - 算法
---
:::info
[力扣链接](https://leetcode.cn/problems/minimum-size-subarray-sum/)
:::

## 209. 长度最小的子数组

给定一个含有 `n` 个正整数的数组和一个正整数 `target` 。

找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 `[nums_l, nums_(l+1), ..., nums_(r-1), nums_r]` ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：
```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```
示例 2：
```
输入：target = 4, nums = [1,4,4]
输出：1
```
示例 3：
```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

提示：
```
1 <= target <= 10^9
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^5
```

进阶：

如果你已经实现 `O(n)` 时间复杂度的解法, 请尝试设计一个 `O(n log(n))` 时间复杂度的解法。

## 解题思路

一种暴力解题思路为双层循环遍历，计算所有n*n种子数组之和，记录当前符合条件的最小长度。

另一种思路则是滑动窗口，其本质其实也是双指针，但因为是判断所夹窗口的特征，称为滑动窗口。<br/>
两个指针均从左向右滑动，根据在窗口的左右称为左端点和右端点（选择区间类型为左闭右闭），窗口总和未达到`target`时右端点移动、窗口总和去掉左端点仍然大于等于`target`时左端点移动，这样就可以找到符合条件的最小子数组。<br/>
需要注意的是本题使用双指针的移动方向，如果右端点不是始终向一个方向移动、而是双向来回移动，那么与双层循环无异，时间复杂度仍是`O(n^2)`

```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int sum = 0, ret = nums.length+1;
        for ( int l=0, r=0; r<nums.length; r++) {
            sum += nums[r];

            while (sum-nums[l] >= target) {
                sum -= nums[l];
                l ++;
            }
            if (sum >= target)
                ret = Math.min(ret, r-l+1);
        }

        if (ret > nums.length) return 0;
        return ret;
    }
}
```
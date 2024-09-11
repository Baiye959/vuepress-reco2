---
title: LeetCode-704-二分查找 | 数组1
date: 2024/02/26
categories:
 - 算法
---
:::info
[力扣链接](https://leetcode.cn/problems/binary-search/)
:::

## 704. 二分查找
给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target`  ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`。

示例 1:
```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```
示例 2:
```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

提示：
```
你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
```

## 解题思路

二分查找算法，常根据使用的下标区间划分为两类——左闭右闭和左闭右开。<br/>
假设数组下标为`0`~`numsize-1`，那么最初选取下标区间为[`0`, `numsize-1`]为左闭右闭，最初选取下标区间为[`0`, `numsize`)为左闭右开<br/>

编写二分算法时，细节上要根据搜索区间选择的区间类型来处理，例如：

while循环条件`left?right`要根据区间合理性来处理：<br/>
左闭右闭——区间`[1, 1]`合理——`left<=right`<br/>
左闭右开——区间`[1, 1)`不合理——`left<right`

更新区间端点`left`和`right`更容易理解：<br/>
如果`mid`不等于`target`，则区间不应该包括`mid`，区间边界需要相应调整为`mid`、`mid+1`或`mid-1`

左闭右闭代码：
```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid]>target) {
                right = mid - 1;
            } else if (nums[mid]<target) {
                left = mid + 1;
            } else return mid;
        }

        return -1;
    }
}
```

左闭右开代码：
```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length;
        
        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid]>target) {
                right = mid;
            } else if (nums[mid]<target) {
                left = mid + 1;
            } else return mid;
        }

        return -1;
    }
}
```
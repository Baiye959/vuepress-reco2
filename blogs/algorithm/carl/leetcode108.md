---
title: LeetCode-108-将有序数组转换为二叉搜索树 | 二叉树39
date: 2024/03/26
categories:
 - 算法
---
## 108. 将有序数组转换为二叉搜索树
给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵 **平衡二叉搜索树**。

平衡二叉树 是指该树所有节点的左右子树的深度相差不超过 1。


示例 1：
![](/image/2024032505.jpg)
```
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```
![](/image/2024032506.jpg)

示例 2：
![](/image/2024032507.jpg)
```
输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
```

提示：
```
1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums 按 严格递增 顺序排列
```

## 解题思路
寻找有序数组的分割点，分割点作为当前节点，然后递归左区间和右区间

```java
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        if (nums == null || nums.length == 0) return null;
        int len = nums.length;
        TreeNode left = sortedArrayToBST(Arrays.copyOfRange(nums, 0, len/2));
        TreeNode right = sortedArrayToBST(Arrays.copyOfRange(nums, len/2+1, len));
        return new TreeNode(nums[len/2], left, right);
    }
}
```
---
title: LeetCode-654-最大二叉树 | 二叉树28
date: 2024/03/23
categories:
 - 算法
---
## 654. 最大二叉树
给定一个不重复的整数数组 `nums` 。 **最大二叉树** 可以用下面的算法从 `nums` 递归地构建:

创建一个根节点，其值为 `nums` 中的最大值。
递归地在最大值 **左边** 的 **子数组前缀上** 构建左子树。
递归地在最大值 **右边** 的 **子数组后缀上** 构建右子树。
返回 `nums` 构建的 ***最大二叉树*** 。
 

示例 1：
![](/image/2024032308.jpg)
```
输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
```
示例 2：
![](/image/2024032309.jpg)
```
输入：nums = [3,2,1]
输出：[3,null,2,null,1]
```

提示：
```
1 <= nums.length <= 1000
0 <= nums[i] <= 1000
nums 中的所有整数 互不相同
```

## 解题思路
递归，思路同[106.从中序与后序遍历序列构造二叉树](/blogs/algorithm/leetcode106.md)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        if (nums == null || nums.length == 0) return null;

        int rootIndex = 0, rootVal = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > rootVal) {
                rootVal = nums[i];
                rootIndex = i;
            }
        }

        TreeNode left = constructMaximumBinaryTree(Arrays.copyOfRange(nums, 0, rootIndex));
        TreeNode right = constructMaximumBinaryTree(Arrays.copyOfRange(nums, rootIndex + 1, nums.length));
        TreeNode root = new TreeNode(rootVal, left, right);
        return root;
    }
}
```
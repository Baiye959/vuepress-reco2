---
title: LeetCode-105-从前序与中序遍历序列构造二叉树 | 二叉树27
date: 2024/03/23
categories:
 - 算法
---
## 105. 从前序与中序遍历序列构造二叉树
给定两个整数数组 `preorder` 和 `inorder` ，其中 `preorder` 是二叉树的先序遍历， `inorder` 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

 
示例 1:
![](/image/2024032307.jpg)
```
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
```
示例 2:
```
输入: preorder = [-1], inorder = [-1]
输出: [-1]
```

提示:
```
1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均 无重复 元素
inorder 均出现在 preorder
preorder 保证 为二叉树的前序遍历序列
inorder 保证 为二叉树的中序遍历序列
```

## 解题思路
本题跟[106.从中序与后序遍历序列构造二叉树](/blogs/algorithm/leetcode106.md)思路一致。

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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null || preorder.length == 0) {
            return null;
        }

        int rootVal = preorder[0], rootIndex = 0, size = inorder.length;
        for (int i = 0; i < size; i++) {
            if (inorder[i] == rootVal) {
                rootIndex = i;
                break;
            }
        }
        
        // 先preorder： 中(0) / 左(1 ~ rootIndex+1) / 右(rootIndex+1 ~ size)
        // 中inorder：  左(0 ~ rootIndex) / 中(rootIndex) / 右(rootIndex+1 ~ size)
        TreeNode left = buildTree(Arrays.copyOfRange(preorder, 1, rootIndex+1), 
            Arrays.copyOfRange(inorder, 0, rootIndex));
        TreeNode right = buildTree(Arrays.copyOfRange(preorder, rootIndex+1, size), 
            Arrays.copyOfRange(inorder, rootIndex+1, size));
        TreeNode root = new TreeNode(rootVal, left, right);
        return root;
    }
}
```
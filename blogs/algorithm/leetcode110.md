---
title: LeetCode-110-平衡二叉树 | 二叉树20
date: 2024/03/22
categories:
 - 算法
---
## 110. 平衡二叉树
给定一个二叉树，判断它是否是 **平衡二叉树** (平衡二叉树 是指该树所有节点的左右子树的深度相差不超过 1。)
  

示例 1：
![](/image/2024032201.jpg)
```
输入：root = [3,9,20,null,null,15,7]
输出：true
```
示例 2：
![](/image/2024032202.jpg)
```
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
```
示例 3：
```
输入：root = []
输出：true
```

提示：
```
树中的节点数在范围 [0, 5000] 内
-10^4 <= Node.val <= 10^4
```

## 解题思路
递归

判断一颗树是否是平衡二叉树，首先要所有子树都是平衡二叉树、其次要左右孩子的高度差不超过1。<br/>
那么判断应该是自下而上的，也就是遍历方式为左-右-中（后序遍历）

题中给出的函数返回值是boolean类型，用它只能判断子树是否是平衡二叉树，而不能携带高度信息。<br/>
因此，另外建一个函数用作递归，使其返回值类型为int，用返回值-1来表示子树不是平衡二叉树、其他值表示传入子树的高度。
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
    public boolean isBalanced(TreeNode root) {
        return getDepth(root) != -1;
    }

    public int getDepth(TreeNode root) {
        if (root == null) return 0;
        
        int leftDepth = getDepth(root.left);
        if (leftDepth == -1) return -1;
        int rightDepth = getDepth(root.right);
        if (rightDepth == -1) return -1;

        if (Math.abs(leftDepth - rightDepth) > 1) return -1;

        return Math.max(leftDepth, rightDepth) + 1;
    }
}
```
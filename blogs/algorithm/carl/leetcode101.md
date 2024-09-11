---
title: LeetCode-101-对称二叉树 | 二叉树15
date: 2024/03/20
categories:
 - 算法
---
## 101. 对称二叉树
给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

 
示例 1：
![](/image/2024032012.png)
```
输入：root = [1,2,2,3,4,4,3]
输出：true
```
示例 2：
![](/image/2024032013.png)
```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

提示：
```
树中节点数目在范围 [1, 1000] 内
-100 <= Node.val <= 100
```

## 解题思路
递归，应该用后序遍历（因为要先判断下方节点是否一致，才能判断根节点的左右孩子是否一致）

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
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;

        return childIsSymmetric(root.left, root.right);
    }
    public boolean childIsSymmetric(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return true;
        if (root1 == null && root2 != null) return false;
        if (root1 != null && root2 == null) return false;
        if (root1.val != root2.val) return false;

        return childIsSymmetric(root1.left, root2.right) && childIsSymmetric(root1.right, root2.left);
    }
}
```
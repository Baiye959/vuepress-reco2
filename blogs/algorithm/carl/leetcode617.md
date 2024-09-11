---
title: LeetCode-617-合并二叉树 | 二叉树29
date: 2024/03/23
categories:
 - 算法
---
## 617. 合并二叉树
给你两棵二叉树： `root1` 和 `root2` 。

想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，**不为** `null` 的节点将直接作为新二叉树的节点。

返回合并后的二叉树。

**注意**: 合并过程必须从两个树的根节点开始。
 

示例 1：
![](/image/2024032310.jpg)
```
输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]
```
示例 2：
```
输入：root1 = [1], root2 = [1,2]
输出：[2,2]
```

提示：
```
两棵树中的节点数目在范围 [0, 2000] 内
-10^4 <= Node.val <= 10^4
```

## 解题思路
递归

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
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) return null;
        if (root1 == null) return root2;
        if (root2 == null) return root1;

        TreeNode left = mergeTrees(root1.left, root2.left);
        TreeNode right = mergeTrees(root1.right, root2.right);
        TreeNode root = new TreeNode(root1.val + root2.val, left, right);
        return root;
    }
}
```
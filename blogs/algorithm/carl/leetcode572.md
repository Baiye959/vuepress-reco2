---
title: LeetCode-572-另一棵树的子树 | 二叉树17
date: 2024/03/20
categories:
 - 算法
---
## 572. 另一棵树的子树
给你两棵二叉树 `root` 和 `subRoot` 。检验 `root` 中是否包含和 `subRoot` 具有相同结构和节点值的子树。如果存在，返回 `true` ；否则，返回 `false` 。

二叉树 `tree` 的一棵子树包括 `tree` 的某个节点和这个节点的所有后代节点。`tree` 也可以看做它自身的一棵子树。
 

示例 1：
![](/image/2024032017.jpg)
```
输入：root = [3,4,5,1,2], subRoot = [4,1,2]
输出：true
```
示例 2：
![](/image/2024032018.jpg)
```
输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
输出：false
```

提示：
```
root 树上的节点数量范围是 [1, 2000]
subRoot 树上的节点数量范围是 [1, 1000]
-10^4 <= root.val <= 10^4
-10^4 <= subRoot.val <= 10^4
```

## 解题思路
利用[100.相同的树](/blogs/algorithm/leetcode100.md)中的函数判断。

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
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (isSameTree(root, subRoot) == true) return true;

        if (root == null) return false;
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null && q != null) return false;
        if (p != null && q == null) return false;
        if (p.val != q.val) return false;

        return isSameTree(q.left, p.left) && isSameTree(q.right, p.right);
    }
}
```
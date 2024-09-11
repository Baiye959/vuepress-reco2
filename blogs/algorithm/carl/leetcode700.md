---
title: LeetCode-700-二叉搜索树中的搜索 | 二叉树30
date: 2024/03/23
categories:
 - 算法
---
## 700. 二叉搜索树中的搜索
给定二叉搜索树（BST）的根节点 `root` 和一个整数值 `val`。

你需要在 BST 中找到节点值等于 `val` 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 `null` 。
 

示例 1:
![](/image/2024032311.jpg)
```
输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]
```
示例 2:
![](/image/2024032312.jpg)
```
输入：root = [4,2,7,1,3], val = 5
输出：[]
```

提示：
```
树中节点数在 [1, 5000] 范围内
1 <= Node.val <= 10^7
root 是二叉搜索树
1 <= val <= 10^7
```

## 解题思路
二叉搜索树是一个有序树：
- 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
- 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
- 它的左、右子树也分别为二叉搜索树

从根节点开始搜索，比当前值小向左、比当前值大向右，与当前值一致找到、当前节点为空找不到。
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
    public TreeNode searchBST(TreeNode root, int val) {
        while (root != null) {
            if (val == root.val) {
                return root;
            } else if (val < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return null;
    }
}
```
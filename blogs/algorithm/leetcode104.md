---
title: LeetCode-104-二叉树的最大深度 | 二叉树2-9
date: 2024/03/20
categories:
 - 算法
---
## 104. 二叉树的最大深度
给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

 
示例 1：
![](/image/2024032007.jpg)
```
输入：root = [3,9,20,null,null,15,7]
输出：3
```
示例 2：
```
输入：root = [1,null,2]
输出：2
```

提示：
```
树中节点的数量在 [0, 10^4] 区间内。
-100 <= Node.val <= 100
```

## 解题思路
层序遍历

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
    public int maxDepth(TreeNode root) {
        int depth = 0;
        Queue<TreeNode> queue = new LinkedList<>();

        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            depth ++;
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
        }
        return depth;
    }
}
```
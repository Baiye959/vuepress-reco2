---
title: LeetCode-226-翻转二叉树 | 二叉树3
date: 2024/03/20
categories:
 - 算法
---
## 226. 翻转二叉树
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

 

示例 1：
![](/image/2024032009.jpg)
```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```
示例 2：
![](/image/2024032010.jpg)
```
输入：root = [2,1,3]
输出：[2,3,1]
```
示例 3：
```
输入：root = []
输出：[]
```

提示：
```
树中节点数目范围在 [0, 100] 内
-100 <= Node.val <= 100
```

## 解题思路
### 解法一（层序遍历）
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
    public TreeNode invertTree(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();

        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                TreeNode t = cur.left;
                cur.left = cur.right;
                cur.right = t;

                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
        }
        return root;
    }
}
```
![](/image/2024032011.png)


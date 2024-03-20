---
title: LeetCode-111-二叉树的最小深度 | 二叉树13
date: 2024/03/20
categories:
 - 算法
---
## 111. 二叉树的最小深度
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。


示例 1：
![](/image/2024032008.jpg)
```
输入：root = [3,9,20,null,null,15,7]
输出：2
```
示例 2：
```
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

提示：
```
树中节点数的范围在 [0, 10^5] 内
-1000 <= Node.val <= 1000
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
    public int minDepth(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        if (root == null) {
            return 0;
        } else {
            queue.add(root);
        }
        
        int minDepth = Integer.MAX_VALUE, depth = 0;
        while (queue.size() != 0) {
            depth ++;
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                if (cur.left == null && cur.right == null) {
                    minDepth = Math.min(minDepth, depth); 
                }

                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
        }
        return minDepth;
    }
}
```

### 解法二（递归）
暂时不写

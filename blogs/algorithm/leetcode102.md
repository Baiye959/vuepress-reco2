---
title: LeetCode-102-二叉树的层序遍历 | 二叉树4
date: 2024/03/20
categories:
 - 算法
---
## 102. 二叉树的层序遍历
给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。


示例 1：
```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```
示例 2：
```
输入：root = [1]
输出：[[1]]
```
示例 3：
```
输入：root = []
输出：[]
```

提示：
```
树中节点数目在范围 [0, 2000] 内
-1000 <= Node.val <= 1000
```

## 解题思路
用bfs来做，队列实现。<br/>
注意每次要记录本层的节点数，才能一层一层处理。

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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> layers = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();

        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            int size = queue.size();
            List<Integer> layer = new LinkedList<>();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                layer.add(cur.val);
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
            layers.add(layer);
        }
        return layers;
    }
}
```
---
title: LeetCode-107-二叉树的层序遍历 II | 二叉树5
date: 2024/03/20
categories:
 - 算法
---
## 107. 二叉树的层序遍历 II
给你二叉树的根节点 `root` ，返回其节点值 **自底向上的层序遍历** 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）


示例 1：
![](/image/2024032001.jpg)
```
输入：root = [3,9,20,null,null,15,7]
输出：[[15,7],[9,20],[3]]
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
层序遍历最后反转结果数组即可
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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
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

        Collections.reverse(layers);
        return layers;
    }
}
```
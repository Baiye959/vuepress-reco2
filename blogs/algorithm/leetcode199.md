---
title: LeetCode-199-二叉树的右视图 | 二叉树2-3
date: 2024/03/20
categories:
 - 算法
---
## 199. 二叉树的右视图
给定一个二叉树的 **根节点** `root`，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 
示例 1:
```
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
```
示例 2:
```
输入: [1,null,3]
输出: [1,3]
```
示例 3:
```
输入: []
输出: []
```

提示:
```
二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100 
```

## 解题思路
层序遍历，每层最后一个节点加入结果集中

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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();

        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                if (i == size - 1) {
                    ret.add(cur.val);
                }
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
        }
        return ret;
    }
}
```
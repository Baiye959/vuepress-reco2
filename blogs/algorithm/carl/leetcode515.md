---
title: LeetCode-515-在每个树行中找最大值 | 二叉树9
date: 2024/03/20
categories:
 - 算法
---
## 515. 在每个树行中找最大值
给定一棵二叉树的根节点 `root` ，请找出该二叉树中每一层的最大值。


示例1：
![](/image/2024032006.jpg)
```
输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
```
示例2：
```
输入: root = [1,2,3]
输出: [1,3]
```

提示：
```
二叉树的节点个数的范围是 [0, 10^4]
-2^31 <= Node.val <= 2^31 - 1
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
    public List<Integer> largestValues(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();

        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            int max = Integer.MIN_VALUE, size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                max = Math.max(max, cur.val);
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
            ret.add(max);
        }
        return ret;
    }
}
```
---
title: LeetCode-222-完全二叉树的节点个数 | 二叉树19
date: 2024/03/21
categories:
 - 算法
---
## 222. 完全二叉树的节点个数
给你一棵 **完全二叉树** 的根节点 `root` ，求出该树的节点个数。

[完全二叉树](https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91/7773232?fr=aladdin) 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 `h` 层，则该层包含 $1~ 2^h$ 个节点。

 

示例 1：
![](/image/2024032103.jpg)
```
输入：root = [1,2,3,4,5,6]
输出：6
```
示例 2：
```
输入：root = []
输出：0
```
示例 3：
```
输入：root = [1]
输出：1
```

提示：
```
树中节点的数目范围是[0, 5 * 10^4]
0 <= Node.val <= 5 * 10^4
题目数据保证输入的树是 完全二叉树
```

进阶：遍历树来统计节点是一种时间复杂度为 `O(n)` 的简单解决方案。你可以设计一个更快的算法吗？

## 解题思路
要利用完全二叉树的特性来优化算法。

如图，对二叉树来说，一直遍历下去，总会有一个子树是满二叉树。
![](/image/2024032104.png)

而由于完全二叉树的特性，如果一颗子树的最左路径和最右路径长度一致，就是满二叉树，判断出是满二叉树就能利用深度直接算出节点个数（cnt = 2^depth - 1），从而节省遍历这些满二叉树中间节点的时间。
![](/image/2024032105.png)

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
    public int countNodes(TreeNode root) {
        if (root == null) return 0;
        int leftDepth = 0, rightDepth = 0;
        
        TreeNode cur = root;
        while (cur.left != null) {
            cur = cur.left;
            leftDepth ++;
        }
        cur = root;
        while (cur.right != null) {
            cur = cur.right;
            rightDepth ++;
        }

        if (leftDepth == rightDepth) return (2 << leftDepth) - 1;
        return countNodes(root.left) + countNodes(root.right) + 1;
    }
}
```
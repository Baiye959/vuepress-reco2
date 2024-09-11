---
title: LeetCode-235-二叉搜索树的最近公共祖先 | 二叉树35
date: 2024/03/24
categories:
 - 算法
---
## 235. 二叉搜索树的最近公共祖先
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
![](/image/2024032406.png)
 

示例 1:
```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```
示例 2:
```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
```

说明:
```
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
```

## 解题思路
仔细观察二叉搜索树，可以发现由于它的特性，p、q的公共祖先在[p, q]区间，且最近公共祖先就是自上向下最先搜索到[p, q]的节点

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode cur = root;
        int min = Math.min(p.val, q.val), max = Math.max(p.val, q.val);
        while (cur != null) {
            if (cur.val > max) { // 在区间右边，往左走
                cur = cur.left;
            } else if (cur.val < min) { // 在区间左边，往右走
                cur = cur.right;
            } else { // 在区间里，找到了
                break;
            }
        }
        return cur;
    }
}
```
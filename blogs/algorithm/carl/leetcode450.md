---
title: LeetCode-450-删除二叉搜索树中的节点 | 二叉树37
date: 2024/03/24
categories:
 - 算法
---
## 450. 删除二叉搜索树中的节点
给定一个二叉搜索树的根节点 **root** 和一个值 **key**，删除二叉搜索树中的 **key** 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：
1. 首先找到需要删除的节点；
2. 如果找到了，删除它。
 

示例 1:
![](/image/2024032409.jpg)
```
输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
```
![](/image/2024032410.jpg)

示例 2:
```
输入: root = [5,3,6,2,4,null,7], key = 0
输出: [5,3,6,2,4,null,7]
解释: 二叉树不包含值为 0 的节点
```
示例 3:
```
输入: root = [], key = 0
输出: []
```

提示:
```
节点数的范围 [0, 10^4].
-10^5 <= Node.val <= 10^5
节点值唯一
root 是合法的二叉搜索树
-10^5 <= key <= 10^5
```

进阶： 要求算法时间复杂度为 `O(h)`，`h` 为树的高度。

## 解题思路
在树中如何删除当前节点？<br/>
递归函数`f`的返回值为节点，那么在处理当前节点`cur`时，执行**cur.left = f(cur.left, ...)**，`cur.left`就可以在自己那层递归 通过`return`其他的节点 将自己删除。

考虑删除时的几种情况：
1. 删除节点不存在，直接返回null
2. 删除节点无左子树和右子树，直接返回null
3. 删除节点无左子树，返回右子树
4. 删除节点无右子树，返回左子树
5. 删除节点左右子树都在，将左子树变成右子树最小节点的左孩子（最小节点是一路left）

第五种情况如图：
![](/image/2024032501.png)
![](/image/2024032502.png)

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
    public TreeNode deleteNode(TreeNode root, int key) {
        if (root == null) return null;
        if (root.val == key) {
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            } else {
                TreeNode cur = root.right;
                while (cur.left != null) {
                    cur = cur.left;
                }
                cur.left = root.left;
                return root.right;
            }
        } else if (key < root.val) {
            root.left = deleteNode(root.left, key);
        } else {
            root.right = deleteNode(root.right, key);
        }
        return root;
    }
}
```
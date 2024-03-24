---
title: LeetCode-701-二叉搜索树中的插入操作 | 二叉树36
date: 2024/03/24
categories:
 - 算法
---
## 701. 二叉搜索树中的插入操作
给定二叉搜索树（BST）的根节点 `root` 和要插入树中的值 `value` ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 **保证** ，新值和原始二叉搜索树中的任意节点值都不同。

**注意**，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 **任意有效的结果** 。
 

示例 1：
![](/image/2024032407.jpg)
```
输入：root = [4,2,7,1,3], val = 5
输出：[4,2,7,1,3,5]
解释：另一个满足题目要求可以通过的树是：
```
![](/image/2024032408.jpg)

示例 2：
```
输入：root = [40,20,60,10,30,50,70], val = 25
输出：[40,20,60,10,30,50,70,null,null,25]
```
示例 3：
```
输入：root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
输出：[4,2,7,1,3,5]
```

## 解题思路
### 解法一
只要按照二叉搜索树的规则去遍历，遇到null时插入节点就可以了

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
    public TreeNode insertIntoBST(TreeNode root, int val) {
        TreeNode newNode = new TreeNode(val), cur = root;
        if (root == null) return newNode;
        while (cur != null) {
            if (val < cur.val) {
                if (cur.left == null) {
                    cur.left = newNode;
                    break;
                } else {
                    cur = cur.left;
                }
            } else{
                if (cur.right == null) {
                    cur.right = newNode;
                    break;
                } else {
                    cur = cur.right;
                }
            }   
        }
        return root;
    }
}
```

### 解法二
递归，需要明确：函数意为向root为根的子树插入值为val的新节点、返回值为插入后的新子树。

```java
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if (root == null) {
            TreeNode newNode = new TreeNode(val);
            return newNode;
        }
        if (val < root.val) {
            root.left = insertIntoBST(root.left, val);
        } else {
            root.right = insertIntoBST(root.right, val);
        }
        return root;
    }
}
```
---
title: LeetCode-669-修剪二叉搜索树 | 二叉树38
date: 2024/03/26
categories:
 - 算法
---
## 669. 修剪二叉搜索树
给你二叉搜索树的根节点 `root` ，同时给定最小边界 `low` 和最大边界 `high`。通过修剪二叉搜索树，使得所有节点的值在`[low, high]`中。修剪树 **不应该** 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 **唯一的答案** 。

所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。
 

示例 1：
![](/image/2024032503.jpg)
```
输入：root = [1,0,2], low = 1, high = 2
输出：[1,null,2]
```
示例 2：
![](/image/2024032504.jpg)
```
输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
输出：[3,2,null,1]
```

提示：
```
树中节点数在范围 [1, 10^4] 内
0 <= Node.val <= 10^4
树中每个节点的值都是 唯一 的
题目数据保证输入是一棵有效的二叉搜索树
0 <= low <= high <= 10^4
```

## 解题思路
在递归中删除当前节点——执行`cur.left = f(cur.left)`，这样`cur.left`就能通过return别的节点来删除自己。

修建二叉搜索树不能单纯地通过判断子树根节点来修剪整个子树，只能删除根节点和某支子树。<br/>
因此，应该在当前轮修剪左孩子和右孩子（不知道当前节点自身是左孩子还是右孩子），如果左右孩子均符合则递归判断左右孩子的左右孩子。

题解不太清晰，看代码
```java
class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if (root == null) return null;
        if (root.val < low) {
            return trimBST(root.right, low, high);
        }
        if (root.val > high) {
            return trimBST(root.left, low, high);
        }
        TreeNode left = trimBST(root.left, low, high);
        TreeNode right = trimBST(root.right, low, high);
        return new TreeNode(root.val, left, right);
    }
}
```
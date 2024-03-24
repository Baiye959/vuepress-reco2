---
title: LeetCode-530-二叉搜索树的最小绝对差 | 二叉树32
date: 2024/03/24
categories:
 - 算法
---
## 530. 二叉搜索树的最小绝对差
给你一个二叉搜索树的根节点 `root` ，返回 **树中任意两不同节点值之间的最小差值** 。

差值是一个正数，其数值等于两值之差的绝对值。

 
示例 1：
![](/image/2024032401.jpg)
```
输入：root = [4,2,6,1,3]
输出：1
```
示例 2：
![](/image/2024032402.jpg)
```
输入：root = [1,0,48,null,null,12,49]
输出：1
```

提示：
```
树中节点的数目范围是 [2, 10^4]
0 <= Node.val <= 10^5
```

注意：本题与[783](https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/)相同

## 解题思路
利用二叉搜索树的特性：**二叉搜索树的中序遍历序列是有序的**，可以把本题转换成“在有序序列中找到最小差值”

这个思路有三种做法：
1. 递归中序遍历树，转换为数组，遍历数组找到最小差值
2. 递归中序遍历树，记录上一节点，找到最小差值
3. 迭代中序遍历树，记录上一节点，找到最小差值

这里写一下迭代法，注意因为是用栈，需要以右-中-左的顺序入栈
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
    public int getMinimumDifference(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        if (root != null) {
            stack.push(root);
        }

        // 中序遍历：左-中-右
        int ret = Integer.MAX_VALUE;
        TreeNode pre = null;
        while (stack.empty() == false) {
            TreeNode cur = stack.pop();
            if (cur == null) { // 是标记节点，需要操作
                cur = stack.pop();
                if (pre != null) {
                    ret = Math.min(ret, cur.val - pre.val);
                }
                pre = cur;
            } else { // 不是标记节点，只需要遍历
                if (cur.right != null) { // 右
                    stack.push(cur.right);
                }
                stack.push(cur); // 中
                stack.push(null);
                if (cur.left != null) { // 左
                    stack.push(cur.left);
                }
            }
        }
        return ret;
    }
}
```
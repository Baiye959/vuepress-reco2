---
title: LeetCode-404-左叶子之和 | 二叉树22
date: 2024/03/22
categories:
 - 算法
---
## 404. 左叶子之和
给定二叉树的根节点 `root` ，返回所有左叶子之和。

 
示例 1：
![](/image/2024032204.jpg)
```
输入: root = [3,9,20,null,null,15,7] 
输出: 24 
解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
```
示例 2:
```
输入: root = [1]
输出: 0
```

提示:
```
节点数在 [1, 1000] 范围内
-1000 <= Node.val <= 1000
```

## 解题思路
注意是左**叶子**



### 解法一 迭代标记法（前/中/后 序遍历）
标记左孩子

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
    public int sumOfLeftLeaves(TreeNode root) {
        int sum = 0;
        Stack<TreeNode> stack = new Stack<>();
        if (root != null) {
            stack.push(root);
        }

        while (stack.empty() == false) {
            TreeNode cur = stack.pop();
            if (cur == null) { // 为标记节点，是左孩子
                cur = stack.pop();
                if (cur.left == null && cur.right == null) {
                    sum += cur.val;
                }
            }
            // 非标记节点 或 处理完特殊标记的标记节点
            if (cur.left != null) {
                stack.push(cur.left);
                stack.push(null);
            }
            if (cur.right != null) {
                stack.push(cur.right);
            }
        }
        
        return sum;
    }
}
```

### 解法二 递归
左孩子在本次处理，不传递标记给下一层递归函数

```java
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if (root == null) return 0;

        int sum = 0;
        if (root.left != null && root.left.left == null && root.left.right == null) {
            sum += root.left.val;
        }
        sum += sumOfLeftLeaves(root.left);
        sum += sumOfLeftLeaves(root.right);
        
        return sum;
    }
}
```
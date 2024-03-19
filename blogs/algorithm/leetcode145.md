---
title: LeetCode-145-二叉树的后序遍历 | 二叉树2
date: 2024/03/19
categories:
 - 算法
---
## 145. 二叉树的后序遍历
给你一棵二叉树的根节点 `root` ，返回其节点值的 **后序遍历** 。


示例 1：
![](/image/2024031904.jpg)
```
输入：root = [1,null,2,3]
输出：[3,2,1]
```
示例 2：
```
输入：root = []
输出：[]
```
示例 3：
```
输入：root = [1]
输出：[1]
```

提示：
```
树中节点的数目在范围 [0, 100] 内
-100 <= Node.val <= 100
```

进阶：递归算法很简单，你可以通过迭代算法完成吗？

## 解题思路
### 解法一（递归）
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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        postorder(root, ret);
        return ret;
    }
    public void postorder(TreeNode root, List<Integer> ret) {
        if (root == null) return;

        postorder(root.left, ret);
        postorder(root.right, ret);
        ret.add(root.val);
    }
}
```

### 解法二（迭代）
```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();

        // 左-右-中 <- 中-右-左
        if (root != null) stack.push(root);
        while (stack.empty() == false) {
            TreeNode cur = stack.pop();
            ret.add(cur.val);
            if (cur.left != null) {
                stack.push(cur.left);
            }
            if (cur.right != null) {
                stack.push(cur.right);
            }
        }

        Collections.reverse(ret);
        return ret;
    }
}
```

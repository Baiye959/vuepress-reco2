---
title: LeetCode-98-验证二叉搜索树 | 二叉树31
date: 2024/03/23
categories:
 - 算法
---
## 98. 验证二叉搜索树
给你一个二叉树的根节点 `root` ，判断其是否是一个有效的二叉搜索树。

**有效** 二叉搜索树定义如下：
- 节点的左子树只包含 **小于** 当前节点的数。
- 节点的右子树只包含 **大于** 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

子树：`treeName` 树中的一个节点及其所有子孙节点所构成的树称为 `treeName` 的 子树。


示例 1：
![](/image/2024032313.jpg)
```
输入：root = [2,1,3]
输出：true
```
示例 2：
![](/image/2024032313.jpg)
```
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
```

提示：
```
树中节点数目范围在[1, 10^4] 内
-2^31 <= Node.val <= 2^31 - 1
```

## 解题思路
递归判断

这里加了isLeft和isRight，说明是否要履行左子树和右子树的义务。<br/>
因为值的范围太大了，义务初始化成整数的最大值和最小值也会出错。
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
    public boolean isValidBST(TreeNode root) {
        return isValid(root, Integer.MAX_VALUE, Integer.MIN_VALUE, false, false);
    }

    // min记录小于义务，max记录大于义务
    public boolean isValid(TreeNode root, int min, int max, boolean isLeft, boolean isRight) {
        if (root == null) return true;
        if ((isLeft == true && root.val >= min) || 
            (isRight == true && root.val <= max)) {
            return false;
        }
        System.out.println(root.val);
        // 左子树增加小于当前节点的义务、右子树增加大于当前节点的义务
        return isValid(root.left, Math.min(min, root.val), max, true, isRight) && 
            isValid(root.right, min, Math.max(max, root.val), isLeft, true);
    }
}
```
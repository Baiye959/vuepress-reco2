---
title: LeetCode-501-二叉搜索树中的众数 | 二叉树33
date: 2024/03/24
categories:
 - 算法
---
## 501. 二叉搜索树中的众数
给你一个含重复值的二叉搜索树（BST）的根节点 `root` ，找出并返回 BST 中的所有 [众数](https://baike.baidu.com/item/%E4%BC%97%E6%95%B0/44796)（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 **任意顺序** 返回。

假定 BST 满足如下定义：
- 结点左子树中所含节点的值 **小于等于** 当前节点的值
- 结点右子树中所含节点的值 **大于等于** 当前节点的值
- 左子树和右子树都是二叉搜索树
 

示例 1：
![](/image/2024032403.jpg)
```
输入：root = [1,null,2,2]
输出：[2]
```
示例 2：
```
输入：root = [0]
输出：[0]
```

提示：
```
树中节点的数目在范围 [1, 10^4] 内
-10^5 <= Node.val <= 10^5
```

进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）

## Java基础补充
`ArrayList<Integer>`转为`int[]`
```java
// 流
int[] ret = list.stream().mapToInt(Integer::intValue).toArray();

// 遍历
int[] ret = new int[list.size()];
for (int i = 0; i < list.size(); i++) {
    ret[i] = list.get(i);
}
```

## 解题思路
跟[530.二叉搜索树的最小绝对差](/blogs/algorithm/leetcode530.md)一样有三个方法，这里选符合进阶要求的直接递归。

递归中序遍历树，记录上一节点，找到重复最多的数。<br/>
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
    TreeNode pre = null;
    int maxCnt = 0, cnt = 0;
    List<Integer> ret = new ArrayList<>();
    public int[] findMode(TreeNode root) {
        if (root == null) {
            return ret.stream().mapToInt(Integer::intValue).toArray();
        }
        
        // 中序遍历：左-中-右
        // 左
        findMode(root.left);
        // 中
        if (pre == null || pre.val != root.val) {
            cnt = 1;
        } else {
            cnt ++;
        }
        if (cnt > maxCnt) {
            ret.clear();
            ret.add(root.val);
            maxCnt = cnt;
        } else if (cnt == maxCnt) {
            ret.add(root.val);
        }
        pre = root;
        // 右
        findMode(root.right);

        return ret.stream().mapToInt(Integer::intValue).toArray();
    }
}
```
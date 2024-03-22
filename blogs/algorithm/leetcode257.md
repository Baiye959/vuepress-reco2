---
title: LeetCode-257-二叉树的所有路径 | 二叉树21
date: 2024/03/22
categories:
 - 算法
---
## 257. 二叉树的所有路径
给你一个二叉树的根节点 `root` ，按 **任意顺序** ，返回所有从根节点到叶子节点的路径。

**叶子节点** 是指没有子节点的节点。

 
示例 1：
![](/image/2024032203.jpg)
```
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
```
示例 2：
```
输入：root = [1]
输出：["1"]
```

提示：
```
树中节点的数目在范围 [1, 100] 内
-100 <= Node.val <= 100
```

## Java基础补充
```java
// StringBuilder
StringBuilder();
StringBuilder	append​(char[] str);
int	length();
String	substring​(int start, int end);

// StringJoiner
StringJoiner​(CharSequence delimiter);
StringJoiner​(CharSequence delimiter, CharSequence prefix, CharSequence suffix);
StringJoiner	add​(CharSequence newElement);
int	length();
String	toString()
```

## 解题思路
递归、回溯

1. 先考虑递归函数的传入参数：首先需要一个容器来存储结果，一个容器来存储之前路径的节点信息，还要传入当前节点
2. 再考虑递归函数的返回值：不需要
3. 最后考虑单个递归函数过程：
    - 判断当前节点为叶节点的话就要将路径加入结果集
    - 判断当前节点非叶节点的话就继续判断它的子节点（这里注意复原，不要让对左孩子的操作影响右孩子的判断、对右孩子的操作影响对其他节点的判断）

注意leetcode使用StringJoiner需要导包`import java.util.StringJoiner;`
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
import java.util.StringJoiner;

class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> paths = new ArrayList<>();
        if (root == null) {
            return paths;
        }
        
        List<Integer> nodes = new ArrayList<>();
        getPaths(root, paths, nodes);
        return paths;
    }
    public void getPaths(TreeNode root, List<String> paths, List<Integer> nodes) {
        nodes.add(root.val);
        if (root.left == null && root.right == null) {
            StringJoiner sj = new StringJoiner("->");
            for (int node: nodes) {
                sj.add(node+"");
            }
            paths.add(sj.toString());
        }

        if (root.left != null) {
            getPaths(root.left, paths, nodes);
            nodes.remove(nodes.size() - 1); // 复原
        }
        if (root.right != null) {
            getPaths(root.right, paths, nodes);
            nodes.remove(nodes.size() - 1); // 复原
        }
    }
}
```
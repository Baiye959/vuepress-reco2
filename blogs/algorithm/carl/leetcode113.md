---
title: LeetCode-113-路径总和 II | 二叉树25
date: 2024/03/23
categories:
 - 算法
---
## 113. 路径总和 II
给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶子节点** 路径总和等于给定目标和的路径。

**叶子节点** 是指没有子节点的节点。

 
示例 1：
![](/image/2024032303.jpg)
```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```
示例 2：
![](/image/2024032304.jpg)
```
输入：root = [1,2,3], targetSum = 5
输出：[]
```
示例 3：
```
输入：root = [1,2], targetSum = 0
输出：[]
```

提示：
```
树中节点总数在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
```

## 解题思路
递归

这题跟[112.路径总和](/blogs/algorithm/leetcode112.md)相比只是需要记录路径，添加路径和结果集为参数即可，需要注意处理回溯问题。（路径记录可参考[257.二叉树的所有路径](/blogs/algorithm/leetcode257.md)）

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
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> paths = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        if (root == null) return paths;

        traversal(root, targetSum, paths, path);
        return paths;
    }
    public void traversal(TreeNode root, int targetSum, List<List<Integer>> paths, List<Integer> path) {
        path.add(root.val);
        if (root.left == null && root.right == null && targetSum == root.val) {
            List<Integer> ret = new ArrayList<>(path);
            paths.add(ret);
        }

        if (root.left != null) {
            traversal(root.left, targetSum - root.val, paths, path);    
        }
        if (root.right != null) {
            traversal(root.right, targetSum - root.val, paths, path);
        }
        path.remove(path.size() - 1); // 除去本层递归的影响，回溯
    }
}
```

注意！！这里有个错误找了很久，ArrayList元素为对象时，只会记录对象的地址，如果直接将递归函数中用于存储信息的对象加入结果集，那么结果集中的元素都是那个用于存储信息的对象的最终值，而不是记录时的值。<br/>
对本题来说，这种错误造成的结果可能是：
![](/image/2024032305.png)
或
![](/image/2024032306.png)

解决方法：新建一个对象加入结果集，而不是将用于记录的对象直接加入结果集。
```java
// 错误
if (root.left == null && root.right == null && targetSum == root.val) {
    paths.add(path);
}

// 正确
if (root.left == null && root.right == null && targetSum == root.val) {
    List<Integer> ret = new ArrayList<>(path);
    paths.add(ret);
}
```

debug时用到的java基础补充：
```java
// 将ArrayList转换为字符串String
// ArrayList元素是String类型
String listString = String.join(", ", list);

// ArrayList元素不是String类型，使用Collector
String listString = list.stream().map(Object::toString)
                        .collect(Collectors.joining(", "));
```
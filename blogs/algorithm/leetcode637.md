---
title: LeetCode-637-二叉树的层平均值 | 二叉树2-4
date: 2024/03/20
categories:
 - 算法
---
## 637. 二叉树的层平均值
给定一个非空二叉树的根节点 `root` , 以数组的形式返回每一层节点的平均值。与实际答案相差 `10^(-5)` 以内的答案可以被接受。


示例 1：
![](/image/2024032002.jpg)
```
输入：root = [3,9,20,null,null,15,7]
输出：[3.00000,14.50000,11.00000]
解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。
```
示例 2:
![](/image/2024032003.jpg)
```
输入：root = [3,9,20,15,7]
输出：[3.00000,14.50000,11.00000]
```

提示：
```
树中节点数量在 [1, 10^4] 范围内
-2^31 <= Node.val <= 2^31 - 1
```

## 解题思路
层序遍历

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
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> ret = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();

        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            int size = queue.size();
            double sum = 0;
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                sum += cur.val;
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
            ret.add(sum / size);
        }
        return ret;
    }
}
```
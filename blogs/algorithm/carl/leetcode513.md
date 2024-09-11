---
title: LeetCode-513-找树左下角的值 | 二叉树23
date: 2024/03/23
categories:
 - 算法
---
## 513. 找树左下角的值
给定一个二叉树的 **根节点** `root`，请找出该二叉树的 **最底层** **最左边** 节点的值。

假设二叉树中至少有一个节点。


示例 1:
![](/image/2024032301.jpg)
```
输入: root = [2,1,3]
输出: 1
```
示例 2:
![](/image/2024032302.jpg)
```
输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
```

提示:
```
二叉树的节点个数的范围是 [1,10^4]
-2^31 <= Node.val <= 2^31 - 1 
```

## 解题思路
### 解法一（层序遍历）
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
    public int findBottomLeftValue(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        int ret = 0;
        queue.add(root);

        while (queue.size() != 0) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                if (i == 0) {
                    ret = cur.val;
                }
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
        }

        return ret;
    }
}
```

### 解法二（递归）
使用 前/中/后序，都能保证左优先（本题不对中处理）。

递归三部曲：
1. 确定递归函数的参数和返回值：需要有下一节点值，需要传递当前深度。需要对最大深度和当前结果有记录，可以是全局变量（类中的public变量）。无需返回值。
2. 确定终止条件：遇到叶子节点时终止，如果是当前深度比最大深度大，那么由于左优先，是第一次到达这个深度，是这个深度的最左叶子，记录值。
3. 确定单层递归的逻辑：找最大深度，带一点回溯的感觉（用简化回溯`depth+1`）

```java
class Solution {
    int maxDepth = -1, ret = 0;
    public int findBottomLeftValue(TreeNode root) {
        if (root != null) {
            travelsal(root, 0);
        }
        return ret;
    }
    public void travelsal(TreeNode root, int depth) {
        if (root.left == null && root.right == null) {
            if (maxDepth < depth) {
                maxDepth = depth;
                ret = root.val;                
            }
            return;
        }
        if (root.left != null) {
            travelsal(root.left, depth + 1);
        }
        if (root.right != null) {
            travelsal(root.right, depth + 1);
        }
    }
}
```
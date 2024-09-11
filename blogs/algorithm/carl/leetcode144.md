---
title: LeetCode-144-二叉树的前序遍历 | 二叉树1
date: 2024/03/19
categories:
 - 算法
---
## 144. 二叉树的前序遍历
给你二叉树的根节点 `root` ，返回它节点值的 **前序** 遍历。


示例 1：
![](/image/2024031901.jpg)
```
输入：root = [1,null,2,3]
输出：[1,2,3]
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
示例 4：
![](/image/2024031902.jpg)
```
输入：root = [1,2]
输出：[1,2]
```
示例 5：
![](/image/2024031903.jpg)
```
输入：root = [1,null,2]
输出：[1,2]
```

提示：
```
树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
```

进阶：递归算法很简单，你可以通过迭代算法完成吗？

## Java基础补充
```java
import java.util.ArrayList; // 引入 ArrayList 类

ArrayList<E> objectName = new ArrayList<>();　 // 初始化

Collections.reverse(objectName);

add(); // 将元素插入到指定位置的 arraylist 中
contains(); // 判断元素是否在 arraylist
get(); // 通过索引值获取 arraylist 中的元素
remove(); // 删除 arraylist 里的单个元素
size(); // 返回 arraylist 里元素数量
isEmpty(); // 判断 arraylist 是否为空
subList(); //截取部分 arraylist 的元素
set(); // 替换 arraylist 中指定索引的元素
sort();	// 对 arraylist 元素进行排序
toArray(); // 将 arraylist 转换为数组
toString();	// 将 arraylist 转换为字符串
```

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
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        preorder(root, ret);
        return ret;
    }
    public void preorder(TreeNode root, List<Integer> ret) {
        if (root == null) return;
        
        ret.add(root.val);
        preorder(root.left, ret);
        preorder(root.right, ret);
    }
}
```

### 解法二（迭代）
栈实现dfs遍历，前序遍历为：中-左孩子-右孩子，处理顺序和dfs遍历顺序一致，可以直接写
```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        
        // 中-左-右
        if (root != null) stack.add(root);
        while (stack.empty() == false) {
            TreeNode cur = stack.pop(); // 中
            ret.add(cur.val);
            if (cur.right != null) {
                stack.push(cur.right); // 右
            } 
            if (cur.left != null) {
                stack.push(cur.left); // 左
            }
        }
        
        return ret;
    }
}
```

### 解法三（统一迭代 标记法）
```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();

        if (root != null) {
            stack.push(root);
        }
        while (stack.empty() == false) {
            TreeNode cur = stack.pop();
            if (cur == null) { // 是标记节点，只需要处理
                cur = stack.pop();
                ret.add(cur.val);
            } else { // 不是标记节点，只要实现遍历、标记当前节点（中）
                // 前序遍历 中-左-右 <- 右-左-中
                if (cur.right != null) {
                    stack.push(cur.right);
                }
                if (cur.left != null) {
                    stack.push(cur.left);
                }
                stack.push(cur);
                stack.push(null);
            }
        }
        
        return ret;
    }
}
```
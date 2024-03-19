---
title: 代码随想录 | 二叉树基础
date: 2024/03/18
categories:
 - 算法
---
## 理论基础
### 存储方式
链式存储
![](/image/2024031801.png)
```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

顺序存储
![](/image/2024031802.png)
```java
// 如果父节点的数组下标是 i，那么它的左孩子就是 i * 2 + 1，右孩子就是 i * 2 + 2
int[] tree = new int[n];

int cur = i;
int left = i * 2 + 1;
int right = i * 2 + 2
```

### 遍历方式
- 前序遍历：根-左孩子-右孩子
- 中序遍历：左孩子-根-右孩子
- 后序遍历：左孩子-右孩子-根

## 递归遍历
递归写法：
1. 确定递归函数的参数和返回值
2. 确定终止条件
3. 确定单层递归的逻辑

前序遍历
```java
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

后序遍历
```java
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

中序遍历
```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        inorder(root, ret);
        return ret;
    }
    public void inorder(TreeNode root, List<Integer> ret) {
        if (root == null) return;

        inorder(root.left, ret);
        ret.add(root.val);
        inorder(root.right, ret);
    }
}
```

## 迭代遍历
模拟函数压栈的过程
> 递归的实现就是：每一次递归调用都会把函数的局部变量、参数值和返回地址等压入调用栈中，然后递归返回的时候，从栈顶弹出上一次递归的各项参数，所以这就是递归为什么可以返回上一层位置的原因。

### 前序遍历
栈实现dfs遍历，前序遍历为：根-左孩子-右孩子，处理顺序和dfs遍历顺序一致，可以直接写。

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

### 后序遍历
后序遍历为：左孩子-右孩子-根，处理顺序和dfs遍历顺序相反，可以通过对前序遍历的一些特殊处理得到：
1. 把dfs遍历顺序改为根-右孩子-左孩子
2. 把得到的结果进行反转，则为左孩子-右孩子-根的结果

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

### 中序遍历
中序遍历无法通过迭代dfs实现，需将根也入栈
```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        
        Stack<TreeNode> stack = new Stack<>();
        TreeNode cur = root;
        while (cur != null || stack.empty() == false) {
            if (cur != null) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                ret.add(cur.val);
                cur = cur.right;
            }
        }

        return ret;
    }
}
```

## 统一迭代


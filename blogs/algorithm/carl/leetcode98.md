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

## Java基础补充
```java
import java.util.ArrayList; // import the ArrayList class

ArrayList<String> cars = new ArrayList<String>(); // Create an ArrayList object

cars.add("Ford");
cars.get(0);
cars.set(0, "Opel");
cars.remove(0);
cars.clear();
cars.size();
```

## 解题思路
### 解法一（递归 不利用特性直接判断）
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

### 解法二（递归 利用特性直接判断）
利用二叉搜索树的特性：**二叉搜索树的中序遍历序列是有序序列**

递归进行中序遍历，与上一个节点比较即可

```java
class Solution {
    // 需要pre在退出递归时改变
    TreeNode pre = null;
    public boolean isValidBST(TreeNode root) {
        if (root == null) return true;
        
        // 检验左子树
        if (isValidBST(root.left) == false) return false;
        // 检验当前节点
        if (pre != null && pre.val >= root.val) return false;
        // 检验右子树
        pre = root;
        return isValidBST(root.right);        
    }
}
```

### 解法三（递归 转换为序列判断）
利用二叉搜索树的特性：**二叉搜索树的中序遍历序列是有序序列**

递归进行中序遍历，转换为数组，再进行判断

```java
class Solution {
    public void inorderTraversal(TreeNode root, List<Integer> bst) {
        if (root == null) return;
        inorderTraversal(root.left, bst);
        bst.add(root.val);
        inorderTraversal(root.right, bst);
    }

    public boolean isValidBST(TreeNode root) {
        List<Integer> bst = new ArrayList<>();
        inorderTraversal(root, bst);
        for (int i = 0; i < bst.size(); i++) {
            if (i != 0 && bst.get(i-1) >= bst.get(i)){ // 中序遍历序列应该单调递增
                return false;
            }
        }
        return true;
    }
}
```
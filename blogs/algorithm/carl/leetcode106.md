---
title: LeetCode-106-从中序与后序遍历序列构造二叉树 | 二叉树26
date: 2024/03/23
categories:
 - 算法
---
## 106. 从中序与后序遍历序列构造二叉树
给定两个整数数组 `inorder` 和 `postorder` ，其中 `inorder` 是二叉树的中序遍历， `postorder` 是同一棵树的后序遍历，请你构造并返回这颗 *二叉树* 。

 
示例 1:
![](/image/2024032307.jpg)
```
输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
输出：[3,9,20,null,null,15,7]
```
示例 2:
```
输入：inorder = [-1], postorder = [-1]
输出：[-1]
```

提示:
```
1 <= inorder.length <= 3000
postorder.length == inorder.length
-3000 <= inorder[i], postorder[i] <= 3000
inorder 和 postorder 都由 不同 的值组成
postorder 中每一个值都在 inorder 中
inorder 保证是树的中序遍历
postorder 保证是树的后序遍历
```

## Java基础补充
### 切片
参考[Java各种切片操作（Array/String/List）](http://t.csdnimg.cn/FY2KX)，很有意思的博主hh
```java
// Array数组
int[] test_int = new int[] {1, 2, 3, 4, 5};
test_int = Arrays.copyOfRange(test_int, 1, 4);
System.out.println(Arrays.toString(test_int));

// String
String test_string = "12345";
test_string = test_string.substring(1, 4);
System.out.println(test_string);

// List数组
ArrayList<Integer> test_list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
// 要把切片过后的list存放在另外一个list对象中!!!
ArrayList<Integer> test_list_2 = new ArrayList<>(test_list.subList(1, 4));
System.out.println(test_list_2);
```

### 数组为空和数组长度为0的区别
```java
int[] n;        // 只声明了一数组变量
int[] nil = null; // 声明一数组变量，并赋值 null, null是一个数组类型的空引用, 不指向任何对象
int[] zero = new int[0]; //声明并创建一数组对象，长度是0
```

注意，切片方法`Arrays.copyOfRange()`里返回的是第三种，只判断是否为null不行
```java
if(array == null || array.length == 0) {...}   // 这种写法正确，因为执行到 “0 == array.length”则说明数组不为空，不会产生空指针异常。
if (array == null) {...} // 无法有效判断
if (array.length == 0 || array == null) {...} // 这种写法可能会产生空指针异常。
```

## 解题思路
中序：左-中-右<br/>
后序：左-右-中

题目的条件是“inorder 和 postorder 都由 不同 的值组成”<br/>
那么从后序可以得知最右的值对应这棵树的根，从而将中序切割成三个部分（左/中/右），再进一步切割后序，进入子树的切割。

利用递归完成。
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
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        if (inorder == null || inorder.length == 0) return null;
        int rootVal = postorder[postorder.length - 1], rootIndex = 0;
        for (int i = 0; i < inorder.length; i++) {
            if (inorder[i] == rootVal) {
                rootIndex = i;
                break;
            }
        }

        // 中inorder：  左(0 ~ rootIndex) / 中(rootIndex) / 右(rootIndex+1 ~ length)
        // 后postorder：左(0 ~ rootIndex) / 右(rootIndex ~ length-1) / 中(length-1)
        TreeNode left = buildTree(Arrays.copyOfRange(inorder, 0, rootIndex), 
            Arrays.copyOfRange(postorder, 0, rootIndex));
        TreeNode right = buildTree(Arrays.copyOfRange(inorder, rootIndex+1, inorder.length),
            Arrays.copyOfRange(postorder, rootIndex, postorder.length-1));
        TreeNode root = new TreeNode(rootVal, left, right);
        return root;
    }
}
```

可以另写一个函数，参数包括数组和当前序列的左右下标，这样就不用每次都另起一个数组，用时和内存占用都更少一点。
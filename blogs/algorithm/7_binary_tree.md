---
title: 代码随想录 | 第七章二叉树总结
date: 2024/03/26
categories:
 - 算法
---
::: tip
**递归三部曲：返回值、参数是什么？终止条件是什么？单层逻辑是什么？**

前/中/后序遍历<br/>
[二叉树遍历](/blogs/algorithm/binary_tree_traversal.md)<br/>
[144.二叉树的前序遍历](/blogs/algorithm/leetcode144.md)<br/>
[145.二叉树的后序遍历](/blogs/algorithm/leetcode145.md)<br/>
[94.二叉树的中序遍历](/blogs/algorithm/leetcode94.md)

层序遍历<br/>
[层序遍历](/blogs/algorithm/binary_tree_traversal.md#层序遍历)<br/>
[102.二叉树的层序遍历](/blogs/algorithm/leetcode102.md)<br/>
[107.二叉树的层次遍历II](/blogs/algorithm/leetcode107.md)<br/>
[199.二叉树的右视图](/blogs/algorithm/leetcode199.md)<br/>
[637.二叉树的层平均值](/blogs/algorithm/leetcode637.md)<br/>
[429.N叉树的层序遍历](/blogs/algorithm/leetcode429.md)<br/>
[515.在每个树行中找最大值](/blogs/algorithm/leetcode515.md)<br/>
[116.填充每个节点的下一个右侧节点指针](/blogs/algorithm/leetcode116.md)<br/>
[117.填充每个节点的下一个右侧节点指针II](/blogs/algorithm/leetcode117.md)<br/>
[104.二叉树的最大深度](/blogs/algorithm/leetcode104.md)<br/>
[111.二叉树的最小深度](/blogs/algorithm/leetcode111.md)

其他<br/>
[226.翻转二叉树](/blogs/algorithm/leetcode226.md)<br/>
[101.对称二叉树](/blogs/algorithm/leetcode101.md)<br/>
[100.相同的树](/blogs/algorithm/leetcode100.md)<br/>
[572.另一个树的子树](/blogs/algorithm/leetcode572.md)<br/>
[104.二叉树的最大深度](/blogs/algorithm/leetcode104.md)<br/>
[559.n叉树的最大深度](/blogs/algorithm/leetcode559.md)<br/>
[111.二叉树的最小深度](/blogs/algorithm/leetcode111.md)<br/>
[222.完全二叉树的节点个数](/blogs/algorithm/leetcode222.md)<br/>
[110.平衡二叉树](/blogs/algorithm/leetcode110.md)<br/>
[257.二叉树的所有路径](/blogs/algorithm/leetcode257.md)<br/>
[404.左叶子之和](/blogs/algorithm/leetcode404.md)<br/>
[513.找树左下角的值](/blogs/algorithm/leetcode513.md)<br/>
[112.路径总和](/blogs/algorithm/leetcode112.md)<br/>
[113.路径总和 II](/blogs/algorithm/leetcode113.md)<br/>
[106.从中序与后序遍历序列构造二叉树](/blogs/algorithm/leetcode106.md)<br/>
[105.从前序与中序遍历序列构造二叉树](/blogs/algorithm/leetcode105.md)<br/>
[654.最大二叉树](/blogs/algorithm/leetcode654.md)<br/>
[617.合并二叉树](/blogs/algorithm/leetcode617.md)<br/>
[700.二叉搜索树中的搜索](/blogs/algorithm/leetcode700.md)<br/>
[98.验证二叉搜索树](/blogs/algorithm/leetcode98.md)<br/>
[530.二叉搜索树的最小绝对差](/blogs/algorithm/leetcode530.md)<br/>
[501.二叉搜索树中的众数](/blogs/algorithm/leetcode501.md)<br/>
[236.二叉树的最近公共祖先](/blogs/algorithm/leetcode236.md)<br/>
[701.二叉搜索树中的插入操作](/blogs/algorithm/leetcode701.md)<br/>
[450.删除二叉搜索树中的节点](/blogs/algorithm/leetcode450.md)<br/>
[669.修剪二叉搜索树](/blogs/algorithm/leetcode669.md)<br/>
[108.将有序数组转换为二叉搜索树](/blogs/algorithm/leetcode108.md)<br/>
[538.把二叉搜索树转换为累加树](/blogs/algorithm/leetcode538.md)
:::

## 二叉树的遍历方式
- 深度优先遍历
    - [前中后序递归法：递归三部曲](/blogs/algorithm/binary_tree_traversal.md#递归遍历)
    - [前中后序迭代法：通过栈模拟递归](/blogs/algorithm/binary_tree_traversal.md#迭代遍历)
    - [前中后序迭代法：统一风格](/blogs/algorithm/binary_tree_traversal.md#统一迭代标记法)
- 广度优先遍历
    - [二叉树的层序遍历：通过队列模拟](/blogs/algorithm/binary_tree_traversal.md#层序遍历)

## 求二叉树的属性
- [是否对称](/blogs/algorithm/leetcode101.md)
- [求最大深度](/blogs/algorithm/leetcode104.md)
- [求最小深度](/blogs/algorithm/leetcode111.md)
- [求有多少个节点](/blogs/algorithm/leetcode222.md)
- [是否平衡](/blogs/algorithm/leetcode110.md)
- [找所有路径](/blogs/algorithm/leetcode257.md)
- [求左叶子之和](/blogs/algorithm/leetcode404.md)
- [求左下角的值](/blogs/algorithm/leetcode513.md)
- [求路径总和](/blogs/algorithm/leetcode112.md)

## 二叉树的修改与构造
- [翻转二叉树](/blogs/algorithm/leetcode226.md)
- [构造二叉树](/blogs/algorithm/leetcode106.md)
- [构造最大的二叉树](/blogs/algorithm/leetcode654.md)
- [合并两个二叉树](/blogs/algorithm/leetcode617.md)

## 求二叉搜索树的属性
- [二叉搜索树中的搜索](/blogs/algorithm/leetcode700.md)
- [是不是二叉搜索树](/blogs/algorithm/leetcode98.md)
- [求二叉搜索树的最小绝对差](/blogs/algorithm/leetcode530.md)
- [求二叉搜索树的众数](/blogs/algorithm/leetcode501.md)
- [二叉搜索树转成累加树](/blogs/algorithm/leetcode538.md)

## 二叉树公共祖先问题
- [二叉树的公共祖先问题](/blogs/algorithm/leetcode236.md)
- [二叉搜索树的公共祖先问题](/blogs/algorithm/leetcode235.md)

## 二叉搜索树的修改与构造
- [二叉搜索树中的插入操作](/blogs/algorithm/leetcode701.md)
- [二叉搜索树中的删除操作](/blogs/algorithm/leetcode450.md)
- [修剪二叉搜索树](/blogs/algorithm/leetcode669.md)
- [构造二叉搜索树](/blogs/algorithm/leetcode108.md)

---
title: LeetCode-117-填充每个节点的下一个右侧节点指针II | 二叉树2-8
date: 2024/03/20
categories:
 - 算法
---
## 117. 填充每个节点的下一个右侧节点指针II
给定一个二叉树：
```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
填充它的每个 `next` 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 `next` 指针设置为 `NULL` 。

初始状态下，所有 `next` 指针都被设置为 `NULL` 。

 
示例 1：
![](/image/2024032006.png)
```
输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。
```
示例 2：
```
输入：root = []
输出：[]
```

提示：
```
树中的节点数在范围 [0, 6000] 内
-100 <= Node.val <= 100
```
进阶：
```
你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。
```

## 解题思路
跟[116. 填充每个节点的下一个右侧节点指针II](/blogs/algorithm/leetcode116.md)一样，只是116是满二叉树、117是二叉树，但代码一致。

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        Queue<Node> queue = new LinkedList<>();
        
        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            int size = queue.size();
            Node pre = null, cur = null;
            for (int i = 0; i < size; i++) {
                if (i == 0) {
                    pre = queue.poll();
                    cur = pre;
                } else {
                    cur = queue.poll();
                    pre.next = cur;
                    pre = cur;
                }
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
            }
        }
        return root;
    }
}
```
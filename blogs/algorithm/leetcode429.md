---
title: LeetCode-429-N叉树的层序遍历 | 二叉树8
date: 2024/03/20
categories:
 - 算法
---
## 429. N 叉树的层序遍历
给定一个 N 叉树，返回其节点值的*层序遍历*。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 `null` 值分隔（参见示例）。
 

示例 1：
![](/image/2024032004.png)
```
输入：root = [1,null,3,2,4,null,5,6]
输出：[[1],[3,2,4],[5,6]]
```
示例 2：
![](/image/2024032005.png)
```
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
```

提示：
```
树的高度不会超过 1000
树的节点总数在 [0, 10^4] 之间
```

## 解题思路
先看下节点定义
```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
```

层序遍历，只是子节点的存储方式不同，子节点存在children列表里
```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> layers = new ArrayList<>();
        Queue<Node> queue = new LinkedList<>();

        if (root != null) {
            queue.add(root);
        }
        while (queue.size() != 0) {
            int size = queue.size();
            List<Integer> layer = new LinkedList<>();
            for (int i = 0; i < size; i++) {
                Node cur = queue.poll();
                layer.add(cur.val);
                for (Node child: cur.children) {
                    queue.add(child);
                }
            }
            layers.add(layer);
        }
        return layers;
    }
}
```
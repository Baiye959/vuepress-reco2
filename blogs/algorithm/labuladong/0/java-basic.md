---
title: labuladong | 写算法题所需的 Java 基础
date: 2024/08/01
categories:
 - 算法
---
## 优先级队列，最小堆
```java
// 创建
PriorityQueue<ListNode> pq = new PriorityQueue<>(
    lists.length, (a, b)->(a.val - b.val));
// 将节点加入最小堆
pq.add(head);
// 获取堆中最小节点（并从堆中删除）
ListNode node = pq.poll();
// 最小堆不为空
while (!pq.isEmpty()) {}
```
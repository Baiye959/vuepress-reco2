---
title: 算法系列二 | 双指针技巧秒杀七道链表题目
date: 2024/08/02
categories:
 - 算法
---
## 合并两个有序链表（力扣第 21 题「合并两个有序链表」）
**当你需要创造一条新链表的时候，可以使用虚拟头结点简化边界情况的处理。**

两个有序链表合并为一个有序链表，只需比较当前头结点，谁小谁加入结果链表即可。
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(-1);
        ListNode cur = dummy;
        ListNode p1 = list1, p2 = list2;

        while (p1 != null && p2 != null) {
            if (p1.val < p2.val) {
                cur.next = p1;
                p1 = p1.next;
            } else {
                cur.next = p2;
                p2 = p2.next;
            }
            cur = cur.next;
        }

        if (p1 != null) {
            cur.next = p1;
        } else {
            cur.next = p2;
        }

        return dummy.next;
    }
}
```

## 单链表的分解（力扣第 86 题「分隔链表」）
使所有小于x的节点都在大于x的节点之前，并保留两个分区中节点的初始位置：这里已经给了提示“两个分区”——只要将小于x的节点分到链表1、大于x的节点分到链表2，然后把链表1和链表2连起来即可。实际上是链表一分二。
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode dummy1 = new ListNode(-1), dummy2 = new ListNode(-1);
        ListNode p1 = dummy1, p2 = dummy2;
        ListNode cur = head;
        while (cur != null) {
            if (cur.val < x) {
                p1.next = cur;
                p1 = p1.next;
            } else {
                p2.next = cur;
                p2 = p2.next;
            }

            cur = cur.next;
        }
        
        p1.next = dummy2.next;
        // 此处注意末尾指向null，避免成环
        p2.next = null;

        return dummy1.next;
    }
}
```

## 合并 k 个有序链表（力扣第 23 题「合并K个升序链表」）
与合并两个有序链表相似，只需比较k个有序链表的当前头节点即可，这里使用优先级队列来获得k个当前头节点中最小的那个。

优先级队列，最小堆
```java
// 优先级队列，最小堆
PriorityQueue<ListNode> pq = new PriorityQueue<>(
    lists.length, (a, b)->(a.val - b.val));
```

整题代码
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists.length == 0) return null;

        // 虚拟头节点
        ListNode dummy = new ListNode(-1), p = dummy;
        // 优先级队列，最小堆
        PriorityQueue<ListNode> pq = new PriorityQueue<>(
            lists.length, (a, b) -> (a.val - b.val));
        
        // 初始化最小堆，将最初的头结点加入最小堆
        for (ListNode head: lists) {
            if (head != null) {
                pq.add(head);
            }
        }

        while (!pq.isEmpty()) {
            ListNode cur = pq.poll();
            p.next = cur;
            p = p.next;
            if (cur.next != null) {
                pq.add(cur.next);
            }
        }

        return dummy.next;
    }
}
```

## 单链表的倒数第 k 个节点（力扣第 19 题「删除链表的倒数第 N 个结点」）
用快慢指针，快指针先走k步，然后快慢指针一起走。这样快指针指向null时，慢指针就指向倒数第k个节点。<br/>
注意使用虚拟头结点，不然删除头结点需要特殊处理
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    // 删除倒数第n个节点，需要找到倒数第n+1个节点
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(-1, head);
        ListNode fast = dummy, slow = dummy;
        // 快指针先走n+1步
        for (int i = 0; i < n + 1; i++) {
            fast = fast.next;
        }
        // 快慢指针一起走，直到快指针指向null
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}
```

## 单链表的中点（力扣第 876 题「链表的中间结点」）
使用快慢指针，快指针一次走2步、慢指针一次走1步，快指针指向null时、慢指针就指向中间节点。
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode dummy = new ListNode(-1, head);
        ListNode fast = dummy, slow = dummy;

        while (fast != null) {
            // fast走两步 / fast更新为null
            if (fast.next != null) {
                fast = fast.next;
            }
            fast = fast.next;

            // slow走一步
            slow = slow.next;
        }

        return slow;
    }
}
```

## 判断链表是否包含环（力扣第 142 题「环形链表 II」）
使用快慢指针，快指针一次走两步、慢指针一次走一步，如果快指针总不为null且快慢指针相遇，则链表含环。<br/>
例题还需要找到环的起点，这里借两张图。<br/>
设相遇时慢指针走了k步，则快指针走了2k步
![](/image/2024091101.png)
假设环的起点离相遇点有m步，则相遇点离环起点有k-m步。那么将指针1放在head处、指针2放在相遇点，它们同时走k-m步时就会相遇在环的起点。
![](/image/2024091102.png)
```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode fast = head, slow = head;
        // fast走两步、slow走一步，直到相遇或遇上null
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            // 相遇则退出
            if (fast == slow) {
                break;
            }
        }
        // 如果fast因为将指向null而退出循环，则无环
        if (fast == null || fast.next == null) {
            return null;
        }

        // 将某指针置为head，让它们以同速重新相遇
        slow = head;
        while (fast != slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    }
}
```

## 两个链表是否相交（力扣第 160 题「相交链表」）
问题在于怎么让两个指针同时走到相交节点。<br/>
这里设相交部分长度为c、链表A长度为a+c、链表B长度为b+c，则让指针p1遍历完链表A后接着遍历链表B、让指针p2遍历完链表B后接着遍历链表A，则二者会在走完a+c+b（即b+c+a）后同时到达相交节点。<br/>
如果不相交，则二者会在走完a+c+b+c（即b+c+a+c）后同时到达null。
```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode p1 = headA, p2 = headB;
        while (p1 != p2) {
            if (p1 != null) {
                p1 = p1.next;
            } else {
                p1 = headB;
            }

            if (p2 != null) {
                p2 = p2.next;
            } else {
                p2 = headA;
            }
        }
        return p1;
    }
}
```
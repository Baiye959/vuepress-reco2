---
title: LeetCode-142-环形链表 II | 链表6
date: 2024/03/01
categories:
 - 算法
---
## 142. 环形链表 II

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 <i>如果链表无环，则返回 `null`。</i>

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（<b>索引从 `0` 开始</b>）。如果 `pos` 是 `-1`，则在该链表中没有环。<b>注意：`pos` 不作为参数进行传递</b>，仅仅是为了标识链表的实际情况。

<b>不允许修改</b> 链表。

示例 1：

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```
示例 2：
```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```
示例 3：
```
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

提示：
```
链表中节点的数目范围在范围 [0, 10^4] 内
-10^5 <= Node.val <= 10^5
pos 的值为 -1 或者链表中的一个有效索引
```
 
进阶：你是否可以使用 `O(1)` 空间解决此题？

## 解题思路
如何判断链表有无环？——用快指针和慢指针，如果两个指针相遇则链表有环（如果无环、为一条直链，则一定不会相遇）。

为什么有环时，快慢指针一定会相遇？——设置快指针一次走两步、慢指针一次走一步，则两者均入环时，快指针是以一次一步的相对速度接近慢指针，就一定会相遇（如果是快3慢1就不一定相遇了）。

怎么求环的入口？——这需要经过一定的数学推导：由 $ 2(x+y) = x+(y+z)*n+y $ 可以推出 $ x = (y+z)*(n-1)+z $ ，这意味着如果有两个一次走一步的指针A和B，A从链表头出发、B同时从快慢指针相遇点出发，那么他们会在环的入口相遇。

代码实现如下：
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
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) break;
        }
        if (fast == null || fast.next == null) return null;

        ListNode a = head, b = fast;
        while (a != b) {
            a = a.next;
            b = b.next;
        }
        return a;
    }
}
```
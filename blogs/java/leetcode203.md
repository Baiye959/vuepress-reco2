---
title: LeetCode-203-移除链表元素 | 链表1
date: 2024/02/28
categories:
 - 算法
---
## 203. 移除链表元素

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 <b>新的头节点</b> 。

示例 1：
![](/image/2024022801.jpg)
```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```
示例 2：
```
输入：head = [], val = 1
输出：[]
```
示例 3：
```
输入：head = [7,7,7,7], val = 7
输出：[]
```

提示：
```
列表中的节点数目在范围 [0, 10^4] 内
1 <= Node.val <= 50
0 <= val <= 50
```

## java基础补充

首先了解一下java中的链表实现，本题是下面这样（注意Java中没有指针，访问节点内容得用'.'）：
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
```

## 解题思路

一种思路是直接对原链表进行操作，则要分为头节点和非头节点进行删除操作。注意删除头节点会产生新的头节点，因此对头节点的判断删除操作要用while循环。

另一种思路则是添加虚拟头节点，这种做法在链表相关题中很常见，是为了能不特殊处理头节点（添加虚拟头节点后，头节点之前也有节点指向它了，可以跟非头节点一样处理）。<br/>
注意检查节点的值时，当前节点应该是检查节点的上一个节点，不然删除时无法找到上一个节点。

```java
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        // if (head == null) return head;
        ListNode dummyhead = new ListNode(-1, head);
        ListNode cur = dummyhead;
        while (cur.next != null) {
            if (cur.next.val == val) {
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }
        return dummyhead.next;
    }
}
```
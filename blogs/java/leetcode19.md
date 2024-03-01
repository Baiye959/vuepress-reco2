---
title: LeetCode-19-删除链表的倒数第 N 个结点 | 链表5
date: 2024/03/01
categories:
 - 算法
---
## 19. 删除链表的倒数第 N 个结点
给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

示例 1：
![](/image/2024030103.jpg)
```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```
示例 2：
```
输入：head = [1], n = 1
输出：[]
```
示例 3：
```
输入：head = [1,2], n = 1
输出：[1]
```

提示：
```
链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
```

进阶：你能尝试使用一趟扫描实现吗？

## 解题思路
同样，为了免除对头节点的特殊判断，使用虚拟头结点。<br/>
使用双指针的方法，分为快慢指针，都从头往尾移动，步骤如下：
1. 快指针先多走`n+1`步；
2. 快慢指针同频向右移动；
3. 当快指针指向null时，慢指针指向要删除节点的上一个节点；
4. 执行删除操作。

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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummyhead = new ListNode(0, head), fast = dummyhead, slow = dummyhead;
        
        // 快指针先走 n+1 步
        n ++;
        while (n != 0 && fast != null) {
            fast = fast.next;
            n --;
        }

        // 快慢指针同频移动，直到快指针指向null
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        // 删除指定节点
        slow.next = slow.next.next;

        // 使用虚拟头节点时的最终头节点
        return dummyhead.next;
    }
}
```
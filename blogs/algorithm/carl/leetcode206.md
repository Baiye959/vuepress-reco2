---
title: LeetCode-206-反转链表 | 链表3
date: 2024/02/29
categories:
 - 算法
---
## 206. 反转链表
给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。
 
示例 1：
![](/image/2024022901.jpg)
```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

示例 2：
![](/image/2024022902.jpg)
```
输入：head = [1,2]
输出：[2,1]
```
示例 3：
```
输入：head = []
输出：[]
```

提示：
```
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
```

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

## 解题思路
### 解法一（双指针）
使用双指针，指针`cur`指向当前节点、指针`pre`指向上一节点，方便指针翻转。<br/>
注意需要在每次循环开始时，记录下一节点，不然指针翻转后会无法找到下一节点，可以用指针`temp`存储。<br/>
终止条件：无当前节点，即指针`cur`为空。

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
    public ListNode reverseList(ListNode head) {
        ListNode cur = head, pre = null, temp;
        while (cur != null) {
            temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
        return pre;
    }
}
```

### 解法二（递归）
递归的处理过程实际上跟双指针解法一致，但是思路比双指针更难理解一些。<br/>
实际上，递归就是将每次的指针翻转包装成一个函数，然后在函数的最后进入下一次的指针翻转。<br/>
函数退出的条件同样是指针`cur`为空。

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
    public ListNode oneReverse(ListNode cur, ListNode pre) {
        if (cur == null) return pre;
        ListNode temp = cur.next;
        cur.next = pre;
        return oneReverse(temp, cur);
    }
    public ListNode reverseList(ListNode head) {
        return oneReverse(head, null);
    }
}
```
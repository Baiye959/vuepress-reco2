---
title: LeetCode-24-两两交换链表中的节点 | 链表4
date: 2024/03/01
categories:
 - 算法
---
## 24. 两两交换链表中的节点
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

示例 1：
![](/image/2024030101.jpg)
```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```
示例 2：
```
输入：head = []
输出：[]
```
示例 3：
```
输入：head = [1]
输出：[1]
```

提示：
```
链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
```

## 解题思路
偶数节点正好两两交换，奇数节点则最后一个节点无需交换。<br/>
交换非头节点时，交换一次的过程如下图：
![](/image/2024030102.png)

为了统一交换流程，不被头节点干扰，使用虚拟头节点（即：在头节点前添加一个虚拟头结点`dummyhead`指向头节点，这样操作时头节点也和非头节点一致了，注意最终的头节点应该是`dummyhead.next`、而不是`head`）<br/>
在交换时，为了能找到所有要用的节点，当前节点`cur`应该是参与交换的节点的上一节点（如上图），可以用`temp1`和`temp2`分别记录参与交换的左节点和右节点，同时在交换时应该注意修改指针的顺序和`cur.next`的实际值。

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
    public ListNode swapPairs(ListNode head) {
        ListNode dummyhead = new ListNode(0, head), cur = dummyhead;
        while (cur.next != null && cur.next.next != null) {
            ListNode temp1 = cur.next, temp2 = cur.next.next;
            cur.next = temp2;
            temp1.next = temp2.next;
            temp2.next = temp1;
            cur = temp1;
        }
        return dummyhead.next;
    }
}
```
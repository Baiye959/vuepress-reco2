---
title: LeetCode-160-相交链表 | 链表6
date: 2024/03/09
categories:
 - 算法
---
## 160. 相交链表
给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

图示两个链表在节点 c1 开始相交：
![](/image/2024030902.png)


题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

自定义评测：

评测系统 的输入如下（你设计的程序 不适用 此输入）：

`intersectVal` - 相交的起始节点的值。如果不存在相交节点，这一值为 `0`
`listA` - 第一个链表
`listB` - 第二个链表
`skipA` - 在 `listA` 中（从头节点开始）跳到交叉节点的节点数
`skipB` - 在 `listB` 中（从头节点开始）跳到交叉节点的节点数
评测系统将根据这些输入创建链式数据结构，并将两个头节点 `headA` 和 `headB` 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。
 

示例 1：
![](/image/2024030903.png)
```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
```

示例 2：
![](/image/2024030904.png)
```
输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

示例 3：
![](/image/2024030905.png)
```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
```

提示：
```
listA 中节点数目为 m
listB 中节点数目为 n
1 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
如果 listA 和 listB 没有交点，intersectVal 为 0
如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]
```

进阶：你能否设计一个时间复杂度 `O(m + n)` 、仅用 `O(1)` 内存的解决方案？

## 解题思路
### 解法一
刚看题目的想法是同时遍历两条链表、对两个指针作比较，但怎么让两个指针同时到达交点？<br/>
可以先遍历一次，得出两条链表的长度，这题的相交是二汇一、不再错开，那么只要保证同时到达各自的终点，就能保证同时到达交点（如果有的话）

解题步骤：
1. 遍历两条链表得到它们的长度
2. 若链表A长度m、链表B长度n，且m>n，则让链表A先走`m-n`步
3. 两个指针同时走，如果相等则为交点、走到终点以后（即为null）则无交点

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode curA = headA;
        ListNode curB = headB;
        int lenA = 0, lenB = 0;
        while (curA != null) { // 求链表A的长度
            lenA++;
            curA = curA.next;
        }
        while (curB != null) { // 求链表B的长度
            lenB++;
            curB = curB.next;
        }
        curA = headA;
        curB = headB;
        // 让curA为最长链表的头，lenA为其长度
        if (lenB > lenA) {
            //1. swap (lenA, lenB);
            int tmpLen = lenA;
            lenA = lenB;
            lenB = tmpLen;
            //2. swap (curA, curB);
            ListNode tmpNode = curA;
            curA = curB;
            curB = tmpNode;
        }
        // 求长度差
        int gap = lenA - lenB;
        // 让curA和curB在同一起点上（末尾位置对齐）
        while (gap-- > 0) {
            curA = curA.next;
        }
        // 遍历curA 和 curB，遇到相同则直接返回
        while (curA != null) {
            if (curA == curB) {
                return curA;
            }
            curA = curA.next;
            curB = curB.next;
        }
        return null;
    }

}
```

### 解法二
在群里看别人的代码发现一个新思路
![](/image/2024031005.png)

1. 让两个指针分别从链表A的头节点和链表B的头节点开始遍历
2. 指针遍历完链表A就开始遍历链表B，同理遍历完链表B就开始遍历链表A
3. 两指针相等时即在相交点

两个指针走的路程分别是`a+x+b`和`b+x+a`时，恰好在相交点

那么如何判断出不相交的情况呢？<br/>
假设链表A长度为a，链表B长度为b，那么它们走的路程分别为`a+b`和`b+a`时，就会同时到链表末端。<br/>
稍微修改代码，让指针每次走到尾节点的next（也就是null），再开始遍历另一个链表，这样它们走的路程分别为`a+1+b+1`和`b+1+a+1`时，就会同时、分别在两个链表的尾节点的next（null），这样如果指针相等就是找到了相交点/判断不相交。

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA, b = headB;
        while (a != b) {
            if (a != null) { // 注意这里不能是a.next != null
                a = a.next;
            } else {
                a = headB;
            }

            if (b != null) { // 注意这里不能是b.next != null
                b = b.next;
            } else {
                b = headA;
            }
        }

        return a;
    }
}
```
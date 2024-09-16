---
title: 算法系列二 | 双指针技巧秒杀七道数组题目
date: 2024/08/04
categories:
 - 算法
---
## 一、快慢指针技巧
### 原地修改
#### 力扣第 26 题「删除有序数组中的重复项」
数组原地删除，使用快慢指针：快指针在前探路，找到不重复元素就赋值给慢指针位并让慢指针前进一步。
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        
        int slow = 1;
        for (int fast = 1; fast < nums.length; fast++) {
            if (nums[fast] != nums[fast - 1]) {
                nums[slow] = nums[fast];
                slow ++;
            }
        }

        return slow;
    }
}
```

#### 力扣第 83 题「删除排序链表中的重复元素」
与数组去重一致，只是将数组操作改为链表操作
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
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) {
            return null;
        }

        ListNode fast = head, slow = head;
        for (; fast != null; fast = fast.next) {
            if (fast.val != slow.val) {
                slow.next = fast;
                slow = slow.next;
            }
        }

        slow.next = null;
        return head; 
    }
}
```

#### 力扣第 27 题「移除元素」
跟数组去重思路一致，只是留下元素条件变为不等于val
```java
class Solution {
    public int removeElement(int[] nums, int val) {
        if (nums.length == 0) {
            return 0;
        }

        int slow = 0;
        for (int fast = 0; fast < nums.length; fast ++) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow ++;
            }
        }

        return slow;
    }
}
```

#### 力扣第 283 题「移动零」
相当于移除所有零，然后把后面的元素都赋值为零。
```java
class Solution {
    public void moveZeroes(int[] nums) {
        if (nums.length == 0) return;

        int slow = 0;
        for (int fast = 0; fast < nums.length; fast ++) {
            if (nums[fast] != 0) {
                nums[slow] = nums[fast];
                slow ++;
            }
        }

        for (; slow < nums.length; slow ++) {
            nums[slow] = 0;
        }
    }
}
```

### 滑动窗口
滑动窗口的基本框架（伪代码）如下，左闭右开 `[left, right)`
```java
int left = 0, right = 0;
while (right < nums.length) {
    // 增大窗口
    window.addLast(nums[right]);
    right ++;

    while (window needs shrink) {
        // 缩小窗口
        window.removeFirst(nums[left]);
        left ++;
    }
}
```

## 二、左右指针的常用算法
### 二分查找
左右指针初始化为头尾，通过判断条件调整左右指针为当前中间位，使查找的时间复杂度降低。

### n数之和
左右指针初始化为头尾，通过判断条件调整左右指针向中间移动，使目标和的遍历从O(n^2)变为O(n)。

### 反转数组
左右指针初始化为头尾，依次交换并向中移动。

### 回文串判断
回文串的两种情况（奇数个元素组成 / 偶数个元素组成），可以使左右指针从回文串中心出发、比对并移动左右指针得到最长回文串。
```java
// 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
String palindrome(String s, int l, int r) {
    // 防止索引越界
    while (l >= 0 && r < s.length()
            && s.charAt(l) == s.charAt(r)) {
        // 双指针，向两边展开
        l--; r++;
    }
    // 返回以 s[l] 和 s[r] 为中心的最长回文串
    return s.substring(l + 1, r);
}
```

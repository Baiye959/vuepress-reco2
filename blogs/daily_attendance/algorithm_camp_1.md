---
title: 代码随想录算法训练营第一天 | 数组理论基础，704.二分查找，27.移除元素  
date: 2024/03/06
categories:
 - 打卡
---
## 数论基础
- [文章链接](https://programmercarl.com/%E6%95%B0%E7%BB%84%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html)

## 704. 二分查找
### 题目
给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target`  ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`。

示例 1:
```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```
示例 2:
```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

提示：
```
你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
```

### 解题思路

二分查找算法，常根据使用的下标区间划分为两类——左闭右闭和左闭右开。<br/>
假设数组下标为`0`~`numsize-1`，那么最初选取下标区间为[`0`, `numsize-1`]为左闭右闭，最初选取下标区间为[`0`, `numsize`)为左闭右开<br/>

编写二分算法时，细节上要根据搜索区间选择的区间类型来处理，例如：

while循环条件`left?right`要根据区间合理性来处理：<br/>
左闭右闭——区间`[1, 1]`合理——`left<=right`<br/>
左闭右开——区间`[1, 1)`不合理——`left<right`

更新区间端点`left`和`right`更容易理解：<br/>
如果`mid`不等于`target`，则区间不应该包括`mid`，区间边界需要相应调整为`mid`、`mid+1`或`mid-1`

左闭右闭代码：
```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid]>target) {
                right = mid - 1;
            } else if (nums[mid]<target) {
                left = mid + 1;
            } else return mid;
        }

        return -1;
    }
}
```

左闭右开代码：
```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length;
        
        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid]>target) {
                right = mid;
            } else if (nums[mid]<target) {
                left = mid + 1;
            } else return mid;
        }

        return -1;
    }
}
```

## 27. 移除元素
### 题目
给你一个数组 `nums` 和一个值 `val`，你需要 <b>原地</b> 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 <b>原地</b> 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:
```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

示例 1：
```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```
示例 2：
```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,3,0,4]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

提示：
```
0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
```

### 解题思路

一种思路是暴力遍历。外循环遍历所有元素、判断是否等于`val`，如果等于则进入内循环，将所有后面的元素向前移动一位。

另一种思路则是双指针。分为快慢指针，快慢指针都从左往右遍历，快指针只指向需要留下的数、慢指针则在每次记录留下的数时才前进。将快指针指向的数赋值给慢指针指向的元素，则快指针遍历完原数组就完成修改，且此时慢指针指向新数组最后一个元素的后面，慢指针下标正好就是数组的新长度。

双指针代码：
```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int slow = 0;
        for (int fast = 0;fast < nums.length; fast++) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        return slow;
    }
}
```
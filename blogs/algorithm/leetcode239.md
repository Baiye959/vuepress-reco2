---
title: LeetCode-239-滑动窗口最大值 | 栈与队列6
date: 2024/03/17
categories:
 - 算法
---
## 239. 滑动窗口最大值
给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回 *滑动窗口中的最大值* 。


示例 1：
```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```
示例 2：
```
输入：nums = [1], k = 1
输出：[1]
```

提示：
```
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length
```

## Java基础补充
Deque - 双向队列
> 注：Java堆栈Stack类已经过时，Java官方推荐使用Deque替代Stack使用。

```java
Deque<E> deque = new LinkedList<>();
int size();
```
| 第一个元素 (头部) | 抛出异常 | 特殊值 |
|:-:|:-:|:-:|
| 插入 | addFirst(e) | offerFirst(e) |
| 删除 | removeFirst() | pollFirst() |
| 检查 | getFirst() | peekFirst() |

| 最后一个元素 (尾部) | 抛出异常 | 特殊值 |
|:-:|:-:|:-:|
| 插入 | addLast(e) | offerLast(e) |
| 删除 | removeLast() | pollLast() |
| 检查 | getLast() | peekLast() |

## 解题思路
单调队列问题，只要维护当前窗口的最大值和有可能成为右边窗口最大值的元素即可。<br/>
也就是说维护的单调队列的元素特征（从队头到队尾）——下标从小到大、元素值从大到小。<br/>
为什么是单调递减队列？——如果有一个元素下标又小、元素值又小，那么它既不是当前窗口的最大值（维护的队列里就有比它大的），也不可能成为右边窗口的最大值（它只会在 右边比它大的元素 之前被弹出窗口）

另外，这里因为要维护队列为单调递减，需要队列两边都能进出，应该选择双向队列deque
```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] ret = new int[nums.length - k + 1];
        int idx = 0; // 记录ret记录个数
        Deque<Integer> deque = new LinkedList<>(); // 维护的单调队列，存下标
        for (int i = 0; i < nums.length; i++) {
            // 1. 队列头元素下标要在当前窗口[i - k + 1, i]内
            while (deque.size() != 0 && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            // 2. 为了添加当前元素，要将队列尾部元素值比它小的都弹出
            while (deque.size() != 0 && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            // 3. 添加当前元素
            deque.addLast(i);
            // 4. 如果构成滑动窗口，那么此时单调队列维护成功，队列头元素就是滑动窗口中的最大值
            if (i >= k - 1) {
                ret[idx ++] = nums[deque.peekFirst()];
            }
        }
        
        return ret;
    }
}
```
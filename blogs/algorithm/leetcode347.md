---
title: LeetCode-347-前 K 个高频元素 | 栈与队列7
date: 2024/03/17
categories:
 - 算法
---
## 347. 前 K 个高频元素
给你一个整数数组 `nums` 和一个整数 `k` ，请你返回其中出现频率前 `k` 高的元素。你可以按 **任意顺序** 返回答案。


示例 1:
```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```
示例 2:
```
输入: nums = [1], k = 1
输出: [1]
```

提示：
```
1 <= nums.length <= 10^5
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
```

进阶：你所设计算法的时间复杂度 **必须** 优于 `O(n log n)` ，其中 `n` 是数组大小。

## Java基础补充
- 小顶堆：堆顶最小
- 大顶堆：堆顶最大

```java
// 用优先队列实现小顶堆和大顶堆
// 小顶堆（k是初始化大小，(a,b)->a-b是重写比较器的lambda表达式，小顶堆可以省略）
PriorityQueue<Integer> minHeap = new PriorityQueue<>(k, (a,b)->a-b);

// 大顶堆（k是初始化大小，(a,b)->b-a是重写比较器的lambda表达式，大顶堆不能省略）
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(k, (a,b)->b-a);
```
| PriorityQueue使用方法 | 抛出异常 | 特殊值 |
|:-:|:-:|:-:|
| 插入 | add(E e) | offer(E e) |
| 删除 | remove() | poll() |
| 检查 | element() | peek() |
```java
// PriorityQueue其他方法
boolean contains(E e); // 在优先级队列中搜索指定的元素。如果找到该元素，则返回true，否则返回false。
int size(); // 返回优先级队列的长度。
E[] toArray(); // 将优先级队列转换为数组，并返回它。
```

> 顺带一提：PriorityQueue的发音是Pri/ori/ty/Q

## 解题思路
### 解法一（哈希+排序）
该解法的时间复杂度是 哈希O(n) + 排序O(nlogn) + 输出O(n) = O(nlogn)<br/>
暂时不写了

### 解法二（哈希+小顶堆）
该解法的时间复杂度是 遍历O(n) + 维护小顶堆O(klogk) + 输出O(k) = O(n) 或 O(klogk) < O(nlogn)

除了要用优先列表实现小顶堆外，本题堆里存的是一对值，实现小顶堆的代码如下：<br/>
`PriorityQueue<int[2]> minHeap = new PriorityQueue<>((o1, o2) -> o1[1] - o2[1]);`

另外，由于本题元素值范围较大（$ 1 <= nums.length <= 10^5 $）且要存一对值，所以用map结构实现哈希表。
```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num: nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<int[]> minHeap = new PriorityQueue<>((o1, o2)->o1[1]-o2[1]);
        for(var cur : map.entrySet()) { // entrySet 获取 k-v Set 集合
            int[] pair = new int[2];
            pair[0] = cur.getKey();
            pair[1] = cur.getValue();
            minHeap.offer(pair);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        int[] ret = new int[k];
        for (int i = 0; i < k; i++) {
            ret[i] = minHeap.poll()[0];
        }
        return ret;
    }
}
```
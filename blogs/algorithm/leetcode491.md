---
title: LeetCode-491-递增子序列 | 回溯10
date: 2024/04/09
categories:
 - 算法
---
::: info
- [力扣题目链接](https://leetcode.cn/problems/non-decreasing-subsequences/)
- [题目链接/文章讲解](https://programmercarl.com/0491.%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97.html)
- [视频讲解](https://www.bilibili.com/video/BV1EG4y1h78v)
:::

## Java基础补充（LinkedList）
[菜鸟教程 Java LinkedList](https://www.runoob.com/java/java-linkedlist.html)
```java
public E get(int index);	返回指定位置的元素。
public E getFirst();	返回第一个元素。
public E getLast();	返回最后一个元素。
public int indexOf(Object o);	查找指定元素从前往后第一次出现的索引。
public int lastIndexOf(Object o);	查找指定元素最后一次出现的索引。
public E removeFirst();	删除并返回第一个元素。
public E removeLast();	删除并返回最后一个元素。
```

## 解题思路
递增子序列中至少有两个元素——加入结果集的条件。

不同的递增子序列——要去重，本题无法利用排序简化（排序会打乱序列元素顺序）。<br/>
怎么去重？只要保证本层没有重复元素就行，那么在循环时（本层选取元素）用一个哈希表记录已选元素值即可，这里元素值范围[-100, 100]，选数组当哈希表。

```java
class Solution {
    List<List<Integer>> ret = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> findSubsequences(int[] nums) {
        backtracking(nums, 0);
        return ret;
    }

    public void backtracking(int[] nums, int startIndex) {
        if (path.size() >= 2) {
            ret.add(new LinkedList(path));
        }
        if (startIndex == nums.length) return;

        boolean[] used = new boolean[205]; // -100~100 -> 0~200
        for (int i = startIndex; i < nums.length; i++) {
            if (path.size() != 0 && (path.getLast() > nums[i])) { // 非递增
                continue;
            }
            if (used[nums[i] + 100]) { // 本层用过
                continue;
            }

            path.add(nums[i]);
            used[nums[i] + 100] = true;
            backtracking(nums, i + 1);
            path.removeLast();
        }
    }
}
```
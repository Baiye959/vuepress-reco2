---
title: 代码随想录算法训练营第二天 | 977.有序数组的平方 ，209.长度最小的子数组 ，59.螺旋矩阵II ，数组总结 
date: 2024/03/07
categories:
 - 打卡
---
## 977. 有序数组的平方
### 题目
给你一个按 <b>非递减顺序</b> 排序的整数数组 `nums`，返回 <b>每个数字的平方</b> 组成的新数组，要求也按 <b>非递减顺序</b> 排序。
 

示例 1：
```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```
示例 2：
```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

提示：
```
1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums 已按 非递减顺序 排序
```

进阶：

请你设计时间复杂度为 O(n) 的算法解决本问题

### 解题思路

一种思路是先遍历平方，再排序，那么时间复杂度是0(nlogn)。

另一种思路则是根据本题特征使用双指针。<br/>
按题目描述，平方后的大小关系应该如下图（先变小后变大）
![](/image/2024022601.png)

从左到中为一个递减数组、从右到中为一个递减数组，那么实际上题目就变成了合并两个递减数组（注意最终目标是递增数组）。<br/>
可以使用双指针，左指针从左向右、右指针从右向左，比较两个元素、较大的倒序放入数组。<br/>
这里不用特殊考虑两个递减数组的长度是否相等，即使只有一个递减数组，按这种操作也不会出错，那么结束循环只需左右指针错开即可（换句话说循环条件为left<=right，如果不等于、最中间那个元素可能会遗漏）

双指针代码：
```java
class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] ret = new int[nums.length];
        for (int i = 0, j = nums.length - 1, k = nums.length - 1;i <= j; ) {
            if (Math.pow(nums[i], 2) >= Math.pow(nums[j], 2)) {
                ret[k--] = (int)Math.pow(nums[i], 2);
                i ++;
            } else {
                ret[k--] = (int)Math.pow(nums[j], 2);
                j --;
            }
        }
        return ret;
    }
}
```

## 209. 长度最小的子数组
### 题目
给定一个含有 `n` 个正整数的数组和一个正整数 `target` 。

找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 `[nums_l, nums_(l+1), ..., nums_(r-1), nums_r]` ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：
```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```
示例 2：
```
输入：target = 4, nums = [1,4,4]
输出：1
```
示例 3：
```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

提示：
```
1 <= target <= 10^9
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^5
```

进阶：

如果你已经实现 `O(n)` 时间复杂度的解法, 请尝试设计一个 `O(n log(n))` 时间复杂度的解法。

### 解题思路

一种暴力解题思路为双层循环遍历，计算所有n*n种子数组之和，记录当前符合条件的最小长度。

另一种思路则是滑动窗口，其本质其实也是双指针，但因为是判断所夹窗口的特征，称为滑动窗口。<br/>
两个指针均从左向右滑动，根据在窗口的左右称为左端点和右端点（选择区间类型为左闭右闭），窗口总和未达到`target`时右端点移动、窗口总和去掉左端点仍然大于等于`target`时左端点移动，这样就可以找到符合条件的最小子数组。<br/>
需要注意的是本题使用双指针的移动方向，如果右端点不是始终向一个方向移动、而是双向来回移动，那么与双层循环无异，时间复杂度仍是`O(n^2)`

```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int sum = 0, ret = nums.length+1;
        for ( int l=0, r=0; r<nums.length; r++) {
            sum += nums[r];

            while (sum-nums[l] >= target) {
                sum -= nums[l];
                l ++;
            }
            if (sum >= target)
                ret = Math.min(ret, r-l+1);
        }

        if (ret > nums.length) return 0;
        return ret;
    }
}
```

## 59. 螺旋矩阵II
### 题目
给你一个正整数 `n` ，生成一个包含 `1` 到 `n^2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。


示例 1：
![](/image/2024-02-27-152618.png)
```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```
示例 2：
```
输入：n = 1
输出：[[1]]
```

提示：
```
1 <= n <= 20
```

### 解题思路

本题的关键词是模拟和循环不变量。<br/>
为了在处理过程中头尾相接更方便，逐层处理、每条边都左闭右开，这样一共处理n/2层，n为奇数时补上最中间那个元素，如下图。
![](/image/2024022702.png)
![](/image/2024022703.png)

定义每层左上角坐标为`(startx, starty)`，为方便计算结束位置再设偏移量`offset`初始值为1、每深一层加2，填入值即为处理过的元素个数cnt。

```java
class Solution {
    public int[][] generateMatrix(int n) {
        int[][] ret = new int[n][n];
        int startx = 0, starty = 0, cnt = 1;
        for ( int offset=1; offset <= n; offset += 2, startx++, starty++){
            int i, j;
            for ( i=startx, j=starty; j < startx+n-offset; j++)
                ret[i][j] = cnt++;
            for ( ; i < startx+n-offset; i++)
                ret[i][j] = cnt++;
            for ( ; j > starty; j--)
                ret[i][j] = cnt++;
            for ( ;i > startx; i--)
                ret[i][j] = cnt++;
        }
        if (n%2 == 1) ret[n/2][n/2] = cnt; 
        return ret;
    }
}
```

## 数组总结
::: warning
未写，参考[代码随想录-数组总结篇](https://programmercarl.com/%E6%95%B0%E7%BB%84%E6%80%BB%E7%BB%93%E7%AF%87.html)
:::
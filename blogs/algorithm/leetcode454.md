---
title: LeetCode-454-四数相加 II | 哈希表5
date: 2024/03/03
categories:
 - 算法
---
## 454. 四数相加 II
给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4` ，数组长度都是 `n` ，请你计算有多少个元组 `(i, j, k, l)` 能满足：
- ` 0 <= i, j, k, l < n `
- ` nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0 `

示例 1：
```
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```
示例 2：
```
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
```

提示：
```
n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 <= n <= 200
-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28
```

## java基础补充
```java
import java.util.HashMap; // 引入 HashMap 类

HashMap<Integer, String> Sites = new HashMap<Integer, String>();
Sites.put(1, "Google");
System.out.println(Sites.get(3));
Sites.remove(4);
Sites.clear();
System.out.println(Sites.size());

// 获取指定 key 对应对 value，如果找不到 key ，则返回设置的默认值
System.out.println(Sites.getOrDefault(1, 0)) // 这里key是1，默认值是0

// containsKey()	检查 hashMap 中是否存在指定的 key 对应的映射关系。
// containsValue()	检查 hashMap 中是否存在指定的 value 对应的映射关系。
```

## 解题思路
属于找集合中有无这个元素的题目，可以用哈希表。<br/>
本题里有四个数组，那怎么使用“循环找集合”时间复杂度才最低呢？——先两层循环数组A和数组B把(和, 次数)加入集合，再两层循环数组C和数组D寻找符合题意的组合。<br/>
注意题目要求回答的是满足条件的四元组的个数，所以要存的是元素之和以及对应和值出现的次数。

```java
class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i : nums1) {
            for (int j : nums2) {
                int sum = i + j;
                map.put(sum, map.getOrDefault(sum, 0) + 1);
            }
        }

        int cnt = 0;
        for (int k : nums3) {
            for (int j : nums4) {
                int target = 0 - k - j;
                if (map.containsKey(target)) {
                    cnt += map.get(target);
                }
            }
        }
        return cnt;
    }
}
```
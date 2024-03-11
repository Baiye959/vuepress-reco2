---
title: LeetCode-18-四数之和 | 哈希表8
date: 2024/03/11
categories:
 - 算法
---
## 18. 四数之和
给你一个由 `n` 个整数组成的数组 `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且不重复的四元组 `[nums[a], nums[b], nums[c], nums[d]]` （若两个四元组元素一一对应，则认为两个四元组重复）：

- `0 <= a, b, c, d < n`
- `a`、`b`、`c` 和 `d` <b>互不相同</b>
- `nums[a] + nums[b] + nums[c] + nums[d] == target`
你可以按 <b>任意顺序</b> 返回答案 。

 
示例 1：
```
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```
示例 2：
```
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
```

提示：
```
1 <= nums.length <= 200
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
```

## 解题思路
四数之和与三数之和的解题思路差不多。但有两点变化
1. 元素从三个变成四个，从 单层循环+双指针 变成 双层循环+双指针 。
2. 因为元素个数的改变、目标和从 0 变为 target （可正可负），针对第一元素、第二元素的去重操作略有不同。

```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);

        List<List<Integer>> ret = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            // 剪枝
            if (nums[i] > target && nums[i] >= 0) {
                return ret;
            }

            // 去重
            if (i != 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            for (int j = i + 1; j < nums.length; j++) {
                // 二级剪枝
                if (nums[i] + nums[j] > target && nums[i] + nums[j] >= 0) {
                    break; // 这里是break！只退出内层循环，因为其他的nums[i]+nums[j]有可能比现在的小
                }

                // 二级去重
                if (j != i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }

                int l = j + 1, r = nums.length - 1;
                while (l < r) {
                    long sum = nums[i] + nums[j] + nums[l] + nums[r];
                    
                    if (sum > target) {
                        r --;
                    } else if (sum < target) {
                        l ++;
                    } else {
                        ret.add(Arrays.asList(nums[i], nums[j], nums[l], nums[r]));
                        
                        while (l < r && nums[l] == nums[l + 1]) {
                            l ++;
                        }
                        while (l < r && nums[r] == nums[r - 1]) {
                            r --;
                        }

                        l ++;
                        r --;
                    }
                }
                
            }
        }

        return ret;
    }
}
```
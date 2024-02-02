---
title: LeetCode-1-两数之和
date: 2024/02/02
categories:
 - 算法
---
## 1. 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：
```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```
示例 2：
```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```
示例 3：
```
输入：nums = [3,3], target = 6
输出：[0,1]
```

提示：
```
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案
```

进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？

## 解题思路

### 解法一

暴力遍历，两重循环，如果两元素相加等于目标和直接返回
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int []ans=new int[2];
        for(int i=0;i<nums.length;i++){
            for(int j=(i+1);j<nums.length;j++){
                if(nums[i]+nums[j]==target){
                    ans[0]=i;
                    ans[1]=j;
                    return ans;
                }
            }
        }
        return ans;
    }
}
```
时间复杂度：两层for循环，O(n^2)<br/>
空间复杂度：O(1)

### 解法二

把所有元素放到HashMap里，这样只要单层循环、然后在HashMap里找，如果有等于`target-当前元素`的，就返回。注意检查两个元素下标是否一致，题目里说“数组中同一个元素在答案里不能重复出现”

把元素值作为key，下标作为value

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<nums.length;i++){
            map.put(nums[i],i);
        }

        for(int i=0;i<num.length;i++){
            int sub=target-nums[i];
            if(map.containsKey(sub) && map.get(sub)!=i){
                return new int[]{i, map.get(sub)};
            }
        }

        throw new IllegalArgumentException("No two sum solution");
    }
}
```
时间复杂度：O(n)<br/>
空间复杂度：O(n)

>IllegalArgumentException：抛出这个异常说明方法传入一个非法的或者不合适的参数
>
>举个例子：getUser(int username)方法，不允许传入空字符串或者null。但是有个调用的方法，没做检查，传入了null或者空字符串，这时候getUser方法就应该要抛出IllegalArgumentException告诉调用者：hi！这个参数不能为empty或者null。
>
>java.lang.IllegalArgumentException继承至RuntimeException，所以它是一个unchecked异常，它不需要在方法里加throws声明！
>
>如果在系统中出现这个异常，你唯一要做的就是检查传入的参数是否合法！所有的unchecked异常必须要用log记录下来的，所以exception message必须要描述的清楚——具体是哪个参数出错了。

### 解法三

可以把解法二的两个for循环合并，也不用判断两个元素是不是相同了，因为当前元素还没有添加进HashMap里
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<nums.length;i++){
            int sub=target-nums[i];
            if(map.containsKey(sub)){
                return new int[]{i, map.get(sub)};
            }
            map.put(nums[i],i);
        }

        throw new IllegalArgumentException("No two sum solution");
    }
}
```
时间复杂度：O(n)<br/>
空间复杂度：O(n)
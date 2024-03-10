---
title: LeetCode-1-两数之和 | 哈希表4
date: 2024/03/03
categories:
 - 算法
---
## 1. 两数之和
给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 和为目标值 `target`  的那 <b>两个</b> 整数，并返回它们的数组下标。

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
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
只会存在一个有效答案
```

进阶：你可以想出一个时间复杂度小于 `O(n^2)` 的算法吗？

## java基础补充
1. HashMap
    `HashMap` 是最常用的Map，根据键的HashCode值存储数据，可以根据键直接获取它的值，具有很快的访问速度，遍历时候的顺序是完全随机的。`HashMap`只允许一个键为`Null`,允许多个值为`Null`；

    - 特性： 完全随机
    - 优点： 随机访问，取值速度快
    - 缺点： 多个线程同时写`HashMap`可能导致数据不一致，如果需要同步，使用`Collection`的`synchronizedMap`方法或者使用`ConcurrentHashMap`

2. LinkedHashMap
    `LinkedHashMap` 是`HashMap`的一个子类，保存了记录的插入顺序，与`HashMap`的随机遍历不同，在用`Iterator`遍历的时候，先得到的记录肯定是先插入的，类似于python中的`OrderedDict`。遍历速度会比`HashMap`慢，不过有一种情况例外： 当`HashMap`的容量很大，实际数据很少时 ， 因为`HashMap`的遍历速度和它的容量有关，而`LinkedHashMap`只跟实际数据量有关。

3. TreeMap
    `TreeMap`实现`SortMap`接口，能够将它保存的记录按键排序，默认是按键的升序排列，也可以指定排序的比较器，遍历`TreeMap`的时候，得到的记录是按照键排过序的。

4. 根据数据选择Map
    一般情况下，用的最多的是`HashMap`，在 Map 中插入、删除和定位元素，`HashMap` 是最好的选择。但如果要按自然顺序或自定义顺序遍历键，那么`TreeMap`会更好。如果需要输出的顺序和输入的相同，那么用 `LinkedHashMap` 可以实现，它还可以按读取顺序来排列。

## 解题思路
::: tip 为什么会想到用哈希表来解题？
每当碰到“这个元素是否出现过/这个元素是否在这个集合中”的问题时，就可以想一下是不是能用哈希表解题
:::

### 二刷（代码随想录）
本题中要查找`target-num`是否出现过（`num`指当前元素），可以用哈希表。而本题需要存储元素的值和元素的下标——两个值，那么就需要用map来当哈希表。

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] ret = new int[2];
        Map<Integer, Integer> map = new HashMap<>();
        for (int i=0; i<nums.length; i++) {
            int t = target - nums[i];
            if (map.containsKey(t)) {
                ret[0] = i;
                ret[1] = map.get(t);
                return ret;
            }
            map.put(nums[i], i);
        }
        return ret;
    }
}
```


### 一刷
#### 解法一（暴力）

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

#### 解法二（哈希表）

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

#### 解法三（解法二优化版）

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
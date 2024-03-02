---
title: LeetCode-349-两个数组的交集 | 哈希表2
date: 2024/03/02
categories:
 - 算法
---
## 349. 两个数组的交集
给定两个数组 `nums1` 和 `nums2` ，返回 <b>它们的交集</b> 。输出结果中的每个元素一定是 <b>唯一</b> 的。我们可以 <b>不考虑输出结果的顺序</b> 。

示例 1：
```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```
示例 2：
```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

提示：
```
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
```

## java基础补充
### Set
在 Java 的 `Collection` 框架中，有多个实现 `Set` 接口的类，常用的有以下几种：

1. HashSet <br/>
`HashSet` 是 `Set` 接口的典型实现之一，它基于哈希表实现。哈希表可以实现快速的插入、删除和查找操作，因此 `HashSet` 的性能非常高。但是，在使用 `HashSet` 时需要注意元素的顺序是不确定的。

2. LinkedHashSet <br/>
`LinkedHashSet` 是 `HashSet` 的升级版，它不仅可以保证元素不重复，还可以按照插入的顺序来保存元素。`LinkedHashSet` 内部维护了一个双向链表来维护元素的插入顺序，因此，在使用 `LinkedHashSet` 时，元素的顺序就可以保证。

3. TreeSet <br/>
`TreeSet` 是基于红黑树实现的 `Set` 集合，可以保证元素有序，且插入、删除、查询等操作均为 `O(logn)` 的时间复杂度。但是，由于红黑树的实现原理，要求元素必须实现 `Comparable` 接口或者在创建 `TreeSet` 时传入一个 `Comparator` 对象才能进行排序。

4. EnumSet <br/>
`EnumSet` 是一个专门为枚举类型设计的 `Set` 集合，它是一种非常高效的 `Set` 实现方式。由于枚举类型的值是有限的且预定义的，因此 `EnumSet` 内部使用一个位向量（bit vector）来存储元素，从而可以实现高效的插入、删除和查询操作。

5. CopyOnWriteArraySet <br/>
`CopyOnWriteArraySet` 是一个线程安全的 `Set` 集合，它是基于 Copy-On-Write（写时复制）技术实现的。当对集合进行修改操作时，`CopyOnWriteArraySet` 会复制一个新的数组，并在新的数组中进行修改，待修改完成后再将原数组引用指向新的数组，从而保证了修改操作的线程安全性。但是，由于每次修改时都需要复制一个新的数组，因此 `CopyOnWriteArraySet` 的性能不如其他 `Set` 实现类。

### ArrayList
```java
import java.util.ArrayList; // 引入 ArrayList 类

ArrayList<E> objectName = new ArrayList<>();　 // 初始化
```

## 解题思路
这道题跟上道题一样，值的范围小（0 <= nums1[i], nums2[i] <= 1000），适合用数组进行求解。<br/>
如果题目没有给出值的范围、或者值的范围较大，就适合用set求解。<br/>
为了熟悉各种解法，也写一下用set的解法。这道题不需要元素按顺序排列，用`HashSet`就可以了。

### 解法一（set） 
先将数组1里的元素放到哈希表里，再遍历数组2，如果数组2中元素也在哈希表中存在，就加入最终的交集中。<br/>
有一点要注意，因为题目要求输出结果中的每个元素一定是 <b>唯一</b> 的，所以在数组1元素放入哈希表时要去重，由于是用`HashSet`，会自动去重，就不用手动判断直接加入了。

由于java中无法创建不定长数组，这里先用一个set存交集，最后再转成数组（这里有两种方法，一种直接将结果集合转为数组、一种是另外申请一个数组存放结果）。

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> retSet = new HashSet<>();

        for (int num : nums1) {
            set1.add(num);
        }
        for (int num : nums2) {
            if (set1.contains(num)) {
                retSet.add(num);
            }
        }

        //方法1：将结果集合转为数组
        return retSet.stream().mapToInt(x -> x).toArray();

        // //方法2：另外申请一个数组存放retSet中的元素,最后返回数组
        // int[] ret = new int[retSet.size()];
        // int j = 0;
        // for(int i : retSet){
        //     ret[j++] = i;
        // }
        
        // return ret;
    }
}
```

### 解法二（数组）
分别用长度为1001的数组记录两个数组中出现的值（让以该值为下标的元素值加一），最后遍历、两个数组中都出现的值就加入结果集合。

尝试用一下`ArrayList`（可动态修改的数组——这个数组不能用于返回、类型不一样）存结果。

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        int[] hash1 = new int[1001];
        int[] hash2 = new int[1001];
        for (int num : nums1) {
            hash1[num] ++;
        }
        for (int num : nums2) {
            hash2[num] ++;
        }

        ArrayList<Integer> retArray = new ArrayList<>();
        for (int i=0; i<1001; i++) {
            if (hash1[i] > 0 && hash2[i] > 0) {
                retArray.add(i);
            }
        }

        int i = 0;
        int ret[] = new int[retArray.size()];
        for (int num : retArray) {
            ret[i++] = num;
        }
        return ret;
    }
}
```
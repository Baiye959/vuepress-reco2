---
title: 代码随想录 | 哈希表总结
date: 2024/03/11
categories:
 - 算法
---
::: tip
<b>哈希表用来快速判断一个元素是否出现在集合里</b>

[242.有效的字母异位词](/blogs/algorithm/leetcode242.md)<br/>
[349.两个数组的交集](/blogs/algorithm/leetcode349.md)<br/>
[202.快乐数](/blogs/algorithm/leetcode202.md)<br/>
[1.两数之和](/blogs/algorithm/leetcode1.md)<br/>
[454.四数相加II](/blogs/algorithm/leetcode454.md)<br/>
[383.赎金信](/blogs/algorithm/leetcode383.md)<br/>
[15.三数之和](/blogs/algorithm/leetcode15.md)<br/>
[18.四数之和](/blogs/algorithm/leetcode18.md)
:::

## 哈希表理论基础
对于哈希表，要知道哈希函数和哈希碰撞在哈希表中的作用。
- 哈希函数：把传入的key映射到符号表的索引上。
- 哈希碰撞：处理有多个key映射到相同索引上时的情景，处理碰撞的普遍方式是拉链法和线性探测法。

接下来是常见的三种哈希结构：
- 数组
- set（集合）
- map（映射）

## 哈希表三种结构在题目中的使用选择
### 数组作为哈希表
数组是最简单的哈希表，适合题目中元素范围确定、较小且连续的，原因如下：
- 数组的大小是有限的，受到系统栈空间（不是数据结构的栈）的限制。
- 如果数组空间够大，但哈希值比较少、特别分散、跨度非常大，使用数组就造成空间的极大浪费。

题目举例：
- [242.有效的字母异位词](/blogs/algorithm/leetcode242.md)：只包含小写字母
- [383.赎金信](/blogs/algorithm/leetcode383.md)：只包含小写字母
- [349.两个数组的交集](/blogs/algorithm/leetcode349.md)：$ 0 <= nums1[i], nums2[i] <= 1000 $

### set（集合）作为哈希表
需存元素范围不确定/元素分散/元素范围较大，且只需存一种值时，用set结构

题目举例：
- [202.快乐数](/blogs/algorithm/leetcode202.md)：$ 1 <= n <= 2^31 - 1 $，存数

Java中实现Set接口的类：
1. HashSet
    `HashSet` 是 `Set` 接口的典型实现之一，它基于哈希表实现。哈希表可以实现快速的插入、删除和查找操作，因此 `HashSet` 的性能非常高。但是，在使用 `HashSet` 时需要注意元素的顺序是不确定的。
2. LinkedHashSet
    `LinkedHashSet` 是 `HashSet` 的升级版，它不仅可以保证元素不重复，还可以按照插入的顺序来保存元素。`LinkedHashSet` 内部维护了一个双向链表来维护元素的插入顺序，因此，在使用 `LinkedHashSet` 时，元素的顺序就可以保证。
3. TreeSet
    `TreeSet` 是基于红黑树实现的 `Set` 集合，可以保证元素有序，且插入、删除、查询等操作均为 `O(logn)` 的时间复杂度。但是，由于红黑树的实现原理，要求元素必须实现 `Comparable` 接口或者在创建 `TreeSet` 时传入一个 `Comparator` 对象才能进行排序。
4. EnumSet
    `EnumSet` 是一个专门为枚举类型设计的 `Set` 集合，它是一种非常高效的 `Set` 实现方式。由于枚举类型的值是有限的且预定义的，因此 `EnumSet` 内部使用一个位向量（bit vector）来存储元素，从而可以实现高效的插入、删除和查询操作。
5. CopyOnWriteArraySet
    `CopyOnWriteArraySet` 是一个线程安全的 `Set` 集合，它是基于 Copy-On-Write（写时复制）技术实现的。当对集合进行修改操作时，`CopyOnWriteArraySet` 会复制一个新的数组，并在新的数组中进行修改，待修改完成后再将原数组引用指向新的数组，从而保证了修改操作的线程安全性。但是，由于每次修改时都需要复制一个新的数组，因此 `CopyOnWriteArraySet` 的性能不如其他 `Set` 实现类。

### map（映射）作为哈希表
需存元素范围不确定/元素分散/元素范围较大，且要存一对值时，用map结构

题目举例：
- [1.两数之和](/blogs/algorithm/leetcode1.md)：$ -10^9 <= nums[i] <= 10^9 $，存（值，次数）
- [454.四数相加II](/blogs/algorithm/leetcode454.md)：$ -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28 $，存(和, 次数)

Java中实现Map接口的类：
1. HashMap（目前只用过这个）
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


为什么不能都用map结构？<br/>
——使用map的空间消耗更大，因为map要维护红黑树或者符号表、要做哈希函数的运算。

## 不适合使用哈希表来解题的情况
题目中要求对组合情况进行去重，而不是对元素进行去重，使用哈希表时去重细节较多、易出错。

题目举例：
- [15.三数之和](/blogs/algorithm/leetcode15.md)：对三元组去重
- [18.四数之和](/blogs/algorithm/leetcode18.md)：对四元组去重

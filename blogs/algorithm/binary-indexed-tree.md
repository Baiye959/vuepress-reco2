---
title: 树状数组
date: 2024/08/05
categories:
 - 算法
---
:::info
推荐阅读[树状数组(详细分析+应用)，看不懂打死我!](http://t.csdnimg.cn/KWwAV)
:::

## 为什么要用树状数组
树状数组可以解决的问题：
1. 单点修改，区间查询
2. 区间修改，单点查询（差分后）

## 怎么用树状数组
### 前置知识
#### lowbit(x)
`lowbit(x)`即为x转为二进制后最低位1代表的数值，例如：`lowbit(5D) = lowbit(101B) = 1B = 1D`、`lowbit(6D) = lowbit(110B) = 10B = 2D`。计算方法为`x & (-x)`
```java
int lowbit(int x) {
    return x & (-x);
}
```

#### 树状数组结构
`t[x]`保存以x为根的子树中叶节点值的和。<br/>
`x+lowbit(x)`即为绿色箭头，可以找到自己的父亲节点；`x-lowbit(x)`即为蓝色箭头，重复到不可重复时可找到区间[1, x]的元素和所需的所有`t[x]`。（具体举例见下）
![](/image/2024091303.png)

### 单点修改，区间查询
`a[]`是一个数字数组，而`t[]`是从`a[]`构造的树形数组。
![](/image/2024091302.png)

单点修改举例：把`a[1]`的值加1，更新`t[]`<br/>
`t[1] += 1` --1+lowbit(1)=2--> `t[2] += 1` --2+lowbit(2)=4--> `t[4] += 1` --4+lowbit(4)=8--> `t[8] += 1`

区间查询举例：查询`a[1]`~`a[7]`的元素和<br/>
`ans += t[7]` --7-lowbit(7)=6--> `ans += t[6]` --6-lowbit(6)=4--> `ans += t[6]`

### 区间修改，单点查询（差分后）
先求得`a[]`的差分数组`c[]`，在`c[]`上构造树形数组`t[]`。
- 对`a[]`的区间修改 == 对`c[]`的单点修改  /  给a[3]~a[5]的元素都加一 == c[3]+=1、c[6]-=1
- 对`a[]`的单点查询 == 对`c[]`的区间查询  /  查询a[3] == 查询c[1]~c[3]的元素和
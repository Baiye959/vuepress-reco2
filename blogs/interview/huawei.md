---
title: 华为机考
date: 2024/03/01
categories:
 - 就业
password: 0e0d738a29f36c6ad4b53a10ec010489
---
::: info
4.24晚7点机考

- [机考题目指南](https://www.nowcoder.com/discuss/445247001081516032)
- [机考说明](https://www.nowcoder.com/discuss/526335057670262784)
- [4.24华为机考参考](https://mp.weixin.qq.com/s/iBCPI7KB7A2vLio-IMsEwQ)
:::

## 机考第一题
### 题目（满二叉搜索树查找）
给定2^n-1个不同的整数(1<=n<=10，n为整数)，构建一棵平衡满二叉搜索树

二叉搜索树定义如下: 
1. 节点的左子树只包含小于当前节点的数。
2. 节点的右子树只包含大于当前节点的数。
3. 所有左子树和右子树自身必须也是二叉搜索树。

例：7个数字1234567构建的满二叉搜索树如下所示
```
    4
  2   6
1  3 5  7
```
再给一个待查找数，计算查找路径和结果。

输入：<br/>
输入分2行, 第一行为2^n-1个未排序的整数，空格分隔,用于构建二叉搜索树,其中1<=n<=10<br/>
第二行为待查找的整数。<br/>
所有输入整数的取值范围为[-32768，32767]。

输出：<br/>
搜索的路径和结果 路径从根节点开始,用S表示,查找左树用L表示，查找右树使用R表示，找到后使用Y表示，最终未找到使用N表示。

样例1：
```java
// 输入
2 1 3 7 5 6 4
6
// 输出
SRY
// 解释:从根节点开始，所以路径的第一部分为S，待查找数为6，大于4，所以要查找右树，路径增加R,正好找到。所以最后增加Y,最终输出SRY
```
样例2：
```java
// 输入
4 2 1 3 6 5 7
5
// 输出
SRLY
// 解释：从根节点开始,一次往右树,往左树查找,找到结果5,因此最终SRLY
```
样例3：
```java
// 输入
1 2 3 4 5 6 7
8
// 输出
SRRN
// 解释:从根节点开始查找，标记s，待查找数8比4大,所以查找右树，标记R, 8比6还大，继续查找右树标记R，8比右树节点7还大,但已经到了叶子,没有找到,因此最终标记SRRN
```

### 解题思路
用到两个特性：
1. 二叉搜索树的中序遍历为有序数组
2. 满二叉搜索树的搜索和有序数组的二叉搜索顺序一致

```java
// Test1
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList tree = new ArrayList<Integer>();
        while (sc.hasNextInt()) {
            tree.add(sc.nextInt());
        }
        int target = (int)tree.get(tree.size() - 1);
        tree.remove(tree.size() - 1);
        Collections.sort(tree);


        int l = 0, r = tree.size() - 1, mid;
        StringBuilder ret = new StringBuilder();
        ret.append("S");
        while (l <= r) {
            mid = (l + r) / 2;
            if ((int)tree.get(mid) < target) {
                ret.append("R");
                l = mid + 1;
            } else if ((int)tree.get(mid) > target) {
                ret.append("L");
                r = mid - 1;
            } else {
                break;
            }
        }
        if (l <= r) {
            ret.append("Y");
        } else {
            ret.delete(ret.length() - 1, ret.length());
            ret.append("N");
        }

        System.out.println(ret);
    }
}
```

## 机考第二题
### 题目（足球队员射门能力排序）
（题目在别的公众号看的，不保证准确，题解测试100%通过）

球队有n个足球队员参与m次射门训练，每次射门进球用1表示，射失则用0表示，依据如下规则对该n个队员的射门能力做排序。
1. 进球总数更多的队员射门能力更强
2. 若进球总数一样多，则比较最多一次连续进球的个数，最多的队员能力更强
3. 若最多一次连续进球的个数一样多，则比较第一次射失的先后顺序，其中后射失的队员更强，若第一次射失顺序相同，则按继续比较第二次射失的顺序，后丢球的队员能术更强，依次类推
4. 若前3个规则排序后还能力相等，则队员编号更小的能力更强

输入：<br/>
第1行，足球队员数n，射门训练次数m。(队员编号从1开始，依次递增) 第2行，第1~n个队员从第1到m次训练的进球情况，每个队员进球情况为连续的1和0的组合，不同队员用空格分隔n和m均为正整数，0<n<=10 ^ 3，0<m<=10^3

输出：<br/>
射门能力从强到弱的队员编号,用空格分隔

### 解题思路
数据范围 $0<n<=10^3, 0<m<=10^3$，时间限制`c/c++` 1000ms，其他语言2000ms<br/>
根据这些信息推断，可以直接使用排序完成本题，只是需要自定义排序函数。

新建一个球员类`People`，包含排序需要的信息。<br/>
`int no`为序号，`int total`为进球总数，`int max_len`为最多连续进球数，`List<Integer> pos`记录丢球序号。

这里有一个注意点，建Java对象数组时，只是在数组里放了一些地址，没有创建对象元素，需要之后遍历时自己创建。<br/>
`peoples[i] = new People();`

```java
import java.util.*;

// 自定义排序函数，使用sort函数？

public class Main {
    public static void main(String[] args) {
//        class People implements Comparable<People>{
        class People{

            int no;
            int total;
            int max_len;

            List<Integer> pos;
            People() {
                pos = new ArrayList<>();
                total = max_len = 0;
            }
        }



        // 输入
        int n, m;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();


        People[] peoples = new People[n];
        for (int i = 0; i < n; i++) {
            String s = sc.next();
            peoples[i] = new People();
            peoples[i].no = i + 1;
            int cur_len = 0;
            for (int j = 0; j < m; j++) {
                if (s.charAt(j) == '1') {
                    // 最多射门
                    peoples[i].total ++;

                    // 连续最长射门
                    cur_len ++;
                    peoples[i].max_len = Math.max(cur_len, peoples[i].max_len);
                } else {
                    peoples[i].pos.add(j);
                    cur_len = 0;
                }
            }
        }
        sc.close();

        // 排序
        Arrays.sort(peoples, 0, n, new Comparator<People>() {
            @Override
            public int compare(People o1, People o2) {
                if (o1.total != o2.total) {
                    return o2.total - o1.total;
                }
                if (o1.max_len != o2.max_len) {
                    return o2.max_len - o1.max_len;
                }
                for (int i = 0; i < o1.pos.size(); i++) {
                    if (o1.pos.get(i) != o2.pos.get(i)) {
                        return o2.pos.get(i) - o1.pos.get(i);
                    }
                }
                return o1.no - o2.no;
            }
        });
        for (int i = 0; i < n; i++) {
            System.out.print(peoples[i].no);
            if (i != n - 1) {
                System.out.print(" ");
            }
        }
    }
}
```

## 机考第三题
### 题目（找到内聚值最大的微服务群组）
开发团队为了调研微服务调用情况,对n个微服务调用数据进行了采集分析,微服务使用数字0至n-1进行编号，给你一个下标从0开始的数组edges , 其中edges[i]表示存在一条从微服务i到微服务edges[i]的接口调用。<br/>
我们将形成1个环的多个微服务称为微服务群组，一个微服务群组的所有微服务数量为L，能够访问到该微服务群组的微服务数量为V,这个微服务群组的内聚值H=L-V.<br/>
已知提供的数据中有1个或多个微服务群组，请按照内聚值H的结果从大到小的顺序对所有微服务群组(（H相等时，取环中最大的数进行比较)排序，输出排在第一的做服务群组，输出时每个微服务群组输出的起始编号为环中最小的数。

输入：<br/>
入参分为两行输入: 第一行为n,表示有n个微服务 第二行为数组edges,其中edges[i]表示存在一条从微服务i到微服务edges[i]的接口调用，数字以空格分隔<br/>
输入范围说明: n== edges.length 2<= n <=10^5 0  <= edges[i] <= n-1<br/>
edges[i] !=i<br/>

输出：<br/>
输出排在第一的微服务群组的编号数组，按照环的访问顺序输出，起始编号为环中最小的数,数字以空格分隔<br/>

样例1：
```java
// 输入
4
3 3 0 1
// 输出
0 3 2
```
解释：
![](/image/2024051401.webp)
0，3，2组成了微服务群组 (环)a，他的L值为3，对于a来说，只有编号为1的1个微服务可以访问到a,因此a的为1答案输出微服务群组为0 3 2

样例2：
```java
// 输入
12
2 6 10 1 6 0 3 0 5 4 5 8
// 输出
0 2 10 5
```
解释：
![](/image/2024051402.webp)
- 1，6，3组成了微服务群组(环) a1，L1值为3，编号为4、9的2个微服务可以访问到a1,因此√1值为2,H1为L1V1 =1;
- 0，2，10，5组成了微服务群组 (环) a2，L2值为4，编号为7、8、11的3个微服务可以访问到2，因此v2值为3，H2为L2-V2=1；
- 先对比H值,H1=H2,H值相等;
- 再对比环中序号最大值，a1中最大数为6.a2中最大数为10,a2排前面,因此输出答案为:0 2 10 5

### 解题思路
本题思路：
1. 找到环（拓扑排序）
2. 计算环的内聚值
3. 排序
4. 输出


## 机考相关补充
### Java自定义排序

### 快速排序

### 拓展：第k大？

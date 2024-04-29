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
:::

## 机考第二题
### 题目（足球队员射门能力排序）
（题目在别的公众号看的，不保证准确，题解测试通过）

球队有n个足球队员参与m次射门训练，每次射门进球用1表示，射失则用0表示，依据如下规则对该n个队员的射门能力做排序。
1. 进球总数更多的队员射门能力更强
2. 若进球总数一样多，则比较最多一次连续进球的个数，最多的队员能力更强
3. 若最多一次连续进球的个数一样多，则比较第一次射失的先后顺序，其中后射失的队员更强，若第一次射失顺序相同，则按继续比较第二次射失的顺序，后丢球的队员能术更强，依次类推
4. 若前3个规则排序后还能力相等，则队员编号更小的能力更强


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

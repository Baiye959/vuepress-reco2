---
title: KamaCoder-54-替换数字 | 字符串3
date: 2024/03/12
categories:
 - 算法
---
## 54. 替换数字（第八期模拟笔试）
[卡码网：54.替换数字](https://kamacoder.com/problempage.php?pid=1064)

题目描述
> 给定一个字符串 s，它包含小写字母和数字字符，请编写一个函数，将字符串中的字母字符保持不变，而将每个数字字符替换为number。 例如，对于输入字符串 "a1b2c3"，函数应该将其转换为 "anumberbnumbercnumber"。

输入描述
> 输入一个字符串 s,s 仅包含小写字母和数字字符。

输出描述
> 打印一个新的字符串，其中每个数字字符都被替换为了number

输入示例
```
a1b2c3
```

输出示例
```
anumberbnumbercnumber
```
提示信息
> 数据范围：
>
> 1 <= s.length < 10000。

## 解题思路
为了还原题目本意，先把原数组复制到扩展长度后的新数组，然后不再使用原数组、原地对新数组进行操作。

那么如何不使用原数组、还能原地操作？<br/>
——从后往前遍历，对数组中的数字进行替换。数组中的数字是在原处占地变长，如果从后往前替换，那么新元素不会覆盖到还未替换的旧元素。

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int len = s.length();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) >= 0 && s.charAt(i) <= '9') {
                len += 5;
            }
        }
        
        char[] ret = new char[len];
        for (int i = 0; i < s.length(); i++) {
            ret[i] = s.charAt(i);
        }
        for (int i = s.length() - 1, j = len - 1; i >= 0; i--) {
            if ('0' <= ret[i] && ret[i] <= '9') {
                ret[j--] = 'r';
                ret[j--] = 'e';
                ret[j--] = 'b';
                ret[j--] = 'm';
                ret[j--] = 'u';
                ret[j--] = 'n';
            } else {
                ret[j--] = ret[i];
            }
        }
        System.out.println(ret);
    }
}
```
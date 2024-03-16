---
title: KamaCoder-55-右旋字符串 | 字符串5
date: 2024/03/13
categories:
 - 算法
---
## 55. 右旋字符串（第八期模拟笔试）
[卡码网：55.右旋转字符串](https://kamacoder.com/problempage.php?pid=1065)

题目描述
> 字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串 s 和一个正整数 k，请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。 
>
> 例如，对于输入字符串 "abcdefg" 和整数 2，函数应该将其转换为 "fgabcde"。

输入描述
> 输入共包含两行，第一行为一个正整数 k，代表右旋转的位数。第二行为字符串 s，代表需要旋转的字符串。

输出描述
> 输出共一行，为进行了右旋转操作后的字符串。

输入示例
```
2
abcdefg
```

输出示例
```
fgabcde
```

提示信息
> 数据范围：
>
> 1 <= k < 10000,
>
> 1 <= s.length < 10000;

## 解题思路
先整体反转，再局部反转。

1. 原数组
![](/image/2024031301.png)
2. 整体反转后
![](/image/2024031302.png)
3. 局部分别反转后
![](/image/2024031303.png)

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int k = sc.nextInt();
        String s = sc.next();
        char[] chs = s.toCharArray();
        
        int len = s.length();
        reverse(chs, 0, len - 1);
        reverse(chs, 0, k - 1);
        reverse(chs, k, len - 1);
        
        System.out.println(chs);
    }
    
    public static void reverse(char[] chs, int l, int r) {
        while (l < r) {
            char t = chs[l];
            chs[l] = chs[r];
            chs[r] = t;
            l ++; r --;
        }
    }
}
```
---
title: ACM 模式输入输出练习
date: 2024/03/02
categories:
 - 算法
---
::: info
笔试面试的时候是ACM模式，熟悉一下输入输出方式<br/>
[练习题OJ网址](https://kamacoder.com/)<br/>
[参考模板写法（百度网盘下载地址）](https://pan.baidu.com/s/1R35L0C5nRzM4ykhFJr_B6w?pwd=rpuo)
:::


::: details 第1题——A+B问题I
## 1. A+B问题I
### 题目
时间限制：2.000S  空间限制：32MB

题目描述
> 你的任务是计算a+b。

输入描述
> 输入包含一系列的a和b对，通过空格隔开。一对a和b占一行。

输出描述
> 对于输入的每对a和b，你需要依次输出a、b的和。
>
> 如对于输入中的第二对a和b，在输出中它们的和应该也在第二行。

输入示例
> 3 4 <br/>
> 11 40

输出示例
> 7 <br/>
> 51

### 解题
```java
import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        while ( in.hasNextInt() ) {
            int a = in.nextInt();
            int b = in.nextInt();
            System.out.println(a + b);
        }
    }
}
```
:::

::: details 第2题——A+B问题II
2. A+B问题II
时间限制：1.000S  空间限制：32MB

题目描述
> 计算a+b，但输入方式有所改变。

输入描述
> 第一行是一个整数N，表示后面会有N行a和b，通过空格隔开。

输出描述
> 对于输入的每对a和b，你需要在相应的行输出a、b的和。
> 
> 如第二对a和b，对应的和也输出在第二行。

输入示例
> 2 <br/>
> 2 4 <br/>
> 9 21

输出示例
> 6 <br/>
> 30

提示信息
> 注意，测试数据不仅仅一组。也就是说，会持续输入N以及后面的a和b

### 解题
```java
import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            int n = scanner.nextInt();
            while (n-- > 0) {
                int a = scanner.nextInt();
                int b = scanner.nextInt();
                System.out.println(a + b);
            }
        }
    }
}
```
:::
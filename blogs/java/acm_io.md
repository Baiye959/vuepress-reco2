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
```
3 4
11 40
```

输出示例
```
7
51
```

### 解题
```java
import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
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
## 2. A+B问题II
### 题目
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
```
2
2 4
9 21
```

输出示例
```
6
30
```

提示信息
> 注意，测试数据不仅仅一组。也就是说，会持续输入N以及后面的a和b

### 解题
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
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

::: details 第3题——A+B问题III
## 3. A+B问题III
### 题目
时间限制：1.000S  空间限制：32MB

题目描述
> 你的任务依然是计算a+b。

输入描述
> 输入中每行是一对a和b。其中会有一对是0和0标志着输入结束，且这一对不要计算。

输出描述
> 对于输入的每对a和b，你需要在相应的行输出a、b的和。<br/>
> 如第二对a和b，他们的和也输出在第二行。

输入示例
```
2 4
11 19
0 0
```

输出示例
```
6
30
```

### 解题
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            if (a == 0 && b == 0) {
                break;
            }
            System.out.println(a + b);
        }
    }
}
```
:::

::: details 第4题——A+B问题IV
## 4. A+B问题IV
### 题目
时间限制：1.000S  空间限制：32MB

题目描述
> 你的任务是计算若干整数的和。

输入描述
> 每行的第一个数N，表示本行后面有N个数。
> 
> 如果N=0时，表示输入结束，且这一行不要计算。

输出描述
> 对于每一行数据需要在相应的行输出和。

输入示例
```
4 1 2 3 4
5 1 2 3 4 5
0 
```

输出示例
```
10
15
```

### 解题
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            int n = scanner.nextInt();
            if (n == 0) break;
            
            int sum = 0;
            for (int i=0; i<n; i++) {
                sum += scanner.nextInt();
            }
            System.out.println(sum);
        }
    }
}
```
:::

::: details 第5题——A+B问题VII
## 5. A+B问题VII
### 题目
时间限制：1.000S  空间限制：32MB

题目描述
> 你的任务是计算两个整数的和。

输入描述
> 输入包含若干行，每行输入两个整数a和b，由空格分隔。

输出描述
> 对于每组输入，输出a和b的和，每行输出后接一个空行。

输入示例
```
2 4
11 19
```

输出示例
```
6

30

```

### 解题
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(a + b);
            System.out.println();
        }
    }
}
```
:::


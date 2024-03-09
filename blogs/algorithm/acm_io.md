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


::: details 1.多行输入，每行两个整数
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

::: details 2.多组数据，每组第一行为n，之后输入n行两个整数
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

::: details 3.若干行输入，每行输入两个整数，遇到特定条件终止
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

::: details 4.若干行输入，遇到0终止，每行第一个数为N，表示本行后面有N个数
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

::: details 5.若干行输入，每行包括两个整数a和b，由空格分隔，每行输出后接一个空行
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

::: details 6.多组行数据，每行先输入一个整数N，然后在同一行内输入M和M个整数，每组输出之间输出一个空行
## 6. A+B问题VIII
### 题目
时间限制：1.000S  空间限制：32MB

题目描述
> 你的任务是计算若干整数的和。

输入描述
> 输入的第一行为一个整数N，接下来N行每行先输入一个整数M，然后在同一行内输入M个整数。

输出描述
> 对于每组输入，输出M个数的和，每组输出之间输出一个空行。

输入示例
```
3
4 1 2 3 4
5 1 2 3 4 5
3 1 2 3
```
输出示例
```
10

15

6
```

提示信息
```
注意以上样例为一组测试数据，后端判题会有很多组测试数据，也就是会有多个N的输入
例如输入可以是：
3
4 1 2 3 4
5 1 2 3 4 5
3 1 2 3
3
4 1 2 3 4
5 1 2 3 4 5
3 1 2 3
输出则是
10

15

6
10

15

6
只保证每组数据间是有空行的。但两组数据并没有空行
```

### 解题
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            int n = sc.nextInt();
            for (int i=0; i<n; i++) {
                int m = sc.nextInt();
                int sum = 0;
                for (int j=0; j<m; j++) {
                    sum += sc.nextInt();
                }
                System.out.println(sum);
                if (i != n - 1) {
                    System.out.println();
                }
            }
        }
    }
}
```
:::

::: details 7.多组测试样例，每组输入数据为字符串，字符用空格分隔，输出为小数点后两位
## 7. 平均绩点
### 题目
时间限制：1.000S  空间限制：32MB

题目描述
> 每门课的成绩分为A、B、C、D、F五个等级，为了计算平均绩点，规定A、B、C、D、F分别代表4分、3分、2分、1分、0分。

输入描述
> 有多组测试样例。每组输入数据占一行，由一个或多个大写字母组成，字母之间由空格分隔。

输出描述
> 每组输出结果占一行。如果输入的大写字母都在集合｛A,B,C,D,F｝中，则输出对应的平均绩点，结果保留两位小数。否则，输出"Unknown"。

输入示例
```
A B C D F
B F F C C A
D C E F
```

输出示例
```
2.00
1.83
Unknown
```

### 解题
注意这里第五个等级是F不是E...
```java
import java.util.Scanner;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            String line = sc.nextLine();
            String[] items = line.split(" ");
            
            double sum = 0.0;
            boolean hasUnknown = false;
            for (String item : items) {
                switch (item) {
                    case "A":
                        sum += 4; continue;
                    case "B":
                        sum += 3; continue;
                    case "C":
                        sum += 2; continue;
                    case "D":
                        sum += 1; continue;
                    case "F":
                        continue;
                    default:
                        hasUnknown = true; break;
                }
            }
            
            if (hasUnknown) {
                System.out.println("Unknown");
            } else {
                System.out.println(String.format("%.2f", sum / items.length));
            }
        }
    }
}
```
:::

::: details 8.多组测试用例，第一行为正整数n，第二行为n个正整数，n=0时，结束输入，每组输出结果的下面都输出一个空行
## 8. 摆平积木
### 题目
时间限制：1.000S  空间限制：32MB

题目描述
> 小明很喜欢玩积木。一天，他把许多积木块组成了好多高度不同的堆，每一堆都是一个摞一个的形式。然而此时，他又想把这些积木堆变成高度相同的。但是他很懒，他想移动最少的积木块来实现这一目标，你能帮助他吗？
> ![](/image/2024030901.png)

输入描述
> 输入包含多组测试样例。每组测试样例包含一个正整数n，表示小明已经堆好的积木堆的个数。<br/>
> 接着下一行是n个正整数，表示每一个积木堆的高度h，每块积木高度为1。其中1<=n<=50,1<=h<=100。<br/>
> 测试数据保证积木总数能被积木堆数整除。<br/>
> 当n=0时，输入结束。

输出描述
> 对于每一组数据，输出将积木堆变成相同高度需要移动的最少积木块的数量。<br/>
> 在每组输出结果的下面都输出一个空行。

输入示例
```
6
5 2 4 1 7 5
0
```

输出示例
```
5
```

### 解题
```java
111
```
:::
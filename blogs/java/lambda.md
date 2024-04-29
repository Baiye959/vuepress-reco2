---
title: JavaSE | Java Lambda表达式
date: 2024/04/29
categories:
 - Java
tags:
 - JavaSE
---
::: info
lambda 表达式是 jdk1.8 增加的比较重要的特性，简单来说 Lambda 允许把函数作为一个方法的参数传递进方法中，可以简化代码。

在项目中用到，补充一下相关知识
```java
List<User> userList = userService.list(queryWrapper);
        List<User> users = userList.stream().map(user -> userService.getSafetyUser(user)).collect(Collectors.toList());
        return ResultUtils.success(users);
```
:::

## 一、介绍
lambda表达式可以简化代码，这是它的主要特征。<br/>
它使用的运算符"->"被称为 lambda 运算符。<br/>
运算符将表达式分为左右两部分，左边只指定输入的参数，右边是 lambda 的主体。

## 二、语法
- 无参数，无返回值：()->expr
```java
() -> System.out.println("Hello Lambda!");
```

- 一个参数，无返回值：param->expr
```java
(x) -> System.out.println(x)
x -> System.out.println(x)
```

- 多个参数，有返回值：(param-list)->expr
```java
Comparator<Integer> com = (x, y) -> {
    System.out.println("函数式接口");
    return Integer.compare(x, y);
};
```

- 如果 Lambda 体中只有一条语句， return 和 大括号都可以省略不写
```java
// 省略 return 和 {}
Comparator<Integer> com = (x, y) -> Integer.compare(x, y);
```

- Lambda 表达式的参数列表的数据类型可以省略不写，因为JVM编译器通过上下文推断出数据类型，即“类型推断”
> Lambda 表达式中的参数类型都是由编译器推断得出的。 Lambda 表达式中无需指定类型，程序依然可以编译，这是因为 javac 根据程序的上下文，在后台推断出了参数的类型。 Lambda 表达式的类型依赖于上下文环境，是由编译器推断出来的。这就是所谓的 “类型推断”。
```java
// 原表达式
(Integer x, Integer y) -> Integer.compare(x, y);

// 可省略参数列表的数据类型
(x , y) -> Integer.compare(x, y);
```


## 三、开发实战
1. 实现Runnable线程
```java
// Java 8之前的编程方式
new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Before Java8 ");
    }
}).start();

// Java 8使用lambda表达式
new Thread( () -> System.out.println("In Java8!") ).start();
```

2. 使用Lambda表达式遍历List集合
```java
// Java 8之前
List features = Arrays.asList("Lambdas", "Default Method", "Stream API", "Date and Time API");

for (String feature : features) {
   System.out.println(feature);
}

// Java 8使用lambda表达式
List features = Arrays.asList("Lambdas", "Default Method", "Stream API", "Date and Time API");

features.forEach(n -> System.out::println(n));
// 方法引用是使用两个冒号::(这也是Java 8的新特性)。
```

3. 使用Lambda实现 Map 和 Reduce
```java
// Map
// Java 8之前
List costBeforeTax = Arrays.asList(100, 200, 300, 400, 500);
for (Integer cost : costBeforeTax) {
      double price = cost + .12*cost;
      System.out.println(price);
}
// 使用lambda表达式表示
List costBeforeTax = Arrays.asList(100, 200, 300, 400, 500);
costBeforeTax.stream().map((cost) -> cost + .12*cost)
                      .forEach(System.out::println);

// Reduce
// Java 8之前
List costBeforeTax = Arrays.asList(100, 200, 300, 400, 500);
double total = 0;
for (Integer cost : costBeforeTax) {
    double price = cost + .12*cost;
    total = total + price;
 
}
System.out.println("Total : " + total);
// 使用lambda表达式表示
List costBeforeTax = Arrays.asList(100, 200, 300, 400, 500);
double bill = costBeforeTax.stream().map((cost) -> cost + .12*cost)
                                    .reduce((sum, cost) -> sum + cost)
                                    .get();
System.out.println("Total : " + bill);
```

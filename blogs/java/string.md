---
title: JavaSE | Java字符串
date: 2024/03/10
categories:
 - Java
tags:
 - JavaSE
---
## 创建String对象的两种方式
```java
// 1. 使用直接赋值的方式获取一个字符串对象
String s1 = "abc";
System.out.println(s1); // abc

// 2. 使用new的方式来获取一个字符串对象
// 空参构造，可以获取一个空白的字符串对象
String s2 = new String();
System.out.println(s2); // ""

// 传递一个字符串，根据字符串的内容再创建一个字符串对象
String s3 = new String("abc");
System.out.println(s3); // abc

// 传递一个字符数组，根据字符数组的内容再创建一个字符串对象
// 需求：修改字符串的内容。abc -> Qbc
// "abc" -> {'a','b','c'} -> {'Q','b','c'} -> "Qbc"
char[] chs = {'a', 'b', 'c'};
String s4 = new String(chs);
System.out.println(s4); // abc

// 传递一个字节数组，根据字节数组的内容再创建一个新的字符串对象
// 应用场景：以后在网络当中传输的数据其实都是字节信息
// 我们一般要把字节信息进行转换，转成字符串，此时就要用到这个构造了
byte[] bytes = {97, 98, 99};
String s5 = new String(bytes);
System.out.println(s5); // abc
```

## String构建方法对应的内存分析和字符串比较
### 内存分析
1. 当使用双引号直接赋值时，系统会检查该字符串在串池中是否存在
    - 不存在：创造新的
    - 存在：直接复用
2. 当使用new创建String时，系统会在堆里存放该字符串

### 字符串比较
```java
String s1 = "abc"; // s1存放串池地址1
String s2 = "abc"; // s2存放串池地址1
System.out.println(s1 == s2); // true

String s3 = new String("abc"); // s3存放堆地址1
String s4 = new String("abc"); // s4存放堆地址2
System.out.println(s3 == s4); // false

System.out.println(s1 == s3); // false
System.out.println(s1.equals(s3)); // true
String s5 = new String("Abc");
System.out.println(s1.equalsIgnoreCase(s5)); // true，忽略大小写对内容进行比较
```

`==`比较的是什么？
- 对基本数据类型，比较的是数据值
- 对引用数据类型，比较的是地址值

## StringBuilder

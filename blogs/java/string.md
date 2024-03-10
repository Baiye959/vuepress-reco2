---
title: Java字符串
date: 2024/03/10
categories:
 - Java
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

## 
---
title: Google Java编程风格规范
date: 2024/03/07
categories:
 - Java
---
::: info
学习Google编程规范<br/>
[原文链接](https://google.github.io/styleguide/javaguide.html)<br/>
[参考译文链接](https://hawstein.com/2014/01/20/google-java-style/)
:::

## 前言
这份文档是Google Java编程风格规范的完整定义。当且仅当一个Java源文件符合此文档中的规则， 我们才认为它符合Google的Java编程风格。

与其它的编程风格指南一样，这里所讨论的不仅仅是编码格式美不美观的问题， 同时也讨论一些约定及编码标准。然而，这份文档主要侧重于我们所普遍遵循的规则， 对于那些不是明确强制要求的，我们尽量避免提供意见。

### 1.1 术语说明
在本文档中，除非另有说明：
1. 术语class可表示一个普通类，枚举类，接口或是annotation类型(`@interface`)
2. 术语comment只用来指代实现的注释(implementation comments)，我们不使用“documentation comments”一词，而是用Javadoc。
其他的术语说明会偶尔在后面的文档出现。

### 1.2 指南说明
本文档中的示例代码并不作为规范。也就是说，虽然示例代码是遵循Google编程风格，但并不意味着这是展现这些代码的唯一方式。 示例中的格式选择不应该被强制定为规则。

## 源文件基础
### 2.1 文件名
源文件以其最顶层的类名来命名，大小写敏感，文件扩展名为`.java`。

### 2.2 文件编码：UTF-8
源文件编码格式为UTF-8。

### 2.3 特殊字符
#### 2.3.1 空白字符
除了行结束符序列，ASCII水平空格字符(0x20，即空格)是源文件中唯一允许出现的空白字符，这意味着：
1. 所有其它字符串中的空白字符都要进行转义。
2. 制表符不用于缩进。
::: warning
此处有疑问
:::

#### 2.3.2 特殊转义序列
对于具有特殊转义序列的任何字符(\b, \t, \n, \f, \r, ", '及\)，我们使用它的[转义序列](https://zh.wikipedia.org/wiki/%E8%BD%AC%E4%B9%89%E5%BA%8F%E5%88%97)，而不是相应的八进制(比如\012)或Unicode(比如\u000a)转义。

#### 2.3.3 非ASCII字符
对于剩余的非ASCII字符，是使用实际的Unicode字符(比如∞)，还是使用等价的Unicode转义符(比如\u221e)，取决于哪个能让代码更易于阅读和理解。

> Tip: 在使用Unicode转义符或是一些实际的Unicode字符时，建议做些注释给出解释，这有助于别人阅读和理解。

例如：
```java
String unitAbbrev = "μs";                                // 赞，即使没有注释也非常清晰
String unitAbbrev = "\u03bcs"; // "μs"                   // 允许，但没有理由要这样做
String unitAbbrev = "\u03bcs"; // Greek letter mu, "s"   // 允许，但这样做显得笨拙还容易出错
String unitAbbrev = "\u03bcs";                           // 很糟，读者根本看不出这是什么
return '\ufeff' + content; // byte order mark            // Good，对于非打印字符，使用转义，并在必要时写上注释
```

> Tip: 永远不要由于害怕某些程序可能无法正确处理非ASCII字符而让你的代码可读性变差。当程序无法正确处理非ASCII字符时，它自然无法正确运行， 你就会去fix这些问题的了。(言下之意就是大胆去用非ASCII字符，如果真的有需要的话)


## 源文件结构
一个源文件包含(按顺序地)：
1. 许可证或版权信息(如有需要)
2. package语句
3. import语句
4. 一个顶级类(只有一个)

以上每个部分之间用一个空行隔开。

### 3.1 许可证或版权信息
如果一个文件包含许可证或版权信息，那么它应当被放在文件最前面。

### 3.2 package语句
package语句不换行，列限制(4.4节)并不适用于package语句。(即package语句写在一行里)

### 3.3 import语句
#### 3.3.1 import不要使用通配符
即，不要出现类似这样的import语句：`import java.util.*`;

#### 3.3.2 不要换行
import语句不换行，列限制(4.4节)并不适用于import语句。(每个import语句独立成行)

#### 3.3.3 顺序和间距
import语句可分为以下几组，按照这个顺序，每组由一个空行分隔：
1. 所有的静态导入独立成组
2. `com.google` imports(仅当这个源文件是在`com.google`包下)
3. 第三方的包。每个顶级包为一组，字典序。例如：android, com, junit, org, sun
4. `java` imports
5. `javax` imports

组内不空行，按字典序排列。

### 3.4 类声明
#### 3.4.1 只有一个顶级类声明
每个顶级类都在一个与它同名的源文件中(当然，还包含`.java`后缀)。

例外：`package-info.java`，该文件中可没有`package-info`类。

#### 3.4.2 类成员顺序
类的成员顺序对易学性有很大的影响，但这也不存在唯一的通用法则。不同的类对成员的排序可能是不同的。 最重要的一点，每个类应该以某种逻辑去排序它的成员，维护者应该要能解释这种排序逻辑。比如，新的方法不能总是习惯性地添加到类的结尾，因为这样就是按时间顺序而非某种逻辑来排序的。

##### 3.4.2.1 重载：永不分离
当一个类有多个构造函数，或是多个同名方法，这些函数/方法应该按顺序出现在一起，中间不要放进其它函数/方法。


## 格式
<b>术语说明</b>：块状结构(block-like construct)指的是一个类，方法或构造函数的主体。需要注意的是，数组初始化中的初始值可被选择性地视为块状结构(4.8.3.1节)。

### 4.1 大括号
#### 4.1.1 使用大括号(即使是可选的)
大括号与`if, else, for, do, while`语句一起使用，即使只有一条语句(或是空)，也应该把大括号写上。

#### 4.1.2 非空块：K & R 风格
对于非空块和块状结构，大括号遵循Kernighan和Ritchie风格 (["Egyptian brackets"](http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html)):
- 除了下面详细说明的情况外，在左大括号之前不换行
- 左大括号后换行
- 右大括号前换行
- 如果右大括号是一个语句、函数体或类的终止，则右大括号后换行; 否则不换行。例如，如果右大括号后面是else或逗号，则不换行。

示例：
```java
return new MyClass() {
  @Override public void method() {
    if (condition()) {
      try {
        something();
      } catch (ProblemException e) {
        recover();
      }
    }
  }
};
```
4.8.1节给出了enum类的一些例外。

### 4.1.3 空块：可以用简洁版本
一个空的块状结构里什么也不包含，大括号可以简洁地写成{}，不需要换行。例外：如果它是一个多块语句的一部分(if/else 或 try/catch/finally) ，即使大括号内没内容，右大括号也要换行。

示例：
```java
void doNothing() {}
```

### 4.2 块缩进：2个空格
每当开始一个新的块，缩进增加2个空格，当块结束时，缩进返回先前的缩进级别。缩进级别适用于代码和注释。(见4.1.2节中的代码示例)

### 4.3 一行一个语句
每个语句后要换行。

### 4.4 列限制：80或100
一个项目可以选择一行80个字符或100个字符的列限制，除了下述的例外，任何一行如果超过这个字符数限制，必须自动换行。

例外：
1. 不可能满足列限制的行(例如，Javadoc中的一个长URL，或是一个长的JSNI方法参考)。
2. package和import语句(见3.2节和3.3节)。
3. 注释中那些可能被剪切并粘贴到shell中的命令行。

### 4.5 自动换行
<b>术语说明</b>：一般情况下，一行长代码为了避免超出列限制(80或100个字符)而被分为多行，我们称之为自动换行(line-wrapping)。

我们并没有全面、确定性的准则来决定在每一种情况下如何自动换行。很多时候，对于同一段代码会有好几种有效的自动换行方式。

> Tip: 提取方法或局部变量可以在不换行的情况下解决代码过长的问题(是合理缩短命名长度吧)

#### 4.5.1 从哪里断开
自动换行的基本准则是：更倾向于在更高的语法级别处断开。

1. 如果在`非赋值运算符`处断开，那么在该符号前断开(比如+，它将位于下一行)。注意：这一点与Google其它语言的编程风格不同(如C++和JavaScript)。
    - 这条规则也适用于以下“类运算符”符号：
        - 点分隔符(`.`)
        - 方法引用的两个冒号(`::`)
        - 类型界限中的&(`<T extends Foo & Bar>`)
        - catch块中的管道符号(`catch (FooException | BarException e)`)
2. 如果在赋值运算符处断开，通常的做法是在该符号后断开(比如=，它与前面的内容留在同一行)。这条规则也适用于foreach语句中的分号。
方法名或构造函数名与左括号留在同一行。
逗号(,)与其前面的内容留在同一行。

::: warning
这里参考译文跟原文很不一样，可能是原文有修改

放个[原文链接](https://google.github.io/styleguide/javaguide.html#s4.5.1-line-wrapping-where-to-break)
:::
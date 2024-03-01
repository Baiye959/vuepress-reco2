---
title: 代码美学
date: 2024/03/01
categories:
 - other
---
::: info
学习代码美学，记录一下<br/>
目前理解的还不够深刻，等熟悉一下类再回来看一遍<br/>
[CodeAesthetic油管原视频](https://youtu.be/-J3wNP6u5YU)<br/>
[B站熟肉](https://www.bilibili.com/video/BV1nP4y1v7ww)
:::

## 在代码中取名
> There are only two hard things in computer science: cache invalidation and naming things
>
> 计算机科学只有两件难事：缓存失效和取名

1. 避免用单个字母命名
    - 一个字母无法体现一个变量的相关信息
2. 不要缩写
    - 缩写的含义需要依赖上下文理解，读代码的时间比写代码的时间更长
3. 不要在名称中携带类型信息
    - 这是早期只有int时的做法，现在静态语言中变量类型会告诉我们这个变量是什么
    - ❗推荐在变量名中带上单位，例如`delaySeconds`
    - 但在python这类动态语言中，我们只能在名称中携带类型信息来判断变量类型
    - 如果你在纠结如何对类或函数取名，这可能意味着你的代码结构有问题
4. 不要轻易将类命名为"Utils"
    - "Utils"是标准库的意思，如果想将函数放进去，先看看它是不是能被整理到规范命名的模块中

## 组合为何优于继承？
> Composition > Inheritance


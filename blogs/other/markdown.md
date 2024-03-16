---
title: 本站markdown语法速查
date: 2024/01/23
categories:
 - other
sticky: 2
---
## 本主题Markdown扩展

### 自定义容器&代码相关
[官网文档 - 自定义容器&代码相关](https://vuepress-theme-reco.recoluan.com/docs/theme/custom-container.html)
```
::: tip
这是一个提示
:::

::: info
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
```
### 任务列表
[官网文档 - 任务列表](https://vuepress-theme-reco.recoluan.com/docs/theme/markdown-task.html)
- [ ] 未完成任务
- [x] 已完成任务
```
- [ ] 未完成任务
- [x] 已完成任务
 * * *注意这些空格必须要有
```

### Vue组件预览
[官网文档 - Vue组件预览](https://vuepress-theme-reco.recoluan.com/docs/theme/custom-container.html)

### 解析文件代码组
[官网文档 - 解析文件代码组](https://vuepress-theme-reco.recoluan.com/docs/theme/markdown-file-parse.html)<br/>

## 常用Markdown语法
[Markdown官方语法](https://markdown.com.cn/basic-syntax/)

### 标题
文内标题只能从##开始！#被文章标题占用

### 换行
![](/image/1706019725841.jpg)

### 插入图片（包括svg图标）
![](/image/dog.jpg)
该图片路径为.vuepress/public/image/dog.jpg
```
![](/image/1706019725841.jpg)
```

### 插入文件（包括视频）
[ratings.csv](/file/ratings_wfpL8zQ8L4.csv)

该文件路径为.vuepress/public/file/ratings_wfpL8zQ8L4.csv，希望展示的名称为ratings.csv

```
[ratings.csv](/file/ratings_wfpL8zQ8L4.csv)
```

### 表格

| 左对齐 | 居中对齐 | 右对齐 |
|:-|:-:|-:|
| Chocolatey | Windows 命令行软件管理器 | [使用教程](https://javabetter.cn/gongju/choco.html) |

```
| 左对齐 | 居中对齐 | 右对齐 |
|:-|:-:|-:|
| Chocolatey | Windows 命令行软件管理器 | [使用教程](https://javabetter.cn/gongju/choco.html) |
```

### 引用

>引用第一行
>
>引用第二行

```
>引用第一行
>
>引用第二行
```

### 文本样式
| 样式名 | 效果 | Markdown |
|:-----:|:----:|:---------|
| 加粗 | **加粗** | `**加粗**`或`__加粗__`或`<b>加粗</b>` |
| 斜体 | *斜体* | `*斜体*`或`_斜体_`或`<i>斜体</i>` |
| 删除线 | ~~删除线~~ | `~~删除线~~` |
| 下划线 | <u>下划线</u> | `<u>下划线</u>` |
| 小号字体 | <small>小号字体</small> | `<small>小号字体</small>` |
| 大号字体 | <big>大号字体</big> | `<big>大号字体</big>` |
| 高亮 | <mark>高亮</mark> | `<mark>高亮</mark>` |
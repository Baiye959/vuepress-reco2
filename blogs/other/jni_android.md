---
title: 利用JNI在安卓项目中使用CPP代码
date: 2024/10/09
categories:
 - other
---
## 在安卓项目中使用现有cpp代码流程
1. 新建native-cpp安卓项目
2. 将原有cpp代码放在安卓项目的cpp目录中
3. 新建cpp文件，写cpp函数包装想要在安卓项目中使用的cpp代码
4. 在安卓项目的java目录中创建一个JNIHelper.class（名字任意），加载cpp代码后面会编译出的library库，并写native函数
5. 根据native函数，安卓会提示帮忙生成对应的cpp实现（内容要自己填充）
6. 在cpp目录下编写CMakeLists.txt，用于编译JNIHelper中需要的library库

## 环境检查
1. `build.gradle(module:app)`
```Kotlin
android {
  externalNativeBuild {
      cmake {
          path = file("src/main/cpp/CMakeLists.txt")
          version = "3.22.1"
      }
  }
  ndkVersion = "26.1.10909125"
}
```
2. `local.properties`

    不要在`local.properties`里写`ndk.dir=C\:\\Users\\33835\\AppData\\Local\\Android\\Sdk\\ndk\\26.1.10909125`，已被弃用，被上述`build.gradle`中的`ndkVersion = "26.1.10909125"`代替了

## 踩坑记录
点Build > Rebuild Project报错不清晰，可以在命令行输入`./gradlew assembleDebug --info`查看更详细的报错
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
```cpp
// ParticleFilterWrapper.cpp
#include "ParticleFilter.h"
#include "MapParser.h"
#include "ParticleFilterWrapper.h"

ParticleFilterWrapper::ParticleFilterWrapper(double **map, int mapLength) {
    // 关闭磁场和wifi匹配
    magrespf.flag = false;
    wifirespf.flag = false;

    mapParser = new MapParser(map, mapLength);
    pf = new ParticleFilter(mapParser);
    // 此处初始化神经网络
//    neuralNetwork = new NeuralNetwork();
}

ParticleFilterWrapper::~ParticleFilterWrapper() {
    if (mapParser) {
        delete mapParser;
        mapParser = nullptr;
    }
    if (pf) {
        delete pf;
        pf = nullptr;
    }
}

Pos ParticleFilterWrapper::input(bool isAR, double *displament, double *imuData, int floor, bool walkStrait) {
    if (!pf) {
        throw std::runtime_error("ParticleFilter is not initialized");
    }

    // 调用ParticleFilter的input函数
    // double steplength, double yaw, int floor, int *actRes, bool WalkStrait, Match_Result magrespf, Match_Result wifirespf

    // 非AR输入，将imu数据输入到神经网络获得displament
    if (!isAR) {
//        displament = neuralNetwork->input(imuData);
    }
    // 1. 从位移displament计算步长steplength和航向yaw
    double x = displament[0];
    double y = displament[1];
    double steplength = sqrt(x * x + y * y);
    double yaw = atan2(y, x);

    // 2. 活动识别结果 int *actRes（原代码在PreProcessing模块，现有模块未使用仅赋值）
    // 3. 是否走直线 bool walkStrait*（原代码在GeoProcessing模块）

    return pf->input(steplength, yaw, floor, this->last_actres, walkStrait, magrespf, wifirespf);
}
```
```cpp
// ParticleFilterWrapper.h
//
// Created by 33835 on 2024/10/8.
//

#ifndef MY_APPLICATION_PARTICLEFILTERWRAPPER_H
#define MY_APPLICATION_PARTICLEFILTERWRAPPER_H

#include "ParticleFilter.h"
#include "MapParser.h"

class ParticleFilterWrapper {
public:
    ParticleFilterWrapper(double **map, int mapLength);
    ~ParticleFilterWrapper();

    Pos input(bool isAR, double *displament, double *imuData, int floor, bool walkStrait);

private:
    ParticleFilter* pf;
    MapParser* mapParser;
    // 活动识别结果 仅用于适配pf原代码
    int last_actres[2] = {0, 0};
    Match_Result magrespf, wifirespf;
};

#endif //MY_APPLICATION_PARTICLEFILTERWRAPPER_H

```
4. 在安卓项目的java目录中创建一个JNIHelper.class（名字任意），加载cpp代码后面会编译出的library库，并写native函数
```java
package com.baiye959.myapplication.map;

public class JNIHelper {
    static {
        System.loadLibrary("native-lib");
    }

    public native void init(double[] map, int mapLength);
    public native void destroy();
    public native double[] input(boolean isAR, double[] displacement, double[] imuData, int floor, boolean walkStrait);
}
```
5. 根据native函数，安卓会提示帮忙生成对应的cpp实现（内容要自己填充）
```cpp
#include <jni.h>
#include <string>
#include "ParticleFilterWrapper.h"

extern "C" JNIEXPORT jstring JNICALL
Java_com_baiye959_myapplication_MainActivity_stringFromJNI(
        JNIEnv* env,
        jobject /* this */) {
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

// 全局变量，用于存储 ParticleFilterWrapper 实例
static ParticleFilterWrapper* gParticleFilterWrapper = nullptr;

extern "C" JNIEXPORT void JNICALL
Java_com_baiye959_myapplication_map_JNIHelper_init(
        JNIEnv* env,
        jobject /* this */,
        jdoubleArray jMap,
        jint mapLength) {
    // 将 Java 数组转换为 C++ 数组
    jdouble* map = env->GetDoubleArrayElements(jMap, nullptr);
    double** cppMap = new double*[mapLength];
    for (int i = 0; i < mapLength; i++) {
        cppMap[i] = new double[6];  // 每行有 6 个元素
        for (int j = 0; j < 6; j++) {
            cppMap[i][j] = map[i * 6 + j];
        }
    }

    // 创建 ParticleFilterWrapper 实例
    gParticleFilterWrapper = new ParticleFilterWrapper(cppMap, mapLength);

    // 释放 Java 数组
    env->ReleaseDoubleArrayElements(jMap, map, JNI_ABORT);
}

extern "C" JNIEXPORT void JNICALL
Java_com_baiye959_myapplication_map_JNIHelper_destroy(
        JNIEnv* env,
        jobject /* this */) {
    if (gParticleFilterWrapper) {
        delete gParticleFilterWrapper;
        gParticleFilterWrapper = nullptr;
    }
}

extern "C" JNIEXPORT jdoubleArray JNICALL
Java_com_baiye959_myapplication_map_JNIHelper_input(
        JNIEnv* env,
        jobject /* this */,
        jboolean jIsAR,
        jdoubleArray jDisplacement,
        jdoubleArray jImuData,
        jint jFloor,
        jboolean jWalkStrait) {
    if (!gParticleFilterWrapper) {
        // 抛出 Java 异常
        jclass exceptionClass = env->FindClass("java/lang/RuntimeException");
        env->ThrowNew(exceptionClass, "ParticleFilter is not initialized");
        return nullptr;
    }

    // 将 Java 数组转换为 C++ 数组
    jdouble* displacement = env->GetDoubleArrayElements(jDisplacement, nullptr);
    jdouble* imuData = env->GetDoubleArrayElements(jImuData, nullptr);

    // 将 Java 类型转换为 C++ 类型
    bool isAR = (bool)jIsAR;
    int floor = (int)jFloor;
    bool walkStrait = (bool)jWalkStrait;

    // 调用 ParticleFilterWrapper 的 input 方法
    Pos result = gParticleFilterWrapper->input(isAR, displacement, imuData, floor, walkStrait);

    // 释放 Java 数组
    env->ReleaseDoubleArrayElements(jDisplacement, displacement, JNI_ABORT);
    env->ReleaseDoubleArrayElements(jImuData, imuData, JNI_ABORT);

    // 将结果转换为 Java 数组
    jdoubleArray jResult = env->NewDoubleArray(2);
    jdouble resultArray[2] = {result.x, result.y};
    env->SetDoubleArrayRegion(jResult, 0, 2, resultArray);

    return jResult;
}
```
6. 在cpp目录下编写CMakeLists.txt，用于编译JNIHelper中需要的library库
```cmake
# For more information about using CMake with Android Studio, read the
# documentation: https://d.android.com/studio/projects/add-native-code.html.
# For more examples on how to use CMake, see https://github.com/android/ndk-samples.

# 指定最小cmake版本号
cmake_minimum_required(VERSION 3.22.1)

# 项目名称
project("myapplication")

# Creates and names a library, sets it as either STATIC
# or SHARED, and provides the relative paths to its source code.
# You can define multiple libraries, and CMake builds them for you.
# Gradle automatically packages shared libraries with your APK.
#
# In this top level CMakeLists.txt, ${CMAKE_PROJECT_NAME} is used to define
# the target library name; in the sub-module's CMakeLists.txt, ${PROJECT_NAME}
# is preferred for the same purpose.
#
# In order to load a library into your app from Java/Kotlin, you must call
# System.loadLibrary() and pass the name of the library defined here;
# for GameActivity/NativeActivity derived applications, the same library name must be
# used in the AndroidManifest.xml file.
# 添加源文件
add_library(
        # 设置库名称
        native-lib

        # 设置库类型为共享库
        SHARED

        # 源文件列表
        native_lib.cpp
        ParticleFilterWrapper.cpp
        ParticleFilter.cpp
        MapParser.cpp
        math_func.cpp
        Matrix.cpp
        settings.cpp
)

# 查找并链接 log 库
find_library(log-lib log)

# 设置包含目录
target_include_directories(native-lib PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}  # 当前源代码目录
        ${CMAKE_CURRENT_SOURCE_DIR}/include  # 包含目录
)

# 链接库
target_link_libraries(native-lib
        # List libraries link to the target library
        android
        log)
```

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
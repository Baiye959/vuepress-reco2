---
title: Spring | IoC和AOP（实战篇）
date: 2024/04/26
categories:
 - Java
tags:
 - Spring
---
## Spring
Spring全家桶：
- Web：Spring MVC/Spring Web MVC、Spring Web Flex
- 持久层：Spring Data/Spring Data JPA、Spring Data Redis、Spring Data MongoDB
- 安全校验：Spring Security
- 构建工程脚手架：Spring Boot
- 微服务：Spring Cloud

Spring的核心机制：IoC和AOP<br/>
IoC是Spring全家桶各个功能模块的基础，创建容器的对象<br/>
AOP也是以IoC为基础，指面向切面编程，是抽象化的面向对象

## IoC
**IoC(Inversion of Control)：控制反转**<br/>
控制反转，将对象的创建进行反转。常规情况下，对象都是开发者手动创建的；使用IoC后，开发者不再需要创建对象，而是由IoC容器根据需求自动创建项目所需的对象。

IoC示例项目的目录树：
```bash
C:.
├─.idea
└─src
   └─main
      ├─java
      │  └─com
      │      └─baiye959
      │          ├─configuration
      │          │   └─BeanConfiguration.java
      │          └─ioc
      │              ├─DataConfig.java
      │              ├─GlobalConfig.java
      │              └─Test.java
      └─resources
          └─spring.xml
```

创建DataConfig类作为示例，如下：
```java
// 设置DataConfig类
// src/main/java/com/baiye959/ioc/DataConfig.java
package com.baiye959.ioc;

import lombok.Data;

@Data
public class DataConfig {
    private String url;
    private String driverName;
    private String username;
    private String password;
}
```

```java
// 手动创建对象
// src/main/java/com/baiye959/ioc/Test.java
package com.baiye959.ioc;

public class Test {
    public static void main(String[] args) {
        DataConfig dataConfig = new DataConfig();
        dataConfig.setDriverName("Driver");
        dataConfig.setUrl("localhost:3306/dbname");
        dataConfig.setUsername("baiye959");
        dataConfig.setPassword("123456");
        System.out.println(dataConfig);
    }
}
```

```xml
<!-- 使用IoC需添加依赖 -->
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>6.1.5</version>    
</dependency>
```

### 基于XML配置使用IoC
开发者把需要的对象在XML中进行配置，Spring框架读取这个配置文件，根据文件的内容来创建对象。
```xml
<!-- src/main/resources/spring.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:p="http://www.springframework.org/schema/p"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop-4.3.xsd">
    <bean class="com.baiye959.ioc.DataConfig" id="dataConfig">
        <property name="driverName" value="Driver"></property>
        <property name="url" value="localhost:3306/dbname"></property>
        <property name="username" value="baiye959"></property>
        <property name="password" value="123456"></property>
    </bean>
</beans>
```

```java
// src/main/java/com/baiye959/ioc/Test.java
package com.baiye959.ioc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        System.out.println(context.getBean("dataConfig"));
    }
}
```

### 基于注解使用IoC
#### 配置类（方法一）
用一个Java类来替代XML文件，把在XML中配置的内容放到配置类中

```java
// src/main/java/com/baiye959/configuration/BeanConfiguration.java
package com.baiye959.configuration;

import com.baiye959.ioc.DataConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// 注释 @Configuration 表示这是一个配置类
@Configuration
public class BeanConfiguration {
    // 注释 @Bean 表示这是一个Bean，加载所在配置类时，会调用本方法，将返回的对象调入IoC容器中，供开发者使用
    @Bean
    // Bean的默认id为方法名，可如下自定义
    // @Bean(value = "config")
    public DataConfig dataConfig() {
        DataConfig dataConfig = new DataConfig();
        dataConfig.setDriverName("Driver");
        dataConfig.setUrl("localhost:3306/dbname");
        dataConfig.setUsername("baiye959");
        dataConfig.setPassword("123456");
        return dataConfig;
    }
}
```

```java
// src/main/java/com/baiye959/ioc/Test.java
package com.baiye959.ioc;

import com.baiye959.configuration.BeanConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(BeanConfiguration.class);
        System.out.println(context.getBean("dataConfig"));
    }
}
```

配置类较多时，一个一个加载比较麻烦，可以直接扫configuration包，加载其中所有的配置类
```java
ApplicationContext context = new AnnotationConfigApplicationContext("com.baiye959.configuration");
```

#### 扫包+注解（方法二）
更简单的方式，不再需要依赖于XML或者配置类，而是直接将bean的创建交给目标类，在目标类中添加注解来创建

```java
// src/main/java/com/baiye959/ioc/DataConfig.java
package com.baiye959.ioc;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Data
@Component
// 注解 @Component 表示这个类需要被加载，Spring框架会创建对象、放到IoC容器里
public class DataConfig {
    // 注解 @Value 表示默认值
    @Value("localhost:3306/dbname")
    private String url;
    @Value("Driver")
    private String driverName;
    @Value("baiye959")
    private String username;
    @Value("123456")
    private String password;
}
```

```java
// src/main/java/com/baiye959/ioc/Test.java
package com.baiye959.ioc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext("com.baiye959.ioc");
        System.out.println(context.getBean(DataConfig.class));
    }
}
```

### Ioc的依赖注入
将对象与其他对象 “装配” 起来，或将对象 “注入” 到其他对象中。是由组装器（Assembler）而不是对象本身来完成的。
```java
// src/main/java/com/baiye959/ioc/GlobalConfig.java
package com.baiye959.ioc;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Data
@Component
public class GlobalConfig {
    @Value("8080")
    private String port;
    @Value("/")
    private String path;
    // 注释 @Autowired Spring框架会自动去IoC容器里找一个DataConfig类型的Bean，找到了就赋给dataConfig
    @Autowired
    private DataConfig dataConfig;
}
```

`@Autowired`通过类型进行注入，如果需要通过名称取值，再添加注释`Qualifier`完成名称的映射
```java
package com.baiye959.ioc;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Data
@Component
public class GlobalConfig {
    @Value("8080")
    private String port;
    @Value("/")
    private String path;
    // 注释 @Autowired Spring框架会自动去IoC容器里找一个DataConfig类型的Bean，找到了就赋给dataConfig
    @Autowired
    @Qualifier("config")
    private DataConfig dataConfig;
}
```
![](/image/2024042704.png)

## AOP
**AOP(Aspect Oriented Programming)：面向切面编程**<br/>
常应用于：1.打印日志 2.事务 3.权限处理<br/>
以打印日志为例进行实践。

AOP示例项目的目录树：
```bash
C:.
├─.idea
└─src
   └─main
      ├─java
      │  └─com
      │      └─baiye959
      │          └─aop
      │              ├─Cal.java
      │              ├─CalImpl.java
      │              ├─LoggerAspect.java
      │              └─Test.java
      └─resources
          └─spring.xml
```

业务代码为计算器
```java
// src/main/java/com/baiye959/aop/Cal.java
package com.baiye959.aop;

public interface Cal {
    public int add(int num1, int num2);
    public int sub(int num1, int num2);
    public int mul(int num1, int num2);
    public int div(int num1, int num2);
}
```

此时业务代码和打印日志耦合度很高，但每个方法又都很类似，如下：
```java
// src/main/java/com/baiye959/aop/CalImpl.java
package com.baiye959.aop;

public class CalImpl implements Cal{
    @Override
    public int add(int num1, int num2) {
        System.out.println("add方法的参数是[" + num1 + ", " + num2 + "]");
        int result = num1 + num2;
        System.out.println("add方法的结果是" + result);
        return result;
    }

    @Override
    public int sub(int num1, int num2) {
        System.out.println("sub方法的参数是[" + num1 + ", " + num2 + "]");
        int result = num1 - num2;
        System.out.println("sub方法的结果是" + result);
        return result;
    }

    @Override
    public int mul(int num1, int num2) {
        System.out.println("mul方法的参数是[" + num1 + ", " + num2 + "]");
        int result = num1 * num2;
        System.out.println("mul方法的结果是" + result);
        return result;
    }

    @Override
    public int div(int num1, int num2) {
        System.out.println("div方法的参数是[" + num1 + ", " + num2 + "]");
        int result = num1 / num2;
        System.out.println("div方法的结果是" + result);
        return result;
    }
}
```

这样的代码也可行，但可维护性太差、代码效率太低，如果要对打印日志做更改，就要调整多个位置。<br/>
把不影响业务的非业务重复代码抽离出来，就是AOP。
![](/image/2024042701.png)


### AOP实战
计算器方法中，日志和业务混合在一起，AOP要做的就是将日志代码全部抽象出去统一进行处理，计算器方法中只保留核心的业务代码。<br/>
做到核心业务和非业务代码的解耦合。

![](/image/2024042702.png)
1. 引入依赖
```xml
<!-- pom.xml -->
<!-- https://mvnrepository.com/artifact/org.springframework/spring-aspects -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>6.1.4</version>
</dependency>
```

2. 创建切面类
```java
// src/main/java/com/baiye959/aop/LoggerAspect.java
package com.baiye959.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@Aspect
// 注释 @Aspect 表示这是个切面类
public class LoggerAspect {
    // 注释 @Before 表示本切面方法跟指定方法进行映射，在它们执行前执行
    // 这里用了通配符*，参数用..表示
    @Before("execution(public int com.baiye959.aop.CalImpl.*(..))")
    public void before(JoinPoint joinPoint) {
        String name = joinPoint.getSignature().getName();
        System.out.println(name + "方法的参数是" + Arrays.toString(joinPoint.getArgs()));
    }

    // 注释 @AfterReturning 表示本切面方法跟指定方法进行映射，在它们return后执行
    // 指定方法的结果会被本切面方法捕捉到，赋给result
    @AfterReturning(value = "execution(public int com.baiye959.aop.CalImpl.*(..))", returning = "result")
    public void AfterReturning(JoinPoint joinPoint, Object result) {
        String name = joinPoint.getSignature().getName();
        System.out.println(name + "方法的结果是" + result);
    }
}
```

3. 实现类添加 @Component 注解
```java
// src/main/java/com/baiye959/aop/CalImpl.java
package com.baiye959.aop;

import org.springframework.stereotype.Component;

@Component
public class CalImpl implements Cal{
    @Override
    public int add(int num1, int num2) {
        int result = num1 + num2;
        return result;
    }

    @Override
    public int sub(int num1, int num2) {
        int result = num1 - num2;
        return result;
    }

    @Override
    public int mul(int num1, int num2) {
        int result = num1 * num2;
        return result;
    }

    @Override
    public int div(int num1, int num2) {
        int result = num1 / num2;
        return result;
    }
}
```

4. 配置自动扫包，开启自动生成代理对象
```xml
<!-- pom.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:p="http://www.springframework.org/schema/p"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop-4.3.xsd">

    <!-- 自动扫包 -->
    <context:component-scan base-package="com.baiye959.aop"></context:component-scan>

    <!-- 开启自动生成代理 -->
    <aop:aspectj-autoproxy></aop:aspectj-autoproxy>
</beans>
```

5. 使用
```java
package com.baiye959.aop;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        Cal bean = context.getBean(Cal.class);
        System.out.println(bean.add(9, 8));
        System.out.println(bean.sub(9, 8));
        System.out.println(bean.mul(9, 8));
        System.out.println(bean.div(9, 8));
    }
}
```

![](/image/2024042703.png)

Q: 为什么取代理类的时候用的是接口？代码为：`Cal bean = context.getBean(Cal.class);`

A: 代理类和实现类要有相同的接口。<br/>
出于相同原因，这个接口只能有一个参与映射（有@Component注释）的实现类。

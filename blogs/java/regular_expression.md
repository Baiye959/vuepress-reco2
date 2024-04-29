---
title: JavaSE | Java常用正则表达式
date: 2024/04/20
categories:
 - Java
tags:
 - JavaSE
---
## 优雅匹配特殊字符
```java
// 去除特殊字符
public static String removeSpecialChar(String str) {
    String regEx = "\\pP|\\pS|\\s+";
    str = Pattern.compile(regEx).matcher(str).replaceAll("").trim();
    return str;
}
// 匹配到特殊字符返回true，否则返回false
public static boolean hasSpecialChar(String str) {
    String validPattern = "\\pP|\\pS|\\s+";
    Matcher matcher = Pattern.compile(validPattern).matcher(str);
    return matcher.find(); 
}
```
其中
- \s+是空格一个或者多个，不管在哪个位置都能匹配
- \pP 其中的小写 p 是 property 的意思，表示 Unicode 属性，用于 Unicode 正表达式的前缀。

Unicode 字符集七个字符属性：
- P：标点字符；
- L：字母；
- M：标记符号（一般不会单独出现）；
- Z：分隔符（比如空格、换行等）；
- S：符号（比如数学符号、货币符号等）；
- N：数字（比如阿拉伯数字、罗马数字等）；
- C：其他字符

七个属性下还有若干个子属性，用于更进一步地进行细分：
- [Unicode 正则表达式标准](http://www.unicode.org/reports/tr18/)（可以找到所有的子属性）
- [各 Unicode 字符属性的定义，可以用来看看某个字符具有什么属性](http://www.unicode.org/Public/UNIDATA/UnicodeData.txt)（这个文本文档一行对应一个字符，第一列是 Unicode 编码，第二列是字符名，第三列是 Unicode 属性，以及其他一些字符信息。）

## 列举匹配特殊字符
### 匹配规定格式，符合返回true
```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

Pattern pattern = Pattern.compile("^[a-zA-Z0-9_]+$"); //以账号为例
Matcher matcher = pattern.matcher(str);
matcher.matches();
```
- 账号（只允许字母、数字、下划线）：^[a-zA-Z0-9_]+$
- 验证手机号：^((17[0-9])|(14[0-9])|(13[0-9])|(15[0-9])|(16[0-9])|(18[0-9])|(19[0-9]))\d{8}$
- 汉字：^[\u4e00-\u9fa5]{0,}$
- Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
- 18位身份证的粗略校验：^(\\d{6})(19|20)(\\d{2})(1[0-2]|0[1-9])(0[1-9]|[1-2][0-9]|3[0-1])(\\d{3})(\\d|X|x)?$
- 年级（以数字[2-7]或者中文数字[二三四五六七]开头,以年级结尾）：^(([2-7]|[二三四五六七]).?)+年级$
- 空白\回车制\表符: \s

### 过滤特殊字符
```java
import java.util.regex.Matcher
import java.util.regex.Pattern

// 过滤特殊字符
// 只允许字母和数字
String regEx = "[^a-zA-Z0-9]";
// 清除掉所有特殊字符
String str = """[`~!#\$%^&*()+=|{}'Aa:;',\\\\[\\\\].<>/?~！@#￥%……&*（）9——+|{}【】\\"‘；：”“’。，、？]"""
Pattern  p = Pattern.compile(regEx)
Matcher m = p.matcher(str)
println(m.replaceAll("").trim())
```

## 常见情景
### 18位身份证的严格验证（含真实性校验）
```java
public static boolean is18ByteIdCardComplex(String idCard){  
    Pattern pattern1 = Pattern.compile("^(\\d{6})(19|20)(\\d{2})(1[0-2]|0[1-9])(0[1-9]|[1-2][0-9]|3[0-1])(\\d{3})(\\d|X|x)?$");   
    Matcher matcher = pattern1.matcher(idCard);  
    int[] prefix = new int[]{7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2};  
    int[] suffix = new int[]{ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 };  
    if(matcher.matches()){  
        Map<String, String> cityMap = initCityMap();  
        if(cityMap.get(idCard.substring(0,2)) == null ){  
            return false;  
        }  
        int idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和  
        for(int i=0;i<17;i++){  
            idCardWiSum+=Integer.valueOf(idCard.substring(i,i+1))*prefix[i];  
        }  
          
        int idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置  
        String idCardLast=idCard.substring(17);//得到最后一位身份证号码  
          
        //如果等于2，则说明校验码是10，身份证号码最后一位应该是X  
        if(idCardMod==2){  
            if(idCardLast.equalsIgnoreCase("x")){  
                return true;  
            }else{  
                return false;  
            }  
        }else{  
            //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码  
            if(idCardLast.equals(suffix[idCardMod]+"")){  
                return true;  
            }else{  
                return false;  
            }  
       }  
    }  
    return false;  
}  
```

### Java自带注解验证手机号 @Pattern + @Valid（仅记录，未使用过）
`controller`处需要加上`@Valid`注解，不然不会抛异常
```java
import javax.validation.constraints.Pattern;

@Pattern(regexp = "^((17[0-9])|(14[0-9])|(13[0-9])|(15[0-9])|(16[0-9])|(18[0-9])|(19[0-9]))\\d{8}$", message = "id不正确")
private String keyWord;
```

### 获取字符串中所有匹配的内容
```java
String str = "select * from order where createdUser = ${currentUser} and  depart = ${currentOrg} and status = 'VALID'";
String reg = "\\$\\{[a-zA-Z0-9]+\\}";//定义正则表达式

Pattern patten = Pattern.compile(reg);//编译正则表达式
Matcher matcher = patten.matcher(str);// 指定要匹配的字符串

List<String> matchStrs = new ArrayList<>();

while (matcher.find()) { //此处find（）每次被调用后，会偏移到下一个匹配
   matchStrs.add(matcher.group());//获取当前匹配的值
}

for (int i = 0; i < matchStrs.size(); i++) {
    System.out.println(matchStrs.get(i));
}
```
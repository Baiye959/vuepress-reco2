import{_ as a,o as t,c as i,e as l}from"./app-OzwhGvB3.js";const e={},c=l('<h2 id="web服务器软件都有哪些呢-这些软件都是提前开发好的。" tabindex="-1"><a class="header-anchor" href="#web服务器软件都有哪些呢-这些软件都是提前开发好的。" aria-hidden="true">#</a> WEB服务器软件都有哪些呢？（这些软件都是提前开发好的。）</h2><ul><li>Tomcat（WEB服务器）</li><li>jetty（WEB服务器）</li><li>JBOSS（应用服务器）</li><li>WebLogic（应用服务器）</li><li>WebSphere（应用服务器）</li></ul><h2 id="应用服务器和web服务器的关系" tabindex="-1"><a class="header-anchor" href="#应用服务器和web服务器的关系" aria-hidden="true">#</a> 应用服务器和WEB服务器的关系？</h2><ul><li>应用服务器实现了JavaEE的所有规范。(JavaEE有13个不同的规范。)</li><li>WEB服务器只实现了JavaEE中的Servlet + JSP两个核心的规范。</li><li>通过这个讲解说明了：应用服务器是包含WEB服务器的。</li><li>用过JBOSS服务器的同学应该很清楚，JBOSS中内嵌了一个Tomcat服务器。</li></ul><h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> Tomcat</h2><h3 id="tomcat下载" tabindex="-1"><a class="header-anchor" href="#tomcat下载" aria-hidden="true">#</a> Tomcat下载</h3><ul><li>apache官网地址：https://www.apache.org/</li><li>tomcat官网地址：https://tomcat.apache.org</li><li>tomcat开源免费的轻量级WEB服务器。</li><li>tomcat还有另外一个名字：catalina（catalina是美国的一个岛屿，风景秀丽，据说作者是在这个风景秀丽的小岛上开发了一个轻量级的WEB服务器，体积小，运行速度快，因此tomcat又被称为catalina）</li><li>tomcat的logo是一只公猫（寓意表示Tomcat服务器是轻巧的，小巧的，果然，体积小，运行速度快，只实现了Servlet+JSP规范）</li><li>tomcat是java语言写的。</li><li>tomcat服务器要想运行，必须先又jre（Java的运行时环境）</li></ul><h3 id="tomcat服务器要想运行-需要先有jre-所以要先安装jdk-配置java运行环境。" tabindex="-1"><a class="header-anchor" href="#tomcat服务器要想运行-需要先有jre-所以要先安装jdk-配置java运行环境。" aria-hidden="true">#</a> Tomcat服务器要想运行，需要先有jre，所以要先安装JDK，配置java运行环境。</h3><ul><li>JAVA_HOME=C:\\Program Files\\Java\\jdk-17.0.1</li><li>PATH=%JAVA_HOME%\\bin</li><li>目前JAVA_HOME没有配置，思考一个问题，这样行不行呢？目前只运行java程序是没问题的。真的没问题吗？</li></ul><h3 id="tomcat服务器的安装" tabindex="-1"><a class="header-anchor" href="#tomcat服务器的安装" aria-hidden="true">#</a> Tomcat服务器的安装</h3><ul><li>绿色版本的安装很简单，直接zip包解压即可。解压就是安装。</li><li>我有一个好习惯，在C盘的根目录下新建一个dev目录，java开发所有相关的工具都安装到dev目录下，这样比较方便管理。（你随意）</li><li>启动Tomcat</li><li>bin目录下有一个文件：startup.bat,通过它可以启动Tomcat服务器。 <ul><li>xxx.bat文件是个什么文件？bat文件是windows操作系统专用的，bat文件是批处理文件，这种文件中可以编写大量的windows的dos命令，然后执行bat文件就相当于批量的执行dos命令。</li><li>startup.sh，这个文件在windows当中无法执行，在Linux环境当中可以使用。在Linux环境下能够执行的是shell命令，大量的shell命令编写在shell文件当中，然后执行这个shell文件可以批量的执行shell命令。</li><li>tomcat服务器提供了bat和sh文件，说明了这个tomcat服务器的通用性。</li><li>分析startup.bat文件得出，执行这个命令，实际上最后是执行：catalina.bat文件。</li><li>catalina.bat文件中有这样一行配置：MAINCLASS=org.apache.catalina.startup.Bootstrap （这个类就是main方法所在的类。）</li><li>tomcat服务器就是Java语言写的，既然是java语言写的，那么启动Tomcat服务器就是执行main方法。</li></ul></li><li>我们尝试打开dos命令窗口，在dos命令窗口中输入startup.bat来启动tomcat服务器。</li><li>启动Tomcat服务器只配置path对应的bin目录是不行的。有两个环境变量需要配置： <ul><li>JAVA_HOME=JDK的根</li><li>CATALINA_HOME=Tomcat服务器的根</li></ul></li></ul><h3 id="关于tomcat服务器的目录" tabindex="-1"><a class="header-anchor" href="#关于tomcat服务器的目录" aria-hidden="true">#</a> 关于Tomcat服务器的目录</h3><ul><li>bin ： 这个目录是Tomcat服务器的命令文件存放的目录，比如：启动Tomcat，关闭Tomcat等。</li><li>conf： 这个目录是Tomcat服务器的配置文件存放目录。（server.xml文件中可以配置端口号，默认Tomcat端口是8080）</li><li>lib ：这个目录是Tomcat服务器的核心程序目录，因为Tomcat服务器是Java语言编写的，这里的jar包里面都是class文件。</li><li>logs: Tomcat服务器的日志目录，Tomcat服务器启动等信息都会在这个目录下生成日志文件。</li><li>temp：Tomcat服务器的临时目录。存储临时文件。</li><li>webapps：这个目录当中就是用来存放大量的webapp（web application：web应用）</li><li>work：这个目录是用来存放JSP文件翻译之后的java文件以及编译之后的class文件。</li></ul><h3 id="配置tomcat服务器需要哪些环境变量" tabindex="-1"><a class="header-anchor" href="#配置tomcat服务器需要哪些环境变量" aria-hidden="true">#</a> 配置Tomcat服务器需要哪些环境变量？</h3><ul><li>JAVA_HOME=JDK的根</li><li>CATALINA_HOME=Tomcat服务器的根</li><li>PATH=%JAVA_HOME%\\bin;%CATALINA_HOME%\\bin</li></ul><h3 id="tomcat服务器操作" tabindex="-1"><a class="header-anchor" href="#tomcat服务器操作" aria-hidden="true">#</a> Tomcat服务器操作</h3><ul><li>启动Tomcat： startup</li><li>关闭Tomcat：stop （shutdown.bat文件重命名为stop.bat，为什么？原因是shutdown命令和windows中的关机命令冲突。所以修改一下。）</li></ul><h3 id="怎么测试tomcat服务器有没有启动成功呢" tabindex="-1"><a class="header-anchor" href="#怎么测试tomcat服务器有没有启动成功呢" aria-hidden="true">#</a> 怎么测试Tomcat服务器有没有启动成功呢？</h3><ul><li>打开浏览器，在浏览器的地址栏上输入URL即可：</li><li>http://ip地址:端口号</li><li>ip地址是什么？端口号我知道，是8080</li><li>本机的IP地址是：127.0.0.1，或者是localhost，都行。</li></ul>',19),o=[c];function r(h,d){return t(),i("div",null,o)}const m=a(e,[["render",r],["__file","javaweb_3.html.vue"]]);export{m as default};
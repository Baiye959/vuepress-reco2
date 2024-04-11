import{_ as d,r as l,o as a,c as t,a as n,b as e,d as r,e as i}from"./app--Aw2hAxT.js";const v="/image/image_5Gx6v2URnf.png",c="/image/image_UxOC_68UV8.png",u="/image/image_Yxt9phBaNa.png",m="/image/image_z3OC40oDpp.png",o="/image/image_VGWY3BT0jG.png",b="/image/image_D5QqK7Q3ox.png",p="/image/image_jkAl-Xy9Ge.png",h="/image/image_HpuB1beoEy.png",g="/image/image_sJMV2KZtez.png",f="/image/image_2tGgLWoHXl.png",L={},k=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"INFO"),n("p",null,[n("a",{href:"/file/Nachos%E8%8B%B1%E6%96%87%E6%96%87%E6%A1%A3.pdf"},"Nachos英文文档.pdf"),n("br")])],-1),x=i(`<h2 id="一、熟悉nachos" tabindex="-1"><a class="header-anchor" href="#一、熟悉nachos" aria-hidden="true">#</a> 一、熟悉nachos</h2><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxf</span> nachos-linux64.tar.gz
<span class="token function">rm</span> nachos-linux64.tar.gz
<span class="token builtin class-name">cd</span> nachos-3.4/
<span class="token builtin class-name">cd</span> code/
<span class="token function">make</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> threads/
./nachos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt=""></p><p>写个hello熟悉一下环境</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// hello.cc
#include &quot;hello.h&quot;
#include &quot;system.h&quot;

void Hello(void) {
  printf(&quot;Hello Nachos!\\n&quot;);
}


// hello.h
#ifndef HELLO_H
#define HELLO_H

extern void Hello(void);

#endif // HELLO_H


// main.cc
#include &quot;hello.h&quot;

int main(...) {
  ...
#ifdef HELLO_H
  Hello();
#endif
}


// Makefile.common
THREAD_H = ...\\
  ../threads/hello.h
  
THREAD_C = ...\\
  ../threads/hello.cc
  
THREAD_O = ... hello.o

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> depend
<span class="token function">make</span>
./nachos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt=""></p><h2 id="二、实现双向有序链表" tabindex="-1"><a class="header-anchor" href="#二、实现双向有序链表" aria-hidden="true">#</a> 二、实现双向有序链表</h2><p>实现双向链表不难，可以参考<code>code/threads</code>目录里的<code>list.cc</code>和<code>list.h</code>，主要是熟悉 UNIX编程环境、make与makefile的用法和c++编程</p>',13),q={href:"http://t.csdnimg.cn/SvuqF",title:"http://t.csdnimg.cn/SvuqF",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,'#include "utility.h"',-1),D=n("code",null,"#include <iostream>",-1),N=i('<p><img src="'+u+`" alt=""></p><p>测试双向链表的<code>main.cc</code>如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#include &lt;iostream&gt;</span>
<span class="token comment">#include &quot;hello.h&quot;</span>
<span class="token comment">#include &quot;dllist.h&quot;</span>
<span class="token comment">#include &quot;utility.h&quot;</span>
<span class="token comment">#include &quot;system.h&quot;</span>


// External functions used by this <span class="token function">file</span>
extern void SortInsertN<span class="token punctuation">(</span>DLList::DLList *L, int n<span class="token punctuation">)</span><span class="token punctuation">;</span>
extern void RemoveN<span class="token punctuation">(</span>DLList::DLList *L, int n<span class="token punctuation">)</span><span class="token punctuation">;</span>


int
main<span class="token punctuation">(</span>int argc, char **argv<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  DLList *L <span class="token operator">=</span> new DLList<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  SortInsertN<span class="token punctuation">(</span>L, <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  RemoveN<span class="token punctuation">(</span>L, <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  return<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试成功</p><p><img src="`+m+`" alt=""></p><h2 id="三、体验nachos线程系统" tabindex="-1"><a class="header-anchor" href="#三、体验nachos线程系统" aria-hidden="true">#</a> 三、体验nachos线程系统</h2><h3 id="阅读源代码-理解nachos现有线程机制" tabindex="-1"><a class="header-anchor" href="#阅读源代码-理解nachos现有线程机制" aria-hidden="true">#</a> 阅读源代码，理解nachos现有线程机制</h3><ol><li><p>code/threads/main.cc</p><p>该模块是整个 Nachos 系统的入口，它分析了 Nachos 的命令行参数，根据不同的选项进行不同功能的初始化设置。</p></li><li><p>code/threads/threadtest.cc 这是一个简单的线程实验的测试用例。用于指导我们如何对线程的修改进行测试的。</p><p>testnum：测试号，对应相应的测试函数。</p><p>SimpleThread()：一个5次循环的程序，每次循环中都让出CPU，让其他就绪的线程执行。</p><p>ThreadTest1()：一个测试方法，创建两个线程，让他们都执行SimpleThread()方法，使这两个线程可以交替执行。</p><p>ThreadTest()：可以看做一个总控程序，根据main函数传过来testnum参数值来执行不同的测试程序。例如，当testnum==1时，就执行ThreadTest1()。</p></li><li><p>code/threads/thread.h</p><p>用于管理线程的数据结构。如线程控制块、线程的基本方法都在这个文件中被定义。</p><p>定义了Nachos线程的四种状态：</p><ul><li><code>JUST_CREATED</code></li><li><code>RUNNING</code></li><li><code>READY</code></li><li><code>BLOCKED</code></li></ul></li><li><p>code/threads/thread.cc 实现了用于管理线程事务的具体方法。主要有一个构造函数和四种操作：Fork 、Finish、Yield、Sleep。</p><p><code>Thread()</code>：构造函数，初始化一个新的Thread。</p><p><code>Fork(VoidFunctionPtr func,int arg):func</code>，新线程运行的函数；分配一块固定大小的内存作为线程的堆栈，在栈顶放入 ThreadRoot 的地址。</p><p><code>Finish()</code>：并不是直接收回线程的数据结构和堆栈，因为我们仍在这个堆栈上运行这个线程。做法是将threadToBeDestroyed的值设为当前线程，使得Scheduler的Run()可以调用销毁程序，当我们这个程序退出上下文时，将其销毁。</p><p><code>Yield()</code>：用于本线程放弃处理机。</p><p><code>Sleep()</code>：可以使当前线程转入阻塞态，并放弃 CPU， 直到被另一个线程唤醒，把它放回就绪线程队列</p></li></ol><h3 id="实现线程并发" tabindex="-1"><a class="header-anchor" href="#实现线程并发" aria-hidden="true">#</a> 实现线程并发</h3><h4 id="测试双向有序链表" tabindex="-1"><a class="header-anchor" href="#测试双向有序链表" aria-hidden="true">#</a> 测试双向有序链表</h4><p>将双向有序链表的测试放进<code>threadtest.cc</code></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void DllistTest0(void) // 测试双向有序链表
{
    DEBUG(&#39;t&#39;, &quot;Entering DllistTest0&quot;);
    SortInsertN(L, 5);
    RemoveN(L, 3);
}

void
ThreadTest()
{
    switch (testnum) {
    case 0:
        DllistTest0();
        break;
    default:
      printf(&quot;No test specified.\\n&quot;);
      break;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt=""></p><h4 id="添加参数" tabindex="-1"><a class="header-anchor" href="#添加参数" aria-hidden="true">#</a> 添加参数</h4><p>定义以下参数：</p><table><thead><tr><th>参数标记</th><th>对应变量名</th><th>参数含义</th></tr></thead><tbody><tr><td>-q</td><td>int testnum</td><td>测试编号，用于进入不同的测试分支</td></tr><tr><td>-t</td><td>int threadNum</td><td>创建的并行线程数量</td></tr><tr><td>-n</td><td>int oprNum</td><td>链表插入并删除的节点数量</td></tr></tbody></table><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// threadtest.cc
int testnum = 1; // 测试编号
int threadNum = 1; // 创建的并行线程数量
int oprNum = 3; // 链表插入并删除的节点数量


// main.cc
#ifdef THREADS
extern int testnum; // 测试编号
extern int threadNum; // 创建的并行线程数量
extern int oprNum; // 链表插入并删除的节点数量
#endif

int
main(int argc, char **argv)
{
  int argCount;      // the number of arguments for a particular command

  DEBUG(&#39;t&#39;, &quot;Entering main&quot;);
  (void) Initialize(argc, argv);

  for (argc--, argv++; argc &gt; 0; argc -= argCount, argv += argCount) { // 跳过程序名开始处理参数
#ifdef THREADS
    argCount = 2;
    switch (argv[0][1]) {
      case &#39;q&#39;:
        testnum = atoi(argv[1]);
        break;
      case &#39;t&#39;:
        threadNum = atoi(argv[1]);
        break;
      case &#39;n&#39;:
        oprNum = atoi(argv[1]);
        break;
      default:
        break;
    }
#endif

    if (!strcmp(*argv, &quot;-z&quot;)){ // print copyright
      argCount = 1;
      printf (copyright);
      continue;
    }
  }

#ifdef THREADS
    ThreadTest();
#endif

    currentThread-&gt;Finish();
    return(0);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加测试启动函数-类似threadtest1函数" tabindex="-1"><a class="header-anchor" href="#添加测试启动函数-类似threadtest1函数" aria-hidden="true">#</a> 添加测试启动函数（类似ThreadTest1函数）</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// threadtest.cc
char * getName(int i) {
    switch (i) {
        case 0: return &quot;forked thread 0&quot;;
        case 1: return &quot;forked thread 1&quot;;
        case 2: return &quot;forked thread 2&quot;;
        case 3: return &quot;forked thread 3&quot;;
        case 4: return &quot;forked thread 4&quot;;
        case 5: return &quot;forked thread 5&quot;;
        case 6: return &quot;forked thread 6&quot;;
        case 7: return &quot;forked thread 7&quot;;
        case 8: return &quot;forked thread 8&quot;;
        case 9: return &quot;forked thread 9&quot;;
        case 10: return &quot;forked thread 10&quot;;
        default: return &quot;forked thread 00&quot;;
    }
}

void toDllistTest(VoidFunctionPtr func) {
    DEBUG(&#39;t&#39;, &quot;Entering toDllistTest&quot;);
    Thread *t;
    for (int i = 0; i &lt; threadNum; i++)
    {
        t = new Thread(getName(i + 1));
        t-&gt;Fork(func, i + 1);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并发可能引起的问题" tabindex="-1"><a class="header-anchor" href="#并发可能引起的问题" aria-hidden="true">#</a> 并发可能引起的问题</h3><h4 id="问题一-共享内存——并行执行时一个线程可能删除-修改其余线程插入的元素" tabindex="-1"><a class="header-anchor" href="#问题一-共享内存——并行执行时一个线程可能删除-修改其余线程插入的元素" aria-hidden="true">#</a> 问题一：共享内存——并行执行时一个线程可能删除／修改其余线程插入的元素</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void DllistTest1(int which)
{
    printf(&quot;Inserting items in thread %d\\n&quot;, which);
    genItem2List(list, oprNum);
    currentThread-&gt;Yield();
    printf(&quot;Removing items in thread %d\\n&quot;, which);
    delItemFromList(list, oprNum);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt=""></p><p>线程1插入节点→强制切换至线程2→线程2插入节点→切换至线程1→线程1删除节点→由于线程1和线程2共用一个链表，此时线程1删除的节点有可能是线程2插入的节点。</p><h4 id="问题二-覆盖——并行的线程在链表同一个地方插入元素-导致其中一个被覆盖" tabindex="-1"><a class="header-anchor" href="#问题二-覆盖——并行的线程在链表同一个地方插入元素-导致其中一个被覆盖" aria-hidden="true">#</a> **问题二：**覆盖——并行的线程在链表同一个地方插入元素，导致其中一个被覆盖</h4><p>测试</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// threadtest.cc
void DllistTest2(int which) { // 覆盖
    DEBUG(&#39;t&#39;, &quot;Entering DllistTest2&quot;);
    SortInsertN2(L, oprNum, which);
}

// dllist-driver.cc
extern void SortInsertN2(DLList::DLList *L, int n, int which) {
    static int seed = 0;
    
    for (int i = 0; i &lt; n; i++) {
        seed ++;
        std::srand(time(0) + seed);
        int random = std::rand();
        std::printf(&quot;which %d insert %d: \\n&quot;, which, random);
        L-&gt;SortedInsert2(NULL, random, which);
        L-&gt;printDLL();
    }
    std::printf(&quot;\\n&quot;);
}

// dllist.c
// 覆盖测试用
void
DLList::SortedInsert2(void *item, int sortKey, int which) {
    DLLElement *element = new DLLElement(item, sortKey);
    DLLElement *ptr; // keep track

    if (IsEmpty()) { // ddlist is empty
        first = element;
        last = element;
    } else if (sortKey &lt; first-&gt;key) { // Insert to the beginning
        element-&gt;next = first;
        currentThread-&gt;Yield();
        first-&gt;prev = element;
        first = element;
    } else { // sort from smallest to biggest
        for (ptr = first; ptr-&gt;next != NULL; ptr = ptr-&gt;next) {
            if (sortKey &lt; ptr-&gt;next-&gt;key) { // Smaller than the next node, inserted behind the current node
                element-&gt;next = ptr-&gt;next;
                currentThread-&gt;Yield();
                element-&gt;prev = ptr;
                element-&gt;prev-&gt;next = element;
                element-&gt;next-&gt;prev = element;
                return;
            }
        }
        // bigger than all nodes, insert in the end
        last-&gt;next = element;
        currentThread-&gt;Yield();
        element-&gt;prev = last;
        last = element;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><p><img src="`+p+`" alt=""></p><p>线程1准备向链表中某一位置插入数据→线程2 准备向链表同一位置插入数据→线程1插入→线程2插入。线程1的插入被线程2的插入覆盖。</p><h4 id="问题三-非法删除——并行的线程准备删除链表中同一个元素-导致段错误" tabindex="-1"><a class="header-anchor" href="#问题三-非法删除——并行的线程准备删除链表中同一个元素-导致段错误" aria-hidden="true">#</a> **问题三：**非法删除——并行的线程准备删除链表中同一个元素，导致段错误</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// threadtest.cc
void DllistTest3(int which) { // 非法删除
    DEBUG(&#39;t&#39;, &quot;Entering DllistTest3&quot;);
    SortInsertN(L, oprNum);
    RemoveN2(L, oprNum, which);
}

// dllist-driver.cc
extern void RemoveN2(DLList::DLList *L, int n, int which) {
    int *keyPtr = new int();
    for (int i = 0; i &lt; n; i++) {
        if (L-&gt;Remove2(keyPtr) == NULL)
            break;
        std::printf(&quot;which %d delete %d: \\n&quot;, which, *keyPtr);
        L-&gt;printDLL();
    }
    std::printf(&quot;\\n&quot;);
}

// dllist.c
// 非法删除测试用
void *
DLList::Remove2(int *keyPtr) {
    DLLElement *element = first;

    if (IsEmpty())
        return NULL;
    
    if (first == last) { // dllist had one item, now has none 
        first = NULL;
        last = NULL;
    } else {
        first = first-&gt;next;
        currentThread-&gt;Yield();
        first-&gt;prev = NULL;
    }
    if (keyPtr != NULL)
        *keyPtr = element-&gt;key;
    delete element;
    return keyPtr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>线程1准备删除链表中的某个数据→线程2准备删除链表中的同一个数据→线程2删除数据→线程1删除数据。线程1访问到野指针或空指针，发生段错误。</p><h4 id="问题四-断链——并行的线程在同一个地方插入元素-导致元素指针发生不一致" tabindex="-1"><a class="header-anchor" href="#问题四-断链——并行的线程在同一个地方插入元素-导致元素指针发生不一致" aria-hidden="true">#</a> **问题四：**断链——并行的线程在同一个地方插入元素，导致元素指针发生不一致</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// threadtest.cc
void DllistTest4(int which) { // 断链测试
    DEBUG(&#39;t&#39;, &quot;Entering DllistTest4&quot;);
    SortInsertN3(L, oprNum, which);
}

// dllist-driver.cc
extern void SortInsertN3(DLList::DLList *L, int n, int which) { // 断链测试用
    static int seed = 0;
    
    for (int i = 0; i &lt; n; i++) {
        seed ++;
        std::srand(time(0) + seed);
        int random = std::rand() % 100;
        std::printf(&quot;which %d insert %d: \\n&quot;, which, random);
        L-&gt;SortedInsert3(NULL, random);
        L-&gt;printDLL();
    }
    std::printf(&quot;\\n&quot;);
}

// dllist.c
// 断链测试用
void
DLList::SortedInsert3(void *item, int sortKey) {
    DLLElement *element = new DLLElement(item, sortKey);
    DLLElement *ptr; // keep track

    if (IsEmpty()) { // ddlist is empty
        first = element;
        last = element;
    } else if (sortKey &lt; first-&gt;key) { // Insert to the beginning
        element-&gt;next = first;
        currentThread-&gt;Yield();
        first-&gt;prev = element;
        first = element;
    } else { // sort from smallest to biggest
        for (ptr = first; ptr-&gt;next != NULL; ptr = ptr-&gt;next) {
            if (sortKey &lt; ptr-&gt;next-&gt;key) { // Smaller than the next node, inserted behind the current node
                element-&gt;next = ptr-&gt;next;
                element-&gt;prev = ptr;
                element-&gt;prev-&gt;next = element;
                element-&gt;next-&gt;prev = element;
                return;
            }
        }
        // bigger than all nodes, insert in the end
        last-&gt;next = element;
        element-&gt;prev = last;
        last = element;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt=""></p><p>线程2要往开头（记为开头a）插入数据e1→强制切换至线程1→线程1向开头a插入若干个元素→切回线程2→线程2向开头a插入数据e1。此时线程1在开头a前插入的元素链断了，开头只插入了数据e1。</p><h4 id="问题五-乱序插入——并行的线程在同一个地方插入元素-导致元素位置颠倒-键值大的在前" tabindex="-1"><a class="header-anchor" href="#问题五-乱序插入——并行的线程在同一个地方插入元素-导致元素位置颠倒-键值大的在前" aria-hidden="true">#</a> **问题五：**乱序插入——并行的线程在同一个地方插入元素，导致元素位置颠倒，键值大的在前</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// threadtest.cc
void DllistTest5(int which) { // 断链测试
    DEBUG(&#39;t&#39;, &quot;Entering DllistTest5&quot;);
    SortInsertN4(L, oprNum, which);
}

// dllist-driver.cc
extern void SortInsertN4(DLList::DLList *L, int n, int which) { // 乱序插入测试用
    static int seed = 0;
    
    for (int i = 0; i &lt; n; i++) {
        seed ++;
        std::srand(time(0) + seed);
        int random = std::rand() % 100;
        std::printf(&quot;which %d insert %d: \\n&quot;, which, random);
        L-&gt;SortedInsert4(NULL, random);
        L-&gt;printDLL();
    }
    std::printf(&quot;\\n&quot;);
}

// dllist.c
// 乱序插入测试用
void
DLList::SortedInsert4(void *item, int sortKey) {
    DLLElement *element = new DLLElement(item, sortKey);
    DLLElement *ptr; // keep track

    if (IsEmpty()) { // ddlist is empty
        first = element;
        last = element;
    } else if (sortKey &lt; first-&gt;key) { // Insert to the beginning
        currentThread-&gt;Yield();
        element-&gt;next = first;
        first-&gt;prev = element;
        first = element;
    } else { // sort from smallest to biggest
        for (ptr = first; ptr-&gt;next != NULL; ptr = ptr-&gt;next) {
            if (sortKey &lt; ptr-&gt;next-&gt;key) { // Smaller than the next node, inserted behind the current node
                // currentThread-&gt;Yield();
                element-&gt;next = ptr-&gt;next;
                element-&gt;prev = ptr;
                element-&gt;prev-&gt;next = element;
                element-&gt;next-&gt;prev = element;
                return;
            }
        }
        // bigger than all nodes, insert in the end
        last-&gt;next = element;
        element-&gt;prev = last;
        last = element;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+'" alt=""></p><p>线程2准备插入较大元素e2→强制切换至线程1→线程1在相同位置插入较小元素e1→线程2在元素e1前插入了元素e2。较大元素e2在较小元素e1之前，插入顺序错误。</p>',42);function T(E,y){const s=l("ExternalLinkIcon");return a(),t("div",null,[k,x,n("p",null,[e("这里遇到一个奇怪的报错，解决方法参考链接"),n("a",q,[e("http://t.csdnimg.cn/SvuqF"),r(s)]),e("，在"),_,e("之前要先"),D]),N])}const I=d(L,[["render",T],["__file","nachos_1.html.vue"]]);export{I as default};

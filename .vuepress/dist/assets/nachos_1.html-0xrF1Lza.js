import{_ as i,r as t,o as c,c as l,a as n,b as s,d as o,e as a}from"./app-w9nbNKFY.js";const d="/image/2024032411.png",r="/image/2024032412.png",p={},u=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"INFO"),n("p",null,[n("a",{href:"/file/Nachos%E8%8B%B1%E6%96%87%E6%96%87%E6%A1%A3.pdf"},"Nachos英文文档.pdf"),n("br")])],-1),m=a(`<h2 id="安装nachos" tabindex="-1"><a class="header-anchor" href="#安装nachos" aria-hidden="true">#</a> 安装nachos</h2><ol><li>安装nachos<br><a href="/file/nachos-linux64.tar.gz">nachos-linux64.tar.gz</a></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxf</span> nachos-linux64.tar.gz
<span class="token function">rm</span> nachos-linux64.tar.gz
<span class="token builtin class-name">cd</span> nachos-3.4/
<span class="token builtin class-name">cd</span> code/
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试环境</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> threads/
./nachos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现双向有序链表" tabindex="-1"><a class="header-anchor" href="#实现双向有序链表" aria-hidden="true">#</a> 实现双向有序链表</h2><p>实现双向链表不难，可以参考<code>code/threads</code>目录里的<code>list.cc</code>和<code>list.h</code>，主要是熟悉 UNIX编程环境、make与makefile的用法和c++编程</p>`,7),v={href:"http://t.csdnimg.cn/SvuqF",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,'#include "utility.h"',-1),b=n("code",null,"#include <iostream>",-1),k=a('<p><img src="'+d+`" alt=""></p><p>测试双向链表的<code>main.cc</code>如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#include &lt;iostream&gt;</span>
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
    return<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      // Not reached<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试成功 <img src="`+r+'" alt=""></p><h2 id="体验nachos线程系统" tabindex="-1"><a class="header-anchor" href="#体验nachos线程系统" aria-hidden="true">#</a> 体验nachos线程系统</h2>',5);function _(g,f){const e=t("ExternalLinkIcon");return c(),l("div",null,[u,m,n("p",null,[s("这里遇到一个奇怪的报错，解决方法参考链接"),n("a",v,[s("[nachos]stdlib.h和sysdep.h冲突了？？"),o(e)]),s("，在"),h,s("之前要先"),b]),k])}const L=i(p,[["render",_],["__file","nachos_1.html.vue"]]);export{L as default};

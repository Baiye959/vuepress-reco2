import{_ as n,o as s,c as a,e as t}from"./app-er98NrFX.js";const p={},e=t(`<h2 id="创建string对象的两种方式" tabindex="-1"><a class="header-anchor" href="#创建string对象的两种方式" aria-hidden="true">#</a> 创建String对象的两种方式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 1. 使用直接赋值的方式获取一个字符串对象</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// abc</span>

<span class="token comment">// 2. 使用new的方式来获取一个字符串对象</span>
<span class="token comment">// 空参构造，可以获取一个空白的字符串对象</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>

<span class="token comment">// 传递一个字符串，根据字符串的内容再创建一个字符串对象</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// abc</span>

<span class="token comment">// 传递一个字符数组，根据字符数组的内容再创建一个字符串对象</span>
<span class="token comment">// 需求：修改字符串的内容。abc -&gt; Qbc</span>
<span class="token comment">// &quot;abc&quot; -&gt; {&#39;a&#39;,&#39;b&#39;,&#39;c&#39;} -&gt; {&#39;Q&#39;,&#39;b&#39;,&#39;c&#39;} -&gt; &quot;Qbc&quot;</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// abc</span>

<span class="token comment">// 传递一个字节数组，根据字节数组的内容再创建一个新的字符串对象</span>
<span class="token comment">// 应用场景：以后在网络当中传输的数据其实都是字节信息</span>
<span class="token comment">// 我们一般要把字节信息进行转换，转成字符串，此时就要用到这个构造了</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// abc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string构建方法对应的内存分析和字符串比较" tabindex="-1"><a class="header-anchor" href="#string构建方法对应的内存分析和字符串比较" aria-hidden="true">#</a> String构建方法对应的内存分析和字符串比较</h2><h3 id="内存分析" tabindex="-1"><a class="header-anchor" href="#内存分析" aria-hidden="true">#</a> 内存分析</h3><ol><li>当使用双引号直接赋值时，系统会检查该字符串在串池中是否存在 <ul><li>不存在：创造新的</li><li>存在：直接复用</li></ul></li><li>当使用new创建String时，系统会在堆里存放该字符串</li></ol><h3 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span> <span class="token comment">// s1存放串池地址1</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span> <span class="token comment">// s2存放串池地址1</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// s3存放堆地址1</span>
<span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// s4存放堆地址2</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">String</span> s5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;Abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>s5<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true，忽略大小写对内容进行比较</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>==</code>比较的是什么？</p><ul><li>对基本数据类型，比较的是数据值</li><li>对引用数据类型，比较的是地址值</li></ul><h2 id="stringbuilder" tabindex="-1"><a class="header-anchor" href="#stringbuilder" aria-hidden="true">#</a> StringBuilder</h2>`,10),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","string.html.vue"]]);export{k as default};
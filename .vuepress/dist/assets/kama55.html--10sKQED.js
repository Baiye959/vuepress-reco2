import{_ as t,r as p,o as e,c,a as n,b as s,d as o,e as l}from"./app-gz_C23Xc.js";const i="/image/2024031301.png",u="/image/2024031302.png",k="/image/2024031303.png",r={},d=n("h2",{id:"_55-右旋字符串-第八期模拟笔试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_55-右旋字符串-第八期模拟笔试","aria-hidden":"true"},"#"),s(" 55. 右旋字符串（第八期模拟笔试）")],-1),v={href:"https://kamacoder.com/problempage.php?pid=1065",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>题目描述</p><blockquote><p>字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串 s 和一个正整数 k，请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。</p><p>例如，对于输入字符串 &quot;abcdefg&quot; 和整数 2，函数应该将其转换为 &quot;fgabcde&quot;。</p></blockquote><p>输入描述</p><blockquote><p>输入共包含两行，第一行为一个正整数 k，代表右旋转的位数。第二行为字符串 s，代表需要旋转的字符串。</p></blockquote><p>输出描述</p><blockquote><p>输出共一行，为进行了右旋转操作后的字符串。</p></blockquote><p>输入示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2
abcdefg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fgabcde
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提示信息</p><blockquote><p>数据范围：</p><p>1 &lt;= k &lt; 10000,</p><p>1 &lt;= s.length &lt; 10000;</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>先整体反转，再局部反转。</p><ol><li>原数组 <img src="`+i+'" alt=""></li><li>整体反转后 <img src="'+u+'" alt=""></li><li>局部分别反转后 <img src="'+k+`" alt=""></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">int</span> k <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chs <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>chs<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>chs<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>chs<span class="token punctuation">,</span> k<span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>chs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chs<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> t <span class="token operator">=</span> chs<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
            chs<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">=</span> chs<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
            chs<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
            l <span class="token operator">++</span><span class="token punctuation">;</span> r <span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function b(h,g){const a=p("ExternalLinkIcon");return e(),c("div",null,[d,n("p",null,[n("a",v,[s("卡码网：55.右旋转字符串"),o(a)])]),m])}const f=t(r,[["render",b],["__file","kama55.html.vue"]]);export{f as default};
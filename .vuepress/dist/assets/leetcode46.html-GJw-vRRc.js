import{_ as p,r as e,o,c,a as n,d as a,b as t,e as l}from"./app-dihBgfVF.js";const u={},i={class:"custom-container info"},k=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),r=n("p",{class:"custom-container-title"},"INFO",-1),d={href:"https://leetcode.cn/problems/permutations/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/BV19v4y1S79W",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>回溯全排列，本层全排序需排除在path中的元素。<br> 本题<code>-10 &lt;= nums[i] &lt;= 10</code>，且nums中元素互不相同，用数组实现哈希表。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">permute</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// -10~10 -&gt; 0~20</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> used<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> used<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            
            path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            used<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> used<span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            used<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(w,g){const s=e("ExternalLinkIcon");return o(),c("div",null,[n("div",i,[k,r,n("ul",null,[n("li",null,[n("a",d,[a("力扣题目链接"),t(s)])]),n("li",null,[n("a",m,[a("题目链接/文章讲解"),t(s)])]),n("li",null,[n("a",v,[a("视频讲解"),t(s)])])])]),b])}const f=p(u,[["render",h],["__file","leetcode46.html.vue"]]);export{f as default};
import{_ as c,r as e,o as l,c as u,a as n,b as s,d as a,w as o,e as i}from"./app-zuWArmBA.js";const k="/image/2024040901.png",r="/image/2024040902.png",d={},m={class:"custom-container info"},v=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),b=n("p",{class:"custom-container-title"},"INFO",-1),h={href:"https://leetcode.cn/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},_={href:"https://programmercarl.com/0090.%E5%AD%90%E9%9B%86II.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bilibili.com/video/BV1vm4y1F71J",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"解题思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),s(" 解题思路")],-1),f=n("br",null,null,-1),y=n("br",null,null,-1),x=n("br",null,null,-1),L=n("img",{src:k,alt:""},null,-1),I=n("img",{src:r,alt:""},null,-1),B=i(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">subsetsWithDup</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> used<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span> used<span class="token punctuation">,</span> <span class="token keyword">int</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> used<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果重复使用</span>
                used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> used<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(N,V){const t=e("ExternalLinkIcon"),p=e("RouterLink");return l(),u("div",null,[n("div",m,[v,b,n("ul",null,[n("li",null,[n("a",h,[s("力扣题目链接"),a(t)])]),n("li",null,[n("a",_,[s("题目链接/文章讲解"),a(t)])]),n("li",null,[n("a",g,[s("视频讲解"),a(t)])])])]),w,n("p",null,[s("有点像"),a(p,{to:"/blogs/algorithm/leetcode40.html"},{default:o(()=>[s("40.组合总和II")]),_:1}),s("，但是加入结果集的条件不一样，本题去重后每条路径都要加到结果集。"),f,s(" 将回溯看成树，对同一层的重复元素进行去重。"),y,s(" 为了方便去重，先对数组从小到大进行排序，这样只要看左边的相同元素有没有在本层用过。"),x,s(" 维护一个boolean数组used，进入下一层还原为false，否则置true;")]),n("p",null,[s("这里的回溯树不是跟"),a(p,{to:"/blogs/algorithm/leetcode78.html"},{default:o(()=>[s("78.子集")]),_:1}),s("一样的二叉树 "),L,s(" 而是多叉树，第k层代表子集第k位 "),I]),B])}const C=c(d,[["render",E],["__file","leetcode90.html.vue"]]);export{C as default};
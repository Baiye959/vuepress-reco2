import{_ as e,r as t,o as p,c,a as n,d as s,b as o,e as l}from"./app-076RgYkn.js";const i="/image/2024032406.png",u={},d=n("h2",{id:"_235-二叉搜索树的最近公共祖先",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_235-二叉搜索树的最近公共祖先","aria-hidden":"true"},"#"),s(" 235. 二叉搜索树的最近公共祖先")],-1),r=n("p",null,"给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。",-1),k={href:"https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"一个节点也可以是它自己的祖先",-1),m=l('<p>例如，给定如下二叉搜索树: root = [6,2,8,0,4,7,9,null,null,3,5] <img src="'+i+`" alt=""></p><p>示例 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>仔细观察二叉搜索树，可以发现由于它的特性，p、q的公共祖先在[p, q]区间，且最近公共祖先就是自上向下最先搜索到[p, q]的节点</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> p<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">,</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">,</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 在区间右边，往左走</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 在区间左边，往右走</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 在区间里，找到了</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cur<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function b(h,x){const a=t("ExternalLinkIcon");return p(),c("div",null,[d,r,n("p",null,[n("a",k,[s("百度百科"),o(a)]),s("中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（"),v,s("）。”")]),m])}const g=e(u,[["render",b],["__file","leetcode235.html.vue"]]);export{g as default};

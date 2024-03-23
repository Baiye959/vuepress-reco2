import{_ as n,o as s,c as a,e}from"./app-KuLWXpnx.js";const t="/image/2024032014.jpg",p="/image/2024032015.jpg",l="/image/2024032016.jpg",o={},i=e('<p>给你两棵二叉树的根节点 <code>p</code> 和 <code>q</code> ，编写一个函数来检验这两棵树是否相同。</p><p>如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。</p><p>示例 1： <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：p = [1,2,3], q = [1,2,3]
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2： <img src="`+p+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：p = [1,2], q = [1,null,2]
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3： <img src="`+l+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：p = [1,2,1], q = [1,1,2]
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两棵树上的节点数目都在范围 [0, 100] 内
-10^4 &lt;= Node.val &lt;= 10^4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     TreeNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     TreeNode(int val, TreeNode left, TreeNode right) <span class="token punctuation">{</span>
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> p<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">!=</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[i];function d(u,r){return s(),a("div",null,c)}const k=n(o,[["render",d],["__file","leetcode100.html.vue"]]);export{k as default};

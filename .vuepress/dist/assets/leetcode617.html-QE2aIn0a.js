import{_ as n,o as s,c as a,e}from"./app-v1EkNLj4.js";const t="/image/2024032310.jpg",o={},p=e('<h2 id="_617-合并二叉树" tabindex="-1"><a class="header-anchor" href="#_617-合并二叉树" aria-hidden="true">#</a> 617. 合并二叉树</h2><p>给你两棵二叉树： <code>root1</code> 和 <code>root2</code> 。</p><p>想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，<strong>不为</strong> <code>null</code> 的节点将直接作为新二叉树的节点。</p><p>返回合并后的二叉树。</p><p><strong>注意</strong>: 合并过程必须从两个树的根节点开始。</p><p>示例 1： <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root1 = [1], root2 = [1,2]
输出：[2,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两棵树中的节点数目在范围 [0, 2000] 内
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
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root1<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> root2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root2<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> root1<span class="token punctuation">;</span>

        <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token function">mergeTrees</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>val <span class="token operator">+</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[p];function c(i,r){return s(),a("div",null,l)}const d=n(o,[["render",c],["__file","leetcode617.html.vue"]]);export{d as default};

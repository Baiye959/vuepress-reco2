import{_ as n,o as s,c as a,e}from"./app-076RgYkn.js";const t="/image/2024032407.jpg",p="/image/2024032408.jpg",o={},l=e('<h2 id="_701-二叉搜索树中的插入操作" tabindex="-1"><a class="header-anchor" href="#_701-二叉搜索树中的插入操作" aria-hidden="true">#</a> 701. 二叉搜索树中的插入操作</h2><p>给定二叉搜索树（BST）的根节点 <code>root</code> 和要插入树中的值 <code>value</code> ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 <strong>保证</strong> ，新值和原始二叉搜索树中的任意节点值都不同。</p><p><strong>注意</strong>，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 <strong>任意有效的结果</strong> 。</p><p>示例 1： <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [4,2,7,1,3], val = 5
输出：[4,2,7,1,3,5]
解释：另一个满足题目要求可以通过的树是：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [40,20,60,10,30,50,70], val = 25
输出：[40,20,60,10,30,50,70,null,null,25]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
输出：[4,2,7,1,3,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h3><p>只要按照二叉搜索树的规则去遍历，遇到null时插入节点就可以了</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cur<span class="token punctuation">.</span>left <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cur<span class="token punctuation">.</span>right <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>   
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h3><p>递归，需要明确：函数意为向root为根的子树插入值为val的新节点、返回值为插入后的新子树。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[l];function i(u,r){return s(),a("div",null,c)}const k=n(o,[["render",i],["__file","leetcode701.html.vue"]]);export{k as default};

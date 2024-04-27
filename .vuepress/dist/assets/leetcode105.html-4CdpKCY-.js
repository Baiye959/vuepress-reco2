import{_ as e}from"./2024032307-e1tK_7m-.js";import{_ as t,r as o,o as p,c,a as i,b as n,d as l,w as r,e as s}from"./app-4fkrjUIu.js";const u={},d=s('<h2 id="_105-从前序与中序遍历序列构造二叉树" tabindex="-1"><a class="header-anchor" href="#_105-从前序与中序遍历序列构造二叉树" aria-hidden="true">#</a> 105. 从前序与中序遍历序列构造二叉树</h2><p>给定两个整数数组 <code>preorder</code> 和 <code>inorder</code> ，其中 <code>preorder</code> 是二叉树的先序遍历， <code>inorder</code> 是同一棵树的中序遍历，请构造二叉树并返回其根节点。</p><p>示例 1: <img src="'+e+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: preorder = [-1], inorder = [-1]
输出: [-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 &lt;= preorder.length &lt;= 3000
inorder.length == preorder.length
-3000 &lt;= preorder[i], inorder[i] &lt;= 3000
preorder 和 inorder 均 无重复 元素
inorder 均出现在 preorder
preorder 保证 为二叉树的前序遍历序列
inorder 保证 为二叉树的中序遍历序列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,9),k=s(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preorder<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>preorder <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> preorder<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> rootVal <span class="token operator">=</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rootIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> size <span class="token operator">=</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> rootVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                rootIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 先preorder： 中(0) / 左(1 ~ rootIndex+1) / 右(rootIndex+1 ~ size)</span>
        <span class="token comment">// 中inorder：  左(0 ~ rootIndex) / 中(rootIndex) / 右(rootIndex+1 ~ size)</span>
        <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> rootIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>preorder<span class="token punctuation">,</span> rootIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">,</span> 
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>inorder<span class="token punctuation">,</span> rootIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,b){const a=o("RouterLink");return p(),c("div",null,[d,i("p",null,[n("本题跟"),l(a,{to:"/blogs/algorithm/leetcode106.html"},{default:r(()=>[n("106.从中序与后序遍历序列构造二叉树")]),_:1}),n("思路一致。")]),k])}const f=t(u,[["render",v],["__file","leetcode105.html.vue"]]);export{f as default};

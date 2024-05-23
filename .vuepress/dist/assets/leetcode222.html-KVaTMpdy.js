import{_ as e,r as t,o,c as p,a as n,b as s,d as i,e as l}from"./app-KD0nz2p7.js";const c="/image/2024032103.jpg",r="/image/2024032104.png",u="/image/2024032105.png",d={},v=n("h2",{id:"_222-完全二叉树的节点个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_222-完全二叉树的节点个数","aria-hidden":"true"},"#"),s(" 222. 完全二叉树的节点个数")],-1),k=n("p",null,[s("给你一棵 "),n("strong",null,"完全二叉树"),s(" 的根节点 "),n("code",null,"root"),s(" ，求出该树的节点个数。")],-1),m={href:"https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91/7773232?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"h",-1),h=l('<p>示例 1： <img src="'+c+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2,3,4,5,6]
输出：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = []
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1]
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>树中节点的数目范围是[0, 5 * 10^4]
0 &lt;= Node.val &lt;= 5 * 10^4
题目数据保证输入的树是 完全二叉树
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进阶：遍历树来统计节点是一种时间复杂度为 <code>O(n)</code> 的简单解决方案。你可以设计一个更快的算法吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要利用完全二叉树的特性来优化算法。</p><p>如图，对二叉树来说，一直遍历下去，总会有一个子树是满二叉树。 <img src="`+r+'" alt=""></p><p>而由于完全二叉树的特性，如果一颗子树的最左路径和最右路径长度一致，就是满二叉树，判断出是满二叉树就能利用深度直接算出节点个数（cnt = 2^depth - 1），从而节省遍历这些满二叉树中间节点的时间。 <img src="'+u+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countNodes</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> leftDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> rightDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        
        <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            leftDepth <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        cur <span class="token operator">=</span> root<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            rightDepth <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftDepth <span class="token operator">==</span> rightDepth<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;&lt;</span> leftDepth<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function g(_,f){const a=t("ExternalLinkIcon");return o(),p("div",null,[v,k,n("p",null,[n("a",m,[s("完全二叉树"),i(a)]),s(" 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 "),b,s(" 层，则该层包含 $1~ 2^h$ 个节点。")]),h])}const N=e(d,[["render",g],["__file","leetcode222.html.vue"]]);export{N as default};

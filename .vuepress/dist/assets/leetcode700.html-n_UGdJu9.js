import{_ as n,o as s,c as a,e}from"./app-cJunwW8o.js";const t="/image/2024032311.jpg",i="/image/2024032312.jpg",l={},o=e('<h2 id="_700-二叉搜索树中的搜索" tabindex="-1"><a class="header-anchor" href="#_700-二叉搜索树中的搜索" aria-hidden="true">#</a> 700. 二叉搜索树中的搜索</h2><p>给定二叉搜索树（BST）的根节点 <code>root</code> 和一个整数值 <code>val</code>。</p><p>你需要在 BST 中找到节点值等于 <code>val</code> 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 <code>null</code> 。</p><p>示例 1: <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2: <img src="`+i+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [4,2,7,1,3], val = 5
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>树中节点数在 [1, 5000] 范围内
1 &lt;= Node.val &lt;= 10^7
root 是二叉搜索树
1 &lt;= val &lt;= 10^7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>二叉搜索树是一个有序树：</p><ul><li>若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；</li><li>若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；</li><li>它的左、右子树也分别为二叉搜索树</li></ul><p>从根节点开始搜索，比当前值小向左、比当前值大向右，与当前值一致找到、当前节点为空找不到。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">searchBST</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> root<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                root <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                root <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[o];function p(d,u){return s(),a("div",null,c)}const v=n(l,[["render",p],["__file","leetcode700.html.vue"]]);export{v as default};

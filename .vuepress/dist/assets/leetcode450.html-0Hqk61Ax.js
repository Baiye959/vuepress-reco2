import{_ as n,o as s,c as a,e}from"./app-jiLvWxPd.js";const t="/image/2024032409.jpg",l="/image/2024032410.jpg",o="/image/2024032501.png",p="/image/2024032502.png",i={},c=e('<h2 id="_450-删除二叉搜索树中的节点" tabindex="-1"><a class="header-anchor" href="#_450-删除二叉搜索树中的节点" aria-hidden="true">#</a> 450. 删除二叉搜索树中的节点</h2><p>给定一个二叉搜索树的根节点 <strong>root</strong> 和一个值 <strong>key</strong>，删除二叉搜索树中的 <strong>key</strong> 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。</p><p>一般来说，删除节点可分为两个步骤：</p><ol><li>首先找到需要删除的节点；</li><li>如果找到了，删除它。</li></ol><p>示例 1: <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [5,3,6,2,4,null,7], key = 0
输出: [5,3,6,2,4,null,7]
解释: 二叉树不包含值为 0 的节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [], key = 0
输出: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点数的范围 [0, 10^4].
-10^5 &lt;= Node.val &lt;= 10^5
节点值唯一
root 是合法的二叉搜索树
-10^5 &lt;= key &lt;= 10^5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进阶： 要求算法时间复杂度为 <code>O(h)</code>，<code>h</code> 为树的高度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在树中如何删除当前节点？<br> 递归函数<code>f</code>的返回值为节点，那么在处理当前节点<code>cur</code>时，执行<strong>cur.left = f(cur.left, ...)</strong>，<code>cur.left</code>就可以在自己那层递归 通过<code>return</code>其他的节点 将自己删除。</p><p>考虑删除时的几种情况：</p><ol><li>删除节点不存在，直接返回null</li><li>删除节点无左子树和右子树，直接返回null</li><li>删除节点无左子树，返回右子树</li><li>删除节点无右子树，返回左子树</li><li>删除节点左右子树都在，将左子树变成右子树最小节点的左孩子（最小节点是一路left）</li></ol><p>第五种情况如图： <img src="`+o+'" alt=""><img src="'+p+`" alt=""></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                cur<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),u=[c];function r(d,k){return s(),a("div",null,u)}const m=n(i,[["render",r],["__file","leetcode450.html.vue"]]);export{m as default};

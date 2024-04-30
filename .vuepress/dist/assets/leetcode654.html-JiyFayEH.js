import{_ as e,r as t,o,c as p,a as l,d as n,b as i,w as c,e as s}from"./app-7ZOgtJuU.js";const u="/image/2024032308.jpg",r="/image/2024032309.jpg",d={},v=s('<h2 id="_654-最大二叉树" tabindex="-1"><a class="header-anchor" href="#_654-最大二叉树" aria-hidden="true">#</a> 654. 最大二叉树</h2><p>给定一个不重复的整数数组 <code>nums</code> 。 <strong>最大二叉树</strong> 可以用下面的算法从 <code>nums</code> 递归地构建:</p><p>创建一个根节点，其值为 <code>nums</code> 中的最大值。 递归地在最大值 <strong>左边</strong> 的 <strong>子数组前缀上</strong> 构建左子树。 递归地在最大值 <strong>右边</strong> 的 <strong>子数组后缀上</strong> 构建右子树。 返回 <code>nums</code> 构建的 <em><strong>最大二叉树</strong></em> 。</p><p>示例 1： <img src="'+u+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2： <img src="`+r+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,2,1]
输出：[3,null,2,null,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 &lt;= nums.length &lt;= 1000
0 &lt;= nums[i] &lt;= 1000
nums 中的所有整数 互不相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,10),k=s(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> rootIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> rootVal <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> rootVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                rootVal <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                rootIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>rootVal<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(b,g){const a=t("RouterLink");return o(),p("div",null,[v,l("p",null,[n("递归，思路同"),i(a,{to:"/blogs/algorithm/leetcode106.html"},{default:c(()=>[n("106.从中序与后序遍历序列构造二叉树")]),_:1})]),k])}const f=e(d,[["render",m],["__file","leetcode654.html.vue"]]);export{f as default};

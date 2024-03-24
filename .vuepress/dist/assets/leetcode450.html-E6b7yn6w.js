import{_ as e,o as n,c as i,e as l}from"./app-5XYVg856.js";const d="/image/2024032409.jpg",s="/image/2024032410.jpg",a={},t=l('<h2 id="_450-删除二叉搜索树中的节点" tabindex="-1"><a class="header-anchor" href="#_450-删除二叉搜索树中的节点" aria-hidden="true">#</a> 450. 删除二叉搜索树中的节点</h2><p>给定一个二叉搜索树的根节点 <strong>root</strong> 和一个值 <strong>key</strong>，删除二叉搜索树中的 <strong>key</strong> 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。</p><p>一般来说，删除节点可分为两个步骤：</p><ol><li>首先找到需要删除的节点；</li><li>如果找到了，删除它。</li></ol><p>示例 1: <img src="'+d+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+`" alt=""></p><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [5,3,6,2,4,null,7], key = 0
输出: [5,3,6,2,4,null,7]
解释: 二叉树不包含值为 0 的节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: root = [], key = 0
输出: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节点数的范围 [0, 10^4].
-10^5 &lt;= Node.val &lt;= 10^5
节点值唯一
root 是合法的二叉搜索树
-10^5 &lt;= key &lt;= 10^5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进阶： 要求算法时间复杂度为 <code>O(h)</code>，<code>h</code> 为树的高度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,15),r=[t];function c(o,u){return n(),i("div",null,r)}const m=e(a,[["render",c],["__file","leetcode450.html.vue"]]);export{m as default};

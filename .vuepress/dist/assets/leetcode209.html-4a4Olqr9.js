import{_ as e,o as n,c as d,e as a}from"./app-e61QqDS_.js";const t={},s=a(`<h2 id="_209-长度最小的子数组" tabindex="-1"><a class="header-anchor" href="#_209-长度最小的子数组" aria-hidden="true">#</a> 209. 长度最小的子数组</h2><p>给定一个含有 <code>n</code> 个正整数的数组和一个正整数 <code>target</code> 。</p><p>找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 <code>[nums_l, nums_(l+1), ..., nums_(r-1), nums_r]</code> ，并返回其长度。如果不存在符合条件的子数组，返回 0 。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：target = 4, nums = [1,4,4]
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 &lt;= target &lt;= 10^9
1 &lt;= nums.length &lt;= 10^5
1 &lt;= nums[i] &lt;= 10^5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进阶：</p><p>如果你已经实现 <code>O(n)</code> 时间复杂度的解法, 请尝试设计一个 <code>O(n log(n))</code> 时间复杂度的解法。</p>`,13),i=[s];function l(c,r){return n(),d("div",null,i)}const o=e(t,[["render",l],["__file","leetcode209.html.vue"]]);export{o as default};

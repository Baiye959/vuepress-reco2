import{_ as e,o as n,c as d,e as i}from"./app-2_Am-DUF.js";const s={},a=i(`<h2 id="_15-三数之和" tabindex="-1"><a class="header-anchor" href="#_15-三数之和" aria-hidden="true">#</a> 15. 三数之和</h2><p>给你一个整数数组 <code>nums</code> ，判断是否存在三元组 <code>[nums[i], nums[j], nums[k]]</code> 满足 <code>i != j</code>、<code>i != k</code> 且 <code>j != k</code> ，同时还满足 <code>nums[i] + nums[j] + nums[k] == 0</code> 。请你返回所有和为 <code>0</code> 且不重复的三元组。</p><p>注意：答案中不可以包含重复的三元组。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3 &lt;= nums.length &lt;= 3000
-10^5 &lt;= nums[i] &lt;= 10^5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,12),l=[a];function c(t,u){return n(),d("div",null,l)}const m=e(s,[["render",c],["__file","leetcode15_nofinish.html.vue"]]);export{m as default};

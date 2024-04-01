import{_ as e,o as d,c as a,e as n}from"./app-nuDPY7Jg.js";const t={},i=n(`<h2 id="_39-组合总和" tabindex="-1"><a class="header-anchor" href="#_39-组合总和" aria-hidden="true">#</a> 39. 组合总和</h2><p>给你一个 <strong>无重复元素</strong> 的整数数组 <code>candidates</code> 和一个目标整数 <code>target</code> ，找出 <code>candidates</code> 中可以使数字和为目标数 <code>target</code> 的 所有 <strong>不同组合</strong> ，并以列表形式返回。你可以按 <strong>任意顺序</strong> 返回这些组合。</p><p><code>candidates</code> 中的 <strong>同一个</strong> 数字可以 <strong>无限制重复被选取</strong> 。如果至少一个数字的被选数量不同，则两种组合是不同的。</p><p>对于给定的输入，保证和为 <code>target</code> 的不同组合数少于 <code>150</code> 个。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: candidates = [2], target = 1
输出: []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 &lt;= candidates.length &lt;= 30
2 &lt;= candidates[i] &lt;= 40
candidates 的所有元素 互不相同
1 &lt;= target &lt;= 40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,13),s=[i];function c(r,l){return d(),a("div",null,s)}const v=e(t,[["render",c],["__file","leetcode39.html.vue"]]);export{v as default};

import{_ as e,o as n,c as s,e as i}from"./app-WVXdjsFf.js";const d={},l=i(`<h2 id="_454-四数相加-ii" tabindex="-1"><a class="header-anchor" href="#_454-四数相加-ii" aria-hidden="true">#</a> 454. 四数相加 II</h2><p>给你四个整数数组 <code>nums1</code>、<code>nums2</code>、<code>nums3</code> 和 <code>nums4</code> ，数组长度都是 <code>n</code> ，请你计算有多少个元组 <code>(i, j, k, l)</code> 能满足：</p><ul><li><code>0 &lt;= i, j, k, l &lt; n</code></li><li><code>nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0</code></li></ul><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -&gt; nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -&gt; nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 &lt;= n &lt;= 200
-2^28 &lt;= nums1[i], nums2[i], nums3[i], nums4[i] &lt;= 2^28
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),u=[l];function a(c,t){return n(),s("div",null,u)}const r=e(d,[["render",a],["__file","leetcode454.html.vue"]]);export{r as default};

import{_ as n,o as s,c as a,e}from"./app-mXZtXaZH.js";const t={},i=e(`<h2 id="_27-移除元素" tabindex="-1"><a class="header-anchor" href="#_27-移除元素" aria-hidden="true">#</a> 27. 移除元素</h2><p>给你一个数组 <code>nums</code> 和一个值 <code>val</code>，你需要 <b>原地</b> 移除所有数值等于 <code>val</code> 的元素，并返回移除后数组的新长度。</p><p>不要使用额外的数组空间，你必须仅使用 <code>O(1)</code> 额外空间并 <b>原地</b> 修改输入数组。</p><p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p><p>说明:</p><p>为什么返回数值是整数，但输出的答案是数组呢?</p><p>请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p><p>你可以想象内部操作如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i &lt; len; i++) {
    print(nums[i]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,3,0,4]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 &lt;= nums.length &lt;= 100
0 &lt;= nums[i] &lt;= 50
0 &lt;= val &lt;= 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>一种思路是暴力遍历。外循环遍历所有元素、判断是否等于<code>val</code>，如果等于则进入内循环，将所有后面的元素向前移动一位。</p><p>另一种思路则是双指针。分为快慢指针，快慢指针都从左往右遍历，快指针只指向需要留下的数、慢指针则在每次记录留下的数时才前进。将快指针指向的数赋值给慢指针指向的元素，则快指针遍历完原数组就完成修改，且此时慢指针指向新数组最后一个元素的后面，慢指针下标正好就是数组的新长度。</p><p>双指针代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>fast <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> fast<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">!=</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
                slow<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(t,[["render",p],["__file","leetcode27.html.vue"]]);export{u as default};

import{_ as e,o as i,c as n,a as d}from"./app-JKPtJaGV.js";const s={},l=d(`<h2 id="_8-字符串转换整数-atoi" tabindex="-1"><a class="header-anchor" href="#_8-字符串转换整数-atoi" aria-hidden="true">#</a> 8. 字符串转换整数(atoi)</h2><p>请你来实现一个 <code>myAtoi(string s)</code> 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 <code>atoi</code> 函数）。</p><p>函数 <code>myAtoi(string s)</code> 的算法如下：</p><ol><li>读入字符串并丢弃无用的前导空格</li><li>检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。</li><li>读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。</li><li>将前面步骤读入的这些数字转换为整数（即，&quot;123&quot; -&gt; 123， &quot;0032&quot; -&gt; 32）。如果没有读入数字，则整数为 <code>0</code> 。必要时更改符号（从步骤 2 开始）。</li><li>如果整数数超过 32 位有符号整数范围 <code>[−2^31, 2^31 − 1]</code> ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 <code>−2^31</code> 的整数应该被固定为 <code>−2^31</code> ，大于 <code>2^31 − 1</code> 的整数应该被固定为 <code>2^31 − 1</code> 。</li><li>返回整数作为最终结果。</li></ol><p>注意：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>本题中的空白字符只包括空格字符 &#39; &#39; 。
除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;42&quot;
输出：42
解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
第 1 步：&quot;42&quot;（当前没有读入字符，因为没有前导空格）
         ^
第 2 步：&quot;42&quot;（当前没有读入字符，因为这里不存在 &#39;-&#39; 或者 &#39;+&#39;）
         ^
第 3 步：&quot;42&quot;（读入 &quot;42&quot;）
           ^
解析得到整数 42 。
由于 &quot;42&quot; 在范围 [-231, 231 - 1] 内，最终结果为 42 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;   -42&quot;
输出：-42
解释：
第 1 步：&quot;   -42&quot;（读入前导空格，但忽视掉）
            ^
第 2 步：&quot;   -42&quot;（读入 &#39;-&#39; 字符，所以结果应该是负数）
             ^
第 3 步：&quot;   -42&quot;（读入 &quot;42&quot;）
               ^
解析得到整数 -42 。
由于 &quot;-42&quot; 在范围 [-231, 231 - 1] 内，最终结果为 -42 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;4193 with words&quot;
输出：4193
解释：
第 1 步：&quot;4193 with words&quot;（当前没有读入字符，因为没有前导空格）
         ^
第 2 步：&quot;4193 with words&quot;（当前没有读入字符，因为这里不存在 &#39;-&#39; 或者 &#39;+&#39;）
         ^
第 3 步：&quot;4193 with words&quot;（读入 &quot;4193&quot;；由于下一个字符不是一个数字，所以读入停止）
             ^
解析得到整数 4193 。
由于 &quot;4193&quot; 在范围 [-231, 231 - 1] 内，最终结果为 4193 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 &lt;= s.length &lt;= 200
s 由英文字母（大写和小写）、数字（0-9）、&#39; &#39;、&#39;+&#39;、&#39;-&#39; 和 &#39;.&#39; 组成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,15),t=[l];function a(u,o){return i(),n("div",null,t)}const v=e(s,[["render",a],["__file","leetcode8.html.vue"]]);export{v as default};

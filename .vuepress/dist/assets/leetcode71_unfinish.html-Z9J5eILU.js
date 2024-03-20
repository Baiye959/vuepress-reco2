import{_ as e,o as d,c as i,e as n}from"./app-D-RdFh-d.js";const t={},a=n(`<h2 id="_71-简化路径" tabindex="-1"><a class="header-anchor" href="#_71-简化路径" aria-hidden="true">#</a> 71. 简化路径</h2><p>给你一个字符串 <code>path</code> ，表示指向某一文件或目录的 Unix 风格 <strong>绝对路径</strong> （以 &#39;/&#39; 开头），请你将其转化为更加简洁的规范路径。</p><p>在 Unix 风格的文件系统中，一个点（<code>.</code>）表示当前目录本身；此外，两个点 （<code>..</code>） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，<code>//</code>）都被视为单个斜杠 <code>/</code> 。 对于此问题，任何其他格式的点（例如，<code>...</code>）均被视为文件/目录名称。</p><p>请注意，返回的 <strong>规范路径</strong> 必须遵循下述格式：</p><ul><li>始终以斜杠 <code>/</code> 开头。</li><li>两个目录名之间必须只有一个斜杠 <code>/</code> 。</li><li>最后一个目录名（如果存在）<strong>不能</strong> 以 <code>/</code> 结尾。</li><li>此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 <code>.</code> 或 <code>..</code>）。</li><li>返回简化后得到的 <strong>规范路径</strong> 。</li></ul><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：path = &quot;/home/&quot;
输出：&quot;/home&quot;
解释：注意，最后一个目录名后面没有斜杠。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：path = &quot;/../&quot;
输出：&quot;/&quot;
解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：path = &quot;/home//foo/&quot;
输出：&quot;/home/foo&quot;
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 4：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：path = &quot;/a/./b/../../c/&quot;
输出：&quot;/c&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 &lt;= path.length &lt;= 3000
path 由英文字母，数字，&#39;.&#39;，&#39;/&#39; 或 &#39;_&#39; 组成。
path 是一个有效的 Unix 风格绝对路径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),s=[a];function l(o,c){return d(),i("div",null,s)}const u=e(t,[["render",l],["__file","leetcode71_unfinish.html.vue"]]);export{u as default};

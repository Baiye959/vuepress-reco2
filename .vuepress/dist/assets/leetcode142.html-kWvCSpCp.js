import{_ as n,o as s,c as a,e}from"./app-0xcSrpkH.js";const t={},p=e(`<h2 id="_142-环形链表-ii" tabindex="-1"><a class="header-anchor" href="#_142-环形链表-ii" aria-hidden="true">#</a> 142. 环形链表 II</h2><p>给定一个链表的头节点 <code>head</code> ，返回链表开始入环的第一个节点。 <i>如果链表无环，则返回 <code>null</code>。</i></p><p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（<b>索引从 <code>0</code> 开始</b>）。如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<b>注意：<code>pos</code> 不作为参数进行传递</b>，仅仅是为了标识链表的实际情况。</p><p><b>不允许修改</b> 链表。</p><p>示例 1：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>链表中节点的数目范围在范围 [0, 10^4] 内
-10^5 &lt;= Node.val &lt;= 10^5
pos 的值为 -1 或者链表中的一个有效索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进阶：你是否可以使用 <code>O(1)</code> 空间解决此题？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>如何判断链表有无环？——用快指针和慢指针，如果两个指针相遇则链表有环（如果无环、为一条直链，则一定不会相遇）。</p><p>为什么有环时，快慢指针一定会相遇？——设置快指针一次走两步、慢指针一次走一步，则两者均入环时，快指针是以一次一步的相对速度接近慢指针，就一定会相遇（如果是快3慢1就不一定相遇了）。</p><p>怎么求环的入口？——这需要经过一定的数学推导：由 $ 2(x+y) = x+(y+z)<em>n+y $ 可以推出 $ x = (y+z)</em>(n-1)+z $ ，这意味着如果有两个一次走一步的指针A和B，A从链表头出发、B同时从快慢指针相遇点出发，那么他们会在环的入口相遇。</p><p>代码实现如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span>
 *         val = x;
 *         next = null;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token class-name">ListNode</span> a <span class="token operator">=</span> head<span class="token punctuation">,</span> b <span class="token operator">=</span> fast<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a <span class="token operator">=</span> a<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            b <span class="token operator">=</span> b<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[p];function i(o,c){return s(),a("div",null,l)}const u=n(t,[["render",i],["__file","leetcode142.html.vue"]]);export{u as default};

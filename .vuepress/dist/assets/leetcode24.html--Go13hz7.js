import{_ as n,o as s,c as a,e}from"./app--OS17miN.js";const t="/image/2024030101.jpg",p="/image/2024030102.png",c={},i=e('<h2 id="_24-两两交换链表中的节点" tabindex="-1"><a class="header-anchor" href="#_24-两两交换链表中的节点" aria-hidden="true">#</a> 24. 两两交换链表中的节点</h2><p>给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。</p><p>示例 1： <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4]
输出：[2,1,4,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1]
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>链表中节点的数目在范围 [0, 100] 内
0 &lt;= Node.val &lt;= 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>偶数节点正好两两交换，奇数节点则最后一个节点无需交换。<br> 交换非头节点时，交换一次的过程如下图： <img src="`+p+`" alt=""></p><p>为了统一交换流程，不被头节点干扰，使用虚拟头节点（即：在头节点前添加一个虚拟头结点<code>dummyhead</code>指向头节点，这样操作时头节点也和非头节点一致了，注意最终的头节点应该是<code>dummyhead.next</code>、而不是<code>head</code>）<br> 在交换时，为了能找到所有要用的节点，当前节点<code>cur</code>应该是参与交换的节点的上一节点（如上图），可以用<code>temp1</code>和<code>temp2</code>分别记录参与交换的左节点和右节点，同时在交换时应该注意修改指针的顺序和<code>cur.next</code>的实际值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dummyhead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> dummyhead<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> temp1 <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">,</span> temp2 <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> temp2<span class="token punctuation">;</span>
            temp1<span class="token punctuation">.</span>next <span class="token operator">=</span> temp2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            temp2<span class="token punctuation">.</span>next <span class="token operator">=</span> temp1<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> temp1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dummyhead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[i];function l(d,u){return s(),a("div",null,o)}const v=n(c,[["render",l],["__file","leetcode24.html.vue"]]);export{v as default};

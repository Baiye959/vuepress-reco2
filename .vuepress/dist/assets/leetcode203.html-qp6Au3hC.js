import{_ as n,o as a,c as s,e}from"./app-J2hkfQ41.js";const t="/image/2024022801.jpg",i={},l=e('<h2 id="_203-移除链表元素" tabindex="-1"><a class="header-anchor" href="#_203-移除链表元素" aria-hidden="true">#</a> 203. 移除链表元素</h2><p>给你一个链表的头节点 <code>head</code> 和一个整数 <code>val</code> ，请你删除链表中所有满足 <code>Node.val == val</code> 的节点，并返回 <b>新的头节点</b> 。</p><p>示例 1： <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [], val = 1
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [7,7,7,7], val = 7
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>列表中的节点数目在范围 [0, 10^4] 内
1 &lt;= Node.val &lt;= 50
0 &lt;= val &lt;= 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java基础补充" tabindex="-1"><a class="header-anchor" href="#java基础补充" aria-hidden="true">#</a> java基础补充</h2><p>首先了解一下java中的链表实现，本题是下面这样（注意Java中没有指针，访问节点内容得用&#39;.&#39;）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>一种思路是直接对原链表进行操作，则要分为头节点和非头节点进行删除操作。注意删除头节点会产生新的头节点，因此对头节点的判断删除操作要用while循环。</p><p>另一种思路则是添加虚拟头节点，这种做法在链表相关题中很常见，是为了能不特殊处理头节点（添加虚拟头节点后，头节点之前也有节点指向它了，可以跟非头节点一样处理）。<br> 注意检查节点的值时，当前节点应该是检查节点的上一个节点，不然删除时无法找到上一个节点。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// if (head == null) return head;</span>
        <span class="token class-name">ListNode</span> dummyhead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> dummyhead<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dummyhead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[l];function p(o,d){return a(),s("div",null,c)}const r=n(i,[["render",p],["__file","leetcode203.html.vue"]]);export{r as default};

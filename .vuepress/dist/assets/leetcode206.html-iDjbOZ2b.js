import{_ as n,o as s,c as a,e}from"./app-5XYVg856.js";const t="/image/2024022901.jpg",i="/image/2024022902.jpg",p={},c=e('<h2 id="_206-反转链表" tabindex="-1"><a class="header-anchor" href="#_206-反转链表" aria-hidden="true">#</a> 206. 反转链表</h2><p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。</p><p>示例 1： <img src="'+t+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2： <img src="`+i+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2]
输出：[2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>链表中节点的数目范围是 [0, 5000]
-5000 &lt;= Node.val &lt;= 5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解法一-双指针" tabindex="-1"><a class="header-anchor" href="#解法一-双指针" aria-hidden="true">#</a> 解法一（双指针）</h3><p>使用双指针，指针<code>cur</code>指向当前节点、指针<code>pre</code>指向上一节点，方便指针翻转。<br> 注意需要在每次循环开始时，记录下一节点，不然指针翻转后会无法找到下一节点，可以用指针<code>temp</code>存储。<br> 终止条件：无当前节点，即指针<code>cur</code>为空。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">,</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> temp<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解法二-递归" tabindex="-1"><a class="header-anchor" href="#解法二-递归" aria-hidden="true">#</a> 解法二（递归）</h3><p>递归的处理过程实际上跟双指针解法一致，但是思路比双指针更难理解一些。<br> 实际上，递归就是将每次的指针翻转包装成一个函数，然后在函数的最后进入下一次的指针翻转。<br> 函数退出的条件同样是指针<code>cur</code>为空。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
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
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">oneReverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> cur<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">oneReverse</span><span class="token punctuation">(</span>temp<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">oneReverse</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[c];function o(d,u){return s(),a("div",null,l)}const v=n(p,[["render",o],["__file","leetcode206.html.vue"]]);export{v as default};

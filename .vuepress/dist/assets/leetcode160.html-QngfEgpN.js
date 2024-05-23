import{_ as n,o as s,c as a,e}from"./app-KD0nz2p7.js";const t="/image/2024030902.png",i="/image/2024030903.png",l="/image/2024030904.png",p="/image/2024030905.png",c="/image/2024031005.png",o={},d=e('<h2 id="_160-相交链表" tabindex="-1"><a class="header-anchor" href="#_160-相交链表" aria-hidden="true">#</a> 160. 相交链表</h2><p>给你两个单链表的头节点 <code>headA</code> 和 <code>headB</code> ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 <code>null</code> 。</p><p>图示两个链表在节点 c1 开始相交： <img src="'+t+'" alt=""></p><p>题目数据 保证 整个链式结构中不存在环。</p><p>注意，函数返回结果后，链表必须 保持其原始结构 。</p><p>自定义评测：</p><p>评测系统 的输入如下（你设计的程序 不适用 此输入）：</p><p><code>intersectVal</code> - 相交的起始节点的值。如果不存在相交节点，这一值为 <code>0</code><code>listA</code> - 第一个链表 <code>listB</code> - 第二个链表 <code>skipA</code> - 在 <code>listA</code> 中（从头节点开始）跳到交叉节点的节点数 <code>skipB</code> - 在 <code>listB</code> 中（从头节点开始）跳到交叉节点的节点数 评测系统将根据这些输入创建链式数据结构，并将两个头节点 <code>headA</code> 和 <code>headB</code> 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。</p><p>示例 1： <img src="'+i+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at &#39;8&#39;
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2： <img src="`+l+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at &#39;2&#39;
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3： <img src="`+p+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>listA 中节点数目为 m
listB 中节点数目为 n
1 &lt;= m, n &lt;= 3 * 104
1 &lt;= Node.val &lt;= 105
0 &lt;= skipA &lt;= m
0 &lt;= skipB &lt;= n
如果 listA 和 listB 没有交点，intersectVal 为 0
如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进阶：你能否设计一个时间复杂度 <code>O(m + n)</code> 、仅用 <code>O(1)</code> 内存的解决方案？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h3><p>刚看题目的想法是同时遍历两条链表、对两个指针作比较，但怎么让两个指针同时到达交点？<br> 可以先遍历一次，得出两条链表的长度，这题的相交是二汇一、不再错开，那么只要保证同时到达各自的终点，就能保证同时到达交点（如果有的话）</p><p>解题步骤：</p><ol><li>遍历两条链表得到它们的长度</li><li>若链表A长度m、链表B长度n，且m&gt;n，则让链表A先走<code>m-n</code>步</li><li>两个指针同时走，如果相等则为交点、走到终点以后（即为null）则无交点</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span>
 *         val = x;
 *         next = null;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token keyword">int</span> lenA <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> lenB <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表A的长度</span>
            lenA<span class="token operator">++</span><span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curB <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求链表B的长度</span>
            lenB<span class="token operator">++</span><span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA为最长链表的头，lenA为其长度</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lenB <span class="token operator">&gt;</span> lenA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//1. swap (lenA, lenB);</span>
            <span class="token keyword">int</span> tmpLen <span class="token operator">=</span> lenA<span class="token punctuation">;</span>
            lenA <span class="token operator">=</span> lenB<span class="token punctuation">;</span>
            lenB <span class="token operator">=</span> tmpLen<span class="token punctuation">;</span>
            <span class="token comment">//2. swap (curA, curB);</span>
            <span class="token class-name">ListNode</span> tmpNode <span class="token operator">=</span> curA<span class="token punctuation">;</span>
            curA <span class="token operator">=</span> curB<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> tmpNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 求长度差</span>
        <span class="token keyword">int</span> gap <span class="token operator">=</span> lenA <span class="token operator">-</span> lenB<span class="token punctuation">;</span>
        <span class="token comment">// 让curA和curB在同一起点上（末尾位置对齐）</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>gap<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 遍历curA 和 curB，遇到相同则直接返回</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curA <span class="token operator">==</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> curA<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h3><p>在群里看别人的代码发现一个新思路 <img src="`+c+`" alt=""></p><ol><li>让两个指针分别从链表A的头节点和链表B的头节点开始遍历</li><li>指针遍历完链表A就开始遍历链表B，同理遍历完链表B就开始遍历链表A</li><li>两指针相等时即在相交点</li></ol><p>两个指针走的路程分别是<code>a+x+b</code>和<code>b+x+a</code>时，恰好在相交点</p><p>那么如何判断出不相交的情况呢？<br> 假设链表A长度为a，链表B长度为b，那么它们走的路程分别为<code>a+b</code>和<code>b+a</code>时，就会同时到链表末端。<br> 稍微修改代码，让指针每次走到尾节点的next（也就是null），再开始遍历另一个链表，这样它们走的路程分别为<code>a+1+b+1</code>和<code>b+1+a+1</code>时，就会同时、分别在两个链表的尾节点的next（null），这样如果指针相等就是找到了相交点/判断不相交。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span>
 *         val = x;
 *         next = null;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> a <span class="token operator">=</span> headA<span class="token punctuation">,</span> b <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 注意这里不能是a.next != null</span>
                a <span class="token operator">=</span> a<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                a <span class="token operator">=</span> headB<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 注意这里不能是b.next != null</span>
                b <span class="token operator">=</span> b<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                b <span class="token operator">=</span> headA<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),u=[d];function r(v,k){return s(),a("div",null,u)}const b=n(o,[["render",r],["__file","leetcode160.html.vue"]]);export{b as default};

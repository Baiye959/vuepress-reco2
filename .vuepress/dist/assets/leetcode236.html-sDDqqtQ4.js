import{_ as i,r as d,o as s,c as t,a as e,d as n,b as l,e as r}from"./app-g9oBReU2.js";const c="/image/2024032404.png",o="/image/2024032405.png",u={},v=e("h2",{id:"_236-二叉树的最近公共祖先",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_236-二叉树的最近公共祖先","aria-hidden":"true"},"#"),n(" 236. 二叉树的最近公共祖先")],-1),m=e("p",null,"给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。",-1),p={href:"https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"一个节点也可以是它自己的祖先",-1),b=r('<p>示例 1： <img src="'+c+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2： <img src="`+o+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2], p = 1, q = 2
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>树中节点数目在范围 [2, 10^5] 内。
-10^9 &lt;= Node.val &lt;= 10^9
所有 Node.val 互不相同 。
p != q
p 和 q 均存在于给定的二叉树中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,9);function x(h,g){const a=d("ExternalLinkIcon");return s(),t("div",null,[v,m,e("p",null,[e("a",p,[n("百度百科"),l(a)]),n("中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（"),_,n("）。”")]),b])}const E=i(u,[["render",x],["__file","leetcode236.html.vue"]]);export{E as default};

import{_ as o,r as i,o as r,c as l,a as e,d as n,b as t,e as s}from"./app-NMRReub2.js";const c="/image/2024-02-04-225316.png",d="/image/5j0h85a07o_-ozw2mMRCW.png",p="/image/ij7aea6480_E34kxNtBEx.png",h={},u=e("h2",{id:"推荐学习链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐学习链接","aria-hidden":"true"},"#"),n(" 推荐学习链接")],-1),m={href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"github网站访问问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github网站访问问题","aria-hidden":"true"},"#"),n(" Github网站访问问题")],-1),_=e("p",null,"如果网络稳定，访问Github无需其他操作，但会很卡顿。",-1),b={href:"https://github.com/bannedbook/fanqiang",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"双重身份验证问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#双重身份验证问题","aria-hidden":"true"},"#"),n(" 双重身份验证问题")],-1),k={href:"https://zhuanlan.zhihu.com/p/665527864",target:"_blank",rel:"noopener noreferrer"},v=e("blockquote",null,[e("p",null,"**注意：**从 2023 年 3 月开始到 2023 年底，GitHub 将逐渐开始要求在 GitHub.com 上贡献代码的所有用户启用一种或多种形式的双因素身份验证 (2FA)。 如果你在符合条件的组中，当选择该组进行注册时，将收到一封通知电子邮件，该电子邮件标志着 45 天的 2FA 注册期的开始，并且你会看到要求你在 GitHub.com 上注册 2FA 的横幅。 如果未收到通知，则表示你不是需要启用 2FA 的组的成员，但我们强烈建议启用 2FA。")],-1),w={href:"https://docs.github.com/zh/enterprise-cloud@latest/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"开源免费的Authenticator: 2FA Client，支持多种浏览器。",-1),A=e("p",null,"切到github的设置- 安全页面，展示一个二维码，然后点击扩展上的扫描按钮，用鼠标选中github的二维码，即可添加github帐号。",-1),G={href:"https://zhuanlan.zhihu.com/p/665527864",target:"_blank",rel:"noopener noreferrer"},E={href:"https://link.zhihu.com/?target=https%3A//github.com/Authenticator-Extension/Authenticator",target:"_blank",rel:"noopener noreferrer"},q={href:"https://link.zhihu.com/?target=https%3A//microsoftedge.microsoft.com/addons/detail/authenticator-2fa-client/ocglkepbibnalbgmbachknglpdipeoio",target:"_blank",rel:"noopener noreferrer"},F={href:"https://link.zhihu.com/?target=https%3A//chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"令牌问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#令牌问题","aria-hidden":"true"},"#"),n(" 令牌问题")],-1),C=e("h3",{id:"_1-打开新建令牌页面",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-打开新建令牌页面","aria-hidden":"true"},"#"),n(" 1. 打开新建令牌页面")],-1),z=e("p",null,'打开Github网站 - "Settings" - "Developer Settings" - "Personal access tokens" - "Tokens (classic)" - "Generate new token" - "Generate new token(classic)"',-1),y={href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"},N=s('<p>这样会打开新建令牌页面，如下 <img src="'+c+`" alt=""></p><h3 id="_2-新建令牌" tabindex="-1"><a class="header-anchor" href="#_2-新建令牌" aria-hidden="true">#</a> 2. 新建令牌</h3><p>根据自己的需求设置令牌有效期和权限，常用设置如下</p><ul><li>&quot;Expiration&quot;设为&quot;No expiration&quot;（无到期时间，即永久有效）</li><li>&quot;Select scopes&quot;勾上&quot;repo&quot;（对仓库的操作权限）</li></ul><p>点击&quot;Generate token&quot;（生成令牌）后一定要保存令牌！！！！！一旦关闭页面就没有办法在Github官网再看到令牌了</p><h3 id="_3-使用令牌方法" tabindex="-1"><a class="header-anchor" href="#_3-使用令牌方法" aria-hidden="true">#</a> 3. 使用令牌方法</h3><h4 id="使用方法一" tabindex="-1"><a class="header-anchor" href="#使用方法一" aria-hidden="true">#</a> 使用方法一</h4><p>把令牌当作原来的密码使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/username/repo.git
Username: your_username
Password: your_token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用方法二" tabindex="-1"><a class="header-anchor" href="#使用方法二" aria-hidden="true">#</a> 使用方法二</h4><p>直接在远程仓库链接中加入令牌，这样就不需要每次操作输入令牌了，命令如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地仓库与远程仓库建立联系时</span>
<span class="token function">git</span> remote set-url origin https://<span class="token operator">&lt;</span>your_token<span class="token operator">&gt;</span>@github.com/<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>REPO<span class="token operator">&gt;</span>.git

<span class="token comment"># 克隆远程仓库到本地时</span>
<span class="token function">git</span> clone https://<span class="token operator">&lt;</span>your_token<span class="token operator">&gt;</span>@github.com/<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>REPO<span class="token operator">&gt;</span>.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目创建人使用git" tabindex="-1"><a class="header-anchor" href="#项目创建人使用git" aria-hidden="true">#</a> 项目创建人使用Git</h2>`,13),B={href:"https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.liaoxuefeng.com/wiki/896043488029600/896827951938304",target:"_blank",rel:"noopener noreferrer"},H=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> CodeSpace/Flutter/life_coral <span class="token comment"># 进入想要上传git仓库的代码总目录</span>
<span class="token function">git</span> init <span class="token comment"># 初始化为本地git仓库</span>
<span class="token function">git</span> status <span class="token comment"># 查看该目录下文件状态（对比本地git仓库是否有修改、有添加、有删除）</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment"># 将所有的文件都加入本地git仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;init&quot;</span> <span class="token comment"># 提交更改至本地git仓库（init是本次提交的名称）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={href:"https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,[e("img",{src:d,alt:""})],-1),P={href:"https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440",target:"_blank",rel:"noopener noreferrer"},T=s('<p><img src="'+p+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> CodeSpace/Flutter/life_coral
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/Baiye959/life_coral_android.git <span class="token comment"># 添加联系</span>
<span class="token comment"># 请在此处解决令牌问题！</span>
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main <span class="token comment"># 切换到main分支</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main <span class="token comment"># 推送本地仓库至远程仓库（-u为设置默认推送至origin远程仓库的main分支）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),U={href:"https://www.liaoxuefeng.com/wiki/896043488029600/896954074659008",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"项目贡献者使用git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目贡献者使用git","aria-hidden":"true"},"#"),n(" 项目贡献者使用Git")],-1),I={href:"https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.liaoxuefeng.com/wiki/896043488029600/898732792973664",target:"_blank",rel:"noopener noreferrer"},O=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> CodeSpace/Flutter <span class="token comment"># 进入想拷贝代码的父目录（拷贝后代码在CodeSpace/Flutter/life_coral_android）</span>
<span class="token function">git</span> clone https://github.com/Baiye959/life_coral_android.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W={href:"https://www.liaoxuefeng.com/wiki/896043488029600/896954074659008",target:"_blank",rel:"noopener noreferrer"};function D($,J){const a=i("ExternalLinkIcon");return r(),l("div",null,[u,e("p",null,[e("a",m,[n("廖雪峰的Git教程"),t(a)])]),g,_,e("p",null,[n('windows端可以先使用Microsoft Store里的"Watt Toolkit"软件，再访问github里的教程自己搭建'),e("a",b,[n("教程仓库链接"),t(a)])]),f,e("p",null,[n("请看参考链接，以下内容仅防链接失效"),e("a",k,[n("GitHub 2FA认证（双重身份验证）"),t(a)])]),v,e("p",null,[n("访问Github官网受阻/收到邮箱通知，需要进行双重身份验证（"),e("a",w,[n("官网文档"),t(a)]),n("）")]),x,A,e("ul",null,[e("li",null,[n("参考教程："),e("a",G,[n("GitHub 2FA认证（双重身份验证）"),t(a)])]),e("li",null,[n("开源地址："),e("a",E,[n("Authenticator-Extension/Authenticator: Authenticator generates 2-Step Verification codes in your browser. (github.com)"),t(a)])]),e("li",null,[n("Edge扩展："),e("a",q,[n("Authenticator: 2FA Client - Microsoft Edge Addons"),t(a)])]),e("li",null,[n("Chrome扩展："),e("a",F,[n("身份验证器 - Chrome 应用商店 (google.com)"),t(a)])])]),S,C,z,e("p",null,[n("或者点击链接"),e("a",y,[n("github官网上的新建令牌"),t(a)])]),N,e("ol",null,[e("li",null,[e("p",null,[n("电脑安装Git "),e("a",B,[n("安装Git - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)])])]),e("li",null,[e("p",null,[n("初始化本地仓库 "),e("a",M,[n("创建版本库 - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)])]),H]),e("li",null,[e("p",null,[n("创建远程仓库 "),e("a",R,[n("添加远程库 - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)])]),V]),e("li",null,[e("p",null,[n("将本地仓库和远程仓库连接起来 "),e("a",P,[n("添加远程库 - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)])]),T]),e("li",null,[e("p",null,[n("Git使用 "),e("a",U,[n("时光机穿梭 - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)])])])]),j,e("ol",null,[e("li",null,[n("电脑安装Git "),e("a",I,[n("安装Git - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)])]),e("li",null,[n("远程仓库代码拉取至本地 "),e("a",L,[n("从远程库克隆 - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)]),O]),e("li",null,[n("Git使用 "),e("a",W,[n("时光机穿梭 - 廖雪峰的官方网站 (liaoxuefeng.com)"),t(a)])])])])}const Q=o(h,[["render",D],["__file","git.html.vue"]]);export{Q as default};
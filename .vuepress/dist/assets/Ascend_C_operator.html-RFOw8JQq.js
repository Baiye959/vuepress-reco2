import{_ as o,r as c,o as i,c as l,a as e,b as n,d as s,e as t}from"./app-gz_C23Xc.js";const r="/image/image_TpbViomg7g.png",d="/image/image_vKJsL1JKch.png",p="/image/image_7m17ZyVsh9.png",h="/image/image_y6YgIWWMHT.png",u="/image/image_QZiUh5878w.png",m={},_={class:"custom-container info"},b=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),v=e("p",{class:"custom-container-title"},"INFO",-1),g={href:"https://www.hiascend.com/zh/developer/activities/details/118b868aa5fe4b759d9e407e914db905",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"ascend-c算子开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ascend-c算子开发","aria-hidden":"true"},"#"),n(" Ascend C算子开发")],-1),A={href:"https://www.hiascend.com/forum/thread-0272155182500277183-1-1.html",title:"Ascend C暑期优才班获奖规则&笔记提交专用贴_Ascend C_昇腾论坛 (hiascend.com)",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.hiascend.com/forum/thread-0272155297687515207-1-1.html",title:"香橙派实验手册_Ascend C_昇腾论坛 (hiascend.com)",target:"_blank",rel:"noopener noreferrer"},x=t('<h3 id="任务要求" tabindex="-1"><a class="header-anchor" href="#任务要求" aria-hidden="true">#</a> 任务要求</h3><p>修改add算子功能为sinh函数功能</p><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h3><h4 id="_1-orange-pi-ai-pro的连接" tabindex="-1"><a class="header-anchor" href="#_1-orange-pi-ai-pro的连接" aria-hidden="true">#</a> 1. Orange Pi AI PRO的连接</h4>',4),C={href:"https://www.hiascend.com/document/detail/zh/Atlas200IDKA2DeveloperKit/23.0.RC2/qs/qs_0017.html",title:"以太网口远程登录（SSH方式）",target:"_blank",rel:"noopener noreferrer"},w=e("ul",null,[e("li",null,[e("p",null,"网线连接电脑和香橙派，香橙派ip一般为192.168.137.100，将电脑设为同一网段ip，如：192.167.137.101")]),e("li",null,[e("p",null,[n("使用MobaXterm连接香橙派，用户"),e("code",null,"root"),n("，密码"),e("code",null,"Mind@123")]),e("p",null,[e("img",{src:r,alt:""})])])],-1),E=e("h4",{id:"_2-orange-pi-ai-pro中add算子的检验-kernel直调工程体验",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-orange-pi-ai-pro中add算子的检验-kernel直调工程体验","aria-hidden":"true"},"#"),n(" 2. Orange Pi AI PRO中Add算子的检验（Kernel直调工程体验）")],-1),L={href:"https://gitee.com/ascend/samples",title:"samples: CANN Samples (gitee.com)",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/samples/operator/AddCustomSample/KernelLaunch/
<span class="token function">cp</span> <span class="token parameter variable">-r</span> AddKernelInvocationNeo/ <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> test/
<span class="token function">bash</span> run.sh <span class="token parameter variable">-r</span> cpu <span class="token parameter variable">-v</span> Ascend310P1
<span class="token comment"># 上述命令中cpu参数指定了执行命令的设备，-v Ascend310P1则是香橙派的npu版本型号</span>
<span class="token comment"># 在不涉及npu的情况下，版本型号不会对结果造成影响。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt=""></p><h4 id="_3-将add算子修改为sinh并检验" tabindex="-1"><a class="header-anchor" href="#_3-将add算子修改为sinh并检验" aria-hidden="true">#</a> 3. 将Add算子修改为Sinh并检验</h4>',3),N=t(`<li><p>修改<code>/root/samples/operator/AddCustomSample/KernelLaunch/test/scripts/gen_data.py</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>input_x <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2048</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>float16<span class="token punctuation">)</span>
golden <span class="token operator">=</span> np<span class="token punctuation">.</span>sinh<span class="token punctuation">(</span>input_x<span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>float16<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p></li>',1),P=e("p",null,[n("修改"),e("code",null,"/root/samples/operator/AddCustomSample/KernelLaunch/test/add_custom.cpp")],-1),y=e("p",null,"修改其中compute()函数，把“Add(xxxxxxxxxxxxxxxxx)”那一行注释掉，改成sinh的计算逻辑，用xLocal当输入，zLocal当输出",-1),S={href:"https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC2alpha003/apiref/opdevgapi/atlasascendc_api_07_0034.html",title:"Exp-单目指令-矢量计算-基础API-Ascend C API-Ascend C API-算子开发接口-API参考-CANN社区版8.0.RC2.alpha003开发文档-昇腾社区 (hiascend.com)",target:"_blank",rel:"noopener noreferrer"},z=t('<p><img src="'+h+`" alt=""></p><p>可做优化，最简4条公式即可完成（数学公式优化），如下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Exp(xLocal, xLocal, TILE_LENGTH);
Reciprocal(zLocal, xLocal, TILE_LENGTH); // 倒数
Sub(zLocal, xLocal, zLocal, TILE_LENGTH);
Muls(zLocal, zLocal, scalar, TILE_LENGTH);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),B=t(`<li><p>测试，同第2步</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/samples/operator/AddCustomSample/KernelLaunch/test
<span class="token function">bash</span> run.sh <span class="token parameter variable">-r</span> cpu <span class="token parameter variable">-v</span> Ascend310P1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt=""></p></li>',1),T=e("h2",{id:"ascend-c算子开发认证考试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ascend-c算子开发认证考试","aria-hidden":"true"},"#"),n(" Ascend C算子开发认证考试")],-1),K={href:"https://www.hiascend.com/zh/exams/1697055344003670018?isCertification=false&breadcrumbSecond=Ascend%20C%E7%AE%97%E5%AD%90%E5%BC%80%E5%8F%91%E8%83%BD%E5%8A%9B%E8%AE%A4%E8%AF%81%EF%BC%88%E4%B8%AD%E7%BA%A7%EF%BC%89&source=/edu/certification&sourceDetail=/edu/certification/detail/34bf904cb410497cb9c582be6c047ff7",title:"Ascend C算子开发能力认证考试（中级）",target:"_blank",rel:"noopener noreferrer"},D={href:"https://bbs.huaweicloud.com/blogs/418400",title:"https://bbs.huaweicloud.com/blogs/418400",target:"_blank",rel:"noopener noreferrer"},H=t(`<p>初始化环境：</p><p><a href="/file/exam_system_init_8AD7jD3bV7.sh" title="exam_system_init.sh">exam_system_init.sh</a></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> exam_system_init.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="比赛补充" tabindex="-1"><a class="header-anchor" href="#比赛补充" aria-hidden="true">#</a> 比赛补充</h2>`,4),R={href:"https://www.hiascend.com/zh/developer/courses/detail/1696414606799486977",title:"Ascend C算子开发（进阶）-昇腾社区 (hiascend.com)",target:"_blank",rel:"noopener noreferrer"},V={href:"https://gitee.com/ascend/samples/tree/master/operator_contrib",title:"operator_contrib · Ascend/samples - 码云 - 开源中国 (gitee.com)",target:"_blank",rel:"noopener noreferrer"};function M(F,O){const a=c("ExternalLinkIcon");return i(),l("div",null,[e("div",_,[b,v,e("p",null,[e("a",g,[n("https://www.hiascend.com/zh/developer/activities/details/118b868aa5fe4b759d9e407e914db905"),s(a)])])]),k,e("p",null,[e("a",A,[n("Ascend C暑期优才班获奖规则&笔记提交专用贴_Ascend C_昇腾论坛 (hiascend.com)"),s(a)])]),e("p",null,[e("a",f,[n("香橙派实验手册_Ascend C_昇腾论坛 (hiascend.com)"),s(a)])]),x,e("p",null,[n("参考文档："),e("a",C,[n("以太网口远程登录（SSH方式）"),s(a)])]),w,E,e("p",null,[n("代码："),e("a",L,[n("samples: CANN Samples (gitee.com)"),s(a)])]),I,e("ul",null,[N,e("li",null,[P,y,e("p",null,[e("a",S,[n("Exp-单目指令-矢量计算-基础API-Ascend C API-Ascend C API-算子开发接口-API参考-CANN社区版8.0.RC2.alpha003开发文档-昇腾社区 (hiascend.com)"),s(a)])]),z]),B]),T,e("p",null,[e("a",K,[n("Ascend C算子开发能力认证考试（中级）"),s(a)])]),e("p",null,[n("参考笔记："),e("a",D,[n("https://bbs.huaweicloud.com/blogs/418400"),s(a)])]),H,e("p",null,[e("a",R,[n("Ascend C算子开发（进阶）-昇腾社区 (hiascend.com)"),s(a)])]),e("p",null,[n("往年比赛优秀代码（算子调优）："),e("a",V,[n("operator_contrib · Ascend/samples - 码云 - 开源中国 (gitee.com)"),s(a)])])])}const j=o(m,[["render",M],["__file","Ascend_C_operator.html.vue"]]);export{j as default};
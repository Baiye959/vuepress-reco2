import{_ as s,r as t,o as l,c as d,a as e,b as i,d as r,e as a}from"./app-cJunwW8o.js";const c="/image/image_TERBAUf-Yc.png",o="/image/image_iHN38Css7W.png",m="/image/image_1T78c7y7HS.png",g="/image/image_pvsO8LWCoS.png",v="/image/image_bYvetat6bE.png",u="/image/image_UsesErfNVb.png",p="/image/image_2bB3EwoRcm.png",h="/image/image_PbAV7V2idE.png",b="/image/image_n4S8B6GbKN.png",x="/image/image_dRTJzAWrth.png",f={},_=a('<h2 id="一-git-规范" tabindex="-1"><a class="header-anchor" href="#一-git-规范" aria-hidden="true">#</a> (一) Git 规范</h2><p>作业目的：了解git规范能否在按照分支规范开展工作。 作业要求： 列举 git的 功能点开发分支，错误修复分支，发布分支，紧急修复分支，发布分支 的命名规范，并且说明从开发到版本发布的一个流程 例如先从dev 切出 feaure/1.0.0-模块-功能点 开发完成自测 …然后…</p><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h3><h4 id="主分支-master" tabindex="-1"><a class="header-anchor" href="#主分支-master" aria-hidden="true">#</a> 主分支 (master)</h4><p>master 为主分支，用于部署生产环境的分支，master 分支由develop或hotfix分支合并而来，任何时间都不能直接修改其代码，合并到 master 分支的代码，必须保证充分的测试。</p><h4 id="标签分支-tag" tabindex="-1"><a class="header-anchor" href="#标签分支-tag" aria-hidden="true">#</a> 标签分支（tag）</h4><p>tag 为master 分支部署到生产环境后，在master分支节点上标注的一个标签。 tag 的命名规则：x.y.z。依次为主版本号，次版本号，bug修复号。</p><h4 id="develop-开发分支" tabindex="-1"><a class="header-anchor" href="#develop-开发分支" aria-hidden="true">#</a> Develop（开发分支）</h4><p>develop 为开发分支，始终保持最新完成的功能和bug修复后的代码。</p><h4 id="feature-xxx-功能分支" tabindex="-1"><a class="header-anchor" href="#feature-xxx-功能分支" aria-hidden="true">#</a> feature/xxx(功能分支)</h4><p>开发新功能时，以develop 为基准创建feature分支。 分支命名规则： feature/modules,modules为要新增的功能模块</p><h4 id="fix-xxx-修复分支" tabindex="-1"><a class="header-anchor" href="#fix-xxx-修复分支" aria-hidden="true">#</a> fix/xxx（修复分支)</h4><p>修复开发过程中发现的问题，以develop为基准创建fix分支 分支命令规则：fix/problem,problem 为要修复的问题。</p><h4 id="hotfix-xxx-紧急修复分支" tabindex="-1"><a class="header-anchor" href="#hotfix-xxx-紧急修复分支" aria-hidden="true">#</a> hotfix/xxx（紧急修复分支）</h4><p>当线上出现紧急问题，需要及时修复，以master分支为基线，创建hotfix分支，问题修复完成并验证后，分别合并到master分支和develop分支。 分支命令规则：hotfix/problem,problem 为要修复的问题。</p><h3 id="从开发到版本发布的流程" tabindex="-1"><a class="header-anchor" href="#从开发到版本发布的流程" aria-hidden="true">#</a> 从开发到版本发布的流程</h3><p><img src="'+c+`" alt=""></p><p>分支说明：master是主分支，当线上出现紧急问题 需要及时修复时 以master分支为基线创建hotfix分支，开发使用develop分支，开发新功能时以develop为基准创建feature分支，准备上线新版本时以develop为基准创建release分支。</p><ol><li>开发：以master分支为基线创建develop分支，进行迭代开发。</li><li>开发新功能：以develop为基准创建feaure/1.0.0-模块-功能点，开发完成自测，然后合并到最新版本的develop分支。</li><li>上线新版本：以develop为基准创建release分支，通过测试迭代，合并到master分支，在master分支打tag标签。</li><li>修复线上紧急问题：以master分支为基线创建hotfix分支，修复问题后合并到master分支。</li></ol><h2 id="二-git-分支操作" tabindex="-1"><a class="header-anchor" href="#二-git-分支操作" aria-hidden="true">#</a> (二) Git 分支操作</h2><ol><li>在github 或者 gitee 建立一个仓库git clone到本地建立dev分支，<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git clone https://gitee.com/baiye959/git.git
git branch dev
git checkout dev
git branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+`" alt=""></li><li>在dev下增加hello.c 文件，将hello.c，添加本地仓库推送远程dev，使用git branch –vv 查看本地dev是否和远程建立连接 如果没有这使用git branch –setup-stream 将本地分支和远程建立关联（注意如果没有建立关联对本地的git push是不成功或者每次都需要 git push指定远程分支），<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git add .
git commit -m <span class="token string">&quot;feat: add hello.c&quot;</span>
git push origin dev
git branch -vv

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+m+`" alt=""><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git branch --set-upstream-to=origin/dev dev
git branch -vv

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+g+`" alt=""></li><li>从dev checkout一个feature/1.0.0-myfunction 分支对hello.c进行编辑提交到本地仓库，使用git checkout dev 切到 dev分支， 使用 git merge 合并 把 feature分支内容合并到dev<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git checkout -b feature/1.0.0-myfunction
git add hello.c
git commit -m <span class="token string">&quot;fix: fix hello.c&quot;</span>
git checkout dev
git merge feature/1.0.0-myfunction

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>从 dev checkout 一个 realease分支用于预发布测试<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git checkout -b release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>假设测试中发现问题 对release分支checkout 一个 fix/xx 分支 修改hello.c 然后 合并到 release<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git checkout -b fix/xx
git add hello.c
git commit -m <span class="token string">&quot;fix: Fix issue in hello.c&quot;</span>
git checkout release
git merge fix/xx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>假定满足发布条件则checkout到master 将release分支合并到master，切换到master对其建立tag ，同时将release合并到dev<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git checkout master
git merge release
git tag -a v1.0.0 -m <span class="token string">&quot;Release version 1.0.0&quot;</span>
git checkout dev
git merge release

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>假设生产中发现晋级问题则从对应的 tag版本中 checkout一个 hotfix/分支，修改hello.c将代码合并到master 和 dev<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git checkout -b hotfix/problem v1.0.0
git add hello.c
git commit -m <span class="token string">&quot;fix: Hotfix for problem in hello.c&quot;</span>
git checkout master
git merge hotfix/problem
git tag -a v1.0.1 -m <span class="token string">&quot;Hotfix version 1.0.1&quot;</span>
git checkout dev
git merge hotfix/problem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="三-ignore-文件" tabindex="-1"><a class="header-anchor" href="#三-ignore-文件" aria-hidden="true">#</a> (三) ignore 文件</h2><p>作业目的： 掌握ignore文件配置，避免将非必要文件提交仓库 作业要求：</p>`,23),k={href:"https://gitee.com/ningde-magic-lamp-network/bosssoft-train-quick-start-demo.git",title:"https://gitee.com/ningde-magic-lamp-network/bosssoft-train-quick-start-demo.git",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"仓库代码",-1),E=e("li",null,[e("p",null,"根据项目的结构重写 ignore")],-1),S=a(`<div class="language-.ignore line-numbers-mode" data-ext=".ignore"><pre class="language-.ignore"><code>target/
!.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### VS Code ###
.vscode/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-idea-git-操作" tabindex="-1"><a class="header-anchor" href="#四-idea-git-操作" aria-hidden="true">#</a> (四) IDEA Git 操作</h2><ol><li><p>查看日志</p><p>Git &gt; Show History</p><p><img src="`+v+'" alt=""></p></li><li><p>比较指定的 两个分支，例如合并前我们可能比较小伙伴的分支</p><p>Git &gt; Show diff</p><p><img src="'+u+'" alt=""></p></li><li><p>git add . 到暂存区的内容退回</p><p>Git &gt; Reset HEAD</p><p><img src="'+p+'" alt=""></p></li><li><p>Commit的内容回退</p><p>历史记录中，选择想撤销的commit记录右键，点击Undo Commit</p><p><img src="'+h+'" alt=""></p></li><li><p>push后内容回退</p><p>历史记录中，选择想回退到的历史版本右键，点击Reset Current Branch to Here</p><p><img src="'+b+'" alt=""></p><p><img src="'+x+'" alt=""></p><p>回退模式说明：</p><ul><li>Soft选项：在选择的回退点之后的所有更改将会保留并被git追踪下来。这就意味着可以在 Version Control 的 Local Changes 面板中查看到它们。</li><li>Mixed模式：在选择的回退点之后的所有更改将会保留但不会被git追踪下来。</li><li>Hard模式：在选择的回退点之后的所有更改都会被丢弃。（包括被追踪的和已提交的文件）</li><li>Keep模式：在选择的回退点之后的所有已提交的更改会被丢弃。但本地修改的会被完整地保存下来。</li></ul></li></ol>',3);function w(C,V){const n=t("ExternalLinkIcon");return l(),d("div",null,[_,e("ol",null,[e("li",null,[e("p",null,[i("从 "),e("a",k,[i("https://gitee.com/ningde-magic-lamp-network/bosssoft-train-quick-start-demo.git"),r(n)]),i(" fork ")]),q]),E]),S])}const B=s(f,[["render",w],["__file","git2.html.vue"]]);export{B as default};

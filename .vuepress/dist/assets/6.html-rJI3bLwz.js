import{_ as e,o as d,c as a,e as c}from"./app-OzwhGvB3.js";const o={},r=c('<h2 id="_1、组管理" tabindex="-1"><a class="header-anchor" href="#_1、组管理" aria-hidden="true">#</a> 1、组管理</h2><p>Linux的用户属于组（角色），系统可以对一个组中的全部用户进行集中管理（权限）。</p><p>创建组：<code>groupadd 组名</code></p><p>删除组：<code>groupdel 组名</code></p><p>组的信息保存在文件/etc/group中。</p><h2 id="_2、用户管理" tabindex="-1"><a class="header-anchor" href="#_2、用户管理" aria-hidden="true">#</a> 2、用户管理</h2><p>创建用户：<code>useradd -n 用户名 -g 组名 -d 用户的主目录</code></p><p>删除用户：<code>userdel 用户名</code></p><p>用户的信息保存在文件/etc/passwd中。</p><h2 id="_3、修改用户的密码" tabindex="-1"><a class="header-anchor" href="#_3、修改用户的密码" aria-hidden="true">#</a> 3、修改用户的密码</h2><p>创建用户后，必须设置它的密码，否则无法登录。</p><p>root用户可以修改任何用户的密码：<code>passwd 用户名</code></p><p>普通用户只能修改自己的密码：<code>passwd</code></p><p>用户的密码保存在 文件/etc/shadow 中。</p><h2 id="_4、切换用户" tabindex="-1"><a class="header-anchor" href="#_4、切换用户" aria-hidden="true">#</a> 4、切换用户</h2><p>root用户可以免密码切换到任何用户：<code>su - 用户名</code></p><p>普通用户切换到其它用户：<code>su -</code> 或<code>su - 用户名</code>，然后输入目标用户的密码。</p>',17),p=[r];function s(t,h){return d(),a("div",null,p)}const i=e(o,[["render",s],["__file","6.html.vue"]]);export{i as default};
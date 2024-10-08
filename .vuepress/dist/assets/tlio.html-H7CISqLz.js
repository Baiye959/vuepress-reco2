import{_ as s,r as e,o as t,c as i,a as n,b as l,d as o,e as c}from"./app-Nu3yXL5S.js";const r={},p={class:"custom-container info"},d=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),m=n("p",{class:"custom-container-title"},"INFO",-1),v=n("p",null,"将TLIO神经网络在",-1),u={href:"https://github.com/CathIAS/TLIO",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="wsl跑源代码" tabindex="-1"><a class="header-anchor" href="#wsl跑源代码" aria-hidden="true">#</a> wsl跑源代码</h2><ol><li>安装anaconda</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://repo.anaconda.com/archive/Anaconda3-2023.07-1-Linux-x86_64.sh
<span class="token function">bash</span> Anaconda3-2023.07-1-Linux-x86_64.sh <span class="token comment"># 一路回车最后yes</span>
conda init <span class="token function">zsh</span> <span class="token comment"># 运行后重启终端</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置TLIO运行环境</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置环境</span>
conda <span class="token function">env</span> create <span class="token parameter variable">-f</span> environment.yaml
conda activate tlio
<span class="token comment"># 下载官方数据集</span>
gdown 14YKW7PsozjHo_EdxivKvumsQB7JMw1eg
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> local_data/ <span class="token comment"># or ln -s /path/to/data_drive/ local_data/</span>
<span class="token function">unzip</span> golden-new-format-cc-by-nc-with-imus-v1.5.zip <span class="token parameter variable">-d</span> local_data/
<span class="token function">rm</span> golden-new-format-cc-by-nc-with-imus-v1.5.zip
<span class="token comment"># 解决报错libGL error: MESA-LOADER: failed to open swrast</span>
conda <span class="token function">install</span> <span class="token parameter variable">-c</span> conda-forge gcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>测试TLIO源代码</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 训练神经网络</span>
python3 src/main_net.py <span class="token punctuation">\\</span>
<span class="token parameter variable">--mode</span> train <span class="token punctuation">\\</span>
<span class="token parameter variable">--root_dir</span> local_data/tlio_golden <span class="token punctuation">\\</span>
<span class="token parameter variable">--out_dir</span> models/resnet <span class="token punctuation">\\</span>
<span class="token parameter variable">--epochs</span> <span class="token number">100</span>

<span class="token comment"># 转神经网络模型为 torchscript 格式</span>
python3 src/convert_model_to_torchscript.py <span class="token punctuation">\\</span>
<span class="token parameter variable">--model_path</span> models/resnet/checkpoint_best.pt <span class="token punctuation">\\</span>
<span class="token parameter variable">--model_param_path</span> models/resnet/parameters.json <span class="token punctuation">\\</span>
<span class="token parameter variable">--out_dir</span> models/resnet/

<span class="token comment"># 在刚才输出的模型上运行EKF网络</span>
python3 src/main_filter.py <span class="token punctuation">\\</span>
<span class="token parameter variable">--root_dir</span> local_data/tlio_golden <span class="token punctuation">\\</span>
<span class="token parameter variable">--model_path</span> models/resnet/model_torchscript.pt <span class="token punctuation">\\</span>
<span class="token parameter variable">--model_param_path</span> models/resnet/parameters.json <span class="token punctuation">\\</span>
<span class="token parameter variable">--out_dir</span> filter_outputs <span class="token punctuation">\\</span>
<span class="token parameter variable">--erase_old_log</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--save_as_npy</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--initialize_with_offline_calib</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--dataset_number</span> <span class="token number">22</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--visualize</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在安卓上运行" tabindex="-1"><a class="header-anchor" href="#在安卓上运行" aria-hidden="true">#</a> 在安卓上运行</h2><p>安卓</p>`,9);function k(h,_){const a=e("ExternalLinkIcon");return t(),i("div",null,[n("div",p,[d,m,v,n("p",null,[n("a",u,[l("TLIO源代码"),o(a)])])]),b])}const g=s(r,[["render",k],["__file","tlio.html.vue"]]);export{g as default};

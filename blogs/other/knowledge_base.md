---
title: 使用开源大模型构建本地私有知识库系统
date: 2024/03/04
categories:
 - other
---
::: info
以 Langchain-Chatchat + PGvector + ChatGLM2-6B-32K为例，从零开始构建一个基于本地开源大模型的私有知识库系统。<br/>
[参考文档](https://mp.weixin.qq.com/s/eVoNEfugHH5AkQTqo-BsFg)<br/>
[参考视频](https://www.bilibili.com/video/BV1bh4y1U7Jf)
:::

### 前期准备
1. [利用VMware创建Ubuntu虚拟机](http://t.csdnimg.cn/pbDE5)
2. [如何使用 WSL 在 Windows 上安装 Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)
3. [Git合集](https://baiye959.cn/blogs/other/git.html)
4. [Ubuntu 安装 conda](https://zhuanlan.zhihu.com/p/459607806)

### 开始构建
模型下载
```bash
git clone https://huggingface.co/THUDM/chatglm2-6b-32k
git clone https://huggingface.co/moka-ai/m3e-base
```

下载源码
```bash
git clone https://github.com/chatchat-space/Langchain-Chatchat.git
```

配置环境
```bash
conda create -n langchain-chatchat python=3.10
python -m pip install --upgrade pip
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
conda activate langchain-chatchat
conda install spacy
cd Langchain-Chatchat
pip install cchardet
pip install accelerate
# pip install --upgrade pip
pip install -r requirements.txt
```

::: warning
现在做到这里了，当前目录没有下述文件，去看视频
:::

生成并修改配置文件
```bash
cp .\model_config.py.example .\model_config.py
cp .\server_config.py.example .\server_config.py

修改model_config.py内与模型相关的相关参数
"m3e-base": "D:/models/m3e-base",
"local_model_path": "D:/models/chatglm2-6b-32k",
```

配置数据库
```bash
下载数据库并安装
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
```

配置向量插件
```bash
call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat"
set "PGROOT=C:\Program Files\PostgreSQL\15"
git clone --branch v0.4.4 https://github.com/pgvector/pgvector.git
cd pgvector
nmake /F Makefile.win
nmake /F Makefile.win install
CREATE DATABASE TEST;
CREATE EXTENSION IF NOT EXISTS vector;
```

数据库准备工作
```bash
python -m spacy download en_core_web_sm
python -m spacy download zh_core_web_sm
pip install psycopg2
pip install pgvector
```

向量库初始化
```bash
python init_database.py
python init_database.py --recreate-vs
```

启动运行
```bash
python startup.py --all-webui
```

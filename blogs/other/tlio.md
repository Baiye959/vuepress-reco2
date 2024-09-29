---
title: TLIO 安卓测试
date: 2024/09/17
categories:
 - other
---
::: info
将TLIO神经网络在

[TLIO源代码](https://github.com/CathIAS/TLIO)
:::

## wsl跑源代码
1. 安装anaconda
```bash
wget https://repo.anaconda.com/archive/Anaconda3-2023.07-1-Linux-x86_64.sh
bash Anaconda3-2023.07-1-Linux-x86_64.sh # 一路回车最后yes
conda init zsh # 运行后重启终端
```

2. 配置TLIO运行环境
```bash
# 配置环境
conda env create -f environment.yaml
conda activate tlio
# 下载官方数据集
gdown 14YKW7PsozjHo_EdxivKvumsQB7JMw1eg
mkdir -p local_data/ # or ln -s /path/to/data_drive/ local_data/
unzip golden-new-format-cc-by-nc-with-imus-v1.5.zip -d local_data/
rm golden-new-format-cc-by-nc-with-imus-v1.5.zip
# 解决报错libGL error: MESA-LOADER: failed to open swrast
conda install -c conda-forge gcc
```

3. 测试TLIO源代码
```bash
# 训练神经网络
python3 src/main_net.py \
--mode train \
--root_dir local_data/tlio_golden \
--out_dir models/resnet \
--epochs 100

# 转神经网络模型为 torchscript 格式
python3 src/convert_model_to_torchscript.py \
--model_path models/resnet/checkpoint_best.pt \
--model_param_path models/resnet/parameters.json \
--out_dir models/resnet/

# 在刚才输出的模型上运行EKF网络
python3 src/main_filter.py \
--root_dir local_data/tlio_golden \
--model_path models/resnet/model_torchscript.pt \
--model_param_path models/resnet/parameters.json \
--out_dir filter_outputs \
--erase_old_log \
--save_as_npy \
--initialize_with_offline_calib \
--dataset_number 22 \
--visualize
```

## 在安卓上运行
安卓
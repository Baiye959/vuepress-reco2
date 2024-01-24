---
title: 准备学习环境
date: 2024/01/24
---
## 使用vmware安装CentOS 7

[CentOS7镜像](https://mirrors.aliyun.com/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso)

选“典型配置”新建虚拟机

安装、进入CentOS系统后，配置网卡
```
echo ONBOOT=yes >/etc/sysconf ig/network-scripts/ifcfg-ens33
```

配置好网卡后，重启虚拟机，执行`ip addr`，如果可看到192.168.xx.xx/24类似ip，则配置成功

## SecureCRT7.2的安装和配置
[SecureCRT7.2.3绿色版](/file/SecureCRT7.2.3绿色版.rar)

点击左上角第一个图标连接虚拟机，弹出窗口中第三个图标是创建新会话

配置会话：
1. "SSH2"中主机名填虚拟机ip，用户名填root
2. “终端”中“反空闲”-“发送协议”勾上，改成每30秒，防止长时间不操作自动断连（跟服务器连接时会有这种情况）
3. “外观”中可修改终端颜色和字体，需要修改字符编码为“UTF-8”（CentOS中默认的就是UTF-8）

配置完后连接，选“接受并保存”，随后的口令就是密码，勾上“保存口令”
#!/bin/bash

install_dir=/usr/local/Ascend/ascend-toolkit/latest/opp/vendors

rm -rf $install_dir
if [ -d "$install_dir" ];then
        echo "***********Vendors Init Failed************"
        exit 0
fi

rm -rf /root/SinhCustom*
if [ -d "/root/SinhCustom" ];then
        echo "***********Vendors Init Failed************"
        exit 0
fi

tar -zxf /home/HwHiAiUser/SinhCustom.tar.gz -C /root/
if [ -d "/root/SinhCustom" ];then
        echo "**************Environment Init Success**************"
else
        echo "**************Environment Init Failed**************"
fi


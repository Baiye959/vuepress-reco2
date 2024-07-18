---
title: 昇腾AI创新大赛集训营·杭州站
date: 2024/07/03
categories:
 - other
---
::: info
[https://www.hiascend.com/zh/developer/activities/details/118b868aa5fe4b759d9e407e914db905](https://www.hiascend.com/zh/developer/activities/details/118b868aa5fe4b759d9e407e914db905)
:::

## Ascend C算子开发

[Ascend C暑期优才班获奖规则&笔记提交专用贴\_Ascend C\_昇腾论坛 (hiascend.com)](https://www.hiascend.com/forum/thread-0272155182500277183-1-1.html "Ascend C暑期优才班获奖规则&笔记提交专用贴_Ascend C_昇腾论坛 (hiascend.com)")

[香橙派实验手册\_Ascend C\_昇腾论坛 (hiascend.com)](https://www.hiascend.com/forum/thread-0272155297687515207-1-1.html "香橙派实验手册_Ascend C_昇腾论坛 (hiascend.com)")

### 任务要求

修改add算子功能为sinh函数功能

### 操作步骤

#### 1. Orange Pi AI PRO的连接

参考文档：[以太网口远程登录（SSH方式）](https://www.hiascend.com/document/detail/zh/Atlas200IDKA2DeveloperKit/23.0.RC2/qs/qs_0017.html "以太网口远程登录（SSH方式）")

- 网线连接电脑和香橙派，香橙派ip一般为192.168.137.100，将电脑设为同一网段ip，如：192.167.137.101
- 使用MobaXterm连接香橙派，用户`root`，密码`Mind@123`

  ![](/image/image_TpbViomg7g.png)

#### 2. Orange Pi AI PRO中Add算子的检验（Kernel直调工程体验）

代码：[samples: CANN Samples (gitee.com)](https://gitee.com/ascend/samples "samples: CANN Samples (gitee.com)")

```bash
cd ~/samples/operator/AddCustomSample/KernelLaunch/
cp -r AddKernelInvocationNeo/ test
cd test/
bash run.sh -r cpu -v Ascend310P1
# 上述命令中cpu参数指定了执行命令的设备，-v Ascend310P1则是香橙派的npu版本型号
# 在不涉及npu的情况下，版本型号不会对结果造成影响。
```

![](/image/image_vKJsL1JKch.png)

#### 3. 将Add算子修改为Sinh并检验

- 修改`/root/samples/operator/AddCustomSample/KernelLaunch/test/scripts/gen_data.py`
  ```python
  input_x = np.random.uniform(1,10,[8,2048]).astype(np.float16)
  golden = np.sinh(input_x).astype(np.float16)

  ```
  ![](/image/image_7m17ZyVsh9.png)
- 修改`/root/samples/operator/AddCustomSample/KernelLaunch/test/add_custom.cpp`

  修改其中compute()函数，把“Add(xxxxxxxxxxxxxxxxx)”那一行注释掉，改成sinh的计算逻辑，用xLocal当输入，zLocal当输出

  [Exp-单目指令-矢量计算-基础API-Ascend C API-Ascend C API-算子开发接口-API参考-CANN社区版8.0.RC2.alpha003开发文档-昇腾社区 (hiascend.com)](https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC2alpha003/apiref/opdevgapi/atlasascendc_api_07_0034.html "Exp-单目指令-矢量计算-基础API-Ascend C API-Ascend C API-算子开发接口-API参考-CANN社区版8.0.RC2.alpha003开发文档-昇腾社区 (hiascend.com)")

  ![](/image/image_y6YgIWWMHT.png)

  可做优化，最简4条公式即可完成（数学公式优化），如下：
  ```c++
  Exp(xLocal, xLocal, TILE_LENGTH);
  Reciprocal(zLocal, xLocal, TILE_LENGTH); // 倒数
  Sub(zLocal, xLocal, zLocal, TILE_LENGTH);
  Muls(zLocal, zLocal, scalar, TILE_LENGTH);

  ```
- 测试，同第2步
  ```bash
  cd /root/samples/operator/AddCustomSample/KernelLaunch/test
  bash run.sh -r cpu -v Ascend310P1
  ```
  ![](/image/image_QZiUh5878w.png)

## Ascend C算子开发认证考试

[Ascend C算子开发能力认证考试（中级）](<https://www.hiascend.com/zh/exams/1697055344003670018?isCertification=false\&breadcrumbSecond=Ascend C算子开发能力认证（中级）\&source=/edu/certification\&sourceDetail=/edu/certification/detail/34bf904cb410497cb9c582be6c047ff7> "Ascend C算子开发能力认证考试（中级）")

参考笔记：[https://bbs.huaweicloud.com/blogs/418400](https://bbs.huaweicloud.com/blogs/418400 "https://bbs.huaweicloud.com/blogs/418400")


初始化环境：

[exam\_system\_init.sh](/file/exam_system_init_8AD7jD3bV7.sh "exam_system_init.sh")

```bash
bash exam_system_init.sh
```

## 比赛补充

[Ascend C算子开发（进阶）-昇腾社区 (hiascend.com)](https://www.hiascend.com/zh/developer/courses/detail/1696414606799486977 "Ascend C算子开发（进阶）-昇腾社区 (hiascend.com)")

往年比赛优秀代码（算子调优）：[operator\_contrib · Ascend/samples - 码云 - 开源中国 (gitee.com)](https://gitee.com/ascend/samples/tree/master/operator_contrib "operator_contrib · Ascend/samples - 码云 - 开源中国 (gitee.com)")


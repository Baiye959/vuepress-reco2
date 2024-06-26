---
title: 智能猫咪喂食器
date: 2024/06/26
categories:
 - 项目
---
:::info
[手机APP项目仓库链接](https://github.com/Baiye959/Cat-Feed)
:::

## 一、项目简介
使用树莓派打造智能猫咪喂食系统，您可以随时观看猫咪的生活，开启B站直播分享它的可爱瞬间。利用手机应用，您可以远程控制喂食时间和量，确保它们每天都能按时进食。系统还配备自动喂食功能，让您无需亲自在家时刻监督，为猫咪提供充足食物。而当猫粮快用完时，系统会及时提醒您及时补充，确保猫咪不会饿肚子。

## 二、项目实现
### 第一部分：查看猫猫（直播推流）

- 搭建视频流服务器

  [TareqAlqutami/rtmp-hls-server: 支持 RTMP、HLS 和 DASH 流的视频流服务器的 Docker 映像](https://github.com/TareqAlqutami/rtmp-hls-server "TareqAlqutami/rtmp-hls-server: 支持 RTMP、HLS 和 DASH 流的视频流服务器的 Docker 映像")
- 树莓派推流至视频流服务器

  [使用 树莓派4b + 官方CSI摄像头 + usb声卡 实现推流直播 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv12692603/ "使用 树莓派4b + 官方CSI摄像头 + usb声卡 实现推流直播 - 哔哩哔哩 (bilibili.com)")

  [树莓派FFmpeg与RTMP服务器：直播推流实战教程（一） (baidu.com)](https://cloud.baidu.com/article/3304913 "树莓派FFmpeg与RTMP服务器：直播推流实战教程（一） (baidu.com)")

  [使用树莓派搭建直播平台并推流至B站进行24小时直播（配套文档） - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv11094723/ "使用树莓派搭建直播平台并推流至B站进行24小时直播（配套文档） - 哔哩哔哩 (bilibili.com)")
  ```text
  raspivid -o - -t 0 -vf -hf -fps 30 -b 6000000 | ffmpeg -re -stream_loop -1 -i "./1.mp3" -f h264 -i - -vcodec copy -acodec aac -b:a 192k -f flv  "rtmp://192.168.177.204:1935"
  rtmp://10.30.76.54:1935/livehime
  rtmp://192.168.177.204:1935
  ffmpeg -f v4l2 -i /dev/video0 -an -flush_packets 1 -c:v libx264 -pix_fmt yuv420p -f flv "rtmp://165.154.221.62:1935/live/test"
  ffmpeg -f v4l2 -i /dev/video0 -an -c:v libx264 -pix_fmt yuv420p -f flv "rtmp://10.26.44.75:1935/live/test"

  ```
  ```bash
  rtmp://165.154.221.62:1935/live/test

  # 循环推送视频至服务器
  ffmpeg -re  -stream_loop -1 -i /dev/video0 -vcodec copy -acodec copy -f flv -y rtmp://10.26.44.75:1935/live/test
  ffmpeg -re  -stream_loop -1 -i 1.mp4 -vcodec copy -acodec copy -f flv -y rtmp://10.26.44.75:1935/live/test
  ```
- 测试直播源是否有效（使用vlc播放）

  ![](/image/image_e5UMT1I2DK.png)
  ```bash
  rtmp://165.154.221.62:1935/live/test
  ```
- 手机APP拉流
  ```bash
  // Initialize ExoPlayer
  exoPlayer = ExoPlayer.Builder(this).build().apply {
      val dataSourceFactory = RtmpDataSource.Factory()
      val rtmpMediaSource: MediaSource = ProgressiveMediaSource.Factory(dataSourceFactory)
          .createMediaSource(MediaItem.fromUri("rtmp://165.154.221.62:1935/live/test"))
      setMediaSource(rtmpMediaSource)
      prepare()
      playWhenReady = true
  }
  ```

### 第二部分：查看猫粮余量（物联网MQTT）

- （OneNET）物联网开放平台

  使用MQTT+数据流

  [OneNET - 数据流模型数据交互](https://open.iot.10086.cn/doc/v5/fuse/detail/923 "OneNET - 数据流模型数据交互")

  [OneNET - MQTT设备连接](https://open.iot.10086.cn/doc/v5/fuse/detail/919 "OneNET - MQTT设备连接")
- （树莓派）设备接入 + 发送数据 + 订阅上传成功/失败消息
  ```bash
  pip install paho-mqtt
  ```
  ```python
  import paho.mqtt.client as mqtt
  import time
  import random

  ServerUrl = "mqtts.heclouds.com" # 服务器url
  ServerPort = 1883 # 服务器端口
  DeviceName="test_pi" # 设备ID
  Productid = "TRZ54Siy6T" # 产品ID
  passw = "version=2018-10-31&res=products%2FTRZ54Siy6T%2Fdevices%2Ftest_pi&et=1725379200&method=sha1&sign=5JeKfZPkgE6kC%2BxXT5n%2BCpxEgb0%3D" # token

  # 发布的topic
  Pub_topic1 = "$sys/"+Productid+"/"+ DeviceName+"/dp/post/json"

  #需要订阅的topic
  #数据上传成功的消息
  Sub_topic1 = "$sys/"+Productid+"/"+DeviceName+"/dp/post/json/accepted"
  #接收数据上传失败的消息
  Sub_topic2 = "$sys/"+Productid+"/"+DeviceName+"/dp/post/json/rejected"

  #测试用json数据格式
  jsonstr = "{\"id\": 123,\"dp\": {\"test\": [{\"v\": 20}]}}"

  def get_jsonstr():
      random_number = random.randint(0, 30)
      ret = "{\"id\": 123,\"dp\": {\"test\": [{\"v\": "+ str(random_number) + "}]}}"
      return ret


  def on_subscribe(client, userdata, mid, reason_code_list, properties):
      # Since we subscribed only for a single channel, reason_code_list contains
      # a single entry
      if reason_code_list[0].is_failure:
          print(f"Broker rejected you subscription: {reason_code_list[0]}")
      else:
          print(f"Broker granted the following QoS: {reason_code_list[0].value}")


  def on_unsubscribe(client, userdata, mid, reason_code_list, properties):
      # Be careful, the reason_code_list is only present in MQTTv5.
      # In MQTTv3 it will always be empty
      if len(reason_code_list) == 0 or not reason_code_list[0].is_failure:
          print("unsubscribe succeeded (if SUBACK is received in MQTTv3 it success)")
      else:
          print(f"Broker replied with failure: {reason_code_list[0]}")
      client.disconnect()

  # 当客户端收到来自服务器的CONNACK响应时的回调。也就是申请连接，服务器返回结果是否成功等
  def on_connect(client, userdata, flags, reason_code, properties):
      if reason_code.is_failure:
          print(f"Failed to connect: {reason_code}. loop_forever() will retry connection")
      else:
          # we should always subscribe from on_connect callback to be sure
          # our subscribed is persisted across reconnections.
          print("连接结果:" + mqtt.connack_string(reason_code))
          #连接成功后就订阅topic
          client.subscribe(Sub_topic1)
          client.subscribe(Sub_topic2)

  # 从服务器接收发布消息时的回调。
  def on_message(client, userdata, message):
      print(str(message.payload,'utf-8'))

  #当消息已经被发送给中间人，on_publish()回调将会被触发
  def on_publish(client, userdata, mid):
      print(str(mid))

  def main():
      print(passw)
      mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2,DeviceName)
      mqttc.on_connect = on_connect
      mqttc.on_message = on_message
      mqttc.on_subscribe = on_subscribe
      mqttc.on_unsubscribe = on_unsubscribe

      mqttc.connect(ServerUrl, port=ServerPort, keepalive=120)
      mqttc.username_pw_set(Productid,passw)
      mqttc.loop_start()

      
      while(1):
          mqttc.publish(Pub_topic1, get_jsonstr(), qos=0)
          time.sleep(2)

  if __name__ == '__main__':
      main()
  ```
  树莓派测试成功

  ![](/image/image_Em8q51hXKO.png)

  ![](/image/image_X_L00m94b2.png)
- （安卓APP）API请求

  [OneNET - 查询设备数据点](https://open.iot.10086.cn/doc/v5/fuse/detail/1431 "OneNET - 查询设备数据点")

  [OneNET - 安全鉴权](https://open.iot.10086.cn/doc/v5/fuse/detail/1464 "OneNET - 安全鉴权")

### 第三部分：自动喂食（树莓派：猫脸识别+控制舵机）

树莓派实现功能简述：

- 通过超声波传感器监测猫粮剩余量，推送至OneNET平台
- 通过摄像头检测猫猫的状态，将视频实时推送到视频流服务器
- 检测猫猫是否出现在猫粮机面前，综合猫碗中猫碗高度，通过控制舵机进行投喂

功能实现：

#### 1、虚拟环境配置

[   http://t.csdnimg.cn/GMxFo](http://t.csdnimg.cn/GMxFo "   http://t.csdnimg.cn/GMxFo")

- 安装virtualenv和virtualenvwrapper
  ```bash
  sudo apt-get install virtualenv
  sudo apt-get install virtualenvwrapper

  ```
- 配置virtualenvwrapper
  ```bash
  sudo nano ~/.bashrc
  ```
  以下命令行加入到\~/.bashrc的最后
  ```bash
  #export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
  export WORKON_HOME=$HOME/.virtualenvs
  source /usr/share/virtualenvwrapper/virtualenvwrapper.sh
  ```
- 输入命令运行
  ```bash
  source ~/.bashrc
  ```
- 新建虚拟环境
  ```bash
  cd CodeSpace/2 # 切换到想存放虚拟环境的目录
  which python # 找一下python目录，这里是/usr/bin/python
  virtualenv -p /usr/bin/python venv2 # venv2是虚拟环境的名字
  ```
  ![](/image/image_wOkSf-Sj1b.png)

  ![](/image/image_DfWHr9PFss.png)
- 开启虚拟环境
  ```bash
  source /home/baiye959/CodeSpace/2/venv2/bin/activate
  ```
  ![](/image/image_Tbc4ctSb5S.png)
- 常用命令
  ```bash
  deactivate # 退出虚拟环境
  rm virtualenv 环境名 # 删除虚拟环境
  pip freeze > requirements.txt # 导出依赖到requirements.txt文件
  pip install –r requirements.txt # 安装requirements.txt文件中的依赖
  ```

#### 2、猫脸识别

- 环境配置
  ```sql
   pip install opencv-python -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.tuna.tsinghua.edu.cn
   pip install flask -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.tuna.tsinghua.edu.cn
  ```
- 模型接入

  [目标检测  |  TensorFlow Lite](https://www.tensorflow.org/lite/examples/object_detection/overview?hl=zh-cn "目标检测  |  TensorFlow Lite")
- 识别猫脸

  识别tag为cat就发起提醒

#### 3、控制电机

```python
from gpiozero import DistanceSensor
from time import sleep
import cv2
import numpy as np
import tflite_runtime.interpreter as tflite
from PIL import Image
import re
import time
import RPi.GPIO as GPIO

# 设置超声波传感器引脚
sensor = DistanceSensor(14, 15) # 本传感器检测喂食器前物体距离
sensor2 = DistanceSensor(14, 15) # 本传感器检测碗中猫粮高度
# 设置电机引脚
pin_2 = 2
pin_3 = 3
pin_17 = 17
pin_27 = 27
# 设置摄像头参数
CAMERA_WIDTH = 640
CAMERA_HEIGHT = 480


# ******************** 此处开始猫脸识别函数 ********************
def init_model():
    model_path = 'data/detect.tflite'
    label_path = 'data/coco_labels.txt'

    cap = cv2.VideoCapture(0)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, CAMERA_WIDTH)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, CAMERA_HEIGHT)
    cap.set(cv2.CAP_PROP_FPS, 15)

    interpreter = load_model(model_path)
    labels = load_labels(label_path)

    input_details = interpreter.get_input_details()

    input_shape = input_details[0]['shape']
    height = input_shape[1]
    width = input_shape[2]

    input_index = input_details[0]['index']

    return cap, width, height, interpreter, input_index, labels


def load_labels(label_path):
    with open(label_path) as f:
        labels = {}
        for line in f.readlines():
            m = re.match(r"(\d+)\s+(\w+)", line.strip())
            labels[int(m.group(1))] = m.group(2)
        return labels


def load_model(model_path):
    interpreter = tflite.Interpreter(model_path=model_path)
    interpreter.allocate_tensors()
    return interpreter


def process_image(interpreter, image, input_index):
    # 添加批处理维度
    input_data = np.expand_dims(image, axis=0)
    # 设置输入张量
    interpreter.set_tensor(input_index, input_data)
    # 运行推理
    interpreter.invoke()

    # 获取输出结果张量
    output_details = interpreter.get_output_details()
    positions = np.squeeze(interpreter.get_tensor(output_details[0]['index']))   # 检测框位置归一化坐标
    classes = np.squeeze(interpreter.get_tensor(output_details[1]['index']))   # 检测出的类别标签
    scores = np.squeeze(interpreter.get_tensor(output_details[2]['index']))   # 检测置信度

    # 处理检测结果，若置信度>0.5，则保存对应检测框位置坐标和检测出的类别标签
    result = []
    for idx, score in enumerate(scores):
        if score > 0.5:
            result.append({'pos': positions[idx], '_id': classes[idx]})
    return result
    

# ******************** 此处开始电机控制函数 ********************
# 初始化电机引脚
def init():
    GPIO.setmode(GPIO.BCM)  # 设置引脚的编码方式
    GPIO.setwarnings(False)
    GPIO.setup(pin_2, GPIO.OUT)
    GPIO.setup(pin_3, GPIO.OUT)
    GPIO.setup(pin_17, GPIO.OUT)
    GPIO.setup(pin_27, GPIO.OUT)

# 控制电机
def setStep(w1, w2, w3, w4):
    GPIO.output(pin_2, w1)
    GPIO.output(pin_3, w2)
    GPIO.output(pin_17, w3)
    GPIO.output(pin_27, w4)

# 控制电机正转
def forward(delay):
    setStep(1, 0, 0, 0)
    time.sleep(delay)
    setStep(0, 1, 0, 0)
    time.sleep(delay)
    setStep(0, 0, 1, 0)
    time.sleep(delay)
    setStep(0, 0, 0, 1)
    time.sleep(delay)

# 控制电机反转
def backward(delay):
    setStep(0, 0, 0, 1)
    time.sleep(delay)
    setStep(0, 0, 1, 0)
    time.sleep(delay)
    setStep(0, 1, 0, 0)
    time.sleep(delay)
    setStep(1, 0, 0, 0)
    time.sleep(delay)

# 喂食（电机动作：正转90度，延时1秒，反转90度）
def dianji():
    delay = 2  # 延时 2ms
    
    init()

    for i in range(0, 128, 1): 
        backward(int(delay) / 1000.0)
    time.sleep(1)
    for i in range(0, 128, 1):
        forward(int(delay) / 1000.0)

    GPIO.cleanup()


# ******************** 此处开始主函数 ********************
def main():
    cap, width, height, interpreter, input_index, labels = init_model()

    while True:
        distance = sensor.distance * 100  # 转换为厘米
        if distance < 20:  # 物体在20cm以内被检测到
            
            # 检测到物体后开启摄像头
            ret, frame = cap.read()
            image = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
            image = image.resize((width, height))
            # 模型推测
            top_result = process_image(interpreter, image, input_index)
            # 判断是否检测到猫，标签中是否出现"cat"
            pedestrian_detected = any(labels[int(obj['_id'])] == 'cat' for obj in top_result)
            # 若检测到猫，则判断是否应该喂食
            if pedestrian_detected:
                # 此处根据碗中猫粮高度判断是否要喂食
                distance2 = sensor2.distance * 100  # 转换为厘米
                if distance2 > 10:
                    dianji()
        # 若周围没有检测到物体
        else:
            ret, frame = cap.read()

        key = cv2.waitKey(1)
        if key == 27:  # 按下Esc键退出
            break
    
    cap.release()
    # cv2.destroyAllWindows()


if __name__ == "__main__":
    main()

```

## 三、项目展示

### 手机APP

[Baiye959/Cat-Feed (github.com)](https://github.com/Baiye959/Cat-Feed "Baiye959/Cat-Feed (github.com)")

![](/image/71shots_so_gl5ODLVBd2.png)

手机APP功能简述：

- 通过视频的方式，实时查看喂食机面前猫情况
- 显示猫粮剩余量
- 手机端提醒喂食机中猫粮储备量不足

### 喂食机（树莓派）

![](/image/喂食器_pbQdrhvcW1.png)

- test4.py

```c
import paho.mqtt.client as mqtt
import time
import random
from gpiozero import DistanceSensor


sensor = DistanceSensor(14, 15) # 本传感器检测与瓶中猫粮的距离
ServerUrl = "mqtts.heclouds.com" # 服务器url
ServerPort = 1883 # 服务器端口
DeviceName="test_pi" # 设备ID
Productid = "TRZ54Siy6T" # 产品ID
passw = "version=2018-10-31&res=products%2FTRZ54Siy6T%2Fdevices%2Ftest_pi&et=1725379200&method=sha1&sign=5JeKfZPkgE6kC%2BxXT5n%2BCpxEgb0%3D" # token

# 发布的topic
Pub_topic1 = "$sys/"+Productid+"/"+ DeviceName+"/dp/post/json"

#需要订阅的topic
#数据上传成功的消息
Sub_topic1 = "$sys/"+Productid+"/"+DeviceName+"/dp/post/json/accepted"
#接收数据上传失败的消息
Sub_topic2 = "$sys/"+Productid+"/"+DeviceName+"/dp/post/json/rejected"

#测试用json数据格式
jsonstr = "{\"id\": 123,\"dp\": {\"test\": [{\"v\": 20}]}}"

def get_jsonstr():
    # random_number = random.randint(0, 30)
    distance = int(sensor.distance * 100)  # 转换为厘米
    remainHeight = 30 - distance
    if remainHeight < 0:
        remainHeight = 0
    ret = "{\"id\": 123,\"dp\": {\"test\": [{\"v\": "+ str(remainHeight) + "}]}}"
    return ret


def on_subscribe(client, userdata, mid, reason_code_list, properties):
    # Since we subscribed only for a single channel, reason_code_list contains
    # a single entry
    if reason_code_list[0].is_failure:
        print(f"Broker rejected you subscription: {reason_code_list[0]}")
    else:
        print(f"Broker granted the following QoS: {reason_code_list[0].value}")


def on_unsubscribe(client, userdata, mid, reason_code_list, properties):
    # Be careful, the reason_code_list is only present in MQTTv5.
    # In MQTTv3 it will always be empty
    if len(reason_code_list) == 0 or not reason_code_list[0].is_failure:
        print("unsubscribe succeeded (if SUBACK is received in MQTTv3 it success)")
    else:
        print(f"Broker replied with failure: {reason_code_list[0]}")
    client.disconnect()

# 当客户端收到来自服务器的CONNACK响应时的回调。也就是申请连接，服务器返回结果是否成功等
def on_connect(client, userdata, flags, reason_code, properties):
    if reason_code.is_failure:
        print(f"Failed to connect: {reason_code}. loop_forever() will retry connection")
    else:
        # we should always subscribe from on_connect callback to be sure
        # our subscribed is persisted across reconnections.
        print("连接结果:" + mqtt.connack_string(reason_code))
        #连接成功后就订阅topic
        client.subscribe(Sub_topic1)
        client.subscribe(Sub_topic2)

# 从服务器接收发布消息时的回调。
def on_message(client, userdata, message):
    print(str(message.payload,'utf-8'))

#当消息已经被发送给中间人，on_publish()回调将会被触发
def on_publish(client, userdata, mid):
    print(str(mid))

def main():
    print(passw)
    mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2,DeviceName)
    mqttc.on_connect = on_connect
    mqttc.on_message = on_message
    mqttc.on_subscribe = on_subscribe
    mqttc.on_unsubscribe = on_unsubscribe

    mqttc.connect(ServerUrl, port=ServerPort, keepalive=120)
    mqttc.username_pw_set(Productid,passw)
    mqttc.loop_start()

    
    while(1):
        mqttc.publish(Pub_topic1, get_jsonstr(), qos=0)
        time.sleep(2)

if __name__ == '__main__':
    main()
```

- detect.py

```c
from gpiozero import DistanceSensor
import cv2
import numpy as np
import tflite_runtime.interpreter as tflite
from PIL import Image
import re
import time
import RPi.GPIO as GPIO

# 设置超声波传感器引脚
sensor2 = DistanceSensor(24, 23) # 本传感器检测碗中猫粮高度
# 设置电机引脚
pin_2 = 2
pin_3 = 3
pin_17 = 17
pin_27 = 27
# 设置摄像头参数
CAMERA_WIDTH = 640
CAMERA_HEIGHT = 480


# ******************** 此处为测试函数 ********************
# def sensor1():
#     while 1:
#         distance2 = sensor2.distance * 100  # 转换为厘米
#         print(distance2)
#         time.sleep(2)

# sensor1()


# ******************** 此处开始猫脸识别函数 ********************
def init_model():
    model_path = 'data/detect.tflite'
    label_path = 'data/coco_labels.txt'

    cap = cv2.VideoCapture(0)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, CAMERA_WIDTH)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, CAMERA_HEIGHT)
    cap.set(cv2.CAP_PROP_FPS, 15)

    interpreter = load_model(model_path)
    labels = load_labels(label_path)

    input_details = interpreter.get_input_details()

    input_shape = input_details[0]['shape']
    height = input_shape[1]
    width = input_shape[2]

    input_index = input_details[0]['index']

    return cap, width, height, interpreter, input_index, labels


def load_labels(label_path):
    with open(label_path) as f:
        labels = {}
        for line in f.readlines():
            m = re.match(r"(\d+)\s+(\w+)", line.strip())
            labels[int(m.group(1))] = m.group(2)
        return labels


def load_model(model_path):
    interpreter = tflite.Interpreter(model_path=model_path)
    interpreter.allocate_tensors()
    return interpreter


def process_image(interpreter, image, input_index):
    # 添加批处理维度
    input_data = np.expand_dims(image, axis=0)
    # 设置输入张量
    interpreter.set_tensor(input_index, input_data)
    # 运行推理
    interpreter.invoke()

    # 获取输出结果张量
    output_details = interpreter.get_output_details()
    positions = np.squeeze(interpreter.get_tensor(output_details[0]['index']))   # 检测框位置归一化坐标
    classes = np.squeeze(interpreter.get_tensor(output_details[1]['index']))   # 检测出的类别标签
    scores = np.squeeze(interpreter.get_tensor(output_details[2]['index']))   # 检测置信度

    # 处理检测结果，若置信度>0.5，则保存对应检测框位置坐标和检测出的类别标签
    result = []
    for idx, score in enumerate(scores):
        if score > 0.5:
            result.append({'pos': positions[idx], '_id': classes[idx]})
    return result


# ******************** 此处开始电机控制函数 ********************
# 初始化电机引脚
def init():
    GPIO.setmode(GPIO.BCM)  # 设置引脚的编码方式
    GPIO.setwarnings(False)
    GPIO.setup(pin_2, GPIO.OUT)
    GPIO.setup(pin_3, GPIO.OUT)
    GPIO.setup(pin_17, GPIO.OUT)
    GPIO.setup(pin_27, GPIO.OUT)

# 控制电机
def setStep(w1, w2, w3, w4):
    GPIO.output(pin_2, w1)
    GPIO.output(pin_3, w2)
    GPIO.output(pin_17, w3)
    GPIO.output(pin_27, w4)

# 控制电机正转
def forward(delay):
    setStep(1, 0, 0, 0)
    time.sleep(delay)
    setStep(0, 1, 0, 0)
    time.sleep(delay)
    setStep(0, 0, 1, 0)
    time.sleep(delay)
    setStep(0, 0, 0, 1)
    time.sleep(delay)

# 控制电机反转
def backward(delay):
    setStep(0, 0, 0, 1)
    time.sleep(delay)
    setStep(0, 0, 1, 0)
    time.sleep(delay)
    setStep(0, 1, 0, 0)
    time.sleep(delay)
    setStep(1, 0, 0, 0)
    time.sleep(delay)

# 喂食（电机动作：正转5秒，延时1秒，反转5秒）
def dianji():
    delay = 2  # 延时 2ms
    
    init()

    for i in range(0, 512, 1): 
        backward(int(delay) / 1000.0)
    time.sleep(1)
    for i in range(0, 512, 1):
        forward(int(delay) / 1000.0)

    GPIO.cleanup()


# ******************** 此处开始主函数 ********************
def main():
    cap, width, height, interpreter, input_index, labels = init_model()

    while True:
        # 开启摄像头
        ret, frame = cap.read()
        image = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
        image = image.resize((width, height))
        # 模型推测
        top_result = process_image(interpreter, image, input_index)
        # 判断是否检测到猫，标签中是否出现"cat"
        pedestrian_detected = any(labels[int(obj['_id'])] == 'cat' for obj in top_result)
        
        # 若检测到猫，则判断是否应该喂食
        if pedestrian_detected:
            print("检测到猫")
            # 此处根据碗中猫粮高度判断是否要喂食
            distance2 = sensor2.distance * 100  # 转换为厘米
            print("碗中猫粮高度为：", int(20 - distance2), "厘米")
            if distance2 > 10:
                dianji()

        else:
            print("未检测到猫")

        time.sleep(1)

        key = cv2.waitKey(1)
        if key == 27:  # 按下Esc键退出
            break
    
    cap.release()
    # cv2.destroyAllWindows()


if __name__ == "__main__":
    main()

```

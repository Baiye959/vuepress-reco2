---
title: 路口违规识别（华为云服务器 + IoTDA）
date: 2024/01/23
# categories:
#  - 项目
---

## 项目描述

### 技术路线

部署：Apache2    Gevent

数据库：MySQL    Flask

前端：html+css+js

地图：leafLet

物联网：华为云IotDA    MQTT协议

低代码：华为云Astro

### 答辩准备

设计AI劝导员，辅助交警工作。

5分钟演示。重点突出海思的应用。

海思3861：物联网、通信

海思3516：AI检测、播放语音、控制亮灯

服务器、网页、APP

背景

搭建好的场景+部件逐个讲解

实物演示（APP同步共享屏幕）+web&服务器（共享屏幕）

语音播报问题：专用耳机？


## 🤖开发记录

### Astro业务大屏

[图解Astro大屏应用\_Astro轻应用 AstroZero\_用户指南（Astro大屏应用）\_华为云 (huaweicloud.com)](https://support.huaweicloud.com/usermanualcanvas-astrozero/astrozero_05_6000.html "图解Astro大屏应用_Astro轻应用 AstroZero_用户指南（Astro大屏应用）_华为云 (huaweicloud.com)")

MySQL一条sql语句查出表中不同字段（列）的数量

```sql
select count( DISTINCT address ) 路口数量 from road_record
```

![](/image/944bbcf50112fbf4f5ac2ac0d7ef521_8DnVCikbwE.png)

MySQL 统计同一字段不同值的个数

```sql
SELECT address,count(*) num FROM road_record GROUP BY address;
```

![](/image/15c41e713fda81a3d0fbe18c64a3619_txHsCXN8is.png)

MySQL去重同一列的重复数据

```sql
select distinct(address) from road_record
```

![](/image/74ee6c5eceb957be72e18ea1619250d_o6M0VApWAh.png)

MySQL倒序查询

```sql
select color from light_color order by color_id desc limit 1;
```

时间处理

[(4条消息) MySQL日期时间操作函数（挺全的）\_mysql日期函数\_HaleyTiger的博客-CSDN博客](https://blog.csdn.net/hu1010037197/article/details/115391335 "(4条消息) MySQL日期时间操作函数（挺全的）_mysql日期函数_HaleyTiger的博客-CSDN博客")

```sql
select EXTRACT(DAY FROM time),count(*) num from road_record GROUP BY EXTRACT(DAY FROM time);
```

### 地图补充类似热力图功能（违规记录越多 区域颜色越深）

[ Interactive Choropleth Map - Leaflet - a JavaScript library for interactive maps  https://leafletjs.com/examples/choropleth/](https://leafletjs.com/examples/choropleth/ " Interactive Choropleth Map - Leaflet - a JavaScript library for interactive maps  https://leafletjs.com/examples/choropleth/")

![](/image/image_DrudP-46HV.png)

最终效果

![](/image/image_s3qugh5vx2.png)

### 展示红绿灯状态（亮灯）

1.  板子上传数据至物联网云平台，物联网云平台转发信息至服务器
2.  服务器接收数据，插入数据库
3.  网页获取数据库最新信息

#### 数据库

创建数据表命令

![](/image/image_LTBt3VVcVj.png)

```sql
CREATE TABLE IF NOT EXISTS `light`( // 未使用
    `light_id` INT UNSIGNED AUTO_INCREMENT,
    `state` VARCHAR(100) NOT NULL,
    `second` VARCHAR(40) NOT NULL,
    PRIMARY KEY ( `light_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
 CREATE TABLE IF NOT EXISTS `light_color`(
    `color_id` INT UNSIGNED AUTO_INCREMENT,
    `color` VARCHAR(50) NOT NULL,
    PRIMARY KEY ( `color_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

数据表列表

![](/image/fdd34aa9637c23152b727b2e8a38fe4_T-Ehl_-Eaz.png)

![](/image/6fc96c84c27f38e38d3f4edcd84c76b_cvw8OR1Na_.png)

#### 服务器

`client.on('message', function (topic, message) { }`

**服务器**持续接收**物联网云平台**命令，接收后立即执行函数，将数据插入mysql→traffic→light

需检验：message的解析

```javascript
// 命令下发响应(接收红绿灯状态)
client.on('message', function (topic, message) {
    log('received message is ' + message.toString());

    var jsonMsg = responseReq;
    client.publish(getResponseTopic(topic.toString().split("=")[1]), jsonMsg);
    log('responsed message is ' + jsonMsg);



    // 根据message解析出state（红绿灯状态）和second（状态剩余秒数）
    var paras = message['paras']
    var state = paras['state']
    var second = paras['second']


    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log(err)
        }
        var addSql = 'INSERT INTO light_record(state, second) VALUES(?,?)';
        var addSqlParams = [state, second];
        //增
        connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }

            console.log('--------------------------INSERT----------------------------');
            //console.log('INSERT ID:',result.insertId);        
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------\n\n');
        });

        connection.release();
    });
})

```

### 如何添加同时带端口和路径的地址？

app.py为flask实现文件，将该文件下实现的方法渲染至指定端口。（此时页面路径为"[http://123.60.185.153:8089](http://123.60.185.153/map.html "http://123.60.185.153:8089")"）

```python
from flask import Flask, render_template ,jsonify, make_response
from gevent import pywsgi # pywsgi: flask开发环境转生产环境

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
app.config['JSONIFY_MIMETYPE'] = 'application/json'


if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=8089)
    server = pywsgi.WSGIServer(('0.0.0.0', 8089), app)
    server.serve_forever()

```

在此基础（已有端口）上添加路径。将数据库数据渲染至指定的页面中，在页面中跳转路径即可（下方路径为"[http://123.60.185.153:8089/](http://123.60.185.153/map.html "http://123.60.185.153:8089/")\<address>/"）

```python
@app.route('/<address>/')
def index(address):
# 查询数据
  results = query_db('SELECT time FROM road_record WHERE address = "' + str(address) + '";')
# 统计每个时间段（四个小时）的记录数
  counts = {}
  for row in results:
    time = row[0]
    hour = int(time.split(':')[0][-2:])//4
    data = time.split(' ')[0]
    key = f'{data} {hour*4:02d}:00--{(hour+1)*4:02d}:00'
    counts[key] = counts.get(key , 0) + 1
# 将数据转换为字典列表
  data = []
  for key , count in counts.items():
    data.append({
      'time':key ,
      'count':count
    })
    # if not data:
#   return "No data acailable"
# 渲染模板
  return render_template('index.html', data=data)
```

下方路径为"[http://123.60.185.153:8089/](http://123.60.185.153/map.html "http://123.60.185.153:8089/")\<address>/data/"

```python
@app.route('/<address>/data/')
# @app.route('/data')
def data(address):
# def data():
  # 查询数据
  # results = query_db("SELECT time FROM road;")
  results = query_db('SELECT time FROM road_record WHERE address = "' + str(address) + '";')
  # 统计每个时间段（四个小时）的记录数
  counts = {}
  for row in results:
    time = row[0]
    hour = int(time.split(':')[0][-2:])//4
    data = time.split(' ')[0]
    key = f'{data} {hour*4:02d}:00--{(hour+1)*4:02d}:00'
    counts[key] = counts.get(key , 0) + 1
# 将数据转换为字典列表
  data = []
  for key , count in counts.items():
    data.append({
      'time':key ,
      'count':count
    })
  
  response = make_response(jsonify(data))
      
  if not data:
    return "No data acailable"
  # response.headers['Content-Type']='application/json'
  return response
  # return render_template('index.html', data=data)
```

### 如何分辨路径？

在js中利用window\.location.href获得当前路径，split方法分离出当前address

```python
url = window.location.href;
// url = "http://123.60.185.153:8089/Xiangan%20Street/"
var address = (url.split('/'))[3]
// address = "Xiangan%20Street"

```

### 如何将当前路径与数据库查询接口结合？（select street\_name）

```python
results = query_db('SELECT time FROM road_record WHERE address = "' + str(address) + '";')
```

## 🐞debug记录

### vscode远程连接

安装插件Remote - SSH

登录时注意格式为 username\@ip，直接用ip无法进入

点击vscode中的“打开文件夹”，即可开始编辑代码

### 地图无法显示

地图数据是外网的，客户端需要更改ip地址

### 地图显示不覆盖页面

css修改尺寸为100vh

### 已开放端口8089，但加载不成功

flask对应py文件未运行，使用screen后台运行即可

```bash
screen -S screen_name
python app.py
Ctrl-A Ctrl-D
```

补充：screen可能发生运行时间不长的情况，改用docker

[Docker 容器使用 | 菜鸟教程 (runoob.com)](https://www.runoob.com/docker/docker-container-usage.html "Docker 容器使用 | 菜鸟教程 (runoob.com)")

[(1条消息) docker基础知识之挂载本地目录\_docker 挂载目录\_\_世纪末的魔术师\_的博客-CSDN博客](https://blog.csdn.net/weixin_37773766/article/details/80702926 "(1条消息) docker基础知识之挂载本地目录_docker 挂载目录__世纪末的魔术师_的博客-CSDN博客")

docker可以支持把一个宿主机上的目录挂载到镜像里。

```bash
docker run -it -v /home/dock/Downloads:/usr/Downloads ubuntu64 /bin/bash
```

通过-v参数，冒号前为宿主机目录，必须为绝对路径，冒号后为镜像内挂载的路径。

### 获取数据的api data不成功，500报错

查看报错，大意为找不到表road

查看mysql后发现是mqsql指令中表的名字错误，改为road\_record

### Flask获取的mysql数据库数据不是最新的

1.  flask部署教程 （本项目用了Gevent） [独立 WSGI 容器\_Flask中文网](https://flask.net.cn/deploying/wsgi-standalone.html "独立 WSGI 容器_Flask中文网")
2.  在你的代码中，`query_db` 函数执行查询数据库的操作。然而，在每个路由处理函数中，你调用了 `query_db` 函数来获取数据，但是没有显式地提交数据库的更改。

    如果你在查询之后做出了更改（例如插入、更新或删除操作），那么应该调用 `db.commit()` 来提交更改，以确保下一次查询获取到的是最新的数据。

    修改你的代码，在每个路由处理函数中，在获取数据之后添加 `db.commit()`，如下所示：
    ```python
    @app.route('/<address>/')
    def index(address):
        # 查询数据
        results = query_db('SELECT * FROM road_record WHERE address = "' + str(address) + '" order by Time_id desc limit 10;')

        # ... 其他处理逻辑

        db.commit()  # 提交更改

        # 渲染模板以及返回结果

    ```
3.  获取数据改为异步方法，在plot.js中手动按秒持续进行更新
4.  运行app.py文件
    ```bash
    python app.py
    ```

### 物联网平台IoTDA

将服务器数据传到物联网平台

【华为云物联网开发（一）设备上云】 [https://www.bilibili.com/video/BV1Md4y1v7m5/?share\_source=copy\_web\&vd\_source=ae116ba1453d272bfc648f15df41bed0](https://www.bilibili.com/video/BV1Md4y1v7m5/?share_source=copy_web\&vd_source=ae116ba1453d272bfc648f15df41bed0 "https://www.bilibili.com/video/BV1Md4y1v7m5/?share_source=copy_web\&vd_source=ae116ba1453d272bfc648f15df41bed0")

[Node.js Demo使用说明\_设备接入 IoTDA\_开发指南\_设备侧开发\_使用MQTT Demo接入\_华为云 (huaweicloud.com)](https://support.huaweicloud.com/devg-iothub/iot_02_2133.html "Node.js Demo使用说明_设备接入 IoTDA_开发指南_设备侧开发_使用MQTT Demo接入_华为云 (huaweicloud.com)")

#### 实现方法

1.  物联网平台操作

先在物联网平台上创建产品，然后定义模型，再添加服务。

服务下面有属性和命令。属性用于设备侧上传，设置了与数据库一样的信息格式（含state:string）。

![](/image/image_LTBt3VVcVj.png)

1.  服务器操作

数据库没找到监控方法，目前使用异步方法每两秒查询一次，如果信息改变就用官方的mqtt nodejs代码将最新信息上报物联网平台。

```javascript
client.on('connect', function () {
    log("connect to mqtt server success, deviceId is " + deviceId);
    
    client.options.reconnectPeriod = 1000;

    retryTimes = 0;

    //订阅Topic
    subScribeTopic();
});



var last_result;
var new_result;

function queryAndReport() {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
        }
        
        //发送最新的记录
        var sql = 'SELECT * FROM road_record order by  time desc limit 1';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
            }
            console.log(result);
          
            new_result = result;
            if (JSON.stringify(new_result) != JSON.stringify(last_result)) {
                console.log('result change!');
                var propertiesReportJson = {'services':[{'properties':new_result[0],'service_id':'servertest','event_time':null}]};
                var propertiesReport = JSON.stringify(propertiesReportJson);

                publishMessage(propertiesReport);
                
                connection.release();
                last_result = new_result;

                //查询成功后，在这里设置一个timeout，2秒后再次查询和上报
                setTimeout(queryAndReport, 2000);
                
            } else {
                console.log('result not change!');
                connection.release();

                //查询结果没有变化，2秒后再次查询和上报
                setTimeout(queryAndReport, 2000);
            }

        });
        // connection.release();
    });
}

// 第一次查询和上报
queryAndReport();

```

#### 最终效果

![](/image/image_1uY2levIO6.png)

### mysql数据库建库失败

[在 Ubuntu 上安装和配置 MySQL 保姆级教程 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/610793026 "在 Ubuntu 上安装和配置 MySQL 保姆级教程 - 知乎 (zhihu.com)")

#### mysql数据库最高权限用户失效

停止已经运行的 MySQL 进程

```bash
sudo service mysql stop

```

在终端或命令提示符中以 `--skip-grant-tables` 选项启动 MySQL 服务器。

```bash
sudo mysqld_safe --skip-grant-tables &

```

连接到 MySQL 服务器。

```bash
mysql -u root

```

进入mysql数据库的user数据表，修改root用户的若干权限为Y

```bash
use mysql;
UPDATE user SET Grant_priv='Y', Super_priv='Y' WHERE User='root';

```

#### mysqld\_safe Directory '/var/run/mysqld' for UNIX socket file don't exists.

手动创建该目录并赋予适当的权限，然后再次尝试启动 `mysqld_safe` 进程

```bash
sudo mkdir -p /var/run/mysqld
sudo chown mysql:mysql /var/run/mysqld

```

然后，重新运行以下命令来启动 `mysqld_safe` 进程：

```bash
sudo mysqld_safe --skip-grant-tables &

```

显示如下则启动成功

![](/image/image_-HjRyLM9mJ.png)

#### 停止mysql服务后重启，仍mysqld\_safe A mysqld process already exists

查询mysql相关进程

```bash
ps aux | grep mysql
```

停止进程

```bash
sudo kill -9 37260
```

#### 所需数据库及表

```sql
CREATE TABLE IF NOT EXISTS `light`( // 未使用
    `light_id` INT UNSIGNED AUTO_INCREMENT,
    `state` VARCHAR(100) NOT NULL,
    `second` VARCHAR(40) NOT NULL,
    PRIMARY KEY ( `light_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
CREATE TABLE IF NOT EXISTS `device_record`(
    `Time_id` INT UNSIGNED AUTO_INCREMENT,
    `Time` varchar(64) NOT NULL  COMMENT 'times',
    `address` varchar(64) NOT NULL  COMMENT 'place ',
    `fig_name` varchar(64) NOT NULL  COMMENT 'figure name',
    `state` varchar(64) NOT NULL,
    PRIMARY KEY (`Time_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
 CREATE TABLE IF NOT EXISTS `road_record`(
    `Time_id` INT UNSIGNED AUTO_INCREMENT,
    `Time` varchar(64) NOT NULL  COMMENT 'times',
    `address` varchar(64) NOT NULL  COMMENT 'place ',
    `fig_name` varchar(64) NOT NULL  COMMENT 'figure name',
    `state` varchar(64) NOT NULL,
    PRIMARY KEY (`Time_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
 CREATE TABLE IF NOT EXISTS `light_color`(
    `color_id` INT UNSIGNED AUTO_INCREMENT,
    `color` VARCHAR(50) NOT NULL,
    PRIMARY KEY ( `color_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 运行稳定性问题

使用screen在后台运行，过一段时间运行会报错。原因是没有监测数据库是否连接、重连数据库，数据库操作多了就会失去连接，修改app.py中的db部分内容即可。

## 👾未解决问题

### 地图图标实时改变（红绿灯）

## 🧙🏻‍♀️可补充功能

### 注册

添加用户表格和注册页面

注意加密，密码检验放置到后端。
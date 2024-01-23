---
title: Github仓库推荐系统（大数据）
date: 2024/01/23
# categories:
#  - 项目
---
## 一、项目简介

介绍视频：[github_recommend_system.mp4](/video/github_recommend_system.mp4 "github_recommend_system.mp4")

这是一款基于flask和pyspark的个性化Github仓库推荐系统。

在该系统中，用户可以通过登陆注册后进入系统，通过语言分类查询自己喜欢的Github仓库，对仓库进行评分、收藏，方便在个人主页再次查看喜欢的仓库。

此外，系统实现了基于交替最小二乘的协同过滤推荐算法。在首页推荐9个与用户兴趣相关的优质Github仓库信息，还会在仓库详情页推荐10个与当前Github仓库相关的仓库。

总之，该系统能够为用户提供个性化、多样化的Github仓库推荐服务，帮助用户快速找到自己喜欢的Github仓库，提高体验，实现更好的知识传递和分享。

## 二、项目结构与框架

### 2.1 功能结构

![](/image/image_hguuE28Ogz.png)

### 2.2 技术框架

| 项目   | 技术           |
| ---- | ------------ |
| 编程语言 | python       |
| 数据处理 | numpy/pandas |
| 数据存储 | mysql        |
| 机器学习 | spark mllib  |
| 在线服务 | flask        |
| 前端   | bootstrap    |
| 操作系统 | ubuntu20.04  |
| 编程工具 | vscode       |

## 三、项目设计与实现

### 3.1 数据预处理

#### 3.1.1 数据抓取与预处理

收集Github仓库列表数据，包括标题、简介、链接、Stars、Forks、Language [https://ossinsight.io/](https://ossinsight.io/ "https://ossinsight.io/")

收集用户对Github仓库的评分 [https://hellogithub.com/](https://hellogithub.com/ "https://hellogithub.com/")



[https://github.com/NaiboWang/EasySpider](https://github.com/NaiboWang/EasySpider "https://github.com/NaiboWang/EasySpider")

收集到3957条数据

[github\_data.xlsx](/file/github_data_-d9XU9Eogp.xlsx "github_data.xlsx")

```bash
pip install pandas
```

清洗数据（删除含空值的行）

```python
import pandas as pd

# 读取excel数据
df = pd.read_excel('github_data.xlsx')
# 删除包含空值的行
df.dropna(inplace=True)
# 保存修改后的excel
df.to_excel('github_data.xlsx', index=False)
```

清洗后剩余3737条数据

[github\_data.xlsx](/file/github_data_Cp7YimO8ih.xlsx "github_data.xlsx")

[ratings.csv](/file/ratings_wfpL8zQ8L4.csv "ratings.csv")

使用faker库生成用户信息，werkzeug.security对密码进行加密

```bash
pip install faker
```

```python
from faker import Faker
import pandas as pd
from werkzeug.security import generate_password_hash

fake = Faker(locale='en-US')
csv_file1 = 'user.csv'
csv_file2 = 'password.csv'
df1 = pd.read_csv(csv_file1)
df2 = pd.read_csv(csv_file2)

for rowId in range(1, 611):
    real_password = fake.password()
    name = fake.name()
    email = fake.email()
    password = generate_password_hash(real_password)
    df1.loc[rowId]=[name,password,email]
    df2.loc[rowId]=[name,password,email,real_password]

df1.to_csv('user.csv',index=False,encoding="utf-8")
df2.to_csv('password.csv',index=False,encoding="utf-8")
```

#### 3.1.2 数据库数据存储

首先建立数据库和数据表

```sql
CREATE DATABASE recommend;
use recommend;

-- 仓库
-- Name  Link  Introduction  Language  Stars  Forks
-- krahets/hello-algo  https://github.com/krahets/hello-algo  《Hello 算法》：动画图解、一键运行的数据结构与算法教程，支持 Java, C++, Python, Go, JS, TS, C#, Swift, Rust, Dart, Zig 等语言。  Java  33,255  3,924
CREATE TABLE IF NOT EXISTS `github_info`(
    `id` INT UNSIGNED AUTO_INCREMENT,
    `name` varchar(1000) NOT NULL  COMMENT 'name',
    `link` varchar(1000) NOT NULL  COMMENT 'link',
    `introduction` varchar(5000) NOT NULL  COMMENT 'introduction',
    `language` varchar(64) NOT NULL  COMMENT 'language',
    `stars` int NOT NULL  COMMENT 'stars',
    `forks` int NOT NULL  COMMENT 'forks',
    PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 评分
-- userId,githubId,rating,timestamp
-- 1,1,4,964982703
 CREATE TABLE IF NOT EXISTS `ratings`(
    `id` INT UNSIGNED AUTO_INCREMENT,
    `userId` int NOT NULL  COMMENT 'userId',
    `githubId` int NOT NULL  COMMENT 'githubId',
    `rating` float NOT NULL  COMMENT 'rating',
    `timestamp` int NOT NULL  COMMENT 'timestamp',
    PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 用户
-- username,password,email
-- Mary Swanson,431f87b87f999f5a502411b25c038a128fe86b7c,twright@example.net
 CREATE TABLE IF NOT EXISTS `user`(
    `id` INT UNSIGNED AUTO_INCREMENT,
    `username` varchar(100) NOT NULL  COMMENT 'username',
    `password` varchar(200) NOT NULL  COMMENT 'password',
    `email` varchar(100) NOT NULL  COMMENT 'email',
    PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
-- 收藏
-- userId,githubId
-- 1,1
 CREATE TABLE IF NOT EXISTS `collect`(
    `id` INT UNSIGNED AUTO_INCREMENT,
    `userId` int NOT NULL  COMMENT 'userId',
    `githubId` int NOT NULL  COMMENT 'githubId',
    PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

再利用pandas将已处理好的csv数据存入数据库（以用户信息为例）

```python
import pandas as pd
import pymysql
from config import conn

# 读取表格信息
filename = 'user.csv'
data = pd.read_csv(filename, header=0)

# 获取一个mysql游标 Cursor
cursor = conn.cursor()

query = 'insert into user(username,password,email) values (%s,%s,%s)'
for i in range(0, len(data)):
#id为自增字段，不需要添加
    username = data.iloc[i, 0]
    password = data.iloc[i, 1]
    email = data.iloc[i, 2]
    values = (str(username), str(password), str(email))
    cursor.execute(query, values)
    
cursor.close()
conn.commit()
print("数据导入成功")
conn.close()

```

### 3.2 网站前端设计与实现

![](/image/556d6c1a3f1279590b0b5ae04d38e54_CDMbzYwvKF.png)



### 3.3 网站后端设计与实现

![](/image/image_SFLU9uMlRq.png)

根据功能图，设计用户信息、仓库信息、评分信息、收藏信息四个数据表，由于仓库介绍中含表情，需要使用utf8mb4格式。

| 用户信息表(user) |          |       |
| ----------- | -------- | ----- |
| username    | password | email |

| 仓库信息表(github\_info) |      |              |          |       |       |
| ------------------- | ---- | ------------ | -------- | ----- | ----- |
| name                | link | introduction | language | stars | forks |

| 评分信息表(ratings) |          |        |           |
| -------------- | -------- | ------ | --------- |
| userId         | githubId | rating | timestamp |

| 收藏信息表(collect) |          |
| -------------- | -------- |
| userId         | githubId |

### 3.4 推荐算法设计与实现

利用ALS协同过滤算法，对评分数据进行分析，可以得出用户与用户、仓库与仓库的相似度。

由于新用户评分变化快，导致用户与用户的相似度变化快，“猜你喜欢”的结果变化快，所以该部分采用在线调用算法实现；而所有用户的评分变化较慢，导致仓库与仓库的相似度变化慢，“相似仓库”的结果变化慢，所以该部分采用离线方式，每天定时调用算法程序更新item\_embedding，线上只需查询item\_embedding.csv进行近邻搜索即可。

#### 3.4.1 ALS协同过滤算法（离线定时部分）

![](/image/image_2jGGhvAwG3.png)

在app.py中，利用Flask APScheduler在5002端口执行定时任务（每日0点），用交叉验证方式训练pyflask的ALS模型，最后将pyflask.ml.ALS类的itemFactors（仓库相似度）转化为pandas的dataframe提取至csv文件中，方便在线部分查询。

```python
from flask import Flask
from flask_apscheduler import APScheduler
from gevent import pywsgi # pywsgi: flask开发环境转生产环境
import datetime
import pymysql
from config import conn
import csv
from pyspark.sql import SparkSession
from pyspark.ml.evaluation import RegressionEvaluator
from pyspark.ml.recommendation import ALS
from pyspark.ml.tuning import ParamGridBuilder, CrossValidator
from pyspark.sql.functions import col



class Config(object):
    SCHEDULER_API_ENABLED = True


scheduler = APScheduler()

@scheduler.task('cron', id='do_job', day='*', hour='00', minute='00', second='00')
def job():
    cursor = conn.cursor()
    sql = 'select * from ratings'
    cursor.execute(sql)
    data = cursor.fetchall()
    conn.close()

    csv_file = 'lastest_ratings.csv'
    f = open(csv_file,'w',encoding='utf-8',newline="")
    csv_writer = csv.writer(f)
    csv_writer.writerow(["userId","githubId","rating","timestamp"])

    for line in data:
        csv_writer.writerow([line['userId'],line['githubId'],line['rating'],line['timestamp']])

    f.close()
    print("数据导出成功")


    # 创建 Spark 会话
    spark = SparkSession.builder.appName("ALS").getOrCreate()
    # 读取数据
    data = spark.read.csv("file:///root/html/scheduled/lastest_ratings.csv", header=True, inferSchema=True)
    # 数据预处理
    # 去除空值
    data = data.dropna()
    # 将字符串类型的列转换为数值类型
    data = data.withColumn("userId", col("userId").cast("integer"))
    data = data.withColumn("githubId", col("githubId").cast("integer"))
    data = data.withColumn("rating", col("rating").cast("float"))
    # 划分训练集和测试集
    (training, test) = data.randomSplit([0.8, 0.2])
    # 创建 ALS 模型
    als = ALS(userCol="userId", itemCol="githubId", ratingCol="rating", coldStartStrategy="drop")
    # 定义参数网格
    paramGrid = ParamGridBuilder() \
        .addGrid(als.rank, [10, 20, 30]) \
        .addGrid(als.regParam, [0.01, 0.05, 0.1]) \
        .build()
    # 创建交叉验证器
    crossval = CrossValidator(estimator=als,
                            estimatorParamMaps=paramGrid,
                            evaluator=RegressionEvaluator(metricName="rmse", labelCol="rating", predictionCol="prediction"),
                            numFolds=5)
    # 训练 ALS 模型
    model = crossval.fit(training)
    bestModel = model.bestModel
    # 在测试数据上进行预测
    predictions = bestModel.transform(test)
    # 计算均方根误差
    evaluator = RegressionEvaluator(metricName="rmse", labelCol="rating", predictionCol="prediction")
    rmse = evaluator.evaluate(predictions)
    print("Root-mean-square error = " + str(rmse))
    # 导出embedding
    df_item = bestModel.itemFactors.toPandas()
    df_item.to_csv('item_embedding.csv',index=False,encoding="utf-8")

    df_user = bestModel.userFactors.toPandas()
    df_user.to_csv('user_embedding.csv',index=False,encoding="utf-8")

    spark.stop()
    print("embedding导出成功")



if __name__ == '__main__':
    app = Flask(__name__)
    app.config.from_object(Config())

    # it is also possible to enable the API directly
    # scheduler.api_enabled = True
    scheduler.init_app(app)
    scheduler.start()

    # app.run(port=5002)
    server = pywsgi.WSGIServer(('0.0.0.0', 5002), app)
    server.serve_forever()
```

#### 3.4.2 ALS协同过滤算法（在线部分）

在models.py中定义EmbeddingModel类，方便在线部分操作（本次爬取的数据量不大，加载到内存中速度更快）

```python
class EmbeddingManager(object):

    def __init__(self, fpath, key_name, value_name):
        # pandas.dataframe
        self.df = pd.read_csv(fpath)
        # 将文件中的embedding加载到内存
        self.dict_embedding = self.load_embedding_to_dict(key_name, value_name)
        # 在faiss建立索引
        self.faiss_index = self.load_embedding_to_faiss(key_name, value_name)
    
    def get_embedding(self,key):
        return self.dict_embedding[str(key)]

    def load_embedding_to_dict(self, key_name, value_name):
        return {
            str(row[key_name]): row[value_name]
            for index,row in self.df.iterrows()
        }

    def load_embedding_to_faiss(self,key_name, value_name):
        # id列表
        ids = self.df[key_name].values.astype(np.int64)
        # 二维embedding
        datas = [json.loads(x)for x in self.df[value_name]]
        datas = np.array(datas).astype(np.float32)
        # 维度
        dimension = datas.shape[1]
        # 创建faiss索引
        index = faiss.IndexFlatL2(dimension)
        index2 = faiss.IndexIDMap(index)
        index2.add_with_ids(datas, ids)
        return index2

    def search_ids_by_embedding(self, embedding_str, topk):
        """实现近邻搜索"""
        input = np.array(json.loads(embedding_str))
        input = np.expand_dims(input, axis=0).astype(np.float32)
        D,I = self.faiss_index.search(input,topk)
        return list(I[0])
```

仓库详情页“相似仓库推荐”：在线调用近邻搜索，推荐最相似的11个仓库，再删去最相似的第一个（自身）

```python
bp = Blueprint("content", __name__, url_prefix="/content")


@bp.route("/")
def content():
    githubId = request.args.get("id")

    mgr_github_embedding = EmbeddingManager("/root/html/scheduled/item_embedding.csv","id","features")
    github_embedding = mgr_github_embedding.get_embedding(githubId)
    github_ids = mgr_github_embedding.search_ids_by_embedding(github_embedding, 11)
    print(github_ids)

    recommend = []
    for i in range(1, 11):
        github1 = GithubModel.query.get(github_ids[i])
        recommend.append(github1)
    return render_template("content.html", recommend = recommend)
```

主页“猜你喜欢”：在线从mysql数据库中查询所有评分数据，训练ALS模型（为节省时间不使用交叉验证，但因为服务器非专用算法服务器，仍需运行30秒左右）

```python
bp = Blueprint("index", __name__, url_prefix="/")

@bp.route("/")
def index():
    items_github = GithubModel.query.order_by(GithubModel.id.desc()).limit(9).all()
    
    if session:
        userId = session['user_id']
    else:
        return render_template("index.html",items_github=items_github)
    recommends = []
    ratings = RatingModel.query.filter_by(userId=userId).first()
    if ratings:
        # 建立 MySQL 连接
        conn1 = pymysql.connect(
            host='localhost',
            user='mysql_username',
            password='mysql_password',
            db='recommend',
            charset='utf8mb4',
            cursorclass=pymysql.cursors.DictCursor
        )
        cursor1 = conn1.cursor()
        sql = 'select * from ratings'
        cursor1.execute(sql)
        data = cursor1.fetchall()
        conn1.close()

        csv_file = '/root/html/scheduled/lastest_ratings.csv'
        f = open(csv_file,'w',encoding='utf-8',newline="")
        csv_writer = csv.writer(f)
        csv_writer.writerow(["userId","githubId","rating","timestamp"])
        for line in data:
            csv_writer.writerow([line['userId'],line['githubId'],line['rating'],line['timestamp']])
        f.close()
        print("数据导出成功")

        # 创建 Spark 会话
        spark = SparkSession.builder.appName("ALS").getOrCreate()
        # 读取数据
        data = spark.read.csv("file:///root/html/scheduled/lastest_ratings.csv", header=True, inferSchema=True)
        # 数据预处理
        # 去除空值
        data = data.dropna()
        # 将字符串类型的列转换为数值类型
        data = data.withColumn("userId", col("userId").cast("integer"))
        data = data.withColumn("githubId", col("githubId").cast("integer"))
        data = data.withColumn("rating", col("rating").cast("float"))
        # 创建 ALS 模型
        als = ALS(userCol="userId", itemCol="githubId", ratingCol="rating", rank=10, regParam=0.01)
        # 训练 ALS 模型
        model = als.fit(data)

        # 对特定用户进行推荐
        userRecs = model.recommendForUserSubset(spark.createDataFrame([(userId,)]).toDF("userId"), 9).first()
        row_recommends = userRecs["recommendations"]
        for recommend in row_recommends:
            recommends.append(GithubModel.query.filter_by(id=recommend['githubId']).first())
        items_github = recommends        
        spark.stop()
    return render_template("index.html",items_github=items_github)
```

## 四、用户手册

### 4.1 项目简介

这是一款基于flask和pyspark的个性化Github仓库推荐系统。

在该系统中，您可以通过登陆注册后进入系统，通过语言分类查询自己喜欢的Github仓库，对仓库进行评分、收藏，方便在个人主页再次查看您喜欢的仓库。

此外，系统实现了基于交替最小二乘的协同过滤推荐算法。在首页为您推荐9个与您兴趣相关的优质Github仓库信息，还会在仓库详情页向您推荐10个与当前Github仓库相关的仓库。

总之，该系统能够为您提供个性化、多样化的Github仓库推荐服务，帮助您快速找到自己喜欢的Github仓库，提高体验，实现更好的知识传递和分享。

### 4.2 界面展示及功能介绍

#### 4.2.1 首页

![](/image/image_tuU3M63-5f.png)

![](/image/image_8WyGCIAAc2.png)

-   主页是我们平台的起始页面，展示了每日推荐内容。根据用户的收藏和评分情况，我们生成个性化的每日推荐，以帮助用户发现感兴趣的仓库和项目。
-   用户可以通过主页浏览推荐内容，并点击进入仓库详情页了解更多信息。

#### 4.2.2 登录注册页面

![](/image/image_g9nG1XP_pG.png)

![](/image/image_ynUcO1neA0.png)

-   登录页面提供用户登录平台的入口。用户可以输入他们的email地址和密码登录到账户。
-   注册页面允许新用户创建一个新的账户。用户需要提供必要的信息并选择一个唯一的用户名和安全的密码来注册账户

#### 4.2.3 仓库分类集合页面

![](/image/image_dhN9BNGHX9.png)

![](/image/image_nuOikjYepD.png)

-   这个页面根据仓库的编程语言对仓库进行了分类展示。用户可以在该页面浏览各种编程语言的仓库，以便找到他们感兴趣的特定语言的项目。
-   每个分类可能包含多个相关的仓库，用户可以点击进入仓库详情页了解更多信息。

#### 4.2.4 仓库详情页面

![](/image/image_P_dXdgIMEa.png)

![](/image/image_Dv62jWUlDY.png)

-   仓库详情页展示了该仓库的详细信息。可以在该页中找到仓库的名称、描述、链接、star数目和fork数目等相关信息。
-   此外，该页面还提供了类似仓库的推荐（根据推荐算法生成），以便用发现与当前仓库相似或相关的其他仓库。

#### 4.2.5 用户个人主页

![](/image/image_soypdOykhQ.png)

![](/image/image_PxsdOolXk-.png)

-   用户个人主页是展示用户个人信息和活动的页面，其中包含用户收藏和评价过的仓库。
-   用户可以通过个人主页访问收藏的仓库和评价过的仓库，以查看和管理他们的收藏和评价记录。

### 4.3 推荐相关注意事项

#### 4.3.1 主页“猜你喜欢”说明

未评分用户访问主页时，得到的“猜你喜欢”结果是从仓库中随机选取的9个仓库。

已评分用户访问主页时，会调用ALS算法，根据评分数据为用户推荐可能感兴趣的9个仓库。

#### 4.3.2 仓库详情页“相似仓库推荐”说明

根据所有用户的评分信息推测仓库相似度，为用户推荐10个相似的仓库。

仓库相似度将在每天的零点调用ALS算法，进行更新。

## 五、系统安装说明

介绍视频： [https://www.flexclip.com/cn/share/4769541fa4c759c9cf86e96fcdc6240a193c24c.html](https://www.flexclip.com/cn/share/4769541fa4c759c9cf86e96fcdc6240a193c24c.html "https://www.flexclip.com/cn/share/4769541fa4c759c9cf86e96fcdc6240a193c24c.html")

### 5.1 项目结构

```bash
root@xxxxxxx:~/Github-recommend-system-main$ tree
.
├── data # 项目启动前操作
│   ├── data # 数据预处理
│   └── mysql # 建数据表、数据存入数据库
└── html # 项目代码
    ├── app.py # flask在线服务
    ├── blueprints # 后端蓝图
    ├── config.py # 数据库配置1
    ├── exts.py # 数据库配置2
    ├── models.py # 数据表对应class
    ├── scheduled # als定时任务
    │   ├── als_model # als模型
    │   ├── als.py # als算法
    │   ├── app.py # flask在线服务
    │   └── config.py # 数据库配置
    ├── static # 静态文件
    └── template # 前端

```

### 5.2 环境配置

注：本项目在ubuntu20.04云服务器上测试通过

requirements.txt

```text
faker
pandas
scikit-learn
pyspark
flask
pymysql
openpyxl
flask-login
gevent
flask-sqlalchemy
flask-wtf
email-validator
PyEmail
flask_apscheduler
faiss-gpu

```

```bash
sudo apt update
sudo apt upgrade
sudo apt install python3 python-is-python3 upzip  netcat tmux openjdk-8-jdk apache2 mysql-server screen
pip install -r requirements.txt
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64 >> /etc/profile
source /etc/profile
```

### 5.3 启动项目

1.  打开防火墙的5000端口(flask在线服务)
2.  修改配置信息

    mysql数据库本地账号密码信息查询
    ```bash
    sudo cat /etc/mysql/debian.cnf
    ```
    将项目中的config文件均修改为自己的数据库账号密码
3.  创建数据库、数据表
    ```sql
    -- 新建数据库
    CREATE DATABASE recommend;

    -- 仓库
    -- Name  Link  Introduction  Language  Stars  Forks
    -- krahets/hello-algo  https://github.com/krahets/hello-algo  《Hello 算法》：动画图解、一键运行的数据结构与算法教程，支持 Java, C++, Python, Go, JS, TS, C#, Swift, Rust, Dart, Zig 等语言。  Java  33,255  3,924
    CREATE TABLE IF NOT EXISTS `github_info`(
        `id` INT UNSIGNED AUTO_INCREMENT,
        `name` varchar(1000) NOT NULL  COMMENT 'name',
        `link` varchar(1000) NOT NULL  COMMENT 'link',
        `introduction` varchar(5000) NOT NULL  COMMENT 'introduction',
        `language` varchar(64) NOT NULL  COMMENT 'language',
        `stars` int NOT NULL  COMMENT 'stars',
        `forks` int NOT NULL  COMMENT 'forks',
        PRIMARY KEY (`id`)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- 评分
    -- userId,githubId,rating,timestamp
    -- 1,1,4,964982703
     CREATE TABLE IF NOT EXISTS `ratings`(
        `id` INT UNSIGNED AUTO_INCREMENT,
        `userId` int NOT NULL  COMMENT 'userId',
        `githubId` int NOT NULL  COMMENT 'githubId',
        `rating` float NOT NULL  COMMENT 'rating',
        `timestamp` int NOT NULL  COMMENT 'timestamp',
        PRIMARY KEY (`id`)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    -- 用户
    -- username,password,email
    -- Mary Swanson,431f87b87f999f5a502411b25c038a128fe86b7c,twright@example.net
     CREATE TABLE IF NOT EXISTS `user`(
        `id` INT UNSIGNED AUTO_INCREMENT,
        `username` varchar(100) NOT NULL  COMMENT 'username',
        `password` varchar(200) NOT NULL  COMMENT 'password',
        `email` varchar(100) NOT NULL  COMMENT 'email',
        PRIMARY KEY (`id`)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
     
    -- 收藏
    -- userId,githubId
    -- 1,1
     CREATE TABLE IF NOT EXISTS `collect`(
        `id` INT UNSIGNED AUTO_INCREMENT,
        `userId` int NOT NULL  COMMENT 'userId',
        `githubId` int NOT NULL  COMMENT 'githubId',
        PRIMARY KEY (`id`)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    ```
4.  用户数据生成
    ```bash
    cd data/data
    python test_user.py
    ```
5.  录入数据
    ```bash
    cd data/mysql
    python xlsx2mysql.py csv2mysql.py csv2mysql_rating.py

    ```
6.  运行一次ALS算法
    ```bash
    cd html/scheduled
    python als.py
    ```
7.  启动flask服务
    ```bash
    cd html
    python app.py
    cd html/scheduled
    python app.py
    ```

此时浏览器访问公网ip:5000即可看到在线网站服务
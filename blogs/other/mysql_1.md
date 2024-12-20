---
title: MySQL
date: 2024/05/23
categories:
 - other
# tags:
#  - MySQL
---
## 测试数据
### 初始化测试数据
```sql
DROP TABLE IF EXISTS EMP;
DROP TABLE IF EXISTS DEPT;
DROP TABLE IF EXISTS SALGRADE;

CREATE TABLE DEPT(DEPTNO int(2) not null ,
	DNAME VARCHAR(14) ,
	LOC VARCHAR(13),
	primary key (DEPTNO)
);
CREATE TABLE EMP(EMPNO int(4)  not null ,
	ENAME VARCHAR(10),
	JOB VARCHAR(9),
	MGR INT(4),
	HIREDATE DATE  DEFAULT NULL,
	SAL DOUBLE(7,2),
	COMM DOUBLE(7,2),
	primary key (EMPNO),
	DEPTNO INT(2) 
);

CREATE TABLE SALGRADE( GRADE INT,
	LOSAL INT,
	HISAL INT
);

INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 10, 'ACCOUNTING', 'NEW YORK'); 
INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 20, 'RESEARCH', 'DALLAS'); 
INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 30, 'SALES', 'CHICAGO'); 
INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 40, 'OPERATIONS', 'BOSTON'); 
 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7369, 'SMITH', 'CLERK', 7902,  '1980-12-17', 800, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7499, 'ALLEN', 'SALESMAN', 7698,  '1981-02-20', 1600, 300, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7521, 'WARD', 'SALESMAN', 7698,  '1981-02-22', 1250, 500, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7566, 'JONES', 'MANAGER', 7839,  '1981-04-02', 2975, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7654, 'MARTIN', 'SALESMAN', 7698,  '1981-09-28', 1250, 1400, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7698, 'BLAKE', 'MANAGER', 7839,  '1981-05-01', 2850, NULL, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7782, 'CLARK', 'MANAGER', 7839,  '1981-06-09', 2450, NULL, 10); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7788, 'SCOTT', 'ANALYST', 7566,  '1987-04-19', 3000, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7839, 'KING', 'PRESIDENT', NULL,  '1981-11-17', 5000, NULL, 10); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7844, 'TURNER', 'SALESMAN', 7698,  '1981-09-08', 1500, 0, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7876, 'ADAMS', 'CLERK', 7788,  '1987-05-23', 1100, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7900, 'JAMES', 'CLERK', 7698,  '1981-12-03', 950, NULL, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7902, 'FORD', 'ANALYST', 7566,  '1981-12-03', 3000, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7934, 'MILLER', 'CLERK', 7782,  '1982-01-23', 1300, NULL, 10); 
 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 1, 700, 1200); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 2, 1201, 1400); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 3, 1401, 2000); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 4, 2001, 3000); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 5, 3001, 9999); 
commit;
```

- 什么是sql脚本：文件名是.sql，并且该文件中编写了大量的SQL语句，执行sql脚本程序就相当于批量执行SQL语句。
- 你入职的时候，项目一般都是进展了一部分，多数情况下你进项目组的时候数据库的表以及数据都是有的，项目经理第一天可能会给你一个较大的sql脚本文件，你需要执行这个脚本文件来初始化你的本地数据库。（当然，也有可能数据库是共享的。）
- 创建文件：bjpowernode.sql，把以上SQL语句全部复制到sql脚本文件中。
- 执行SQL脚本文件，初始化数据库
   - 第一步：命令窗口登录mysql
   - 第二步：创建数据库bjpowernode（如果之前已经创建就不需要再创建了）：create database bjpowernode;
   - 第三步：使用数据库bjpowernode：use bjpowernode;
   - 第四步：source命令执行sql脚本，注意：source命令后面是sql脚本文件的绝对路径。
   - 第五步：查看是否初始化成功，执行：show tables;
- 使用其他的mysql客户端工具也可以执行sql脚本，比如navicat。使用source命令执行sql脚本的优点：**可支持大文件**。

### 熟悉测试数据
emp dept salgrade三张表分别存储什么信息

- emp：员工信息
- dept：部门信息
- salgrade：工资等级信息

查看表结构：desc或describe，语法格式：desc或describe +表名

以上的结果展示的不是表中的数据，而是表的结构。
- Field是字段名
- Type是这个字段的数据类型
- Null是这个字段是否允许为空
- Key是这个字段是否为主键或外键
- Default是这个字段的默认值

对以上表结构进行解释说明：
- emp表
   - empno：员工编号，int类型（整数），不能为空，主键（主键后期学习约束时会进行说明）
   - ename：员工姓名，varchar类型（字符串）
   - job：工作岗位，varchar类型
   - mgr：上级领导编号，int类型
   - hiredate：雇佣日期，date类型（日期类型）
   - sal：月薪，double类型（带有浮点的数字）
   - comm：补助津贴，double类型
   - deptno：部门编号，int类型
- dept表
   - deptno：部门编号，int类型，主键
   - dname：部门名称，varchar类型
   - loc：位置，varchar类型
- salgrade表
   - grade：等级，int类型
   - losal：最低工资，int类型
   - hisal：最高工资，int类型

对于以上表结构要提前了解，后面学习的内容需要你马上反应出：哪个字段是什么意思。

## DQL练习
```sql
1. 取得每个部门最高薪水的人员名称
第一步：取得每个部门最高薪水
select deptno,max(sal) as maxsal from emp group by deptno;
+--------+---------+
| deptno | maxsal  |
+--------+---------+
|     20 | 3000.00 |
|     30 | 2850.00 |
|     10 | 5000.00 |
+--------+---------+
第二步：将上面的查询结果当做临时表t，t和emp e进行连接，条件：t.deptno=e.deptno and t.maxsal=e.sal
select t.*, e.ename from (select deptno,max(sal) as maxsal from emp group by deptno) t join emp e on t.deptno=e.deptno and t.maxsal=e.sal;
+--------+---------+-------+
| deptno | maxsal  | ename |
+--------+---------+-------+
|     30 | 2850.00 | BLAKE |
|     20 | 3000.00 | SCOTT |
|     10 | 5000.00 | KING  |
|     20 | 3000.00 | FORD  |
+--------+---------+-------+

2.哪些人的薪水在部门的平均薪水之上
第一步：找出每个部门的平均薪水
select deptno,avg(sal) as avgsal from emp group by deptno;
+--------+-------------+
| deptno | avgsal      |
+--------+-------------+
|     20 | 2175.000000 |
|     30 | 1566.666667 |
|     10 | 2916.666667 |
+--------+-------------+
第二步：将上面的查询结果当做临时表t，t和emp e连接，条件：t.deptno=e.deptno and e.sal > t.avgsal
select e.ename,e.sal,t.* from emp e join (select deptno,avg(sal) as avgsal from emp group by deptno) t on t.deptno=e.deptno and e.sal > t.avgsal;
+-------+---------+--------+-------------+
| ename | sal     | deptno | avgsal      |
+-------+---------+--------+-------------+
| ALLEN | 1600.00 |     30 | 1566.666667 |
| JONES | 2975.00 |     20 | 2175.000000 |
| BLAKE | 2850.00 |     30 | 1566.666667 |
| SCOTT | 3000.00 |     20 | 2175.000000 |
| KING  | 5000.00 |     10 | 2916.666667 |
| FORD  | 3000.00 |     20 | 2175.000000 |
+-------+---------+--------+-------------+

3.取得每个部门平均薪水的等级
第一步：取得每个部门平均薪水
select deptno,avg(sal) as avgsal from emp group by deptno;
+--------+-------------+
| deptno | avgsal      |
+--------+-------------+
|     20 | 2175.000000 |
|     30 | 1566.666667 |
|     10 | 2916.666667 |
+--------+-------------+
第二步：以上查询结果当做临时表t，和salgrade s表连接，条件：t.avgsal between s.losal and s.hisal;
select t.*, s.grade from (select deptno,avg(sal) as avgsal from emp group by deptno) t join salgrade s on t.avgsal between s.losal and s.hisal;
+--------+-------------+-------+
| deptno | avgsal      | grade |
+--------+-------------+-------+
|     20 | 2175.000000 |     4 |
|     30 | 1566.666667 |     3 |
|     10 | 2916.666667 |     4 |
+--------+-------------+-------+

4. 取得部门中（所有人的）平均的薪水等级
每个部门中薪水等级的平均值。

第一步：找出每个人的薪水等级
select e.ename,e.sal,e.deptno,s.grade from emp e join salgrade s on e.sal between s.losal and s.hisal;
+--------+---------+--------+-------+
| ename  | sal     | deptno | grade |
+--------+---------+--------+-------+
| CLARK  | 2450.00 |     10 |     4 |
| KING   | 5000.00 |     10 |     5 |
| MILLER | 1300.00 |     10 |     2 |
| SMITH  |  800.00 |     20 |     1 |
| JONES  | 2975.00 |     20 |     4 |
| SCOTT  | 3000.00 |     20 |     4 |
| ADAMS  | 1100.00 |     20 |     1 |
| FORD   | 3000.00 |     20 |     4 |
| ALLEN  | 1600.00 |     30 |     3 |
| WARD   | 1250.00 |     30 |     2 |
| MARTIN | 1250.00 |     30 |     2 |
| BLAKE  | 2850.00 |     30 |     4 |
| TURNER | 1500.00 |     30 |     3 |
| JAMES  |  950.00 |     30 |     1 |
+--------+---------+--------+-------+
第二步：基于以上结果继续按照deptno进行分组，对grade求平均值
select 
	e.deptno,avg(s.grade)
from 
	emp e 
join 
	salgrade s 
on 
	e.sal between s.losal and s.hisal
group by
	e.deptno;

+--------+--------------+
| deptno | avg(s.grade) |
+--------+--------------+
|     20 |       2.8000 |
|     30 |       2.5000 |
|     10 |       3.6667 |
+--------+--------------+

5. 不准用分组函数（Max），取得最高薪水（给出两种解决方案）
第一种方案：降序,limit取第一个。
select sal from emp order by sal desc limit 1;
+---------+
| sal     |
+---------+
| 5000.00 |
+---------+

第二种方案：自连接
select distinct a.sal from emp a join emp b on a.sal < b.sal;
+---------+
| sal     |
+---------+
| 1300.00 |
|  950.00 |
| 1100.00 |
| 1500.00 |
| 1250.00 |
|  800.00 |
| 2450.00 |
| 2850.00 |
| 1600.00 |
| 2975.00 |
| 3000.00 |
+---------+
select sal from emp where sal not in(select distinct a.sal from emp a join emp b on a.sal < b.sal);
+---------+
| sal     |
+---------+
| 5000.00 |
+---------+

6.取得平均薪水最高的部门的部门编号（至少给出两种解决方案）
第一种方案：limit
第一步：找出每个部门的平均薪水
select deptno,avg(sal) as avgsal from emp group by deptno;
+--------+-------------+
| deptno | avgsal      |
+--------+-------------+
|     20 | 2175.000000 |
|     30 | 1566.666667 |
|     10 | 2916.666667 |
+--------+-------------+
第二步：降序，limit 1
select avg(sal) as avgsal from emp group by deptno order by avgsal desc limit 1;
+-------------+
| avgsal      |
+-------------+
| 2916.666667 |
+-------------+
第三步：第一步 + 第二步联合起来。
select deptno,avg(sal) as avgsal from emp group by deptno having avg(sal) = (select avg(sal) as avgsal from emp group by deptno order by avgsal desc limit 1);
+--------+-------------+
| deptno | avgsal      |
+--------+-------------+
|     10 | 2916.666667 |
+--------+-------------+

第二种方案：max
select deptno,avg(sal) as avgsal from emp group by deptno;
+--------+-------------+
| deptno | avgsal      |
+--------+-------------+
|     20 | 2175.000000 |
|     30 | 1566.666667 |
|     10 | 2916.666667 |
+--------+-------------+
select max(avgsal) from (select deptno,avg(sal) as avgsal from emp group by deptno) t;
+-------------+
| max(avgsal) |
+-------------+
| 2916.666667 |
+-------------+
select deptno,avg(sal) as avgsal from emp group by deptno having avg(sal) = (select max(avgsal) from (select deptno,avg(sal) as avgsal from emp group by deptno) t);
+--------+-------------+
| deptno | avgsal      |
+--------+-------------+
|     10 | 2916.666667 |
+--------+-------------+

7.取得平均薪水最高的部门的部门名称
select 
	d.dname,avg(e.sal) as avgsal 
from 
	emp e
join
	dept d
on
	e.deptno = d.deptno
group by 
	d.dname
having 
	avg(e.sal) = (select max(avgsal) from (select deptno,avg(sal) as avgsal from emp group by deptno) t);

+------------+-------------+
| dname      | avgsal      |
+------------+-------------+
| ACCOUNTING | 2916.666667 |
+------------+-------------+

8. 求平均薪水的等级最低的部门的部门名称
第一步：找出每个部门的平均薪水（按照部门名字进行分组，求平均值）
select d.dname, avg(e.sal) as avgsal from emp e join dept d on e.deptno = d.deptno group by d.dname;
+------------+-------------+
| dname      | avgsal      |
+------------+-------------+
| RESEARCH   | 2175.000000 |
| SALES      | 1566.666667 |
| ACCOUNTING | 2916.666667 |
+------------+-------------+
第二步：将上面的查询结果当做临时表t，和salgrade s连接，条件：t.avgsal between s.losal and s.hisal;
select t.*,s.grade from (select d.dname, avg(e.sal) as avgsal from emp e join dept d on e.deptno = d.deptno group by d.dname) t join salgrade s on t.avgsal between s.losal and s.hisal;
+------------+-------------+-------+
| dname      | avgsal      | grade |
+------------+-------------+-------+
| RESEARCH   | 2175.000000 |     4 |
| SALES      | 1566.666667 |     3 |
| ACCOUNTING | 2916.666667 |     4 |
+------------+-------------+-------+

select 
	t.*,s.grade 
from 
	(select d.dname, avg(e.sal) as avgsal from emp e join dept d on e.deptno = d.deptno group by d.dname) t 
join 
	salgrade s 
on 
	t.avgsal between s.losal and s.hisal
where
	s.grade = 3;

+-------+-------------+-------+
| dname | avgsal      | grade |
+-------+-------------+-------+
| SALES | 1566.666667 |     3 |
+-------+-------------+-------+

第三步：找出最低的等级值
select grade from salgrade where (select avg(sal) as avgsal from emp group by deptno order by avgsal asc limit 1) between losal and hisal;
+-------+
| grade |
+-------+
|     3 |
+-------+

select 
	t.*,s.grade 
from 
	(select d.dname, avg(e.sal) as avgsal from emp e join dept d on e.deptno = d.deptno group by d.dname) t 
join 
	salgrade s 
on 
	t.avgsal between s.losal and s.hisal
where
	s.grade = (select grade from salgrade where (select avg(sal) as avgsal from emp group by deptno order by avgsal asc limit 1) between losal and hisal);

+-------+-------------+-------+
| dname | avgsal      | grade |
+-------+-------------+-------+
| SALES | 1566.666667 |     3 |
+-------+-------------+-------+

9.取得比普通员工(员工代码没有在mgr字段上出现的)的最高薪水还要高的领导人姓名
第一步：找出普通员工的最高薪水
select max(sal) from emp where empno not in(select distinct mgr from emp where mgr is not null);
+----------+
| max(sal) |
+----------+
|  1600.00 |
+----------+

第二步：找出大于1600的员工
select ename from emp where sal > (select max(sal) from emp where empno not in(select distinct mgr from emp where mgr is not null));
+-------+---------+
| ename | sal     |
+-------+---------+
| JONES | 2975.00 |
| BLAKE | 2850.00 |
| CLARK | 2450.00 |
| SCOTT | 3000.00 |
| KING  | 5000.00 |
| FORD  | 3000.00 |
+-------+---------+

10. 取得薪水最高的前五名员工
select ename,sal from emp order by sal desc limit 5;

+-------+---------+
| ename | sal     |
+-------+---------+
| KING  | 5000.00 |
| SCOTT | 3000.00 |
| FORD  | 3000.00 |
| JONES | 2975.00 |
| BLAKE | 2850.00 |
+-------+---------+

11.取得薪水最高的第六到第十名员工
select ename,sal from emp order by sal desc limit 5,5;
+--------+---------+
| ename  | sal     |
+--------+---------+
| CLARK  | 2450.00 |
| ALLEN  | 1600.00 |
| TURNER | 1500.00 |
| MILLER | 1300.00 |
| WARD   | 1250.00 |
+--------+---------+

12. 取得最后入职的5名员工
select ename,hiredate from emp order by hiredate desc limit 5;
+--------+------------+
| ename  | hiredate   |
+--------+------------+
| ADAMS  | 1987-05-23 |
| SCOTT  | 1987-04-19 |
| MILLER | 1982-01-23 |
| JAMES  | 1981-12-03 |
| FORD   | 1981-12-03 |
+--------+------------+

13.取得每个薪水等级有多少员工
select count(*), s.grade from emp e join salgrade s on e.sal between s.losal and s.hisal group by s.grade;
+----------+-------+
| count(*) | grade |
+----------+-------+
|        3 |     1 |
|        2 |     3 |
|        3 |     2 |
|        5 |     4 |
|        1 |     5 |
+----------+-------+

14. 列出所有员工及领导的姓名
select 
	e.ename 员工, l.ename 领导
from
	emp e
left join
	emp l
on
	e.mgr = l.empno;

+--------+-------+
| 员工   | 领导  |
+--------+-------+
| SMITH  | FORD  |
| ALLEN  | BLAKE |
| WARD   | BLAKE |
| JONES  | KING  |
| MARTIN | BLAKE |
| BLAKE  | KING  |
| CLARK  | KING  |
| SCOTT  | JONES |
| KING   | NULL  |
| TURNER | BLAKE |
| ADAMS  | SCOTT |
| JAMES  | BLAKE |
| FORD   | JONES |
| MILLER | CLARK |
+--------+-------+

15.列出受雇日期早于其直接上级的所有员工的编号,姓名,部门名称

select 
	e.empno 员工编号, e.ename 员工姓名, e.hiredate, l.ename 领导姓名, l.hiredate, d.dname 部门名称
from
	emp e
join
	emp l
on
	e.mgr = l.empno
join
	dept d
on
	e.deptno = d.deptno
where
	e.hiredate < l.hiredate;

+----------+----------+------------+----------+------------+------------+
| 员工编号 | 员工姓名 | hiredate   | 领导姓名 | hiredate   | 部门名称   |
+----------+----------+------------+----------+------------+------------+
|     7369 | SMITH    | 1980-12-17 | FORD     | 1981-12-03 | RESEARCH   |
|     7499 | ALLEN    | 1981-02-20 | BLAKE    | 1981-05-01 | SALES      |
|     7521 | WARD     | 1981-02-22 | BLAKE    | 1981-05-01 | SALES      |
|     7566 | JONES    | 1981-04-02 | KING     | 1981-11-17 | RESEARCH   |
|     7698 | BLAKE    | 1981-05-01 | KING     | 1981-11-17 | SALES      |
|     7782 | CLARK    | 1981-06-09 | KING     | 1981-11-17 | ACCOUNTING |
+----------+----------+------------+----------+------------+------------+

16.列出部门名称和这些部门的员工信息,同时列出那些没有员工的部门
select e.*,d.* from emp e right join dept d on e.deptno = d.deptno;
+-------+--------+-----------+------+------------+---------+---------+--------+--------+------------+----------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO | DEPTNO | DNAME      | LOC      |
+-------+--------+-----------+------+------------+---------+---------+--------+--------+------------+----------+
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |     10 | ACCOUNTING | NEW YORK |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |     10 | ACCOUNTING | NEW YORK |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |     10 | ACCOUNTING | NEW YORK |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |     20 | RESEARCH   | DALLAS   |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |     20 | RESEARCH   | DALLAS   |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |     20 | RESEARCH   | DALLAS   |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |     20 | RESEARCH   | DALLAS   |
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |     20 | RESEARCH   | DALLAS   |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |     30 | SALES      | CHICAGO  |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |     30 | SALES      | CHICAGO  |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |     30 | SALES      | CHICAGO  |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |     30 | SALES      | CHICAGO  |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |     30 | SALES      | CHICAGO  |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |     30 | SALES      | CHICAGO  |
|  NULL | NULL   | NULL      | NULL | NULL       |    NULL |    NULL |   NULL |     40 | OPERATIONS | BOSTON   |
+-------+--------+-----------+------+------------+---------+---------+--------+--------+------------+----------+

17. 列出至少有5个员工的所有部门
select deptno, count(*) from emp group by deptno having count(*) >= 5;
+--------+----------+
| deptno | count(*) |
+--------+----------+
|     20 |        5 |
|     30 |        6 |
+--------+----------+

18.列出薪金比"SMITH"多的所有员工信息
select * from emp where sal > (select sal from emp where ename='SMITH');
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-------+--------+-----------+------+------------+---------+---------+--------+

19.列出所有"CLERK"(办事员)的姓名及其部门名称,部门的人数

select deptno,count(*) as total from emp group by deptno;
+--------+-------+
| deptno | total |
+--------+-------+
|     20 |     5 |
|     30 |     6 |
|     10 |     3 |
+--------+-------+ 临时表t

select e.ename,d.dname from emp e join dept d on e.deptno = d.deptno where e.job='CLERK';
+--------+------------+
| ename  | dname      |
+--------+------------+
| SMITH  | RESEARCH   |
| ADAMS  | RESEARCH   |
| JAMES  | SALES      |
| MILLER | ACCOUNTING |
+--------+------------+

select 
	e.ename,d.dname,t.total
from 
	emp e 
join 
	dept d 
on 
	e.deptno = d.deptno 
join
	(select deptno,count(*) as total from emp group by deptno) t
on
	d.deptno = t.deptno
where 
	e.job='CLERK';

+--------+------------+-------+
| ename  | dname      | total |
+--------+------------+-------+
| SMITH  | RESEARCH   |     5 |
| ADAMS  | RESEARCH   |     5 |
| JAMES  | SALES      |     6 |
| MILLER | ACCOUNTING |     3 |
+--------+------------+-------+

20. 列出最低薪金大于1500的各种工作及从事此工作的全部雇员人数
select job,count(*) from emp group by job having min(sal) > 1500;
+-----------+----------+
| job       | count(*) |
+-----------+----------+
| MANAGER   |        3 |
| ANALYST   |        2 |
| PRESIDENT |        1 |
+-----------+----------+

21.列出在部门"SALES"<销售部>工作的员工的姓名,假定不知道销售部的部门编号
select ename from emp where deptno = (select deptno from dept where dname = 'SALES');
+--------+
| ename  |
+--------+
| ALLEN  |
| WARD   |
| MARTIN |
| BLAKE  |
| TURNER |
| JAMES  |
+--------+

22. 列出薪金高于公司平均薪金的所有员工,所在部门,上级领导,雇员的工资等级
select 
	e.ename 员工, d.dname, l.ename 领导, s.grade
from
	emp e
left join
	emp l
on
	e.mgr = l.empno
join
	dept d
on
	e.deptno = d.deptno
join
	salgrade s
on
	e.sal between s.losal and s.hisal
where
	e.sal > (select avg(sal) from emp);

+-------+------------+-------+-------+
| 员工  | dname      | 领导  | grade |
+-------+------------+-------+-------+
| FORD  | RESEARCH   | JONES |     4 |
| SCOTT | RESEARCH   | JONES |     4 |
| CLARK | ACCOUNTING | KING  |     4 |
| BLAKE | SALES      | KING  |     4 |
| JONES | RESEARCH   | KING  |     4 |
| KING  | ACCOUNTING | NULL  |     5 |
+-------+------------+-------+-------+

23. 列出与"SCOTT"从事相同工作的所有员工及部门名称
select e.ename,d.dname from emp e join dept d on e.deptno = d.deptno where e.job = (select job from emp where ename='SCOTT') and e.ename <> 'SCOTT';

+-------+----------+
| ename | dname    |
+-------+----------+
| FORD  | RESEARCH |
+-------+----------+

24. 列出薪金等于部门30中员工的薪金的其他员工的姓名和薪金

select distinct sal from emp where deptno = 30;
+---------+
| sal     |
+---------+
| 1600.00 |
| 1250.00 |
| 2850.00 |
| 1500.00 |
|  950.00 |
+---------+

select ename,sal from emp where sal in(select distinct sal from emp where deptno = 30) and deptno <> 30;
Empty set (0.00 sec)

25. 列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金.部门名称

select max(sal) from emp where deptno=30;
+----------+
| max(sal) |
+----------+
|  2850.00 |
+----------+

select 
	e.ename,e.sal,d.dname
from
	emp e
join
	dept d
on
	e.deptno = d.deptno
where
	e.sal > (select max(sal) from emp where deptno=30);

+-------+---------+------------+
| ename | sal     | dname      |
+-------+---------+------------+
| JONES | 2975.00 | RESEARCH   |
| SCOTT | 3000.00 | RESEARCH   |
| KING  | 5000.00 | ACCOUNTING |
| FORD  | 3000.00 | RESEARCH   |
+-------+---------+------------+

26.列出在每个部门工作的员工数量,平均工资和平均服务期限
select 
	count(e.ename), ifnull(avg(e.sal), 0) as avgsal, ifnull(avg(datediff(now(), e.hiredate)/365), 0) as avgdate, d.deptno 
from 
	emp e 
right join 
	dept d 
on 
	e.deptno = d.deptno 
group by 
	d.deptno;

+----------------+-------------+-------------+--------+
| count(e.ename) | avgsal      | avgdate     | deptno |
+----------------+-------------+-------------+--------+
|              3 | 2916.666667 | 42.37623333 |     10 |
|              5 | 2175.000000 | 40.40328000 |     20 |
|              6 | 1566.666667 | 42.67490000 |     30 |
|              0 |    0.000000 |  0.00000000 |     40 |
+----------------+-------------+-------------+--------+

27. 列出所有员工的姓名、部门名称和工资
select e.ename,e.sal,d.dname from emp e join dept d on e.deptno = d.deptno;

+--------+---------+------------+
| ename  | sal     | dname      |
+--------+---------+------------+
| SMITH  |  800.00 | RESEARCH   |
| ALLEN  | 1600.00 | SALES      |
| WARD   | 1250.00 | SALES      |
| JONES  | 2975.00 | RESEARCH   |
| MARTIN | 1250.00 | SALES      |
| BLAKE  | 2850.00 | SALES      |
| CLARK  | 2450.00 | ACCOUNTING |
| SCOTT  | 3000.00 | RESEARCH   |
| KING   | 5000.00 | ACCOUNTING |
| TURNER | 1500.00 | SALES      |
| ADAMS  | 1100.00 | RESEARCH   |
| JAMES  |  950.00 | SALES      |
| FORD   | 3000.00 | RESEARCH   |
| MILLER | 1300.00 | ACCOUNTING |
+--------+---------+------------+

28. 列出所有部门的详细信息和人数
select 
	count(e.ename), d.*
from 
	emp e 
right join 
	dept d 
on 
	e.deptno = d.deptno 
group by 
	d.deptno;

29. 列出各种工作的最低工资及从事此工作的雇员姓名
select job,min(sal) as minsal from emp group by job;

+-----------+---------+
| job       | minsal  |
+-----------+---------+
| CLERK     |  800.00 |
| SALESMAN  | 1250.00 |
| MANAGER   | 2450.00 |
| ANALYST   | 3000.00 |
| PRESIDENT | 5000.00 |
+-----------+---------+ 临时表t

select e.ename,t.* from emp e join (select job,min(sal) as minsal from emp group by job) t on e.job=t.job and e.sal=t.minsal;

+--------+-----------+---------+
| ename  | job       | minsal  |
+--------+-----------+---------+
| SMITH  | CLERK     |  800.00 |
| WARD   | SALESMAN  | 1250.00 |
| MARTIN | SALESMAN  | 1250.00 |
| CLARK  | MANAGER   | 2450.00 |
| SCOTT  | ANALYST   | 3000.00 |
| KING   | PRESIDENT | 5000.00 |
| FORD   | ANALYST   | 3000.00 |
+--------+-----------+---------+

30. 列出各个部门的工作岗位是MANAGER的最低薪金
select deptno,min(sal) from emp where job='MANAGER' group by deptno;
+--------+----------+
| deptno | min(sal) |
+--------+----------+
|     20 |  2975.00 |
|     30 |  2850.00 |
|     10 |  2450.00 |
+--------+----------+

31. 列出所有员工的年工资,按年薪从低到高排序
select ename, (sal+ifnull(comm,0))*12 as yearsal from emp order by yearsal asc;
+--------+----------+
| ename  | yearsal  |
+--------+----------+
| SMITH  |  9600.00 |
| JAMES  | 11400.00 |
| ADAMS  | 13200.00 |
| MILLER | 15600.00 |
| TURNER | 18000.00 |
| WARD   | 21000.00 |
| ALLEN  | 22800.00 |
| CLARK  | 29400.00 |
| MARTIN | 31800.00 |
| BLAKE  | 34200.00 |
| JONES  | 35700.00 |
| SCOTT  | 36000.00 |
| FORD   | 36000.00 |
| KING   | 60000.00 |
+--------+----------+

32. 求出员工领导的薪水超过3000的员工名称与领导名称
select 
	e.ename 员工, l.ename 领导
from
	emp e
join
	emp l
on
	e.mgr = l.empno
where
	l.sal > 3000;

+-------+------+
| 员工  | 领导 |
+-------+------+
| JONES | KING |
| BLAKE | KING |
| CLARK | KING |
+-------+------+

33. 求出部门名称中,带'S'字符的部门员工的工资合计、部门人数
select 
	count(e.ename), ifnull(sum(e.sal), 0) as sumsal
from 
	emp e 
right join 
	dept d 
on 
	e.deptno = d.deptno 
where
	d.dname like '%S%'
group by 
	d.deptno;

+----------------+----------+
| count(e.ename) | sumsal   |
+----------------+----------+
|              5 | 10875.00 |
|              6 |  9400.00 |
|              0 |     0.00 |
+----------------+----------+

34. 给任职日期超过41年的员工加薪10%
select ename,sal,if(datediff(now(), hiredate)/365 > 41, sal*1.1, sal) as newsal from emp;

35.某公司面试题
有3个表S（学生表），C（课程表），SC（学生选课表）
S（SNO，SNAME）代表（学号，姓名）  
C（CNO，CNAME，CTEACHER）代表（课号，课名，教师）
SC（SNO，CNO，SCGRADE）代表（学号，课号，成绩）

mysql> select * from s;
+------+-------+
| SNO  | SNAME |
+------+-------+
| 1    | 学生1 |
| 2    | 学生2 |
| 3    | 学生3 |
| 4    | 学生4 |
+------+-------+
mysql> select * from c;
+------+-------+----------+
| CNO  | CNAME | CTEACHER |
+------+-------+----------+
| 1    | 语文  | 张       |
| 2    | 政治  | 王       |
| 3    | 英语  | 李       |
| 4    | 数学  | 赵       |
| 5    | 物理  | 黎明     |
+------+-------+----------+
mysql> select * from sc;
+------+------+---------+
| SNO  | CNO  | SCGRADE |
+------+------+---------+
| 1    | 1    | 40      |
| 1    | 2    | 30      |
| 1    | 3    | 20      |
| 1    | 4    | 80      |
| 1    | 5    | 60      |
| 2    | 1    | 60      |
| 2    | 2    | 60      |
| 2    | 3    | 60      |
| 2    | 4    | 60      |
| 2    | 5    | 40      |
| 3    | 1    | 60      |
| 3    | 3    | 80      |
+------+------+---------+

1. 找出没选过“黎明”老师的所有学生姓名。

第一步：先找出选择“黎明”老师的学生的学号
select sno from sc where cno=(select cno from c where cteacher='黎明');

第二步：not in
select sname from s where sno not in(select sno from sc where cno=(select cno from c where cteacher='黎明'));
+-------+
| sname |
+-------+
| 学生3 |
| 学生4 |
+-------+

2. 列出2门以上（含2门）不及格学生姓名及平均成绩。

第一步：找出每个学生的平均成绩
select sno,avg(scgrade) as avgscore from sc group by sno;
+------+----------+
| sno  | avgscore |
+------+----------+
| 1    |       46 |
| 2    |       56 |
| 3    |       70 |
+------+----------+

select s.sno,s.sname from sc join s on sc.sno=s.sno where sc.scgrade < 60 group by s.sno,s.sname having count(*) >= 2;
+------+-------+
| sno  | sname |
+------+-------+
| 1    | 学生1 |
+------+-------+

select a.avgscore, b.* from (select sno,avg(scgrade) as avgscore from sc group by sno) a join (select s.sno,s.sname from sc join s on sc.sno=s.sno where sc.scgrade < 60 group by s.sno,s.sname having count(*) >= 2) b on a.sno=b.sno;
+----------+------+-------+
| avgscore | sno  | sname |
+----------+------+-------+
|       46 | 1    | 学生1 |
+----------+------+-------+

3. 既学过1号课程又学过2号课所有学生的姓名。

select sno from sc where cno=1;
+------+
| sno  |
+------+
| 1    |
| 2    |
| 3    |
+------+

select sno from sc where cno=2;
+------+
| sno  |
+------+
| 1    |
| 2    |
+------+

select sno from sc where cno=1 and sno in(select sno from sc where cno=2);
+------+
| sno  |
+------+
| 1    |
| 2    |
+------+

select s.sname from sc join s on sc.sno=s.sno where sc.cno=1 and sc.sno in(select sno from sc where cno=2);
+-------+
| sname |
+-------+
| 学生1 |
| 学生2 |
+-------+
```
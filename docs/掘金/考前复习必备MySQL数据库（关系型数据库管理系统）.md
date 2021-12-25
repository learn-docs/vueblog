    大家好，我是魔王哪吒，话不多说，今天带来的是一篇《考前复习必备MySQL数据库（关系型数据库管理系统）》文章，欢迎大家喜欢。
    
## 前言

`MySQL`是一个关系型数据库管理系统，在`web`应用方面，`MySQL`是最好的关系型数据库管理系统应用软件之一。

`MySQL`是一种关系型数据库管理系统，关系型数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样增加了速度和提高了灵活性。

`MySQL`所使用的`sql`语言是用于访问数据库的最常用标准化语言，由于其体积小，速度快，总体拥有成本低，开放源码，一般中小型网站的开发选择`MySQL`作为网站数据库。

## 应用环境

和其他的大型数据库例如`Oracle`，`DB2`，`SQL Server`等相比，`MySQL`也有自己的不足，但是这也没有减少它受欢迎的程度，对于一般的个人使用者和中小型企业来说，`MySQL`提供的功能是绰绰有余。

`Linux`作为操作系统，`Apache`或`Nginx`作为`Web`服务器，`MySQL`作为数据库，`PHP/Perl/Python`作为服务器端脚本解释器。

## 应用架构

单点`（Single）`，适合小规模应用
复制`（Replication）`，适合中小规模应用
集群`（Cluster）`，适合大规模应用

## 索引功能

从理论上来说，完全可以为数据表里的每个字段分别建一个索引，但`MySQL`把同一个数据表里的索引总数限制为`16`个。

1. `InnoDB` 数据表的索引
2. 限制

## 索引类别

1. 普通索引，普通索引（由关键字 `KEY` 或 `INDEX` 定义的索引）的任务是加快对数据的访问速度。
2. 索引，普通索引允许被索引的数据列包含重复的值。
3. 主索引，必须为主键字段创建一个索引，这个索引就是所谓的“主索引”。
4. 外键索引，如果为某个外键字段定义了一个外键约束条件，`MySQL`就会定义一个内部索引来帮助自己以最有效率的方式去管理和使用外键约束条件。
5. 复合索引，索引可以覆盖多个数据列，如像 `INDEX` (`columnA, columnB`) 索引。这种索引的特点是 `MySQL` 可以有选择地使用一个这样的索引。

## 初学基础

连接MySQL，格式：

    mysql -h 主机地址 -u 用户名 -p 用户密码

连接到本机上的`MySQL`，首先打开`DOS`窗口，进入目录`mysqlbin`，输入`mysql -uroot -p`，回车后提示你输密码。

连接远程主机上的`MySQL`，远程主机的`IP`，和用户名root，密码。

命令：`mysql -h远程主机ip -uroot -p密码`

退出`mysql`命名：`exit`回车，但是注意，想要成功连接到远程主机，需要在远程主机打开`mysql`远程访问权限。

### mysql和sqlite的区别

`mysql`是`web`世界中使用最广泛的数据库服务器。`mysql`是为服务器端设计的数据库，能承受高并发访问，同时占用的内存也远远大于`SQLite`。

`SQLite`的特点是轻量级，可嵌入，但不能承受高并发访问，适合桌面和移动应用。

> 把数据库默认的编码全部改为`UTF-8`

MySQL的配置文件默认存放在`/etc/my.cnf`或者`/etc/mysql/my.cnf`：

代码如下：

    [client]
    default-character-set = utf8
    
    [mysqld]
    default-storage-engine = INNODB
    character-set-server = utf8
    collation-server = utf8_general_ci

重启`mysql`后，可以通过`mysql`的客户端命令行检查编码。

`$ mysql -u root -p`

![](https://user-gold-cdn.xitu.io/2020/2/22/1706b176217b5672?w=576&h=206&f=png&s=9355)

## 复习必备

MySQL数据库管理方法，掌握数据库的初始化，创建，查看，和删除方法。学习数据表管理方法，掌握数据表的创建，查看，修改和删除方法。

用户账户的管理，用户的创建，与删除，用户权限的授予与回收，用户密码的设置与更改方法。

## 目录复习

为了方便查看学习，我做了思维导图，如下图所示：

![](https://user-gold-cdn.xitu.io/2020/2/22/1706b43387294823?w=938&h=481&f=png&s=59257)

## mysql数据库管理

### 数据库进行初始化

初始化数据库，在安装好`mysql`数据库后，不要直接启动，需要对数据库进行初始化。

#### 初始化的过程

1. 创建元数据表
2. 数据目录
3. 创建root用户

mysql提供数据库命令：

`mysql --initialize`进行初始化

- 按`windows+r`组合键，可以打开“运行”窗口，在该窗口输入`cmd`按`enter`键，打开命令行。
- 使用`cd`命令进入`mysql`目录。
- 执行`bin\mysqld --initialize`命令，进行初始化。

初始化完成后，可以启动数据库，启动数据库有两种方式。

1. 利用`windows`服务器管理界面启动；
2. 利用`mysql`命令启动。

利用`mysql`命令方式启动数据库：

1. 按`windows+r`组合键，打开窗口，进入命令行；
2. 使用`cd`命令进入`mysql`目录；
3. 输入`bin\mysqld`,启动`mysql`服务。

#### 启动数据库

使用`bin\mysql -u root -p`命令进入`mysql`操作环境中。

服务图片，开启数据库：

![](https://user-gold-cdn.xitu.io/2020/2/22/1706bad451f3716a?w=1187&h=741&f=png&s=208823)

### 创建数据库

我们来创建一个数据库，`create database`语句。

语法格式如下：

`create database [db_name];`

创建一个名为`web`的数据库：

`create database web;`

在数据库创建好后，`mysql`的`data`目录下会自动生成一个名为`web`的目录，该数据库的数据会存储于该目录下。

在`mysql`中可以支持运行多个数据库，所以我们可以创建多个数据库。

### 查看数据库

数据库创建好后，使用`show`语句查看当前`mysql`中有哪些数据库。

`show databases;`

### 删除数据库

使用`drop`语句删除数据库，语法格式如下：

`drop database db_name;`

删除创建的`web`数据库，命令如下：

`drop database web`

删除数据库是一个不可逆的操作。

## mysql数据表管理

创建数据表使用`create table`语句，语法格式如下。

    user 数据库名;
    create table 表名 (字段名 类型（长度），字段名 类型（长度）);

创建表语句：

1. 明确数据表的结构；
2. 名字段的名称；
3. 类型；
4. 长度等。

### 查看数据表

查看表分：

1. 查看数据库中包含哪些表
2. 查看某个表的具体结构

使用的语句有`show`语句和`describe`语句。

- 使用`show`语句可以查看数据库中有哪些表。

`show tables`

- 使用`describe`语句可以查看某个表的具体结构，查看组成表的各字段的信息。

`describe 库名.表名;`

> 使用`describe`语句可以查看表的各个字段名称，类型，长度，是否非空，是否有主键，默认值以及备注等信息。

## 修改数据表

可以修改表名，字段名，字段类型等表结构，可使用`alter`语句来实现修改操作。

### 修改表名

修改表名的语句：

`alter table 旧表名 rename 新表名;`

修改数据表`student`改变为`student1`。

`alter table student rename student1`

### 修改字段名

修改字段名的语法格式如下：

`alter table 表名 change 旧属性名 新属性名 新数据类型;`

`alter table student1 change name s_anme varchar(50);`

### 修改字段类型

修改字段类型的语法格式：

`alter table 表名 modify 属性名 数据类型;`

`alter table student1 modify name varchar(32);`

### 增加字段

增加字段的语法格式如下：

`alter table 表名 add 属性名 数据类型;`

`alter table student1 add sex char(1);`

### 删除字段

删除字段语句：

`alter table 表名 drop 属性名;`

示例：

`alter table student1 drop sex;`

## 删除数据表

使用`drop`语句删除数据库中的表。

    use 数据库名;
    drop 表名;

或者是

    drop table 数据库名.表名;

删除某个数据中的某个表：

    use test;
    drop table student;

或者是

    drop table test.student;

## mysql用户管理

`mysql`提供了一套完善的数据库用户以及权限管理系统。

### 创建和删除用户

1. 创建用户

使用`create`语句创建用户：

`create user 'username'@'host' idendified by 'password';`

`username`表示为创建的用户名，`host`指定该用户在哪个主机上可以登录。

`create user 'test1'@'localhost' idendified by '1234';`

`create user 'test3'@'122.xxx' idendified by '1234';`

### 用户删除

使用`drop`语句可以删除用户，语法格式：

`drop user 'username'@'host';`

示例如下：

`drop user 'test1'@'localhost';`

### 授予与回收用户权限

#### 授予用户权限

`grant`语句可以对用户进行授权：

`grant privileges on dbname.tablename TO 'username'@'host';`

1. `privileges`表示要授予用户的操作权限。

`grant select, insert on mysql.test TO 'test1'@'%';`

表示授权用户`test1`在所有登录主机均对`mysql`库的`test`表拥有`select`和`insert`权限。

`grant all on *.* TO 'test2'@'localhost';`

表示授权用户`test2`在本地主机数据库的所有库的所有表拥有所有权限。

### 回收用户权限

使用`revoke`语句可以对权限进行回收。

`revoke privileges on databasename.tablename from 'username'@'host';`

示例：

`revoke select on *.* from 'test2'@'localhost';`

### 设置与更改用户密码

使用`mysql`所提供的密码设置与更改语句，语法格式：

`set password for 'username'@'host' = password('newpassword');`

1. `username`表示要设置或更改密码的用户名；
2. `host`指定该用户的登录主机；
3. `newpassword`表示要设置或更改的密码。

示例：

`set password for 'test1'@'localhost' = password('12345');`

## 什么是数据库

数据库是按照数据结构来组织，存储和管理数据的仓库。每个数据库都有一个或多个不同的`api`用于创建，访问，管理，搜索，复制所保存的数据。

将数据存储在文件中，但是在文件中读写数据速度相对较慢。

### 术语

1. 数据库是一些关联表的集合。
2. 数据表是数据的矩阵。
3. 列，一列包含了相同类型的数据。
4. 行，一行是一组相关的数据。
5. 冗余，存储两倍数据，冗余降低了性能，但提高了数据的安全性。
6. 主键，是唯一的，一个数据表中只能包含一个主键。
7. 外键，用于关联两个表。
8. 复合键，将多个列作为一个索引键，一般用于复合索引。
9. 索引，使用索引可以快速访问数据库中的特定信息。
10. 参照完整性，参照的完整性要求关系中不允许引用不存在的实体。

一个关系型数据库由一个或数个表格组成：表头，行，列，键，值。

表头为每一列的名称，列为具有相同数据类型的数据的集合，行为每一行用来描述某条记录的具体信息，值为行的具体信息，每个值必须与该列的数据类型相同，键的值在当前列中具有唯一性。

`MySQL` 下载地址为： `MySQL` 下载 
`https://dev.mysql.com/downloads/mysql/`

安装 `MySQL`
`https://dev.mysql.com/downloads/repo/yum/`

`Mysql`安装成功后，默认的`root`用户密码为空，可以使用以下命令来创建`root`用户的密码：

`[root@host]# mysqladmin -u root password "new_password";`

### 登录Mysql

命令行：`mysql -h 主机名 -u 用户名 -p`

运行mysql服务：

`mysql -h localhost -u root -p`

## MySQL PHP 语法

PHP Mysqli函数格式如下：

`mysqli_function(value,value,...);`

    mysqli_connect($connect);
    mysqli_query($connect,"SQL 语句");
    mysqli_fetch_array()
    mysqli_close()

## 使用 PHP 脚本连接 MySQL

`mysqli_connect()` 函数来连接数据库

语法：

`mysqli_connect(host,username,password,dbname,port,socket);`

参数说明：

1. `host`为主机或`ip`地址；
2. `username`为`mysql`用户名；
3. `password`为`mysql`密码;
4. `dbname`为默认使用的数据库;
5. `port`尝试连接到`mysql`服务器的端口号;

语法：

`bool mysqli_close ( mysqli $link )`

连接`mysql`服务器：

    <?php
    $dbhost = 'localhost';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
        die('Could not connect: ' . mysqli_error());
    }
    echo '数据库连接成功！';
    mysqli_close($conn);
    ?>

`mysql`创建数据库

使用`create`命令创建数据库，语法：

`create database 数据库名;`

### 使用php脚本创建数据库

语法：`mysqli_query(connection,query,resultmode);`

1. `connection`为要使用的`mysql`连接；
2. `query`为查询字符串；
3. `resultmode`一个常量，值`MYSQLI_USE_RESULT`和`MYSQLI_STORE_RESULT`。

#### 使用PHP来创建一个数据库

代码：

    <?php
    $dbhost = 'localhost';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
      die('连接错误: ' . mysqli_error($conn));
    }
    echo '连接成功<br />';
    $sql = 'create database web';
    $retval = mysqli_query($conn,$sql );
    if(! $retval )
    {
        die('创建数据库失败: ' . mysqli_error($conn));
    }
    echo "数据库 web 创建成功\n";
    mysqli_close($conn);
    ?>

### drop命令删除数据库

`drop`命令格式：

`drop database <数据库名>;`

#### 使用php脚本删除数据库

语法

`mysqli_query(connection,query,resultmode);`

使用`PHP mysqli_query`函数来删除数据库：

删除数据库：

    <?php
    $dbhost = 'localhost:3306';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
        die('连接失败: ' . mysqli_error($conn));
    }
    echo '连接成功<br />';
    $sql = 'DROP DATABASE web';
    $retval = mysqli_query( $conn, $sql );
    if(! $retval )
    {
        die('删除数据库失败: ' . mysqli_error($conn));
    }
    echo "数据库 web 删除成功\n";
    mysqli_close($conn);
    ?>

#### 使用PHP脚本选择MySQL数据库

使用函数`mysqli_select_db`来获取一个数据库

语法：

`mysqli_select_db(connection,dbname);`

示例：

`mysqli_select_db`函数来选取一个数据库：

选择数据库

    <?php
    $dbhost = 'localhost:3306';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
        die('连接失败: ' . mysqli_error($conn));
    }
    echo '连接成功';
    mysqli_select_db($conn, 'web' );
    mysqli_close($conn);
    ?>

## MySQL 数据类型

`mysql`支持多种类型，分三类：

1. 数值；
2. 日期/时间；
3. 字符串类型。

### MySQL 5.0 以上的版本

1、一个汉字占多少长度与编码有关：

`UTF－8：一个汉字＝3个字节`

`GBK：一个汉字＝2个字节`

2、`varchar(n)` 表示 n 个字符，无论汉字和英文，`Mysql` 都能存入 n 个字符，仅是实际字节长度有所区别

3、`MySQL` 检查长度，可用 `SQL` 语言来查看

### MySQL 创建数据表

1. 表名
2. 表字段名
3. 定义每个表字段

语法：

创建`mysql`数据表的`sql`语法。

`CREATE TABLE table_name (column_name column_type);`

在数据库中创建数据表：

    create table if not exists `table_tb` (
        `table_id` int unsigned auto_increment,
        `table_title` varchar(100) not null,
        `table_author` varchar(40) not null,
        `table_date` date,
        primary key (`table_id`)
    )engine=InnoDB default charset = utf8;

注意：在`auto_increment`定义列为自增的属性，一般用于主键，数值会自动加1,。engine设置存储引擎，charset设置编码。

#### 创建数据表

代码：

    <?php
    $dbhost = 'localhost:3306';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
        die('连接失败: ' . mysqli_error($conn));
    }
    echo '连接成功<br />';
    $sql = "create table table_tbl( ".
            "table_id int not null auto_increment, ".
            "table_title varchar(100) not null, ".
            "table_author varchar(40) not null, ".
            "submission_date DATE, ".
            "primary key ( runoob_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
    mysqli_select_db( $conn, 'RUNOOB' );
    $retval = mysqli_query( $conn, $sql );
    if(! $retval )
    {
        die('数据表创建失败: ' . mysqli_error($conn));
    }
    echo "数据表创建成功\n";
    mysqli_close($conn);
    ?>

#### MySQL 字段属性应该尽量设置为 NOT NULL

首先，考虑空值“”和null的概念：

1. 空值是不占用空间的
2. `mysql`中`null`其实是占用空间的

### MySQL删除数据表

语法，删除`mysql`数据表的语法：

`drop table table_name;`

#### 使用PHP脚本删除数据表

语法：

`mysqli_query(connection,query,resultmode);`

使用了PHP脚本删除数据表:

    <?php
    $dbhost = 'localhost:3306';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
      die('连接失败: ' . mysqli_error($conn));
    }
    echo '连接成功<br />';
    $sql = "drop table table_tb1";
    mysqli_select_db( $conn, 'web' );
    $retval = mysqli_query( $conn, $sql );
    if(! $retval )
    {
      die('数据表删除失败: ' . mysqli_error($conn));
    }
    echo "数据表删除成功\n";
    mysqli_close($conn);
    ?>

## MySQL 插入数据

`mysql`数据表插入数据通用`insert into`语法：

    insert into table_name(field1,field2,...fieldN)
        values
        (value1,value2,...valueN);

### 添加数据

代码：

    <?php
    $dbhost = 'localhost:3306';  // mysql服务器主机地址
    $dbuser = 'root';            // mysql用户名
    $dbpass = '123456';          // mysql用户名密码
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
      die('连接失败: ' . mysqli_error($conn));
    }
    echo '连接成功<br />';
    // 设置编码，防止中文乱码
    mysqli_query($conn , "set names utf8");
     
    $table_title = '学习';
    $table_author = 'web';
    $submission_date = '2018-03-06';
     
    $sql = "insert into table_tbl ".
            "(table_title,table_author, submission_date) ".
            "values ".
            "('$table_title','$table_author','$submission_date')";
     
    mysqli_select_db( $conn, 'web' );
    $retval = mysqli_query( $conn, $sql );
    if(! $retval )
    {
      die('无法插入数据: ' . mysqli_error($conn));
    }
    echo "数据插入成功\n";
    mysqli_close($conn);
    ?>

### INSERT 插入多条数据

`INSERT INTO table_name  (field1, field2,...fieldN)  VALUES  (valueA1,valueA2,...valueAN),(valueB1,valueB2,...valueBN),(valueC1,valueC2,...valueCN)......;`

## SQL基本语法

学习`sql`语句和`mysql`基本数据类型，学习掌握数据插入，修改，删除的sql语句，查询语句，以及各类特定的查询语句。

学会数据库事务的概念，特性以及使用方法。

`sql`的目录也整理一个思维导图：

![](https://user-gold-cdn.xitu.io/2020/2/23/170706f3aa22a361?w=908&h=699&f=png&s=70465)

## sql语句简介

结构化查询语言简称`SQL`，结构化查询语言是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统。

`sql` 语句就是对数据库进行操作的一种语言。

`sql`分三种类型：

1. `DDL`语句，数据定义语句，定义了不同数据库，表，列，索引等数据库对象。
2. `DML`语句，数据操作语句，用于添加，删除，更新和查询数据库记录，并检查数据完整性。
3. `DCL`语句，数据控制语句，定义数据库，表，字段，用户的访问权限和安全级别。

## mysql基本数据类型

`mysql`提供了多种数据类型，包括数值类型，字符串类型，日期和时间类型。

1. 数值类型
2. 字符串类型
3. 日期和时间类型

### 数值类型

`mysql`的数值类型：

1. 整数类型
2. 浮点数类型
3. 定点数类型

整数类型：

1. `tinyint`
2. `small int`
3. `medium int`
4. `int`
5. `big int`

浮点数类型：

1. `float`
2. `double`

定点数类型：

1. `decimal`

**整数类型的划分是根据存储空间的大小和表示范围的大小来划分**

浮点类型是用来表示实数的一种方法，根据位数和精度，浮点类型分单精浮点数（8位精度）和双精浮点数（16位精度）。

## 字符串类型

提供了多种字符串类型：

1. `char`
2. `varchar`
3. `binary`
4. `varbinary`
5. `blob`
6. `text`
7. `enum`
8. `set`

### char与varchar

1. `char`定义固定长度字符串
2. `varchar`定义可变长度字符串

`char`的长度固定为创建表时声明的长度，其取值范围为0到255，当保存`char`值时，在右边填充空格以达到指定的长度。

当检索到`char`值时，其尾部的空格会被删除，所以在存储时，一般字符串右边不能有空格。如果字符串右边有空格，在查询出来后会被删除。

`varchar`的长度可以指定为0到6535，`varchar`值在保存时只保存需要的字符串，并另外加一个字节来记录长。

### `binary`与`varbinary`

`binary`和`varbinary`用来存储二进制字符串。没有字符集，并且会排序和比较基于列值字节的数值。

### text与blob

`text`和`blob`是以对象类型保存的文本与二进制。

`text`视为足够大的`varchar`，将`blob`视为足够大的`varbinary`，但`text`和`blob`与`varchar`和`varbinary`的不同之处：

1. 当保存或检索`blob`和`text`的值时不删除尾部空格。
2. 在比较时，会用空格对`text`进行扩充以适应比较的对象。
3. 对于`blob`和`text`的索引，必须制定索引前缀的长度。
4. `blob`和`text`不能有默认值。

对弈`text`和`blob`对象的最大字符串长度由其类型确定。

`text`分为`tinytext`,`text`,`mediumtext`和`longtext`四种类型。

`blog`分为`tinyblob`，`blob`，`mediumblob`和`longblob`四种类型。

### enum

`enum`表示枚举类型，它的取值范围需要在创建表时通过枚举方式显式制定。`enum`是忽略大小写的。`enum`只允许从值集合中选取单个值，不能一次选取多个值。

### set

set是一个集合对象，可以包含0到64个成员，其所占存储空间的大小是因集合成员数量的不同而有所不同的。

## 日期和事件类型

提供了多种日期和时间类型：

1. `year`
2. `time`
3. `date`
4. `datetime`
5. `timestamp`

日期格式，`year`，YYYY；`time`，HH:MM:SS；`date`，YYYY-MM-DD；`datetime`，YYYY-MM-DD HH:MM:SS，`timestamp`，YYYY-MM-DD HH:MM:SS。

## 数据插入

`insert into 表名 values (值1,值2,...);`

`insert into 表名 (列1,列2,...) values (值1，值2);`

在`mysql`中，`insert`语句，可以一次性插入多条记录，语法格式如下。

`insert into 表名 (列1，列2，...) values (值1，值2，...), (值1，值2，...),...;`

## 数据修改

通过`update`命令进行修改：

`update 表名 set 列名 = 新值 whert 列名 = 某值;`

`update 表1，表2，...set 表1.列1，表2.列2，...where 条件;`

## 数据删除

可以使用`delete`命令进行删除：

`delete from 表名 where 列名=值;`

`delete`命令可以一次删除多个表的数据：

`delete 表1，表2，... from 表1，表2，...where 条件；`

## 数据查询

最基本的`select`语句的语法格式：

`select 字段 from 表名 where 条件;`

### 条件查询

条件查询的语句：

`select 字段 from 表名 where 条件;`

### 联合查询

`union`操作符

`union`操作符用于合并两个或多个`select`语句的结果集。

代码：

    select 条件 from 表1
    union
    select 条件 from 表2;

#### `union`和`union all`的主要区别

1. `union all`用于将结果集直接合并在一起。
2. `union`用于将`union all`后的解构进行一次`distinct`，以删除重复结果记录。

### 不重复查询

语法格式如下：

`select distinct 字段 from 表名;`

### 模糊查询

语法格式：

`select 字段 from 表名 where 字段 like 值;`

`%`的使用，用来匹配0个或多个字符，可以匹配任意类型和长度的字符，对长度没有限制。

`“_”`的使用，用来匹配任意单个字符，常用来限制表达式的字符长度。

### 排序查询

使用`order by`关键字来排序：

`select 字段 from 表名 where 条件 order by field1 desc/asc, field2 desc/asc, ...;`

排序方式：`desc`表示降序排列，`asc`表示升序排序。默认值为`asc`。

`order by`后面可以跟多个不同的排序字段。

### 限制查询

使用`limit`关键字进行限制查询，格式：

`select 字段 limit 起始偏移量,行数;`

### 聚合

聚合语句格式：

`select 字段 op_name from 表名 where 条件 group by filed1, filed2, ... with rollup having 条件；`

`op_name`表示要进行的聚合操作，就是聚合函数。

聚合函数：

1. `sum`函数求和
2. `count`函数记录数
3. `max`函数最大值
4. `min`函数最小值
5. `groupby`表示要进行分类聚合的字段
6. `with rollup`表示是否对分类聚合后的结果进行在汇总
7. `having`表示对分类后的结果进行条件过滤

### 连接

#### 内连接

内连接查询是指所有查询的结果都能够在连接的表中有对应记录。在默认情况下是内连接，可以不写`join`关键字，或者写`inner join`。

`join`分三类：

1. `inner join`：获取两个表中字段匹配关系的记录。
2. `left join`：获取左表所有记录，即使右表没有对应匹配的记录。
3. `right join`：用于获取右表所有记录，即使左表没有对应匹配的记录。

![](https://user-gold-cdn.xitu.io/2020/2/23/1707169bb07c6585?w=200&h=145&f=png&s=11994)

![](https://user-gold-cdn.xitu.io/2020/2/23/170716a1cf403188?w=200&h=145&f=png&s=13617)

![](https://user-gold-cdn.xitu.io/2020/2/23/170716a5409e41be?w=200&h=145&f=png&s=14228)

#### 左连接和右连接

左连接是指以左边的表的数据为基准，去匹配右边的表的数据。

1. 如果匹配到相应数据，则显示匹配结果
2. 如果匹配不到相应数据，就显示为null

左连接的关键字：`left join`。
右连接的关键字：`right join`。

右连接反之。

## 事务

事务概述：事务，一般是指要做的或所做的事情。在计算机术语中是指访问并可能更新数据库中各种数据项的一个程序执行单元。

事务由事务开始和事务结束之间执行的全体操作组成。

事务就是一组由`sql`语句组成的业务逻辑，只有事务内的所有`sql`语句都成功执行，整个事务才算成功，否则就是失败。

### 事务的四大特性

1. 原子性
2. 一致性
3. 隔离性
4. 持久性

## 事务提交

默认情况下，`sql`语句是自动提交的，每条`sql`语句在执行完毕后会 自动提交事务，要想统一提交事务，需要先关闭`mysql`的自动提交功能。

查看数据库是否开启自动提交：

`show variables like 'autocommit';`

使用命令关闭自动提交：

`set autocommit=0;`

![](https://user-gold-cdn.xitu.io/2020/2/23/170712c2317d83ce?w=506&h=255&f=png&s=15761)

命令手动进行事务提交：

`commit`

## 事务回滚

事务中已执行成功的语句结果应该回退至未执行状态，称为事务回滚。

事务回滚：

`rollback`

### 事务隔离级别

事务的并发读问题

1. 脏读：读取到另一个事务未提交数据；
2. 不可重复读：两次读取不一致；
3. 幻读（虚读）：读到另一事务已提交数据。

### 开始事务

事务以`begin transaction`开始：

格式：

`begin transaction <事务名称> |@ <事务变量名称>`

语法说明如下：

`@<事务变量名称>`由用户定义的变量，必须用`char,varchar,nchar或nvarchar`数据类型来声明该变量。

`begin transaction`语句的执行。

### 提交事务

`commit`表示提交事务，即提交事务的所有操作。

### 撤销事务

`rollback`表示撤销事务，即在事务运行的过程中发生了某种故障，事务不能继续执行，系统将事务中对数据库的所有已完成的操作全部撤销，回滚到事务开始时的状态。

语法格式：

`rollback[transaction]`

## MySQL 正则表达式

1. `^`匹配输入字符串的开始位置。
2. `$`匹配输入字符串的结束位置。
3. `[...]`字符集合。匹配所包含的任意一个字符。
4. `[^...]`负值字符集合。匹配未包含的任意字符。
5. `*`匹配前面的子表达式零次或多次。
6. `+`匹配前面的子表达式一次或多次。
7. `{n}`n 是一个非负整数。匹配确定的 n 次。
8. `{n,m}`m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。

## sql语句

`sql`语句：

`select lastname from persons`

1. `select`从数据库表中获取数据
2. `update`更新数据库表中的数据
3. `delete`从数据库表中删除数据
4. `insert into`向数据库表中那个插入数据

## DDL语句

- `create database`创建新数据库
- `alter database`修改数据库
- `create table`创建新表
- `drop table`删除表
- `alter table`变更数据库表
- `create index`创建索引
- `drop index`删除索引

### 语句

`SELECT` 语句用于从表中选取数据。

`SELECT 列名称 FROM 表名称`

`SELECT * FROM 表名称`

`SELECT LastName,FirstName FROM Persons`

`SQL SELECT DISTINCT` 语句

在表中，可能会包含重复值。关键词 DISTINCT 用于返回唯一不同的值。

语法：

`SELECT DISTINCT 列名称 FROM 表名称`

`WHERE` 子句用于规定选择的标准。

`SELECT 列名称 FROM 表名称 WHERE 列 运算符 值`

|操作符|	描述|
|:---|:---|
|`=`|	等于|
|`<>`|	不等于|
|`>`|	大于|
|`<`|	小于|
|`>=`|	大于等于|
|`<=`|	小于等于|
|`BETWEEN`|	在某个范围内|
|`LIKE`|	搜索某种模式|

如果第一个条件和第二个条件都成立，则 `AND` 运算符显示一条记录。

如果第一个条件和第二个条件中只要有一个成立，则 `OR` 运算符显示一条记录。

`ORDER BY` 语句用于对结果集进行排序。

`INSERT INTO` 语句

`INSERT INTO 表名称 VALUES (值1, 值2,....)`

`INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)`

`Update` 语句用于修改表中的数据。

`UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值`

`DELETE` 语句用于删除表中的行。

`DELETE FROM 表名称 WHERE 列名称 = 值`

## 总结

数据库的发展历程：

1. 网状型数据库
2. 层次型数据库
3. 关系数据库
4. 面向对象数据库

关系数据库:

1. 桌面数据库
2. 客户/服务器数据库

数据表是存储数据的逻辑单元。

数据表中，一行称为一条记录，一列称为一个字段。

主键：唯一标识此条记录。

## 后记

扫码关注公众号，订阅更多精彩内容。

![](https://user-gold-cdn.xitu.io/2020/2/23/170714c2361167e4?w=1710&h=624&f=png&s=158784)
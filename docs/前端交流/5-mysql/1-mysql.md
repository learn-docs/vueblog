## MySQL数据库

### MySQL介绍

?> 概念

数据库：

> 一系列的行和列被称为表，一组表组成了数据库。

关系型数据库：

> 以行和列的形式存储数据（MySql, Orcale, SqlServer, Access）

非关系型数据库（Nosql）：

> 是以键值对的形式存储数据，不提供对sql语句的支持； （MongoDB）

### 关系型数据库和非关系型数据库的区别

?> 成本

nosql数据库基本上都是开源软件，不像oracle数据库那样收费，和关系型数据库比起来价格便宜。

?> 查询速度

nosql数据库是将数据存储到缓存之中，关系型数据库将数据存储到硬盘中，所以nosql数据库查询速度快。

?> 存储数据的格式

nosql的存储格式是key，value形式、文档形式等等，所以可以存储基础类型以及对象或者集合等各种格式，关系型数据库只支持基础类型。

?> 拓展性

关系型数据库有join这个样的多表查询机制的限制导致拓展很艰难

### 安装----集成安装  XAMPP

在XAMPP-MySQL-bin  输入cmd

MySQL管理

MySQL数据库管理

① 查询数据库：

    show databases;

② 创建数据库：

    create database 数据库名 character set 'utf8';

③ 显示数据库创建信息：

    show create database 数据库名;

④ 显示所有数据库：

    show databases;

⑤ 删除数据库：

    drop database db_name;

⑥ 进入数据库：

    use 数据库名;

⑦ 显示当前打开的数据库：

    select database();

MySQL表结构管理

① 创建表：

    create table 表名(字段 字段类型,....)

②查看数据表：

    show  tables;----所有的表

③查看数据表结构：

    describe 表名;

④查看创建表信息：

    show create table 表名;

⑤删除数据表：

    drop table 表名;

⑥修改表名称：

    alter table 表名 rename to 新表名;

⑦修改表结构 新增字段：

    alter table 表名 add 字段名 数据类型  after 字段名;

⑧修改表结构 删除字段：

    alter table 表名 DROP 字段名;

⑨修改表结构 修改字段：

    alter table 表名 CHANGE 旧字段名 新字段名 数据类型;
		
MySQL用户管理

① 进入数据库：

    mysql –u root –p

② 用户管理：

    user mysql;

③ 查看所有用户：

    select host,user,password  from user;

④ 修改密码：

    set password for 'root'@'localhost'= password('1234');

⑤ 创建用户：

    create user 'username'@'host' identified by 'password';

⑥ 删除用户：

    drop user 'username'@'host';

默认数据库

> information_schema：提供了访问数据库元数据的方式。

> 元数据是关于数据的数据，如数据库名或表名，列的数据类型，或访问权限等。

> mysql MySQL的核心数据库，主要负责存储数据库的用户、权限设置、关键
字等 MySQL自己需要使用的控制和管理信息。

> 不可以删除，也不要轻易修改这个数据库里面的表信息。

> test  安装时候创建的一个测试用数据库，空数据库，没有任何表，可以删除
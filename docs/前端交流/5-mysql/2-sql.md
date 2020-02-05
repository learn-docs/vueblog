## SQL基本语法

### SQL语句介绍

基本规范：

?> SQL 对大小写不敏感，一般数据库名称、表名称、字段名称全部小写

?> MySQL要求在每条 SQL 命令的末端使用分号

注释：

    # 这个注释直到该行结束
    -- 这个注释直到该行结束

    /* 这是一个在行中间的注释 */

    /*
    这是一个
    多行注释的形式
    */

### MySQL基本数据类型

常用  

- char(定长字符串) 
- varchar(变长字符串) 
- text(文本) 
- int(整数型)  
- date(日期值)  
- datetime(日期和时间)

### 数据的增、删、查、改

增：

	insert into students(name,age) values('张三','20');

	insert into students(name,age) values('张三','20')，('李四','21')，('王五','22') ……

删：

    delete from 表名 where xx=xxx;

改：

    update 表名 set xx=xx,xxx=xx where xxx=xxx and xxx=xxx;

#### 查：

查询表达式：

    select database();
    
    select version();
    
    select user();

条件表达式

?> ①指定字段

    select 字段 1,字段 2... from 表名;

?> ②所有字段

    select * from 表名;

?> ③去重后

    select distinct 字段 from 表名;

?> ④统计不重复的个数

    select count(distinct 字段名) from 表名;

?> ⑤查询id在（1,3,7）中的语句

    select * from students where id=1 || id=3 || id=7;

    select * from students where id in(1,3,7);

?> ⑥查询id在…之间

    select * from students where id>20 && id<40;
    select * from students where id between 20 and 40;

?> ⑦查询id不在…之间

    select * from students where id not between 30 and 40;

?> ⑧模糊查询

    包含名字二的数据：select * from students where name like '%二%';
    以5结尾的两位数数据：select * from students where id like '_5';

?> ⑨Limit

从索引为3的记录开始，返回 4条记录：

    select * from students limit 3,4

?> ⑩分组查询

    select sex from students group by sex;

分组统计：

    select count(*),city from students group by city;

?> ⑪排序查询

默认升序（asc）

    select * from students order by birthday;

降序：

    select * from students order by birthday desc;

查询语句的书写顺序：

    select → 字段→ from→ 表名→where→group by→order by→limit

起别名：

    Select a.name as newName from student;
					
!> 多表查询

    Select  a.name, c.name, b.score 
    From  students as a, score as b, course as c 
    where b.user_id=6 and b.course_id=4 and a.id=b.user_id and c.id=b.course_id;

!> 子查询

    select * from students where livecity=(select id from city where name='北京');

子查询的外层可以是：

    select，insert，update
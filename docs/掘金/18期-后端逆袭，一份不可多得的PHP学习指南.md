## 前言

我想问自己，为什么要学习`PHP`，什么是`PHP`，学习之后，我能做什么，未来的发展，那么如何学习一门编程语言，如何给出学习建议。

`php`是一种超文本预处理器的学习语言，它是一种被广泛应用的开放源代码的多用途的脚本语言，它可嵌入到`HTML`中，尤其是适合`web`开发。

`PHP`是一种在服务器端执行的嵌入`HTML`文档的脚本语言。语言的风格类似于`C`语言，现在被很多的网站编程人员广泛的运用。使用`PHP`可以开发各种交互式的动态网页。

那么如何理解动态网页呢？接下来说一说：

> 动态网站和静态网站的区别？

1. 动态网站：可以和数据库交互的网站
2. 静态网站：不能和数据库交互

还有如`LAMP`这些词代表什么意思呢？在PHP中常用到的：

> LAMP是什么呢，需要了解一下？

1. `L:LINUX`
2. `A:Apache`
3. `M:mysql`
4. `P:PHP`

扩展性说说如下词汇，需要我们逐步去了解。

### PHP环境搭建(LAMP,LNMP,LNMPA)

`LAMP`: `Linux+Apache+MySQL+PHP`

`LNMP`: `Linux+Nginx+MySQL+PHP`

`LNMPA`: `Linux+Nginx+MySQL+PHP+Apache`

`WAMP`: `Window+Apache+MySQL+PHP`

集成环境： `wampserver, xampp, phpstudy`

### apache，web服务器

`Apache`是世界上使用排名前列的`web`服务器软件，它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的`web`服务器端软件之一。它快速，可靠并且可通过简单的`api`扩充。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1451111071c449d2a8072c9b1e5748b5~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc293f19278847a3a7d3b8fb422ad393~tplv-k3u1fbpfcp-zoom-1.image)

那么让我们走进`PHP`世界，了解其语法结构吧！

### 基础语法

`PHP`文档结构：1.文档扩展名`.php`; 2.注意，文件名不要使用中文，也不要包含特殊字符

`PHP`标记风格：

- 标准风格

下面看看代码示例：
```js
<?php 代码段;?>
```

- 短风格

下面看看代码示例：
```js
<?代码段;?>
```

> 注意：需要配置`PHP`配置文件`php.ini`中`short_open_tag=On`，重启`Apache`服务器即可

- `ASP`风格：

下面看看代码示例：
```js
<% 代码段; %>
```

> 注意：需要配置`PHP`配置文件`php.ini`中`asp_tags=On`，重启`Apache`服务器即可

`PHP`语法风格示例：

```js
<?php
echo 'this is dada show dada';

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>55555--<?php echo 'hello world';?></title>
    <style media="screen">
      h1{
        color:<?php echo '5555';?>;
      }
    </style>
    <script type="text/javascript">
      alert('hello world');
    </script>
  </head>
  <body>
    <h1>this is dadada show time<?php echo 'dada';?></h1>
  </body>
</html>

<?php
// 标准风格的写法
// echo 输出一个或者多个字符串
/*
echo 'this is a dada';

echo '<br/>';

echo 'hello world';
*/

echo 'this is dada show time';
```

学习`php`需要工具，这里可以说说常使用的`phpstorm`
#### 讲讲`phpstorm`的安装和使用

`phpstorm`是`JetBrains`公司开发的一款商业的`PHP`集成开发工具，可以随时帮助用户对其进行编码，运行单元测试或者提供可视化`debug`功能。

#### 下载

进入`phpstorm`官网，点击`“downLoad”`按钮，进入下载页面。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d6b3a7f8dc34cf484ff3bad2dab735e~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/247f83839f304f5a92008f28a860111e~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e33c704b2204c598f5bb75190e934db~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55eb071e838a40fba09b2b17f8892fac~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65fe3cfe8021468cbc07a53e15eb04c3~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75d1e51e3a394d5ab6c0505d7242fd5d~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed6894a58aef499a9e00318741e809c5~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/181450f9ab0444539a884c59df7a8a28~tplv-k3u1fbpfcp-zoom-1.image)

最后，双击桌面图标即可。

### PHP语法结构

`php`文件命名注意事项：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c1f604d916e4e4698c84eb9d7af3fb2~tplv-k3u1fbpfcp-zoom-1.image)

变量的注意事项：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73aef1b913864bc680f1b98d128ee678~tplv-k3u1fbpfcp-zoom-1.image)

数据类型：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71eedf5d81b84dbeac5e984027283758~tplv-k3u1fbpfcp-zoom-1.image)

特殊符号：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7af0bb14de234f109e53340c1b4f0d07~tplv-k3u1fbpfcp-zoom-1.image)

> 单引号和双引号的区别

1. 双引号解析变量，单引号不解析变量
2. 单引号执行效率快
3. 双引号解析所有的转义符，单引号只解析`\`和`\\`这两个转义符

> 花括号的意义

1. 将变量变成一个整体
2. 第一种`${变量名}变量名`;
3. 第二种`{$变量名变量名}`;

> 通过函数形式实现临时转换

1. `intval(变量)`转成整型
2. `strval(变量)`转成字符串型
3. `boolval(变量)`转成布尔类型

> 永久转换

1. `settype`(变量，设置的类型）设置变量类型
2. `gettype`(变量)得到变量的类型

> 变量函数库检测变量类型

1. `is_int`(变量) > 检测整型
2. `is_string`(变量) > 检测字符串类型
3. `is_array`(变量) > 检测数组类型
4. `is_resource`(变量) > 检测资源类型
5. `is_object`(变量) > 检测对象类型
6. `is_null`(变量) > 检测null类型
7. `is_numeric`(变量) > 检测数值型

### 常量

- 问：什么是常量？
- 答：常量和变量相反，在脚本执行期间该量不能被修改

> 系统常量

1. `PHP_VERSION`:得到`php`版本
2. `PHP_OS`：得到服务器的操作系统
3. `M_PI`:`PI`的值

- 注意事项：

1. 常量名称前面没有`$`符号
2. 开头用字母或者下划线，尽量使用大写字母
3. 常量定义出来，不能改变也不能取消定义
4. 常量的值只能为标量，可以用资源，但是不推荐
5. 常量默认区分大小写

> 检测常量是否被定义

1. `defined`函数
2. `var_dump`（`defined`变量）

> 魔术常量

1. `__LIEN__`得到行号
2. `__FILE__`得到文件的完整路径和文件名
3. `__FUNCTION__`函数名称
4. `__CLASS__`类
5. `__METHOD__`方法
6. `__DIR__`返回文件所在路径

以点的形式来连接我们的变量

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b14b6574362f413eacd0bd4f72397d63~tplv-k3u1fbpfcp-zoom-1.image)

### 随机生成验证码

让我们来看看下面示例代码：
```
<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<title></title>
	<script src="jquery-2.2.3.js" type="text/javascript"></script>
</head>
<body>
<?php
header("content-type:text/html;charset=utf-8");
$str = '';
$rand = mt_rand(1000, 9999);
$str.='<span style="color:rgb('.mt_rand(0, 255).',
    '.mt_rand(0, 255).','.mt_rand(0, 255).')
    ">'.mt_rand(0, 9).'<span>';
$str.='<span style="color:rgb('.mt_rand(0, 255).',
    '.mt_rand(0, 255).','.mt_rand(0, 255).')
    ">'.mt_rand(0, 9).'<span>';
$str.='<span style="color:rgb('.mt_rand(0, 255).',
    '.mt_rand(0, 255).','.mt_rand(0, 255).')
    ">'.mt_rand(0, 9).'<span>';
$str.='<span style="color:rgb('.mt_rand(0, 255).',
    '.mt_rand(0, 255).','.mt_rand(0, 255).')
    ">'.mt_rand(0, 9).'<span>';
?>
<label for="check">请输入验证码:</label>
<div id="hiddent_val" style="display: none;"><?php echo $str ?></div>
<input type="text" name="check" id="check_val"/><?php echo $str; ?>
<br/>
<input type="button" onclick="javascript:check();" value="提交"/>

<script>
 function check(){
   var v1=$("#hiddent_val").text();
   v1 = v1*1;
   var v2=$("#check_val").val();
   v2 = v2*1;
   if(v1==v2){
   	alert('true');
   }else{
    alert('false');
   }
 }
</script>
</body>
</html>
```

### 日期函数

日期函数格式代码：

```
data($format[,$time=time()])
time():
Y:年，m:月, d:日, h:小时, i:分钟, s:秒

w:星期一到星期天 0表示星期天
设置时区：函数形式
date_default_timezone_get()

date_default_timezone_set($timezone);
```

### 预定义变量

预定义变量：系统内已定义的变量，如下有：

1. `$_POST:http`-`post`变量，接收表单以`post`方式发送的数据
2. `$_GET:HTTP`-`get`变量，接收以`?`形式传参的数据
3. `$_FILES:HTTP`文件上传变量
4. `$_SERVER`:服务器和执行环境变量
5. `$_ENV`：环境变量
6. `$_SESSION`:会话变量
7. `$_COOKIE`:HTTP Cookies
8. `$_REQUEST:$_GET+$_POST+$COOKIE`
9. `$php_errormsg`前一个错误信息
10. `$GLOBALS`超全局变量，在全部作用域中始终可用的内置变量

### Switch...case

让我们看看`Switch...case`的示例代码如下：

```
<?php
$a = 2;
switch ($a){
    case 1:
        echo 'a<br/>';
        break;
    case 2:
        echo 'b<br/>';
        break;
    case 3:
        echo 'c<br/>';
        break;
        default:
        echo '默认的执行';
}
```

### for示例

让我们看看`for`的示例代码如下：

```
<?php
//1到100的数进行相加   5050，
//1+2+3+4
$sum =0;
for($i=0;$i<101;$i++){
    $sum = $sum+$i;
}
echo $sum;
echo '<hr/>';
//1到100能够被2整除的数，
for($i=1;$i<101;$i++){
    if($i%2==0){
        echo '这是能够被2整除的数：'.$i.'<br/>';
    }
}
```

学习小案例如下-乘法表代码：

```
<?php

/* 1*1=1;
 * 1*2=2 2*2=4
 * */
for($i=1;$i<=9;$i++){
    for($j=1;$j<=$i;$j++){
        echo $j.'*'.$i.'='.($i*$j)."\t";
    }
    echo '<br/>';
}
```

### 特殊流程控制

特殊流程控制-示例：

```
<?php
//break跳出整个for循环
for($i=1;$i<10;$i++){
    if($i==3){
        break;
    }
    echo '这里是$i的值：'.$i.'<br/>';
}
echo '<hr/>';
//continue跳出当前循环
for($i=1;$i<10;$i++){
    if($i==3){
        continue;
    }
    echo '这里是$i的值：'.$i.'<br/>';
}
echo '<hr/>';


echo '这里是开始部分';
goto jump;
echo '这里是jump下面的代码';
jump:
echo '这里是jump里面的代码';

echo '<hr/>';
echo '这里是结束部分';
```

### php数组

什么是PHP数组呢？数组是什么呢？- 数组：数据的集合，在`php`中数组实际上是一个有序映射。

通过`array()`形式声明：

1. `array()`空数组
2. `array(值1,值2...)`下标连续的索引数组，数组的下标从0开始
3. `array(key=>value,key=>value...)`可以声明索引数组和关联

通过：`print_r`打印数组

数组或者混合数组：

1. 数组的键名可以是整型或者字符串型
2. 如果键名不是整型或者字符串型，会做如下的强制转换
3. 包含有合法整型值的字符串会转换为整型
4. 浮点数取整转换成整型
5. 布尔`true`转换为1,`false`转换为0
6. `null`转换为空字符串
7. 数组和对象不能用作键名

### 动态和快速创建数组 

动态创建数组：

1. `$`数组名称`[]`：下标连续的索引数组
2. `$`数组名称`[数字]`：指定数组索引
3. `$`数组名称`[字符串]`：关联数组

快速创建数组-示例格式：

```
range($min, $max[$step=1]); 快速创建索引数组

compact($varname,...);快速创建关联数组
```

学习小示例：

```
<?php
// $arr = array();
// var_dump($arr);
//索引数组 下标是从数字开始的
$arr = array(
    1,
    5.5,
    false,
    'dada'
);
print_r($arr);
echo '<hr/>';

//array(key=>value,key=>value...)
$arr1 = array(
  5=>'dada',
  6=>12,
    9=>false,
    4=>4.4
);
print_r($arr1);
echo '<hr/>';

//关联数组，下标是字符串
//username 可以称呼为我们的键名，
//我们的键名所对应的值就是键值
$arr2 = array(
  'username'=>'dada',
    'password'=>123456,
    'age'=>27
);
print_r($arr2);
echo '<hr/>';

//索引+关联混合使用
$arr3 = array(
  1,2,3,4,5,
    'username'=>'dadaqianduan',
    'addr'=>'haha'
);
print_r($arr3);
echo '<hr/>';

$arr3['username'] = 'dada';
print_r($arr3);
```

### 通过数组指针函数遍历数组

1. `current($arr)`，得到数组当前指针所在位置元素的键值
2. `key($arr)`,得到数组当前指针所在位置元素的键名
3. `next($arr)`，将数组指针向下移动一位，并且得到数组指针所在位置元素的键值
4. `prev($arr)`，将数组指针向上移动一位，并且返回当前指针所在位置元素的键值
5. `end($arr)`，将数组指针移动到数组的末尾，并且返回当前元素的键值
6. `reset($arr)`,将数组指针移动到数组的开始，并且返回当前元素的键值

> 通过foreach遍历数组

```
foreach(数组名称 as $key=>$val){}
```

通过list和each遍历数组

1. `list($var[,$var...])`:把数组中的值赋给一些变量
2. `each($arr)`返回数组中当前的键/值对并将数组指针向前下移动一位

### 用户列表页面

如何创建用户列表页面，示例代码格式如下：

```
<tr style="text-align:center;">
</tr>
<?php foreach($userInfo as $val){
?>
<tr style="text-align:center;">
 <td><?php echo $val['id'];?></td>
 <td><img src="img/<?php echo $val['id'];?>" alt=""/></td>
</tr>
 <?php
 }?>
```

### 添加留言页面

如何添加留言页面，示例代码格式如下：

```
<body>
 <h2>添加留言页面</h2>
 <form action="doAction.php?act=add" method="get">
  <table border="1" width="80%" cellpadding="0" cellspacing="0" bgcolor="blue">
  <tr>
   <td>留言者</td>
   <td><input type="text" name="username" id="" placholder="请输入您的呢称"/></td>
  </tr>
  </table>
 </form>
</body>
```

提交反映-`doAction.php`

```
<?php
$username = $_GET['username'];
$title = $_GET['title'];
$content = $_GET['content'];

$arr[] = array(
 'username' => $username,
 'title' => $title,
 'content' => $content
);
print_r($arr);
```
收集留言信息：
```
$filename = 'text.txt';
$data = 1;
file_put_contents($filename, $data);
```
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e9b8df968c14f6fa6d74f887e2b75a6~tplv-k3u1fbpfcp-zoom-1.image)

```
<input type="hidden" name="act" value="add"/>

?php 
$username = isset($_GET['username']) ? $_GET['username'] : '';
$time = date('Y-m-d h:i:s');
$act = isset($_GET['act']) ? $_GET['act']:''; // 是否是添加页面

// 判断
if(file_exists($filename) && filesize($filename)>0){
 $str = file_get_contents($filename);
 $arr = unserialize($str);
}

if($act == 'add'){
 ...
 $arr = serialize($arr);
 file_put_contents($filename, $arr);
}
```

```
if($act == 'add') {
 $arr[] = array(
  'username' => $username,
  'title' => $title,
  'content' => $content,
  'time' => $time
 );
 $arr = serialize($arr);
 if(file_put_contents($filename, $arr)){
  echo'添加留言成功';
 }else{
  echo '添加留言失败';
 };
}
```

### php函数

总结9点常用函数，下面来看看它们各有什么含义以及作用：

1. `strlen($string)`得到字符串长度
2. 查找字符串：

- `strpos($string,$search[,$offset])`:在指定字符串中查找目标字符串第一次出现的位置
- `stripos($string,$search[,$offset])`:忽略大小写的去查找
- `strrpos($string,$search[,$offset])`:在指定字符串中查找目标字符串最后一次出现的位置
- `strripos($string,$search[,$offset])`:忽略大小写的去查找最后一次出现的位置
- `strstr|strchr($string,$search[,$before_needle])`:查找字符串的首次出现，返回的是字符串
- `strrchr($string,$search)`:查找指定字符在字符串中的最后一次出现
- `stristr($string,$search[,$before_needle])`:忽略大小写的去查找
- `str_replace($search,$replace,$string)`:在指定字符串中去查找另外一个字符串，找到之后将其替换成指定字符串
- `str_ireplace($search,$replace,$string)`:忽略大小写的去查找并替换

3. 字符串大小写

- `strtolower($string)`：返回小写之后的字符串
- `strtoupper($string)`: 返回大写之后的字符串
- `ucwords($string)`：单词的首字母大写
- `ucfirst($string)`:字符串的单词的首字母大写
- `lcfirst($string)`：字符串的单词的首字母小写

4. 字符ASCII

- `ord($char)`:得到指定字符的ASCII
- `chr($ascii)`:根据ASCII得到指定的字符

5. 字符串的截取

- `substr($string,$start[,$length])`:截取字符串
- `substr_replace($string,$replace,$start[,$length]):`替换字符串的子串

6. 加密

- `md5($string)`: 计算字符串的md5的散列值，返回`32`位长度的字符串
- `sha1($string)`: 计算字符串的sha1的散列值，返回`40`位长度的字符串

7. 过滤：

- `trim($string[,$charlist])`:默认过滤字符串两端的空格，也可以过滤指定字符串
- `ltrim($string[,$charlist])`:过滤字符串左端
- `rtrim | chop($string[,$charlist])`:过滤字符串右端
- `strip_tags($string[,$allowTag])`:过滤字符串中的html标记
- `addslashes($string)`:使用反斜线引用字符串中的特殊字符
- `htmlentities($string[,$flag=ENT_COMPAT])`:将所有字符转换成HTML实体
- `htmlspecialchars($string[,$flag=ENT_COMPAT]`:将字符串中的特殊字符转换成HTML实体
- `nl2br($string)`：将字符串中的`\n`用`<br/>`替换

8. 拆分/合并

- `explode($delimiter,$string)`将指定字符串拆分成数组
- `implode | join($delimiter,$array)`以指定分隔符将数组中的键值连接成字符串
- `str_split($string[,$split_length=1])`将字符串转换成数组

9. 常用函数

- `strrev($string)`反转字符串
- `str_shuffle($string)`随机打乱字符串
- `str_repeat($string)`重复字符串
- `str_getcsv(...)`解析csv字符串为一个数组
- `parse_str($str[,$arr])`将字符串解析成多个变量

> 接下来以表格的形式展示如下内容

数学函数库表格如下：

| 函数 | 说明 |
| :--- | :--- |
| `abs($number)` | 求绝对值 |
| `ceil($number)` | 进一取整 |
| `floor($number)` | 舍掉小数部分 |
| `round($number,$percision)` | 四舍五入 |
| `pow($base,$exp)` | 幂运算 |
| `sqrt($number)` | 平方根 |
| `max($val1,$val2,..)` | 求最大值 |
| `min($val1,$val2...)` | 求最小值 |
| `mt_rand($min,$max)` | 产生随机数 |

日期时间函数库表格如下：

| 函数 | 说明 |
| :--- | :--- |
| `date_default_timezone_get()` | 得到默认时区 |
| `date_default_timezone_set($timezone)` | 设置默认时区 |
| `date($format[,$time])` | 得到服务器的日期时间 |
| `time()` | 得到当前的时间戳 |
| `mktime()` | 取得一个日期的unix时间戳
| `getdate($timestamp)` | 取得日期时间信息 |
| `gettimeofday($return_float)` | 取得当前时间 |
| `microtime([$get_as_float])` | 返回当前unix时间戳和微妙数 |
| `strtotime($time[,$now=time()])` | 将任何英文文本的日期时间描述解析为`unix`时间戳 |

创建数组操作

| 函数 | 描述 |
| :--- | :--- |
| `range($min, $max[,$step=1])` | 快速创建下标连续的索引数组 |
| `compact($varname,$varname...)` | 快速创建关联数组 |
| `array_fill($start_index,$num,$value)` | 用给定的值填充数组 |
| `array_fill_keys($keys,$value)` | 使用指定的键和值填充数组 |
| `array_combine($keys,$values)` | 创建一个数组，用一个数组的值作为其键名，另外一个值作为其键值 |

键值相关操作表格如下：

| 函数 | 描述 |
| :--- | :--- |
| `count()` | 计算数组中的单元数目或对象中的属性个数 |
| `array_keys($array)` | 取得数组的键名作为下标连续的索引数组返回 |
| `array_values($array)` | 取得数组的键值作为下标连续的索引数组返回 |
| `array_filp($array)` |交换数组中的键名和赋值|
| `in_array()` | 检测数组中是否存在某个值 |
| `array_search()` | 在数组中搜索给定的值，如果成功则返回相应的键名 |
| `arry_key_exists()` | 检查给定的键名或索引是否存在于数组中 |
| `array_reverse()` | 数组倒置 |
| `shuffle()` | 打乱数组的元素 |
| `array_rand()` | 随机取出数组的键名 |
| `array_unique()` | 移除数组中重复的值 |
| `array_sum()` | 统计数组中元素值的总和 |

数组指针函数表格如下：

| 函数 | 描述 |
| :--- | :--- |
| `key($array)` | 得到当前指针所在位置元素的键名 |
| `current($array)` `pos($array)` | 得到当前指针所在位置元素的键值 |
| `next($array)` | 将数组指针向下移动一位，并且返回当前指针所在位置元素的键值 |
| `prev($array)` | 将数组指针向上移动一位，并且返回当前指针所在位置元素的键值 |
| `end($array)` | 将数组指针移动到数组的末尾,并且返回当前指针所在位置元素的键值 |
| `reset($array)` | 将数组指针移动到数组的开始，并且返回当前指针所在位置元素的键值 |
| `each($array)` | 返回数组中当前的键值对，并将数组指针向下移动一位 |
| `list($var,...)` | 将数组中元素的值赋给对应的变量 |
| `array_unshift($array,$value...)` | 在数组开头插入一个元素或者多个元素 |
|`array_shift($array)`|弹出数组的第一个元素 |
|`array_push($array,$value...)`|在数组末尾压入一个元素或者多个元素|
|`array_pop($array)`|弹出数组的最后一个元素|

数组的拆分与合并表格如下：

| 函数 | 描述 |
| :--- | :--- |
| `array_slice($array,$offset)` | 截取数组 |
| `array_merge()` | 合并数组 |

### 自定义函数的使用

如何声明函数呢？来看看如下代码：

```
function 函数名称([参数...]){
 函数体;
 return 返回值;
}
```

注意事项：

- 函数名称不要包含特殊字符，以字母或者下划线开始，跟上数字字母下划线
- 函数名称最好含义明确，最好以动词开头
- 函数名称最好遵守驼峰标记或者下划线法
- 函数名称不支持重名
- 函数名称不区分大小写，但调用的时候最好遵循大小写
- 函数参数不是必须的
- 函数默认返回Null,也可以通过return添加返回值

接下来我们看看带入的函数参数：

参数分为形参和实参：

形参，定义函数时声明的参数（必选参数：调用函数的时候必选要传参；可选参数：调用函数的时候如果不传参数，使用默认值；）

实参，调用函数时实际传入的参数

接下来了解变量的作用域，如下思维导图：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/185aaa5bfda848bd936eb6b256045925~tplv-k3u1fbpfcp-zoom-1.image)

接下来说说函数的传值和传引用区别：

1. 函数的传值在函数体内对变量做更改不影响变量本身
2. 传引用在函数体内对变量做更改影响变量本身

### 回调函数

回调函数是什么呢？

在开发过程中，有时候希望针对一个对象或者一个值执行多个不相干的操作，那么运用回调将是最好的方式。

```
<?php
function text1(){
 echo '我是达达';
}
function text2($username){
 echo '我是哪吒';
}
// 回调函数：函数体内的名称是我们要传入的参数（）；
function callBack($call,$str){
 $call($str);
}
// 回调函数的使用就是传入的参数是你想要回调的函数名称
callBack('text2','dadaqianduan');
```

### 递归函数

什么是递归函数，即函数体自己调用自己本身

写法示例：
```
function text($i) {
 echo $i;
 $i--;
 if($i>=0){
  text($i);
 }
}

text(2);
```

### 匿名函数

匿名函数示例：
```
$str = function() {
 echo 'dadaqianduan';
};
$str();

$str1 = function($username) {
 echo 'dada';
 echo $username;
};
$str1('哪吒');
```

### php包含文件

php的文件包含：`include`,`include_once`,`require`,`require_once`，就是将一个文件的内容包含进另外一个文件。

- `require`引用文件出错的时候 是一个报错一个警告
- `include`引用文件出错的时候 是两个警告
- 错误处理：`require`会生成致命错误并停止脚本
- 错误处理：`include`只会生成警告,并且脚本会继续

所以这里建议你使用`include`哦！

`include`或`require`语句会获取指定文件中存在的所有文本，代码，标记，并复制到使用`include`语句文件中。

语法格式如下：

```
include 'filename';
或
require 'filename';
```

php include示例：

让我们来创建要给名为'dada.php'的标准的页脚文件，代码如下：
```
<?php
 echo '<p> 达达 哪吒</p>';
?>
```

然后需要在另一个页面中引用这个页脚文件如下：

```
<html>
 <body>
  <p>魔王哪吒</p>
  <?php include 'footer.php'; ?>
 </body>
</html>
```

`require_once/include_once`，与`require/include`作用相同，不同在于执行到时会先检查目标内容是不是在之前已经导入过，如果导入过了，那么便不会再次重复引入其同样的内容。

### 面向对象

首先了解面向对象是什么呢？

它是一种思想，是一种开发方式，并不是实际的代码。

谈到面向对象，就要说到面向对象与面向过程的区别：

1. 其实面向过程强调的是功能行为（一件事怎么做）
2. 面向对象是将功能封装到对象，强调具备了功能的对象（一件事谁来做）
3. 面向对象的特点：继承，封装，多态

面向的几种方式：
```
OOA(Object Oriented Analysis)面向对象分析

OOD(Object Oriented Design)面向对象设计

OOP(Object Oriented Programming)面向对象编程
```

### 类和对象

说到面向对象就离不开类和对象的关系：类是具体事务的抽象，对象是这个类的具体实例。

怎么样定义一个类，类的定义：（类似class关键字来定义的）

```
class Person{
}

<?php
// 定义一个人类
class Person{
 // 类里面是有属性和方法存在的
 // public 访问修饰符
 public $userName = 'dada';
 public $age = 12;
}
// 通过new 关键字来创建我们的对象
$p = new Person();
echo $p->userName.'<hr/>';
echo $p->age.'<hr/>';
```

属性讲了，说说方法吧，如下示例：

```
<?php
class Person{
 public $userName;
 public $age;
 // 类里面的行为称为方法
 public function eat() {
  echo '我要吃饭';
 }
}
$p = new Person();
$p->eat();
```

### 对象在内存的分配

来说一下对象的内存分析，在PHP中，内存被划分为四个：

1. 数据段：用来存放程序中已初始化且不为0的全局变量如：静态变量和常量
2. 代码段：存放函数，方法
3. 栈空间段：存放小数据
4. 堆空间段：存放对象和数据量比较大的引用

### php访问修饰符

访问修饰符有哪些呢？如下展示：

1. `public`公共的，默认
2. `protected`受保护的
3. `private`私有的

代码示例如下

```
<?php
class Da{
 public $userName = 'dada';
 protected $age = 12;
 public function eat() {
  echo '我要吃饭';
 }
}
$da = new Da();
echo $da->userName

echo $da->age // 报错
```
修改如下：
```
<?php
class Da{
 public $userName = 'dada';
 protected $age = 12;
 public function eat() {
  echo '我要吃饭';
  //$this
  echo $this->age;
 }
}
$da = new Da();
echo $da->userName

echo $da->eat()
```

### 构造函数和析构函数

首先什么是构造函数呢？构造函数是通过`new`对象的时候会被调用的。

其次析构函数是什么？析构函数首先不能带有参数，析构函数会在对象的所有引用被删除或者显示的消失之前被调用。

```
<?php
class Person {
 public $userName;
 public $age;
 // php5.5之前的写法
 // public function Person() {
 //  echo '我是构造函数';
 // }
 // 通过一个魔术常量来写构造函数
 public function _construct($userName,$age) {
  // $this表示的是当前对象
  $this->userName = $userName;
  $this->age = $age;
 }
 // 析构函数
 public function _destruct(){
  echo '析构函数'
 }
}
$p1 = new Person('dada',12);
echo $p1->userName
$p1 = null; // 析构函数被调用
```

### set和get魔术方法

了解`set和get`方法：`set`对外界提供设置成员属性的方法，而`get`对外界提供访问成员属性的方法。

所以魔术常量：`_set`和`_get`。

如下示例：

```
<?php
class Person{
 private $userName;
 private $age;
 public function setAge($age){
  // $this->age = 12;
  // $this-age == private $age;
  $this->age = $age;
 }
 public function getAge(){
  return $this->age;
 }
 public function _set($key,$value){
  $this->userName = $value;
 }
 public function _get($key){
 return $this->userName;
}
$p = new Person();
// echo $p->userName;
$p->setAge(16);
echo $p->getAge();
```

### isset和unset魔术方法

1. `_isset`当外部调用`isset()`函数检测不可访问的属性或者不存在的属性时自动调用。
2. `_unset`当在类外部调用`unset`销毁不可访问属性时自动调用。

如下示例表示：

```
<?php
class Person{
 private $userName;
 private $age;
 public $abc;
 public function _construct($userName,$age){
  $this->userName=$userName;
  $this->age=$age;
 }
 public function _isset($name){
  echo '当外部调用isset()函数检测不可访问的属性或者不存在的属性时自动调用';
  return isset($name); // boolean
 }
 public function _unset($name){
  echo '当在类外部调用unset销毁不可访问属性时调用';
 }
}
$p = new Person('dada',12);
var_dump(isset($p->userName));
// echo '<hr/>'
unset($p->abc);
```

### 继承

下面来说说面向对象的继承，封装，多态中的继承特点：

那么继承的意义在于哪里，用继承可以减少重复代码，通过`extends`关键字来继承。

代码示例如下：
```
<?php
class Person{
 public $userName;
 public $age;
 public function eat(){
  echo 'dadaqianduan';
 }
}
class Student extends Person{
}
$stu = new Student();
echo $stu->eat();
```

### 使用`parent`关键字

继承中使用`parent`，代码如下：
```
<?php
class Person {
 public $userName='parent';
 public $age = 100;
 protected function eat() {
  echo `老爸要吃饭`;
 }
}
class Student extends Person {
 public $userName = 'children`;
 public $age = 12;
 // 重写 需要访问的修饰符必须和父类的平级或者大于父类，方法名字相同
 public function eat() {
  parent::eat().'<hr/>';
  echo 'children';
 }
}
$stu = new Student();
echo $stu->eat();
```

#### 使用final关键字

使用final关键字注意事项：

- `final`关键字不能修饰属性
- 被`final`修饰过的`class`和方法不能被继承或者重写

#### 使用static关键字

`static`用于表示静态的意思：

1. 被`static`所修饰的属性和方法都是静态的属性和方法
2. 静态的属性和方法的特点是不用通过对象来调用属性和方法
3. 可以通过类名来调用属性和方法

下面代码示例如下：

```
class Person {
 public static $i = 1;
 public static function eat(){
  echo '要吃饭';
 }
}
echo Person::$i;
Person::eat();
```

`self`在类内部通过`self`来访问静态的属性和方法：

下面代码示例如下：

```
class Student {
 public static $i = 1;
 public static function eat(){
  echo self::$i;
 }
}
Student::eat();
```

下面示例静态绑定的用法如下：

```
<?php
class A{
 public static function text1(){
  echo 'text1';
 }
 public static function text2(){
  echo 'text2';
  self::text1();
 }
}
class B extends A {
 public static function text1(){
  echo 'B-A';
 }
}
B::text2();
```

#### 使用const关键字

const，为常量修饰符，常量的特点，不能被修改，唯一的标识符，注意如下：常量要大写，不能通过对象来访问，不需要加`$`符号。

### 学生管理系统

示例连接数据库：

```
<?php
header("content-type:text/html；charset=urf-8");
// 建立连接并且返回连接对象
$link = mysqli_connect('localhost','root','root') or die('连接失败');
// 设置字符集
mysqli_set_charset($link,'utf8');
// 打开指定数据库
mysqli_select_db($link, 'dadaqianduan');
// 执行sql语句
$query = "insert user values(1,'dada','12345')“；
$res = mysqli_query($link, $query);
if($res){
 echo '插入数据成功';
}else{
 echo '插入数据失败';
}
```

所以`mysqli`操作数据库的步骤有：

1. 连接`mysql`
2. 设置字符集
3. 打开指定数据库
4. 执行`sql`查询
5. 释放结果集
6. 关闭连接

如果每次使用都要重写连接数据库，那么我们可以进行封装：

封装数组：`config.php`
```
<?php
$config = array(
    'host'=>'localhost',
    'user'=>'root',
    'password'=>'root',
    'charset'=>'utf8',
    'dbName'=>'dadaqianduan'
);


define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PWD','root');
define('DB_CHARSET','utf8');
define('DB_DBNAME','dadaqianduan');
```
连接
```
<?php
/**
 * 连接
 * @param string $host
 * @param string $user
 * @param string $password
 * @param string $charset
 * @param string $database
 * @return object 连接标识符
 */
function connect1($host,$user,$password,$charset,$database){
 $link = mysqli_connect($host,$user,$password) or die('数据库连接失败');
 mysqli_set_charset($link,$charset);
 mysqli_select_db($link,$database) or die('指定数据库打开失败');
 return $link;
}
```
连接 需要传递数组
```
/**
 * 连接 需要传递数组
 * @param array $config
 * @return object
 */
function connect2($config){
 $link=mysqli_connect($config['host'],$config['user'],$config['password']);
 mysqli_set_charset($link,$config['charset']);
 mysqli_select_db($link,$config['dbName'] or die('指定数据库打开失败');
 return $link;
}
```
用常量的形式建立连接
```
/**
 * 用常量的形式建立连接
 * @return unknown
 */
function connect3(){
 $link = mysqli_connect(DB_HOST,DB_USER,DB_PWD) or die('数据库连接失败');
 mysqli_set_charset($link,DB_CHARSET);
 mysqli_select_db($link,DB_DBNAME) or die('指定数据库打开失败');
 return $link;
}
```
插入操作
```
/*
 array(
 'username'=>'dada',
 'password'=>'dada',
 'age'=>'123456',
 'regTime'=>'12345'
 );
 INSERT user(username,password,age,regTime) VALUES('dada','dada','12','123123123');
 */
/**
 * 插入操作
 * @param object $link
 * @param array $data
 * @param string $table
 * @return boolean
 */
// 插入的封装
function insert($link,$data,$table){
 $keys=join(',',array_key($data));
 $vals = "'".join("','", array_values($data))."'";
 $query = "insert{$table}({$keys})values({$vals})";
 $res = mysqli_query($link,$query);
 if($res){
  return mysqli_insert_id($link);
 }else{
  return false;
 }
}
```
更新操作
```
/*
 array(
 		'username'=>'dada',
 		'password'=>'dada',
 		'age'=>'12',
 		'regTime'=>'123123123'
 );
 UPDATE user SET username='dada',password='dada',age='12',regTime='123123123' WHERE id=1
*/
/**
 * 更新操作
 * @param object $link
 * @param array $data
 * @param string $table
 * @param string $where
 * @return boolean
 */
function update($link, $data, $table, $where = null) {
	foreach ( $data as $key => $val ) {
		$set .= "{$key}='{$val}',";
	}
	$set = trim ( $set, ',' );
	$where = $where == null ? '' : ' WHERE ' . $where;
	$query = "UPDATE {$table} SET {$set} {$where}";
	$res = mysqli_query ( $link, $query );
	if ($res) {
		return mysqli_affected_rows ( $link );
	} else {
		return false;
	}
}
```
删除操作
```
//DELETE FROM user WHERE id=
/**
 * 删除操作
 * @param object $link
 * @param string $table
 * @param string $where
 * @return boolean
 */
function delete($link, $table, $where = null) {
	$where = $where ? ' WHERE ' . $where : '';
	$query = "DELETE FROM {$table} {$where}";
	$res = mysqli_query ( $link, $query );
	if ($res) {
		return mysqli_affected_rows ( $link );
	} else {
		return false;
	}
}
```
查询所有记录
```
/**
 * 查询所有记录
 * @param object $link
 * @param string $query
 * @param string $result_type
 * @return array|boolean
 */
function fetchAll($link, $query, $result_type = MYSQLI_ASSOC) {
	$result = mysqli_query ( $link, $query );
	if ($result && mysqli_num_rows ( $result ) > 0) {
		while ( $row = mysqli_fetch_array ( $result, $result_type ) ) {
			$rows [] = $row;
		}
		return $rows;
	} else {
		return false;
	}
}
```
得到表中的记录数
```
/**
 * 得到表中的记录数
 * @param object $link
 * @param string $table
 * @return number|boolean
 */
function getTotalRows($link, $table) {
	$query = "SELECT COUNT(*) AS totalRows FROM {$table}";
	$result = mysqli_query ( $link, $query );
	if ($result && mysqli_num_rows ( $result ) == 1) {
		$row = mysqli_fetch_assoc ( $result );
		return $row ['totalRows'];
	} else {
		return false;
	}
}
```
得到结果集的记录条数
```
/**
 * 得到结果集的记录条数
 * @param object $link
 * @param string $query
 * @return boolean
 */
function getResultRows($link, $query) {
	$result = mysqli_query ( $link, $query );
	if ($result) {
		return mysqli_num_rows ( $result );
	} else {
		return false;
	}
}
```
获取信息的封装：
```
/**
 * @param object $link
 */
function getServerInfo($link) {
	return mysqli_get_server_info ( $link );
}
/**
 * @param object $link
 */
function getClientInfo($link) {
	return mysqli_get_client_info ( $link );
}

/**
 * @param object $link
 */
function getHostInfo($link){
	return mysqli_get_host_info($link);
}

/**
 * @param object $link
 */
function getProtoInfo($link) {
	return mysqli_get_proto_info ( $link );
}
```

### Redis初识

下面展示介绍，思维导图如下：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b50b74dd8304478a8bce5245053cc63~tplv-k3u1fbpfcp-zoom-1.image)

Redis 是一个开源（`BSD`许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。 它支持多种类型的数据结构，如 字符串（`strings`）， 散列（`hashes`）， 列表（`list`）， 集合（`sets`）， 有序集合（`sorted sets`） 与范围查询， `bitmaps`， `hyperloglogs` 和 地理空间（`geospatial`） 索引半径查询。 `Redis` 内置了 复制（`replication`），LUA脚本（`Lua scripting`）， LRU驱动事件（`LRU eviction`），事务（`transactions`） 和不同级别的 磁盘持久化（`persistence`）， 并通过 Redis哨兵（`Sentinel`）和自动 分区（`Cluster`）提供高可用性（`high availability`）。

优点：

1. 常驻内存，读写性能优越，远胜于硬盘`IO`
2. 支持多种数据格式，能实现多种业务需要
3. 可以自动保存数据到硬盘，服务重启时恢复，服务稳定持久

操作`Redis` 安装

`Window` 下安装
下载地址：`https://github.com/tporadowski/redis/releases`。

`Redis` 支持 32 位和 64 位。这个需要根据你系统平台的实际情况选择，这里我们下载 `Redis-x64-xxx.zip`压缩包到 C 盘，解压后，将文件夹重新命名为 `redis`。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/085635ce3971441dbfe7228e5af34a1a~tplv-k3u1fbpfcp-zoom-1.image)
打开文件夹，内容如下：
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb489a179fe47ffb51581cc6873a12a~tplv-k3u1fbpfcp-zoom-1.image)

打开一个 `cmd` 窗口 使用 `cd` 命令切换目录到`xxx:\redis` 运行：
```
redis-server.exe redis.windows.conf
```
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef96f3856cc44a27b6405360ee7b87c9~tplv-k3u1fbpfcp-zoom-1.image)
另启一个 `cmd` 窗口，原来的不要关闭，不然就无法访问服务端了。
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/432561b5fc0942cb9ff261dad95a88bd~tplv-k3u1fbpfcp-zoom-1.image)

### Windows快速配置PHP+MySQL环境变量(phpStudy)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/186541ea63114543aa4ca057ea60b888~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ff2304b49d84470b7d3d80ef1e99ae5~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5d3f38867eb40848665a2839e8e7335~tplv-k3u1fbpfcp-zoom-1.image)

设置一下是否生效：

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0475f6ce900c4658874e994f4aa22f33~tplv-k3u1fbpfcp-zoom-1.image)

`Composer`是 `PHP` 用来管理依赖（`dependency`）关系的工具。你可以在自己的项目中声明所依赖的外部工具库（`libraries`），`Composer` 会帮你安装这些依赖的库文件。

`https://getcomposer.org/`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/816604e22f4b45ddbe02279762efd70e~tplv-k3u1fbpfcp-zoom-1.image)
点击`Getting Started`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db2cb77c3aeb417fb368103b90b0a44c~tplv-k3u1fbpfcp-zoom-1.image)

点击下载：

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebaed28ca8f9477b84bcb3d9f1d2c36a~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f79ab2b39e94b8fb6f0c7c2bcd8822e~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bbf742de02e4b6aa85b33841e07dc1a~tplv-k3u1fbpfcp-zoom-1.image)

`https://developer.aliyun.com/composer?spm=a2c4e.11153940.0.0.40eb6995J6zupg`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fb7868658444a0ca0b499ef1a2384b2~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0878449315624389b13be20fd16460b0~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c354b74707994737896986f123d43719~tplv-k3u1fbpfcp-zoom-1.image)

检查：

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1acdc5db8e00452288dbfaa4e5c6722e~tplv-k3u1fbpfcp-zoom-1.image)

`Windows`快速配置`NodeJS`

配置淘宝镜像源的命令行：

```js
npm config set registry http://registry.npm.taobao.org
```

`Windows`快速配置`Bower`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f17e770445824518aca48c6f37cb2198~tplv-k3u1fbpfcp-zoom-1.image)

在`Windows`下使用`phpStudy`安装

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48119e924f42460d91c3783c8bb9c058~tplv-k3u1fbpfcp-zoom-1.image)

#### 使用腾讯云服务器

`fastadmin.net/go/tencent`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06a887fd78e441038b6608c0b67339b8~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2774d307047e4227a5c6bedf0efe4f4b~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67edf9f35edf488ba8c9bdcc3331c262~tplv-k3u1fbpfcp-zoom-1.image)

`https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html`
下载

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b76e76ba73de45cb8530c8b8b9fdf94b~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6d3af064c1b45a5b0ca70b3b2820ad0~tplv-k3u1fbpfcp-zoom-1.image)

`https://www.bt.cn/?invite_code=MV9veWhubmU=`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aaf83014e9e4402b933a1141fab13057~tplv-k3u1fbpfcp-zoom-1.image)

点击立即安装
`https://www.bt.cn/bbs/thread-19376-1-1.html`

```js
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f7326ba4e1a4bd5a55973d9e34a163d~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59f444488e9d4c24bad5051dd678ef2e~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7be341bd8c414010be01d03ff48311e3~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/256a65dab09f4ac29d913f8ec836b073~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb28a036f0ec4ec49af2e4be67207e2e~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/025599ec2cfc4792a9af45558da615e8~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca7b3a8e3ca94ed18343243f749e1071~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a678ed8ca0984b068256e2c245a1984f~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9280b5a38c8c499bba5c1bead8cf48df~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31532820f73e49dbb7b9bab8fdc1aea8~tplv-k3u1fbpfcp-zoom-1.image)

#### 域名的解析

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/992472cbaba94a9484da5f15569ca6f9~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f6e450a73744fbdac805b1b85b09a3b~tplv-k3u1fbpfcp-zoom-1.image)

#### 错误：

```js
Internal Server Error
The server encountered an internal error or misconfiguration and was unable to complete your request.

Please contact the server administrator at admin@php.cn to inform them of the time this error occurred, and the actions you performed just before this error.

More information about this error may be available in the server error log.
```

修改`.htaccess` 为以下内容

```js
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{ENV:REDIRECT_STATUS} ^$ 
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```

- `Node.js` (可选,用于安装Bower和LESS,同时打包压缩也需要使用到)
- `Composer` (可选,用于管理第三方扩展包)
- `Bower` (可选,用于管理前端资源)
- `Less` (可选,用于编辑less文件,如果你需要增改css样式,最好安装上)


### 点关注，不迷路

好了各位，以上就是这篇文章的全部内容，能看到这里的人都是人才。我后面会不断更新技术相关的文章，如果觉得文章对你有用，欢迎给个“赞”，也欢迎分享，感谢大家 ！！
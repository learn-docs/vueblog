## 前言

学习网页的概念和分类，了解静态网页和动态网页的不同；了解网页浏览器的工作原理。了解HTML,XHTML,HTML5的概念，制作简单的HTML页面的开发。

## 什么是网页

可以在internet上通过网页浏览信息，如新闻，图片等，还可发布信息，如招聘信息等，网页是在某个地方某一台计算机上的一个文件。

网页主要由3部分组成：**结构，表现，行为。**

静态网页的特点是不论在何时何地浏览这个网页，看到的形式和内容都相同，且只能浏览，用户无法与网站进行互动。静态页面由HTML编写，扩展名一般为`.htm, .html, .shtml, .xml`等。与动态页面相比，动态网页是以`.asp, .jsp, .php, .perl, .cgi`等形式为后缀。

动态网页指网页的内容可以根据某种条件而自动改变。

## 网页浏览器的工作原理

采用B/S结构，即浏览器/服务器结构，用户工作界面是通过www浏览器来实现的：

1. 事务逻辑主要在服务器端实现，极少部分的事务逻辑在前端实现。
2. 大大简化了客户端的计算机载荷。
3. 减轻了系统维护与升级的成本和工作量。
4. 降低了用户的总体成本。

浏览器的工作原理：

1. 浏览器通过HTML表单或超链接请求指向一个应用程序的URL。
2. 服务器收到用户的请求。
3. 服务器执行已接收创建的指定应用程序。
4. 应用程序通常基于用户输入的内容，执行所需要的操作。
5. 应用程序把结果格式化为网络服务器和浏览器能够理解的文档，即通常所说的HTML网页。
6. 网络服务器最后将结果返回到浏览器中。

www的基础是HTTP协议，web浏览器就是用于通过url来获取并显示web网页的一种软件工具，url用于指定要取得的Internet上资源的位置与方式。

## HTML和HTML5

HTML是一种用来制作超文本文档的简单标记语言，用其编写的超文本文档称为HTML文档，它能独立于各种操作系统平台。

可扩展超文本标记语言XHTML：

XHTML是不需要编译，可以直接由浏览器执行，是一种增强了的HTML。它的可扩展性和灵活性将适应未来网络应用的更多需求，是基于XML的应用。开发者在HTML4.0的基础上，用XML的规则对其进行一些扩展，由此得到了XHTML，所以，建立XHTML的目的是为了实现HTML向xml的过渡。

HTML5简化了：`<!DOCTYPE html>`，简化了DOCTYPE,简化了字符集声明，以浏览器的原生能力替代脚本代码的实现，简单而强大的HTML5API。

## HTML网页的结构

文件扩展名是操作系统用来标志文件格式的一种机制。扩展名如同文件的身份说明，区别了文件的类别和作用。

HTML网页的文件后缀名是`.html`或者`.htm`.

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"xxx">
声明的作用，告诉浏览器所书写的HTML代码的版本。
```

`<meta>`标签，是HTML文档`<head>`标签内的一个辅助性标签，`meta`标签分为2个重要的属性：`name`和`http-equiv`，通常用于能够优化页面被搜索的可能性。

`meta`标签下`name`属性的使用：
```
<head>
 <meta name="keywords" content="nine, twenty-three">
 <meta name="description" content="...">
 <meta name="generator" content="Dreamweaver">
 <meta name="author" content="depp">
 <meta name="robots" content="all">
</head>
```

1. `keywords`向搜索引擎说明页面的关键字，在content后输入供搜索的具体关键字。
2. `description`向搜索引擎描述页面的主要内容。
3. `generator`向页面描述生成的软件名，在content后面输入具体的软件名称。
4. `author`网页的设计者，在content后面输入设计者的具体姓名。
5. `robots`限制搜索的方式，在content后面通常可输入`all,one,index,noindex,follow,nofollow`其中之一，不同的属性分别有不同的作用，限制页面被搜索的方式。

`meta`标签下的另一个属性`http-equiv`,其作用是反馈给浏览器一些明确的信息，帮助浏览器更精确地展示页面。

```
<head>
 <meta http-equiv="content-type"  content="text/html; charset=gb2312"/>
</head>
```

1. `refresh` 对属性的具体描述，说明是令页面自动跳转的效果。
2. `content` 后跟等待的时间，url后跟跳转的页面链接地址。

`link`标签，定义了一个外部文件的链接，经常被用于链接外部css样式。

`base`标签为整个页面定义了所有链接的基础定位，其主要的作用是确保文档中所有的相对url都可以被分解成确定的文档地址。

`style`标签用于定义css的样式。表明了在页面中引入一个`.style`的样式表。

`script`标签用于定义页面内的脚本。

`titl`标题标签，`body`体标签.

> 一个好的HTML文档应具备以下3个方面：

1. 代码使用标准规范，不应该有错误的拼写
2. 代码结构清晰，使人一目了然
3. 没有错误或者多余不必要的代码出现

## 文本设计

```
<br>..</br>
<p>...</p>
```

```
<p align=left>...</p>
<p align=center>...</p>
<p align=right>...</p>
```

给文本加标注：`<acronym title="">...</acronym>`注释的内容放在title属性后的引号中，被注释的内容放在标签内。

无序列表：`ul,li`，有序列表：`ol li`

定义列表：
```
<dl>
 <dt>...</dt>
 <dd>...</dd>
 <dt>...</dt>
 <dd>...</dd>
</dl>
```

## 网页中的图像设计

1. `jepg`格式的图像，该文件是常见的图像格式，`.jpg`后缀名，`jpeg`文件是经过压缩的一种图像。压缩的图像可以保持为8位，24位，32位深度的图像，压缩比率可以高达100:1.`jpeg`可以很好地处理大面积色调的图像。

2. `png`格式的图像，后缀名`.png`，这是一种能存储32位信息的位图图像，采用的是一种无损压缩的方式。支持透明信息，指图像以浮现在其他页面文件或页面图像之上。

3. `gif`格式的图像，是一种图像交互格式，后缀名`.gif`，只支持256色以内的图像，`gif`文件的图像效果是很差的。

所以总的来说：`jepg`可以压缩图像的容量，`png`的质量较好，`gif`可以做动画。

> 矢量图

说说矢量图和位图最大的区别：

无论是否对图像进行缩放，都不会影响矢量图的效果，但会影响图的质量。

设计者一般只愿意将logo,ui图标，标识符号等简单图像存为矢量图。

> 图像的分辨率

分辨率的单位是`dpi`即每英寸显示的线数。通常所指的分辨率有两种，屏幕分辨率和图片分辨率，屏幕分辨率即计算机显示器默认的分辨率。

一般目前大部分显示器的分辨率是1024px x 768px，图片分辨率定义是用于量度位图图像内数据量多少的一个参数。

分辨率越高的图像，包含的数据越多，图像的容量就越大，会消耗更多的计算机资源，需要更大的存储空间。

分辨率指的是每英寸的像素值，通过像素和分辨率的换算可以测算图片的长度。

> 页面中的图像

```
<img src=... alt=.../>
```

1. 使图像的顶部和同一行的文本对齐

```
<img style="vertial-align:text-top"/>
```

2. 使图像的中部和同一行的文本对齐

```
<img style="vertical-align:middle"/>
```

3. 使图像的底部和同一行的文本对齐

```
<img style="vertical-align:text-bottom"/>
```

4. 使图像的底部和文本的基线对齐

```
<img style="vertical-alignbaseline"/>
```

hspace=30px表示图像左，右两边与页面其他内容隔30px的距离。vspace=30px表示图像上，下两边与页面的其他内容的间隔距离是30px。

```
<img src="" widht="" height="">

<img src="..." border=>

<hr align=".." width="..." size="...">

<a href="链接对象的路径">链接锚点对象</a>
```
把邮箱留给需要联系你的人

```
<a href="mailto:邮箱地址">链接锚点对象</a>
```

1. 链接还未被访问：`a:link{...}`
2. 链接被选中：`a:active{...}`
3. 光标滑过链接：`a:hover{...}`
4. 链接被访问后：`a:visited{...}`

```
dashed 虚线

double 双线

groove 槽线

inset 内陷

outset 外陷
```

> 热点图像区域的链接

`map`标签：

```
<map id=...>
 <area shape="..." coords="..." href="...">
</map>
```

`shape`属性，用于确定选区的形状，`rect`矩形，`circle`圆形，`poly`多边形。`href`属性，就是超链接。`coords`属性，用于控制形状的位置，通过坐标来找到这个位置。

### 网页中的表单

计算矩形的面积
```
<html>
<head>
<title>计算矩形的面积</title>
<style type="text/css">
 .result {font-weight:bold;}
</style>
<script language="JavaScript">
function calculate() {
 var length = document.data.length.value;
 var width = document.data.width.value;
 var height = document.data.height.value;
 var area = document.getElementById('area');
 area.innerHTML = length*widht;
 volume.innerHTML = length*widht*height;
 }
</script>
```

#### 创建表单

1. `action`属性，通过`form`标签定义的表单里必须有`action`属性才能将表单中的数据提交出去：

```
<form action="my.php"></form>
```

它表明了这是一个表单，其作用是提交my.php页面中的数据。

2. `method`属性告诉浏览器数据是以何种方式提交出去的。`method`属性下可以有2个选择：`post`或者`get`。

3. `name`属性，为了令递交出去的表单数据能够被处理这些数据的程序识别。

```
<form name="data">
```

4. 编码方式,`enctype`代表HTML表单数据的编码方式。

### 表单的工作原理

原理：在客户端接收用户的信息，然后将数据递交给后台的程序来操控这些数据。

```
<script language="JavaScript">
```

如果通过引用外部javascript程序，就像链接外联样式：

```
<script type="text/javascript" src="dada.js"></script>
```

#### 创建表单

1. action属性，有action属性才能将表单中的数据提交出去：

```
<form action="da.php"></form>
```

2. method 属性，作用是告诉浏览器数据是以何种方式提交出去的。在method属性下可以有2个选择，post或get。

提交方式用get，表单域中输入的内容会添加在action指定的url中，当表单提交之后，用户会获取一个明确的url。`get`在安全性上较差，所有表单域的值直接呈现。`post`除了有可见的处理脚本程序，别的东西都可以隐藏。

3. name属性，添加name属性是为了令递交出去的表单数据能够被处理这些数据的程序识别。

```
<form name="dada">
```

4. 编码方式：`enctype`代表HTML表单数据的编码方式，`application/x-www-form-urlencoded, multipart/form-data, text/plain`三种方式。

- `application/x-www-form-urlencoded`是标准的编码方式，提交的数据被编码为名称/值对。
- `multipart/form-data`属性表示数据编码为一条消息，为表单定义`mime`编码方式，创建了一个与传统不同的`post`缓冲区，，页面上每个控件对应消息中的一个部分。
- `text/plain`表示数据以纯文本的形式进行编码，这样在信息中将不包含控件或者格式字符。
- `multipart/form-data`方式上传文件时，不能使用`post`属性。

5. 目标显示方式，表示在何处打开目标`url`，可以设置4种方式。

- `_blank`表示在新的页面中打开链接
- `_self`表示在相同的窗口中打开页面
- `_parent`表示在父级窗口中打开页面
- `_top`表示将页面载入到包含该链接的窗口,取代任何当前在窗口中的页面。

```
<form action="mailto:da@qq.com" method="post" name="dada"
enctype="text/plain" target="_blank"></form>
```

#### 表单域

是指用户输入数据的地方，表单域可分为3个对象，input, textarea, select。

> input对象下的多种表单的表现形式。

```
<input name="" type="" value="" size="" maxlength="">
```

- `type`表示所定义的是哪种类型的表单形式
- `size`表示文本框字段的长度
- `maxlength`表示可输入的最长的字符数量
- `value`表示预先设置好的信息

1. `text`单行的文本框
2. `password`将文本替换`*`的文本框
3. `checkbox`只能做二选一的是或否选择
4. `radio`从多个选项中确定的一个文本框
5. `submit`确定命令文本框
6. `hidden`设定不可浏览用户修改的数据
7. `image`用图片表示的确定符号
8. `file`设置文件上传
9. `button`用来配合客户端脚本

```
<form action="" method="post">
<input name="name" type="text" size="20" maxlength="12">
</form>
<input name="secret" type="password" size="20" maxlength="20">

<input name="one" type="radio" value="one" checked="checked">
<input name="one" type="radio" value="two">

<input type="submit" value="确定">
<input type="reset" value="恢复">
```

> 创建submit按钮或reset按钮时，name属性不是必需的。

#### hidden隐藏域的样式表单

使用hidden来记录页面的数据并将它隐藏起来，用户对这些数据通常并不关心，但是必须提交数据。

```
<form action=da.asp>
<input type=hidden name=somehidden value=dada>
<input type=submit value=下一页>
</form>
```

> image样式的表单

```
<input type="image" src="图片/小图标.jpg" alt="确定">
```

- src属性指定这张图像的路径
- alt属性添加文本注释

> file上传文件的样式表单

file样式表单允许用户上传自己的文件

```
<html>
<head>
<title>file样式的表单</title>
<style type="text/css">
body {font:120% 微软雅黑;}
input {font:100% 微软雅黑;}
</style>
</head>
上传我的文件：
<form action="..." method="post" enctype="multipart/form-data">
<input type="file" name="uploadfile" id="uploadfile"/>
</form>
</body>
</html>
```

> textarea对象的表单

textarea对象的表单

```
<html>
<head>
<title>file样式的表单</title>
<style type="text/css">
body{font:120% 微软雅黑;}
textarea{font:80% 微软雅黑;color:navy;}
</style>
</head>
<body>
留言板
<form action="..." method="post" enctype="multipart/form-data">
<textarea name="dada" rows="10" cols="50" value="dada">请说：</textarea>
</form>
</body>
</html>
```

> select对象的表单

select对象的表单

```
<form action="">
 地址:
 <select name="da1">
  <option>1</option>
 </select>
</form>
```

使用`optgroup`标签配合`label`属性来给选项分类：

```
<select name="上海">
<optgroup label="da1">
<option>1</option>
</optgroup>
<optgroup label="da2">
<option>2</option>
</optgroup>
</select>
```

在`select`标签中加入`size`属性即可，如`size=6`表示是一个能容纳6行文字的文本框，超出设置的行数时，将出现滚动条。

```
<select name="上海" size="6">
```

表单域集合：表单域的代码由`fieldset`标签和`legend`标签组合而成。

```
<form action="..." method="post">
<fieldset>
<legend>注册信息：</legend>
输入用户名：<input name="name" type="text" size="20" maxlength="12">
</fieldset>
</form>
```

> 表单输入类型

- url类型的input元素是专门为输入url地址定义的文本框。

```
<input type="url" name="webUrl" id="webUrl" value="http://wwwxxx"/>
```

- email类型的input元素是专门为输入email地址定义的文本框。

```
<input type="email" name="dada" id="dada" value="23@qq.com"/>
```

- range类型的input元素用于把输入框显示为滑动条，可以作为某一特定范围内的数值选择器。

```
<input type="range" name="volume" id="volume" min="0" max="1" step="0.2"/>
```

- number类型的Input元素是专门为输入特定的数字而定义的文本框。

```
<input type="number" name="score" id="score" min="0" max="10" step="0.5"/>
```

- tel类型的input元素是专门为输入电话号码而定义的文本框，没有特殊的验证规则。

- search类型的input元素是专门为输入搜索引擎关键词定义的文本框，没有特殊的验证规则。

- color类型的input元素默认会提供一个颜色选择器。

- date类型的Input元素是专门用于输入日期的文本框，默认为带日期选择器的输入框。

- month提供一个月的选择器，week提供一个周选择器，time会提供时间选择器，datetime会提供完整的日期和时间选择器，datetime-local会提供完整的日期和时间选择器。

> 增加表单的特性以及元素

1. form特性：

```
<input name="name" type="text" form="form1" required/>
<form id="form1">
<input type="submit" value="提交"/>
</form>
```

2. formaction特性，将表单提交至不同的页面。

```
<form id="form1" method="post">
<input name="name" type="text" form="form1"/>
<input type="submit" value="提交到page1" formaction="?page=1”/>
<input type="submit" value="提交到page2" formaction="?page=2"/>
<input type="submit" value="提交"/>
</form>
```

- formmethod特性可覆盖表单的method特性
- formenctype特性可覆盖表单的enctype特性
- formnovalidate特性可覆盖表单的novalidate特性
- formtarget特性可覆盖表单的target特性

> placeholder特性

```
<input name="name" type="text" placeholder="请输入关键词"/>
```

autofocus特性：用于当页面加载完成时，可自动获取焦点，每个页面只允许出现一个有autofocus特性的input元素。

```
<input name="key" type="text" autofocus/>
```

autocomplete特性用于form元素和输入型的Input元素，用于表单的自动完成。

```
input name="key" type="text" autocommplete="on"/>
```

autocomplete特性有三个值，可以指定"on","off"和""不指定，不指定就将使用浏览器的默认设置。

```
<input name="email" type="email" list="emaillist"/>
<datalist id="emaillist">
<option value="23#qq.com">xxxx</option>
</datalist>
```

keygen元素提供一个安全的方式来验证用户。

```
<form action="">
<input type="text" name="name"/><br>
<keygen name="security"/>
<br><input type="submit"/>
</form>
```

1. keygen元素有密钥生成的功能，在提交表单时，会分别生成一个私人密钥和一个公共密钥。
2. 私人密钥保存在客户端，公共密钥则通过网络传输至服务器。

### output元素

1. `output`元素用于不同类型的输出，比如计算结果或脚本的输出等。
2. `output`元素必须从属于某个表单，即写在表单的内部。

```
<form oninput="x.value=dada.value">
<input type="range" name="volume" value="50"/>
<output name="x"></output>
</form>
```

### required

为某个表单内部的元素设置了required特性，那么这项的值不能为空，否则无法提交表单。

```
<input name="name" type="text" placeholder="dada" required/>
```

### pattern

1. pattern用于为Input元素定义一个验证模式。
2. 该特性值是一个正则表达式，提交时会检查输入的内容是否符合给定的格式，如果不符合则不能提交。

```
<input name="code" type="text" value="" pattern="[0-9]{6}" placeholder="da"/>
```

### min,max,step

1. min表示允许范围内的最小值
2. max表示允许范围内的最大值
3. step表示合法数据的间隔步长

```
<input type="range" name="dada" id="dada" min="0" max="1" step="0.2"/>
```

### novalidate

1. 用于指定表单或表单内在提交时不验证
2. 如果在form元素应用novalidate特性，则表单中的所有元素在提交时都不需要再验证

```
<form action="dada.asp" novalidate="novalidate">
<input type="email" name="user_email"/>
<input type="submit"/>
</form>
```

### validity

1. 获取表单元素的ValidityState对象，该对象包含8个方面的验证结果
2. ValidityState对象会持续存在，每次获取validity属性时，返回的是同一个ValidityState对象

```
var validityState=document.getElementById("username").validity;
```

### willValidate属性

1. 用于获取一个布尔值，表示表单元素是否需要验证
2. 如表单元素设置了required特性或pattern特性，则willValidate属性的值为true，即表单的验证将执行

```
var willValidate = document.getElementById("username").willValidate;
```

### validationMessage

1. 获取当前表单元素的错误提示信息。

```
var validationMessage=document.getElementById("username").validationMessage;
```

## 点关注，不迷路

好了各位，以上就是这篇文章的全部内容，能看到这里的人都是人才。我后面会不断更新技术相关的文章，如果觉得文章对你有用，欢迎给个“赞”，也欢迎分享，感谢大家 ！！
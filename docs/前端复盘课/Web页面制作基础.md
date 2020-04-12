## Web页面制作基础

> 说明：仅作为学习辅助

那么Web页面制作基础，能让你掌握什么呢？

第一节掌握Web基础知识。

第二节掌握HTML基础知识。

第三节掌握CSS基础知识。

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200324210808.png)

## web开发背景

1. 计算机语言的概念
2. 解释和编译
3. Sublime的介绍
4. 开发者工具介绍
5. 命名规范

> 命名规范

- 英文命名
- 数字不能打头
- 驼峰命名法

学习前端接触的web基础语言，HTML，CSS，JavaScript

## Web基础知识

每次15分钟朗读：

1. `Internet`，中文为因特网，国际互联网。
2. 它是由所有使用公用语言互相通信的计算机连接而组成的全球网络。
3. `WWW`是`World Wide Web`的缩写，中文名万维网。
4. `WWW`是`Internet`的最核心部分。
5. 它是`Internet`上那些支持`WWW`服务和`HTTP`协议的服务器集合。
6. `WWW`在使用上分为`Web`客户端和`Web`服务端。
7. 用户可以使用`Web`客户端访问`Web`服务器上的页面。
8. `Website`，中文名为网站，是指在`Internet`上根据一定的规则，使用`HTML`等工具制作的用于展示特定内容相关网页的集合。
9. `URL`，是`Uniform Resource Locator`的缩写，中文名为统一资源定位符，俗称网址，它是对可以从互联网上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。

`URL`的一般格式：

    协议://主机地址（ip地址)+目录路径+参数

常见的协议有：

a. `ftp`：`File Transfer Protocol`，文件传输协议，可以通过`FTP`访问服务器上的文件。通常使用时在主机地址前面加上“用户名：密码@”。

示例：

    url: ftp://admin:12345@113.129.xxx/html.pdf

b. `file`：主要访问本地计算机中的文件。

c. `telent`：允许用户通过一个协商过程与一个远程设备进行通信。

d. `http`：`Hyper Text Transfer Protocol`，超文本传输协议，是用于从万维网服务器传输超文本到本地浏览器的传输协议。

10. `Web Standard`（`Web`标准)是`Web`应用开发需要遵守的标准。
11. 网页主要由三部分组成：结构标准，表现标准，行为标准。

> 网站访问过程

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200324222150.png)

`url`统一资源定位符

互联网上标准资源的地址，可以从互联网上得到的资源的位置和访问方法。

组成部分：协议，服务器地址，资源路径。

12. `Web Browser`，中文名为网页浏览器，是一个显示网页服务器或者档案系统内的HTML文件，并让用户与这些文件互动的软件。
13. `Web Server`，中文名为网页服务器，`WEB`服务器，主要是提供网上信息浏览服务。

> `Web`服务器可以解析`HTTP`协议，当`Web`服务器接收到一个`HTTP`请求时，会返回一个`HTTP`响应，客户端就可以从服务器上获取网页`html`，包括`css`，`js`,视频，音频等。

14. `web`开发主要分前端和后端两部分。
15. 前端是指直接与用户接触的网页，网页上通常有`html,js,css`等。
16. 后端是指程序，数据库和服务器层面的

`web`系统开发过程

项目提出，需求分析，（设计，ui设计，系统设计），（开发，前端开发，后台开发），系统测试，开发与维护。

## HTML基础知识

1. HTML的历史：HTML，XHTML
2. HTML的全局属性：全局标准属性，全局事件属性
3. HTML的元素：

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/a.png)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200324232345.png)

4. 标记语言，是一种将文本以及与文本相关的其他信息结合起来，展现出关于文档结构和数据处理细节的电脑文字编码。
5. HTML，为超文本标记语言。
6. `XHTML`是可扩展超文本标记语言，是一种更纯洁，更严格，更规范的`html`代码。
7. `html`文件由文件头和文件体两部分组成。
8. 标签的分类：双标签，单标签。

> 双标签：由“开始标签”和“结束标签”两部分构成，必须成对使用，且必须合理嵌套。

> 单标签：在开始标签中进行关闭（以开始标签的结束而结束）。

### HTML的全局标准属性

在`HTML`中，规定了8个全局标准属性。

1. `class`用于定义元素的类名。
2. `id`用于指定元素的唯一`id`。
3. `style`用于指定元素的行内样式。
4. `title`用于指定元素的额外信息。
5. `accesskey`用于指定激活某个元素的快捷键。

> 支持`accesskey`属性的元素有`<a>, <area>, <button>, <input>, <label>, <legend>, <textarea>`。

6. `tabindex`用于指定元素在`tab`键下的次序。

> 支持`tabindex`属性的元素有`<a>,<area>,<button>,<input>,<object>,<select>,<textarea>`

7. `dir`用于指定元素中内容的文本方向。

> `dir`的属性值只有`ltr`和`rtl`两种，分别是`left to right`和`right to left`。

8. `lang`用于指定元素内容的语言。

### HTML的全局事件属性

#### `Window`窗口事件

1. `onload`，在页面加载结束后触发。
2. `onunload`，在用户从页面离开时触发，如单击跳转，页面重载，关闭浏览器窗口等。

#### `Form`表单事件

1. `onblur`，当元素失去焦点时触发。
2. `onchange`，在元素的元素值被改变时触发。
3. `onfocus`，在元素获得焦点时触发。
4. `onreset`，当表单中的重载按钮被点击时触发。
5. `onselect`，在元素中文本被选中后触发。
6. `onsubmit`，在提交表单时触发。

#### `Keyboard`键盘事件

1. `onkeydown`，在用户按下按键时触发。
2. `onkeypress`，在用户按下按键后，按着按键时触发。

> 该属性不会对所有按键生效，不生效按键如：`alt`，`ctrl`，`shift`，`esc`。

3. `onkeyup`，当用户释放按键时触发。

#### `Mouse`鼠标事件

1. `onclick`，当在元素上单击鼠标时触发。
2. `ondblclick`，当在元素上双击鼠标时触发。
3. `onmousedown`，当在元素上按下鼠标按钮时触发。
4. `onmousemove`，事件会在鼠标指针移动时发生。
5. `onmouseout`，当鼠标指针移出元素时触发。
6. `onmouseover`，事件会在鼠标指针移动到指定的元素上时发生。
7. `onmouseup`，当在元素上释放鼠标按钮时触发。

#### Media媒体事件

1. `onabort`，当退出媒体播放器时触发。
2. `onwaiting`，当媒体已停止播放但打算继续播放时触发。

### HTML元素

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200325222608.png)

> 一个HTML文档包含的标签

1. `<!DOCTYPE>`，声明文档类型。
2. `<html>`，HTML元素真正的根元素。
3. `<head>`，定义`html`文档的文档头。

```
head中包含的元素

title，定义HTML文档的标题
base，为页面上的所有链接规定默认地址或者默认目标
link，用于定义文档与外部资源之间的关系
meta，提供关于HTML的元数据
style，用于为HTML文档定义样式信息
script，用于定义客户端脚本
```

4. `body`，定义`html`文档的文档体。
5. `content-Type`，用于设定网页的字符集，便于浏览器解析与渲染页面。

代码：

```
<meta http-equiv="content-Type` content="text/html"; charset=utf-8">
```

6. `cache-control`，用于告诉浏览器如何缓存某个响应及缓存多长时间。

参数：

```
no-cache，发送请求，与服务器确认该资源是否被更改，如果没有，则使用缓存

no-store，允许缓存，每次都要去服务器上下载完整的响应

public，缓存所有响应

private，只为单个用户缓存

max-age，表示当前请求开始，相应响应在多久内能被缓存和重用，不去服务器重新请求，max-age=60表示响应可以再缓存和重用60秒

<meta http-equiv=cache-control" content="no-cache">
```

7. `expires`，用于设定网页的到期时间，过期后重新到服务器上重新传输。
8. `refresh`，网页将在设定的时间内，自动刷新并转向设定的网址
9. `Set-Cookie`，用于设置网页过期。
10. 无语义元素：`<span>,<div>`，`<span>`是内联标签，用在一行文本中，`<div>`是块级标签。

> DIV+CSS

`div`用于存放需要显示的数据，`css`用于指定如何显示数据样式，做到结构与样式相互分离。

查看div+css样式HTML:点击下方链接跳转，可查看源码：

[div-css.html](/前端复盘课/div-css.html)

#### 格式化元素

1. 普通文本

- `<b>`，定义粗体文本
- `<big>`，定义大号字
- `<em>`，定义着重文字
- `<i>`，定义斜体字
- `<small>`，定义小号字
- `<strong>`，定义加重语气
- `<sub>`，定义下标字
- `<sup>`，定义上标字
- `<ins>`，定义插入字
- `<del>`，定义删除字

2. 计算机输出

- `<code>`，定义计算机代码
- `<kbd>`，定义键盘输出样式
- `<samp>`，定义计算机代码样本
- `<tt>`，定义打字机输入样式
- `<pre>`，定义预格式文本

3. 术语

- `<abbr>`，定义缩写
- `<acronym>`，定义首字母缩写
- `<address>`，定义地址
- `<bdo>`，定义文字方向
- `<blockquote>`定义长的引用
- `<q>`，定义短的引用语
- `<cite>`，定义引用，引证
- `<dfn>`，定义一个概念，项目

#### 图片元素

```
<img src="图片的url" alt = "图像的替代文本">
```
#### 超链接元素

1. `<a>`标签的`target`属性，默认值为`_self`。

| 值 | 说明 |
|:---|:---|
|`_self`|在超链接所在框架或窗口中打开目标页面|
|`_blank`|在新浏览器窗口中打开目标页面|
|`_parent`|将目标页面载入含有该链接框架的父框架集或父窗口中|
|`_top`|在当前的整个浏览器窗口中打开目标页面，因此会删除所有框架|

2. 文本链接是`<a></a>`标签之间的元素内容为文本内容。
3. 锚点链接是用`#+对应的锚点`，锚点通常用唯一属性值`id`设定。

#### 图像热区链接

图像热区链接，是什么呢？当你在看一些购物网页的时候，一张图片上，可以在不同的地方链接到不同的目标位置，点击不同的地方可以跳转到不同的网页，这也是做商城项目一般要用到的技术。

这个时候不是`<a>`标签元素了，而是`<area>`元素。

`<area>`元素的属性有两个`shape`，`cords`属性。

| `shape` 属性 | 说明 | `cords` 属性 | 说明 |
| :--- | :--- | :--- | :--- |
| `circle` | 圆形 | x,y,r | (x,y)为圆心坐标，r为半径 |
| `rect` | 矩形 | x1,y1; x2,y2 | (x1,y1)为左上角坐标，(x2,y2)为右下角坐标 |
| `poly` | 多边形 | x1,y1;x2,y2;x3,y3;... | 分别是各个点的点坐标 |

`<area>`的坐标系，原点为图片的左上角,x轴正方向向右，y轴正方向向下

我画个图哈，反映`<area>`的坐标系：

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200325235454.png)

图像热区链接的使用，`<map>`标签定义一个`image-map`，可以含一个以上的热区`<area>`，每个热区都有独立的链接。

要为`<map>`标签赋予`name`属性。

将`<img>`标签的`usemap`属性与`<map>`标签的`name`属性相关联。

为了证明我学会了，我写一个html页面。

```
map -> name="image_link"

img -> usemap="#image_link"
```

点击跳转：[imgmap.html](/前端复盘课/imgmap.html)

#### e-mail链接

e-mail链接主要是看到有很多官方网页需要做的一个打开一封新的电子邮件。

点击下方链接即可看到效果：

<a href="mailto:2397923107@qq.com">联系我们</a>

代码：
```
<a href="mailto:xxxxxx@qq.com">联系我们</a>
```

#### javascript链接

点击JavaScript链接：

<a href="javascript:alert('哈哈，你点击了！');">点击弹窗</a>

代码：
```
<a href="javascript:alert('哈哈，你点击了！');">点击弹窗</a>
```

#### 空链接

1. 空链接是指未指派目标地址的超链接。

空链接的代码：

```
javascript: void(0)

<a href=""></a>

<a href="#"></a>

<a href="javascript:void(0)"></a>
```

#### 列表元素

整合列表html网页，点击跳转：[ul-ol.html](/前端复盘课/ul-ol.html)

1. 无序列表，`<ul>`定义无序列表，`<li>`定义列表项。

`<ul>`的`type`属性值：`disc`点，`square`方块，`circle`圆，`none`无.

2. 有序列表，`<ol>`定义有序列表，`<li>`定义列表项。

`<ol>`的`type`属性值：数字，大写字母，大写罗马数字，小写字母，小写罗马数字。

`start`属性定义序号的开始位置。

3. 定义列表`<dl>`，定义列表内部可以有多个列表项标题，每个列表项标题用`<dt>`标签定义，列表项标题内部又可以有多个列表项描述，用`<dd>`标签定义。

#### 表格

整合表格html网页，点击跳转：[table.html](/前端复盘课/table.html)

1. `<table>`定义表格
2. `<caption>`定义表格标题
3. `<tr>`定义若干行
4. `<td>`定义若干单元格
5. `<th>`定义表头
6. 表格分头部，主体，底部：`<thead>,<tbody>,<tfoot>`三个标签。

| 属性 | 说明 |
| :--- | :--- |
| `border` | 设置表格的边框宽度 |
| `width` | 设置表格的宽 |
| `height` | 设置表格的高 |
| `cellpadding` | 设置内边距 |
| `cellspacing` | 设置外边距 |

7. `<td>`的两个属性：`colspan`用于定义单元格跨行，`rowspan`用于定义单元格跨列
8. `<tbody>,<thead>,<tfoot>`标签通常用于对表格内容进行分组。
9. 表单由`<form>`标签定义，`action`属性定义了表单提交的地址，`method`属性定义表单提交的方式。

代码：

```
<input type="text">

<input type="password">

<input type="radio">

<input type="checkbox">

<input type="submit">

<input type="reset">

<input type="button">

<input type="image">

<input type="file">

<input type="hidden">
```

```
<select>

<option>

size属性用来设置选择栏的高度，multiple属性用来决定是多选列表，还是单选

selected="selected"
```

> 表单控件，用于输入更多的文本

`<textarea>`元素

`<textarea>`标签具有`name,cols,rows`3个属性。

1. `name`用于提交参数
2. `value`用于输入文本内容
3. `cols`和`rows`分别用于文本框的列数和行数，宽度和高度。

效果：

<form action="web" method="post">
 自我评价：<br/>
 <textarea rows="10" cols="50" name="introduce">
 </textarea>
 <br/>
 <input type="submit" id="" name="">
</form>

代码：

```
<form action="web" method="post">
 自我评价：<br/>
 <textarea rows="10" cols="50" name="introduce">
 </textarea>
 <br/>
 <input type="submit" id="" name="">
</form>
```

#### frameset

1. `<frameset>`定义一个框架集，用于组织多个窗口，每个框架存有独立的html文档
2. `<frameset>`不能与`<body>`共同使用，除非有`<noframe>`元素
3. `<frame>`用于定义`<frameset>`中一个特定的窗口。空元素`<frame/>`

> `frame`属性

| 属性 | 说明 |
|:---|:---|
|`src`|需要显示的`html`文档|
|`frameborder`|定义框架的外边框，属性值为0或者1|
|`scrolling`|定义是否显示滚动条,有3个值：yes,no,auto|
|`noresize="noresize"`|定义该框架无法调整大小，默认是可以调整的|
|`marginheight`和`marginwidth`属性|定义上下左右的边距|

4. `<noframe>`，用于为那些不支持框架集的浏览器显示文本
5. `<iframe>`，与`<frame>`元素相同，`iframe`有`frame`的属性，还加了`height`和`width`

代码：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
        <title>frameset</title>
	</head>
    <frameset cols="25%,50%,25%">
        <frame src="https://blog.csdn.net/qq_36232611" scrolling="no" noresize="noresize"></frame>
        <frame src="https://juejin.im/user/5e477d7ce51d4526c550a27d" ></frame>
        <frame src="https://www.jianshu.com/u/c785ece603d1" ></frame>
    </frameset>
    <noframes>
        <body>您的浏览器无法处理框架，请更换浏览器打开</body>
    </noframes>
</html>
```

#### 预留字符

HTML 中的预留字符必须被替换为字符实体。

|显示结果|	描述|	实体名称|	实体编号|
| :--- | :--- | :--- | :--- |
| 	|空格|	`&nbsp;`|	`&#160;`|
|<	|小于号|	`&lt;`|	`&#60;`|
|>	|大于号|	`&gt;`|	`&#62;`|
|&	|和号|	`&amp;`|	`&#38;`|
|"	|引号|	`&quot;`|	`&#34;`|
|'	|撇号| 	`&apos;` (IE不支持)|	`&#39;`|
|￠	|分（cent）|	`&cent;`|	`&#162;`|
|£	|镑（pound）|	`&pound;`|	`&#163;`|
|¥	|元（yen）|	`&yen;`|	`&#165;`|
|€	|欧元（euro）|	`&euro;`|	`&#8364;`|
|§	|小节|	`&sect;`|	`&#167;`|
|©	|版权（copyright）|	`&copy;`|	`&#169;`|
|®	|注册商标|	`&reg;`|	`&#174;`|
|™	|商标|	`&trade;`|	`&#8482;`|
|×	|乘号|	`&times;`|	`&#215;`|
|÷	|除号|	`&divide;`|	`&#247;`|

## CSS基础知识

1. `css`，英文`Cascading Style Sheets`，中文名：级联样式表。层叠样式表。
2. `css`是一种表现语言，是对网页语言的补充。
3. `css`用于网页的风格设计，包括字体，颜色，位置等。
4. `css`使用的4中方式：引入外部样式文件，导入外部样式文件，使用内部样式定义，使用内联样式定义。

引入外部样式文件：

```
<link type="text/css" rel="stylesheet" href="css样式文件的url"/>
```
导入外部样式文件:

```
<style type="text/css">
 @import "css样式文件的url";
</style>
```

使用内部样式定义：

```
<style type="text/css">
 div {
     background-color: #ffffff;
     width: 300px;
     height: 300px;
 }
</style>
```

使用内联样式定义：

```
<div style="background-color: #ffffff; width: 100px; height: 100px;">
</div>
```

## css的两个特性：层叠，继承

层叠：层叠样式生效的优先级：

内联样式->内部样式->外部样式->浏览器默认效果。

继承，就是css属性可以从父元素向下传递到子元素。

### `css`的选择器

1. 元素选择器，是最简单的选择器。
2. 通配符选择器，用`"*"`表示，表示对任意元素都有效。
3. 属性选择器

格式：

```
E[attribute]{property1:value1; property2:value2;...}
```

| 语法 | 说明 |
| :--- | :--- |
| `E[attribute]` | 用于选取带有指定属性的元素 |
| `E[attribute=value]` | 用于选取带有指定属性和指定值的元素 |
| `E[attribute~=value]` | 用于选取属性值包含指定值的元素，该值必须是整个单词，可以前后有空格 |
| `E[attribute\|=value]` | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词或者后面跟着连字符“-” |

### 派生选择器

1. 派生选择器根据元素在其位置的上下文关系定义样式
2. 派生选择器分3种：后代选择器，子元素选择器，相邻兄弟选择器
3. 后代选择器是某元素后代的所有元素。
4. 子元素选择器是相对于父元素的第一级子元素符合条件。
5. 相邻兄弟选择器，针对的元素是同级元素，拥有相同的父元素，且两个元素是相邻的。

6. `id`选择器，以特定`id`值的HTML元素指定样式。
7. 类选择器，以指定`class`的HTML元素指定样式。
8. 伪类选择器

> 伪类选择器：伪类选择器和伪元素选择器

伪类以冒号`(:)`开头，元素选择符和冒号之间不能有空格，伪类名中间也不能有空格。

`css`中常用的伪类如下表所示：

| 伪类名 | 说明 |
| :--- | :--- |
| `:active` | 向被激活的元素添加样式 |
| `:focus` | 向拥有输入焦点的元素添加样式 |
| `:hover` | 向鼠标悬停在上方的元素添加样式 |
| `:link` | 向未被访问的链接添加样式 |
| `:visited` | 向已被访问的链接添加样式 |
| `:first-child` | 向元素添加样式，且该元素是它的父元素的第一个子元素 |
| `:lang` | 向带有指定`lang`属性的元素添加样式 |

伪元素选择器

`css`中常用的伪元素如下表所示：

| 伪元素名 | 说明 |
| :--- | :--- |
| `:first-letter` | 向文本的第一个字母添加样式 |
| `:first-line` | 向文本的第一行添加样式 |
| `:after` | 在元素之后添加内容 |
| `:before` | 在元素之前添加内容 |

### css背景

`css`背景属性如下：

| 属性 | 说明 |
| :--- | :--- |
| `background-color` | 定义背景颜色 |
| `background-image` | 定义背景图片 |
| `background-repeat` | 定义背景图片是否重复以及其重复方式 |
| `background-attachment` | 定义背景图片是否跟随内容滚动 |
| `background-position` | 定义背景图片的水平位置和垂直位置 |
| `background` | 可以用一条样式定义各种背景属性 |

#### background

1. `background-color`用于设置背景颜色，初始值为`transparent`透明色。
2. 颜色取值3种如：颜色名，十六进制颜色，rgb函数。
3. `background-image`用于设置元素的背景图片，默认值为`none`。
4. `background-repeat`控制图像的平铺。

> `background-repeat`默认值为`repeat`，即图像沿着x轴和y轴平铺，还可以指定沿着x轴平铺`rpeat-x`，沿着y轴平铺`repeat-y`，或者不平铺`no-repeat`，继承父元素该属性设置`inherit`。

5. `background-attachment`用于设置背景图像是否固定或者随着页面的其余部分滚动。默认值为：`scroll`，表示可以随着页面其余部分的滚动而滚动。设置`fixed`，表示当页面其余部分滚动时，背景图片不会滚动，设置`inherit`，继承父元素。
6. `background-position`用于设置背景图像圆点的位置。

> `background`可以将`background-color`，`background-position`，`background-attachment`，`background-repeat`，`background-image`全部设置。

### css字体属性

`css`常用字体属性表：

| 属性 | 说明 |
| :--- | :--- |
| `font-family` | 定义文本的字体系列 |
| `font-size` | 定义文本的字体尺寸 |
| `font-variant` | 定义是否以小型大写字母的字体显示文本 |
| `font-style` | 定义文本的字体是否是斜体 |
| `font-weight` | 定义字体的粗细 |
| `font` | 可以一条样式定义各种字体属性 |

1. `font-family`用于设置元素的字体，该元素属性值一般可以设置多个字体。
2. `font-size`用于设置字体的尺寸。
3. `font-style`用于设置字体是否是斜体，默认值为`normal`，当设置为`italic`，显示为一个斜体的样式，当设置为`oblique`，显示为一个倾斜的样式。
4. `font-variant`用于设置字体使用小写字体，默认为`normal`，一旦设置为`small-caps`，将所有小写字母变为大写。
5. `font-weight`用于设置字体的粗细，`normal`值等于400，`bold`的值等于700。
6. `font`，可以设置`font-family,font-size,font-style,font-variant,font-weight`。

`css`文本属性表：

| 属性 | 说明 |
| :--- | :--- |
| `color` | 文本颜色 |
| `direction` | 文本方向或者书写方向 |
| `letter-spacing` | 字符的间距 |
| `line-height` | 文本的行高 |
| `text-align` | 文本的水平对齐方式属性,设置元素中文本的水平方式，值有`left，right，center，inherit`。 |
| `text-decoration` | 给文本添加修饰效果，值有`underline为添加下画线，overline添加上画线，line-through添加删除线，blink添加闪烁的效果,none无如何修饰,inherit`。 |
| `text-indent` | 定义文本的首行缩进方式，默认值为0 |
| `text-shadow` | 为文本添加阴影效果 |
| `text-transform` | 切换文本的大小写 |
| `white-space` | 设置如何处理元素内的空白 |
| `word-spacing` | 定义单词之间的距离 |

`css`尺寸属性表：

| 属性 | 说明 |
| :--- | :--- |
| `width` | 设置元素的宽度 |
| `min-width` | 设置元素的最小宽度 |
| `max-width` | 设置元素的最大宽度 |
| `height` | 设置元素的高度 |
| `min-height` | 设置元素的最小高度 |
| `max-height` | 设置元素的最大高度 |

`css`列表属性表：

| 属性 | 说明 |
| :--- | :--- |
| `list-style-image` | 设置列表项标记样式为图像，`none/inherit/url` |
| `list-style-position` | 设置列表项标记的位置，`inside/outside/inherit` |
| `list-style-type` | 设置列表项标记的类型 |
| `list-style` | 可以用一条样式定义各种列表属性 |

`list-style-type`

| 值 | 说明 |
| :--- | :--- |
| `disc` | 实心圆 |
| `circle` | 空心圆 |
| `square` | 方块 |
| `decimal` | 数字 |
| `low-roman` | 小写罗马数字 |
| `upper-roman` | 大写罗马数字 |
| `low-alpha` | 小写字母 |
| `upper-alpha` | 大写字母 |
| `none` | 无标记 |
| `inherit` | 继承父元素的该设置 |

`css`表格属性表：

| 属性 | 说明 |
| :--- | :--- |
| `border-collapse` | 设置是否合并表格边框 |
| `border-spacing` | 设置相邻单元格边框之间的距离 |
| `caption-side` | 设置表格标题的位置 |
| `empty-cells` | 设置是否显示表格中空单元格上的边框和背景 |
| `table-layout` | 设置用于表格单元格列宽的设置方式 |

### 盒模型

1. `css`盒模型，包含元素内容`content`，内边距`padding`，边框`border`，外部距`margin`。

`css`内边距属性，元素的内边距在边框和内容之间。

`css`内边距的属性：

| 属性 | 说明 |
| :--- | :--- |
| `padding-top` | 元素的上内边距 |
| `padding-right` | 元素的右内边距 |
| `padding-bottom` | 元素的下内边距 |
| `padding-left` | 元素的左内边距 |
| `padding` | 用一个声明定义所有内边距属性 |

设置顺序为上右下左依次进行。

```
padding: 10px 10px 10px 10px;
```

`css`外边距的属性：

| 属性 | 说明 |
| :--- | :--- |
| `margin-top` | 定义元素的上外边距 |
| `margin-right` | 定义元素的右外边距 |
| `margin-bottom` | 定义元素的下外边距 |
| `margin-left` | 定义元素的左外边距 |
| `margin` | 用一个声明定义所有外边距属性 |


`css`边框的属性：

| 属性 | 说明 |
| :--- | :--- |
| `border-top-style` | 上边框的样式属性 |
| `border-right-style` | 右边框的样式属性 |
| `border-bottom-style` | 下边框的样式属性 |
| `border-left-style` | 左边框的样式属性 |
| `border-style` | 设置4条边框的样式属性 |
| `border-top-width` | 设置上边框的宽度属性 |
| `border-right-width` | 设置右边框的宽度属性 |
| `border-bottom-width` | 设置下边框的宽度属性 |
| `border-left-width` | 设置下边框的宽度属性 |
| `border-width` | 设置4条边框的宽度属性 |
| `border-top-color` | 设置上边框的颜色属性 |
| `border-right-color` | 设置右边框的颜色属性 |
| `border-bottom-color` | 设置下边框的颜色属性 |
| `border-left-color` | 设置左边框的颜色属性 |
| `border-color` | 设置4条边框的颜色属性 |
| `border-top` | 用一条声明定义所有上边框的属性 |
| `border-right` | 用一条声明定义所有右边框的属性 |
| `border-bottom` | 用一条声明定义所有下边框的属性 |
| `border-left` | 用一条声明定义所有左边框的属性 |
| `border` | 用一条声明定义所有边框的属性 |
| `border-width` | 一次定义4条边框的宽度 |
| `border-color` | 一次定义4条边框的颜色 |

边框的样式

1. `none`，无边框效果
2. `hidden`，与`none`相同
3. `dotted`，点线边框效果
4. `dashed`，虚线边框效果
5. `double`，双线边框效果
6. `solid`，实线边框效果
7. `groove`，3D凹槽边框效果
8. `ridge`，3D凸槽边框效果

`css`轮廓是绘制在元素周围的一条线，位于边框边缘的外围，起到突出元素的作用。

| 属性 | 说明 |
| :--- | :--- |
| `outline-style` | 定义轮廓的样式属性 |
| `outline-color` | 定义轮廓的颜色属性 |
| `outline-width` | 定义轮廓的宽度属性 |
| `outline` | 同一个声明中定义所有的轮廓属性 |

### 布局属性

1. 布局属性是文档中元素排列显示的规则
2. 布局方式3种：普通文档流，浮动，定位

`css`浮动涉及到的属性

| 属性 | 说明 |
| :--- | :--- |
| `float` | 设置框是否需要浮动以及浮动方向 |
| `clear` | 设置元素的哪一侧不允许出现其他浮动元素 |
| `clip` | 裁剪绝对定位元素，该元素必须是绝对定位，上右下左原则 |
| `overflow` | 设置内容溢出元素框时的处理方式，值：`visible,auto,hidden,scroll` |
| `display` | 设置元素如何显示，值`none,block,inline,inline-block,inherit` |
| `visibility` | 定义元素是否可见，`visibility`设置为隐藏，元素占用的空间依然会保留，但`display:none`不保留占用空间，值：`visible,hidden` |

`css`定位的属性

| 属性 | 说明 |
| :--- | :--- |
| `position` | 元素的定位类型，值`static`,`absolute`绝对，`relative`相对 |
| `top` | 元素上外边距 |
| `right` | 元素右外边距 |
| `bottom` | 元素下外边距 |
| `left` | 元素的左外边距 |
| `z-index` | 元素的堆叠顺序 |

> `z-index`用于设置目标对象的定位层序，数值越大，所在层级越高。该属性只在`position:absolute`时有效。

💪，🥇 coding✨ Love wife 💋，love kids 👧，love life 💯，love code 🐉 .
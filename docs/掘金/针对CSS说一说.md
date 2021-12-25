[Github来源：针对CSS说一说](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

大家好，我是**魔王哪吒**，很高兴认识你~~

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

### CSS使用

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style></style>
	</head>
	<body>
		<div id="header">
			<h1>导航栏</h1>
			<ul>
				<li><a href="#">目录1</a></li>
				<li><a href="#">目录2</a></li>
				<li><a href="#">目录3</a></li>
				<li><a href="#">目录4</a></li>
			</ul>
		</div>
	</body>
</html>
```

效果：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc2336f9615d46d78f52ce85e5bf8fed~tplv-k3u1fbpfcp-watermark.image)

- 除去导航栏的列表符号

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			#header ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div id="header">
			<h1>导航栏</h1>
			<ul>
				<li><a href="#">目录1</a></li>
				<li><a href="#">目录2</a></li>
				<li><a href="#">目录3</a></li>
				<li><a href="#">目录4</a></li>
			</ul>
		</div>
	</body>
</html>
```

效果：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4958e33ed8243398c76968c0401e71b~tplv-k3u1fbpfcp-watermark.image)

变化1：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			#header ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}
			#header li {
				display: inline;
				border: solid;
				border-width: 1px 1px 0 1px;
				margin: 0 0.5em 0 0;
			}
		</style>
	</head>
	<body>
		<div id="header">
			<h1>导航栏</h1>
			<ul>
				<li><a href="#">目录1</a></li>
				<li><a href="#">目录2</a></li>
				<li><a href="#">目录3</a></li>
				<li><a href="#">目录4</a></li>
			</ul>
		</div>
	</body>
</html>
```

效果：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20b94059482b4d16afc1e4273b1fc30f~tplv-k3u1fbpfcp-watermark.image)

变化2：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			#header ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}
			#header li {
				display: inline;
				border: solid;
				border-width: 1px 1px 0 1px;
				margin: 0 0.5em 0 0;
			}
			#header li a {
				padding: 0 1em;
			}
		</style>
	</head>
	<body>
		<div id="header">
			<h1>导航栏</h1>
			<ul>
				<li><a href="#">目录1</a></li>
				<li><a href="#">目录2</a></li>
				<li><a href="#">目录3</a></li>
				<li><a href="#">目录4</a></li>
			</ul>
		</div>
	</body>
</html>
```

效果：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e052df19d4dc4de8999cf72fbb800e70~tplv-k3u1fbpfcp-watermark.image)

### 创建选择器

- HTML选择器
- 标志选择器
- 类选择器

```
// 派生选择器
h1 h2 {
}

// 标志选择器
#text {
}

// 类选择器
.da {
}

// 分组选择器

h1, #text, .da { color: blue; }
```

伪类：

- `:active`，将样式添加到被激活的元素中
- `:focus`，将样式添加到被选中的元素中
- `:hover`，当光标悬浮在页面对象上方时，向页面对象添加样式
- `:link`，将样式添加到未被访问过的链接中
- `:visited`，将样式添加到被访问过的链接中
- `:first-child`，将特殊的样式添加到页面对象的第一个子元素中
- `:lang`，允许设计者定义指定的页面中所使用的语言

### 文字字号

> `font-size`属性的作用改变字体的大小。

常见：

1. `px`；
2. `em`；
3. `%`。

> 1.像素单位`px`，使用像素直接定义字体的大小，是绝对单位，如`12px`。

> 2.字体大小`em`，一个字体的大小就是1`em`，在任何浏览器中，默认的字体大小都是1`em`。

> 3.百分比`%`，以当前文本的百分比定义的尺寸。

### 修饰页面文本和页面背景的属性

- `background`，将背景属性设置在一个声明中
- `background-color`，设置页面对象的背景颜色
- `background-image`，引用图像，将其设置为背景
- `background-repeat`，设置背景图像重复的方式
- `background-position`，设置背景图像的具体位置
- `background-attachment`，设置背景图像是固定还是随着页面的其余部分滚动
- `color`，设置文本颜色
- `line-height`，设置行高
- `white-space`，设置元素中段落排版的方式
- `word-spacing`，设置字间距
- `font-family`，设置文本字体
- `font-size`，设置字体尺寸
- `font-style`，设置字体风格
- `font-weight`，设置字体粗细
- `direction`，设置文本方向
- `letter-spacing`，设置字符间距
- `text-align`，对齐页面中的文本
- `text-decoration`，给文本添加下画线
- `text-transform`，控制元素中的字母

### 浏览器支持

`webkit`引擎的浏览器，如`Safari`,`Chrom`的私有属性的前缀是`-webkit-`，`gecko`引擎的浏览器，如`Firefox`的私有属性的前缀是`-moz-`，`Opera`浏览器的私有属性的前缀是`-o-`，`IE`浏览器，限于`IE 8+`的私有属性的前缀是`-ms-`。

### CSS3新特性

有在属性选择符中引入通配符，灵活的伪类选择符`nth-child()`等。

> 属性选择符

- `E[attr]`，选择具有`attr`属性的`E`元素。
- `E[attr="val"]`，选择具有`attr`属性且属性值等于`value`的`E`元素。
- `E[att~="val"]`，选择具有`attr`属性且属性值为用空格分隔的字词列表，其中一个等于`val`的`E`元素
- `E[attr|="value"]`，选择具有`attr`属性且属性值为用连字符分隔的字词列表，表示由`val`开始的`E`元素
- `E[attr^="val"]`，选择具有`attr`属性且属性值为以`val`开头的字符串的`E`元素
- `E[attr$="val"]`，选择具有`attr`属性且属性值为以`val`结尾的字符串的`E`元素
- `E[attr*="val"]`，选择具有`attr`属性且属性值为包含`val`的字符串的`E`元素

```
^ 表示匹配起始符
$ 表示匹配结束符
* 表示匹配任意字符
```

### CSS结构伪类选择符

- `E:root`，选择匹配`E`所在文档的根元素
- `E:not(s)`，选择匹配所有不匹配简单选择符`s`的`E`元素
- `E:empty`，匹配没有任何子元素的元素`E`
- `E:target`，匹配当前链接地址指向的`E`元素
- `E:first-child`，匹配父元素的第一个子元素`E`
- `E:last-child`，匹配父元素的最后一个子元素`E`
- `E:nth-child(n)`，匹配父元素的第n个子元素`E`
- `E:nth-last-child(n)`，匹配父元素的倒数第n个子元素`E`
- `E:only-child`，匹配父元素仅有的一个子元素`E`
- `E:first-of-type`，匹配同类型中的第一个同级兄弟元素`E`
- `E:last-of-type`，匹配同类型中的最后一个同级兄弟元素`E`
- `E:only-of-type`，匹配同类型中的唯一的一个同级兄弟元素`E`
- `E:nth-of-type(n)`，匹配同类型中的第N个同级兄弟元素`E`
- `E:nth-last-of-type(n)`，匹配同类型中的倒数第n个同级兄弟元素`E`

### CSS结构伪类选择符

- `E:link`，设置超链接`a`在未被访问前的样式
- `E:visited`，设置超链接`a`在其链接地址已被访问过时的样式
- `E:hover`，设置元素在光标悬停时的样式
- `E:active`，设置元素在被用户激活时的样式
- `E:foucs`，设置元素在成为输入焦点时的样式
- `E:checked`，匹配所有用户界面上处于选中状态的元素`E`
- `E:enabled`，匹配所有用户界面上处于可用状态的元素`E`
- `E:disabled`，匹配所有用户界面处于禁用状态的元素`E`

### 伪元素选择符

- `E:first-letter/E::first-letter`，设置对象内第一个字符的样式
- `E:first-line/E::first-line`，设置对象内第一行的样式
- `E:before/E::before`，设置在对象前发生的内容，用来和content属性一起使用
- `E:after/E::after`，设置在对象后发生的内容，用来和content属性一起使用
- `E::selection`，设置被选择时的颜色

### 文本

文本阴影

```
text-shadow: length || lenth || opacity || color
// text-shadow: 5px 5px 3px #333
text-shadow: -1px 0 #333, 0 -1px #333, 1px 0 #333, 0 1px #333;
```

文本溢出处理：

```
text-overflow: clip | ellipsis | ellipsis-word

// 溢出文本的省略标记
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
width: 200px;
设置宽度，将溢出内容设为隐藏，强制文本单行显示，设置溢出文本显示为省略标记
```

边界换行属性：`word-wrap`，用于设置或索引当前行超过指定容器的边界时是否断开转行

```
word-wrap: normal | break-word
```

- `normal`表示默认的连续文本换行，允许内容超出边界，
- `break-word`表示内容将边界内换行

```
word-break: normal | break-all | keep-all
```

`word-break`用于设置或检索对象内文本的字内换行行为

> `@font-face`语法规则

使用它能够加载服务器端的字体文件

```
@font-face: {属性:取值;}
font-family: 设置文本的字体名称
font-style: 设置文本样式
font-variant: 设置文本是否大小写
font-weight: 设置文本的粗细
font-stretch：设置文本是否横向的拉伸变形
fontsize: 设置文本字体的大小
src: 设置自定义字体的相对路径或绝对路径
```

> `opactity`属性

```
opacity: <alpha> | inherit
// 表示不透明度，表示继承父元素的不透明度
```

> `Background`

```
background: [background-image] | [background-origin] | [background-clip] | [background-repeact] | [background-size] | [background-position]
```

```
background-origin: border-box | padding-box | content-box
```

```
background-clip: border-box | padding-box | content-box
```

```
background-size: [<length> | <percentage> | auto] {1,2} | cover | contain
```

### 回看笔者往期高赞文章，也许能收获更多喔！

- [一个合格的初级前端工程师需要掌握的模块笔记](https://juejin.cn/post/6925197705832562696)
- [Vue.js笔试题解决业务中常见问题](https://juejin.cn/post/6916664414422695949)
- [【初级】个人分享Vue前端开发教程笔记](https://juejin.cn/post/6923946134025191432)
- [长篇总结之JavaScript，巩固前端基础](https://juejin.cn/post/6844904078934278158)
- [前端面试必备ES6全方位总结](https://juejin.cn/post/6844904067764846600)
- [达达前端个人web分享92道JavaScript面试题附加回答](https://juejin.cn/post/6913480482638266382)
- [【图文并茂，点赞收藏哦！】重学巩固你的Vuejs知识体系](https://juejin.cn/post/6844904117337341959)
- [【思维导图】前端开发-巩固你的JavaScript知识体系](https://juejin.cn/post/6844904106243391495)
- [14期-连肝7个晚上，总结了计算机网络的知识点！（共66条）](https://juejin.cn/post/6850037263116533773)

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

### 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

### 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)

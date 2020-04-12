## HTML5元素

### html5的简介

1. 2014 年 10 月 28 日，W3C 组织公开发布 HTML5 标准规范。
2. HTML5 针对大量不规范的 HTML 文档，做到了良好的兼容性。

### HTML5 和 HTML4 的区别

1. DTD 的变化：因为HTML4.01基于SGML，HTML5不基于SGML
2. HTML5 的语法变化

    某些元素可以省略结束标签
        （<p> <li> <dt> <dd> 等） 
    没有结束标签的元素
        (<br> 等）

3. 属性值可以不用引号括起来
4. 标签不再区分大小写
5. 某些标志性的属性可以省略属性值，通常为 boolean 类型

### HTML5 的优势

1. 解决跨浏览器，跨平台问题
2. 增强了 web 的应用程序（比如以前用 Flash 来播放视频，现在直接使用 HTML5 来播放视频，使得手机网页也能看视频）

### HTML5废弃的标签
	big center font frame frameset noframes

### HTML5新增的元素 
	<header> 用于定义文档或节的页眉
	<footer> 用于定义文档或节的页脚
	<article> 用于定义文档内的文章
	<section> 用于定义文档中的一个区域（或节）
	<aside> 用于定义与当前页面或当前文章的内容几乎无关的附属信息
	<nav> 用于定义页面上的导航链接部分

	<audio> 定义声音，比如音乐或其他音频流
	<video> 定义视频，比如电影片段或其他视频流
	
	<mark> 用于定义高亮文本
	<time> 用于显示被标注的内容是日期或时间（24 小时制）
	<progress> 用于表示一个进度条

	<figure> 
    用于定义一段独立的引用，经常与说明(caption)<figcaption>配合使用，通常用在主文中的图片，代码，表格等。
	<figcaption> 用于表示是与其相关联的引用的说明/标题，用于描述其父节点
	<figure>元素里的其他数据。
	<hgroup> 用于对多个<h1>~<h6>元素进行组合

### 效果

    <mark>你好</mark>

<mark>你好</mark>

	<figure>
		<img src="img/adv1.png" alt="" width="200">
		<figcaption>图片标题</figcaption>
	</figure>

	<!-- 输入框搜索 -->
    <input type="text" list="list">
    <datalist id="list">
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="山西">山西</option>
    </datalist>

效果：

<input type="text" list="list">
<datalist id="list">
    <option value="北京">北京</option>
    <option value="上海">上海</option>
    <option value="山西">山西</option>
</datalist>

	<!-- 点击展开 只有谷歌和苹果浏览器支持-->
	<details>
		<summary>今天天气凉快吗？</summary>
		<p>今天下雨了，天气很凉快</p>
	</details>

效果：

<details>
    <summary>今天天气凉快吗？</summary>
    <p>今天下雨了，天气很凉快</p>
</details>

 ### HTML5的表单控件
	<form action="" method="get" oninput="x.value=parseInt(a.value)"> 
		0 <input type="range" id="a" value="50"> 100 <br/>
		<output name="x" for="a">50</output>
	</form>

 ### HTML5新增的type类型
	color number email
	time 生成一个时间选择器
	datetime 生成一个 UTC 的日期时间选择器
	datetimelocal  生成一个本地化的日期时间选择器
	date  显示一个日期输入区域，可同时使用日期选择器，结果值包括年、月、日，不包括时间。谷歌识别

 ### HTML5新增的表单属性
	placeholder 主要用在文本框，规定可描述输入字段预期值的简短的提示信息
	autofocus 当为某个表单控件增加该属性后，当浏览器打开这个页面， 这个表单控件会自动获得焦点
	list 为文本框指定一个可用的选项列表，当用户在文本框中输 入信息时，会根据输入的字符，自动显示下拉列表提示，供用户从中选择
	pattern 用于验证表单输入的内容，通常 HTML5 的 type 属性，比如email、tel、 number、url 等，已经自带了简单的数据格式验证功能了，加上 pattern 属性后， 验证会更加高效
	required 必需在提交之前填写输入字段
	spellcheck 拼写检查，为<input>、<textarea>等元素新增属性
	multiple 一次上传多个文件
	maxlength <textarea>新增<br />maxlength：用于规定文本区域最大字符数。
	wrap：是否包含换号符（soft/ hard） 

效果：

	<form id="login" action="" method="get">
		用户名：<input type="text" name="username" placeholder="请输出用户名" required><br>
		年龄：<input type="number" name="num" min=10 max=20 step="5" value="10"><br>
		邮箱：<input type="email" name="email"><br>
		生日：<input type="date" name="data"><br>  
		爱好：<select size="2" multiple  name="like">
			<option>篮球</option>
			<option>足球</option>
			<option>羽毛球球</option>
		</select>
		喜欢的颜色：<input type="color" name="color"><br>
		<button type="submit">提交</button>
	</form>

<form id="login" action="" method="get">
    用户名：<input type="text" name="username" placeholder="请输出用户名" required><br>
    年龄：<input type="number" name="num" min=10 max=20 step="5" value="10"><br>
    邮箱：<input type="email" name="email"><br>
    生日：<input type="date" name="data"><br>  
    爱好：<select size="2" multiple  name="like">
        <option>篮球</option>
        <option>足球</option>
        <option>羽毛球球</option>
    </select>
    喜欢的颜色：<input type="color" name="color"><br>
    <button type="submit">提交</button>
</form>
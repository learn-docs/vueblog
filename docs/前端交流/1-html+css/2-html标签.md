## 标题标签   
	<h1 id="main">标题1</h1>
	<h2>标题2</h2>
	<h3>标题3</h3>
	<h4>标题4</h4>
	<h5>标题5</h5>
	<h6>标题6</h6>	

## 段落标签
	<p>段落标签<p>非常棒</p></p>

## 换行标签
	<br/>

## 水平线
	<hr/>

## 强调标签
	<em>倾斜</em>
	<i>倾斜</i>
	<strong>强壮</strong>
	<b>加粗</b>

## 图片标签
	<img src="img/dada.png" alt="dada" title="图"/>
	<img src="img/dada.png" alt=""/>


## 超链接
	<a href="http://www.baidu.com" target="_blank">百度</a>
	<a href="#main">主题</a>
	<a href="mailto:xxxxx@163.com">打开邮箱</a>
	<a href="笔记1.html#footer">跳转到笔记1的底部</a>

## 列表标签
	<ul>
		<li>
			<a></a>
		</li>
		<li>2</li>
		<li>3</li>
	</ul>


	<ol>
		<li>a</li>
		<li>b</li>
		<li>c</li>
	</ol>

	<dl>
		<dt>第一章</dt>
		<dd>第一节</dd>
		<dd>第二节</dd>
		<dd>第三节</dd>

		<dt>第二章</dt>
		<dd>第一节</dd>
		<dd>第二节</dd>
		<dd>第三节</dd>

		<dt>第三章</dt>
		<dd>第一节</dd>
		<dd>第二节</dd>
		<dd>第三节</dd>
	</dl>

## 表格标签
	<table border="1" width="800">
		<caption>通讯录</caption>
		<thead>
			<tr>
				<th>序号</th>
				<th>姓名</th>
				<th>电话</th>
				<th>备注</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td rowspan="2">1</td>
				<td rowspan="2">dada</td>
				<td>123456789</td>
				<td rowspan="2">dada</td>
			</tr>
			<tr>
				<td>123456789</td>
			</tr>
			<tr>
				<td>2</td>
				<td>dada</td>
				<td>123456789</td>
				<td>dada</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td colspan="4" align="right">共2人</td>
			</tr>
		</tfoot>
	</table>

## 表单标签
	<form action="" method="post">
		用户名：<input type="text" name="username"/><br/>
		密码：<input type="password" name="password"/><br/>
		性别：
        <input type="radio" name="sex" value="0">男 
        <input type="radio" name="sex" value="1">女
        <br/>
		爱好：
        <select name="like"> 
			 <option value="看书">看书</option> 
			 <option value="旅游" selected="selected">旅游</option> 
			 <option value="运动">运动</option> 
			 <option value="购物">购物</option> 
		</select>
        <br/>
		个人简介：
        <textarea cols="50" rows="10"></textarea>
		<input type="button" name="but" value="按钮">
		<input type="submit" name="submit" value="提交">
		<input type="reset" name="reset" value="重置">
	</form>

## 无语义标签
	<div></div>
	<span></span>

## 模块划分
	常见的企业站，多由头部区，展示图片区域，主题区域，底部信息区域组成
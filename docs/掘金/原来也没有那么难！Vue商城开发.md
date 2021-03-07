[Github来源：力扣 (LeetCode)｜刷题打卡](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

> [已开启]任务一：刷题打卡 * 10 篇

大家好，我是**魔王哪吒**，很高兴认识你~~

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

**时间： 3 月 1 日 ～ 3 月 13 日**

- [力扣 (LeetCode)-两数之和,有效的括号,两数相加｜刷题打卡](https://juejin.cn/post/6934840493352157197)-3月1日
- [力扣 (LeetCode)-合并两个有序链表,删除排序数组中的重复项,JavaScript笔记｜刷题打卡](https://juejin.cn/post/6935212632173445151)-3月2日
- [力扣 (LeetCode)-最大子序和,JavaScript数据结构与算法（数组）｜刷题打卡](https://juejin.cn/post/6935568341322956830)-3月3日
- [针对CSS说一说｜技术点评](https://juejin.cn/post/6935952741755781156)-3月4日
- [力扣 (LeetCode)-栈,括号生成 ｜刷题打卡](https://juejin.cn/post/6936378038129164319)-3月5日

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

### Vue跨平台开发

使用Vue开发商城全流程的界面设计，如首页，产品展示，购物车，下单，会员界面等。（首页开发，用户管理，实现产品，新闻页面，购物，和订单处理）

1. Vue.js入门，数据绑定，表单和双向数据绑定，条件和循环指令，样式绑定，事件处理器，监听，和计算属性。
2. Vue.js组件，自定义指令和响应接口，路由，动画和过渡，Vue.js中的插件Axios。

> Vue.js基础语法，数据绑定，表单使用，条件和循环指令，样式绑定，事件处理，监听和计算属性等。

1. Vue.js是一套构建用户界面的渐进式框架。
2. Vue只关注视图层，采用的是 自底向上 的 增量式开发设计。

```
// 引用Vue.js代码
<script src="https://unpkg.com/vue/dist/vue.js"></script>

// 示例
<body>
 // 显示代码
 <div id="app">
  <p>{{message}}</p>
 </div>
 // 脚本代码
 <script>
  new Vue({
   el: '#app',
   data: {
    message: 'hello 魔王哪吒'
   }
  })
 </script>
</body>
```

不知道大家电脑上有没有，这些在我的电脑上是有的：`WebStorm, Eclipse, PhpStorm, Vscode, HBuider`等。

Vue.js安装有三种方法：

- 使用CDN方法
- 下载官方Vue.js框架
- NPM方法

基于2.x版本Vue：

```
// 全局安装
cnpm install --global vue-cli
// 创建一个基于 webpack 模板的新项目
vue init webpack my-project
// 项目名 my-project
// 项目描述 A Vue.js project
// Use ESLine - yes
// Yes 。。。

// 进入项目
cd my-project
cnpm install
cnpm run dev
```

### Vue.js开始

> 每个Vue应用都需要通过实例化Vue来实现。

示例：

```
var vm = new Vue({
 // 选项
})
```

```
<h1>{{dada}}</h1> // data: { dada: 'jeskson' }

<h2>{{use()}}</h2> 

methods: {
 use() {
  return this.dada
 }
}
```

- `data`用于定义属性
- `methods`用于定义函数
- `{{}}`用于输出对象属性和函数返回值

> 1.`v-text`输出纯文本
> 2.`v-html`输出解析后的文本

`v-once`指令，表示元素和组件只渲染一次，不会随着数据的改变而改变

> `v-cloak`指令

`v-cloak`不需要表达式，它会在Vue实例结束编译时从绑定的`html`元素上移除。`v-cloak`指令经常和`display:none`配合使用。

示例：

```
<div id="app" v-cloak>
 <div :style="{'color':color,'fontSize':fontSize+'px'}">文本</div>
 {{message}}
</div>

new Vue({
 el: '#app',
 data: {
  color: 'red',
  fontSize: '12',
  message: '魔王哪吒'
 },
})
```

这样当网速慢时，Vue.js文件还没有加载完时，页面上会显示`{{message}}`的字样，直到Vue创建实例，编译模板时，DOM才会被替换，这个过程中屏幕是有闪动的。

使用CSS：

```
<style type="text/css">
 [v-cloak] {
  display: none
 }
</style>
```

示例：

```
// 绑定一个属性
<img v-bind:src="imgSrc">
// 缩写
<img :src="imgSrc">
// 内联字符串拼接
<img :src="'/path/img/'+fileName">
// class绑定
<div :class="{ red: isRed }"></div>
<div :class="[classA,classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">
// style绑定
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>
// 绑定一个有属性的对象
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
// 通过prop修饰符绑定DOM属性
<div v-bind:text-content.prop="text"></div>
// prop绑定，prop必须在my-component中声明
<my-component :prop="someThing"></my-component>
// 通过$props将父组件的props一起传给子组件
<child-component v-bind="$props"></child-component>
```

> 支持JavaScript表达式

示例：

```
<div>{{number+2}}</div>
<div>{{ da ? '显示' : '不显示' }}</div>
<div>
 {{ arr.split('').reverse().join('') }}
```

### Vue.js指令总结

- `v-model`，绑定数据

```
<input v-model="message">
```

- `v-text`，输出文本，不能解析标签

```
<p v-text="message"></p>
```

- `v-html`，输出文本，可解析标签

```
<p v-html="message"></p>
```

- `v-once`，只绑定一次数据

```
<p v-once>{{message}}</p>
```

- `v-bind`，绑定属性

```
<img v-bind:src="imgurl">
```

- `v-if`，控制是否显示容器，值转为布尔值，为false时，注释该容器；为true时显示

```
<div v-if="true"></div>
```

- `v-show`，控制是否显示容器，设置为true时显示，为false时不显示

```
<div v-show="true"></div>
```

- `v-for`，循环遍历数组，对象

```
<li v-for="(val,key) in arr">{{val}}</li>
```

- `v-cloak`，在还没有执行到Vue代码的时候隐藏元素，可解决闪烁问题

```
<p v-cloak>{{message}}</p>
```

> 指令缩写

- `v-bind`和`v-on`示例：

```
<a v-bind:href="url"></a>

<a :href="url"></a>

<a v-on:click="doSomething"></a>

<a @click="doSomething"></a>
```

> 修饰符

修饰符是以半角句号`"."`指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

- `.prevent`修饰符：`v-on`指令对于触发的事件调用`event.preventDefault()`

示例：

```
<form v-on:submit.prevent="onSubmit"></form>
```

### 表单

`v-model`指令用于在`input, select, textarea, checkbox, radio`等表单控件元素上创建双向数据绑定，根据表单上的值自动更新绑定的元素的值。

```
<input v-model="test">

<input :value="test" @input="test = $event.target.value">
```

- `@input`是对`<input>`输入事件的监听

> `select`中使用

```
<div id="app">
 <select v-model="dada" name="shuiguo">
  <option value="0">请选择</option>
  <option value="p">苹果</option>
  <option value="x">香蕉</option>
  <option value="l">荔枝</option>
 </select>
 <span>默认:{{dada}}</span>
</div>

data: {
 dada: 'x'
}
```

- `checkbox`

示例：

```
<div id="app">
<input type="checkbox" v-model="dada" id="da">
<label for="da">{{dada}}</label>
</div>

<div id="app">
 <input type="checkbox" v-model="city" value="深圳">深圳
 <input type="checkbox" v-model="city" value="北京">北京
 <input type="checkbox" v-model="city" value="上海">上海
 <br><label for="">{{city}}</label>
</div>
```

- `radio`

示例：

```
<div id="app">
 <input type="radio" v-model="moren" value="男"> 男
 <input type="radio" v-model="moren" value="女"> 女
 // input 选中状态改变的时候，下面显示的内容也会改变
 <br>性别：<span>{{moren}}</span>
</div>
```

- `a`标签

示例：

```
<div id="app">
 <a :href="url" :target="target">魔王哪吒</a><br>
</div>

new Vue({
 el: '#app',
 data: {
  url: 'http://www.dadaqianduan.cn',
  target: '_blabk'
 }
})
```

过滤器的使用，示例

```
{{ message | capitalize }}
<div :id="rawId | formatId"></div>
```

获取表单要提交的数据：

```
// 表单提交形式
<form @submit.prevent = "submit">
```

示例：

```
<div class="hello">
 <ul>
  <form @submit.prevent="submit">
   <input type="text" name="name" v-model="inputtet.name">
   <input type="password" name="password" v-model="inputtext.password">
   <input type="submit" value="提交">
  </form>
 </ul>
</div>

<script>
var vm = new Vue({
 el: '.hello',
 data: {
  inputtext: {}
 },
 methods: {
  submit() {
   ...
  }
 },
})
</script>
```

> `v-model`指令的修饰符

如：

- `v-model.lazy`，只有在`input`输入框发生一个`blur`事件时才触发
- `v-model.number`，将用户输入的字符串转换成数字
- `v-model.trim`，将用户输入的前后空格去掉

示例：

```
// 在change时而非input时更新
<input v-model.lazy="msg">

// 用于限制用户输入的时候只能是数字，即使在 type="number"时，HTML输入元素的 值也总会返回字符串
<input v-model.number="age" type="number">

// trim修饰符
<input v-model.trim="msg">
```

### v-if指令，v-show指令，v-for指令

1. `v-if`，`v-else`，`v-else-if`指令

> `v-else，v-else-if`必须在`v-if`或者`v-else-if`后

2. `v-show`指令，用来决定它所在区块显示与否

示例:

```
v-show="true或false"
```

- `true`所在区块显示
- `false`所在区块不显示

> `v-show`仅是显示或者隐藏，值为`false`时，该元素依旧存在于DOM树中，（设置了`display: none`，会导致其无法正常显示）
> `v-if`是动态的，值为`false`时，是移除该元素，即是DOM树中不存在该元素

3. `v-for`指令用来遍历数组或对象的，可以根据`data`中的数据动态刷新视图

> 使用`v-for`渲染数据时，要将`key`属性加上，保证这个`key`的值是唯一并且不重复的，作用是唯一标识数据的每一项，提高渲染性能。

示例：

```
// 遍历数组
v-for="item in arr"

v-for="(item, index) in arr"

// 遍历对象
v-for="value in obj"

v-for="(value, key, index) in obj"
```

注意：不能这样去动态刷新视图，第一，使用数组的`length`属性去更改数组的时候不行，第二，使用索引的方式去更改数组也不行。

可以这样做，`Vue.set(arr, index, value)`方法，`arr`表示需要设置的数组，`index`表示数组索引，`value`表示该索引项的新值。`Vue.set(vm.list, 0, {id: 1, name: 'jeskson'}}`，或者是调用数组的`splice()`方法。

示例：

```
<div v-for="x in [1,2,3,4]">{{x}}</div>

<div v-for="y in arr">{{y}}</div>

<div id="app">
 <template v-for="item in arr">
  {{item}}
 </template>
</div>
```

- 对象

示例：

```
v-for="别名 in 对象"

<div id="app">
 <div v-for="item in obj">
  {{item}}
 </div>
</div>

v-for="(value, key) in obj"

<div v-for="(value, key) in obj">
 {{key}} : {{value}}
</div>

v-for="(value, key, index) in obj">

<div v-for="(value, key) in obj">
 {{index}}.{{key}} : {{value}}
</div>

// 也可以循环显示整数
v-for="n in 10"

<div v-for="n in 10">
 {{n}}
</div>
```

### 实现九九乘法表

示例：

```
<div id="app"
// 外层循环
 <div v-for="x in 9">
  // 内层循环
   <div v-for="y in x">
    {{y}}*{{x}} = {{x*y}} |
   </div>
 </div>
</div>
```

### 样式绑定

> 属性绑定，对象绑定，数组绑定

示例：

```
<div :class="{dadastyle: isActive}"></div>
<script>
new Vue({
 el: '#app',
 data: {
  isActive: true
 }
})
</script>

<div :class="{dastyle: isActive, jj: hasError}"></div>

// 绑定数据里的一个对象
<div :class="classObject>魔王哪吒</div>

// 绑定数组
<div :class="[style_1, style_2]">魔王哪吒</div>
```

> 内联样式`style`

示例：

```
:style="{样式1，样式2，样式n}"

style="font-size: 10px;"
:style="{color: 'red',fontSize: '10px'}"

css1: {fontSize:"10px"},
css2: {color:"red"}
<div :style="[css1,css2]">魔王哪吒</div>
```

### 三目运算符

示例：

```
表达式 ? 代码1 : 代码2

<div :class="[isActive ? activeClass : '']"></div>
```

### 事件处理

- `v-on`指令绑定点击`click`事件
- `@click="say()"`
- `@click="num += 1"`
- `@click="add"`
- `@click="add(x1,x2)"`

### 事件修饰符

示例：

```
// 阻止单击事件冒泡
<a @click.stop="doThis">魔王哪吒</a>

// 提交事件不再重载页面
<form @submit.prevent="onSubmit"></form>

// 修饰符可以串联
<a @click.stop.prevent="doThis">魔王哪吒</a>

// 只有修饰符
<form @submit.prevent></form>

// 添加事件侦听器时使用事件捕获模式
<div @click.capture="doThis">魔王哪吒</div>

// 只当事件在该元素本身触发时回调
<div @click.self="doThis">魔王哪吒</div>

// click事件只能点击一次
<a @click.once="doThis"></a>
```

按键修饰符：

```
<input @keyup.13="submit">

<input @keyup.enter="submit">

// 按键别名：.enter, .tab, .delete, .esc, .space, .up, .down, .left, .right, .ctrl, .alt, .shif, .meta
```

### 监听和计算属性

- `watch`监听属性，用来监视某个数据的变化，并触发相应的回调函数执行。
- 通过`vm`对象的`$watch()`或`watch`配置来监视指定的属性。
- 当属性变化时，回调函数自动调用，在函数内部进行计算。
- `newVal`，数据发生改变后的值。
- `oldVal`，数据发生改变前的值。

示例：

```
// 千米之间的转换
watch: {
 qianmi(val) {
  this.qianmi = val;
  this.mi = val*1000;
 },
 mi(val) {
  this.mi = val;
  this.qianmi = val/1000;
 }
}

千米：<input type="text" v-model="qianmi"/>

米：<input type="text" v-model="mi"/>
```

### 购物车

示例：

```
// 增加 和 减少 购物车的产品数量
// 购物车 总价随之变化
// 对每个购物车产品数量也有一键清0的操作，同时购物车总价也随之变化
shoujiarr: [
 {
  id: 1,
  mingcheng: "iphone 6",
  jiage: 1000,
  shuliang: 1
 },
 {
  id: 2,
  mingcheng: "iphone 7",
  jiage: 2000,
  shuliang: 1
 }
]

totalMoney() {
 var money = 0; // 初始化
 for(var x = 0; x < this.shoujiarr.length; x++) {
  money = money + this.shoujiarr[x].jiage * this.shoujiarr[x].shuliang;
 }
 return money; // 返回值
}
```

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>监听属性-简单的购物车</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">
			table {
				border: 1px solid black;
				width: 100%;
				text-align: center;
			}

			th {
				height: 50%;
			}

			th,
			td {
				border-bottom: 1px solid #ddd;
			}
		</style>
	</head>
	<body>
		<div id="app">
			<!-- 定义购物车表 -->
			<table>
				<!-- 标题部分 -->
				<tr>
					<th>序号</th>
					<th>商品名称</th>
					<th>商品价格</th>
					<th>购买数量</th>
					<th>操作</th>
				</tr>
				<!-- shoujiarr -->
				<tr v-for="item in shoujiarr">
					<td>{{item.id}}</td>
					<td>{{item.mingcheng}}</td>
					<td>{{item.jiage}}</td>
					<td>
						<!-- 每次点击数量减一 -->
						<button @click="item.shuliang=item.shuliang-1"> - </button>
						{{item.shuliang}}
						<button @click="item.shuliang=item.shuliang+1"> + </button>
					</td>
					<td>
						<button @click="item.shuliang=0">清0</button>
					</td>
				</tr>
			</table>
			<div>总价：{{totalMoney()}}</div>
		</div>
		<script>
			var vm = new Vue({
				el: '#app',
				data: {
					shoujiarr: [{
							id: 1,
							mingcheng: "iphone 6",
							jiage: 1000,
							shuliang: 1
						},
						{
							id: 2,
							mingcheng: "iphone 7",
							jiage: 2000,
							shuliang: 1
						}
					]
				},
				methods: {
					totalMoney() {
						var money = 0; // 初始化
						for (var x = 0; x < this.shoujiarr.length; x++) {
							money = money + this.shoujiarr[x].jiage * this.shoujiarr[x].shuliang;
						}
						return money; // 返回值
					}
				}
			})
		</script>
	</body>
</html>
```

效果:

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d86e3551cb394146bf40c3f7f72f865e~tplv-k3u1fbpfcp-watermark.image)

### 全选与取消全选

- 点击全选，将全部勾选
- 点击取消全选，将全部取消勾选

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b41829adec648409e1a2a8d70fcd3f3~tplv-k3u1fbpfcp-watermark.image)

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>监听属性-选中</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">

		</style>
	</head>
	<body>
		<div id="app">
			<!-- 全选 -->
			<input type="checkbox" id="ckbox" @change="ckall()" v-model="checked"/>
			<label for="ckbox">全选</label><hr>
			<input type="checkbox" id="baidu" value="baidu" v-model="jieguo"/>
			<label for="baidu">baidu</label>
			<input type="checkbox" id="taobao" value="taobao" v-model="jieguo"/>
			<label for="taobao">taobao</label>
			<input type="checkbox" id="qq" value="qq" v-model="jieguo"/>
			<label for="qq">qq</label>
			<hr>
			{{jieguo}}
		</div>
		<script>
			var vm = new Vue({
				el: '#app',
				data: {
					checked: false, // 初始化布尔型
					jieguo: [], // 初始化
					shuzu: ["baidu","taobao","qq"]
				},
				methods: {
					// 自定义全选方法
					ckall() {
						// 全选中状态
						if(this.checked) {
							this.jieguo = this.shuzu
						}else{
							// 取消全选
							this.jieguo = []
						}
					}
				},
				watch: {
					"jieguo"() {
						if(this.jieguo.length == this.shuzu.length) {
							this.checked = true
						}else{
							this.checked = false
						}
					}
				}
			})
		</script>
	</body>
</html>
```

### 计算属性

> 计算属性包括`computed,methods,setter`。

1. 在`computed`属性对象中定义计算属性的方法，在页面上使用`{{方法名}}`来显示计算结果
2. 通过`getter/setter`来显示和监视属性数据
3. 计算属性存在缓存，多次读取只执行一次`getter`
4. 当其依赖的属性值发生变化时，计算属性会重新计算

示例：

```
computed: {
 // 计算属性的getter
 reversedMessage() {
  return this.message.split('').reverse().join('')
 }
}
```

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>监听属性-计算属性</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">

		</style>
	</head>
	<body>
		<div id="app">
			<p>原始字符串：{{message}}</p>
			<p>计算后反转字符串：{{reversedMessage}}</p>
			<hr>
			{{message.split('').reverse().join('')}}
		</div>
		<script>
			var vm = new Vue({
				el: '#app',
				data: {
					message: 'hello'
				},
				// 计算属性区块
				computed: {
					// 计算属性的getter
					reversedMessage() {
						return this.message.split('').reverse().join('')
					}
				},
				methods: {
				},
				watch: {
				}
			})
		</script>
	</body>
</html>
```

效果：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69a26d4659084d669d6ad003f06ea646~tplv-k3u1fbpfcp-watermark.image)

- `methods`

1. `computed`基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。
2. 使用`methods`，在重新渲染的时候，函数总会重新调用执行。

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>监听属性-计算属性</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">

		</style>
	</head>
	<body>
		<div id="app">
			<p>原始字符串：{{message}}</p>
			<p>计算后反转字符串：{{reversedMessage}}</p>
			<hr>
			<p>使用方法后反转字符串：{{reversedMessage2()}}</p>
		</div>
		<script>
			var vm = new Vue({
				el: '#app',
				data: {
					message: 'hello'
				},
				// 计算属性区块
				computed: {
					// 计算属性的getter
					reversedMessage() {
						return this.message.split('').reverse().join('')
					}
				},
				methods: {
					reversedMessage2() {
						return this.message.split('').reverse().join('')
					}
				},
				watch: {
				}
			})
		</script>
	</body>
</html>
```

> `setter`

当页面获取某个数据时，会在data里找，找不到就去计算属性里找，在计算属性里获取数据时会自动执行get方法，同时也提供了set方法。

示例：

```
computed: {
 site: {
  // getter
  get() {
   return this.name + ' ' + this.url
  },
  set(newValue) {
   var names = newValue.split('|')
   this.name = names[0]
   this.url = names[names.length-1]
 }
}
```

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>监听属性-计算属性</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">

		</style>
	</head>
	<body>
		<div id="app">
			<p>{{ site }}</p>
		</div>
		<script>
			var vm = new Vue({
				el: '#app',
				data: {
					name: '达达前端',
					url: 'http://www.dadaqianduan.cn'
				},
				// 计算属性区块
				computed: {
					site: {
						//getter
						get() {
							return this.name + ' ' + this.url
						},
						//setter
						set(newValue) {
							var names = newValue.split('|')
							this.name = names[0]
							this.url = names[names.length-1]
						}
					}
				},
				methods: {
					
				},
				watch: {
				}
			})
			
			vm.site = '达达前端|http://www.dadaqianduan.cn';
			document.write('name:' + vm.name);
			document.write('<br>');
			document.write('url:'+vm.url)
		</script>
	</body>
</html>
```

效果：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50fe17b1e64544da84fc07d1920294d6~tplv-k3u1fbpfcp-watermark.image)

> 学习提升：学会使用组件，自定义指令，响应接口，路由，过渡和动画，第三方插件Axios。

### 组件

- 全局组件
- 局部组件
- 组件的props属性
- 组件的动态props

普通注册：

```
// 注册一个全局组件
Vue.component(tagName, options)
// tagName为组件名，options为配置选项

使用方式：
<tagName></tagName>
```

Vue构造器：

```
// 格式
var 组件内容 = Vue.extend({
 template: '<div>自定义全局组件，使用Vue.extend</div>'
})
Vue.component("组件名称",组件内容)
```

- `Vue.extend()`是`Vue`构造器的扩展，调用`Vue.extend()`创建的是一个组件构造器，而不是一个具体的组件实例。
- `Vue.extend()`构造器有一个选项对象，选项对象的`template`属性用于定义组件要渲染的`HTML`。
- 使用`Vue.component()`注册组件时，需要提供：组件的标签 和 组件构造器。该方法内部会调用组件构造器，创建一个组件实例，组件要挂载到某个Vue实例下，才会生效。

> 组件的使用示例

```
Vue.component('dada',
 {
  template: '<h1>魔王哪吒，自定义全局组件</h1>'
 }
}

// 创建组件构造器-组件内容
var da = Vue.extend({
 template: '<h1>魔王哪吒，自定义全局组件，使用Vue.extend</h1>'
})
Vue.component('dada2', da)

// 使用组件
<div id="app">
 <dada></dada>
 <dada2></dada2>
</div>
```

> 局部组件

使用`components`属性实现局部注册。

```
var demoObj = {
 template: '<h1>魔王哪吒</h1>'
}

// 使用components来注册组件
new Vue({
 el: '#app',
 components: {
  // 定义的局部组件，只有在父模本中使用
  'dada': demoObj
 }
})

// 使用
<div id="app">
 <demoObj></demoObj>
</div>
```

> `props`属性

- `props`是父组件用来传递数据的一定自定义属性
- 父组件的数据通过`props`属性传给子组件
- 子组件显示地用`props`选项声明`props`

> 动态`props`

示例：

```
Vue.component('child', {
 props: ['myvar'],
 template: '<h1>{{myvar}}</h1>'
})
```

### 自定义指令

`Vue`指定以指令语法如下：

```
Vue.directive(id, definition)
// id是指令ID，definition是定义对象
```

注册一个全局的自定指令`v-focus`：

```
Vue.directive('focus', {
 // 当绑定元素插入DOM时
 inserted(el) {
 // 聚焦元素
 el.focus()
 }
})
```

效果：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8347d6b36f9243bab62bf3c204e29752~tplv-k3u1fbpfcp-watermark.image)

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>监听属性-自定义指令</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">

		</style>
	</head>
	<body>
		<div id="app">
			<p>页面载入时，input元素自动获取焦点：</p>
			<input v-focus>
		</div>
		<script>
			// 注册一个全局自定义指令
			Vue.directive('focus', {
				// 当绑定元素插入DOM时
				inserted(el) {
					// 聚焦元素
					el.focus()
				}
			})
			var vm = new Vue({
				el: '#app',
				data: {},
				// 计算属性区块
				computed: {

				},
				methods: {

				},
				watch: {}
			})
		</script>
	</body>
</html>
```

### 钩子函数

1. `bind`，只调用一次，指令第一次绑定到元素时调用，可以使用这个钩子函数定义一个在绑定时执行一次的初始化动作。
2. `inserted`，被绑定的元素插入父节点时调用。
3. `update`，被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
4. `componentUpdated`，被绑定元素所在模本完成一次更新周期时调用。
5. `unbind`，只调用一次，指令与元素解绑时调用。

### 钩子函数的参数

- `el`，指令所绑定的元素，可以用来直接操作DOM

`Vue.js`响应接口，`Vue`可以添加数据动态响应接口。

示例：

```
vm.$watch('counter', function(nval, oval){
 alert();
});
```

### `Vue.set`

该方法用来设置对象的属性，用来解决`Vue`无法检测添加属性的问题

```
Vue.set(target, key, value)
// target 对象或数组， key 可以是字符串或数字， value 可以是任意类型
```

示例：

```
<div id="app">
<p style="font-size: 23px;">计数器:{{products.id}}</p>
<button @click="productes.id++" style="font-size: 23px;">点我</button>
</div>

<script>
 var myproduct = { "id": 1, name: "jeskson", "price": "12" };
 var vm = new Vue({
  el: '#app',
  data: {
   counter: 1,
   products: myproduct
  }
 });
 Vue.set(myproduct, 'dada', 1);
</script>
```

### `Vue.delete`

用于删除动态添加的属性

```
Vue.delete(target, key)
// 仿上面的
...
Vue.delete(myproduct, 'price');
```

### vue-router

使用镜像：

```
cnpm install vue-router
```

HTML代码：

```
<div id="app">
 <h1>魔王哪吒</h1>
 <p>
  <router-link to="/foo">去foo</router-link>
  <router-link to="/bar">去bar</router-link>
 </p>
 <router-view></router-view>
</div>
```

JavaScript代码：

```
// 导入Vue 和 VueRouter，调用Vue.use(VueRouter)
// 定义组件
const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

// 定义路由
const routes = [
 {path: '/foo', component:Foo},
 {path: '/bar', component:Bar}
]
// 创建router实例
const router=new VueRouter({
 routes
})
// 创建和挂载根实例
const app = new Vue({
 router
}).$mount('#app')
```

> `<router-link>`组件的属性，如`to,replace,append,tag,active-class,exact-active-class,event`等。

`to`表示目标路由的链接，点击链接后，把`to`的值传到`router.push()`。

```
<router-link to="home">Home</router-link>
// 渲染结果
<a href="home">Home</a>

<router-link :to="'home'">Home</router-link>

<router-link :to="{path:'home'}">Home</router-link>

<router-link :to="{name:'user',params:{userId：123}}">User</router-link>

<router-link :to="{path: 'register', query: { name: 'jeskson'}}">Register</router-link>
```

`replace`属性，点击时，会调用`router.replace()`，而不是`router.push()`，导航后不会留下`history`记录

```
<router-link :to="{path: '/dadaqianduan'}" replace></router-link>
```

`append`设置后，在当前路径前添加基路径，变化：

```
/a -> b // 没有append，则路径为 /b
如果配置了append，则路径为 /a/b

<router-link :to="{path: 'relative/path'}" append></router-link>
```

`tag`渲染成某种标签：

```
<router-link to="/foo" tag="li">foo</router-link>
// 渲染结果
<li>foo</li>
```

`active-class`，设置链接激活时使用的CSS类名：

```
<style>
 ._active{
  background-color: red;
 }
</style>
<p>
 <router-link :to="{path: '/route1'}" active-class="_active">Router Link 1</router-link>
 
 <router-link :to="{path: '/router2'}" tag="span"> Router Link 2</router-link>
</p>
```

`exact-active-class`：配置当链接被精确匹配时应该激活的`class`

```
<p>
 <router-link :to="{path: '/route1'}" exact-active-class="_active">Router Link 1</router-link>
 
 <router-link :to="{path: '/router2'}" tag="span"> Router Link 2</router-link>
</p>
```

`event`，声明可以用来触发导航事件：

```
<router-link :to="{path: '/routes1'}" event="mouseover">Router Link</router-link>
```

### 过渡

效果：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f181bc6b15e345919fe8a42b4a5521c4~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6deacd33574849dc8fe55be69a75e5e9~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5926d8f2897649ca8a97c7d5a523fa14~tplv-k3u1fbpfcp-watermark.image)

示例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>过渡</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
		<style type="text/css">
			/* 设置持续时间和动画函数 */
			.fade-enter-active, .fade-leave-active {
				transition: opacity 2s;
			}
			.fade-enter, .fade-leave-to {
				opacity: 0;
			}
		</style>
	</head>
	<body>
		<div id="app">
			<button @click="show=!show">点我</button>
			<!-- vue 提供了内置的过渡封装组件 -->
			<transition name="fade">
				<p v-show="show" :style="styleobj">动画效果</p>
			</transition>
		</div>
		<script>
			var vm = new Vue({
				el: '#app',
				data: {
					show: true,
					styleobj: {fontSize: '30px', color: 'red'}
				},
				computed: {

				},
				methods: {

				},
				watch: {}
			})
		</script>
	</body>
</html>
```

`Vue`在元素显示与隐藏的过渡中，提供了6种切换：

1. `v-enter`，定义进入过渡的开始状态
2. `v-enter-active`，定义进入过渡生效时的状态
3. `v-enter-to`，定义进入过渡的结束状态
4. `v-leave`，定义离开过渡的开始状态
5. `v-leave-active`，定义离开过渡生效时的状态
6. `v-leave-to`，定义离开过渡的结束状态

### Axios

> `Axios`是一个基于Promise的HTTP库。

安装：

```
npm install axios
或
bower install axios
或
yarn add axios
```

> `GET`方法

```
new Vue({
 el: '#app',
 data(){
  return {
   info: null
  }
 },
 mounted() {
  axios.get('https://域名/json_demo.json')
  .then(response => (this.info = response.data))
  .catch((error) => { console.log(error); });
 }
})
```

传递参数：

```
// url上添加参数
axios.get('/user?ID=123')
.then((response)=>{console.log(response);})
.catch((error)=>{console.log(error);});

// params设置参数
axios.get('/user', {
 params: {
  ID: 123
 }
})
.then((response)=>{console.log(response);})
.catch((error)=>{console.log(error);});
```

> `POST`方法，传递数据到服务器端

```
axios.post('https://域名/demo_axios_post.php')
.then(response=>(this.info=response))
.catch((error)=>{console.log(error);})

// 传递参数
axios.post('/user',{
 name: 'jeskson-魔王哪吒',
 password: 123
})
.then(response=>(this.info=response))
.catch((error)=>{console.log(error);})
```

> 执行多个并发请求

```
function getUserAccount(){
 return axios.get('/user/123');
}
function getUserPermissions(){
 return axios.get('/user/123/permissions');
}
axios.all([getUserAccount(),getUserPermissions()])
.then(axios.spread(function(acct, perms){
 // 两个请求现在都执行完成
}));
```

`axios api`

```
axios(config)
// 发送POST请求
axios({
 method: 'post',
 url: '/user/123',
 data: {
  name: '魔王哪吒',
  age: 12
 }
});
// GET请求
axios({
 method: 'get',
 url: 'https://xxx',
 responseType: 'stream'
})
.then(function(response){
response.data.pipe(fs.createWriteStream('xxx.jpg'))
});
axios(url[,config])
// 发送get请求
axios('/user/123');
```

> 请求方法的别名

```
axios.request(config)
axios.get(url[,config])
axios.delete(url[,config])
axios.head(url[,config])
axios.post(url[,data[,config]])
axios.put(url[,data[,config]])
axios.patch(url[,data[, config])
```

> 并发

```
axios.all(iterable)
axios.spread(callback)
```

> 响应结构

`axios`请求的响应包含诸多信息：

```
{ // data为由服务器提供的响应
 data: {},
 // status为HTTP状态码
 status: 200,
 // statusText来自服务器响应的HTTP状态信息
 statusText: "OK",
 //headers为服务器响应的头
 headers: {},
 // config是为请求提供的配置信息
 config: {}
}
```

> 拦截器: 在请求或响应被then或catch处理前拦截它们。

```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
 // 在发送请求之前做些什么
 return config；
}， funtion(error) {
 // 对请求错误做些什么
 return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
 // 对响应数据做点什么
 return response;
}, function(error) {
 // 对响应错误做点什么
 return Promise.reject(error);
});

// 移除拦截器
var myInterceptor = axios.interceptors.request.use(function() {..});
axios.interceptors.request.eject(myInterceptor);

// 自定义axios实例添加拦截器
var instance = axios.create();
instance.interceptors.request.use(function () {...});
```

错误处理，示例：

```
axios.get('/user/12345')
.catch(function (error) {
  if (error.response) {
   // 请求已经发出，但服务器响应的状态码不在2xx范围内
   console.log(error.response.data);
   console.log(error.response.status);
   console.log(error.response.headers);
  }else{
   console.log('Error', error.message);
  }
  console.log(error.config);
});
```

### Vue商城开发

商城模块：首页，用户，产品，新闻，购物，订单处理等。（图片轮播，精品推荐，用户注册与登录，产品详情，地址管理，完整的购物流程，商品加入，编辑，删除，批量选择，收获地址，下单以及会员中心-订单，收藏，足迹，地址，意见反馈）

### 首页

> 首页开发

1. 图片轮播，用来接收广告的。
2. 快捷菜单的实现和用户登录的判断。
3. 最新资讯的获取和实现。
4. 最新上架的产品
5. 精品推荐的产品

- 如何实现图片轮播，图片对象数组（点击图片的连接地址，图片的说明，图片的地址）。
- 局部快捷菜单，一般含有：最新产品，活动列表，帮助中心，用户中心（用户中心要判断用户是否登录，如果有登录就跳转到用户中心，如果没有登录就跳转到登录页面），用户登录数据可以保存在`localStorage`中。
- 获取最新资讯，循环显示出最新的资讯列表。（最新上架，精品推荐同理）

### 用户管理

关于用户的，如用户注册，登录，退出，用户信息修改，用户密码修改，用户收藏管理，用户地址管理等。

> 注册：

进入页面判断是否登录，如果登录进入首页，如果没有进入不了首页，先到登录页面中有注册按钮，注册过程，判断用户的输入信息，如果信息没有错误，则通过注册接口提交注册数据，如果信息有误，在前端判断，输入后就进行判断，不要提交给后端判断。

手机注册的，注意避免有人捣乱，使用图片验证码，每次发送获取验证码，先填写图片验证码判断正确后才发送获取验证码的接口。注册成功接口返回后提示注册成功，自动跳转到登录页面（避免用户多余操作）

> 用户登录

判断用户是否输入用户名和密码，最好有提示，提交数据到接口判断是否有误，有误重新填写（用户名，密码）。

> 会员首页（我的页面）

顶部的用户信息（头像，用户名，等级或级别，手机号），我的订单菜单（我的订单-全部订单，待付款，待发货，待收货，待评价，这些要清晰给用户看到）以及其他功能（我的收藏，地址管理，用户信息，密码修改，退出登录）

有的商城软件可以显示必要的页面，进入会员首页，判断是否登录，如用户处于登录状态，不做操作，如不处于登录状态，为了防止错误操作可以弹框提示，跳转到用户登录页面或者弹框提示输入用户名和密码，看需求。

> 用户退出

如果用户想要退出，可以点击退出登录，对应的缓存要清除，实现退出登录的功能，自动跳转到首页。

> 用户信息修改

可以实现，我的头像更换，我的姓名修改，我的性别修改，我的邮箱修改等。

> 用户密码修改

密码修改显示：原始密码（请输入原来的密码），新的密码（请输入新密码），确认密码（请再次输入新密码）。当然你说忘记原始密码，就有个 忘记密码 的功能来修改密码界面，常用手机验证码来直接修改密码。

> 用户地址管理

添加地址（显示）：收货人（请输入收货人），手机号（请输入手机号），所在地址，详细地址（请输入详细地址），设为默认功能，可删除添加地址。

> 实现产品列表

- 产品分类，产品列表，产品简介，产品详情，产品评论，信息列表，信息详情
- 通过接口读取所有产品的分类，在实现选择分类后，根据分类id读取产品列表
- 默认读取所有的产品，实现查询和排序
- 根据选择的产品id，通过接口读取产品的简介信息并显示
- 根据选择的产品id，通过接口读取产品的详情信息并显示
- 根据选择的产品id，通过接口读取产品评论列表，用户在购买产品并确认收货后才能发起评论
- 新闻列表，根据接口，读取所有的信息列表
- 新闻详情，根据选择的信息Id，通过接口读取信息详情

> 底部菜单

内容有：首页，分类，购物车，会员。

区分产品购物详情底部有：首页，收藏，购物车，加入购物车，立即购买（有些功能需要根据用户的登录状态来实现不同的代码，登录状态下实现正常，没有登录的提示登录）

> 购物-订单模块流程

实现包括：购物车的实现，在购物车增加或减少商品的数量，单选计费，全选计费，去结算，下单，订单列表，取消订单，去付款，确认收货，产品评论等。

- 购物车模块，有购物车产品列表，增加数量，减少数量，单选计费，全选计费，去结算。
- 下单，有获取下单内容，选择用户地址，下单入框等。
- 取消订单，实现取消订单。
- 去付款，订单付款的模拟实现。（工作上要实现微信付款功能，支付宝付款功能）
- 确认收货的实现。
- 实现产品评论。

> 下单页面

下单页面（显示）：收货地址，下单产品列表信息，配送方式，运费显示，留言（请输入留言内容），总金额（显示金额），下单支付功能按钮等。

> 订单列表

订单列表（显示）: 待付款，待发货，待收货，待评论，全部。订单（单号显示，状态，产品信息，数量，总金额，功能按钮状态-取消订单，去付款，确认收货）

> 产品评论

我要去评价，确认收货后，产品评论页面（显示），商品评价（星号显示等效果），留言框（商品满足你的期待吗？说说你的使用心得，分享给想要的他们吧），上传图片展示，匿名评价等，点击发表评论功能。



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
- [这是我的第一次JavaScript初级技巧](https://juejin.cn/post/6929701436276097032)
- [localStorage和sessionStorage本地存储](https://juejin.cn/post/6923331849708109838)
- [HTML5中的拖放功能](https://juejin.cn/post/6922602775947771911)
- [挑战前端知识点HTTP/ECMAScript](https://juejin.cn/post/6918735942710722574)
- [必学必会-音频和视频](https://juejin.cn/post/6918011549231775751)
- [前端170面试题+答案学习整理（良心制作）](https://juejin.cn/post/6917635279423537165)
- [前端HTML5面试官和应试者一问一答](https://juejin.cn/post/6917044041863397383)
- [哪吒闹海，席卷图文学习前端Flex布局](https://juejin.cn/post/6916162359765663752)
- [腾讯位置服务开发应用](https://juejin.cn/post/6909784318856396808)
- [【进阶】面试官问我Chrome浏览器的渲染原理（6000字长文）](https://juejin.cn/post/6905946191193325582)
- [面试官一上来就问我Chrome底层原理和HTTP协议（万字长文）](https://juejin.cn/post/6900724539833516040)
- [熬夜总结了 “HTML5画布” 的知识点](https://juejin.cn/post/6855448306517344263)
- [this/call/apply/bind（万字长文）](https://juejin.cn/post/6844904186069401607)
- [HTTP/HTTPS/HTTP2/DNS/TCP/经典题](https://juejin.cn/post/6844904163453714445)
- [执行上下文/作用域链/闭包/一等公民](https://juejin.cn/post/6844904161532706823)
- [Web页面制作基础](https://juejin.cn/post/6844904104712470535)
- [学习总结之HTML5剑指前端（建议收藏，图文并茂）](https://juejin.cn/post/6844904082629459975)

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

### 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

### 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)

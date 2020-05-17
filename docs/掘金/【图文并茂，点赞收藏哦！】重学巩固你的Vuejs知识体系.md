## 前沿

置身世外只为暗中观察！！！Hello大家好，我是魔王哪吒！重学巩固你的Vuejs知识体系，如果有哪些知识点遗漏，还望在评论中说明，让我可以及时更新本篇内容知识体系。欢迎点赞收藏！

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ecae86a1cf9e?w=661&h=484&f=png&s=44317)

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ed661242037f?w=881&h=426&f=png&s=45116)

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ecb6394786f4?w=521&h=358&f=png&s=53608)

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ece109f1a38e?w=455&h=343&f=png&s=26434)

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ece3b415df07?w=483&h=365&f=png&s=29826)

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ece7146551e5?w=482&h=364&f=png&s=29646)

谈谈你对MVC、MVP和MVVM的理解？

https://github.com/webVueBlog/interview-answe/issues/156

## 转角遇到Vuejs

1. 你为啥学习Vuejs
2. 前端开发的复杂化
3. Vuejs的特点
4. 安装Vuejs
5. 体验Vuejs
6. MVVM架构：data和Vue对象的分离，Vue中的MVVM

![](https://user-gold-cdn.xitu.io/2020/4/3/1713eccabd58b2c1?w=893&h=324&f=png&s=64220)

### 目录：

![](https://user-gold-cdn.xitu.io/2020/3/15/170de95fa1faf5fa?w=601&h=594&f=png&s=43572)

#### 起步

1. 插值语法：Mustache，v-once，v-html，v-text，v-pre，v-block。
2. 绑定属性：v-bind的介绍，v-bind的基础，v-bind的语法糖，绑定class，绑定样式。
3. 计算属性
4. 事件监听：v-on介绍，v-on基础，v-on参数，v-on修饰符
5. 条件和循环：条件渲染，v-show指令，v-if和v-show对比
6. 表单绑定：基本使用，v-model原理，其他类型，值绑定，修饰符。

#### 组件化开发：

什么是组件化，Vue组件化开发思想

1. 注册的步骤
2. 全局和局部组件
3. 父组件和子组件
4. 注册组件语法糖
5. 模板的分离写法
6. 组件的其他属性
7. 父级向子级传递
8. 子级向父级传递
9. 父子组件的访问
10. 非父子组件通信

#### 组件化高级语法：

1. 插槽slot：编译作用域，为什么使用slot，slot的基本使用，slot的具名插槽，slot的作用域插槽。
2. 动态组件
3. 异步组件
4. 组件声明周期

#### Vue Cli

1. 什么是webpack
2. webpack和gulp对比
3. 手动webpack的配置
4. Vue Cli是什么
5. Vue Cli依赖环境
6. Vue Cli的安装

#### 网络封装

1. 使用传统的Ajax是基于XMLHttpRequest(XHR)
2. 使用jQuery-Ajax
3. Vue-resource
4. 使用axios

> axios的使用

1. 了解axios：axios请求方式
2. 发送请求，发送get请求，发送并发请求，axios全局配置，常见配置选项。
3. axios实例，为什么创建axios实例，如何创建axios实例，axios的封装。
4. axios的拦截器：请求和响应

vuejs原理相关：响应式原理，源码。

#### vue.js是什么

- vue是一套用于构建用户界面的渐进式框架。
- 从自底向上逐层应用，核心库是只关注图层。
- 易于学习，便于与第三方库或既有项目整合。

### Vue基础语法

对于基础知识需要掌握，简单写写✍

#### vue.js安装

直接CDN引入：

1. 对于制作原型或学习

代码：`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`

2. 对于生产环境

代码：`<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>`

3. NPM

代码：
```
# 最新稳定版
$ npm install vue
```

#### vue响应式初体验

声明式编程：

代码：

```
<!DOCTYPE html>
<!-- 魔王哪吒 -->
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="vue.js" type="text/javascript" charset="UTF-8"></script>
		<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
	</head>
	<body>
		<div id="app">
		  {{ a }}
		</div>
		
		<script type="text/javascript">
			// 我们的数据对象
			var data = { a: 1 };
			
			// 该对象被加入到一个 Vue 实例中
			var vm = new Vue({
			  el: "#app",
			  data: data
			});
			
			// data.a = "dada"
			vm.a = "qianduan";
			data.a == vm.a;
		</script>
	</body>
</html>
```

![](https://user-gold-cdn.xitu.io/2020/3/16/170df0e64d566e34?w=468&h=231&f=png&s=20779)

![](https://user-gold-cdn.xitu.io/2020/3/16/170df25955976ff8?w=388&h=162&f=png&s=37855)

#### 小案例-计算器

1. 新的属性：`methods`，该属性是用于`Vue`对象中定义的方法。
2. 新的指令：`@click`，该指令是用于监听某个元素的点击事件，并且需要指定当发生点击时，执行的方法。

代码：

```
<div id="app">
    <h1>当前计数{{counter}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</div>

<script src="../js/vue.js"></script>

<script>
    let app = new Vue({
        el: '#app',
        data: {
            counter: 0
        },
        methods: {
            increment(){
                this.counter++
            },
            decrement(){
                this.counter--
            },
        }
    })
</script>
```

#### Vue中的MVVM

MVVM的思想

1. view是我们的DOM
2. Model是我们抽离出来的obj
3. ViewModel是我们创建的Vue对象实例

它们之间是如何工作的呢？

1. ViewModel通过Data Binding让obj中的数据实时在DOM中显示
2. ViewModel通过DOM Listener来监听DOM事件，并且通过methods中的操作，来改变obj中的数据

![](https://user-gold-cdn.xitu.io/2020/3/16/170e3e829f437ecd?w=583&h=280&f=png&s=55664)

- `el`:类型：`string | HTMLElement`
- 作用：决定之后Vue实例会管理哪一个`DOM`
- `data`:类型：`Object | Function`
- 作用：Vue实例对应的数据对象 
- `methods`:类型：`{[key:string]:Function}`
- 作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用。

#### 什么是Vue的生命周期

生命周期：☞ 事物从诞生到消亡的整个过程

- `release`稳定版本
- `debug`版本

1. Mustache语法也就是双大括号
2. 插值操作
3. 绑定属性
4. 计算属性
5. 事件判断
6. 循环遍历
7. 阶段案例
8. v-model

`v-once`指令的使用

```
<div id="app">
 <h1>{{message}}</h1>
 <h2 v-once>{{message}}</h2>
</div>
```

`v-once`：

1. 该指令后面不需要跟任何表达式
2. 该指令表示元素和组件只渲染一次，不会随着数据的改变而改变

`v-html`：

当我们从服务器请求到的数据本身就是一个HTML代码时

1. 如果直接通过`{{}}`来输出，会将`HTML`格式进行解析，并且显示对应的内容。
2. 可以使用`v-html`指令
3. 该指令后跟上一个`string`类型
4. 会将`string`的`html`解析处理并且进行渲染

```
<h1 v-html="url"></h1>
```

`v-text`的作用和`Mustache`比较相似，独使用于将数据显示在界面中，一般情况下，接受一个`string`类型。

```
<div id="app">
 <h2 v-text="message"></h2>
 <h2>{{message}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
 let vm = new Vue({
    el: '#app',
    data: {
        message: '你好'
    }
 })
</script>
```

`v-pre`用于跳过这个元素和它子元素的编译过程，用于显示原本的`Mustache`语法。

```
<div id="app">
 <p v-pre>{{message}}</p>
</div>
<script src="../js/vue.js"></script>
<script>
 let app = new Vue({
  el: '#app',
  data: {
      message: 'hello'
  }
 })
</script>
```

`v-cloak`斗篷的意思。

```
<div id="app">
 <h2 v-cloak>hello{{name}}</h2>
</div>
<script>
 setTimeout(()=>{
     let app = new Vue({
      el: '#app',
      data: {
          name: 'web'
      }
     })
 },10000)
</script>

<style>
 [v-cloak] {
     display: none;
 }
</style>
```

#### v-bind的介绍

`v-bind`用于绑定一个或多个属性值，或者向另一个组件传递`props`值。

```
<div id="app">
 <a v-bind:href="link">vuejs</a>
 <img v-bind:src="url" alt="">
</div>

<script>
 let app = new Vue({
  el: '#app',
  data: {
      
  }
 })
```

`v-bind`语法糖

`v-bind`有一个对应的语法糖，就是简写方式

```
<div id = "app">
    <a :href="link">vuejs</a>
    <img :src="longURL" alt="">
</div>
```

`v-bind`动态绑定class

```
<style>
 .active{
     color: red;
 }
</style>

<div id="app">
 <h1 class="active">{{message}}</h2>
</div>

<script>
 const app = new Vue({
  el: '#app',
  data: {
      message: 'hello'
  }
 })
</script>
```

绑定`class`有两种方式：

1. 对象语法
2. 数组语法

对象语法：

```
用法一：直接通过{}绑定一个类
<h2 :class="{'active': isActive}">hello</h2>

用法二，传入多个值
<h2 :class="{'active': isActive, 'line': isLine}">hello</h2>

用法三：
<h2 class="title" :class="{'active': isActive}"></h2>

用法四：
可以放在一个methods或者computed中
<h2 class="title" :class="classes">hello</h2>
```

`v-bind`动态绑定class，数组语法

```
<div id="app">
 <h2 class="title" :class="[active, line]">{{mesg}}</h2>
 <h2 class="title" :class="getClasses()">{{mesg}}</h2>
</div>

<script>
 const app = new Vue({
     el: '#app',
     data: {
         message: 'hello',
         active: 'aaa',
         line: 'bbb',
     },
     methods: {
         getClasses: function() {
             return [this.active, this.line]
         }
     }
 })
</script>
```

`v-bind`动态绑定style

对象语法和数组语法两种绑定。

绑定方法：对象语法：

```
:style="{ color: currentColor, fontSize: fontSize + 'px' }"
```

`style`后面跟的是一个对象类型，对象的`key`是`css`属性名称，对象的`value`是具体赋的值，值可以来自于`data`中的属性。

绑定方法：数组语法：

```
<div v-bind:style="[baseStyles, overStyles]"></div>
```

`style`后面跟的是一个数组的类型，多个值，分割即可。

#### 计算属性的基本属性

计算属性，写在实例的`computed`选项中：

```
<div id="app">
 <h2>{{firstName}}{{lastName}}</h2>
</div>

<script>
 const vm = new Vue({
  el: '#app',
  data: {
      firstName: 'web',
      lastName: 'it',
  }
 })
</script>
```

```
<div id="app">
 <h2>{{fullName}}</h2>
</div>

<script>
 const vm = new Vue({
  el: '#app',
  data: {
      firstName: 'jeskson',
      lastName: 'it',
  },
  computed: {
      fullName() {
          return this.firstName + ' ' + this.lastName
      }
  }
 })
</script>
```

计算属性的缓存：

为什么使用计算属性这个东西？

原因：计算属性会进行缓存，如果多次使用时，计算属性只会调用一次。

#### setter和getter

每个计算属性都包含一个getter和一个setter

```
<div id="app">
 <div>{{fullName}}</div>
 <div>{{firstName}}</div>
 <div>{{lastName}}</div>
</div>

<script>
 let vm = new Vue({
  el: '#app',
  data: {
      firstName: 'web',
      lastName: 'it',
  },
  computed: {
      fullName: {
          get() {
              rturn this.firstName+" "+this.lastName
          },
          set(newValue){
              const names = newValue.split(' ')
              this.firstName = names[0]
              this.lastName = names[1]
          }
      }
  }
 })
</script>
```

```
computed: {
    fullName: function() {
        return this.firstName+" "+this.lastName
    }
    
    // 计算属性一般是没有set方法，只读属性。
    fullName: {
        get: function() {
            return this.firstName + " " + this.lastName
        }
    }
}
```

#### const的使用

const的使用，在JavaScript中使用const修饰的标识符为常量，不可以再次赋值。

在es6开发中，优先使用const，只有需要改变一个标识符的时候才使用let。

在使用cost定义标识符，必须进行赋值。

常量的含义是指向的对象不能修改，但是可以改变对象内部的属性。

什么时候使用const呢？

当我们修饰的标识符不会被再次赋值时，就可以使用const来保证数据的安全性。

const的使用：

```
const a=20;
a = 10; // 错误：不可以修改

const name; // 错误，const修饰的标识符必须赋值
```

let和var

块级作用域：

JS中使用var来声明一个变量，变量的作用域主要是和函数的定义有关。

对于其他块定义来说是没有作用域的，比如if/for等，开发中往往会引发一些问题。

```
// 监听按钮的点击
var btns = document.getElementsByTagName('button');
for(var i=0; i<btns.length; i++) {
    (function(i){
        btns[i].onclick = function(){
            alert('点击了'+i+"个")
        }
    })(i)
}
```

```
let btns = document.getElementsByTagName('button');
for(let i=0;i<btns.length;i++){
    btns[i].onclick = function(){
        alert('点击了'+i+'个')
    }
}
```

#### 块级作用域

变量作用域：变量在什么范围内是可用的。

```
var func;
if(true) {
    var name = 'web';
    func = function() {
        console.log(name); // web
    }
    
    func(); // web
}

// name = 'it'
func(); // web -> it
console.log(name); // web -> it
```

没有块级作用域引起的问题，for的块级

```
var btns = document.getElementsByTagName('button');
for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', function(){
        console.log('第'+i+'个按钮被点击');
    })
}
```

闭包：

```
var btns = document.getElementsByTagName('button');
for(var i=0; i<btns.length;i++){
    (function(i){
        btns[i].addEventListener('click', function(){
          console.log('第'+i+'个按钮');  
        })
    })(i)
}
```

为什么闭包可以解决问题，因为函数是一个作用域。

#### 对象的增强写法

属性初始化简写和方法的简写：

```
// 属性的简写
// es6前
let name = 'web'
let age = 12
let obj1 = {
    name: name,
    age: age,
}
console.log(obj1);
// es6后
let obj2 = {
    name, age
}
console.log(obj2)
```

```
// 方法的简写
// es6之前
let obj1 = {
    test: function() {
        console.log('obj1')
    }
}
obj1.test();

// es6后
let obj2 = {
    test() {
        console.log('obj2')
    }
}
obj2.test();
```

#### v-on基础

`v-on:click="counter++"`

```
<div id="app">
 <h2>点击次数:{{counter}}</h2>
 <button v-on:click="counter++">按钮点击</button>
 <button v-on:click="btnClick">按钮点击2</button>
</div>

let app = new Vue({
 el: '#app',
 data: {
     counter: 0
 },
 methods: {
     btnClick(){
         this.counter++
     }
 }
})
```

v-on修饰符的使用

```
<div id="app">
 <div @click="divClick">
 web
 <button @click.stop="btnClick">按钮</button>
</div>
```

Vue提供了一些修饰符：

```
.stop 调用event.stopPropagation()

.prevent 调用event.preventDefault()

.native 监听组件根元素的原生事件

.once 只触发一次回调
```

```
// 停止冒泡
<button @click.stop="doThis"></button>

// 阻止默认行为
<button @click.prevent="doThis"></button>

// 阻止默认行为，没有表达式
<form @submit.prevent></form>

// 串联修饰符
<button @click.stop.prevent = "doThis"></button>

// 键修饰符，键别名
<input @keyup.enter="onEnter">

// 键修饰符，键代码
<input @keyup.13="onEnter">

// 点击回调智慧触发一次
<button @click.once="doThis"></button>
```

#### v-if,v-else-if,v-else

简单使用：

```
<div id="app">
 <p v-if="score>=90">优秀</p>
 <p v-else-if="score>=80">良好</p>
 <p v-else-if="score>=60">及格</p>
 <p v-else="score<60">不及格</p>
</div>
```

登录切换：

```
<div id="app">
 <span v-if="type==='username'">
  <label>用户账号：</label>
  <input placeholder="用户账户">
 </span>
 <span v-else>
  <label>邮箱地址：</label>
  <input placeholder="邮箱地址">
 </span>
 <button @click="handleToggle">切换类型</button>
</div>

<script>
 let app = new Vue({
  el: '#app',
  data: {
      type: 'username'
  },
  methods: {
      handleToggle(){
          this.type = this.type === 'email' ? 'username' : 'email'
      }
  }
 })
</script>
```

```
<div id="app">
 <span v-if="isUser">
  <label for="username">用户账户</label>
  <input type="text" id="username" placeholder="用户账户">
 </span>
 
 <span v-else>
  <label for="email">用户邮箱</label>
  <input type="text" id="email" placeholder="用户邮箱">
 </span>
 <button @click="isUser=!isUser">切换类型</button>
</div>

<script>
const app = new Vue({
 el: '#app',
 data: {
     isUser: true
 }
})
</script>
```

#### v-for遍历对象

```
<div id="app">
 <ul>
  <li v-for="(value, key, index) in info">
   {{value}}-{{key}}-{{index}}
  </li>
 </ul>
</div>

<script>
 let app = new Vue({
  el: '#app',
  data: {
      info: {
          name: 'web',
          age: 12,
      }
  }
 })
</script>
```

#### 组件的Key属性

使用v-for时，给对应的元素或组件添加上一个`:key`属性。

key的作用主要是为了高效的更新虚拟dom。

> 数组中哪些方法是响应式的

```
push()
pop() 删除数组中的最后一个元素
shift() 删除数组中的第一个元素
unshift() 在数组最前面添加元素

splice()
sort()
reverse()
```

#### 购物车

```
<div id="app">
<table>
<thead>
<tr>
<th></th>
<th>书籍名称</th>
<th>出版日期</th>
<th>价格</th>
<th>购买数量</th>
<th>操作</th>
</tr>
</thead>
<tbody>
<tr v-for="item in books">
<td v-for="value in item">{{value}}</td>
</tr>
</tbody>
</table>
</div>
```

#### 表单绑定v-model

vue中使用v-model指令来实现表单元素和数据的双向绑定。

```
<div id="app">
 <input type="text" v-model="message">
 <h2>{{message}}</h2>
</div>
```

reduce作用对数组中所有的内容进行汇总。

![](https://user-gold-cdn.xitu.io/2020/3/24/17108583ea8b79b7?w=445&h=194&f=png&s=75971)

JavaScript reduce() 方法

```
var numbers = [65, 44, 12, 4];
 
function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}
```

定义和用法

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

reduce() 可以作为一个高阶函数，用于函数的 compose。

> 注意: `reduce()` 对于空数组是不会执行回调函数的。

语法
```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

#### v-model的使用以及原理

```
<input type="text" :value="message" @input="message = $event.target.value">

<script>
 const app = new Vue({
  el: '#app',
  data: {
      message: '你好啊'
  },
  methods: {
      valueChange(event){
          this.message = event.target.value;
      }
  }
 })
</script>
```

`v-model`是语法糖，本质：

1. `v-bind`绑定一个`value`属性
2. `v-on`指令给当前元素绑定`input`事件

代码：

```
<input type="text" v-model="message">

<input type="text" v-bind:value="message" v-on:input="message = $event.target.value">
```

![](https://user-gold-cdn.xitu.io/2020/3/24/17109d35e08484bd?w=767&h=186&f=png&s=108305)

![](https://user-gold-cdn.xitu.io/2020/3/24/17109d665a7934d9?w=505&h=192&f=png&s=85835)

#### v-model:checkbox

![](https://user-gold-cdn.xitu.io/2020/3/24/17109e00a076300c?w=629&h=120&f=png&s=129690)

复选框分为两种情况，单个勾选框和多个勾选框。

单个勾选框：

`v-model`即为布尔值。`input`的`value`并不影响`v-model`的值。

多个复选框：

当是多个复选框时，对应的`data`中属性是一个数组。

当选中某一个时，就会将`input`的`value`添加到数组中。

```
<div id="app">
 <label for="check">
  <input type="checkbox" v-model="checked" id="check">同意协议
 </label>
 <label><input type="checkbox" v-model="hobbies" value="篮球">篮球</label>
 <label><input type="checkbox" v-model="hobbies" value="台球">台球</label>
</div>
```

#### v-model:select

`select`分单选和多选两种情况

单选：只能选中一个值，多选：可以选择多个值。

![](https://user-gold-cdn.xitu.io/2020/3/24/17109e9a067d877e?w=464&h=171&f=png&s=113787)

![](https://user-gold-cdn.xitu.io/2020/3/24/17109e97c81af402?w=437&h=170&f=png&s=102846)

#### `v-model`结合`select`类型

和`checkbox`一样，`select`分单选和多选两种情况。

单选，只能选择一个值，`v-model`绑定的是一个值。当我们选中`option`中的一个时，会将它对应的`value`赋值到`mySelect`中。

多选，可以选中多个值。`v-model`绑定的是一个数组。当选中多个值时，就会将选中的`option`对应的`value`添加到数组`mySelects`中。

```
// 选择一个值
<select v-model="mySelect">
 <option value="web">web</option>
 <option value="it">it</option>
</select>
<p>您最喜欢的{{mySelect}}</p>

// 选择多个值
<select v-model="mySelects" multiple>
 <option value="web">web</option>
 <option value="it">it</option>
</select>
<p>您最喜欢的{{mySelects}}</p>
```

#### input中的值绑定

```
<label v-for="item in origin">
 <input type="checkbox" :value="item" v-model="hobbies">
 {{item}}
</label>
```

#### 修饰符

`lazy`修饰符：

1. 默认情况下，`v-model`默认是在`input`事件中同步输入框的数据的。
2. 一旦有数据发生改变对应的`data`中的数据就会自动发生改变。
3. `lazy`修饰符可以让数据在失去焦点或者回车时才会更新。

`number`修饰符：

1. 默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理。
2. 但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字处理。
3. `number`修饰符可以让在输入框中输入的内容自动转成数字类型。

`trim`修饰符：

1. 如果输入的内容首尾有很多空格，通常我们希望将其去除
2. `trim`修饰符可以过滤内容左右两边的空格

示例：

```
<div id="app">
 <input type="text" v-model.lazy="message">
 <h2>{{message}}</h2>
</div>
```

#### 什么是组件化

1. 组件化是vue.js中的重要思想
2. 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用
3. 任何的应用都会被抽象成一颗组件树

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ed17d5d8232b?w=1406&h=544&f=png&s=28298)

注册组件的基本步骤：

1. 创建组件构造器
2. 注册组件
3. 使用组件

示例：

```
调用Vue.extend()方法创建组件构造器
调用Vue.component()方法，注册组件
在Vue实例的作用范围内使用组件
```

组件示例：

```
<div id="app">
<my-cpn></my-cpn>
</div>

<script src="../js/vue.js"></script>
<script>
 // 创建组件构造器
 const myComponent = Vue.extend({
    template: `
     <div>
      <h2>组件标题</h2>
      <p>组件段落</p>
     </div>`
 });
 
 // 注册组件
 Vue.component('my-cpn',myComponent);
</script>
```

#### 全局组件和局部组件

1. `Vue.extend()`调用`Vue.extend()`创建一个组件构造器。
2. 通常在创建组件构造器时，传入`template`代表我们自定义组件的模板。
3. 该模板在使用到组件的地方，显示的`html`代码。
4. 这种写法在`Vue2.x`的文档几乎看不到了。
5. `Vue.component()`是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称。
6. 注册组件的标签名，组件构造器。

示例：

```
组件标题

<div id="app">
 <my-cpn><my-cpn>
 <div>
  <my-cpn><my-cpn>
 </div>
</div>
```
示例：

```
<div id="app1">
 <my-cpn></my-cpn>
</div>
<div id="app2">
 <my-cpn></my-cpn>
</div>

<script src="../js/vue.js"></script>
<script>
// 创建组件构造器
const myComponent = Vue.extend({
    template: `
    <div>
     <h2>web</h2>
    </div>
    `
})
// 注册组件
Vue.component('my-cpn',myComponent);
let app1 = new Vue({
 el: '#app1'
})
let app2 = new Vue({
 el: '#app2'
})
```

```
<div id="app1">
 <my-cpn></my-cpn>
</div>
<div id="app2"> // 没有被渲染出来
 <my-cpn></my-cpn>
</div>
<script src="../js/vue.js"></script>
<script>
// 创建组件构造器
const myComponent = Vue.extend({
 template: `
 <div>
  <h2>web</h2>
 </div>
 `
 })
 let app1=new Vue({
  el: '#app1',
  components: {
      'my-cpn': myComponent
  }
 })
 let app2 = new Vue({
  el: '#app2'
 })
</script>
```

#### 父组件和子组件

> 组件树

1. 组件和组件之间存在层级关系
2. 其中一种非常重要的关系就是父子组件的关系

示例：

```
<div id="app">
 <parent-cpn></parent-cpn>
</div>
<script src="../js/vue.js"></script>
<script>
 // 创建一个子组件构造器
 const childComponent = Vue.extend({
  template: `
  <div>我是子组件的内容</div>
  `
 })
 // 创建一个父组件的构造器
 const parentComponent = Vue.extend({
  template: `
  <div>
  我是父组件的内容
  <child-cpn></child-cpn>
  </div>
  `
  components: {
      'child-cpn': childComponent
  }
 })
 let app = new Vue({
  el: '#app',
  components: {
      'parent-cpn': parentComponent
  }
 })
```

> 注册组件的语法糖

示例：全局组件

```
<div id="app">
 <cpn1></cpn1>
</div>
<script>
 // 全局组件注册的语法糖
 // 注册组件
 Vue.component('cpn1', {
  template: `
  <div>
   <h2>web</h2>
  </div>
  `
 })
 const app = new Vue({
  el: '#app',
  data: {
      message: 'web',
  }
 })
</script>
```

```
<div id="app">
 <cpn2></cpn2>
</div>
// 注册局部组件的语法糖
const app = new Vue({
 el: '#app',
 data: {
     message: 'web'
 },
 components: {
     'cpn2': {
         template: `
         <div>
          <h1>web</h1>
         </div>
         `
     }
 }
})
</script>
```

`vue`简化了注册组件的方式，提供了注册的语法糖。

#### 组件模板抽离的写法

`vue`提供了两种定义`html`模块内容：

1. 使用`<script>`标签
2. 使用`<template>`标签

示例：

```
<div id="app">
 <my-cpn></my-cpn>
</div>

<script type="text/x-template" id="myCpn">
 <div>
  <h2>web</h2>
 </div>
</script>

<script src="../js/vue.js"></script>
<script>
 let app = new Vue({
  el: '#app',
  components: {
      'my-cpn': {
          template: '#myCpn'
      }
  }
 })
</script>
```

`template`标签

```
<template id="cpn">
 <div>
  <h2>web</h2>
 </div>
</template>
// 注册一个全局组件
Vue.component('cpn', {
 template: '#cpn'
})
```

> 组件可以访问vue实例数据吗

组件是一个单独的功能模块封装，有属于自己的`html`模板和自己的数据`data`。

组件对象有一个`data`属性，`methods`属性，这个`data`属性必须是一个函数，函数返回一个对象，对象内部保存着数据。

```
<div id="app">
 <my-cpn></my-cpn>
</div>

<template id="myCpn">
 <div>{{message}}</div>
</template>
<script src="..."></script>
<script>
let app = new Vue({
 el: '#app',
 components: {
     'my-cpn': {
         template: 'myCpn',
         data() {
             return{
                 message: 'web'
             }
         }
     }
 }
})
```

#### 父子通信-父传子props

如何进行父子组件间的通信呢？

1. 通过`props`向子组件传递数据
2. 通过事件向父组件发送消息

> `props`基本用法

在组件中，使用`props`来声明从父级接收到的数据

`props`的值：

1. 字符串数组，数组中的字符串就是传递时的名称。
2. 对象，对象可以设置传递时的类型，也可以设置默认值等。

`camelCase` (驼峰命名法) 的 `prop` 名需要使用其等价的 `kebab-case` (短横线分隔命名) 命名：

```
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>
```

重申一次，如果你使用字符串模板，那么这个限制就不存在了。

`prop` 各自的名称和类型：
 
 ```
 props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
 ```

```
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>

<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:likes="42"></blog-post>

<!-- 用一个变量进行动态赋值。-->
<blog-post v-bind:likes="post.likes"></blog-post>
```

> 传入一个对象的所有属性

如果你想要将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 `v-bind (取代 v-bind:prop-name)`：

```
post: {
  id: 1,
  title: 'My Journey with Vue'
}

<blog-post v-bind="post"></blog-post>

<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```

一个简单的`props`传递：

```
<div id="app">
 <child-cpn :message="message"></child-cpn>
</div>

<template id="childCpn">
 <div> 显示信息：{{message}}</div>
</template>

<script>
let app = new Vue({
 el: '#app',
 data: {
     message: 'hello'
 },
 components: {
     'child-cpn': {
         templte: '#childCpn',
         props: ['message']
     }
 }
})
</script>
```

在 `Vue` 中，父子组件的关系

`props`向下传递，事件向上传递。

父组件通过 `props`给子组件下发数据，子组件通过事件给父组件发送消息。

![](https://user-gold-cdn.xitu.io/2020/4/2/171383206d2935a7?w=640&h=523&f=png&s=113154)

`props`支持的数据类型：

```
String

Number

Boolean

Array

Object

Date

Function

Symbol
```

![](https://user-gold-cdn.xitu.io/2020/4/2/1713838bd11d4e44?w=640&h=332&f=png&s=138946)

示例：

```
Vue.component('my-component',{
 props: {
     // 基础的类型检查
     propA: Number,
     // 多个可能的类型
     propB: [String, Number],
     // propC: {
         type: String,
         required: true
     },
     // 带有默认值的数字
     propD: {
         type: Number,
         default: 100
     },
     // 带有默认值的对象
     propE: {
         type: Object,
          default: function(){
              return {message: 'web'}
          }
     },
     // 自定义验证函数
     propF: {
         vfunc: function(value) {
             return value > 1
         }
     }
 }
})
```

> 子传父

代码：

```
this.$emit('item-click',item)
```

`props`用于父组件向子组件传递数据，还有一种比较常见的是子组件传递数据或事件到父组件中。

自定义事件：

1. 在子组件中，通过`$emit()`来触发事件。
2. 在父组件中，通过`v-on`来监听子组件事件。

自定义事件代码：

```
<div id="app">
 <child-cpn @increment="changeTotal" @decrement="changeTotal"></child-cpn>
 <h2>点击次数</h2>
</div>

<template id="childCpn">
 <div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
 </div>
</template>

let app = new Vue({
 el: '#app',
 data: {
     total: 0
 },
 methods: {
     changeTotal(counter) {
         this.total = counter
     }
 },
 components: {
     'child-cpn': {
         template: '#childCpn',
         data(){
             return{
                 counter: 0
             }
         },
         methods: {
             increment(){
                 this.counter++;
                 this.$emit('increment', this.counter)
             },
             decrement(){
                 this.counter--;
                 this.$emit('decrement',this.counter)
             }
         }
     }
 }
})
```

#### 父子组件的访问方式：`$children`

有时候需要父组件直接访问子组件，子组件直接访问父组件，或者是子组件访问父组件。

1. 父组件访问子组件，使用`$children`或者`$refs`
2. 子组件访问父组件，使用`$parent`

对于`$children`的访问：

1. `this.$children`是一个数组类型，它包含所有子组件对象。
2. 通过遍历，取出所有子组件的`message`状态。

示例：

```
<div id="app">
 <parent-cpn></parent-cpn>
</div>

// 父组件template
<template id="parentCpn">
 <div>
  <child-cpn1></child-cpn1>
  <child-cpn2></child-cpn2>
  <button @click="showChildCpn">显示所有子组件信息</button>
 </div>
</template>

// 子组件
<template id="childCpn1">
 <h2>我是子组件1</h2>
</template>
// 子组件
<template id="childCpn2">
 <h2>我是子组件2</h2>
</template>

Vue.component('parent-cpn',{
 template: '#parentCpn',
 methods: {
     showChildCpn(){
         for(let i=0; i<this.$children.length; i++){
             console.log(this.$children[i].message)
         }
     }
 }
})
```

#### 父子组件的访问方式：`$parent`

子组件中直接访问父组件，可以通过`$parent`

1. 虽然可以通过`$parent`来访问父组件，但是尽量不要这样做
2. 子组件应该尽量避免直接访问父组件的数据，因为这样耦合度太高了。

> 父子组件的访问方式`$refs`

`$children`的缺陷：

1. 通过`$children`访问子组件，是一个数组类型，访问其子组件要通过索引值。
2. 子组件过多时，需要拿其中一个时，不能确定它的索引值，还可能发生变化。
3. 获取其中一个特定的组件，可以使用`$refs`

`$refs`的使用：

1. `$refs`和`ref`指令通常一起使用
2. 通过`ref`给某个子组件绑定一个特定的`id`
3. 通过`this.$refs.id`可以访问到该组件

示例：

```
<child-cpn1 ref="child1"></child-cpn1>
<child-cpn2 ref="child2"></child-cpn2>
<button @click="show">通过refs访问子组件</button>

show() {
    console.log(this.$refs.child1.message);
    console.log(this.$refs.child2.message);
}
```

> 看看一个`.vue`文件项目

```
<template>
 <div class="xxx">
  <div class="xxx"
   :class="{active: currentIndex === index}"
   @click="itemClick(index)"
   v-for="(item,index) in titles">
   <span>{{item}}</span>
   </div>
  </div>
</template>

<script>
 export default {
     name: 'xxx',
     props: {
         titles: {
             type: Array,
             default() {
                 return []
             }
         }
     },
     data: function() {
         return {
             currentIndex: 0
         }
     },
 }
</script>

<style scoped>
 .xxx {
     xxx: xxx;
 }
</style>
```

三层部分：

![](https://user-gold-cdn.xitu.io/2020/4/1/1713624207e5332d?w=193&h=125&f=png&s=23860)

### slot插槽的使用

`vue`中的代码`slot`是什么呢，它叫插槽，`<slot>`元素作为组件模板之中的内容分发插槽，传入内容后`<slot>`元素自身将被替换。

`v-slot`用法：

1. 默认插槽
2. 具名插槽
3. 作用域插槽
4. `slot`以及`slot-scope`的用法：子组件编写，父组件编写

默认插槽

子组件：

```
// 子组件
<template>
<div class="content">
// 默认插槽
<content-box class="text">
<slot>默认值</slot>
<content-box>
</div>
</template>
```

`slot`基本使用

1. 在子组件中，使用`<slot>`可以为子组件开启一个插槽。
2. 该插槽插入什么内容取决于父组件如何使用。

子组件定义一个插槽：

1. `<slot>`中的内容表示，如果没有在该组件中插入任何其他内容，就默认显示改内容。

示例：

```
<div id="app">
 <my-cpn></my-cpn>
 <my-cpn>
  <p>web</p>
 </my-cpn>
</div>

<template id="myCpn">
 <div>
  <slot>我是谁</slot>
 </div>
</template>
<script>
Vue.component('my-cpn',{
 template: '#myCpn'
})

let app = new Vue({
 el: '#app'
})
</script>
```

![](https://user-gold-cdn.xitu.io/2020/4/2/1713b3e4114c341c?w=487&h=151&f=png&s=61439)

使用具名插槽

1. 给`slot`元素添加一个`name`属性
2. `<slot name="web"></slot>`

示例：

```
<div id="app">
 // 没有任何内容
 <my-cpn></my-cpn>
 
 // 传入某个内容
 <my-cpn>
  <span slot="left">left</span>
 </my-cpn>
 
 <my-cpn>
  <span slot="left">left</span>
  
  <span slot="center">center</span>
  
  <span slot="right">right</span>
</div>

<template id="myCpn">
 <div>
  <slot name="left">1</slot>
  <slot name="center">2</slot>
  <slot name="right">3</slot>
 </div>
</template>
<script>
 Vue.component('my-cpn', {
  template: '#myCpn'
 })
 let app = new Vue({
  el: '#app'
 })
</script>
```

> 编译作用域

`Vue`实例属性：

父组件模板的所有东西都会在父级作用域内编译，子组件模板的所有东西都会在子级作用域内编译。

父组件替换插槽的标签，但是内容由子组件来提供。

### 模块化开发

什么是模块化，将一组模块以正确的顺序拼接到一个文件中的过程，模块是实现特定功能的一组属性和方法的封装。

利用构造函数封装对象

```
function web() {
    var arr = [];
    this.add = function(val) {
        arr.push(var)
    }
    this.toString = function() {
        return arr.join('')
    }
}
var a = new web();
a.add(1); // [1]
a.toString(); // "1"
a.arr // undefined
```

示例：

```
var ModuleA = (function(){
    // 定义一个对象
    var obj = {}
    // 在对象内部添加变量和方法
    obj.flag = true
    obj.myFunc = function(info) {
        console.log(info)
    };
    // 将对象返回
    return obj
}
```

```
if(ModuleA.flag) {
    console.log('web')
}

ModuleA.myFunc('webweb')
```

常见的模块化规范：

`CommonJS`,`AMD`,`CMD`,`ES6`中的`Modules`

什么是`AMD`，异步模块定义，它是在浏览器端实现模块化开发的规范，但是该规范不是原生`js`支持的，使用`AMD`规范进行开发的时候需要引入第三方的库函数，就是`RequireJS`。

`RequireJS`解决了多个`js`文件可能有依赖的关系，被依赖的文件需要早于依赖它的文件加载到浏览器；`js`加载的时候浏览器会停止页面渲染，加载文件越多，页面就会失去响应时间越长。

`CMD`是什么，它是通用模块定义，解决的问题和`AMD`一样，不过在模块定义方式和模块加载时机上不同，`CMD`需要额外的引入第三方的库文件`SeaJS`。

> JavaScript模块化编程

1. 可以解决项目中的全局变量污染问题
2. 开发效率高，利于多人协同开发
3. 职责单一，方便代码复用和维护
4. 解决了文件的依赖问题

> 那么什么是模块化呢

将一个项目按照功能划分，理论上一个功能一个模块，互不影响，在需要的时候载入，尽量遵循高内聚低耦合。

![](https://user-gold-cdn.xitu.io/2020/4/3/1713ec7b245d7748?w=622&h=318&f=png&s=26882)

了解`CommonJS`

CommonJS 是一种思想,本质上是可复用的JavaScript,它导出特定的对象，提供其它程序使用。

使用`module.exports`和`exports.obj`来导出对象，并在需要它的程序中使用`require('module')`加载。

模块化的核心就是：导入和导出

导出：`CommonJS`

```
module.exports = {
    flag: true,
    test(a,b) {
        return a+b
    },
    demo(a,b) {
        return a*b
    }
}
```

导入：`CommonJS`

```
// CommonJS模块
let {test, demo, flag} = require('moduleA');

// =>
let ma = require('moduleA');
let test = ma.test;
let demo = ma.demo;
let flag = ma.flag;
```

因为网站开发越来越复杂，js文件又很多，就会出现一些问题：

1. 变量名冲突
2. 文件依赖复杂度高
3. 页面加载过多，不利于维护

`CommonJS`，定义模块，一个单独的`js`文件就是一个模块，每个模块都有自己单独的作用域，在该模块内部定义的变量，无法被其他模块读取，除了定义为`global`对象的属性。



模块的导出：`exports`和`module.exports`

模块的导入：`require`

1. 在`node`中，每个模块内部都有要给自己的`module`对象
2. 在`module`对象中，有一个成员`exports`也是一个对象
3. 通过`exports`对象导出当前方法或变量，也可通过`module.exports`导出
4. `node`简化了操作，`exports`等于`module.exports`，相当于`var exports = module.exports`

> es模块的导入和导出

```
export function add(num1, num2) {
    return num1 + num2
}
```

```
export function accString(param) {
	if (param == 0) {
		return '关'
	}else if(param == 1) {
		return '开'
	}
}

import {
		accString
	} from '../../utils'
```

```
const name = 'web'

export default name
```

`export default`

一个模块中包含某个功能，如果不希望给功能命名，可以让导入者自己来定：

```
export default function(){
    console.log('web')
}
```

使用：

```
import myFunc from '../web.js'

myFunc()
```

> `export default`在同一个模块中，不允许同时存在多个

`import`使用

`export`指令导出了模块对外提供的接口

`import`指令用于导入模块中的内容

```
import {name, age} from './web.js'
```

通过`*`可以导入模块中所有所有的`export`变量

```
import * as web from './web.js'

console.log(web.name);
```

### 生命周期

首先：`new Vue()`,`new`一个`Vue`的实例，`Observe data`数据查看，`init Events`绑定事件，`created`执行`created`方法，判断是否有`el`属性，如果没有，`vm.$mount(el)`表示处于未挂载状态，可以手动调用这个方法来挂载。判断是否有`template`属性。

如果有`el`属性，判断是否有`template`属性。

![](https://user-gold-cdn.xitu.io/2020/4/3/1713fe9e3acc4a5f?w=501&h=733&f=png&s=68838)

实例化期和加载期
创建期间的生命周期函数：`beforeCreate` 和 `created`，`beforeMount` 和 `mounted`。

![](https://user-gold-cdn.xitu.io/2020/4/3/1713f2e9d5c3ca46?w=557&h=333&f=png&s=46139)

`beforeCreate`在实例初始化后，数据观测`data observer`和`event/watcher`事件配置之前被调用。

更新期

运行期间的生命周期函数：`beforeUpdate` 和 `updated`

![](https://user-gold-cdn.xitu.io/2020/4/3/1713feb431101847?w=441&h=340&f=png&s=36738)

`created`实例已经创建完成后被调用。

实例已完成以下的配置：数据观测`data observer`，属性和方法的运算，`watch/event`事件回调。

挂载阶段还没开始，`$el`属性目前不可见。

`beforeMount`在挂载开始之前被调用，相关的`render`函数首次被调用。`mounted`，`vm.$el`已经挂载在文档内，对已有`dom`节点的操作可以在期间进行。`beforeUpdate`数据更新时调用，发生在虚拟`dmo`重新渲染和打补丁之前。`updated`当这个钩子被调用时，组件`dom`已经更新，所以你现在可以执行依赖于`dom`的操作。`activated`，`deactivated`，`beforeDestroy`，`destroyed`。实例销毁之前调用，`vue`实例销毁后调用。

卸载期

销毁期间的生命周期函数：`beforeDestroy` 和 `destroyed`

![](https://user-gold-cdn.xitu.io/2020/4/3/1713febdb0584b09?w=481&h=375&f=png&s=29319)

> 实例生命周期钩子

每个vue实例在被创建时都要经过一系列的初始化过程，需要设置数据监听，编译模板，将实例挂载到`dom`并在数据变化时更新`dom`等，同时在这个过程中也会运行一些叫做生命周期钩子的函数。

用于给用户在不同阶段添加自己代码的机会。

`beforeCreate`，此时的`data`是不可见的

```
data() {
    return {
        a: 1
    }
},
beforeCreate() {
    // red
    console.log(this.a); // 看不见
}
```

`created`实例已经创建完成后被调用，这个时候你看不见你页面的内容，实例已完成表示：数据观测`data observer`，属性和方法的运算，`watch/event`事件回调。

这个时候挂载阶段还没开始，`$el`属性目前不可见。

```
export default {
    data() {
        return {
            a: 1
        }
    },
    beforeCreate() {
        console.log(this.a);
    },
    created() {
        // red
        console.log(this.a);
        console.log(this.$el);
        // 此时data数据里面的a可见，this.$el不可见
    }
}
```

`beforeMount`在挂载开始之前被调用，相关的`render`函数首次被调用。

```
export default{
    data() {
        return {
            a: 1
        }
    },
    beforeCreate() {
        console.log(this.a); // 不可见
    },
    created() {
        console.log(this.a);
        console.log(this.$el); // 不可见
    },
    beforeMount() {
        console.log(this.$el); // 不可见
    }
}
```

`mounted`：

```
export default {
    data() {
        return {
            a: 1
        }
    },
    mounted() {
        console.log(this.$el); // 此时$el 可见
    }
}
```

`beforeUpdate`钩子，`dom`更新之前调用：

```
beforeUpdate() {
    console.log(this.a);
}

// document.getElementById("web").innerHTML
```

`updated`钩子，`dom`更新之后调用：

```
updated() {
    console.log(this.a);
}

// document.getElementById("web").innerHTML
```

`activated`和`deactivated`（组件）

```
activated() {
    console.log("组件使用了");
},

deactivated() {
    console.log("组件停用了");
Data to Drag},
```

`keep-alive`是`vue`的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染`dom`。

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不会销毁它们。和`<transition>`相似，`<keep-alive>`是一个抽象组件：它自身不会渲染一个`DOM`元素，也不会出现在父组件链中。

当组件在`<keep-alive>`内被切换，它的`activated`和`deactivated`这两个生命周期钩子函数将会被对应指定。

它的使用是因为我们不希望组件被重新渲染而影响使用体验，或者是性能，避免多次渲染降低性能。缓存下来，维持当前得状态。

场景：

1. 商品列表页点击商品跳转到商品详情，返回后仍显示原有信息
2. 订单列表跳转到订单详情，返回，等等场景。

`keep-alive`生命周期：

初次进入时：`created > mounted > activated；退出后触发 deactivated`；再次进入：会触发`activated`；事件挂载的方法等，只执行一次的放在`mounted`中；组件每次进去执行的方法放在 `activated` 中。

`app.vue`父组件：

```
<template>
 <div>
  <button @click="myBtn"> myBtn </button>
  <keep-alive>
   <range v-if="isShow"></range>
  </keep-alive>
 </div>
</template>

<script>
 import range from './components/range.vue'
 export default {
     data() {
         return {
             a: 1,
             isShow: true
         }
     },
     methods: {
         myBtn() {
             this.isShow = !this.isShow
         }
     },
     components: {
         range
     }
 }
</script>
```

`beforeDestroy`和`destroyed`

`beeforeDestroy`类型为`function`，详细：实例销毁之前调用，在这一步，实例仍然完全可用。

该钩子在服务器端渲染期间不被调用。

`destroyed`类型为`function`，详细：`vue`实例销毁后调用，调用后，`vue`实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

该钩子在服务器端渲染期间不被调用。

`beforeRouteEnter`和`beforeRouteLeave`

```
beforeRouteEnter() {
    console.log('beforeRouteEnter')
},

beforeRouteLeave() {
    console.log('beforeRouteLeave')
}
```

vue路由使用的，路由进去和路由离开的时候添加的。

![](https://user-gold-cdn.xitu.io/2020/4/3/1713fdd853d430e2?w=1326&h=313&f=png&s=52190)

```
created() {
    console.log('开始执行created钩子函数')
    // 获取data数据
    console.log('获取created属性'+this.value)
    // 获取页面元素
    console.log(this.$refs['example'])
    this.$nextTick(()=>{
        console.log('执行created创建的this.$nextTick()函数')
    })
},

mounted() {
    console.log('开始执行mounted钩子函数')
    // 获取挂载数据
    console.log('获取挂载数据--'+this.$refs['example'].innerText)
    this.$nextTick(()=>{
        console.log('执行mounted创建的this.$nextTick()函数')
    })
},

methods: {
    // 更新数据
    updateDate(){
        
    },
    get(){
        this.value='更新data内的value属性值'
        // 获取页面元素数据
        console.log(this.$refs['example').innerText)
        this.$nextTick(()=>{
          console.log(this.$refs['example'].innerText)  
        })
    }
}
```

`var vm=new Vue({})`表示开始创建一个`Vue`的实例对象，`init events&liftcycle`表示刚初始化了一个`vue`空的实例对象，这个时候，对象身上，只有默认的一些生命周期函数和默认事件，其他东西都没有创建，`beforeCreate`生命周期函数执行的时候，`data`和`methods`中的数据都没有初始化。在`created`中，`data`和`methods`都已经被初始化好了，如果要调用`methods`中的方法，或者操作`data`中的数据，只能在`created`中操作。然后`vue`开始编辑模板，把`vue`代码中的那些指令进行执行，最终在内存中生成一个编译好的最终模板字符串，渲染为内存中的`dom`，此时只是在内存中，渲染好了模板，并没有把模板挂载到真正的页面中去。`beforeMount`函数执行的时候，模板已经在内存中编译好了，但是尚未挂载到页面中去。`create vm.$el and replace 'el' with it`这一步是将内存中编译好的模板，真实的替换到浏览器的页面中去。`mounted`，只要执行完了`mounted`，就表示整个`vue`实例已经初始化完了。此时，组件从创建阶段进入到了运行阶段。

`beforeUpdate`执行的时候，页面中显示的数据还旧的，而`data`数据是最新的，页面尚未和最新的数据保持同步。`updated`事件执行的时候，页面和`data`数据已经保持同步了，都是新的。`virtual dom re-render and patch`执行，先根据`data`中最新的数据，在内存中，重新渲染出一份最新的内存`dom`树，当最新的内存`dom`树被更新之后，会把最新的内存`dom`树，重新渲染到真实的页面中，完成数据从`data`到`view`的跟新。

`beforeDestroy`钩子函数执行时，`vue`实例就从运行阶段，进入到了销毁阶段。此时的实例还是可用的阶段，没有真正执行销毁过程。`destroyed`函数执行时，组件已经被完全销毁了，都不可用了。

### vue面试题

#### 谈一谈你对`mvvm`的理解

双向绑定的过程

视图`view`，路由-控制器`Controller`，数据`Model`

`view`->`dom`，`viewModel`，`Model`数据

传统的`mvc`指用户操作会请求服务器端路由，路由会调用对应的控制器来处理，控制器会获取数据，将结果返回给前端，让页面重新渲染。

`mvvm`，对于传统的前端会将数据手动渲染到页面上，`mvvm`模式不需要用户收到操作`dom`元素，将数据绑定到`viewModel`层上，会自动将数据渲染到页面中，视图变化会通知`viewModel`层更新数据。

#### Vue响应式原理

1. `vue`内部是如何监听`message`数据的改变
2. 当数据发生改变，`vue`是如何知道要通知哪些人，界面发生刷新

核心：

- `Object.defineProperty`，监听对象属性的改变
- 发布订阅者模式

代码：

```
Object.keys(obj).forEach(key => {
 let value = obj[key]
 
 Object.defineProperty(obj, key, {
    set(newValue) {
        // 监听改变
        value = newValue
    },
    get() {
        return value
    }
 })
})

obj.name = 'web'
```

发布者订阅者

```
class Dep {
    constructor() {
        this.subs = []
    }
}

class Watcher {
    constructor(name) {
        this.name = name;
    }
}
```

![](https://user-gold-cdn.xitu.io/2020/4/7/1715497404f603a1?w=640&h=318&f=png&s=196521)

![](https://user-gold-cdn.xitu.io/2020/4/7/171549780ed2c2cd?w=648&h=317&f=png&s=46757)

对象的`Object.defindeProperty`中的访问器属性中的`get`和`set`方法

![](https://user-gold-cdn.xitu.io/2020/4/7/171549877fbef827?w=1015&h=613&f=png&s=96817)

- 把数据转化为`getter`和`setter`，建立`watcher`并收集依赖。

说明：

`watcher`通过回调函数更新`view`;`observer`观测`data`数据，通过`get`通知`dep`收集`watcher`，`dep`通过`notify()`通知`watcher`数据更新，`watcher`通过`addDep()`收集依赖。

`Observer`:用于监听劫持所有`data`属性，`dep,watcher,view`，`Compile`解析`el`模板中的指令。

依照下图（参考《深入浅出`vue.js`》）

![](https://user-gold-cdn.xitu.io/2020/4/7/17154a3e1a5b211a?w=800&h=397&f=png&s=147740)

首先从初始化`data`数据开始，使用`Observer`监听数据，个体每个数据属性添加`Dep`，并且在`Data`，有两个`getter`，`setter`。在它的`getter`过程添加收集依赖操作，在`setter`过程添加通知依赖的操作。

在解析指令或者给`vue`实例设置watch选项或者调用`$watch`时，生成对应的`watcher`并收集依赖。

`Data`通过`Observer`转换成了`getter/setter`的形式，来对数据追踪变化。

修改对象的值的时候，会触发对应的`setter`，`setter`通知之前依赖收集得到的 `Dep` 中的每一个`Watcher`，告诉它们值改变了，需要重新渲染视图。

![](https://user-gold-cdn.xitu.io/2020/4/7/171549a3bda62e8a?w=375&h=556&f=png&s=107381)

数据双向绑定原理

![](https://user-gold-cdn.xitu.io/2020/4/7/171549b2b08ddf09?w=391&h=411&f=png&s=89211)

#### 什么是响应式的原理

1. 核心：`Object.defineProperty`
2. 默认`vue`在初始化数据时，会给`data`中的属性使用`Object.defineProperty`重新定义所有属性，当页面取到对应属性时，会进行依赖收集，如果属性发生变化会通知相关依赖进行更新操作。

`initData`初始化用户传入的`data`数据，`new Observer`将数据进行观测，`this.walk(value)`进行对象的处理，`defineReactive`循环对象属性定义响应式变化，`Object.defineProperty`，使用`Object.defineProperty`重新定义数据。

使用使用`Object.defineProperty`重新定义数据的每一项。

```
Object.defineProperty(obj,key,{
 enumerable: true,
 configurable: true,
 get: function reactiveGetter(){
     const value=getter?getter.call(obj):val
     if(Dep.target){
         dep.depend()
         if(childOb){
             childOb.dep.depend()
             if(Array.isArray(value)){
                 dependArray(value)
             }
         }
     }
     return value
 },
 set: function reactiveSetter(newVal) {
     const value=getter?getter.call(obj).val
     if(newVal === value || (newVal !== newVal && value !==value)){
         return
     }
     if(process.env.NODE_ENV !== 'production' && customSetter){
         customSetter()
     }
     val = newVal
     childOb = !shallow && observe(newVal)
     dep.notify()
 }
})
```

#### vue中式如何检测数组变化

使用**函数劫持**的方式，重写了数组的方法，`vue`将`data`中的数组进行了**原型链的重写**，指向了自己定义的数组原型方法，这样当调用数组`api`时，可以通知依赖跟新，如果数组中包含着引用类型，会对数组中的引用类型**再次进行监控**。

`initData`初始化用户传入的`data`数据，`new Observer`将数据进行观测，`protoAugment(value,arrayMethods)`将数据的原型方法指向重写的原型。

- 对数组的原型方法进行重写
- `observerArray`深度观察数组中的每一项

代码：

```
if(Array.isArray(value)){
    // 判断数组
    if(hasProto){
        protoAugment(value, arrayMethods)// 改写数组原型方法
    }else{
        copyAugment(value,arrayMethods,arrayKeys)
    }
    this.observeArray(value)
    //深度观察数组中的每一项
}else{
    this.walk(value) 
    // 重新定义对象类型数据
}

function protoAugment(target, src: Object){
    target.__proto__ = src
}

export const arrayMethods = Object.create(arrayProto)
const methodsToPatch=[
 'push',
 'pop',
 'shift',
 'unshift',
 'splice',
 'sort',
 'reverse'
]

methodsToPatch.forEach(function (method){
    const original = arrayProto[method]
    def(arrayMethods, method, function mutator(...args){
        const result = original.apply(this.args)
        const ob = this.__ob__
        let inserted
        switch(method) {
            case 'push':
            case 'unshift':
            inserted = args
            break
            case 'splice':
            inserted = args.slice(2)
            break
        }
        if(inserted) ob.observerArray(inserted)
        // 对插入的数据再次进行观测
        ob.dep.notify()
        // 通知视图更新
        return result
    }
}

observeArray(items: Array<any>) {
    for(let i=0, l = items.length; i<1; i++) {
        observe(item[i])
        // 观测数组中的每一项
    }
}
```

#### 为什么vue采用异步渲染

如果不采用异步更新，每次更新数据都会对当前组件进行重新渲染，为了性能考虑。

`dep.notify()`通知`watcher`进行更新操作，`subs[i].update()`依次调用`watcher`的`update`，`queueWatcher`将`watcher`去重放到队列中，`nextTick(flushSchedulerQueue)`异步清空`watcher`队列。

#### nextTick实现原理

微任务高于宏任务先执行

`nextTick`方法主要使用了宏任务和微任务，定义了一个异步方法，多次调用了`nextTick`会将方法存入到队列中，通过这个异步方法清空当前队列。

`nextTick`方法是异步方法。

原理：`nextTick(cb)`调用`nextTick`传入`cb`，`callbacks.push(cb)`将回调存入数组中，`timerFunc()`调用`timerFunc`，返回`promise`支持`promise`的写法。

### webpack

什么是webpack，webpack是一个现代的JavaScript应用的静态**模块打包**工具。

![](https://user-gold-cdn.xitu.io/2020/4/3/1714042da7c40f4e?w=526&h=206&f=png&s=63573)

webpack是前端模块化打包工具

安装webpack需要安装node.js,node.js自带有软件包管理工具npm

![](https://user-gold-cdn.xitu.io/2020/4/3/1714050718051be6?w=223&h=102&f=png&s=2097)

全局安装
```
npm install webpack@3.6.0 -g
```
局部安装
```
npm install webpack@3.6.0 --save-dev
```

`webpack.config.js`固定名文件：

```
const path = require("path")
module.exports = {
    entry: './src/main.js',
    output: {
        patch: './dist',
        filename: ''
    },
}
```

`package.json`

```
{
    "name": 'meetwebpack',
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo ..."
    },
    "author": "",
    "license": "ISC"
}
```

什么是`loader`

`loader`是`webpack`中一个非常核心的概念

`loader`使用过程：

1. 通过`npm`安装需要使用的`loader`
2. 在`webpack.config.js`中的`moudules`关键字下进行配置

`package.json`中定义启动

```
{
    "name": "meetwebpack",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "build": "webpack"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "webpack": "^3.6.0"
    }
}
```

#### `webpack`的介绍

`webpack`可以看做是模块打包机，它可以分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言，将其打包为合适的格式以供浏览器使用。

![](https://user-gold-cdn.xitu.io/2020/4/4/171435b545ce39a4?w=753&h=358&f=png&s=168032)

可以实现代码的转换，文件优化，代码分割，模块合并，自动刷新，代码校验，自动发布。

![](https://user-gold-cdn.xitu.io/2020/4/4/171435f46f5aa8f1?w=632&h=708&f=png&s=56532)

安装本地的webpack

```
webpack webpack-cli -D
```

初始化：

```
yarn init -y
```

```
yarn add webpack webpack-cli -D
```

webpack可以进行0配置，它是一个打包工具，可以输出后的结果（Js模块），打包（支持js的模块化）

运行webpack命令打包

```
npx webpack
```

`webpack.config.js`，`webpack`是`node`写出来的`node`的写法：

![](https://user-gold-cdn.xitu.io/2020/4/4/1714372992809177?w=210&h=72&f=png&s=8589)

```
let path = require('path')
console.log(path.resolve('dist');

module.exports = {
    mode: 'development',
    // 模式，默认两种，production，development
    entry: '' // 入口
    output: {
        filename: 'bundle.js',
        // 打包后的文件名
        path: path.resolve(__dirname, 'build'),
        // 把相对路径改写为绝对路径
    }
}
```

自定义，`webpack.config.my.js`

使用命令：

```
npx webpack --config webpack.config.my.js
```

`package.json`:

```
{
    "name": 'webpack-dev-1',
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "scripts": {
      "build": "webpack --config webpack.config.my.js"  
    },
    "devDependencies": {
        "webpack": "^4.28.3",
        "webpack-cli": "^3.2.0"
    }
}
```

使用命令：

```
npm run build

// npm run build -- --config webpack.config.my.js
```

> 开发服务器的配置

代码：

```
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(path.resolve('dist');

module.exports = {
    devServer: {
      // 开发服务器的配置  
      port: 3000,
      // 看到进度条
      progress: true,
      contentBase: "./build",
      compress: true
    },
    mode: 'development',
    // 模式，默认两种，production，development
    entry: '' // 入口
    output: {
        filename: 'bundle.js',
        // 打包后的文件名
        path: path.resolve(__dirname, 'build'),
        // 把相对路径改写为绝对路径
    },
    plugins: [
        // 数组，所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify:{
                removeAttributeQuotes: true,//删除“”
                collapseWhitespace: true, // 变成一行
               
            },
             hash: true
        })
    ],
    module: {
        // 模块
        rules: [
            // 规则
            {test: /\.css$/, use: [{
                loader: 'style-loader',
                options: {
                    insertAt: 'top'
                }
            },'css-loader'] },
        ]
    }
}
```

```
output: {
    filename: 'bundle.[hash:8].js',// 打包文件名后只显示8位
}
```

```
{
    "name": 'webpack-dev-1',
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "scripts": {
      "build": "webpack --config webpack.config.my.js",
      "dev": "webpack-dev-server"
    },
    "devDependencies": {
        "webpack": "^4.28.3",
        "webpack-cli": "^3.2.0"
    }
}
```

```
yarn add css-loader style-loader -D
```

样式：

1. `style-loader`将模块的导出作为样式添加到`dom`中
2. `css-loader`解析`css`文件后，使用`import`加载，并且返回`css`代码
3. `less-loader`加载和转译`less`文件
4. `sass-loader`加载和转译`sass/scss`文件
5. `postcss-loader`使用`PostCSS`加载和转译`css/sss`文件
6. `stylus-loader`加载和转译`Stylus`文件

`style-loader`安装：

```
npm install style-loader --save-dev
```

用法：

建议将`style-loader`与`css-loader`结合使用

`component.js`

```
import style from './file.css'
```

1. `css-loader`只负责将css文件进行加载
2. `style-loader`负责将样式添加到`dom`中
3. 使用多个`loader`时，是从右到左

代码：

```
// webpack.config.js
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
```

> `css`文件处理：`style-loader`

安装`style-loader`

```
npm install --save-dev style-loader
```

`style-loader`需要放在`css-loader`的前面，`webpack`在读取使用的`loader`的过程中，是按照从右向左的顺序读取的。

`webpack.config.js`的配置如下：

```
const path = require('path')

module.exports = {
    // 入口:可以是字符串/数组/对象，这里我们入口只有一个，所以写一个字符串即可。
    entry: './src/main.js',
    // 出口：通常是一个对象，里面至少包含两个重要属性，path和filename
    output:{
        path: path.resolve(__dirname, 'dist'), // 注意：path通常是一个绝对路径
        filename: 'bundle.js'
    },
    module: {
        rules: {
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        }
    }
}
```

#### `webpack` less文件处理

安装：

```
npm install --save-dev less-loader less
```

示例：

将`css-loader`,`style-loader`,`less-loader`链式调用，可以把所有样式立即应用于`dom`。

```
// webpack.config.js
module.exports = {
    ...
    rules: [{
        test: /\.less$/,
        use: [{
            loader: 'style-loader'
        },{
            loader: 'css-loader'
        },{
            loader: 'less-loader'
        }]
    }]
}
```

> 图片文件处理

`css normal`代码：

```
body {
    background: url("../img/test.jpg")
}
```

`url-loader`

```
npm install --save-dev url-loader
```

用法

`url-loader`功能类似于`file-loader`，但是在文件大小低于指定的限制时，可以返回一个`DataURL`

```
import img from './image.png'
```

`webpack.config.js`

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}
```

`img`，文件要打包到的文件夹

`name`，获取图片原来的名字，放在该位置

`hash:8`，为了防止图片名称冲突，依然使用`hash`，但是我们只保留8位

`ext`，使用图片原来的扩展名

#### es6转es5的babel

如果希望es6转成es5，那么就需要使用`babel`

```
npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
```

配置`webpack.config.js`文件：

```
{
    test: /\.m?js$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['es2015']
        }
    }
}
```

#### 使用vue

如何在我们的`webpack`环境中集成`vue.js`

代码：

```
npm install vue --save
```

1. `runtime-only`代码中，不可以有任何的`template`
2. `runtime-compiler`代码中，可以有`template`因为有`compiler`可以用于编译`template`

![](https://user-gold-cdn.xitu.io/2020/4/4/171457bf7c619eff?w=340&h=108&f=png&s=20423)

`spa`(`simple age web application`)->`vue-router`（前端路由）

![](https://user-gold-cdn.xitu.io/2020/4/4/1714583209c3db55?w=528&h=165&f=png&s=40986)

`.vue`文件封装处理

安装`vue-loader`和`vue-template-compiler`

```
npm install vue-loader vue-template-compiler --save-dev
```

![](https://user-gold-cdn.xitu.io/2020/4/4/17145932c0a5f09c?w=365&h=358&f=png&s=71666)

![](https://user-gold-cdn.xitu.io/2020/4/4/17145934c0302dfc?w=262&h=100&f=png&s=15580)

#### 认识webpack的plugin

1. `plugin`是什么？

- `plugin`是插件的意思，通常用于对某个现有的架构进行扩展。
- `webpack`中的插件，是对`webpack`现有功能的各种扩展。

2. `loader`和`plugin`的区别

- `loader`主要用于转换某些类型的模块，它是一个转换器。
- `plugin`是插件，它是对`webpack`本身的扩展，是一个扩展器。

3. `plugin`的使用过程：

- 通过`npm`安装需要使用的`plugins`
- 在`webpack.config.js`中的`plugins`中配置插件

`webpack.config.js`的文件：

![](https://user-gold-cdn.xitu.io/2020/4/4/17145aa63fb3187e?w=545&h=216&f=png&s=71214)

查看`bundle.js`文件的头部：

![](https://user-gold-cdn.xitu.io/2020/4/4/17145aae0872d293?w=488&h=52&f=png&s=27118)

### Vue Cli详解

什么是`vue cli`，`Command-Line Interface`，命令行界面，俗称脚手架，`vue cli`是一个官方发布的项目脚手架。使用`vue-cli`可以快速搭建`vue`开发环境以及对应的`webpack`配置。

`vue cli`的使用

安装`vue`脚手架

```
npm install -g @vue/cli
```

![](https://user-gold-cdn.xitu.io/2020/4/4/17145be1b970a70c?w=783&h=171&f=png&s=32957)

![](https://user-gold-cdn.xitu.io/2020/4/4/17145bd2e9f30537?w=293&h=59&f=png&s=16915)

![](https://user-gold-cdn.xitu.io/2020/4/4/17145beb98c90613?w=777&h=247&f=png&s=120630)

#### vuecli2初始化过程

代码：

```
vue init webpack vuecli2test
```

1. 根据名称创建一个文件夹，存放之后项目的内容，该名称会作为默认的项目名称，但是不能包含大写字母等
2. `Project name` 项目名称，不能包含大写
3. `Project description`项目描述
4. `Author`作者信息
5. `Vue build``runtime`
6. `Install vue-router``no`是否安装等

> 目录结构详解

`build``config` 是 `webpack`相关配置,`node_modules` 是依赖的`node`相关的模块，`src`是写代码地方。 `.babelrc`是es代码相关转换配置，`.editorconfig`项目文本相关配置，`.gitignore``git`仓库忽略的文件夹配置，`.postcssrc.js`为`css`相关转化的配置。

`.editorconfig`

![](https://user-gold-cdn.xitu.io/2020/4/5/171484c81f09258f?w=454&h=224&f=png&s=65521)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714856512b66e6d?w=477&h=199&f=png&s=11645)

![](https://user-gold-cdn.xitu.io/2020/4/5/17148594d6353a75?w=483&h=387&f=png&s=21447)

前端模块化：

为什么使用模块化，简单写js代码带来的问题，闭包引起代码不可复用，自己实现了简单的模块化，`es`中模块化的使用：`export`和`import`。

```
npm install @vue/cli -g
```

```
npm clean cache -force
```

![](https://user-gold-cdn.xitu.io/2020/4/5/171489ea3b8e809a?w=902&h=295&f=png&s=185936)

![](https://user-gold-cdn.xitu.io/2020/4/5/17148c1694df1731?w=584&h=267&f=png&s=119021)

`vue cli2`初始化：

```
vue init webpack my-project
```

`vue cli3`初始化项目：

```
vue create my-project
```

![](https://user-gold-cdn.xitu.io/2020/4/5/17148f3b4ffac3d7?w=817&h=303&f=png&s=149326)

#### 箭头函数的使用和this

箭头函数，是一种定义函数的方式

1. 定义函数的方式：`function`

```
const a = function(){
    
}
```

2. 对象字面量中定义函数

```
const obj = {
    b: function() {
        
    },
    b() {
        
    }
}
```

3. 箭头函数

```
const c = (参数列表) => {
    
}
const c = () => {
    
}
```

> 箭头函数参数和返回值

代码：

```
const sum = (num1, num2) => {
    return num1 + num2
}

const power = (num) => {
    return num * num
}

const num = (num1,num2) => num1 + num2
```

```
const obj = {
    a() {
        setTimeout(function() {
            console.log(this); // window
        })
        setTimeout(()=>{
          console.log(this); // obj对象 
        })
    }
}
```

路由，，`vue-router`基本使用，`vue-router`嵌套路由，`vue-router`参数传递，`vue-router`导航守卫。

路由是一个网络工程里面的术语，路由就是通过互联的网络把信息从源地址传输到目的地址的活动。

路由器提供了两种机制：路由和转送。路由是决定数据包从来源到目的地的路径，转送将输入端的数据转移到合适的输出端。路由中有一个非常重要的概念叫路由表。路由表本质上就是一个映射表，决定了数据包的指向。

后端路由：后端处理url和页面之间的映射关系。

#### 前端路由和后端路由，前端渲染和后端渲染

`vue-router`和`koa-router`的区别：

`vue-router`是前端路由，`koa-router`是后端路由。

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a1074efb8aef?w=1041&h=417&f=png&s=51142)

`vue-router`前端路由原理：

前端路由主要模式：`hash`模式和`history`模式。

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a19b3372221c?w=1107&h=325&f=png&s=44695)

路由的概念来源于服务端，在服务端中路由描述的是 URL 与处理函数之间的映射关系。

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a2531e62ad8d?w=760&h=165&f=png&s=18444)

> 前后端渲染之争

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a32a8115392f?w=800&h=475&f=png&s=103477)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a384d356738c?w=955&h=383&f=png&s=42496)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a39a207440f7?w=984&h=368&f=png&s=50406)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a45053f88e93?w=1033&h=362&f=png&s=47258)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a489cfb5641f?w=1374&h=268&f=png&s=43431)

#### url中的`hash`和`html5`的`history`

前端路由的核心是改变`url`，但是页面不进行整体的刷新。单页面，其实`spa`最重要的特点就是在前后端分离的基础上加了一层前端路由。就是前端来维护一套路由规则。

`url`的`hash`

`url`的`hash`是锚点`#`,本质上是改变`window.location`的`href`属性。直接赋值`location.hash`来改变`href`，但是页面不发生刷新。

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a6c47b9e7fc0?w=277&h=55&f=png&s=8172)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a6cafb9d4f8f?w=616&h=281&f=png&s=85167)

`html5`的`history`模式：`pushState`

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a76748dcade8?w=393&h=41&f=png&s=14149)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a777dd1b62f3?w=296&h=51&f=png&s=11720)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a81902ff30df?w=380&h=269&f=png&s=39010)

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a8703df16743?w=371&h=195&f=png&s=36844)

`html5`的`history`模式：`replaceState`

![](https://user-gold-cdn.xitu.io/2020/4/5/1714a8c687547844?w=351&h=101&f=png&s=25317)

`html5`的`history`模式：`go`

`history.go()`

![](https://user-gold-cdn.xitu.io/2020/4/5/1714ab368c0f5e87?w=329&h=170&f=png&s=33392)

`history.back()`等价于`history.go(-1)`

`history.forward()`等价于`history.go(1)`

安装`vue-router`

```
npm install vue-router --save
```

1. 导入路由对象，并且调用`Vue.use(VueRouter)`
2. 创建路由实例，并且传入路由映射配置
3. 在`Vue`实例中挂载创建的路由实例

代码：

```
// 配置路由相关的信息
import VueRouter from 'vue-router'
import vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'

// 通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 配置路由和组件之间的应用关系
const routes = [
 {
     path: '/home',
     component: Home
 },
 {
     path: '/about',
     component: About
 }
]

// 创建VueRouter对象
const router = new VueRouter({
 routes
})

// 将router对象传入到`Vue`实例
export default router
```

`main.js`

```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
 el: '#app',
 router,
 render: h => h(App)
})
```

使用`vue-router`的步骤

1. 创建路由组件
2. 配置路由映射：组件和路径映射关系
3. 使用路由：通过`<router-link>`和`<router-view>`

代码：

组件`components`

```
// home
<template>
 <div>
  <h2>我是首页</h2>
 </div>
</template>

<script>
 export default {
     name: 'Home'
 }
</script>

<style scoped>
</style>
```

```
<template>
 <div>
  <h2>我是关于</h2>
 </div>
</template>

<script>
 export default {
     name: 'Aboout'
 }
</script>

<style scoped>
</style>
```

`App.vue`

```
<template>
 <div id="app">
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-view></router-view>
 </div>
</div>

<script>
export default {
    name: 'App'
}
</script>

<style>
</style>
```

`main.js`

```
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
new Vue({
 el: '#app',
 router,
 render: h => h(App)
})
```

> 路由的偶然值和修改为`history`模式

创建`router`实例

代码：

`router->index.js`

```
import Vue from 'vue'
import VueRouter from 'vue-router'

// 注入插件
Vue.use(VueRouter)

// 定义路由
const routes = []

// 创建router实例
const router = new VueRouter({
 routes
})

// 导出router实例
export default router
```

`main.js`代码：

```
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
 el: '#app',
 router,
 render: h=>h(App)
})
```

![](https://user-gold-cdn.xitu.io/2020/4/6/1714d0dbadcb6b80?w=1209&h=308&f=png&s=236505)

`router->index.js`

```
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home'
import About from '../components/about'

// 注入插件
Vue.use(VueRouter)

// 定义路由
const  routes = [
 {
     path: '/home',
     component: Home
 },
 {
     path: '/about',
     component: About
 }
]
```

使用`App.vue`代码

```
<template>
 <div id="app">
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-view></router-view>
 </div>
</template>
<script>
export default {
    name: 'App',
    components: {
        
    }
}
```

1. `<router-link>`该标签是一个`vue-router`已经内置的组件，它会被渲染成一个`<a>`标签
2. `<router-view>`该标签会根据当前的路径，动态渲染出不同的组件。
3. 网页的其他内容，比如顶部的标题或导航，或者底部的一些版本信息等会和`<router-view>`处于同一个等级。
4. 在路由切换时，切换的是`<router-view>`挂载的组件，其他内容不会发生改变。

路由的默认路径

默认情况下，进入网站的首页，`<router-view>`渲染首页的内容，但是默认没有显示首页组件，必须让用户点击才可以。

那么如何让路径默认跳转到首页，并且`<router-view>`渲染首页组件呢，只需要配置一个映射就可以：

```
const routes = [
 {
     path: '/',
     redirect: '/home'
 }
]
```

配置解析：在`routes`中又配置了一个映射，`path`配置的是根路径：`/`，`redirect`是重定向，就是我们将根路径重定向到`/home`的路径下。

```
// main.js
const router = new VueRouter({
 // 配置路由和组件之间的应用关系
 routes,
 mode: 'history'
})
```

改变路径的方式：

1. `url`的`hash`
2. `html5`的`history`
3. 默认情况下，路径的改变使用的`url`的`hash`

使用`html5`的`history`模式：

```
// 创建router实例
const router = new VueRouter({
 routes,
 mode: 'history'
})
```

`router-link`，使用了一个属性`:to`，用于指定跳转的路径。`tag`可以指定`<router-link>`之后渲染成什么组件。

`replace`属性不会留下`history`记录，指定`replace`的情况下，后退键返回不能返回到上一个页面中。

`active-class`属性，当`<router-link>`对应的路由匹配成功时，会自动给当前元素设置一个`router-link-active`的`class`，设置`active-class`可以修改默认的名称。

```
const router = new VueRouter({
 routes,
 mode: 'history',
 linkActiveClass: 'active'
})
```

#### 路由代码跳转

`App.vue`代码：

```
// app.vue
<template>
 <div id="app">
  <button @click="linkToHome">首页</button>
  <button @click="linkToAbout">关于</button>
  <router-view></router-view>
 </div>
</template>

<script>
 export default {
     name: 'App',
     methods: {
         linkToHome() {
             this.$router.push('/home')
         },
         linkToAbout() {
             this.$router.push('/about')
         }
     }
 }
</script>
```

![](https://user-gold-cdn.xitu.io/2020/4/6/1714d83e83f03f4a?w=383&h=121&f=png&s=31201)

![](https://user-gold-cdn.xitu.io/2020/4/6/1714d840d9fb952a?w=461&h=84&f=png&s=37592)

![](https://user-gold-cdn.xitu.io/2020/4/6/1714d84400d40673?w=685&h=33&f=png&s=37891)

![](https://user-gold-cdn.xitu.io/2020/4/6/1714d8e06923ffe1?w=327&h=118&f=png&s=45822)

```
<img :src="imgURL" alt="">

<router-link :to="'/uer/' + userId"> 用户 </router-link>

<script>
 export default {
     name: 'User',
     computed: {
         userId() {
             return this.$route.params.userId
         }
     }
 }
</sript>
```

![](https://user-gold-cdn.xitu.io/2020/4/6/1714e4646467a2c1?w=293&h=182&f=png&s=40297)

```
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

{
    path: '/home',
    component: Home,
    children: [
        {
            path: 'news',
            component: HomeNews
        },
        {
            path: 'news',
            component: HomeMessage
        }
    ]
}
```

```
<router-link to = "/home/news">新闻</router-link>
<router-link to = "/home/message">信息</router-link>
```
默认选中：

![](https://user-gold-cdn.xitu.io/2020/4/6/1714e6659790c8d7?w=313&h=176&f=png&s=33606)

#### 传递参数的方式

传递参数主要有两种类型，`params`和`query`

`params`的类型：

1. 配置路由方式：`/router/:id`
2. 传递的方式：在`path`后面跟着对应的值
3. 传递后形成的路径：`/router/123`

`vue-router`传递参数代码

```
<router-link :to="{path: '/profile'}">用户</router-link>
```

![](https://user-gold-cdn.xitu.io/2020/4/6/1714e85013fc83e5?w=828&h=45&f=png&s=36261)

> 统一资源定位符

统一资源定位符，统一资源定位器，统一资源定位地址，Url地址等，网页地址。如同在网络上的门牌，是因特网上标准的资源的地址。

![](https://user-gold-cdn.xitu.io/2020/4/6/1714e8ef0c08c2f0?w=629&h=71&f=png&s=41806)

![](https://user-gold-cdn.xitu.io/2020/4/6/1714e8f2749223fc?w=785&h=46&f=png&s=41081)

```
userClick() {
    this.$router.push('/user/' + this.userId)
}

btnClick() {
    this.$router.push({
     path: '/user',
     query: {
         name: 'web',
         age: 12,
         height: 1.2
     }
    })
}
```

`$route`和`$router`是有区别的

获取参数通过`$route`对象获取的，在使用`vue-router`的应用中，路由对象会被注入每个组件中，赋值为`this.$route`，并且当路由切换时，路由对象会被更新。

```
<template>
 <div>
  <p> {{$route.params}} </p>
 </div>
</template>
```

`query`的类型：

1. 配置路由格式：`/router`也是普通配置
2. 传递方式，对象中使用`query`的`key`作为传递方式
3. 传递后形成的路径，`router?id=123`,`/router?id=abc`

`$route`和`$router`是有区别的

```
const router = new VueRouter({
 routes,
 mode: 'history',
 linkActiveClass: 'active'
})
```

![](https://user-gold-cdn.xitu.io/2020/4/6/1714f39a0b602e07?w=409&h=369&f=png&s=104636)

![](https://user-gold-cdn.xitu.io/2020/4/6/1714f462268dfb99?w=411&h=432&f=png&s=120801)

```
Vue.config.productionTip = false

Vue.prototype.test = function() {
    console.log('test')
}

Vue.prototype.name  = 'web'
```

![](https://user-gold-cdn.xitu.io/2020/4/6/1714f735e7f4e030?w=554&h=167&f=png&s=89027)

`$route`和`$router`是有区别的

1. `$router`为`VueRouter`实例，想要导航到不同`url`，则使用`$router.push`方法。
2. `$route`为当前`router`跳转对象里面可以获取`name`,`path`,`query`,`params`等。

`vue-router`全局导航

![](https://user-gold-cdn.xitu.io/2020/4/6/1714f9118a2d8d69?w=743&h=195&f=png&s=147342)

![](https://user-gold-cdn.xitu.io/2020/4/6/1714f9eb47122bd0?w=263&h=155&f=png&s=31134)

meta:元数据

```
router.beforeEach((to,from,next) => {
    // from 跳转到to
    document.title = to.matched[0].meta.title
    console.log(to);
    next()
})
```

```
// 后置钩子hook
router.afterEach((to,from) => {
  console.log();  
})
```

导航守卫：导航表示路由正在发生改变。

`vue-router`提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中，全局的，单个路由独享的，或者组件级的。

全局守卫

可以使用`router.beforeEach`，注册一个全局前置守卫：

```
const router = new VueRouter({..})

router.beforeEach((to,from,nex)=>{
    
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫`resolve`完之前一直处于等待中。

1. `to:Route`，即将要进入的目标路由对象
2. `from:Route`，当前导航正要离开的路由
3. `next:Function`，一定要调用该方法来`resolve`这个钩子。

![](https://user-gold-cdn.xitu.io/2020/4/6/1714fc0799471afb?w=654&h=332&f=png&s=151387)

#### `vue-router-keep-alive`

`keep-alive`和`vue-router`

`router-view`是一个组件，如果直接被包含在`keep-alive`里面，所有路径匹配到的视图组件都会被缓存。

`keep-alive`是`Vue`内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

属性：

1. `include`字符串或正则表达式，只有匹配的组件会被缓存
2. `exclude`字符串或正则表达式，任何匹配的组件都不会被缓存

```
<keep-alive>
 <router-view>
  // 所有路径匹配到的视图组件都会被缓存
 </router-view>
<keep-alive>
```

#### `Promise`的使用

`es6`的特性`Promise`，它是异步编程的一种解决方案。

定时器的异步事件：

```
setTimeout(function() {
    let data = 'web'
    console.log(content)
},1000)

new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('web')
        reject('error')
    },1000)
}).then(data=>{
    console.log(data)
}).catch(error=> {
    console.log(error)
})
```

`Promise`三种状态：

1. `pending`等待状态，比如正在进行网络请求，或定时器没有到时间。
2. `fulfill`，满足状态，主动回调`resolve`时，并且回调`.then()`
3. `reject`，拒绝状态，回调`reject`时，并且回调`.catch()`

#### Vuex详解

`vuex`是一个专门为`vue.js`应用程序开发的状态管理模式

它采用集中式存储管理应用的所有组件的状态，，并以相应的规则保证状态以一种可预测的方式发生变化。

1. 状态管理模式
2. 集中式存储管理

![](https://user-gold-cdn.xitu.io/2020/4/7/171504d6631af555?w=381&h=284&f=png&s=47223)

![](https://user-gold-cdn.xitu.io/2020/4/7/171504fcf4545188?w=467&h=444&f=png&s=133660)

![](https://user-gold-cdn.xitu.io/2020/4/7/1715059e2b10a620?w=580&h=176&f=png&s=13903)

![](https://user-gold-cdn.xitu.io/2020/4/7/171505a582f62326?w=745&h=581&f=png&s=124268)

![](https://user-gold-cdn.xitu.io/2020/4/7/171505eeede78ef2?w=262&h=292&f=png&s=44985)

```
View components -> actions(dispatch方式) -> mutations(commit方式) -> state -> View components
```

![](https://user-gold-cdn.xitu.io/2020/4/7/1715066541d874d4?w=867&h=427&f=png&s=40215)

![](https://user-gold-cdn.xitu.io/2020/4/7/171506ddbfdf77a7?w=257&h=199&f=png&s=47901)

![](https://user-gold-cdn.xitu.io/2020/4/7/171506e4728620c6?w=371&h=173&f=png&s=50891)

`Vuex`核心概念5个：

`State`，`Getters`，`Mutation`，`Action`，`Module`

`State`单一状态树，单一数据源。

![](https://user-gold-cdn.xitu.io/2020/4/7/1715081d0cea3189?w=451&h=32&f=png&s=21337)

![](https://user-gold-cdn.xitu.io/2020/4/7/1715081f2b768030?w=490&h=74&f=png&s=32737)

![](https://user-gold-cdn.xitu.io/2020/4/7/171508429639a136?w=454&h=161&f=png&s=39073)

`Mutation`状态更新

`Vuex`的`store`的更新唯一方式，提交`Mutation`

`Mutation`的主要包括两部分：

1. 字符串的事件类型
2. 一个回调函数，该回调函数的第一个参数就是`state`

`mutation`的定义：

```
mutations: {
    increment(state) {
        state.count++
    }
}
```

通过`mutation`更新

```
increment: function() {
    this.$store.commit('increment')
}
```

![](https://user-gold-cdn.xitu.io/2020/4/7/171508c421d25e76?w=465&h=90&f=png&s=43911)

参数被称为是`mutation`的载荷`payload`

![](https://user-gold-cdn.xitu.io/2020/4/7/171509e12bd866f4?w=333&h=76&f=png&s=33372)

![](https://user-gold-cdn.xitu.io/2020/4/7/171509f90e8d084f?w=591&h=196&f=png&s=71936)

`Vuex`的`store`中的`state`是响应式的，当`state`中的数据发生改变时，`Vue`组件会自动更新。

1. 提前在`store`中初始化好所需的属性
2. 给`state`中的对象添加新属性时：使用

- 使用`Vue.set(obj,'newObj',123)`
- 用新对象给旧对象赋值

`Mutation`常量类型

```
// mutation-types.js
export const UPDATE_INFO = 'UPDATE_INFO'

import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        info: {
            name: 'web',
            age: 12
        }
    },
    mutations: {
        [types.UPDATE_INFO](state, payload) {
            state.info = {...state.info, 'height': payload.height
        }
    }
})
```

```
<script>
 import {UPDATE_INFO} from './store/mutation-types';
 export default{
     name: 'App',
     components: {
         
     },
     computed: {
         info(){
             return this.$store.state.info
         }
     },
     methods: {
         updateInfo(){
             this.$store.commit(UPDATE_INFO,{height:1.00})
         }
     }
 }
</script>
```

注意：不要再`mutation`中进行异步操作，`mutation`同步函数，在其中的方法必须时同步方法。

`action`的基本定义，如果有异步操作，比如网络请求，

```
// 不能再mutation中使用异步操作,不能再这里进行异步操作
update(state) {
    setTimeout(()=>{
        state.info.name = 'web'
    },1000)
}

mutations: {
    // 方法
    [INCREMENT](state){
        state.counter++
    }
}
```

```
actions: {
    // context:上下文，=》store
    <!--aUpdateInfo(context) {-->
    <!--    setTimeout(()=>{-->
    <!--        state.info.name = 'web'-->
    <!--    },1000)-->
    <!--}-->
}
```

```
actions: {
    aUpdateInfo(context) {
        setTimeout(()=>{
            context.commit('updateInfo')
        },1000)
    }
}

// xx.vue
updateInfo(){
    this.$store.dispatch('aUpdateInfo')
}
```

![](https://user-gold-cdn.xitu.io/2020/4/7/1715266926dc1f8e?w=174&h=191&f=png&s=28502)

```
updateInfo(){
    <!--this.$store.commit('updateInfo')-->
    this.$store.dispatch('aUpdateInfo',{
        message: 'web',
        success: () => {
            console.log('web')
        }
    })
}
```

```
aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {...})
}
```

#### vuex中的modules使用

modules时模块的意思

![](https://user-gold-cdn.xitu.io/2020/4/7/17152743fb66e185?w=244&h=194&f=png&s=31879)

![](https://user-gold-cdn.xitu.io/2020/4/7/1715274f98d54538?w=287&h=448&f=png&s=100346)

```
getters: {
    stu(){
        
    },
    stuLength(state, getters) {
        return getters.stu.length
    }
}
```

使用根数据：

```
getters: {
    fullName(state) {
        return state.name + '1'
    },
    fullName1(state, getters) {
        return getters.fullName + '2'
    },
    fullName3(state, getters, rootState) {
        return getters.fullName2+rootState.counter
    }
}
```

在模块中`actions`打印`console.log(context)`

![](https://user-gold-cdn.xitu.io/2020/4/7/17152807435c0001?w=523&h=158&f=png&s=60823)

`actions`接收一个`context`参数对象，局部状态通过`context.state`暴露出来，根节点状态为`context.rootState`

![](https://user-gold-cdn.xitu.io/2020/4/7/1715282f71c428fc?w=468&h=202&f=png&s=58962)

![](https://user-gold-cdn.xitu.io/2020/4/7/1715283398098eb6?w=393&h=158&f=png&s=44554)

```
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
    
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA
    }
})

export default store
```

### 网络封装

axios网络模块的封装

`ajax`是基于`XMLHttpRequest(XHR)`；`jQuery-Ajax`相对于传统的`ajax`非常好用。

![](https://user-gold-cdn.xitu.io/2020/4/7/1715291ce0b0d451?w=404&h=501&f=png&s=106285)

![](https://user-gold-cdn.xitu.io/2020/4/7/171529243685e988?w=523&h=508&f=png&s=253126)

![](https://user-gold-cdn.xitu.io/2020/4/7/1715292746c0ba8b?w=509&h=146&f=png&s=65956)

`axios`特点：

- 在浏览器中发送`XMLHttpRequests`请求
- 在`node.js`中发送`http`请求
- 支持`Promise API`
- 拦截请求和响应
- 转换请求和响应数据

`axios`请求方式：

```
axios(config)
axios.request(config)
axios.get()
axios.delete()
axios.head()
axios.post()
axios.put()
axios.patch()
```

安装

```
npm install axios --save
```

```
axios({
    // 默认get
    url: '',
    method: 'get'
}).then(res=>{
    console.log(res)
})
```

```
// import request from "../utils/request.js"
import {request} from './network'

export function getHome() {
    return request({
        url: '/home/xxx'
    })
}

export function getXX(type, page) {
    return request({
        url: '/home/xx',
        params: {
            type,
            page
        }
    })
}
```

> 并发请求

代码：

```
axios.all([axios({
 url: ''
}), axios({
 url: '',
 params: {
     type: '',
     page: 1,
 }
})]).then(results => {

})

// then(axios.spread((res1,res2)=>{...}))
```

全局配置

```
axios.defaults.baseURL=''

axios.all ..{
    url: '/home'
}

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.baseURL = global.HOST;
```

`request.js`

```
import axios from 'axios'
export function request(config,success,failure){
    // 创建axios实例
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })
    // 发送网络请求
    instance(config)
    .then(res=>{
        success(res)
    })
    .catch(err=>{
        failure(err)
    })
}
```

`main.js`

```
import {request} from './xx/request'

request({
    url: ''
},res=>{

),err=>{
    
}
```

也可以使用`promise`方法，不过本身返回的就是`promise`

```
import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: '',
        timeout: 2000
    })
    return instance(config)
}
```

`axios`拦截器的使用

![](https://user-gold-cdn.xitu.io/2020/4/7/17152dfc015c7afe?w=618&h=192&f=png&s=85899)

![](https://user-gold-cdn.xitu.io/2020/4/7/17152e02845c1cd3?w=226&h=199&f=png&s=61287)

```
// 配置请求和响应拦截
instance.interceptors.request.use(config => {
    console.log('request拦截success中')
    return config
},err => {
    console.log('request拦截failure中')
    return err
})

instance.interceptors.response.use(response => {
    console.log('response拦截success中')
    return response.data
},err => {
    console.log('response拦截failure中')
    return err
})
```

封装axios

```
// request.js
import axios from 'axios'
cosnt service = axios.create({
 baseURL: process.env.BASE_API,
 timeout: 2000
})

service.interceptors.request.use(config=>{
 //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
 config.data=JSON.stringify(config.data);
 config.headers = {
     'Content-Type':'application/x-www-form-urlencoded'
 }
 return config
},error=>{
 Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
 return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = "/NotFound"
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message('连接服务器失败')
  }
  Message.error(err.message)
  return Promise.resolve(error.response)
})
// 导入文件
export default service
```

封装请求`http.js`

```
import request from './request'
const http ={
    /**
     * methods: 请求
     * @param url 请求地址 
     * @param params 请求参数
     */
    get(url,params){
        const config = {
            methods: 'get',
            url:url
        }
        if(params){
         config.params = params
        }
        return request(config)
    },
    post(url,params){
        const config = {
            methods: 'post',
            url:url
        }
        if(params){
         config.data = params
        }
        return request(config)
    },
    put(url,params){
        const config = {
            methods: 'put',
            url:url
        }
        if(params){
         config.params = params
        }
        return request(config)
    },
    delete(url,params){
        const config = {
            methods: 'delete',
            url:url
        }
        if(params) {
         config.params = params
        }
        return request(config)
    }
}

export default http
```

```
// api.js
import http from '../utils/http'
let resquest = "/xx/request/"
// get请求
export function getListAPI(params){
    return http.get(`${resquest}/getList.json`,params)
}

// js

//创建新的axios实例，
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 3 * 1000
})
```

#### 项目

创建项目：

```
vue create webMall

npm run serve
```

![](https://user-gold-cdn.xitu.io/2020/4/7/1715328ac4ca842b?w=184&h=168&f=png&s=23815)

```
// .editorconfig
root = true
[*]
charset = utf-8
indent_style=space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

> 项目在`window`下部署

`main.js`代码：

```
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false
// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 使用懒加载的插件
Vue.use(VueLazyLoad,{
 loading: require('./xx.png')
})
```

![](https://user-gold-cdn.xitu.io/2020/4/7/1715424bc93be747?w=674&h=273&f=png&s=201125)

`windows`安装`nginx`，`linux`部署，`centos`上安装`nginx`

![](https://user-gold-cdn.xitu.io/2020/4/7/171543006e880477?w=639&h=456&f=png&s=185287)

![](https://user-gold-cdn.xitu.io/2020/4/7/1715430ff69289ad?w=599&h=252&f=png&s=32837)

`linux ubuntu`

`Ubuntu`是一个以桌面应用为主的`Linux`操作系统，其名称来自非洲南部祖鲁语或豪萨语的`“ubuntu"`一词。

![](https://user-gold-cdn.xitu.io/2020/4/7/1715468775fb1d23?w=1023&h=837&f=png&s=50760)

![](https://user-gold-cdn.xitu.io/2020/4/7/171546940c1ff762?w=486&h=315&f=png&s=34663)

操作系统：`Window10 + Centos6.5（虚拟机）`

```
yum install nginx
systemtl start nginx.service
systemctl enable nginx.service
```

通过Xftp将vue项目文件上传至云服务器

使用Xshell连接云服务器

![](https://user-gold-cdn.xitu.io/2020/4/7/171547a3bb8b6207?w=583&h=500&f=png&s=62833)

主机就是阿里云上创建的实例的公网ip

输入登录名和密码，登录名就是购买服务器时输入的登录名和密码。

![](https://user-gold-cdn.xitu.io/2020/4/7/171547b08b0eecbe?w=430&h=364&f=png&s=39228)

运行`npm run build`命令,有一个dist文件夹，这就是vue项目打包后的文件。

nginx安装配置

在`Xshell`终端输入命令`yum install nginx`，当需要确认时输入`”y“`回车。

安装完成后，输入`service nginx start`启动`nginx`服务。

通过命令`nginx -t`查看`nginx`所在的安装目录。

在命令行输入命令`cd/etc/nginx` 切换到`nginx`目录下，再输入`cat nginx.conf`可查看当前`nginx`配置文件。

输入命令 `wget https://nodejs.org/dist/v10.8.0/node-v10.8.0-linux-x64.tar.xz` 回车，等待安装。

输入命令`tar xvf node-v10.8.0-linux-x64.tar.xz` 回车进行解压操作。

### 小结：

1. 计算属性在多次使用时，只会调用一次，因为它是有缓存额
2. 修饰符：`stop`，`prevent`，`.enter`，`.once`，`.native`等，`lazy`，`number`，`trim`等。
3. 模板的分类写法：`script`，`template`
4. 父子组件的通信：父传子，`props`，子传父，`$emit`
5. 项目，`npm install`，`npm run serve`
6. `webStorm`开发`vue`在`Plugins`安装插件`vue.js`
7. 在 `2.6.0` 版本中，`Vue`为具名插槽和作用域插槽引入了一个新的统一的语法 （即 `<v-slot>` 指令）。它取代了 `slot` 和 `slot-scope` 这两个目前已被废弃、尚未移除，仍在文档中的特性。
8. `v-slot` 用法,分为三类：默认插槽、具名插槽以及作用域插槽。

作用域插槽，通过 `slot-scope`属性来接受子组件传入的属性集合

- 默认插槽

代码：

```
// 子组件
<template>
  <div>
  
    <header>
      <slot>默认值</slot>
    </header>
    
  </div>
</template>
```

任何没有被包裹在带有`v-slot`的`<template>`中的内容都会被视为默认插槽的内容。当子组件只有默认插槽时，`<v-slot>`标签可以直接用在组件上

```
// 父组件
<template>
  <div>
  
    <child>
      内容1
      <template>内容2</template>
      内容3
    </child>

    <child v-slot="web">
      插槽<br>
      插槽<br>
    </child>
    
  </div>
</template>
```

- 具名插槽:`v-slot` 重复定义同样的 `name` 后只会加载最后一个定义的插槽内容

```
// 子组件
<template>
  <div>
  
    <main>
      <slot name="main"></slot>
    </main>
    
    <footer>
      <slot name="footer"></slot>
    </footer>
    
  </div>
</template>
```

- 作用域插槽:

```
// 子组件
<template>
  <div>
  
    <footer>
      <slot name="footer" :user="user" :testBtn="testBtn">
        {{user.name}}
      </slot>
    </footer>
    
  </div>
</template>

<script>

exportdefault {
    name: 'child',
    data () {
      return {
        user: {
          title: 'web',
          name: 'web'
        }
      };
    },
    methods:{
      testBtn(){
        alert('web');
      }
    }
  };
  
</script>
```

`Vue`如何直接调用`Component`里的方法

```
<template>
  <div>
    <b-component ref="BComponent"></b-component>
  </div>
</template>
 
<script>
import BComponent from './BComponent'
 
export default {
  name: 'A',
 
  data () {
  },
 
  components: {
    BComponent
  },
 
  methods: {
    callACompoentFunction () {
      this.$refs.BComponent.sayHi()
    }
  }
}
</script>
 
<style scoped>
</style>
```

```
<template>
  <div></div>
</template>
 
<script>
 
export default {
  name: 'B',
 
  data () {
  },
 
  methods: {
    sayHi () {
      console.log('web!')
    }
  }
}
</script>
 
<style scoped>
</style>
```


## 最后

欢迎加我微信Jeskson(`xiaoda0423`)，拉你进技术群（掘金前端群，达达前端技术社群⑥），长期交流学习。

个人网站：http://www.dadaqianduan.cn/#/

![](https://user-gold-cdn.xitu.io/2020/4/7/17154a53132aaa1b?w=1080&h=394&f=png&s=196991)
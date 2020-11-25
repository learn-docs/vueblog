## 前沿

置身世外只为暗中观察！！！Hello大家好，我是魔王哪吒！重学巩固你的Vuejs知识体系，如果有哪些知识点遗漏，还望在评论中说明，让我可以及时更新本篇内容知识体系。欢迎点赞收藏！

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c0aae3057e147ff9e44f948a3752fd9~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1f11471c1cd4828b0d5ba16033b3a3e~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfdcd9b5f3644278931afba0ec15f95d~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a610021a64344b4e851f922df5916cab~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e62e8991e0414667be0cb5ee19986dd9~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fbe3f53582bb4f049e370de62412e8e1~tplv-k3u1fbpfcp-zoom-1.image)

谈谈你对MVC、MVP和MVVM的理解？

https://github.com/webVueBlog/interview-answe/issues/156

## 转角遇到Vuejs

1. 你为啥学习Vuejs
2. 前端开发的复杂化
3. Vuejs的特点
4. 安装Vuejs
5. 体验Vuejs
6. MVVM架构：data和Vue对象的分离，Vue中的MVVM

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/305a2a6f37054af9b81213188b9e80e7~tplv-k3u1fbpfcp-zoom-1.image)

### 目录：

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a203e10fcfd14c8fb7daa644d9799afd~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13e1fbe00bb84d5783f904e46fa5cc1a~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e08d911a62b94ab08dd7bd14e018234a~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a20368f2b5b8415b8b9e54acdc418a4d~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/155c8af6ce2c447182651432922732d6~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bacde0ce2e04fa1aa00f982c2caf947~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/802497317dab431e95fdde46917e139c~tplv-k3u1fbpfcp-zoom-1.image)

#### v-model:checkbox

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d54a56655225413ebf25c638da100321~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3892d6b4e6d54670ba728983a2151948~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05a6419cfd544a1ca9e3c3891eb4899c~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/363cfc338bef47c5b77f2816f75eee5d~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05f47a9cc45f4b4fb8cc0fb62a371039~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1980b245a7a4d3b861bf16f1899148d~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af996ae6c9fb4b69892c1d5e88c7ecf7~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcaa78df32c44948a8ef0639b13c79f6~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6f40fcadfbf4fb98a47235be7b6b36c~tplv-k3u1fbpfcp-zoom-1.image)

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

## 最后

我是程序员哆啦A梦，蓝胖子，简书万粉优秀创作者，掘金优秀作者、CSDN博客专家，云+社区社区活跃作者，致力于打造一系列能够帮助程序员提高的优质文章。网站@http://www.dadaqianduan.cn
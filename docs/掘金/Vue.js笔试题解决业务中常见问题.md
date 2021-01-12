哪吒人生信条：如果你所学的东西 处于喜欢 才会有强大的动力支撑。

> 把你的前端拿捏得死死的，每天学习得爽爽的，微信搜索【程序员哆啦A梦】关注这个不一样的程序员，如果你所学的东西 处于喜欢 才会有强大的动力支撑。
>
> 感谢不负每一份热爱前端的程序员，不论前端技能有多奇葩，欢迎关注加我入群vx:xiaoda0423

## 前言

希望可以通过这篇文章，能够给你得到帮助。(感谢一键三连)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00ff65c5b18347718b845d657d204652~tplv-k3u1fbpfcp-zoom-1.image)

### 1.`h5`底部输入框被键盘遮挡问题

如果你遇到`h5`页面这个问题，当输入框在最底部，点击软键盘后输入框会被遮挡，可以如下解决问题：

```
var getHeight = $(document).height();

$(window).resize(function(){
 if($(document).height() < getHeight) {
  $('#footer').css('position','static');
 }else {
  $('#footer').css('position','absolute');
 }
});
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/864b1a1c336544918afc2034e2696be9~tplv-k3u1fbpfcp-zoom-1.image)

### 2.触屏即播放

```
$('html').one('touchstart',function(){
 audio.play()
})
```

### 3.阻止旋转屏幕时自动调整字体大小

```
html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {-webkit-text-size-adjust:none;}
```

### 4.主流网站布局

页面分为3个部分：页面的顶部`header`，底部`footer`，中间部分（侧栏`side`和主要部分`main`）。

下面代码展示：

```
<body>
 // 页面层容器
 <div id="container">
  // 页面头部
  <div id="header"></div>
  // 页面主体
  <div id="main">>
   // 侧边栏
   <div id="side">
   </div>
  </div>
  // 页面底部
  <div id="footer"></div>
 </div>
</body>
```

设计页面样式代码如下：

```
<style type="text/css">
 body{
  font: 12px 微软雅黑;
  margin: 0px;
  text-align: center;
  background: #fff;
 }
 
 // 页面层容器
 #container {
  width: 100%;
 }
 #header {
  width: 800px;
  margin: 0 auto;
  height: 100px;
  background: #FFCC99;
 }
 #main {
  width: 800px;
  margin: 0 auto;
  height: 400px;
 }
 #side {
  float: left;
  width: 20em;
  background: red;
  padding: 15px 0;
 }
 #foot {
  width: 800px;
  margin: 0 auto;
  height: 50px;
  background: #00ffff;
 }
</style>
```

效果图如下：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d38eb9a9e13f425e9acd6a8fcf7ec9a6~tplv-k3u1fbpfcp-watermark.image)

### 5.什么是`MVVM`框架？

`MVVM`框架是一个`Model-View-ViewModel`框架，其中`ViewModel`连接模型`Model`和视图`View`。

在`vue.js`中的`MVVM`模式：

> `vue.js`是通过数据驱动的，`vue.js`实例化对象将`dom`和数据进行绑定，一旦绑定，`dom`和数据将保持同步，每当数据发生变化，`dom`也会随着变化；`ViewModel`是`Vue.js`的核心，它是`Vue.js`的一个实例。`Vue.js`会针对某个`HTML`元素进行实例化，这个`HTML`元素可以是`body`，也可以是某个`css`选择器所指代的元素。`DOM Listeners`和`Data Bindings`是实现双向绑定的关键。`DOM Listeners`监听页面所有`View`层中的`DOM`元素，当发生变化时，`Model`层的数据随之变化。`Data Bindings`会监听`Model`层的数据，当数据发生变化时，`View`层的`DOM`元素也随之变化。

### 6.`active-class`是哪个组件的属性

它是`vue-router`模块的`router-link`组件的属性

### 7.如何定义`vue-router`的动态路由

在静态路由名称前面添加冒号，如设置`id`动态路由参数，为路由对象的`path`属性设置`/:id`

### 8.如何获取传过来的动态参数

在组件中，使用`$router`对象的`params.id`，如`$route.params.id`

### 9.`vue-router`有哪几种导航的钩子

有三种，第一种是全局导航钩子，`router.beforeEach(to,from,next)`，作用是跳转前进行判断拦截；第二种是组件内的钩子；第三种是单独路由独享组件。

导航钩子又叫导航守卫，又分为全局钩子，单个路由独享钩子和组件级钩子。

全局钩子有`beforeEach`,`beforeResolve`,`afterEach`，单个路由独享钩子有：`beforeEnter`

组件级钩子有：`beforeRouteEnter`，`beforeRouteUpdate`，`beforeRouteLeave`：它们有以下参数：

`to`表示即将要进入的目标路由对象；`from`表示当前导航正要离开的路由；`next`表示一定要用这个函数才能到达下一个路由，如果不用就会遭到拦截。

### 10.`mint-ui`是什么

`mint-ui`它是基于`Vue.js`的前端组件库，用`npm`安装，然后通过`import`导入样式和`JavaScript`代码，`vue.use(mintUi)`用于实现全局引入，`import {Toast} from 'mint-ui'`用能于在单个组件局部引入

### 11.`v-model`是什么

`v-model`是`vue.js`的一条指令，实现数据的双向绑定

双向数据绑定的原理：

`vue.js`使用`es5`提供的属性特性功能，结合发布者-订阅者模式，通过`Object.defineProperty()`为各个属性定义`get,set`特性方法，在数据发送改变时给订阅者发布消息，触发相应的监听回调。

> 过程：a，对需要观察的数据对象进行递归遍历，包含子属性对象的属性，设置`set`和`get`特性方法；当给这个对象的某个值赋值时，会触发绑定的`set`特性方法，就能起到监听数据的变化。b，用`compile`解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，就会收到通知，并更新视图。c，`Watcher`订阅者是`Observer`和`Compile`之间通信的桥梁：在自身实例化时向属性订阅器`dep`里面添加自己；自身必须有一个`update()`方法；在`dep.notice()`发布通知时，能调用自身的`update()`方法，并触发`Compile`中绑定的回调函数。d，`MVVM`是数据绑定的入口，整合了`Observer`，`Compile`和`Wathcher`三者，通过`Observer`来监听自己的`model`数据变化，通过`Compile`来解析编译模板指令，最终利用`Watcher`来搭起`Observer`和`Compile`之间的通信桥梁，达到数据变化通知视图更新的效果，利用视图交互，变化更新数据`model`变更的双向绑定效果。

### 12.`vue.js`中标签如何绑定事件

第一种方式，使用`v-on`；第二种方式，使用`@`语法糖

### 13.`vuex`是什么

`vuex`是`vue.js`框架实现的状态管理系统。使用`vuex`，要引入`store`，并注入`vue.js`组件中，在组件内部可以通过`$store`访问`store`对象；使用场景，在单页应用中，用于组件之间的通信，如音乐播放，登录状态管理，加入购物车等

`vuex`可以说是一种开发模式或框架，它是对`vue.js`框架数据层面的扩展，通过状态集中管理驱动组件的变化，应用的状态集中放在`store`中，改变状态的方式是提交`mutations`，这是个同步的事务，异步的逻辑应该封装在`action`中。

### 14.在`vue`中说说你知道的自定义指令

自定义指令两种：一种全局自定义指令，`vue.js`对象提供了`directive`方法，可以用来自定义指令，`directive`方法接收两个参数，一个是指令名称，另一个是函数；第二种是局部自定义指令，通过组件的`directives`属性定义。

### 15.`vue.js`中常用的4种指令

`v-if`判断对象是否隐藏；`v-for`循环渲染；`v-bind`绑定一个属性；`v-model`实现数据双向绑定

在`v-if`循环中实现`v-model`数据的双向绑定：

> 有时需要创建`input`，并用`v-model`实现数据的双向绑定。此时可以为`v-model`绑定数组的一个成语`selected[$index]`，这样可以给不同的`input`绑定不同的`v-model`:

```
<div v-for="(item,index) in arrDa">
 <input type="text" v-model="arrData[index]">
 <h1>{{arrDa[index]}}</h1>
</div>
```

### 16.`vue-router`是什么

`vue-router`是`vue.js`的路由插件，（常用`router-link`和`router-view`）

### 17.`vue.js`的生命周期

共分8个阶段：

1. `beforeCreate`

> 在实例初始化之后，数据观测者`data observer`和`event/watcher`事件配置之前调用

2. `created`

> 在实例创建完成后立即调用，此时，实例已完成：观测者，属性和方法的运算，`watch/event`事件回调，挂载阶段还没开始，`$el`属性目前不可见。

3. `beforeMount`

> 在挂载开始之前调用，相关的`render`函数首次调用。

4. `mounted`

> `el`被新创建的`vm.$el`替换，并且在挂载到实例上之后再调用该钩。如果`root`实例挂载了一个文档内元素，当调用`mounted`时`vm.$el`也在文档内。

5. `beforeUpdate`

> 在数据更新时调用，发生在虚拟`dom`重新渲染和打补丁之前。

6. `updated`

> 由于数据更改导致的虚拟`dom`重新渲染和打补丁，在这之后会调用该钩子。

7. `beforeDestroyed`

> 在实例销毁之前调用，在这一步，实例仍然完全可用。

8. `destroyed`

在`vue.js`实例销毁后调用，`vue.js`实例指示的所有东西都会解除绑定，所有的事件监听会被移除，所有的子实例也会被销毁。

如果使用组件的`keep-alive`功能时，增加两个周期：

- `activated`在`keep-alive`组件激活时调用；
- `deactivated`在`keep-alive`组件停用时调用。

`<keep-alive>`包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。`<keep-alive>`是一个抽象组件，它自身不会渲染一个`DOM`元素，也不会出现在父组件链中。

当在`<keep-alive>`内切换组件时，它的`activated`和`deactivated`这两个生命周期钩子函数将会执行。

```
<keep-alive>
 <component :is="view"></component>
</keep-alive>
```

增加一个周期钩子：`ErrorCaptured`表示当捕获一个来自子孙组件的错误时调用。

### 18.描述封装`vue`组件的作用过程

组件可以提升整个项目的开发效率，能够把页面抽象成多个相对独立的模块，解决了传统项目开发中效率低，难维护，复用性等问题。

使用`Vue.extend`方法创建一个组件，使用`Vue.component`方法注册组件，子组件需要数据，可以在`props`中接收数据，而子组件修改好数据后，想要把数据传递给父组件，可以使用`emit`方法。

使用自定义组件：

在`components`目录中新建组件文件，脚本一定要导出暴露的接口；导入需要用到的页面；将导入的组件注入`vue.js`的子组件的`components`属性中；在`template`的视图中使用自定义组件。

创建组件

```
<div id="app">
 <dada></dada>
</div>
<template id="demo">
 <div>
  <h1>{{msg}}</h1>
 </div>
</template>
<script type="text/javascript">
// 定义组件类
var dada = Vue.extend({
 template: '#demo',
 data:function() {
  return {
   msg: 'dadaqianduan.cn'
  }
 }
})
// 注册组件
Vue.component('dada',dada);
// 定义Vue实例化对象
var app = new Vue({
 el: '#app',
 data: {}
})
</script>
```

### 19.`vue-loader`是什么

`vue-loader`它是解析`.vue`文件的一个加载器，将`template/js/style`转换成`javascript`模块；通过这个`vue-loader`，`javascript`可以写`EMAScript6`语法，`style`样式可以应用`scss`或`less`，`template`可以添加`jade`语法。。。

### 20.在`vue.cli`项目中的`src`目录说明

1. `assets`文件夹存放静态资源;
2. `components`存放组件;
3. `router`定义路由相关的配置;
4. `view`是视图;
5. `app.vue`是一个应用主组件;
6. `main.js`是入口文件。

### 21.对`vue.js`的`template`编译的理解

首先转化成`AST`抽象语法树，`Abstract Syntax Tree`，就是将源代码语法结构抽象成树状表现形式，然后通过`render`函数进行渲染，并返回`VNode`（`Vue.js`的虚拟`dom`节点）。

> 通过`compile`编译器把`template`编译成`AST`，`compile`是`createCompiler`的返回值，`createCompiler`用来创建编译器，`compile`还负责合并`option`；`AST`会经过`generate`-将`AST`转换成`render function` 字符串的过程-得到`render`函数，`render`的返回值是`VNode`，`VNode`是`Vue.js`的虚拟`DOM`节点，里面有标签名，子节点，文本等。

### 22.`v-show`指令和`v-if`指令的区别

它们都是条件渲染指令，不同的是，`v-show`的值无论是`true`或`false`元素都会存在于`html`页面中，而`v-if`的值为`true`时，元素才会存在于`html`页面中。

`v-show`指令是通过修改元素的`style`属性值实现的。

### 23.让`css`只在当前组件中起作用

只需要在`style`标签中添加`scoped`属性，`<style scoped></style>`

### 24.在`vue.js`中如何实现路由嵌套

路由嵌套会将其他组件渲染到该组件内，而不是使整个页面跳转到`router-view`定义组件渲染的位置，要进行页面跳转，要将页面渲染到根组件内。首先实例化根组件，在根组件中定义组件渲染容器，然后，挂载路由，当切换路由时，将会切换整个页面。

```
new Vue({
 el: '#dada',
 router: router,
 template: '<router-view></router-view>'
})
```

### 25.在`vue.js`中的`ref`属性有什么作用

可以直接访问组件内部的一些元素，定义属性可以在组件内部通过`this.$refs`属性，，访问设置`ref`属性的元素，这是一个原生的`DOM`元素，要使用原生`DOM API`操作它们。

### 26.在`vue.js`开发环境下调用接口，如何避免跨域

在`config/index.js`内对`proxyTable`项进行如下配置：

```
proxyTable: {
 '/api': {
   target: 'http://xxx.com',
   changeOrign: true,
   pathRewrite: {
    '^/api': ''
   }
  }
}
```

### 27.`axios`是什么

`axios`是`vue2.0`中用来替换`vue-resource.js`插件的一个模块，是一个请求后台资源的模块

使用`npm install axios`来安装`axios`

```
import Vue from 'vue'
import axios from 'axios';
Vue.prototype.$http = axios;
new Vue({
 el: 'dada',
 data: {
  mag: ''
 },
 template: '<h1>{{msg}}</h1>',
 created: function() {
  this.$http.get('data.json').then(res=>{
   this.msg = res.data.data
  })
 }
})
```

当调用`axios.post('api/user')`时，表示发送`post`异步请求。

### 28.`sass`是什么

`sass`是一种`css`预编译语言，用`npm`安装加载程序；在`webpack.config.js`中配置`sass`加载程序

```
module: {
 // 加载程序
 loaders: {
  // 加载scss
  {
   test: /\.scss$/,
   loader: 'vue-style-loader!css-loader!sass-loader'
  }
 }
}
```

### 29.什么情况下会产生片段实例

模板包含多个顶级元素；模板只包含普通文本；模板只包含其他组件，模板只包含一个元素指令，如`vue-router`的`<router-view>`；模板根节点有一个流程 控制指令，如`v-if`或`v-for`

这些情况让实例有未知数量的顶级元素，模板将把它的`DOM`内容当作片段。片段实例仍然会正确地渲染内容。不过，模板没有一个根节点，它的`$el`指向一个锚节点，即一个空的文本节点。

> 在`vue2.0`中，组件的模板只允许有权只有一个根节点。

### 30.  实现多个根据不同条件显示不同文字的方法

```
<div id="app">
 <input type="text" v-model="inputValue">
 <h1>{{showValue}}</h1>
</div>
var app = new Vue({
 el: '#app',
 data: {
  inputValue: ''
 },
 computed: {
  showValue: function() {
   return this.inputValue || '请输入内容'
  }
 }
})
```

### 31.什么是数据的丢失

如果在初始化时没有定义数据，之后更新的数据是无法触发页面渲染更新的，这部分数据是丢失的数据，这种现象叫数据的丢失。

### 32.如何检测数据的变化

- 通过直接索引设置元素：`app.arr[0]=`
- 修改数据的长度：`app.arr.length`

为了解决该问题，`Vue.js`扩展了观察数组，为它添加了一个`$set()`方法，用该方法修改的数组，能触发视图更新，检测数据变化。

```
app.$set(app.arr, 5, 500);
```

由于`javascript`特性的限制，`vue.js`不能检测到对象属性的添加或删除，因为`Vue.js`在初始化时将数组转化为`getter/setter`，所以属性必须在`data`对象中定义，才能在初始化时让`vue.js`转换它并让它响应。

```
var data = {
 obj: {
  a: 1
 }
}
var app = new Vue({
 el: '#app',
 data: data
})
app.ojb.a = 10
app.obj.b = 20 // 不是响应的
data.obj.b = 20 // 不是响应的
```

如果需要在实例创建之后添加属性并且让它能够响应，使用`$set`实例方法：

```
app.$set(app.obj, 'b', 200)
```

对于普通数据对象，可以全局方法`Vue.set(object,key,value)`

```
Vue.set(data.obj, 'b', 250)
```

### 33.`vue.js`文件中的样式覆盖不生效的问题

在`style`上加上`scoped`可以让样式私有化，只针对当前`vue.js`文件中的代码有效，不会对别的文件中的代码造成影响，有时，引入第三方`UI`，在`vue.js`文件中进行样式覆盖不生效，大概是因为`style`上的`scoped`导致的。

可以将需要覆盖样式的这部分代码放到单独的`css`文件中，在`main.js`文件导入即可。

### 34.如何解决数据层级结构太深

在开发中，常出现异步获取数据的情况，有时数据层次太深，如：

```
<text v-text="a.b.c.d"></text>
```

可以使用`vm.$set`手动定义一层数据：`vm.$set("dada", a.b.c.d)`

### 35.`vue.js`页面的闪烁

在`vue.js`有一个`v-cloak`指令，该指令一直保持在元素上，直到关联实例结束编译。当和`css`使用时，这个指令可以隐藏未编译的标签，直到实例编译结束：`<div>`不会显示，直到编译结束。

```
[v-cloak] {
 display: none;
}
<div v-cloak>{{dada}}</div>
```

## 点赞、收藏和评论

我是Jeskson(达达前端)，感谢各位人才的：点赞、收藏和评论，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞谢谢，一起学习了)

## 我们下期见！

> 文章持续更新，可以微信搜一搜「 程序员哆啦A梦 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> github收录，欢迎Star：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
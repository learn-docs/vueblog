大家好，我是**魔王哪吒**，很高兴认识你~~

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

不要害怕做梦，但是呢，也不要光做梦，要做一个实干家，而不是空谈家，求真力行。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13676d0b080e4934bdc66ef18daaa45b~tplv-k3u1fbpfcp-zoom-1.image)

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24a4ee28d65e4c33ab82452358df99fe~tplv-k3u1fbpfcp-zoom-1.image)

作为一名Vue开发使用者，必须了解其使用规则。

### Vue.js的发展

前端发展的行业非常快，大部分学习者赶不上发展的速度，每天都在学习`Google`的`AngularJS`，`Fackbook`的`ReactJS`，这些前端`MVC`（`MVVM`）框架和组件化学习，加上`Vue.js`的出现，越来越多的前端投入了学习中。❤️

`Vue.js`是一个用来开发`web`界面的前端库，轻量级，具有响应式编程和组件化的特点。

### hello world

引入`vue.js`

```
<script src="http://cdnjs.xxx"></script> // 使用CDN方法
```

通过`NPM`进行安装：

```
npm install vue
```

示例：

```
<div id="#app">
 <h1>{{message}}</h1>
</div>

var vm = new Vue({
 el: '#app',
 data: {
  message: 'hello world, 我是掘金，魔王哪吒'
 }
})
```

> 特点：数据绑定

在浏览器控制台`vm.message='hello vue'`，输出结果`hello vue`，表示`vm.message`和视图中`{{message}}`是绑定的。

绑定用户输入的数据，视图会随着用户的输入而变化❤️

```
<div id="app">
 <h1>dadaqianduan is {{message}}</h1>
 
 <input type="text" v-model="message">
</div>
```

`vm.message`的值会随着用户在`input`中输入的值的变化而变化，而无需我们手动去获取`DOM`元素的值再同步到`js`中。

> 特点:组件化

可以自己定义`html`标签，在模板中使用它

示例：

```
<div id="app">
 <message content="dadaqianduan"></message>
</div>

<script type="text/javascript">
 var Message = Vue.extend({
  props: ['content'],
  template: '<h1>{{content}}</h1>'
 })
 
 Vue.component('message', Message);
 
 var vm = new Vue({
  el: '#app',
 })
</script>
```

命令行工具：

```
$npm install --global vue-cli

$vue init webpack my-project

$cd my-project

$npm install

$npm run dev
```

### Vue实例

`vue.js`的使用是通过构造函数`Vue({option})`创建一个`vue`的实例：`var vm = new Vue({})`。

一个`Vue`实例相当于一个`MVVM`模式中的`ViewModel`，做图如下：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd0fc9cd61844e55b76a90f3b0bd6395~tplv-k3u1fbpfcp-watermark.image)

在实例化的时候，可以传入**一个选项对象（数据，模板，挂载元素，方法，生命周期钩子）** 等。

### 模板

`el`类型是字符串，`DOM`元素或者是函数，作用是为**实例提供挂载元素**。一般来说我们会使用`css`选择符，或是原生的`DOM`元素。

如：`el:'#app'`，指定了`el`，实例将立即进入编译过程。

`template`类型为字符串，默认会将`template`值替换挂载元素，`el`值对应的元素，合并挂载元素和模板根节点的属性。

### 数据

`vue`实例中可以通过`data`属性定义数据，这些数据可以在实例对应的模板中进行绑定并使用。

示例：

```
var data = {a:1}


var vm = new Vue({
 data: data
})

vm.$data === data // true
vm.a === data.a // true

vm.a = 2
data.a // 2

data.a = 3
vm.a // 3
```

在模板中使用`{{a}}`就会输出`vm.a`的值，修改`vm.a`的值，模板中的值会随之改变，称为响应式数据。

组件类型的实例可以通过`props`获取数据，同`data`一样，也需要在初始化时预设好。

```
<my-component title="myTitle" content="myContent"></my-component>

var myComponent = Vue.component("my-component",{
 props: ['title','content'],
 template: '<h1>{{title}}</h1><p>{{content}}</p>'
})
```

### 方法

在`methods`对象中来定义方法，示例：

```
<button v-on:click="daBtn">dadaqianduan</button>

new Vue({
 el: '#app',
 data: {a:1},
 methods: {
  daBtn: function(){
   console.log(this.a);
  }
 }
});
```

### 生命周期

`beforeCreate`，在实例开始初始化时同步调用，此时数据观测，事件等都尚未初始化。

`created`，在实例创建之后调用，此时已完成数据绑定，事件方法，但尚未开始`DOM`编译，即是未挂载到`document`中。

`beforeMount`，在`mounted`之前运行。

`mounted`，在编译结束时调用，此时所有指令已生效，数据变化已能触发`DOM`更新，但不保证`$el`已插入文档。

`beforeDestroy`，在开始销毁实例时调用。

`destroyed`，在实例被销毁之后调用，此时所有绑定和实例指令都已经解绑，子实例也被销毁。

`updated`，在实例挂载之后，再次更新实例并更新完`DOM`结构后调用。

`activated`，需要配合动态组件`keep-live`属性使用，在动态组件初始化渲染的过程中调用该方法。

### 文本插值

数据绑定基础形式是文本插值，使用`{{}}`，为`Mustache`语法：

```
<span>hello {{name}}</span>
```

单次插值：

```
<span v-once>{{name}}</span>
```

### HTML属性

示例：

```
<div v-bind:id="'id-'+id"/></div>

<div :id="'id-'+id"></div>
```

### 绑定表达式

放在`Mustache`标签内的文本内容称为绑定表达式。每个绑定中只能包含单个表达式，并不支持`JavaScript`语句，不支持正则表达式。

### 过滤器

`vue`允许在表达式后添加可选的过滤器，以管道符 `"|"`指示，可以有多个过滤器链式使用：

```
{{time | paramsTime}}
```

### 计算属性

```
var vm = new Vue({
 el: '#app',
 data: {
  firstName: 'da',
  lastName: '哪吒',
 }
 computed: {
  fullName: function() {
   // this 指向vm实例
   return this.firstName + ' ' + this.lastName
  }
 }
});

<p>{{firstName}}</p><p>{{lastName}}</p><p>{{fullName}}</p>
```

### Setter

示例：

```
var vm = new Vue({
 el: '#el',
 data: {
  num: 100,
 }
 computed: {
  price: {
   set: function(newValue){
    this.num = newValue * 100;
   },
   get: function() {
    return (this.num/100).toFixed(2);
   }
  }
 }
});
```

### 表单控件

输入框示例：

```
<input type="text" v-model="message"/>

<span>dadaqianduan {{message}}</span>
```

单选框示例：

```
<label><input type="radio" value="male" v-model="gender"> 男 </label>
<label><input type="radio" value="famale" v-model="gender"> 女 </label>

<p>{{gender}}</p>
```

`checkbox`复选框，单个勾选框和多个勾选框

```
<input type="checkbox" v-model="checked"/>

<span>dadaqianduan{{checked}}</span>
```

多个勾选框，`v-model`使用相同的属性名称，且属性为数组：

```
<label><input type="checkbox" value="1" v-model="multiChecked">1</lable>
<label><input type="checkbox" value="2" v-model="multiChecked">2</lable>
<label><input type="checkbox" value="3" v-model="multiChecked">3</lable>
<p>{{multiChecked.join('|')}}</p>
```

`select`:

单选：

```
<select v-model="selected">
 <option selected>A</option>
 <option>B</option>
 <option>C</option>
</select>
<span>dadaqianduan: {{selected}}</span>
```

多选：

```
<select v-model="multiSelected" multiple>
 <option selected>A</option>
 <option>B</option>
 <option>C</option>
</select>
<span>dadaqianduan: {{multiSelected.join('|')}}</span>
```

### 绑定value

表单控件的值同样可以绑定在`vue`实例的动态属性上。

```
// checkbox
<input type="checkbox" v-model="checked" v-bind:true-value="a" v-bind:false-value="b">
```

```
选中：vm.checked==vm.a

未选中：vm.hchecked==vm.b
```

### class与style绑定

`class`属性，绑定的数据可以是对象和数组

```
<div class="da" v-bind:class="{'active':active, 'unactive':!active}"></div>

vm实例中需要包含：
data: {
 active: true
}
```

渲染结果：`<div class="tab active"></div>`

数组语法

```
<div v-bind:class="[classA, classB]"></div>

data: {
 classA: 'class-a',
 classB: 'class-b',
}
```

渲染结果：`<div class="class-a class-b'></div>

### 内联样式绑定

1. 对象语法：直接绑定符合样式格式的对象

```
<div v-bind:style="dada"></div>

data: {
 dada: {
  color: 'green',
  fontSize: '10px'
 }
}
```

```
<div v-bind:style="{ fontSize: color: 'green' }"></div>
```

2. 数组语法：`v-bind:style`允许将多个样式对象绑定到统一元素上。

```
<div v-bind:style="[ styleObjectA, styleObjectB ]"></div>
```

### 模板渲染

前端渲染的优点：

第一，业务分离，后端只需要提供接口，前端在开发时也不需要部署对应得后端环境，通过一些代理服务器工具就能远程获取后端数据进行开发，能够提升开发效率。

第二，计算量得转移，原本需要后端渲染得任务交给了前端，减轻了服务器得压力。

后端渲染的优点：

第一，对搜索引擎比较友好。

第二，首页加载时间端，后端渲染加载完成后就直接显示`html`，但前端渲染在加载完成后还需要有段`js`渲染的时间。

### 条件渲染

`v-if`和`v-else`的作用是根据数据值来判断是否输出该`DOM`元素，以及包含的子元素。

`v-else`必须紧跟`v-if`，不然该指令不起作用。

`v-show`元素的使用会渲染并保存在`DOM`中。只是切换元素的`css`属性`display`。

`v-if`和`v-show`的条件发生变化时，`v-if`引起了`dom`操作级别的变化，而`v-show`仅仅发生了样式的变化，从切换的角度来说，`v-show`消耗的性能要比`v-if`小。

`v-if`切换时，`vue.js`会有一个局部编译/卸载的过程，因为 `v-if` 中的模板也可能包括数据绑定或子组件。`v-if` 会确保条件块在切换当中适当地销毁与中间内部的事件监听器和子组件。

`v-if` 是惰性的，如果在初始条件为假时，`v-if` 本身什么都不会做，而`v-show` 则仍会进行正常的操作，然后把 `css` 样式设置为 `display:none`。

> `v-if` 有更高的切换消耗而 `v-show` 有更高的初始渲染消耗

### 列表渲染

示例：

```
<ul>
<li v-for="item in items">
　　 <h3>{{item.web}}</h3>
　　 <p>{{item.da}}</p>
 </li>
</ul>
var vm = new Vue({
el : '#app',
 data: {
　　 items : [
　　　 { title : 'web-1', description : 'da-1'},
　　　 { title : 'web-2', description : 'da-2'},
　　　 { title : 'web-3', description : 'da-3'},
　　　 { title : 'web-4', description : 'da-4'}
　　 ]
 }
});
```

`v-for` 内置了 `$index` 变量，输出当前数组元素的索引，也可以自己指定索引的别名。`<li v-for="(index,item) in items">{{index}} – 
{{$index}} – {{item.title}}</li>`

在`vue.js`中提供了`$set`方法，修改数据的同时进行试图更新。

```
vm.$set('item[0]', {title: 'da'})
```

### 修饰符

`.stop`: 等同于调用 `event. stopPropagation()。`

`.prevent`: 等同于调用 `event.preventDefault()。`

`.capture`: 使用 `capture` 模式添加事件监听器。
`.self`: 只当事件是从监听元素本身触发时才触发回调。

示例：

```
<form v-on:submit.prevent="onSubmit"></form> // 阻止表单默认提交事件

<form v-on:submit.stop.prevent="onSubmit"></form> // 阻止默认提交事件且阻止冒泡

<form v-on:submit.stop.prevent></form> // 也可以只有修饰符，并不绑定事件
```

### Vue.extend()

`Vue.js` 提供了 `Vue.extend(options)` 方法，创建基础 `Vue` 构造器的“子类”

```
Vue.component('child', Child) // 全局注册子组件
<child ….></child> // 子组件在其他组件内的调用方式

var Child = Vue.extend({
template : '#child',
data : function() {
　　 return {
　　　 ….
　　 }
 }
….
})
```

### 内置指令

`v-bind`用于动态绑定`DOM`元素属性`attribute`，元素属性实际的值是由`vm`实例中的`data`属性提供的。

```
<img v-bind:src="avatar"/>
new Vue({
 data: {
  avatar: 'http://'
 }
})
```

`v-text` 需要绑定在某个元素上，能避免未编译前的闪现问题。

`v-ref`作用于子组件上，实例可以通过`$refs`访问子组件。

示例：

```
<message v-re:title content="title"></message>
<message v-ref:sub-title content="subTitle"></message>

var Message = Vue.extend({
 props: ['content'],
 template: '<h1>{{content}}</h1>'
});
Vue.component('message', Message);
```

`v-pre`指令，表示跳过编译这个元素和子元素，显示原始的`{{}}Mustache`标签，用来减少编译时间。

`v-clock`指令相当于在元素上添加一个`[v-cloak]`的属性，直到关联的实例结束编译。可以和`css`规则`[v-cloak]{display:none}`一起使用，可以隐藏未编译的`Mustache`标签直到实例准备完毕。

```
<div v-cloak>{{msg}}</div>
```

`v-once`指令是用于标明元素或 组件只渲染一次，即使随后发生绑定数据的变化或更新，该元素或组件以及包含的子元素都不会再次被编译和渲染。

### 自定义指令

通过`Vue.directive(id,definition)`方法注册一个全局自定义指令，接收参数`id`和定义对象。`id`是指令的唯一标识，定义对象就是指令的相关属性以及钩子函数。

`Vue.directive('global-directive', definition)`

```
<div v-global-directive></div>
```

局部注册：

```
var com = Vue.extend({
 directives: {
  'localDirective': {}
 }
});
```

### 指令实例属性

1. `el`指令绑定的元素
2. `vm`，该指令的上下文`ViewModel`，可以为`new Vue()`的实例，也可以为组件实例。
3. `expression`，指令的表达式，不包括参数和过滤器
4. `arg`，指令的参数
5. `name`，指令的名字
6. `modifiers`，一个对象，包含指令的修饰符
7. `descriptor`，一个对象，包含指令的解析结果

### 过滤器

`vue.js`可以在表达式后面添加可选的过滤器，以管道符表示：

```
{{time | paramsTime }}
```

> 过滤器的本质是一个函数，接受管道符前面的值作为初始值，同时也能接受额外的参数，返回值为经过处理后的输出值。

```
Vue.filter('date', function(value){
 if(!value instanceof Date) return value;
 return value.toLocalDateString();
})

</div>
 {{ date | date }}
</div>
var vm = new Vue({
 el: '#app',
 data: {
  date: new Date()
 }
})
```

### 组件注册

示例：

```
var MyComponent = Vue.extend({...})
```

`vue.js`提供了两种注册方式，分别是全局注册和局部注册。

```
Vue.component('my-component', MyComponent);
```

使用方法：

```
<div id="app">
 <my-component></my-component>
</div>

var MyComponent = Vue.extend({
template : '<p>掘金 魔王哪吒</p>'
})

Vue.component('my-component', MyComponent)
var vm = new Vue({
el : '#app'
});
```

局部注册

```
var Child = Vue.extend({
template : '<p>dadaqianduan.cn</p>'
});

var Parent = Vue.extend({
template: '<div> 
　　 <p>dada</p>
　　 <my-child></my-child>
　　 </div>',
 components: {
　　 'my-child': Child
 }
});
```

> 注册语法糖

示例：

```
// 全局注册
Vue.component('my-component', {
template : '<p>dadaqianduan.cn</p>'
})

// 局部注册
var Parent = Vue.extend({
template: '<div>
　　　 <p>掘金 魔王哪吒</p> 
　　　 <my-child></my-child>
　　 </div>',
 components: {
　　 'my-child': {
　　　　template : '<p>dada</p>'
　　 }
 }
});
```

### 组件`props`

`props`将父组件的数据传递给子组件，子组件在接受数据时，需要显示声明`props`。

示例：

```
Vue.component('my-child', {
props : ['parent'],
template: '<p>{{ parent }} is from parent'
})
<my-child parent="魔王哪吒"></my-child>
```

`prop: Number`，接受的参数为原生构造器，`String,Number,Boolean,Function,Object,Array`，也可接受`null`，意味任意类型均可。

多种类型：`prop: [Number,String],`；参数必需：`prop:{type: Number, required: true}`。

参数默认：`prop: {type: Number, default: 12},`

示例：

```
prop: {
 type: Object,
 default: function() {
  return {a: 'a'}
 }
}
```

### 组件间通信

`vue.js`提供了三个属性对其父子组件以及根实例进行直接访问。

- `$parent`，父组件实例
- `$children`，包含所有子组件实例
- `$root`，组件所在的根实例

建议使用`props`在组件间传递数据。

### `$emit`

示例：

```
events : {
'add' : function(msg) {
　　 this.todo.push(msg);
 }
}
methods: {
onClick : function() {
　　 this.$emit('add', 'dada');
 }
}
```

### `$dispatch`

示例：

```
父组件：

events : {
'add' : function(msg) {
　　 this.todo.push(msg);
 }
}

子组件：

methods: {
toParent : function() {
　　 this.$dispatch('add', 'dada');
 }
}
```

### 子组件索引

`vue.js`提供了直接访问子组件的方式，除了`this.children`外，还给子组件绑定一个`v-ref`指令。

```
<child-todo v-ref:first></child-todo>
```

在父组件中就可以通过 `this.$refs.first` 的方式获取子组件实例。

### 组件缓存

`keep-alive`如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。

```
<keep-alive>
 <component :id="currentView">
 </component>
</keep-alive>
```

### 生命周期：

```
// 组件被创建之前
beforeCreate(){
 console.log("组件被创建之前")
}
created(){
 console.log("组件被创建之后")
}
beforeMount(){
 console.log("组件被渲染之前")
}
mounted(){
 console.log("组件被渲染之后")
}
beforeUpdate(){
 console.log("数据改变渲染之前")
}
updated() {
 console.log("数据改变渲染之后
}
beforeDestory(){
 // 组件销毁之前
}
destoryed(){
 // 销毁之后
}
```

### 自定义指令和过滤器

```
// 注册一个全局自定义指令
Vue.directive('focus', {
 inserted: function(el){
  // 聚焦元素
  el.focus()
 }
})
```

注册局部指令，组件中也接受一个`directives`的选项：

```
directives: {
 focus: {
  // 指令的定义
  inserted: function(el){
   el.focus();
  }
 }
}
```

过滤器

`vue.js`过滤器可以用在两个地方：**双花括号插值**和`v-bind`表达式。

```
{{message | capitalize}}

<div v-bind:id="rawId | formatId"></div>
```

可以在一个组件的选项中定义本地的过滤器：

```
filters: {
 capitalize: function(value) {
  if(!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1);
 }
}
```

```
Vue.filter("author",function(value){
 return value+"-dadaqianduan";
})

Vue.filter("money", function(value){
 return "$"+value;
})
```

### axios基础get请求

> axios是一个基于promise的HTTP库，可以用在浏览器和node.js中。

特点：

1. 从浏览器中创建`XMLHttpRequests`
2. 从`node.js`创建`http`请求
3. 支持`Promise api`
4. 拦截请求和响应
5. 转换请求数据和响应数据
6. 取消请求
7. 自动转换`JSON`数据
8. 客户端支持防御`XSRF`

安装：

使用`npm`：

```
npm install axios
```

执行`GET`请求：

```
axios.get('/user?ID=123')
 .then(function(response){
  console.log(response);
 })
 .catch(function(error){
  console.log(error);
 });

axios.get('/user', {
 paras: {
  ID: 123
 }
})
.then(function(response){
 console.log(response);
})
.catch(function(error){
 console.log(error);
});
```

执行post请求

```
axios.post('/user', {
 firstName: 'da',
 lastName: 'jeskson'
})
.then(function(response){
 console.log(response);
})
.catch(function(error){
 console.log(error);
});
```

执行多个并发请求

```
function getUserAccount() {
 return axios.get('/user/123');
}
function getUserPermissions() {
 return axios.get('/user/123/permissions');
}
axios.all([getUserAccount(),getUserPermissions()])
.then(axios.spread(function(acct, perms){
}));
```

`axios api`: 可以通过向`axios`传递相关配置来创建请求

```
// axios（config）
axios({
 method: 'post',
 url: '/user/123',
 data: {
  firstName: 'dada',
  lastName: 'dadaqianduan'
 }
});
```

`axios(url[,config])`

```
// 发送get请求
axios('/user/123');
```

示例：

```
created(){
 this.$axios.get("http://xxx")
 .then(res=>{
  this.axiosData = res.data
 })
 .catch(error => {
  console.log(error);
 })
}
}
```

### `vue-axios`全局配置和拦截器

全局的`axios`默认值：

```
axios.defaults.baseURL='http://xxx';
```

自定义实例默认值：

```
// 创建实例时设置的默认值
var instance = axios.create({
 baseURL: 'http://xxx'
});
```

拦截器：在请求或响应被`then`或`catch`处理前拦截它们。

```
// 添加请求拦截器
axios.interceptors.request.use(function(config){
 // 在发送请求之前做些什么
 return config
 },function(error){
  // 对请求错误做些什么
 return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response){
 // 对响应数据做点什么
 return response;
 },function(errror){
 // 对响应错误做点什么
 return Promise.reject(error);
});
```

添加请求拦截器

```
Axios.interceptors.request.use(function(config){
 // 在发送请求之前做些什么
 if(config.method === 'post'){
  config.data = qs.stringify(config.data);
 }
 console.log(config);
 return config;
},function(error){
// 对请求错误做些什么
return Promise.reject(error);
});
```

### `vue-axios`跨域处理

```
proxy: {
 host: '127.0.0.1',
 port: 9000,
 auth: {
  username: 'jeskson',
  password: '123'
 }
}
```

### 路由基础

```
<div id="app">
 <router-view></router-view>
</div>

const User = {
 template: '<div>User</div>`
}

const router = new VueRouter({
 routes: {
  {path: '/user/:id', component: User}
 }
})
```

### `router-link`

`<router-link>`组件支持用户在具有路由功能的应用中导航，通过`to`属性指定目标地址，默认渲染成带有正确链接的`<a>`标签，可以通过配置`tag`属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的`css`类名。

`<router-link>`比起写`<a href="...">`会好一些。

1. 无论是`html5 history`模式还是`hash`模式，它的表现行为一致，所以，当你要切换路由模式，或者在`ie9`降级使用`hash`模式，无须作任何变动。
2. 在`html5 history`模式下，`router-link`会守卫点击事件，让浏览器不在重新加载页面。
3. 当你在`html5 history`模式下使用`base`选项之后，所有的`to`属性都不需要写基路径了。

> 路由嵌套

要在嵌套的出口中渲染组件，需要在`VueRouter`的参数中使用`children`配置：

```
const router = new VueRouter({
 routes: [
  {path: '/user/:id', component:User,
  children: [
   {
    path: 'profile',
    component: UserProfile
   },
   {
    path: 'posts',
    components: UserPosts
   }
 ]
})
```

路由参数传递：

```
<router-link :to="{name: 'dada', params: {id:'111', count: 12} }">魔王哪吒</router-link>
```

### vue框架对比

vue:

1. 模板和渲染函数的弹性选择
2. 简单的语法以及项目创建
3. 更快的渲染速度和更小的体积

react:

1. 更适用于大型应用和更好的可测试性
2. 同时适用于web端和原生app
3. 更大的生态圈带来的更多的支持和工具

### vue核心思想

数据驱动 和 组件化

### nodejs和npm的安装和环境搭建

1. `Webpack`代码模块化构建打包工具
2. `Gulp`基于流的自动化构建工具
3. `Grunt`是`JavaScript`世界的构建工具
4. `Babel`是使用最新的规范来编写`js`
5. `vue`是构建数据驱动的`web`界面的渐进式框架
6. `Express`是基于`Node.js`平台，快速，开放，极简的`web`开发框架

下载地址：https://nodejs.org/en/download/

### vue环境搭建以及vue-cli使用

`vue`多页面应用文件引用：

`<script src="https://unpkg.com/vue/dist/vue.js"></script>`

`vue-cli`构建`spa`应用

```
npm install -g vue-cli

vue init webpack-simple demo

vue init webpack demo2
```

```
a vue.js project

npm install

npm run dev

npm run build
```

### vue基础语法

模板语法：`Mustache`语法：`{{msg}}`

- `html`赋值：`v-html=""`
- 绑定属性：`v-bind:id=""`
- 使用表达式：`{{ok?'yes':'no'}}`
- 文本赋值：`v-text=""`
- 指令`v-if=""`
- 过滤器：`{{message | capitalize}}`

`class`和`style`绑定

- 对象语法：`v-bind:class="{active: isActive, 'text-danger': hasError}">`
- 数组语法：`<div v-bind:class="[activeClass,errorClass]">`
- `style`绑定对象语法：`v-bind:style="{color:activeColor,fontSize:fontSize+'px'}"`

> vue组件

1. 全局组件和局部组件
2. 父子组件通讯-数据传递
3. Slot

### Vue-router

什么是前端路由：就是根据不同的url地址展示不同的内容或页面

`vue-router`用来构建`spa`

```
<router-link></router-link>或者this.$router.push({path:''})

<router-view></router-view>
```

- 动态路由匹配
- 嵌套路由
- 编程式路由
- 命名路由和命名视图

> 什么是动态路由匹配

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d061277b716545dc8ecaea507c88a2ad~tplv-k3u1fbpfcp-watermark.image)

示例：

```
import GoodsList from './../views/GoodsList'
Vue.use(Router)
export default new Router({
 routers: [
  {
   path: '/goods/:goodsId',
   name: 'GoodsList',
   component: GoodsList
  }
 ]
})

<template>
 <div>
  <span>{{$route.params.goodsId}}</span>
 </div>
</template>
```

> 什么是嵌套路由

```
// App.vue
<template>
 <div id="app">
  <img src="./assets/logo.png">
  <router-view></router-view>
 </div>
</template>
```

```
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
Vue.use(Router)
export default new Router({
 routers: [
  {
   path: '/goods',
   name: 'GoodsList',
   component: GoodsList，
   children: [
    {
      path: 'title',
      name: 'title',
      component: Title
     },
     {
      path: 'img',
      name: 'img',
      component: Image
     }
   ]
  }
 ]
})

<template>
 <div>
  <span>{{$route.params.goodsId}}</span>
  
  <router-link to="/goods/title">显示商品标题</router-link>
  <router-link to="/goods/image">显示图片</router-link>
  
  <div>
   <router-view></router-view>
  </div>
 </div>
</template>
```

> 什么是编程式路由

通过js来实现页面的跳转。

```
$router.push("name")

$router.push({path:"name"})

$router.push({path:"name?a=123"})或者$router.push({path:"name",query:{a:123}})

$router.go(1)
```

```
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router)
export default new Router({
 routers: [
  {
   path: '/goods',
   name: 'GoodsList',
   component: GoodsList，
   children: [
    {
      path: 'title',
      name: 'title',
      component: Title
     },
     {
      path: 'img',
      name: 'img',
      component: Image
     }
   ]
  },
  {
   path: '/cart',
   component: Cart
  }
 ]
})

<template>
 <div>
  <span>{{$route.params.goodsId}}</span>
  
  <router-link to="/goods/title">显示商品标题</router-link>
  <router-link to="/goods/image">显示图片</router-link>
  
  <div>
   <router-view></router-view>
  </div>
  
  <router-link to="/cart">购物车</router-link>
  <button @click="jump">跳转购物车</button>
 </div>
</template>

...

methods: {
 jump() {
  this.$router.push("/cart");
  // ({path: '/cart?id=123'});
 }
}
```

### 命令路由和命名视图

给路由定义不同的名字，根据名字进行匹配

给不同的`router-view`定义名字，通过名字进行对应组件的渲染

```
<router-link v-bind:to="{name: 'cart'}">跳转到购物车页面</router-link>

<router-link v-bind:to="{name: 'cart', params:{cartId:123}}">跳转到购物车页面</router-link>

路由：
{
 path: '/cart/:cartId",
 name: 'cart',
 component: Cart
}
```

app.vue代码如下：

```
<template>
 <div id="app">
  <img src="./assets/logo.png">
  <router-view></router-view>
  <router-view name="title"></router-view>
  <router-view name="img"></router-view>
 </div>
</template>
```

router/index.js

```
import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router);

export default new Router({
 routers: {
  {
   path: '/',
   name: 'GoodsList',
   components: {
    default: GoodsList,
    title: Title,
    img: Image
   }
  },
  {
   path: '/cart/:cartId',
   name: 'cart',
   components: Cart
  }
 }
})
```

### Vue-resource和Axios

下载安装方式：

```
<script src="https://cdn.jsdelivr.net/vue.resource/1.3.1/vue-resource.min.js"></script>

npm install vue-ressource -save
```

`vue-resource`的请求`api`是按照`rest`风格设计的，提供7个请求api:

```
get(url, [options])

head(url, [options])

delete(url, [options])

jsonp(url, [options])

post(url, [body], [options])

put(url, [body], [options])

patch(url, [body], [option])
```

全局拦截器`interceptors`

```
Vue.http.interceptors.push{(request, next) => {
 // 请求发送前的处理逻辑
 next((response) => {
  // 请求发送后的处理逻辑
  return response
 })
})
```

vue-resource.html（全局拦截器）

```
mounted() {
 Vue.http.interceptors.push(function(request,next){
  next(function(response){
   return response;
  });
 });
}
```

axios的使用

```
<script src="https://unpkg.com/axios/dist/aios.min.js"></script>

npm install axios -save
```

示例：

```
function getUserAccount(){
 return axios.get('/user/12345');
}

function getUserPermissions(){
 return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function(acct, perms){

}));
```

```
mounted: function(){
 axios.interceptors.request.use(function(config){
  return config;
 })
 axios.interceptors.response.use(function(response){
  return response;
 })
}
```

### ES6常用命令

函数的Rest参数和扩展，Promise使用，`module.exports`和`es6 import/export`的使用

```
let checkLogin = function () {
 return new Promise(function(resolve,reject){
  let flag = document.cookie.indexOf("userId") > -1 ? true:false
  
  if(flag) {
   resolve({
    status: 0,
    result: true
   })
  }else{
   reject("error");
  }
 })
};

checkLogin().then(function(res){
if(res.status==0){
 console.log("login success");
}
}).catch((error)=>{
 console.log(`error:${error}`);
})
```

一旦有了名字就要大块来接收

```
export let sum = (x,y)=>{
 return x+y;
}

export let minus  = (m,n) => {
 return m-n;
}

import {sum, minus} from './util'
sum()

console.log(`sum:${sum(1,2)}`);
```

```
import * as util from './util'

// util.sum(1,2)
```

### AMD,CMD,CommonJS和ES6

- `AMD`是`RequireJS`在推广过程中对模块定义的规范化产出
- `CMD`是`SeaJS`在推广过程中对模块定义的规范化产出
- `CommonJS`规范-`module.exports`

示例：

```
exports.area = function(r){
 return Math.PI * r * r;
};
```

### 脚手架

Vue基础：环境搭建，模板，计算属性，类与样式，条件，列表渲染，事件处理，深入了解组件，路由基础，Vuex基础。

```
vue-cli@3
vue@2.5

// 第一种搭建
npm install -g @vue/cli

// 第二种搭建
yarn global add @vue/cli
```

### v-bind缩写

```
// 完整语法
<a v-bind:href="url">...</a>

// 缩写
<a :href="url">...</a>
```

### v-on缩写

```
// 完整语法
<a v-on:click="doSomething">...</a>

// 缩写
<a @click="doSomething>...</a>
```

### 自定义指令

声明自定义指令的名称，通过`vue.directive`声明，设置钩子函数，在什么时机做什么事情：

```
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
 // 当被绑定的元素插入到DOM中时
 inserted: function(el){
  // 聚焦元素
  el.focus()
 }
})
```

> 钩子函数

一个指令定义对象可以提供如下几个钩子函数：

（初始化的操作）
`bind`，只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置。

`inserted`，被绑定元素插入父节点时调用，（仅保证父节点存在，但不一定已被插入文档中）。

`update`，所在组件的`VNode`更新时调用，但是可能发生在其子`VNode`更新之前。指令的值可能发生了改变，也可能没有，但是你可以通过比较更新前后的值来忽略不必要的模板更新。

`componentUpdated`，指令所在组件的`VNode`及其子`VNode`全部更新后调用。

`unbind`，只调用一次，指令与元素解绑时调用。

> 指令钩子函数会被传入以下参数

`el`，指令所绑定的元素，可以用来直接操作`DOM`。

`binding`，一个对象，包含以下属性：

1. `name`，指令名，不包含`v-`前缀

2. `value`，指令的绑定值，例如，`v-my-directive="1+1"`中，绑定值为2

3. `oldValue`，指令绑定的前一个值，仅在`update`和`componentUpdated`钩子中可用，无论值是否改变都可用。

4. `expression`，字符串形式的指令表达式，例如`v-my-directive="1+"`中，表达式为`"1+1"`

5. `arg`，传给指令的参数，可选。例如`v-my-directive:foo`中，参数为`"foo"`

6. `modifiers`，一个包含修饰符的对象，例如：`v-my-directive.foo.bar`中，修饰符对象为`{foo:true,bar:true}`

7. `vnode`，`vue`编译生成的虚拟节点。

8. `oldVnode`，上一个虚拟节点，仅在`update`和`componentUpdated`钩子中可用。

> 除了`el`外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的`dataset`来进行。

### 计算属性

示例：

```
<div id="jeskson">
 <p>{{message}}</p>
 <p>{{reversedMessage}}</p>
</div>
```

应用场景：具有依赖关系的数据监听。

### 事件

- 事件的定义以及缩写
- 事件传参和事件对象
- 快速结合键盘事件提升效率

> 事件修饰符

在事件处理程序中调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求。

`vue.js`为`v-on`提供了事件修饰符：

```
.stop

.prevent

.capture

.self

.once

.passive
```

### 深入了解组件

`props`， 组件的参数传递；`slot`，插槽在组件抽象设计中的应用；自定义事件，父子组件的通信方式。

### 生命周期钩子

1. `beforeCreate`组件创建前
2. `created`组件创建前
3. `beforeMount`组件挂载前
4. `mounted`组件挂载完毕
5. `beforeUpdate`组件更新之前
6. `updated`组件更新完毕
7. `beforeDestory`组件销毁前
8. `destory`组件销毁完毕

示例：

```
<div id="app">
 <h1>{{dada}}</h1>
 <button v-on:click="updateInfo">修改数据</button>
 <button v-on:click="destoryComponent">销毁组件</button>
</div>

var vm = new Vue({
 el: '#app',
 data: {
  info: 'dadaqianduan.cn‘
 },
 beforeCreate: function(){
  console.log("beforeCreated，组件创建前");
  console.log(this.$el);
  console.log(this.$data);
 },
 created: function(){
  console.log("created，组件创建完毕");
  console.log(this.$el);
  console.log(this.$data);
  console.log(this.$data.info);
 },
 beforeMount: function() {
  console.log("beforeMounted，组件挂载前");
  console.log(this.$el);
  console.log(this.$data);
  console.log(this.$data.info);
 },
 mounted: function(){
  console.log("mounted，组件挂载完毕");
  console.log(this.$el);
  console.log(this.$data);
  console.log(this.$data.info);
 },
 beforeUpdate: function(){
  console.log("beforeUpdate，组件更新前");
  console.log(this.$el);
  console.log(this.$data);
  console.log(this.$data.info);
 },
 updated: function(){
  console.log("updated，组件更新完毕");
  console.log(this.$el);
  console.log(this.$data);
  console.log(this.$data.info);
 },
 beforeDestroy: function(){
  console.log("beforeDestory，组件销毁前");
  console.log(this.$el);
  console.log(this.$data);
  console.log(this.$data.info);
 },
 destroyed: function(){
  console.log("destoryed，组件销毁完毕");
  console.log(this.$el);
  console.log(this.$data);
  console.log(this.$data.info);
 },
})
```

> 组件创建前-beforeCreate：组件创建前，组件需要挂载的DOM元素el和组件的数据data都未被创建。

```
el: undefined

data: undefined
```

> 组件创建完毕-created：组件的数据已经创建完毕，但是DOM元素的el还没被创建

```
el: undefined

data: {info: 'dadaqianduan.cn’}
```

> 组件挂载前-beforeMount：DOM元素被创建，而data中的数据还没有

```
el有值，data有值，info没值
```

> 组件挂载完毕-mounted：data中的数据有值。`el,data,info`都有值。

> 组件更新前-beforeUpdate：data数据已经更新，dom元素的内容也同步更新。

> 组件更新完毕-updated：data数据已经更新，dom元素的内容也同步更新。

> 组件销毁之前-beforeDestroy：销毁前，不再受`vue`管理，但是可以继续更新数据，但模板已经不再更新了。

> 组件销毁之前-destroyed：组件销毁完毕，不再受`vue`管理。

### 生命周期阶段

1. `new Vue()`，新建`vue`实例

2. 初始化，事件和生命周期

3. `beforeCreate`

4. 初始化，注入和校验

5. `created`

6. 是否指定`el`选项，是直接走判断（是否指定`template`选项），否-当调用`vm.$mount(el)`函数时（是否指定`template`选项）

7. 是否指定`template`选项-（是：将`template`编译到`render`函数中，否：将`el`外部的`html`作为`template`编译）

8. `beforeMount`

9. 创建`vm.$el`并用其替换`el`

10. `mounted`

11. 挂载完毕（如当`data`被修改时，调用`beforeUpdate`-，进入虚拟`DOM`重新渲染并应用更新，调用`updated`。

12. 当调用`vm.$destroy()`函数时。

13. `beforeDestroy`

14. 解除绑定，销毁子组件以及事件监听器

15.销毁完毕-`destroyed`

### 父子组件通信

父组件可以通过`props`传递给子组件，子组件可以通过`$parent,$emit`传递父组件。

```
// 组件引用
<dada></dada>

// 引入
import Dada from './components/Dada'
export default {
 name: 'App',
 // 注册
 components: {Dada}
}
```

流程：引入，注册，使用。

> `props`

示例：

```
Vue.component('da-da', {
 props: ['textTitle'],
 template: '<h2>{{textTitle}}</h2>'
})

// 使用
<da-da text-title="dadaqianduan.cn"></da-da>
```

`prop`类型如下：

```
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise
}
```

> 传递静态或动态prop

```
<da-da title="dadaqianduan.cn"></da-da>
```

`prop`可以通过`v-bind`动态赋值：

```
// 动态赋值
<da-da v-bind:title="dada.title"></da-da>

<da-da
 v-bind:title="dada.title+'da da'+dada.author.name">
</da-da>
```

父组件`prop`的更新会向下流动到子组件中，但是反过来则不行，这样会防止从子组件意外变更父级组件的状态，表示你不应该在一个子组件内部改变`prop`，否则`vue`会在浏览器的控制台中发出警告。

> 这个 `prop` 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 `prop` 数据来使用。在这种情况下，最好定义一个本地的 `data property` 并将这个 `prop` 用作其初始值

示例： 

```
props: ['dada'],
data: function () {
  return {
    counter: this.dada
  }
}
```

> 以一种原始的值传入且需要进行转换。

示例：

```
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

`prop`验证

示例：

```
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
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
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

> 类型检查

`type`可以是下列原生构造函数中的一个：通过 `instanceof` 来进行检查确认。

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

> `$emit`

子组件通过`$emit`向父组件传递通信。

```
vm.$emit(eventName,[...args])

参数：
1. {string} eventName
2. [...args]

触发当前实例上的事件，附加参数都会传给监听器回调。
```

子组件中执行`$emit(eventName)`时，就会触发父组件中对应的`event。`

> '$parent`:`$parent`是`vue`的一个实例属性，它表示的是当前组件的父实例

假如父组件中有一个方法为`sayDa`，在子组件中可以直接使用`this.$parent.sayDa`去调用父组件的方法。

### Vuex项目实战

1. Vuex的基本使用步骤
2. Vuex的核心概念
3. Vuex实现业务功能

> Vuex概述

组件之间共享数据的方式

如果父组件要向子组件传值，使用v-bind属性绑定

如果子组件要向父组件传值，使用v-on事件绑定

兄弟组件之间共享数据：`EventBus`

- `$on`接收数据的那个组件
- `$emit`发送数据的那个组件

> Vuex是什么

vuex是实现组件全局状态数据管理的一种机制，可以方便的实现组件之间数据的共享。

> 使用vuex统一管理状态的好处

1.能够在vuex中集中管理共享的数据，易于开发和后期维护

2.能够高效地实现组件之间的数据共享，提高开发效率

3.存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

> 什么样的数据可以存储到vuex中

一般情况下，只有组件之间共享的数据，才有必要存储到vuex中，对于组件中私有的数据，存储在组件自身的data中。

### vue的基本使用

1. 安装vuex依赖包

```
npm install vuex --save
```

2. 导入vuex包

```
import Vuex from 'vuex'
Vue.use(Vuex)
```

3. 创建store对象

```
const store = new Vuex.Store({
 // state中存放的是全局共享的数据
 state: {count:0}
})
```

4. 将store对象挂载到vue实例中

```
new Vue({
 el: '#app',
 render: h=>h(app),
 router,
 // 将创建的共享数据对象，挂载到Vue实例中
 // 所有的组件，就可以直接从store中获取全局的数据
 store
})
```

### vuex的核心概念

组件访问state中数据的第一种方式：

```
this.$store.state.全局数据名称
```

组件访问state中的数据第二种方式：

```
// 从vuex中按需导入mapState函数
import {mapState} from 'vuex'
```

通过刚导入的`mapState`函数，将当前组件需要的全局数据，映射为当前组件的`computed`计算属性：

```
// 将全局数据，映射为当前组件的计算属性
computed: {
 ...mapState(['count'])
}
```

> `Mutation`用于修改store的数据

1. 只能通过`mutation`变更`Store`数据，不可以直接操作`Store`中的数据。
2. 通过这种方式虽然操作起稍微繁琐一些，但是可以集中监控所有数据的变化。

```
// 定义Mutation

const store = new Vue.store({
 state: {
  count: 0
 },
 mutations: {
  add(state) {
   // 变更状态
   state.count++
  }
 }
})
```

```
// 触发mutation

methods: {
 handle1() {
  // 触发mutations的第一种方式
  this.$store.commit('add')
 }
}
```

可以在触发`mutations`时传递参数：

```
// 定义Mutation
const store = new Vuex.Store({
 state: {
  count: 0
 },
 mutations: {
  addN(state,step){
   // 变更状态
   state.count += step
  }
 }
})
```

```
// 触发mutation
methods: {
 handle2() {
  // 在调用commit函数
  // 触发mutations 时携带参数
  this.$store.commit('addN',1)
 }
}
```

> `this.$store.commit()`是触发`mutations`的第一种方式，第二种如下：

```
// 从vuex中按需导入mapMutations函数
import {mapMutations} from 'vuex'
```

将需要的`mutations`函数，映射为当前组件的`methods`方法：

```
methods: {
 ...mapMutations(['add','addN'])
}
```

> 不要在mutations函数中，执行异步操作

Action 用于处理异步任务。

如果通过异步操作变更数据，必须通过Action，而不能使用Mutation，但是在Action中还是通过触发Mutation的方式间接变更数据。

```
// 定义Action
const store = new Vuex.store({
 mutations: {
  add(state){
   state.count();
  }
 },
 actions: {
  addAsync(context){
   setTimeout(()=>{
    context.commit('add')
   },1000)
  }
 }
```

```
// 触发Action
mothods: {
 handle() {
  // 触发actions的第一种方式
  this.$store.dispatch('addAsync');
 }
}
```

触发action异步任务时携带参数：

```
this.$store.dispatch('addNAsync',5)
```

触发actions的第二种方式：

```
// 从vuex中按需导入mapActions函数
import {mapActions} from 'vuex'
```

将需要的actions函数，映射为当前组件的methods方法：

```
methods: {
 ...mapActions(['addAsync','addNASync'])
}
```

```
import {mapState,mapMutations,mapActions} from 'vuex
computed: {
 ...mapState(['count'])
},
methods: {
 ...mapMutations(['sub','subN']),
 ...mapActions(['subAsync']),
 btnHandler1(){
  this.sub()
 },
 btnHandle2(){
  this.subN()
 }
}
```

### getter

vuex中的getter

> Getter用于对Store中的数据进行加工处理形成新的数据

1. Getter可以对Store中已有的数据加工处理后形成新的数据。
2. Store中数据发生变化，Getter的数据会跟着改变

```
const store = new Vuex.store({
 state: {
  count: 0
 },
 getters: {
  showNum: state => {
   return state.count
  }
 }
})
```

使用getters的第一种方式：

```
this.$store.getters.名称
```

使用getters的第二种方式：

```
import { mapGetters } from 'vuex'

computed: {
 ...mapGetters(['showNum'])
}
```

## 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

## 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
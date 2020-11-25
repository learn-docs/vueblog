## 前沿

置身世外只为暗中观察！！！Hello大家好，我是魔王哪吒！重学巩固你的Vuejs知识体系，如果有哪些知识点遗漏，还望在评论中说明，让我可以及时更新本篇内容知识体系。欢迎点赞收藏！

### 生命周期

首先：`new Vue()`,`new`一个`Vue`的实例，`Observe data`数据查看，`init Events`绑定事件，`created`执行`created`方法，判断是否有`el`属性，如果没有，`vm.$mount(el)`表示处于未挂载状态，可以手动调用这个方法来挂载。判断是否有`template`属性。

如果有`el`属性，判断是否有`template`属性。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4fa7175f5444986907e3891b49609b5~tplv-k3u1fbpfcp-zoom-1.image)

实例化期和加载期
创建期间的生命周期函数：`beforeCreate` 和 `created`，`beforeMount` 和 `mounted`。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e01b308712e84a6ba97cf26a73500b75~tplv-k3u1fbpfcp-zoom-1.image)

`beforeCreate`在实例初始化后，数据观测`data observer`和`event/watcher`事件配置之前被调用。

更新期

运行期间的生命周期函数：`beforeUpdate` 和 `updated`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c09cf5e85be04dad9546d71d831da34a~tplv-k3u1fbpfcp-zoom-1.image)

`created`实例已经创建完成后被调用。

实例已完成以下的配置：数据观测`data observer`，属性和方法的运算，`watch/event`事件回调。

挂载阶段还没开始，`$el`属性目前不可见。

`beforeMount`在挂载开始之前被调用，相关的`render`函数首次被调用。`mounted`，`vm.$el`已经挂载在文档内，对已有`dom`节点的操作可以在期间进行。`beforeUpdate`数据更新时调用，发生在虚拟`dmo`重新渲染和打补丁之前。`updated`当这个钩子被调用时，组件`dom`已经更新，所以你现在可以执行依赖于`dom`的操作。`activated`，`deactivated`，`beforeDestroy`，`destroyed`。实例销毁之前调用，`vue`实例销毁后调用。

卸载期

销毁期间的生命周期函数：`beforeDestroy` 和 `destroyed`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9caad7a61c4c4c1c8ceff9cba6660bbd~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97f818b82c064dc0bdaaadb385c235c3~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9c6802ff17f4e13841d26156f67b661~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9a75fb65e99406dafa9342ba58adad4~tplv-k3u1fbpfcp-zoom-1.image)

对象的`Object.defindeProperty`中的访问器属性中的`get`和`set`方法

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c862c2abf0d04b5baf53dfbbe9cd3cff~tplv-k3u1fbpfcp-zoom-1.image)

- 把数据转化为`getter`和`setter`，建立`watcher`并收集依赖。

说明：

`watcher`通过回调函数更新`view`;`observer`观测`data`数据，通过`get`通知`dep`收集`watcher`，`dep`通过`notify()`通知`watcher`数据更新，`watcher`通过`addDep()`收集依赖。

`Observer`:用于监听劫持所有`data`属性，`dep,watcher,view`，`Compile`解析`el`模板中的指令。

依照下图（参考《深入浅出`vue.js`》）

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/639438e869bb47258bd7fd645860678d~tplv-k3u1fbpfcp-zoom-1.image)

首先从初始化`data`数据开始，使用`Observer`监听数据，个体每个数据属性添加`Dep`，并且在`Data`，有两个`getter`，`setter`。在它的`getter`过程添加收集依赖操作，在`setter`过程添加通知依赖的操作。

在解析指令或者给`vue`实例设置watch选项或者调用`$watch`时，生成对应的`watcher`并收集依赖。

`Data`通过`Observer`转换成了`getter/setter`的形式，来对数据追踪变化。

修改对象的值的时候，会触发对应的`setter`，`setter`通知之前依赖收集得到的 `Dep` 中的每一个`Watcher`，告诉它们值改变了，需要重新渲染视图。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d79d151046bf45379c085bdf49f37b1b~tplv-k3u1fbpfcp-zoom-1.image)

数据双向绑定原理

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4ae00644cc946a8bb51caffaa7fbf45~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c6c68a3b2ad49dea617d0d552805d70~tplv-k3u1fbpfcp-zoom-1.image)

webpack是前端模块化打包工具

安装webpack需要安装node.js,node.js自带有软件包管理工具npm

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b306da7bef02445cab4edc5de5037482~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd9060eac5954477961b1d7f0bea0af0~tplv-k3u1fbpfcp-zoom-1.image)

可以实现代码的转换，文件优化，代码分割，模块合并，自动刷新，代码校验，自动发布。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4bff93ba56b465088290edadb812f00~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f277e4163b4b4b688dfc24ae752ebe71~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/369417ab55ec4bbeb47c23706744331d~tplv-k3u1fbpfcp-zoom-1.image)

`spa`(`simple age web application`)->`vue-router`（前端路由）

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5cb17551c4a4413b1fedc2a82717c75~tplv-k3u1fbpfcp-zoom-1.image)

`.vue`文件封装处理

安装`vue-loader`和`vue-template-compiler`

```
npm install vue-loader vue-template-compiler --save-dev
```

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfd8f2adf0614c499d3a6c22e2f8e629~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c63de96028d842ecabd365e7f27baec7~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbd5204361324186ac09ceef75336301~tplv-k3u1fbpfcp-zoom-1.image)

查看`bundle.js`文件的头部：

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98ef405487fe454589c65b707421ce9e~tplv-k3u1fbpfcp-zoom-1.image)

### Vue Cli详解

什么是`vue cli`，`Command-Line Interface`，命令行界面，俗称脚手架，`vue cli`是一个官方发布的项目脚手架。使用`vue-cli`可以快速搭建`vue`开发环境以及对应的`webpack`配置。

`vue cli`的使用

安装`vue`脚手架

```
npm install -g @vue/cli
```

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7154eb8d5df944e7b30552cfa30d8cc4~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b1241e6260f4fd6a106a26f26f641be~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c79c7d5c7074b54abbb2114104a9bf4~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/157d5dc59233418a9d399f78a5fcdfcf~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c6343c01471448bba1ce7f99ef40556~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/630e955c4a904a66ae14fcbc9a8e49e4~tplv-k3u1fbpfcp-zoom-1.image)

前端模块化：

为什么使用模块化，简单写js代码带来的问题，闭包引起代码不可复用，自己实现了简单的模块化，`es`中模块化的使用：`export`和`import`。

```
npm install @vue/cli -g
```

```
npm clean cache -force
```

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fb77fbd358740afa47602595095d8a9~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b76ee08ffc04ef5bd25b902b317c096~tplv-k3u1fbpfcp-zoom-1.image)

`vue cli2`初始化：

```
vue init webpack my-project
```

`vue cli3`初始化项目：

```
vue create my-project
```

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f31a25dce8b4d94a6ae66842eb1708b~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b553ea06d4fd462faff1fc93cfc0a35e~tplv-k3u1fbpfcp-zoom-1.image)

`vue-router`前端路由原理：

前端路由主要模式：`hash`模式和`history`模式。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfe24aa1f875490dac59425cd524cc2c~tplv-k3u1fbpfcp-zoom-1.image)

路由的概念来源于服务端，在服务端中路由描述的是 URL 与处理函数之间的映射关系。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/226d2f178df3400da63c66d59d46a31c~tplv-k3u1fbpfcp-zoom-1.image)

> 前后端渲染之争

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da547deffb084a85866cff29fca4d1f6~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/098c3da97e7b4e039ac4a66d553d1ffe~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/402b9aadfcfe49b3a032ff6fd7f2f7b7~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/123aeee853f54f0db50a79ff55ab3350~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe16baa9800a4928a122f49805dcd4b2~tplv-k3u1fbpfcp-zoom-1.image)

#### url中的`hash`和`html5`的`history`

前端路由的核心是改变`url`，但是页面不进行整体的刷新。单页面，其实`spa`最重要的特点就是在前后端分离的基础上加了一层前端路由。就是前端来维护一套路由规则。

`url`的`hash`

`url`的`hash`是锚点`#`,本质上是改变`window.location`的`href`属性。直接赋值`location.hash`来改变`href`，但是页面不发生刷新。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f6558fdf69f468eb28651e3788a743b~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17331076c70e4da9a3a346e5b8f2e542~tplv-k3u1fbpfcp-zoom-1.image)

`html5`的`history`模式：`pushState`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ecb0f52b676438db32477ec39317cde~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/951331df7da8444d92b044cec1a60310~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19faaa6de7064cbdbfa16e9314f19fee~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba810a08703a4a69b88db405010697dd~tplv-k3u1fbpfcp-zoom-1.image)

`html5`的`history`模式：`replaceState`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/daf9a3f167504ad79a60e27d78ffaa83~tplv-k3u1fbpfcp-zoom-1.image)

`html5`的`history`模式：`go`

`history.go()`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72cd3731bb054955a70a467e4824f4b0~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f61e65d50dd48ffaa4c51bcf47c2e68~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4ef5d0c33b24118beba9e07b69ef986~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6bf5aa4e1104cb1b6f89309ea036409~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd654225fb744d979c168bc3b3141596~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0938b7e5ebde45f1ab6839ef05314c7c~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54a008e11c944f25b8cf3aed2f922ad9~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0197151c139544a8a20a4f2e18a10b0f~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9f0a6090c7a4cc2acd33caac49f9ec3~tplv-k3u1fbpfcp-zoom-1.image)

> 统一资源定位符

统一资源定位符，统一资源定位器，统一资源定位地址，Url地址等，网页地址。如同在网络上的门牌，是因特网上标准的资源的地址。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dc732ac7c1b432592514e21ca46003e~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b90cb68a7524567b70404fc8c210d4d~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4396c6ddc4984b3e80af06a0152c13bc~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8bb726939ee4d7b97b966ebadb32ed0~tplv-k3u1fbpfcp-zoom-1.image)

```
Vue.config.productionTip = false

Vue.prototype.test = function() {
    console.log('test')
}

Vue.prototype.name  = 'web'
```

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51eac8b817004c7dbb39d3dee05b0ed1~tplv-k3u1fbpfcp-zoom-1.image)

`$route`和`$router`是有区别的

1. `$router`为`VueRouter`实例，想要导航到不同`url`，则使用`$router.push`方法。
2. `$route`为当前`router`跳转对象里面可以获取`name`,`path`,`query`,`params`等。

`vue-router`全局导航

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2129d0bab8694a72adc0010aa0466e3b~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/618fd4902c6c4b0194d2d3c2264dee3d~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8499adb942ee483596672e547d829e08~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec277b17b5d44e7db33cc3d2714e8b57~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84e72a05033d4f2ab88481816850c8cb~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1b00f67f1bd4c39afa91106d53c9cce~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/685272cbfcb74d33ac520d6f3a8c59b1~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/719edffe2e6a4263850b439c5d8f9c9b~tplv-k3u1fbpfcp-zoom-1.image)

```
View components -> actions(dispatch方式) -> mutations(commit方式) -> state -> View components
```

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f97e369edcf042329e083339fec46f3d~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f491a28987c047359281604b0cccc3cd~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b4ce3bc0e114962845819e1cda7bbf7~tplv-k3u1fbpfcp-zoom-1.image)

`Vuex`核心概念5个：

`State`，`Getters`，`Mutation`，`Action`，`Module`

`State`单一状态树，单一数据源。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02f89b5f10554f52baa7d27f9a341875~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d37a6dc792854beead4f54e4af6134a1~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b7aa80eb3754a05b633ea2eaf120ecb~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f502f747767a419bab9114e128247ba2~tplv-k3u1fbpfcp-zoom-1.image)

参数被称为是`mutation`的载荷`payload`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8da5b5c0a2840bb8410c86708e2a534~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/208fd752ae7d4530b9313d0762103797~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/729685c1457e41f1ac5ec1c5ddb94ae0~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e095ed6737854c11a1bc505f24668d44~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee1c9ede09d74367a59fb90c0b6ed40e~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83918d36e9564d7e973684ca18f8466a~tplv-k3u1fbpfcp-zoom-1.image)

`actions`接收一个`context`参数对象，局部状态通过`context.state`暴露出来，根节点状态为`context.rootState`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eef40563a1574023b817e169742c635a~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22445ceb7ce8423ead128f465f44db55~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cfc38e0e07f481185b14cf69f871f5b~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7538718b81c54000a749526c641dbeb2~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44fdc0eb52794191ae1ca87a800b4700~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f75c52ec09754b08b3539c538a8e4413~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50266d72433f4d8e92a1a49e613e5d68~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04df18a2e9b147b6af49007fc204b61e~tplv-k3u1fbpfcp-zoom-1.image)

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

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c75741af84cf497da495753b65af579b~tplv-k3u1fbpfcp-zoom-1.image)

`windows`安装`nginx`，`linux`部署，`centos`上安装`nginx`

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1903f4d264e4d0f879e9ec206516926~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6bf82f2f3f549db9447366c14bb7e8b~tplv-k3u1fbpfcp-zoom-1.image)

`linux ubuntu`

`Ubuntu`是一个以桌面应用为主的`Linux`操作系统，其名称来自非洲南部祖鲁语或豪萨语的`“ubuntu"`一词。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f161252112964fbb9a2f0a5a3f65de3b~tplv-k3u1fbpfcp-zoom-1.image)

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4037684196984632b010f2981b14c4d0~tplv-k3u1fbpfcp-zoom-1.image)

操作系统：`Window10 + Centos6.5（虚拟机）`

```
yum install nginx
systemtl start nginx.service
systemctl enable nginx.service
```

通过Xftp将vue项目文件上传至云服务器

使用Xshell连接云服务器

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1450425d96904ca9a5e28da3b87d993f~tplv-k3u1fbpfcp-zoom-1.image)

主机就是阿里云上创建的实例的公网ip

输入登录名和密码，登录名就是购买服务器时输入的登录名和密码。

![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1c9eb88d31b493890dfcd0738cb5a2e~tplv-k3u1fbpfcp-zoom-1.image)

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

我是程序员哆啦A梦，蓝胖子，简书万粉优秀创作者，掘金优秀作者、CSDN博客专家，云+社区社区活跃作者，致力于打造一系列能够帮助程序员提高的优质文章。网站@http://www.dadaqianduan.cn
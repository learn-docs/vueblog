## 路由

### 背景介绍

vue router是vue.js官方的路由管理器，它和vue.js的核心深度集成，让构建单页面应用变得易如反掌，它的功能有：

嵌套的路由，或者是，视图表；模块化的，基于组件的路由配置；路由参数，查询，通配符，基于Vue.js过渡系统的视图过渡效果，细粒度的导航控制；带有自动激活的CSS class的链接，HTML5历史模式或者是hash模式，在IE9中自动降级；自定义的滚动条行为。

面试官提问，你能说出路由的概念吗？能说明一下vue-router的基本使用步骤吗？或者让你说出vue-router的嵌套路由用法怎么用？

再次询问你vue-router如何实现动态路由匹配用法呢？请说出vue-router命名路由用法？请说出vue-router编程式导航用法？

在实际业务中，去实现基于路由的方式。

### 快速入门

如何快速入门并掌握呢？了解路由的属性配置说明，如何页面跳转，如何子路由-路由嵌套，路由的传递参数，命名路由，命名视图，重定向，别名，过渡动画，mode与404，路由的钩子，路由的懒加载。

快速入门第一步安装，vue-router是一个插件包，需要用npm来安装。

    npm install vue-router --save

vue-cli构建项目。router/index.js中。

    // 引入vue
    import Vue from 'vue'
    // 引入vue-router路由依赖
    import Router from 'vue-router'
    // 引入页面组件，命名为HelloWorld
    import HelloWorld from '@/components/HelloWorld'

    // Vue全局使用Router
    Vue.use(Router)

    // 定义路由配置
    export default new Router({
    routes: [                //配置路由
        {                        
        path: '/',            //链接路径
        name: 'HelloWorld',        //路由名称
        component: HelloWorld     //对应组件模板
        }
    ]
    })

使用：main.js中

    // 引入vue
    import Vue from 'vue'
    // 引入根组件
    import App from './App'
    // 引入路由配置
    import router from './router'

    // 关闭生产模式下给出的提示
    Vue.config.productionTip = false

    // 定义实例
    new Vue({
    el: '#app',
    router, // 注入框架中
    components: { App },
    template: '<App/>'
    })

页面跳转：

    <router-link to="/">[显示字段]</router-link>

    <router-link to="/hello">hello</router-link>

    this.$router.push('/xxx')

    <button @click="goHome">回到首页</button>

    export default {
        name: 'app',
        methods: {
            goHome(){
                this.$router.push('/home');
            }
        }
    }

    //  后退一步
    this.$router.go(-1)
    // 前进一步
    this.$router.go(1)

在开发中，路由分后端路由和前端路由，后端路由是根据不同的用户的url请求，返回不同的内容，本质是url请求地址与服务器资源之间的对应关系。

### 后端路由

过程，浏览器请求url地址到后端服务器，请求url地址被后端路由拦截，服务器中有服务器资源内容，是url地址所要请求的资源内容，请求到服务器资源内容被后端路由拦截传递给浏览器。

SPA，后端渲染是由性能问题的，用户与服务器有经常提交多，后端路由就会导致网页的频繁刷新，导致性能问题，就有了ajax前端渲染，SPA是单页面应用程序，整个网站只有一个页面，内容变化是通过ajax局部更新实现，同时支持浏览器地址的前进和后退操作，spa的实现原理之一是基于url地址上的hash。

注意，hash的变化会导致浏览器记录访问历史的变化，但是hash的变化不会触发新的url请求，在实现spa过程中，最核心的技术就是前端路由。

### 前端路由

前端路由是根据不同的用户事件，显示不同的页面内容，本质是用户事件和事件处理函数之间的对应关系，用户触发事件，响应浏览器，浏览器中含有前端路由，事件处理函数，用户触发事件给到前端路由，响应事件处理函数，事件函数渲染相应内容给用户。

实现简单的前端路由是基于url中的hash实现的，点击菜单时改变url的hash值，根据hash的变化控制组件的切换。

监听window的onhashchange事件，根据获取到的最新的hash值，切换要显示的组件的名称

    window.onhashchange = function() {
    // 通过location.hash获取到最新的hash值
    }

### 简单的实例

    <div id="app">
    // 切换组件的超连接
    <a href="#/zhuye">主页</a>
    <a href="#/keji>科技</a>
    <a href="#/caijing>财经</a>
    <a href="#/yule">娱乐</a>
    // :is属性指定的组件名称，把对应的组件渲染到component标签所在位置
    // 可以把component标签当前组件的占位符
    <component :is="keji"></component>
    </div>

定义四个组件

    const zhuye = {
    template； '<h1>da1</h1>'
    }

    const keji = {
    template: '<h1>da2</h1>'
    }

    const caijing = {
    template: '<h1>da3</h1>'
    }

    const yule = {
    template: '<h1>da4</h1>'
    }

注册组件

    const vm = new Vue({
    el: '#app',
    data: {},
    // 注册组件
    components: {
    zhuye,
    keji,
    caijing,
    yule
    }
    })

动态切换

    <component :is="comName"></component>

    data: {
    comName: 'zhuye'
    }

监听window的onhashchange事件，根据获取到的最新的hash值，切换要显示的组件的名称

    window.onhashchange = function() {
    // 通过location.hash获取到最新的hash值
    console.log(location.hash);
    }

    href="#/zhuye"

使用switch判断

    switch(location.hash.slice(1) {
    case '/zhuye':
    vm.comName = 'zhuye'
    break;
    case '/keji':
    vm.comName = 'keji'
    break;
    case '/caijing':
    vm.comName = 'caijing'
    break;
    case '/yule':
    vm.comName = 'yule'
    break;
    }

!> spa和路由

SPA(单页面应用)的好处是：

良好的交互体验：

?> 页面只是局部内容被刷新，不需要重新刷新整个页面,页面显示流畅。

前后端工作分离模式：

?> 服务器只提供数据，不用管展示逻辑和页面合成，减轻服务器压力。

vue-router是基于 Vue CLI 应用程序使用

在项目文件夹下安装路由的命令  

    npm install vue-router

在main.js中

1. 引入路由：

    import Router from 'vue-router'

2. 使用路由

    Vue.use(Router)

3. 配置路由：

代码：

    const router=new Router({
        routes:[
            {path:"/",component:List}
        ],
        mode:"history"
    })

4. 在new Vue中用路由

代码：

    new Vue({
        router,
        el: '#app',
        components: { App },
        template: '<App/>'
    })

query 传参和 params 传参的区别

用法上的： 

    query 要用 path 来引入，
    params 要用 name 来引入，
    接收参数都是类似的，分别是 this.$route.query.name 和 this.$route.params.name。

路由跳转方法：

	this.$router.back()  后退
    this.$router.forward()  前进
    this.$router.push(路径，参数)  跳转
    this.$router.go()  指定跳转
    this.$router.replace()  替换

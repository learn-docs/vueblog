> `main.js`是`uni-app`的入口文件。

作用于初始化`vue`实例，定义全局组件。

代码：

    import Vue from 'vue'
    import App from './App'
    import pageHead from './components/page-head.vue' //全局引用page-head组件

    Vue.config.productionTip = false
    Vue.component('page-head', pageHead) //全局注册page-head组件，每个页面将可以直接使用该组件
    App.mpType = 'app'

    const app = new Vue({
        ...App
    })
    app.$mount() //挂载Vue实例

> 使用`Vue.prototype`添加全局变量

?> 使用`Vue.component`注册全局组件

!> PS

`nvue` 暂不支持在 `main.js` 注册全局组件

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/
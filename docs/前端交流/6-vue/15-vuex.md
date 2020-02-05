## vuex

Vuex是什么呢？它是Vue的状态管理模式，在使用vue的时候，需要在vue中各个组件之间传递值是很痛苦的，在vue中我们可以使用vuex来保存我们需要管理的状态值，值一旦被改变，所有引用该值的地方就会自动更新。是不是很方便，很好用呢？

vuex是专门为vue.js设计的状态管理模式，集中式存储和管理应用程序中所有组件的状态，vuex也集成了vue的官方调式工具，一个vuex应用的核心是store，一个容器，store包含了应用中大部分状态。

那么我们在什么时候应用vuex呢？vuex也不是随便乱用的，小型简单的应用就不那么合适了，因为用了Vuex是繁琐多余的，更适合使用简单的store模式；对于vuex更加适用于中大型单页应用：多个视图使用于同一状态，不同视图需要变更同一状态。

### vuex状态管理

?> 实现组件间数据共享

?> 集中式存储和管理应用程序中所有组件的状态

一个 Vuex 应用的核心是 store（仓库，一个容器），store包含着你的应用中大部分的状态 (state)。

传参的方法对于多层嵌套的组件来说，是非常繁琐的，并且对于兄弟组件间的状态传递无能为力；采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝，通常会导致无法维护的代码。

!> 什么情况下我应该使用 Vuex

适用于：中大型单页应用，不管在哪个组件，都能获取状态/触发行为

?> 解决问题如下：

① 多个视图使用于同一状态：

传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力

② 不同视图需要变更同一状态：

采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝，通常会导致无法维护的代码

?> 安装命令：

    在项目文件夹下vue install vuex

- vuex 里面 actions 只是一个架构性的概念，并不是必须的
- Action 提交的是 mutation，而不是直接变更状态
- Mutation：必须同步执行
- Action：可以异步,但不能直接操作State

创建一个vue项目，输入vue int webpack web，安装vuex，命令：npm install vuex --save。

store，index.js

    import Vue from 'vue' // 引入vue
    import Vuex from 'vuex' // 引入vuex
    // 使用vuex
    Vue.use(Vuex);
    // 创建Vuex实例
    const store = new Vuex.store({
    })
    export default store // 导出store

main.js

    import Vue from 'Vue'
    import App from './App'
    import router from './router'
    import store from '.store'

    Vue.config.productiontip = false

    new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    ...
    })

State，可以在页面通过this.$store.state来获取我们定义的数据：

    import Vue from 'vue' // 引入vue
    import Vuex from 'vuex' // 引入vuex
    // 使用vuex
    Vue.use(Vuex);

    // 创建Vuex实例：
    const store = new Vuex.Store({
    state: {
    count: 1
    }
    })
    export default store // 导出store

    {{this.$store.state.count}}

Getters相当于vue中的computed计算属性，getter的返回值根据它的依赖被缓存起来，且只有当它的依赖值发生改变时才会重新计算。

Getters可以用于监听，state中的值的变化，返回计算后的结果。

    {{this.$store.getSateCount}}

    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex);
    const store = new Vuex.Store({
    state: {
    count: 1;
    },
    getters: {
    getStateCount: function(state){
    return state.count+1;
    }
    }

Mutations

    {{this.$store.state.count}}
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>

    methods: {
    addFun() {
    this.$store.commit("add");
    },
    reductionFun() {
    this.$store.commit("reduction");
    }
    }

index.js

    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex);
    // 创建Vuex实例
    const store = new Vuex.store({
    state: {
    count: 1
    },
    getters: {
    getStateCount: function(state){
    return state count+1;
    }
    },
    mutations: {
    add(state) {
    state.count = state.count+1;
    },
    reduction(state){
    state.count = state.count-1;
    }
    }
    })
    export default store // 导出store

Actions:

    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex);
    const store = new Vuex.Store({
    state: {
    count: 1;
    },
    getters: {
    getStateCount: function(state){
    return state.count+1;
    }
    }
    mutations: {
    add(state) {
    state.count = state.count+1;
    },
    reduction(state) {
    state.count = state.count-1;
    }
    },
    actions: {
    addFun(context) {
    context.commit("add");
    },
    reductionFun(context) {
    context.commit("reduction");
    }
    }

    // vue
    methods: {
    addFun() {
    this.$store.dispatch("addFun");
    // this.$store.commit("add");
    },
    reductionFun() {
    this.$store.dispatch("reductionFun");
    }
    }

传值：

    methods: {
    addFun() {
    this.$store.dispatch("addFun");
    // this.$store.commit("add");
    },
    reductionFun() {
    var n = 10;
    this.$store.dispatch("reductionFun", n);
    }
    }
    mutations: {
    add(state) {
    state.count = state.count+1;
    },
    reduction(state,n) {
    state.count = state.count-n;
    }
    },
    actions: {
    addFun(context) {
    context.commit("add");
    },
    reductionFun(context,n) {
    context.commit("reduction",n);
    }
    }
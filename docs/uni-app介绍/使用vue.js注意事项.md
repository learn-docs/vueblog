> `uni-app`发布到`h5`时支持所有的vue语法，发布到app和小程序时，由于平台限制，无法实现全部`vue`语法，但是`uni-app`还是对vue语法支持度最高的跨端框架。

1. uni-app 完整支持 Vue 实例的生命周期
2. uni-app 完整支持 Vue 模板语法。

- [uni-app V3版本上线，App端性能、功能大幅提升](https://ask.dcloud.net.cn/article/36599)

**data属性**

data必须声明为返回一个初始数据对象的函数，否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据。

> 正确用法，使用函数返回对象

    data() {
        return {
            title: 'Hello'
        }
    }

> 错误写法，会导致再次打开页面时，显示上次数据

    data: {
        title: 'Hello'
    }

> 全局变量

实现全局变量的方式需要遵循 Vue 单文件模式的开发规范。

- [uni-app 全局变量的几种实现方式](https://ask.dcloud.net.cn/article/35021)

**class与style绑定**

class 支持的语法:

    <view :class="{ active: isActive }">111</view>
    <view class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">222</view>
    <view class="static" :class="[activeClass, errorClass]">333</view>
    <view class="static" v-bind:class="[isActive ? activeClass : '', errorClass]">444</view>
    <view class="static" v-bind:class="[{ active: isActive }, errorClass]">555</view>

style 支持的语法:

    <view v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">666</view>
    <view v-bind:style="[{ color: activeColor, fontSize: fontSize + 'px' }]">777</view>

!> PS

以`:style=""`这样的方式设置px像素值，其值为实际像素，不会被编译器转换。

    <template>
        <!-- 支持 -->
        <view class="container" :class="computedClassStr"></view>
        <view class="container" :class="{active: isActive}"></view>

        <!-- 不支持 -->
        <view class="container" :class="computedClassObject"></view>
    </template>
    <script>
        export default {
            data () {
                return {
                    isActive: true
                }
            },
            computed: {
                computedClassStr () {
                    return this.isActive ? 'active' : ''
                },
                computedClassObject () {
                    return { active: this.isActive }
                }
            }
        }
    </script>

> key

`:key`来指定列表中项目的唯一的标识符

- 使用`v-for`循环`array`中`item`的某个`property`，该`property`的值需要是列表中唯一的字符串或数字，且不能动态改变
- 使用`v-for`循环中`item`本身，这时需要`item`本事是一个唯一的字符串或者数字

如不提供`:key`，会报一个`warning`。

- 在h5平台中，`v-for="(item, index) in 10"` 中，在`H5`平台 `item` 从 1 开始，其他平台 `item` 从 0 开始，可使用第二个参数 `index` 来保持一致。

- 在非h5平台中循环对象时不支持第三个参数。如 `v-for="(value, name, index) in object"` 中，`index` 参数是不支持的。

事件修饰符-注意：

    .stop：各平台均支持
    .prevent 仅在 H5 平台支持
    .self：仅在 H5 平台支持
    .once：仅在 H5 平台支持
    .capture：仅在 H5 平台支持
    .passive：仅在 H5 平台支持

- 若需要禁止蒙版下的页面滚动，可使用 `@touchmove.stop.prevent="moveHandle"`，`moveHandle` 可以用来处理 `touchmove` 的事件，也可以是一个空函数。

代码：

    <view class="mask" @touchmove.stop.prevent="moveHandle"></view>

- 按键修饰符：`uni-app`运行在手机端，没有键盘事件，所以不支持按键修饰符。

> H5 的`select` 标签用 `picker` 组件进行代替

    <template>
    <view>
        <picker @change="bindPickerChange" :value="index" :range="array">
        <view class="picker">
            当前选择：{{array[index]}}
        </view>
        </picker>
    </view>
    </template>

    <script>
    export default {
    data () {
        return {
        index: 0,
        array: ['A', 'B', 'C']
        }
    },
    methods: {
        bindPickerChange (e) {
        console.log(e)
        }
    }
    }

    </script>

> 表单元素 `radio` 用 `radio-group` 组件进行代替

    <template>
    <view>
        <radio-group class="radio-group" @change="radioChange">
        <label class="radio" v-for="(item, index) in items" :key="item.name">
            <radio :value="item.name" :checked="item.checked"/> {{item.value}}
        </label>
        </radio-group>
    </view>
    </template>

    <script>
    export default {
    data () {
        return {
        items: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'}
        ]
        }
    },
    methods: {
        radioChange (e) {
        console.log('radio发生change事件，携带value值为：', e.target.value)
        }
    }
    }

    </script>

- [uni-app V3版本上线，App端性能、功能大幅提升](https://ask.dcloud.net.cn/article/36599)

- [富文本/渲染/显示/图文混排方案。rich-text、uparse、v-html的区别](https://ask.dcloud.net.cn/article/35772)

- `uni-app`只支持`vue`单文件组件。其他的诸如：动态组件，自定义 `render`，和`<script type="text/x-template">` 字符串模版等，在非H5端不支持。

- [uni-app新老编译模式差异说明](https://ask.dcloud.net.cn/article/35843)

**uni-app内置基础组件**

示例

    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
        <view class="picker">
        当前选择: {{date}}
        </view>
    </picker>

**全局组件**

需在 main.js 里进行全局注册

示例

main.js 里进行全局导入和注册

    import Vue from 'vue'
    import pageHead from './components/page-head.vue'
    Vue.component('page-head',pageHead)

index.vue 里可直接使用组件

    <template>
    <view>
        <page-head></page-head>
    </view>
    </template>

?> 如何设置全局的数据和全局的方法

可参考`hello-uniapp` `store/index.js`

    //store.js
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const store = new Vuex.Store({
        state: {...},
        mutations: {...},
        actions: {...}
    })

    export default store

    //main.js
    ...
    import store from './store'
    Vue.prototype.$store = store
    const app = new Vue({
        store,...
    })
    ...

    //test.vue 使用时：
    import {mapState,mapMutations} from 'vuex'

?> 如何捕获 app 的 onError

    export default {
    // 只有 app 才会有 onLaunch 的生命周期
    onLaunch () {
        // ...
    },

    // 捕获 app error
    onError (err) {
        console.log(err)
    }
    }

本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/
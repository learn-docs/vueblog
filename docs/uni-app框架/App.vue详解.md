> `app.vue`是`uni-app`的主组件，是页面入口文件。

文件包含，调用应用生命周期函数，配置全局样式。

> 应用生命周期在`app.vue`中监听

?> 应用生命周期

|函数名|说明|
|:---|:---|
 onLaunch |	当uni-app 初始化完成时触发（全局只触发一次） |	
|onShow|	当 uni-app 启动，或从后台进入前台显示	|
|onHide|	当 uni-app 从前台进入后台	|
|onError|	当 uni-app 报错时触发	|
|onUniNViewMessage|	对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯|

代码：

    <script>  
        export default {  
            onLaunch: function() {  
                console.log('App Launch，app启动')  
            },  
            onShow: function() {  
                console.log('App Show，app展现在前台')  
            },  
            onHide: function() {  
                console.log('App Hide，app不再展现在前台')  
            }  
        }  
    </script>

- [onlaunch生命周期内navigateto跳转页面注意](https://ask.dcloud.net.cn/article/35942)

**globalData**

globalData在uni-app可以使用，全端通用。

app.vue

代码：

    <script>  
        export default {  
            globalData: {  
                text: 'text'  
            }
        }  
    </script>

js操作globalData的方式：

    getApp().globalData.text = "text"

`nvue`的`weex`的编译模式中使用`globalData`的话，由于`weex`生命周期不支持`onShow`。可以利用监听`webview`的`addEventListener show`事件实现`onShow`效果,或者是直接使用`weex`生命周期中的`beforeCreate`。

> 全局样式

1. `nvue`支持的`css`有限
2. 需要把`nvue`不支持的`css`写在单独的条件编译里

代码：

    <style>
        /* #ifndef APP-PLUS-NVUE */
        @import './common/uni.css';
        /* #endif*/
    </style>


本文参考来自：uni-app官方文档：https://uniapp.dcloud.io/
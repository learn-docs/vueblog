## 组件

?> 组件概述--核心目标是为了可重用性高，减少重复性的开发。

组件包含属性：

    template 
    script
        data  methods  props  生命周期函数
    style

创建组件

    let myTemp={}   脚手架中建一个vue文件

注册组件：

    Vue.component('myTemp'，MyTemp）

使用组件

    <my-temp></my-temp>

!> 注意事项

模板：

?> 使用 id 绑定

命名：

?> 组件名 不要是 html 标准标签名，如果用驼峰定义，html 中引用组件时，改为 短横线命名

Template下只能有一个跟容器

### 组件传值

父传子

    父：给标签绑定 v-bind:prop=""
    子：props:{prop:{type:类型}}

子传父

    子：绑定事件，用$emit注册事件
    父：绑定事件，用$event接收参数

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>组件</title>
        <link rel="stylesheet" href="">
        <script src="vue.js"></script>
    </head>
    <body>
    <div id="box">
        <hello></hello>
    </div>
    <div id="box1">
        <hello></hello>
    </div>
    <script>
        Vue.component("hello",{
            template:`
                <p>欢迎来到这里！
                <button @click="changeName">修改</button> 
                </p>
                
            `,
            data:function(){
                return {
                    name:"da"
                };
            },
            methods:{
                changeName:function(){
                    console.log(this)
                    this.name="dada";
                }
            }
        })
        new Vue({
            el:"#box"
        })
        new Vue({
            el:"#box1"
        })
    </script>
    </body>
    </html>
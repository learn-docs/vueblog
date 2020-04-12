## computed

!> computed和methods的区别

- computed不能传参 
- computed是属性调用，而methods是函数调用
- computed带有缓存功能，而methods不是
- computed依赖于data中的数据，只有在它的相关依赖数据发生改变时才会重新求值

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>computed</title>
        <link rel="stylesheet" href="">
        <script src="vue.js"></script>
    </head>
    <body>
    <div id="app">
        <h1>{{message}}</h1>
        <p class="test1">{{methodTest}}</p>
        <p class="test2">{{methodTest()}}</p>
        <p class="test3">{{computedTest}}</p>
    </div>
    <script>
    let vm = new Vue({
        el: '#app',
        data: {
            message: '我是消息'
        },
        methods: {
            methodTest() {
                return this.message + 'methods'
            }
        },
        computed: {
            computedTest() {
                return this.message + 'computed'
            }
        }
    })
    </script>
    </body>
    </html>
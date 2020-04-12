## 动态组件

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>动态组件</title>
        <link rel="stylesheet" href="">
    </head>
    <body>
    <div id="app">
        <div>
            <button @click="currentComponent='C1Component'">c1</button>
            <button @click="currentComponent='C2Component'">c2</button>
        </div>
        <div>
            <keep-alive>
                <component v-bind:is="currentComponent"></component>
            </keep-alive>
        </div>
    </div>

    <template id="c1">
        <div>
            this is c1.
        </div>
    </template>

    <template id="c2">
        <div>
            this is c2.
        </div>
    </template>

    <script src="vue.js"></script>
    <script>
    //  定义组件
    const C1Component = {
        template: '#c1'
    };
    const C2Component = {
        template: '#c2'
    };
    //  创建 Vue 对象
    const app = new Vue({
        el: '#app',
        data: {
            currentComponent: 'C1Component'
        },
        components: {C1Component,C2Component}
    });
    </script>
    </body>
    </html>
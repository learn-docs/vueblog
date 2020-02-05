## vue-key

?> 以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <link rel="stylesheet" href="">
        <script src="vue.js"></script>
    </head>
    <body>
        <div id="app">
            <p v-for="item in list"  :key="item.id" >
                <label><input type="checkbox"/>{{item.title}}</label>
            </p>
            <button @click="change">改变位置</button>
        </div>
    <!-- 如果没有 key ， checkbox 只修改值，位置不会发生变化 -->
    <script>
    const app = new Vue({
        el: "#app",
        data: {
            list: [
                {id:1,title:"a"},
                {id:2,title:"b"},
                {id:3,title:"c"}
            ]
        },
        methods: {
            change() {
                this.list= [
                    {id:2,title:"b"},
                    {id:1,title:"a"},
                    {id:3,title:"c"}
                ]
            }
        }
    })
    </script>
    </body>
    </html>
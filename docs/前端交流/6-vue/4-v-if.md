## v-if

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>v-if</title>
        <link rel="stylesheet" href="">
        <script src="vue.js"></script>
    </head>
    <body>
    <div id="box">
        <div v-if="!visible">v-if显示的盒子</div>
        <div v-show="!visible">v-show显示的盒子</div>
    </div>
    <script>
        new Vue({
            el:"#box",
            data:{
                visible:true
            }
        })
    </script>
    </body>
    </html>
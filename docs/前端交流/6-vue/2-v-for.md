## v-for

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>v-for</title>
        <link rel="stylesheet" href="">
        <script src="vue.js"></script>
        <style>
            ul{
                margin: 0;
                padding: 0;
                list-style:none;
            }
            #box ul li{
                border-bottom:2px solid #ccc;
                line-height:35px;
            }
        </style>
    </head>
    <body>
    <div id="box">
        <!-- 排序 -->
        {{sort}}
        <ul>
            <li v-for="(item,index) in list" :key="item.age">
                {{item.name}}--{{item.age}}---{{index}}
            </li>
        </ul>
        <ul>
            <li v-for="item in user">{{item}}</li>
        </ul>
    </div>
    <script>
        new Vue({
            el:"#box",
            data:{
                list:[
                    {"name":"da",age:"1"},
                    {"name":"da1",age:"2"},
                    {"name":"da2",age:"3"},
                    {"name":"da3",age:"4"}
                ],
                user:[54,262,73,8]
            },
            computed:{
                sort:function(){
                    this.user=this.user.sort(function(a,b){
                        return a-b;
                    })
                }
            }

        })
    </script>
    </body>
    </html>
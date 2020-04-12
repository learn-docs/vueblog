## vue事件

代码：

    <div id="box">
        <button @dblclick="count+=1">点击+1</button>
        <p>{{count}}</p>
        <button v-on:click="add(5)">点击+</button>
        <p>{{count}}</p>
        <a v-bind:href="webHttp" @click.prevent="">百度</a>
        <button @click.once="jia">点击变化</button>
        <p>{{num}}</p>
    </div>
    <script>
        new Vue({
            el:"#box",
            data:{
                count:0,
                webHttp:"http://www.baidu.com",
                num:0
            },
            methods:{
                add:function(num){
                    return this.count+=num;
                },
                jia:function(){
                    return this.num+=1;
                }
            }

        })
    </script>
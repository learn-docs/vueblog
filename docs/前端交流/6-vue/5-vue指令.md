## vue指令

v-bind
v-on
v-model
v-html
v-show
v-if

代码：

    <div id="box">
        <button @click="show=!show">点击</button>
        <div class="con" v-show="show"></div>
    </div>
    <script>
        new Vue({
            el:"#box",
            data:{
                show:false
            }
            methods:{
                toggle:function(){
                    return this.show=!this.show;
                }
            }
        })
    </script>
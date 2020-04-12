## 生命周期

beforeCreate

?> beforeCreate---------------创建前，仅在内存开辟空间

created

?> created--------------------创建完成

beforeMount

?> beforeMount----------------挂载前

mounted

?> mounted--------------------挂载完成

beforeUpdate

?> beforeUpdate---------------更新前

updated

?> updated--------------------更新完成

beforeDestroy

?> beforeDestroy---------------销毁前

destroyed

?> destroyed-------------------销毁完成

示例：

    el:undefined
    data:undefined
    msg:undefined

    el:undefined
    data:[object Object]
    msg:word

    vue-生命周期.html:35 el:[object HTMLDivElement]
    vue-生命周期.html:36 data:[object Object]
    vue-生命周期.html:38 msg:word

    vue-生命周期.html:40 p标签:{{msg}}
    vue-生命周期.html:44 el:[object HTMLDivElement]
    vue-生命周期.html:45 data:[object Object]

    vue-生命周期.html:46 msg:word
    vue-生命周期.html:48 p标签:word
    Download the Vue Devtools 
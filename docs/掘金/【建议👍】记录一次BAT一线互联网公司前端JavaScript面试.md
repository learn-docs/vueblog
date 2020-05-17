## 前沿

置身世外只为暗中观察！！！Hello大家好，我是魔王哪吒！

## 面试内容

你需要一些HTML和css的基础知识，掌握JavaScript和ES6的基本语法，对事物的好奇心。

- 初级JS面试题
- JS Web API,开发环境，运行环境
- 原型，作用域，异步，Ajax，事件，webpack等

### 观察所有面试题的考点

1. 学习梳理知识体系图
2. 找准知识体系，刻意掌握
3. 善于总结观点，原理

#### typeof能判断哪些类型

typeof运算符：

- 可以识别所有值的类型
- 可以识别函数
- 可以用力判断是否为引用类型

考点：JS变量类型

代码：

    // 判断所有值的类型
    let a; typeof a // 'undefined'
    const str = 'abc'; typeof str // 'string'
    const n = 10; typeof n // 'number'
    const b = true; typeof b // 'boolean'
    const s = Symbol('s'); typeof s // 'symbol'
    
    // 能够判断函数
    typeof console.log // 'function'
    typeof function(){} // 'function'
    
    // 能够识别引用类型
    typeof null // 'object'
    typeof ['a','b'] // 'object'
    typeof {x:10} // 'object'

#### 什么时候使用===，什么时候使用==

考点：强制类型转换

字符串拼接的类型转换

    const a = 10 + 1 // 11
    const b = 10 + '10' // '1010'
    const c = true + '1' // true1

解决方法：

    10 + parseInt('1') // 11
    
`==` 运算符的类型转换

    100 == '100' // true
    0 == '' // true
    0 == false // true
    false == '' // true
    null == undefined // true

> 类型转换

1. 除了`0`之外的所有数字，转换为布尔型都为`true`。
2. 除了`“ ”`之外的所有字符，转换为布尔型都为`true`。
3. `null`和`undefined`转换为布尔型为`false`。

什么时候使用`===`，什么时候使用`==`

> 除了`==`null外，其他地方用`===`

    const obj = {a:1}
    if(obj.b==null){}
    // 相当于
    //if(obj.b === null || obj.b === undefined){}

#### window.onload和DOMContentLoaded的区别

考点：页面加载过程

#### 创建10个标签，点击后弹出对应的序号

考点：JS作用域

#### 手写节流 throttle，防抖 debounce

考点：性能，体验优化

#### Promise解决了什么问题

考点：JS异步

#### 值类型和引用类型的区别

值类型的表示：

    // 值类型
    let a = 10
    let b = a
    a= 20
    console.log(b); // 10

引用类型的表示：

    // 引用类型
    let a = { age:12 }
    let b = a
    b.age = 13
    console.log(a.age) // 13

#### 手写深拷贝

1. 判断是值类型还是引用类型
2. 判断是数组还是对象
3. 递归

代码：

    // 浅拷贝
    const obj1 = {
        age: 12,
        name: 'web',
        address: {
            city: 'beijing'
        },
    }
    
    const obj2 = obj1
    obj2.address.city = 'shanghai'
    console.log(obj1.address.city)

结果：

    shanghai
    
深拷贝：定义要拷贝的对象

    const obj2 = deepClone(obj1)
    obj2.address.city = 'shanghai'
    console.log(obj1.address.city)
    
    function deepClone(obj = {}){
        if(typeof obj !== 'object' || obj == null){
            // obj是null，或者不是对象和数组情况，直接返回
            return obj
        }
        
        // 初始化返回结果
        let result
        if(obj instanceof Array){
            result = []
        }else{
            result = {}
        }
        
        for (let key in obj) {
            // 保证Key不是原型的属性
            if(obj.hasOwnProperty(key)){
                // 递归调用
                result[key] = deepClone(obj[key])
            }
        }
        
        // 返回结果
        return result
    }

深拷贝结果

    beijing

### 原型，原型链

1. 如何判断一个变量是不是数组？
- `a instanceof Array`

2. 手写一个简易的`jquery`，考虑插件和扩展性？

代码：

    class jQuery {
        constructor(selector){
            const result = document.querySelectorAll(selector)
            const length = result.length
            for(let i=0; i<length; i++){
                this[i] = result[i]
            }
            this.length = length
        }
        get(index){
            return this[index]
        }
        each(fn){
            for(let i=0;i<this.length;i++){
                const elem = this[i]
                fn(elem)
            }
        }
        on(type,fn){
            return this.each(elem=>{
                elem.addEventListener(type,fn,false)
            })
        }
    }

插件的扩展性

    jQuery.prototype.dialog = function(info) {
        alert(info)
    }

复写机制：

    class myJQuery extends jQuery {
        constructor(selector) {
            super(selector)
        }
        // 扩展自己的方法
        study(){
            
        }
    }

3. `class`的原型本质，如何理解？
- 原型和原型链的图示

#### class类似模板

- `constructor`
- 属性
- 方法

代码：

    // 类
    
    class Person {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        study() {
            console.log('study')
        }
    }
    
    // 通过类 new 对象，实例
    const web = new Person('哪吒', 10)
    
class实际上是函数，可见的语法糖

    typeof Student
    结果：
    "function"
    typeof People
    结果：
    "function"

#### 继承

- `extends`
- `super`
- 扩展，重写方法

#### 原型

原型关系：

1. 每个`class`都有显示原型`prototype`
2. 每个实例都有隐式原型`__proto__`
3. 实例的`__proto__`指向对应`class`的`prototype`

#### 原型链

    console.log(Student.prototype.__proto__)
    console.log(People.prototype)
    console.log(People.prototype === Student.prototype.__proto__)

#### 类型判断 instanceof

    [] instanceof Array // true
    [] instanceof Object // true
    {} instanceof Object // true

### 作用域，闭包

- `this`的不同应用场景下，如何取值？
- 手写`bind`函数
- 实际开发中闭包的应用场景，举例说明

创建10个a标签，点击弹出对应序号

    let i, a
    for(i=0; i<10; i++) {
        a=document.createElement('a')
        a.innerHTML = i + '<br>'
        a.addEventListener('click', function(e){
            e.preventDefault()
            alert(i)
        })
        document.body.appendChild(a)
    }

#### 作用域

作用域分：

1. 全局作用域
2. 函数作用域
3. 块级作用域（es6新增）

代码：

    let a = 0
    function fn1() {
        let a1 = 100
        function fn2() {
            let a2 = 200
            function fn3() {
                let a3 = 300
                return a+a1+a2+a3
            }
            fn3()
        }
        fn2()
    }
    fn1()

块级作用域

    if(true) {
        let x=100
    }
    console.log(x) // 会报错

#### 自由变量

如果一个变量在当前作用域没有定义，但被使用了，向上级作用域去找，一层一层一次寻找，直到找到为止，如果到了全局作用域都没有找到，就会报错`xx is not defined`

#### 闭包

闭包的表现：

1. 函数作为参数被传递
2. 函数作为返回值被返回

> 做一个简单的`cache`工具

闭包隐藏数据

    function createCache() {
        const data={}
        // 闭包中的数据，被隐藏，不被外界访问
        return {
            set: function(key,val) {
                data[key] = val
            },
            get: function(key){
                return data[key]
            }
        }
    }
    
    const c = createCache()
    c.set('a', 100)
    console.log(c.get('a'))

函数作为返回值

    function create(){
        let a = 100
        return function(){
            console.log(a)
        }
    }
    let fn = create()
    let a = 200
    fn()
    
结果：

    100

函数作为参数

    function print(fn) {
        let a = 200
        fn()
    }
    
    let a = 100
    function fn(){
        console.log(a)
    }
    print(fn)

结果：

    100

所有自由变量的查找是在函数定义的地方，向上级作用域查找，不是执行的地方。

#### this

1. 作为普通函数被调用
2. 使用`call,apply,bind`被调用
3. 作为对象方法被调用
4. 在`class`方法中被调用
5. 箭头函数

`this`取什么值，是在函数执行的时候确定的，不是函数定义的时候确定的。

`call`指向，`bind`会返回新的函数

代码：

    function fn1(){
        console.log(this)
    }
    fn1() // window
    
    fn1.call({x:10}) // {x:10}
    
    const fn2 = fn1.bind({x:20})
    fn2() // {x:20}

代码：

    const Jeskson = {
        name: 'web',
        sayHi() {
            // this是指当前对象
            console.log(this)
        },
        wait(){
            setTimeout(function(){
                // this === window
                console.log(this)
            }
        }
    }

代码：

    const Jeskson = {
        name: 'web',
        sayHi() {
            // this是指当前对象
            console.log(this)
        },
        wait() {
            setTimeout(()=>{
              // this指当前对象
              console.log(this)
            })
        }
    }

代码：

    class People {
        constructor(name){
            this.name = name
            this.age = 20
        }
        sayHi(){
            console.log(this)
        }
    }
    const Jeskson = new People('web')
    Jeskson.sayHi() // Jeskson 对象

手写`bind`函数

    Function.prototype.bind1 = function(){
        // 将参数解析为数组
        const args = Array.prototype.slice.call(arguments)
        // 获取this
        const t = args.shift()
        const self = this // 当前函数
        // 返回一个函数
        return function() {
            // 执行原函数，并返回结果
            return self.apply(t, args)
        }
    }

代码：

    function fn1(a,b,c) {
        console.log('this',this)
        console.log(a,b,c)
        return 'this is fn1'
    }
    
    const fn2 = fn1.bind ({x:100},10,20,30)
    const res = fn2()
    console.log(res)

`Chrome`：

    fn1.hasOwnProperty('bind')
    //false
    fn1.__proto__ == Function.prototype
    // true
    Function.prototype.apply/call/bind

### 异步，单线程

1. 同步和异步的区别是什么？
2. 手写用`Promise`加载一张图片
3. 前端使用异步的场景有哪些？

代码：

    // setTimeout笔试题
    console.log(1)
    setTimeout(function(){
        console.log(2)
    },1000)
    console.log(3)
    setTimeout(function(){
        console.log(4)
    },0)
    console.log(5)

1. 单线程和异步
2. 应用场景
3. `callback hell`和`Promise`

> JS是单线程语言，同时只能做一件事
> 浏览器和`nodejs`支持`js`启动进程，如`web worker`
> JS和dom渲染共用同一线程。

异步：

    console.log(100)
    setTimeout(function(){
        console.log(200)
    },1000)
    console.log(300)

同步

    console.log(100)
    alert(200)
    console.log(300)

异步和同步的区别

1. 基于`js`是单线程语言
2. 异步不会阻塞代码的执行
3. 同步会阻塞代码的执行

手写用`Promise`加载一张图片

    function loadImg(src) {
        return new Promise(
            (resolve, reject) => {
                const img = document.createElement('img')
                img.onload = () => {
                    resolve(img)
                }
                img.onerror = () => {
                    const err = new Error(`图片加载失败 ${src}`)
                    reject(err)
                }
                img.src = src
            }
        )
    }
    
    const url = ''
    loadImg(url).then(img => {
        console.log(img.width)
        return img
    }).then(img => {
        console.log(img.height)
    }).catch(ex=>console.error(ex))

#### 异步-单线程

1. 单线程和异步，异步和同步区别
2. 前端异步的应用场景
3. `Promise`解决`callback hell`

#### 异步-callback

异步，以回调`callback`函数形式

#### 异步-应用场景

1. 网络请求
2. 定时任务

第一网络请求，如`ajax`图片加载，第二定时任务，如`setTimeout`。

    //ajax
    console.log('start')
    $.get('./data.json', function(data1){
      console.log(data1)  
    })
    console.log('end')

图片的加载

    console.log('start')
    let img = document.createElement('img')
    img.onload = function() {
        console.log('loaded')
    }
    img.src="/xxx.png"
    console.log('end')

代码应用场景：

    // setTimeout
    console.log(100)
    setTimeout(function(){
        console.log(200)
    },1000)
    console.log(300)
    
    // setInterval
    console.log(100)
    setInterval(function(){
        console.log(200)
    },1000)
    console.log(300)

#### 异步-Promise

`Promise`代码：

    function getData(url){
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                success(data) {
                    resolve(data)
                },
                error(err) {
                    reject(err)
                }
            })
        }
    }

`Promise`

    const url1 = '/data1.json'
    const url2 = '/data2.json'
    const url3 = '/data3.json'
    getData(url1).then(data1=>{
        console.log(data1)
        return getData(url2)
    }).then(data2 => {
        console.log(data2)
        return getData(url3)
    }).then(data3 => {
        console.log(data3)
    }).catch(err => console.error(err))

`calback hell`，回调地狱

代码：

    // 获取第一个数据
    $.get(url1, (data1) => {
        console.log(data1)
        
        // 获取第二个数据
        $.get(url2, (data2) => {
            console.log(data2)
            
            // 获取第三个数据
            $.get(url3, (data3) => {
                console.log(data3)
                // 还可能获取更多的数据
            })
        })
    })

### DOM，BOM

Dom操作，操作网页上的Dom元素，浏览器上的文本，图片

Bom操作，操作浏览器上的一些事情，浏览器的导航，地址等

> 事件绑定，ajax，存储

DOM，`Document Object Model`

1. DOM是哪种数据结构
2. DOM操作的常用API
3. attr和property的区别

`DOM`的本质，节点操作，结构操作，`DOM`性能

`xml`是一种可扩展的标记语言，可以描述任何结构的数据，`html`是一种特定的`xml`。

`DOM`的本质，它就是一颗树。

- 获取`Dom`节点
- `attribute`
- `property`

获取`DOM`节点

    const div1 = document.getElementById('div1') // 元素
    
    const divList = document.getElementsByTagName('div') // 集合
    
    console.log(divlist.length)
    console.log(divList[0])
    
    const containerList = document.getElementsByClassName('.container') // 集合
    
    const pList = document.querySelectorAll('p') // 集合

`DOM`节点的`property`

    const pList = document.querySelectorAll('p');
    const p = pList[0]
    console.log(p.style.width) // 获取样式
    p.style.width='100px' // 修改样式
    console.log(p.className) // 获取class
    p.className='p1' // 修改class
    // 获取nodeName 和 nodeType
    console.log(p.nodeName)
    console.log(p.nodeType)

`property`和`attribute`

`property`修改对象属性，不会体现到`html`结构中

`attribute`修改`html`属性，会改变`html`结构

两种都有可能引起`DOM`重新渲染

> `DOM`结构操作

1. 新增/插入节点
2. 获取子元素列表，获取父元素
3. 删除子元素

新增，插入节点

    const div1 = document.getElementById('div1')
    // 添加新节点
    const p1 = document.createElement('p')
    p1.innerHTML = 'this is p1'
    div1.appendChild(p1)
    const p2 = document.getElementById('p2')
    div1.appendChild(p2)

获取子元素列表和获取父元素

    //获取子元素列表
    const div1 = document.getElementById('div1')
    const child = div1.childNodes
    
    //获取父元素
    const div1 = document.getElementById('div1')
    const parent = div1.parentNode

删除节点

    const div1 = document.getElementById('div1')
    const child = div1.childNodes
    div1.removeChild(child[0])

> DOM性能

`DOM`操作会耗费cpu，避免频繁，对`DOM`查询做缓存

`DOM`查询做缓存

    // 不缓存DOM查询结果
    for(let=0; i<document.getElementsByTagName('p').length;i++) {
        // 每次循环，都会计算length，频繁进行dom查询
    }
    // 缓存dom查询结果
    const pList = document.getElementsByTagName('p')
    const length = pList.length
    for(let i = 0; i<length; i++){
        // 缓存length,只进行一次dom查询
    }

> 讲频繁的操作修改为一次性操作

    const listNode = document.getElementById('list')
    
    // 创建一个文档片段，此时没有插入到dom树中
    const frag = document.createDocumentFragment();
    
    // 执行插入
    for(let x=0; x<10; x++) {
        const li = document.createElement("li")
        li.innerHTML="List item"+x
        frag.appendChild(li)
    }
    
    // 都完成后，再插入到dom树中
    listNode.appendChild(frag)

问题：

1. `dom`是哪种数据结构
2. `dom`操作的常用`api`
3. `attr`和`property`的区别
4. 一次性插入多个`dom`节点，考虑性能问题

`property`和`attribute`的区别

1. `property`修改对象属性，不会体现到`html`结构中
2. `attribute`修改`html`属性，会改变`html`结构

两者都有可能引起`dom`重新渲染

- `dom`本质
- `dom`节点操作
- `dom`结构操作
- `dom`性能

`BOM`操作`browser object model`

问题：如何识别浏览器的类型

问题：分析拆解`url`各个部分

#### BOM navigator

代码：

    //navigator
    const ua = navigator.userAgent
    const isChrome = ua.indexOf('Chrome`)
    console.log(isChrome)

## 事件绑定和事件冒泡

1. 事件监听函数
2. 描述事件冒泡的流程

#### BOM screen

代码：

    //screen
    console.log(screen.width)
    console.log(screen.height)

#### BOM location

#### BOM history

### ajax

1. 手写一个简易的`ajax`
2. 跨域的常用实现方式

#### ajax XMLHttpRequest

代码：

    //get请求
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/api', true)
    xhr.onreadystatechange = function() {
        // 这里的函数异步执行
        if (xhr.readyState === 4){
            if(xhr.state === 200) {
                alert(xhr.responseText);
            }
        }
    }
    xhr.send(null)

#### ajax 状态码

`xhr.readyState`

- 0为还没有调用`send()`方法
- 1为已调用`send()`方法，正在发送请求
- 2为`send()`方法执行完成，已经接收到全部响应内容
- 3为正在解析响应内容
- 4为响应内容解析完成，可以在客户端调用

`xhr.status`

- 2xx表示成功处理请求
- 3xx表示需要重定向，浏览器直接跳转
- 4xx表示客户端请求错误
- 5xx表示服务器端错误

#### ajax 跨域

1. 什么是跨域，同源策略
2. JSONP
3. CORS，服务器端支持

同源策略-跨域

`ajax`请求时，浏览器要求当前网页和`server`必须同源

同源就是：协议，域名，端口，一致

> 代码

    function ajax(url) {
        const p = new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest()
            xhr.open('GET',url,true)
            xhr.onreadystatechange=function(){
                if(xhr.readyState === 4){
                    if(xhr.status===2000) {
                        resolve(
                            JSON.parse(xhr.responseText)
                        )
                    }else if(xhr.status === 404) {
                        reject(new Error('404 not found'))
                    }
                }
            }
            xhr.send(null)
        }
    }


### 事件

- 事件绑定
- 事件冒泡
- 事件代理

#### 事件-绑定

代码：

    const btn = document.getElementById('btn1')
    btn.addEventListener('click',event=>{
        console.log('clicked')
    })

代码：

    //通用的绑定函数
    function bindEvent(elem, type, fn)
        elem.addEventListener(type,fn)
    }
    
    const a = document.getElementById('web')
    bindEvent(a, 'click', e=>{
        e.preventDefault()
        alert('clicked')
    })

#### 事件-冒泡

代码：

    <body>
    <div id="div1">
    <p id="p1">web</p>
    <p id="p2">it</p>
    <p id="p3">it</p>
    <p id="p4">it</p>
    </div>
    <div id="div2">
    <P id="p5">it</p>
    <p id="p6">it</p>
    </div>
    </body>
    
    const p1 = document.getElementById('p1')
    const body = document.body
    bindEvent(p1, 'click', e=>{
        e.stopPropagation() // 阻止冒泡
        alert('web')
    })
    bindEvent(body, 'click', e=>{
        alert('it')
    })

#### 事件-代理

代码：

    <div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    </div>
    <button>点击
    </button>
    
    const div1 = document.getElementById('div1')
    div1.addEventListener('click', e=>{
     const target = e.target
     if(e.nodeName === 'A') {
         alert(target.innerHTML)
     }
    })

事件代理，可以减少浏览器内存占用

通用的事件绑定函数

    const btn1 = document.geteElementById('btn1')
    bindEvent(btn1,'click',event=>{
        // console.log(event.target) // 获取触发的元素
        event.preventDefault() // 阻止默认行为
        alert('clicked')
    })
    
    const div2 = document.getElementById('div2')
    bindEvent(div2,'click',event=>{
        event.preventDefault()
        const target = event.target
        if(target.nodeName === 'A') {
            alert(target.innerHTML)
        }
    })

代码：

    function bindEvent(elem, type, selector, fn) {
        if(fn==null) {
            fn = selector
            selector = null
        }
        elem.addEventListener(type, e=>{
            let target
            if(selector) {
                // 需要代理
                target = e.target
                if(target.matches(selector)){
                    fn.call(target, e)
                }
            } else {
                // 不需要代理
                fn(e)
            }
        })
    }

### 存储

> `cookie`，`localStorage`，`sessionStorage`区别

1. `localStorage`数据会永远存储，除非代码回手动删除
2. `sessionStorage`数据只存在于当前会话，浏览器关闭则清空

一般用`localStorage`会更多一些

#### 存储-cookie

- 存储大小，最大4kb
- `http`请求时需要发送到服务器端，增加请求数据量

1. localStorage 和 sessionStorage
2. `html5`专门为存储而设计的，最大可为5M
3. `api`简单易用`setItem`，`getItem`

不会随着`http`请求被发送出去

#### 存储-localStorage

代码：

    localStorage.setItem('a',100)
    localStorage.getItem('a')

#### 存储-sessionStorage

代码：

    sessionStorage.setItem('a',100)
    sessionStorage.getItem('a')

### 开发环境

1. git
2. 调试工具
3. 抓包
4. webpack babel
5. linux常用命令

#### git

- 大型项目需要多人协作开发，必用git

代码：常用git命令

    git add .
    git checkout xxx
    git commit -m 'xxx'
    git push origin master
    git pull origin master
    
    git branch
    git checkout -b xxx / git checkout xx
    git merge xxx

#### 调式

> chrome调试工具

1. `Elements`
2. `Network`
3. `Console`
4. `Application`
5. `debugger`

### 调式，抓包

移动端h5页，查看网络请求，需要用工具抓包

`windows`一般用`fiddler`

#### webpck和babel

代码：

    const path = require('path')
    
    module.exports = {
        mode: 'development',
        entry: path.join(__dirname, 'src', 'index.js'),
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname,'dist')
        }
    }

#### linux命令

线上机器一般都是linux

代码：

    ssh work
    ls
    
    rm -rf abc
    cd dist
    mv index.html index1.html
    
    rm a1.js
    touch d.js
    rm -rf d.js

### 运行环境

1. 运行环境既浏览器`server`端有`nodejs`
2. 网页加载过程
3. 性能优化
4. 安全

### 页面加载和渲染过程

1. 从输入`url`到渲染出页面的整个过程
2. window.onLoad和DOMContentLoaded的区别

- 加载资源的形式
- 加载资源的过程
- 渲染页面的过程

资源的形式：`html`代码，媒体文件，如图片，视频等，`javascript`，`css`。

加载过程：`dns`解析，域名，`ip`地址。浏览器根据`ip`地址向服务器发起`http`请求。

服务器处理`http`请求，并返回给浏览器。

渲染过程，根据`html`代码生成`dom tree`，根据`css`代码生成`cssom`。讲`dom tree`和`cssom`整合行程`render tree`。

根据`render tree`渲染页面，遇到`script`暂停渲染，优先加载并执行`js`代码，完成再继续。

### 页面渲染

`window.onLoad`和`DOMContentLoaded`

代码：

    window.addEventListener('load',function(){
        // 页面的全部资源加载完才会执行，包括图片，视频等
    })
    document.addEventListener('DOMContentLoad',function(){
      // dom渲染完既可执行，此时图片，视频还可能没有加载完 
    })

1. `window.onload`资源全部加载完才能执行，包括图片
2. `DOMContentLoaded DOM`渲染完成即可，图片可能还没下载

### 性能优化

手写防抖，节流

原则：

1. 多使用内存，缓存或其他方法
2. 减少cpu计算量，减少网络加载耗时

让加载更快，渲染更快，减少资源体积。减少访问次数，合并代码，`ssr`服务器端渲染，缓存。

对`dom`查询进行缓存，频繁`dom`操作，合并到一起插入`dom`结构，节流`throttle`防抖`debounce`。

> ssr

服务器端渲染，讲网页和数据一起加载，一起渲染

非ssr，先加载网页，再加载数据，再渲染数据

#### 懒加载

代码：

    <img id="img1" src="preview.png" data-realsrc="abc.png"/>
    <script type="text/javascript">
    var img1 = document.getElementById('img1')
    img1.src = img1.getAttribute('data-realsrc')
    </script>

### 防抖debounce

1. 监听一个输入框，文字变化后触发change事件
2. 直接用keyup事件，则会频繁触发change事件

防抖，用户输入结束或暂停时，才会触发change事件。

代码：

    const input1 = document.getElementById('input1')
    input1.addEventListener('keyup', function(){
        console.log(input1.value)
    }}

代码：

    const input1 = document.getElementById('input1')
    let timer = null
    input1.addEventListener('keyup', function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            // 模拟触发change事件
            console.log(input1.value)
            // 清空定时器
            timer = null
        },500)
    })
 
debounce防抖代码：

    function debounce(fn, delay = 500) {
        // timer 是闭包中的
        let timer = null
        return function() {
            if(timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(()=>{
                fn.apply(this, arguments)
                timer = null
            },delay)
        }
    }
    
    input1.addEventListener('keyup', debounce(()=>{
        console.log(input1.value)
    }),600)

节流`throttle`

拖拽一个元素时，要随时拿到该元素被拖拽的位置

代码：

    const div1 = document.getElementById('div1')
    let timer = null
    div1.addEventListener('drag',function(e){
        if(timer){
            return
        }
        timer = setTimeout(()=>{
            console.log(e.offsetX, e.offsetY)
            timer = null
        },100)
    })

节流代码：

    function throttle(fn, delay = 100) {
        let timer = null
        return function() {
            if(timer) {
                return
            }
            timer = setTimeout(()=>{
                fn.applay(this,arguments)
                timer = null
            },delay)
        }
    }
    
    div1.addEventListener('drag',throttle(function(e){
        console.log(e.offsetX,e.offsetY)
    },200))

### web安全

1. 前端web常见的攻击方式有哪些？

1. xss跨站请求攻击
2. xsrf跨站请求伪造

### 运行环境

1. 页面加载：加载，渲染
2. 性能优化：加载资源优化，渲染优化
3. 安全：xss，csrf

### 总结

#### 什么是变量提升

1. var 和 let const 的区别
2. typeof返回哪些类型
3. 举例强制类型转换和隐式类型转换

#### var和let const 的区别

var是es5的语法，let const 是es6语法,var有变量提升

var和Let是变量，const是常量，不可修改

let const有块级作用域，var没有

![](https://user-gold-cdn.xitu.io/2020/3/14/170d966041f9a41b?w=218&h=96&f=png&s=17268)

![](https://user-gold-cdn.xitu.io/2020/3/14/170d96637c551926?w=185&h=94&f=png&s=11655)

![](https://user-gold-cdn.xitu.io/2020/3/14/170d96bf2a5e2d1c?w=406&h=465&f=png&s=21279)

object和function

强制类型转换和隐式类型转换

强制：parseInt，parseFloat，toString等

#### isEqual

1. 手写深度比较
2. split()和join()的区别
3. 数组，pop,push,unshift,shift

> lodash.isEqual

    //实现如下效果
    const obj1 = {a:10, b:{x:100,y:200}}
    const obj2 = {a:10, b:{x:100,y:200}}
    isEqual(objq,obj2) === true

判断是否是对象或数组

代码：

    function isObject(obj){
        return typeof ojb === 'object' && obj !== null
    }
    // 全相等
    function isEqual(obj1,obj2){
        if(!isObject(obj1) || !isObject(obj2)) {
            // 值类型
            return obj1===obj2
        }
        if(obj1===obj2){
            return true
        }
        // 两个都是对象或数组，而且不相等
        const obj1key = Object.keys(obj1)
        const obj2key = Object.keys(obj2)
        
        if(obj1key.length !== obj2key.length){
            return false
        }
        for(let key in obj1){
            const res = isEqual(obj1[key],obj2[key])
            if(!res){
                return false
            }
        }
        return true
    }

split()和join()的区别

    '1-2-3'.split('-') // [1,2,3]
    [1,2,3].join('-') // '1-2-3'

数组的pop，push，unshift，shift

功能分别是什么，返回值是什么，有什么影响。

pop返回删除的最后一个值

push返回追加后元素的长度

unshift插入到最前面，返回长度length

shift删除最前面的，返回删除的值

- pop，shift-》返回值
- unshift, push-》length

![](https://user-gold-cdn.xitu.io/2020/3/14/170d9873cf0a1a73?w=442&h=217&f=png&s=74233)

1. 数组slice和splice的区别
2. [10,20,30].map(parseInt)返回结果
3. ajax请求get和post的区别

![](https://user-gold-cdn.xitu.io/2020/3/14/170d98d2ab2c87df?w=412&h=189&f=png&s=59035)

![](https://user-gold-cdn.xitu.io/2020/3/14/170d98e868e72491?w=558&h=112&f=png&s=37007)

- get用于查询，post用于提交
- get参数拼接在url上，post放在请求体内

#### call和apply的区别

代码：

    fn.call(this, p1,p2,p3)
    fn.apply(this, argument)

### 事件代理是什么

代码：

    const p1 = document.getElementById('p1')
    const body = document.body
    
    bindEvent(p1, 'click', e=>{
        e.stopProgation();
        alert()
    })
    bindEvent(body, 'click', e=>{
        alert()
    })

#### 闭包是什么，有什么特性，有什么负面影响

1. 作用域和自由变量

自由变量的查找，要在函数定义的地方，不是执行的地方

闭包不要乱用，变量会常驻内容，不会释放

闭包：

    function create() {
        let a=100
        return function(){
            console.log(a)
        }
    }
    let fn = create()
    let a=200
    fn() // 100

1. 如何阻止事件冒泡和默认行为？
2. 查找，添加，删除，移动dom节点的方法
3. 如何减少dom操作

- `event.stopPropagation()`
- `event.preventDefault()`

代码：

    // 新建节点
    const newP = document.createElement('p')
    newP.innerHTML = 'this is newP'
    // 插入节点
    div1.appendChild(newP)
    // 移动节点
    const p1 = document.getElementById('p1')
    div2.appendChild(p1)
    //获取父元素
    console.log(p1.parentNode)

#### 如何减少dom操作

1. 缓存dom查询结果
2. 多次dom操作，合并到一次插入

代码：

    const list = document.getElementById('list')
    const frag = document.createDocumentFragment()
    
    for(let i=0; i<20; i++){
        const li = document.createElement('li')
        li.innerHTML = 'list'
        frag.appendChild(li)
    }
    list.appendChild(frag)

> jsonp的原理，为什么它不是真正的ajax

浏览器的同源策略和跨域

#### document load 和 ready的区别

load:

页面的区别资源加载完才会执行

ready:

dom渲染完既可执行，图片，视频等还没有加载完

#### 函数声明和函数表达式的区别

函数声明

`function fn(){...}`

函数表达式：

`const fn = function(){...}`

函数声明会预加载，而函数表达式不会

#### new Object()和Object.create()的区别

- `{}`等同`new Object()`，原型Object.prototype

![](https://user-gold-cdn.xitu.io/2020/3/14/170d9b0d340d4069?w=628&h=178&f=png&s=14397)

#### 场景题1

代码：

    let i 
    for (i = 1; i <= 3; i++) {
        setTimeout(function(){
            console.log(i)
        },0)
    }

#### 场景2

代码：

    let a = 100
    function test() {
        alert(a)
        a = 10
        alert(a)
    }
    test()
    alert(a)

#### 场景3

手写字符串trim方法，保证浏览器兼容性

用Js实现继承

#### 场景4

1. 如何捕获Js程序中的异常
2. 什么是json
3. 获取当前页面url参数

代码：

    try {
        // todo
    }catch(error) {
        console.error(error)
    }finally{
        
    }

json是一种数据格式，本质是一段字符串，json格式和js对象结构一致。

`window.JSON`是一个全局对象，`JSON。stringify`，`JSON.parse`

> 获取当前页面url参数

传统方式，查找`location.search`

新`api，URLSearchParams`

#### 场景5

1. 讲url参数解析为js对象
2. 手写数组flatern
3. 数组去重

代码：
    
    // 1
    function queryToObj(){
        const res={}
        const search = location.search.substr(1)
        search.split('&').forEach(res => {
            const arr = res.split('=')
            const key = arr[0]
            const key = arr[1]
            res[key] = val
        })
    }

使用URLSearchParams

    function queryToObj() {
        const res = {}
        const pList = new URLSearchParams(location.search)
        pList.forEach((val,key) => {
          res[key] = val  
        })
        return res
    }

手写数组flatern

![](https://user-gold-cdn.xitu.io/2020/3/15/170d9ea396fed91d?w=603&h=302&f=png&s=79734)

代码：

    function flat(arr) {
        const isDeep = arr.some(item=> item instanceof Array)
        if(!isDeep) {
            return arr
        }
        const res = Array.prototype.concat.apply([],arr)
        return flat(res)
    }

数组去重

代码：

    function unique(arr) {
        const res=[]
        arr.forEach(item => {
            if(res.indexOf(item) < 0) {
                res.push(item)
            }
        })
        return res
    }

使用Set

    function unique(arr) {
        const set = new Set(arr)
        return [...set]
    }

#### 场景6

1. 手写深拷贝
2. 使用`RAF requestAnimateFrame`
3. 前端性能的优化

代码：

    function deepClone(obj = {}) {
        if(type of obj !== 'object' || obj == null){
            return obj
        }
        let result
        if(obj instanceof Array) {
            result = []
        }else{
            result = {}
        }
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                result[key] = deepClone(obj[key])
            }
        }
        return result
    }

> `Object.assign`不是深拷贝!

#### 性能优化

原则：多使用内存，缓存，减少计算，网络请求

加载页面，页面渲染，页面操作等多多思考问题。

# 最后

欢迎加我微信Jeskson(`xiaoda0423`)，拉你进技术群（掘金-前端高校），长期交流学习。

扫码关注公众号，订阅更多精彩内容。

![](https://user-gold-cdn.xitu.io/2020/3/6/170b081ce443a65c?w=1710&h=624&f=png&s=158784)
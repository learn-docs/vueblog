> 把你的前端拿捏得死死的，每天学习得爽爽的，达达前端程序员，微信搜索【程序员哆啦A梦】关注这个不一样的程序员。
>
> 感谢不负每一份热爱前端的程序员，不论前端技能有多奇葩，欢迎关注加我入群vx:xiaoda0423

## 前言

希望可以通过这篇文章，能够给你得到帮助。

## 1. JavaScript垃圾回收机制的了解

对于在JavaScript中的字符串，对象，数组是没有固定大小的，只有当对他们进行动态分配存储时，解释器就会分配内存来存储这些数据，当JavaScript的解释器消耗完系统中所有可用的内存时，就会造成系统崩溃。

> 内存泄漏，在某些情况下，不再使用到的变量所占用内存没有及时释放，导致程序运行中，内存越占越大，极端情况下可以导致系统崩溃，服务器宕机。

so，JavaScript有自己的一套垃圾回收机制，JavaScript的解释器可以检测到什么时候程序不再使用这个对象了（数据），就会把它所占用的内存释放掉。

针对JavaScript的来及回收机制有以下两种方法（常用）：**标记清除**，**引用计数**。

### 标记清除

当变量进入到执行环境时，垃圾回收器就会将其标记为“进入环境”，当变量离开环境时，就会将其标记为“离开环境”。

垃圾回收器在运行时会给存储在内存中的所有变量都加上标记，接着去掉环境环境中的变量，和被环境中的变量所引用的变量的标记，在此之后再被加上标记的变量将被视为准备删除的变量，就是要删除的变量，垃圾收集器完成内存清除工作，销毁这些带有的标记的值，回收它们所占用的内存空间。

### 引用计数

说到引用计数，部分人是不知道是啥的，引用计数作为垃圾回收策略的一种，含义是跟踪记录每个值被引用的次数。

当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是为1。

相反的，如果该变量的值变成了另外一个，则这个值的引用次数减一。（当这个值的引用次数变为0的时候，说明没有变量在使用，则这个值没法被访问。）---因而就可以将它占用的空间回收起来，这样垃圾回收器就会在运行的时候清理引用次数为0的值占用的空间。

但是引用计数存在如果相互引用大量的存在会导致大量的内存泄漏；同时如果出现循环引用问题也会导致内存泄漏的问题。

所以，要减少JavaScript中的垃圾回收，在初始化的时候新建对象，然后在后续过程中尽量多的重用这些创建好的对象。我们可以：1. 数组array优化；2. 对象尽量优化；3. 循环优化。

如下内存分配方式：

```
{} 创建一个新对象
[] 创建一个新数组
funtion(){...} 创建一个新的方法
new Foo() new 关键字，一次内存的分配
```

重复利用：对对象object的优化，遍历此对象的所有属性，逐个删除属性，最终将对象清空为一个空对象。

## 2. 说说有几种类型的DOM节点

嗯，好的，DOM节点类型有：Document节点，整个文档是一个文档节点；Element节点，每个HTML标签是一个元素节点；Attribute节点，每一个HTML属性是一个属性节点；Text节点，包含在HTML元素中的文本是文本节点。

## 3.在script标签中defer和async属性的区别

一般情况下，脚本的下载和执行将会按照文档的先后顺序同步执行，当 脚本下载和执行 的时候，文档解析会被阻塞，在 脚本下载和执行 完成之后文档才会往下继续进行解析。

如果script标签中没有defer或async属性，浏览器在渲染过程中遇到script标签时，会停止渲染来下载执行js代码，等待js执行完毕后，浏览器再从中断的地方恢复渲染。

你会知道这样浏览器会造成阻塞，如果你想要你的项目首屏渲染很快的话，就尽量不要在首屏加载js文件，所以学习的时候会建议将script标签放在body标签底部。

说到defer（延迟执行）和async（异步加载）属性的区别，下面展示使用script标签有以下三种情况：

```
<script src="dadaqianduan.js"></script> // 浏览器会立即加载并执行相应的脚本

<script async src="dadaqianduan.js"></script> // 后续文档的加载和渲染与js脚本的加载和执行是并行进行的

<script defer src="dadaqianduan.js"></script> // 加载后续文档的过程和js脚本的加载是并行进行的，js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前
```

当加载的js脚本有多个的时候，async是无顺序的加载，而defer是有顺序的加载，defer属性表示延迟执行引入的JavaScript，这段JavaScript加载时HTML并未停止解析，so，defer是不会阻塞html解析的，它是等Dom加载完后再去执行JavaScript代码的。（当html解析过程中，遇到defer属性，就会异步加载该js文件，不会中断HTML文档的解析，当整个HTML解析完成后，回头再来解析该js文件）

1. 当有defer属性时，脚本的加载过程 和 文档加载 是 **异步发生**的，等到 **文档解析** 完脚本才开始执行。
2. 当有async属性时，脚本的加载过程 和 文档加载 也是**异步发生**的，这里注意的是 **脚本下载完成**后，会**停止HTML解析**，**先执行脚本**，**脚本解析完** 后**继续HTML解析**。
3. 同时有async和defer属性时，执行效果与async一致。

> defer属性-是否延迟执行脚本，直到页面加载为止；async属性-脚本一旦可用，就异步执行。defer属性并行加载JavaScript文件，会按照页面上的script标签顺序执行，而async并行加载，下载完成就立即执行，不会按照页面上的顺序执行。

## 4. 说说你对闭包的了解

面试前端，当面试官问你，谈谈你对闭包的理解的时候，该怎么回答呢？

简单说就是 定义在一个函数内部的函数，内部函数持有 外部函数 内的变量 或 参数的引用。 内部函数依赖外部函数， 外部函数参数和变量 不会被垃圾回收机制回收，这些变量会始终存在于内存中。

好处可以读取函数内部的变量，可以避免全局变量的污染，坏处会增加内存的使用量，容易导致内存泄漏，解决方法就是退出函数前，将不适用的局部变量全部删除。在JavaScript中，函数即是闭包，只有函数才会产生作用域。

> 闭包特性，函数嵌套函数，在函数内部可以引用外部的参数和变量，参数和变量不会被垃圾回收机制回收。

由于在js中，变量的作用域属于函数作用域，在函数执行后，作用域就会被清理，内存也会被回收，但是由于闭包是建立在一个函数内部的 子函数，由于子函数可以访问上级作用域的原因，即使上级函数执行完，作用域也不会随之销毁。

> 在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

代码闭包表现形式：

```
// 作为函数参数传递
var a = 1;
function foo() {
 var a = 2;
 function dada() {
  console.log(a);
 }
 da(dada);
}

function da(fn) {
 // 闭包
 fn();
}

foo(); // 输出2
```

## 5. 解释一下unshift()的方法

unshift()方法可以想数组开头添加一个或多个元素，并返回新的长度。

```
arrayObject.unshift(newelement1,newelement2,....,newelementX)
newelement1	必需。向数组添加的第一个元素。
newelement2	可选。向数组添加的第二个元素。
newelementX	可选。可添加若干个元素。
```

返回值- `arrayObject` 的新长度。

`unshift()` 方法将把它的参数插入 `arrayObject` 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。

请注意，`unshift()` 方法不创建新的创建，而是直接修改原有的数组。 该方法会改变数组的长度。

## 6. 说说encodeURI()和decodeURI()的作用是什么

1.`encodeURl( )`用于将URL转换为十六进制编码。
2.`decodeURI( )`用于将编码的URL转换回正常URL。

## 7. 为什么不建议在JavaScript中使用innerHTML

`innerHTML`内容每次刷新，因此很慢。 在`innerHTML`中没有验证的余地，因此，更容易在文档中插入错误代码，从而使网页不稳定。

## 8. 在DOM操作中怎样创建，添加，移除，替换，插入，查找节点

DOM节点操作方法：

1. 访问、获取节点

```
document.getElementById(id);
// 返回对拥有指定id的第一个对象进行访问

document.getElementsByName(name);
// 返回带有指定名称的节点集合

document.getElementsByTagName(tagName);
// 返回带有指定标签名的对象集合

document.getElementsByClassName(className);
// 返回带有指定class名称的对象集合
```

2. 创建节点/属性

```
createDocumentFragment() //创建一个DOM片段

document.createElement(eName); // 创建一个节点
document.createAttribute(attrName); // 对某个节点创建属性
document.createTextNode(text); // 创建文本节点
```

3. 添加节点

```
document.insertBefore(newNode, referenceNode); // 在某个节点前插入节点
parentNode.appendChild(newNode); // 给某个节点添加子节点
```

4. 复制节点

```
cloneNode(true | false); // 复制某个节点
```

5. 删除节点

```
parentNode.removeChild(node); // 删除某个节点的子节点node是要删除的节点
```

6. 属性操作

```
getAttribute(name) // 通过属性名称获取某个节点属性的值
setAttribute(name,value); // 通过某个节点属性的值
removeAttribute(name); // 删除某个属性
```

7. 获取相邻的节点

```
curtNode.previousSibling; // 获取已知节点的相邻的上一个节点
curtNode.nextSibling; // 获取已知节点的下一个节点
```

## 9. 如何实现浏览器内多个标签页之间的通信

使用`localStorage`,使用`localStorage.setItem(key,value)`;添加内容 

使用storage事件监听添加、修改、删除的动作 

```
window.addEventListener("storage",function(event){
 $("#name").val(event.key+"="+event.newValue);
});
```

```
$(function(){
   $("#btn").click(function(){
       var name = $("#name").val();
       localStorage.setItem("name", name);
   });
});
```

## 10. null和undefined的区别是什么

```
console.log(null==undefined)//true

console.log(null===undefined)//false
```

`null`： Null类型，代表“空值”，代表一个空对象指针

`undefined`： Undefined类型，当一个声明了一个变量未初始化时，得到的是undefined

undefined表示“缺少值”，此处应该有一个值，但是还没有定义。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06190e5a01d44a17ba40a09fdf81069b~tplv-k3u1fbpfcp-watermark.image)

null表示“没有对象”，该处不应该有值。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6bc028c9f1e451b9dc8a01508bb28ed~tplv-k3u1fbpfcp-watermark.image)

## 11. new操作符的作用是什么

new操作符首先，创建了一个空对象：

```
var obj = new Object();
```

设置原型链：

```
obj._proto_ = Object.prototype
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b5152a37a144cee8e23346d25f9d01e~tplv-k3u1fbpfcp-watermark.image)

示例代码了解new的作用：

```
function da(name) {
 this.name = name;
}
da.prototype.sayName = function() {
 console.log(this.name);
}
const jeskson = new da('dada');
console.log(jeskson.name); // dada
jeskson.sayName(); // dada
```

由例子得出：

new 通过构造函数 da 创建出来的实例可以访问到构造函数中的属性

new 通过构造函数 da 创建出来的实例可以访问到构造函数原型链中的属性，（通过new操作符，实例与构造函数通过原型链连接了起来）

如果给构造函数一个return返回值，（没有显式的return任何值，默认返回undefined)

```
function da(name) {
 this.name = name;
 return 1;
}
const jeskson = new da('dada');
console.log(jeskson.name); // dada
```

> 这个返回值没有任何的用处，构造函数如果返回原始值，这个返回值没有意义。

```
function da(name) {
 this.name = name;
 console.log(this); // da {name: 'dada'}
 return {age:1}
}
const jeskson = new da('dada');
console.log(jeskson); // {age:1}
console.log(jeskson.name); // undefined
```

> 构造函数如果返回值为对象，那么这个返回值就会被正常使用。

1. new 操作符会返回一个对象
2. 这个对象，也就是构造函数中的this，可以访问到挂载在this上的任意属性
3. 这个对象可以访问到构造函数原型上的属性
4. 返回原始值会忽略，返回对象会正常处理

## 12. JavaScript延迟加载的方式有哪些

js的延迟加载有助于提高页面的加载速度

延迟有：defer属性，async属性，动态创建DOM方式，使用JQuery的getScript方法，使用setTimeout延迟方法，让JS最后加载。

> 使用setTimeout延迟方法

```
<script type="text/javascript" >
  function A(){
    $.post("/lord/login",{name:username,pwd:password},function(){
      alert("Hello");
    });
  }
  $(function (){
    setTimeout('A()', 1000); //延迟1秒
  })
</script>
```

## 13. call()和apply()的区别和作用是什么

call(), applay() 都属于Function.prototype的一个方法，它是JavaScript引擎内实现的，属于Function.prototype，所以每个Function对象实例，每个方法都有call，apply属性。

call()和apply() ，它们的作用都是相同的，不同的在于，它们的参数不同。

```
call(this, arg1, arg2, arg3);
apply(this, arguments);

function add(a,b){
 console.log(a+b);
}
function sub(a,b){
 console.log(a-b);
}
add.call(sub, 2, 1);
add.apply(sub, [2,1]);
```

对于A.applay(B)或A.call(B)，简单地说，B先执行，执行后根据结果去执行A，用A去执行B的内容代码，再执行自己的代码。

```
var f1 = function(a,b) {
 console.log(a+b);
}
var f2 = function(a,b,c) {
 console.log(a,b,c);
}
f2.apply(f1,[1,2]) // 1 2 undefined
```

解析一下就是，先执行f1,f1执行后，这里注意f1是f1，不是f1()执行方法，所以里面的console.log等内容代码并没有执行，相等于，初始化了代码f1，由于没有返回值，结果是undefined，f2执行的时候this指向window。参数中为`[1,2]`，解析后参数为1,2,undefined；执行f2方法后，打印出结果值为：1 2 undefined

A.call(B, 1,2,3) 后面的参数都是独立的参数对象，会被自动解析为A的参数：

```
var f1 = function(a,b) {
 console.log(a+b);
}
var f2 = function(a,b,c) {
 console.log(a,b,c);
}
f2.call(f1,[1,2]); // [1,2] undefined undefined
f2.call(f1, 1, 2); // 1 2 undefined
```

解析一下就是，参数中的`[1,2]`，因为传入了一个数组，相当于只传入了第一个参数，b和c参数没有传。

使用apply()和call()：

```
 //apply用法
 var arr = new Array(1,2,3)
 var arr1 = new Array(11,21,31)
 Array.prototype.push.apply(arr,arr1)
 console.log(arr)//[1, 2, 3, 11, 21, 31]
 
 //call用法
 var arr = new Array(1,2,3)
 var arr1 = new Array(11,21,31)
 Array.prototype.push.call(arr,arr1[0],arr1[1],arr1[2])
 console.log(arr)//[1, 2, 3, 11, 21, 31]
```

> 数组利用Math求最大和最小值

```
 //apply的用法
 var _maxNum = Math.max.apply(null,[1,3,2,4,5])
 console.log(_maxNum)//5
 var _minNum = Math.min.apply(null,[1,3,2,4,5])
 console.log(_minNum)//1
 
 //call的用法
 var _maxNum = Math.max.call(null,1,3,2,4,5)
 console.log(_maxNum)//5
 var _minNum = Math.min.call(null,1,3,2,4,5)
 console.log(_minNum)//1
```

one总结：Function.prototype.apply和Function.prototype.call的作用是一样的，区别在于传入参数的不同；第一个参数都是指定函数体内this的指向；第二个参数就不同了，apply是传入带下标的集合，数组或者类数组，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，都会传给函数作为参数。call比applay的性能要好，平常多用call。

two总结：尤其是es6引入了Spread operator延展操作符后，即使参数是数组，可以使用call了。

```
let params = [1,2,3,4,5];
dada.call(obj, ... params);
```

> 传入的第一个参数为 null, 函数体内的 this 会指向默认的宿主对象, 在浏览器中则是 window

```
var func = function( a, b, c ){ 
    console.log(this === window); // 输出:true
};
func.apply( null, [ 1, 2, 3 ] );

// 在严格模式下,函数体内的 this 还是为 null

var func = function( a, b, c ){ 
    "use strict";
    console.log(this === null); // 输出:true
};
func.apply( null, [ 1, 2, 3 ] );
```

> 改变this指向

```
var obj1={ 
    name: 'dada'
};
var obj2={ 
    name: 'da'
};
window.name = 'window';
var getName = function(){ 
    console.log ( this.name );
};
getName(); // 输出: window
getName.call( obj1 );// 输出: dada
getName.call(obj2 ); // 输出: da
```

```
document.getElementById( 'div1' ).onclick = function(){
    console.log( this.id );// 输出: div1
    var func = function(){ 
        console.log ( this.id );// 输出: undefined
    } 
    func();
}; 
//修正后
document.getElementById( 'div1' ).onclick = function(){
    var func = function(){ 
        console.log ( this.id );// 输出: div1
    } 
    func.call(this);
}; 
```

## 14. 哪些操作会造成内存泄漏

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a9317e6a6e4491ca9cba209840f3b0b~tplv-k3u1fbpfcp-watermark.image)

## 15. 说说JavaScript对象的几种创建方式

> 工厂模式,创建方式

```
function createPerson(name,age,job){
    var o = new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName = function(){
        alert(this.name);
    }
}
var person1 = createPerson("da",1,"it");
var person2 = createPerson("dada",2,"it");
```

> 构造函数模式

```
function Person(name,age,ob){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName = function(){
        alert(this.name);
    }
var person1 = new Person("dada",1,"web");
var person2 = new Person("dada",2,"web");
}
```

使用原型模式：

```
function Person(){
}
Person.prototype.name = "da";
Person.prototype.age = 1;
Person.prototype.job = "web";
Person.prototype.sayName = function(){
    alert(this.name);
}
 
var person1 = new Person();
person1.sayName();    //"dada"
 
var person2 = new Person();
person2.sayName();    //"dada"
 
alert(person1.sayName == person2.sayName);   //true
```

> 组合使用构造函数模式和原型模式

```
function Person(name,age){
    this.name = name;
    this.age = age;
    this.friends = ["da","dada"];
}
Person.prototype = {
    constructor:Person,
    sayName:function(){
        alert(this.name);
    }
}
var person1 = new Person("da1",1);
var person2 = new Person("da2",2);
person1.friends.push("dadada");
console.log(person1.friends);    //["da","dada","dadada"]
console.log(person2.friends);    //["da","dada"]
console.log(person1.friends === person2.friends);    //false
console.log(person1.sayName === person2.sayName);   //true
```

> 动态原型模式

```
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;

    if(typeof this.sayName!="function"){
        Person.prototype.sayName=function(){
            alert(this.name);
        };
    }
}
```

> JavaScript对象的创建方式，1，Object构造函数式，2，对象字面量式,3，工厂模式,4，安全工厂模式，5，构造函数模式，6，原型模式，7，混合构造函数和原型模式，8，动态原型模式，9，寄生构造函数模式，10，稳妥构造函数模式。

## 16. 如何实现异步编程

学习使用异步很重要，在浏览器端，耗时很长的操作都应该异步执行，避免浏览器失去响应，最好的例子是ajax操作。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8634904b9e684370be2890d86740e61e~tplv-k3u1fbpfcp-watermark.image)

```
简单的promise对象的构造函数的结构：

var Promise = function() {
 this.callbacks = []; // 用于管理回调函数
}
Promise.prototype = {
 construct: Promise,
 resolve: function(result) { // 请求成功时执行的方法
 },
 reject: function(result) { // 请求失败时执行的方法
 },
 complete: function(type, result) { // 执行回调
 },
 then: function(successHandler, failedHandler) { // 绑定回调函数
 }
}
```

对于回调函数，好处是简单，容易理解，但是缺点在于代码的阅读和维护，各个部分之间高度耦合，流程也会很乱，每个任务只能指定一个回调函数，称之为：回调地狱。

```
// 同步操作变成异步操作
f1();
f2();

function f1(callback) {
 setTimeout(function() {
  callback();
 },1000);
}
f1(f2);
```

事件监听(采用事件驱动模式，任务的执行不取决于代码的顺序，而取决于某个事件是否发生)示例如下：

```
$('#clickBtn').on('click',function(e){console.log('xxx');}
```

```
f1.on('dada', f2);

function f1() {
 setTimeout(function() {
  f1.trigger('dada');
 },1000);
}

// f1.trigger('dada')表示执行完成后，立即触发dada事件，然后开始执行f2
```

对于事件监听，可绑定多个事件，而且每个事件可以指定多个回调函数，可以“去耦合”，有利于实现模块化，缺点就是整个程序都要编程事件驱动型，运行流程会变得很不清晰。

对于采用发布，订阅方式，和“事件监听”类似。(发布/订阅)

对于使用Promise对象实现，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。

## 17. 说说JavaScript的同源策略

同源策略的目的是为了防止某个文档或脚本从多个不同源装载，同源策略是指，协议，域名，端口相同。同源策略是一种安全协议，指一段脚本只能读取来自同一来源的窗口和文档的属性。

## 18. 说一下为啥要有同源限制

有同源限制可以放置黑客盗取信息。

## 19. 在JavaScript中，为啥说函数是第一类对象

函数是第一类对象：

这些函数可以作为参数传递给其他函数，作为其他函数的值返回，分配给变量，也可以存储在数据结构中。
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84d844d9a6d8448fb720bd10f8fc60c9~tplv-k3u1fbpfcp-watermark.image)

如果公民分等级，一等公民什么都可以做，次等公民这不能做那不能做。JavaScript的函数也是对象，可以有属性，可以赋值给一个变量，可以放在数组里作为元素，可以作为其他对象的属性，什么都可以做，别的对象能做的它能做，别的对象不能做的它也能做。这不就是一等公民的地位嘛。

## 20. 函数声明与函数表达式的区别

函数声明：

```
foo(); // 在函数声明之后调用 foo，可以正常调用。因为 foo 被提前到最前面定义了。
function foo() {
   return true;
}
```

调用：

```
函数名(参数)

函数名.call(函数名,参数)

函数名.apply(函数名,[参数])

new 函数名(参数)

定时器

把函数声明变成函数表达式再调用

ES6里的模版字符串
```

函数表达式：

```
foo(); // 在函数表达式之前调用函数，报错。因为这时候还没有 foo 这个变量。
var foo = function() {
   return foo;
};
```

调用

```
函数名(参数)

函数名.call(函数名,参数)

函数名.apply(函数名,[参数])

new 函数名(参数)

直接在后面加上一对小括号

定时器

ES6里的模版字符串

以被赋值的形式出现（根据具体形式调用）
```

> 在向执行环境中加载数据时，解析器对函数声明和函数表达式不一样的，解析器首先读取读取函数声明，并使它在执行任何代码之前可用，对于函数表达式，就需要等到解析器执行到它所在的代码行。

JavaScript解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。

```
var getName // 变量被提升，此时为undefined

getName() // dada 函数被提升

var getName = function() {
 console.log('da')
}
// 函数表达式此时才开始覆盖函数声明的定义

getName() // da

function getName() {
 console.log('dada')
}

getName() // da
```

> 在JavaScript中定义一个函数有四种方式

```
1. 函数声明
2. 函数表达式
3. ES6里箭头函数
4. new Function()
```

- ES5 规定，函数只能在顶级作用域和函数作用域中声明，否则是不合法的。
- ES6 引入了块级作用域的概念，这种定义方法就被允许了。

## 21. 如何删除一个cookie

代码如下：

```
document.cookie = 'user=jeskson;expires='+new Date(0);
```

## 22. 写一下一个方法，求字符串的长度

> 一个英文字符 占用一个字节，一个中文 字符占用两个字节

```
function byte(str) {
 var bytes = str.length;
 for(var i=0; i<bytes; i++) {
  if(str.charCodeAt(i)>255) {
   bytes++;
  }
 }
 return bytes
}
console.log(byte('dada'));
```

## 23. attribute和property的区别是什么

attribute是dom元素在文档中作为HTML标签拥有的属性，property就是dom元素在JavaScript中作为对象拥有的属性。

attribute特性，property属性。

## 24. 延迟脚本在JavaScript中有什么作用

默认情况下，在页面加载期间，HTML 代码的解析将暂停，知道脚本停止执行。如果服务器速度较慢或者脚本特别沉重，会导致网页延迟，在使用Deferred时，脚本会延迟执行直到HTML解析器运行。这减少了网页加载时间，并且它们的显示速度更快。

## 25. 说说什么是闭包，闭包的优缺点是什么

```
function outer() {
 var a = '变量1'
 var inner = function() {
  console.info(a);
}
return inner; // inner就是一个闭包函数，因为它能访问到outer函数的作用域
}
```

在JavaScript中的一大特点就是闭包，很多高级应用都要依靠闭包来实现。由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大的，所以不要乱滥用闭包，否则会导致页面的性能问题，在IE中可能会导致内存泄漏，所以可以在退回函数前，将不使用的局部变量全部删除。

## 26. 判断一个对象是否属于某个类

- instanceof关键字，判断一个对象是否是类的实例化对象
- constructor属性，判断一个对象是否是类的构造函数

## 27. 你知道有个函数，执行直接对象查找时，它始终不会查找原型，这是什么函数

hasOwnProperty

## 28. document.write和innerHTML的区别

- document.write会重绘整个页面
- innerHTML可以重绘页面的一部分

效果动态图：

```
<button onclick="fun()" >按鈕</button>
<script>
    function fun() {
        document.write("write内容");
    }
</script>

<button onclick="fun()">按钮</button>
<script>
    function fun() {
       document.getElementById("p").innerHTML="新增加的innerHTML内容";
    }
</script>
```

## 29. 在JavaScript中读取文件的方法是什么

> 读取服务器中的文件内容

```
function readAjaxFile(url) {
 // 创建xhr
 var xhr = new XMLHttpRequest();
 // 监听状态
 xhr.onreadystatechange = function() {
  // 监听状态值
  if(xhr.readyState === 1 && xhr.status === 200) {
   console.log(xhr.responseTest)
  }
 }
 // 打开请求
 xhr.open('GET', url, true)
 // 发送数据
 xhr.send(null)
}
```

> 读取本地计算机中的内容

```
function readInputFile(id) {
 var file = document.getElementById(id).files[0];
 // 实例化
 var reader = new FileReader();
 // 读取文件
 reader.readAsText(file)
 // 监听返回
 reader.onload = function(data) {
  console.log(data, this.result);
 }
}
```

## 30. 如何分配对象属性

```
document.form.action = 'submit';
```

## 31. 常用的JavaScript语句基本规范

- 不要在同一行声明多个变量
- 使用对象字面量替代new Array这种形式
- 不要使用全局函数
- switch语句必须带有default分支
- 函数不应该有时有返回值，有时没有返回值
- for循环必须使用大括号括起来
- if语句必须使用大括号括起来
- 写注释
- 命名规则，构造器函数首字母大写

## 32. eval的功能是什么

eval的功能是把对应的字符串解析成JavaScript代码并运行。但是应该避免使用eval，使用它可能会造成程序不安全，影响性能因要一次解析成JavaScript语句，一次执行。

## 33. 如下执行结果：

```
["1","2","3"].map(parseInt)
```

> `[1,NaN,NaN]`因parseInt需要两个参数val,radix，其中radix表示解析时用的基数，map传递了3个参数item, index, array，对应的radix不合法导致解析失败。

## 34. 说说this对象的理解

this指的是调用函数的那个对象，一般情况下，this是全局对象Global，可以作为方法调用。this随着函数的使用场合的不同，this的值会发生变化。

this是谁调用就指向谁，在全局环境里，指向的是window对象。

```
var name = 'jeskson';
function person() {
 return this.name;
}

console.log(this.name); // jeskson
console.log(window.name); // jeskson
console.log(person()); // jeskson
```

局部环境：

```
var name = "jeskson";

function person() {
 console.log(this.name);
}

person(); // jeskson

var obj = {
 name: "dada",
 person: function() {
  console.log(this.name);
 }
}

obj.person(); // dada
```

构造函数内使用this

```
function Person(name) {
 this.name = name;
 return name;
}
console.log(new Person('jeskson').name); // jeskson
```

使用apply和call函数改变this的指向

```
function person() {
 return this.name;
}

var obj = {
 name: 'jeskson'
}

console.log(person.call(obj)); // jeskson
console.log(person.apply(obj)); // jeskson
```

对象函数调用，哪个对象调用就指向哪个对象

```
<input type="button" id="btnDa" value="dada">

<script>
var btnDa = document.getElementById("btnDa");
btnDa.onClick=function() {
 console.log(this); // this指向的是btnDa对象
}
</script>
```

使用new实例化对象，在构造函数中的this指向实例化对象

```
var show = function() {
 this.myName="jeskson"; /// this指向的是obj对象
}
var obj = new show();
```

## 35. 在JavaScript中什么是类（伪）数组，如何将类（伪）数组转换为标准数组

- 典型的类（伪）数组是函数的argument参数，在调用`getElementsByTagName`和`document.childNodes`方法时，它们返回的`NodeList`对象都属于伪数组。
- 可以使用`Array.prototype.slice.call(fakeArray)`将数组转化为真正的Array对象。

什么是伪数组，是能通过`Array.prototype.slice`转换为真正的数组的带有`length`属性的对象。

```
// 标准的有伪数组对象
var da = { 0: 'a', 1: 'b', length: 2};
var dada = Array.prototype.slice.call(da);
console.log(da[0]); // a
var dadada = [].slice.call(dada);
console.log(da[0]); // a
```

伪数组：就是无法使用数组的方法和api,但任然可以使用便利数组的方式遍历他们。

一个伪数组`Array.prototype.slice.call()`进行转换为一个真正的数组

## 36. JavaScript中的callee和caller的作用是什么

- caller返回一个关于函数的引用，该函数调用了当前函数
- callee返回正在执行的函数，也就是指定的function对象的正文

> caller是JavaScript函数类型的一个属性，它引用调用当前函数的函数; callee则不是函数对象的属性，它是函数上下文中arguments对象的属性。

## 37. 统计字符串中字母的个数或统计最多的字母：

```
aaaabbbccccddhgddada
```

```
function dealStr(str) {
 var obj = {};
 for(var i = 0; i<str.length; i++){
  var v = str.charAt(i);
  if(obj[v] && obj[v].value === v) {
   ++obj[v].count
  }else{
   obj[v] = {
    count: 1,
    value: v
   }
  }
 }
 return obj;
}

var obj = dealStr(str);
for(key in obj) {
 console.log(obj[key].value+'='+obj[key].count);
}
```

## 38. 写一个函数，清除字符串前后的空格

```
function trim(str) {
    if (str && typeof str === "string") {
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
    }
}
```

## 39. 写一个函数实现一个数组合并的方法

for循环数组

```
var arr3 = [];

// 遍历arr1
for (var i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i]);
}

// 遍历arr2
for (var j = 0; j < arr2.length; j++) {
  arr3.push(arr2[j]);
}

console.log(arr3); // [1,2,3,4,5,6]
```

concat()方法:concat()方法，作用是连接两个或更多的数组，并返回一个新的数组。

```
var arr3 = arr1.concat(arr2);

console.log(arr3); // [1,2,3,4,5,6]
```

apply()方法

```
arr1.push.apply(arr1, arr2);
```

## 40. 工作中，常用的逻辑运算符有哪些

- `&&`运算符
- `||`运算符
- `!`运算符

## 41. 什么是事件代理（事件委托）

事件代理，又称为事件委托，就是把原本需要绑定的事件委托给父元素，让父元素负责事件监听，事件代理的原理是DOM元素的事件冒泡，使用事件代理的好处是提高性能。

## 42. 什么是未声明和未定义的变量

1. 未声明的变量出现中不存在且未声明的变量。如果程序尝试读取未声明变量的值，则会遇到运行时错误。

```
xxx is not defined
```

2. 未定义的变量是在程序中声明但尚未给出任何值的变量。如果程序尝试读取未定义变量的值，则返回未定义的值。

已经通过var指令声明，但是没有赋值，没有定义类型，所以会打印`undefined`未定义

## 43. 什么是全局变量，这些变量如何声明，使用全局变量有哪些问题

全家变量是整个代码中都可用的变量，这些变量没有任何作用域。var关键字用于声明局部变量或对象，如果省略var关键字，则声明一个全局变量。

使用全局变量所面临的问题是局部变量和全局变量名称的冲突，很难调试和测试依赖于全局变量的代码。

## 44. 常用的定时器工作说明，使用定时器的缺点

- `setTimeout(function,delay)`函数用于启动在所属延迟之后调用特定功能的定时器。
- `setInterval(function,delay)`函数用于在提到的延迟中重复执行给定的功能，只有在取消时才停止。
- `clearInterval(id)`函数指示定时器停止。

## 45. 说说ViewState和SessionState有什么区别

- ViewState用于会话中的页面
- SessionState用于Web应用程序中的所有页面上访问的用户特定数据

## 46. 什么是`===`运算符

`===`为严格等式运算符，只有当两个操作数具有相同的值和类型时，，才会返回`true`

## 47. JavaScript中的循环结构有哪些

```
for, while, do...while, for_in, for of (es6新增)

while(条件表达式语句)
{
    执行语句块;
}

do
{
    执行语句块；
}
while(条件表达式语句);

for(初始化表达式;循环条件表达式;循环后的操作表达式)
{
    执行语句块;
}
```

## 48. 在JavaScript中的null表示什么

- null 用于表示无值或无对象，表示没有对象或空字符串，没有有效的布尔值，没有数值和数组对象。

## 49. delete操作符的功能有什么

- delete操作符用于删除对象中的某个属性，但是不能删除变量，函数等。

```
    var obj = {
        name: 'jeskson'
    }
    console.log(obj.name);//'jeskson'
    delete obj.name;
    console.log(obj.name);//undefined
```

## 50. 在JavaScript中有哪些类型的弹出框

alert, confirm, prompt

## 51. 常见的void(0)的作用是什么

其作用是用于防止页面刷新，并在调用时传递参数“0”；用于调用另一种方法而不刷新页面

## 52. 什么是JavaScript cookie

cookie是一些数据，存储你电脑上的文本文件中，当web服务器向浏览器发送web页面时，在连接关闭后，服务端不会记录用户的信息。

Cookie的形式，Cookie是由name=value形式成对存在的，Cookie字符串必须以分号作为结束符，Cookie除了name属性之外还存在其他4个相关属性。

```
设置Cookie的语法如下： set-Cookie:name=value;[expires=date];[path=dir];[domain=domainn];[secure]
```

## 53. 解释JavaScript中的pop()方法

`pop()`方法将最后一个元素从给定的数组中取出并返回

```
var da = [ 1, 2, 3];
da.pop();

// da: [1,2]
```

## 54. 在JavaScript中，datatypes的两个基本组是什么

`datatypes`的两个基本组是 原始类型和引用类型。

## 55. typeof是用来做什么的

typeof是一个运算符，用于返回变量类型的字符串描述。

## 56. 在JavaScript中，push方法的作用是什么

push方法是将一个或多个元素添加或附加到数组的末尾。

## 57. 在JavaScript中，unshift方法的作用是什么

unshift方法是将一个或多个元素添加到数组的开头。

## 58. 如何为对象添加属性

为对象添加属性的方法，常用两种：

1. 中括号语法
2. 点语法

## 59. 说说window.onload和onDocumentReady

在将页面加载到浏览器中时，这两个功能都可以用来执行任务，但是它们在执行方式和执行时间方面存在细微的差异。

当浏览器加载DOM树和所有其他资源（例如图像，对象等）时，`“ window.onload`”将执行代码。

`onDocumentReady`在构建DOM树时执行，而无需等待其他资源加载。这样可以使用`onDocumentReady`更快地针对DOM执行代码。

另一个区别是`window.onload`与跨浏览器不兼容，而使用类似jQuery的`document.ready()`则可以在所有浏览器上很好地工作。

## 60. 说说for-in循环

用于循环对象的属性：

```
for (var item in object
```

## 61. 说说JavaScript中的匿名函数

被声明为没有任何命名标识符的函数，一般来说，匿名函数在声明后无法访问。

```
var da = function() {
 console.log('dadaqianduan.cn')
}
da();
```

## 62. 说说一下事件冒泡

单击子级的处理程序，父级的处理程序也将执行同样的工作。

> 对事件冒泡机制的理解？

事件流的执行顺序，捕获阶段-》目标阶段-》冒泡阶段。冒泡从里到外的执行。`<div><span>点我</span></div>,`在div上定义的事件，`点击span的时候会触发span上面绑定的事件`，之后也会触发外面div上面的事件，这就是冒泡。

冒泡阶段是从目标到`window`对象的过程。事件默认是冒泡的，当父元素添加监听事件，点击子元素后，父元素上的事件会被触发，这就是典型的冒泡。

## 63. JavaScript里函数参数arguments是数组吗

它只是一个类数组对象，并没有数组的方法。

## 64. 什么是构造函数，它与普通函数有什么区别

构造函数是用来创建对象时初始化对象，与new一起试用，创建对象的语句中构造函数的名称必须与类名完全相同。

- 构造函数只能由new关键字调用
- 构造函数可以创建实例化对象
- 构造函数是类的标志

## 65. 说说split()与join()函数的区别

- `split()`方法是用来切割成数组的形式
- `join()`方法是将数组转换成字符串

```
"abcdef".split("")   //  ["a", "b", "c", "d", "e", "f"]
"abcdef".split()    // ["abcdef"]
"2:3:4:5".split(":",3)  //  ["2", "3", "4"]

[1,2,3,4,5].join()   // "1,2,3,4,5"
[1,2,3,4,5].join(':')  // "1:2:3:4:5"
```

## 66. 说说你对原型链, prototype的理解

> `JavaScript` 的每个对象都继承另一个父级对象，父级对象称为原型 `(prototype)` 对象。

原型链几乎是前端面试的必问题目

每一个实例对象都有一个私有属性`__proto__`指向其构造函数的原型对象`prototype`，该原型对象也会作为实例对象有一个私有属性`__proto__`，层层向上直到一个对象的原型对象值为`null`。

当访问一个对象的属性或方法时，`js`引擎会先查找该对象本身是否包含，如果没有，会去该对象的`__proto__`属性所指向的原型对象上找，如果没有，会继续向上一层找，直到某个对象的`__proto__`值为`null`,这就是原型链。

在js中，每个构造函数都有一个prototype属性，指向另外一个对象，说明整个对象所有的属性和方法都会被构造函数所拥有。

```
function Person (name, age) {
  this.name = name
  this.age = age
}
 
console.log(Person.prototype)
 
Person.prototype.type = 'it'
 
Person.prototype.sayName = function () {
  console.log(this.name)
}
 
var p1 = new Person('jeskson', 18);
var p2 = new Person('dada', 18);
 
console.log(p1.sayName === p2.sayName) // => true
```

构造函数Person：

```
function Person() {}

--> 原型属性（prototype) 神秘的对象Person.prototype

--> 由构造函数创建 Person实例 --> __proto__ 原型对象 --> 神秘对象
```

任何一个构造函数都有一个`prototype`属性，该属性是一个`objec`t对象。

构造函数的prototype对象都有一个默认的`constructor`属性，指向`prototype`对象所在函数。

通过构造函数得到的实例对象内部会包含一个指向构造函数的 `prototype` 对象的指针 `__proto__`

```
console.log(obj.__proto__);

console.log(obj.prototype);

console.log(obj.__proto__ === Object.prototype);
```

1. 构造函数（prototype）指向原型
2. 构造函数，New实例化（实例对象），实例对象中(.constructor)指向构造函数
3. 实例对象`（.__proto__）`指向原型

```
1. 实例对象.__proto__===原型

2. 原型.constructor===构造函数

3. 构造函数.prototype===原型
```

## 67. typeof与instanceof的区别是什么

typeof 是一个一元运算，它返回值是一个字符串，该字符串说明运算数的类型。

instanceof，判断该对象是谁的实例

instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的prototype属性,instanceof只能用来判断对象和函数,不能用来判断字符串和数字

```
function getDataType(obj) {
if (obj === null) {
return “null”;
} else if (typeof obj === “object”) {
if (obj instanceof Array) {
return “array”;
} else {
return “object”;
}
} else {
return typeof obj;
}
}
```

## 68. 说说事件流吧

事件流是指从 页面中接收事件的顺序。

## 69. 说说事件捕获

指不太具体的元素更早地接收到事件，而最具体的节点最后接收到事件。

## 70. 说说什么是回调函数

它就是一个通过函数指针调用的函数。

## 71. 什么是自执行函数，它有哪些应用场景，有什么好处

自执行函数是指声明的一个匿名函数，可以立即调用整个匿名函数，一般用于框架，插件等场景，好处在于避免各种JavaScript库的冲突，隔离作用域，避免污染。

## 72. 什么是事件委托，有什么好处

事件委托是利用冒泡的原理，把事件加到父级上，触发执行效果。好处在于，减少事件数量，提高性能，避免内存外泄。

## 73. 什么是强制类型转换，什么是隐式类型转换

在 JavaScript 中，数据类型的转换有：隐式类型转换和强制类型转换（也叫显式类型转换）两种方式。

隐式类型转换：

```
==  只做值的判断，实际隐式转换了类型，然后才进行的比较
```

强制类型转换：

```
parseInt()     将字符串强类型制转换为数字整数类型

parseFloat()  将字符串类型转换为浮点类型

Number()      只能将纯数字的字符转换为数字
```

## 74. NaN是什么，它的类型是什么，如何可靠地判断一个值是否等于NaN

`NaN`表示“不是数字”，但是它的类型是`Number`，NaN和任何内容比较，甚至是自己，结果都是false.

## 75. 什么是跨域

广义跨域就是指跨域访问，简单来说就是 A 网站的 javascript 代码试图访问 B 网站，包括提交容和获取内容容。由于安全原因，跨域访问是被各大浏览器所默认禁止的。

> 跨域是指不同域名之间的相互访问。

## 76. 以YYYY-MM-DD的方式，输出当天的日期，比如当天是2020年1月1日，则输出2020-01-01

```
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
month = month < 10 ? "0" + month : month;
var day = d.getDate();
daty = day<10? "0"+day : day;
console.log(year+'-'+month+'-'+day);
```

## 77. 用JavaScript随机选取10到100之间的10个数字，把它们存入一个数组中并排序

```
var isArray = [];
function getRandom(start, end) {
 return Math.floor(Math.random() * (end-start+1) + start)
}
for(var i = 0; i<10; i++){
 isArray.push(getRandom(10,100))
}
isArray.sort()
console.log(isArray)
```

## 78. 为了实现一个函数clonoe，可以对JavaScript中5种主要的数据类型（Number，String，Object，Array，Boolean）进行值（深）复制。

```
function clone(obj) {
 var buf;
 if(obj instanceof Array) {
  var i = obj.lenght;
  buf = [];
  while(i--) {
   buf[i] = clone(obj[i])
  }
  return buf;
 }else if(obj instanceof Object) {
  buf = {};
  for(var i in obj) {
   buf[i] = clone(obj[i])
  }
  return buf;
 }else{
  return buf = obj;
 }
}
```

## 79. 如何消除数组中重复的元素

```
function noRepeat(arr) {
 var i = 0,
 len = arr.length,
 obj = {},
 result = [];
 while(++i < len) {
 obj[arr[i]] || result.push(arr[i])
 obj[arr[i]] = true;
}
return result;
}
```

## 80. 说明DOM对象的3中查询方式

- `getElementById()`根据元素id查找
- `getElementsByTagName(tag)`根据标签名称查找
- `getElementsByName(name)`根据元素名称进行查找

## 81. 用面向对象的JavaScript代码介绍一下自己

```
function Person(name, job, site) {
 this.name = name;
 this.job = job;
 this.site = site;
}
Person.prototype = {
 getName: function() {
  console.log('my name'+this.name);
 }
 getJob: function() {
  console.log('my job'+ this.job);
 }
 getWork: function() {
  console.log('my work' + this.site);
 }
}

var da = new Person('dada', 'it', 'shenzheng');
da.getName();
da.getJob();
da.getWork();
```

## 82. 什么是变量作用域

变量作用域，变量的可用性范围。通常来说，一段程序代码中所用到的名字并不总是有效可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。作用域的使用，可提高程序逻辑的局部性，增强程序的可靠性，减少名字冲突。从作用域角度区分，变量可分为全局变量和局部变量。

## 83. 在JavaScript中的继承是如何工作的

- 在子构造函数中，将父类的构造函数在子类的作用域中执行
- 在子类的原型中，复制父类构造函数原型上的属性方法

> JavaScript是如何实现继承的(六种方式)

1.原型链：利用原型让一个引用类型继承另外一个引用类型的属性和方法。

原型链实现继承例子：

```
function SuperType() {
this.property = true;
}
SuperType.prototype.getSuperValue = function() {
return this.property;
}
function SubType() {
this.property = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
return this.property;
}
var instance = new SubType();
console.log(instance.getSuperValue());//true
```

2.借用构造函数：在子类型构造函数的内部调用超类构造函数，通过使用call()和apply()方法可以在新创建的对象上执行构造函数。

```
function SuperType() {
this.colors = ["red","blue","green"];
}

function SubType() {
SuperType.call(this);//继承了SuperType
}

var instance1 = new SubType();

instance1.colors.push("black");

console.log(instance1.colors);//"red","blue","green","black"

var instance2 = new SubType();

console.log(instance2.colors);//"red","blue","green"
```

3.组合继承：将原型链和借用构造函数的技术组合在一块，从而发挥两者之长的一种继承模式。

```
function SuperType(name) {
this.name = name;
this.colors = ["red","blue","green"];
}

SuperType.prototype.sayName = function() {
console.log(this.name);
}

function SubType(name, age) {
SuperType.call(this,name);//继承属性
this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
Subtype.prototype.constructor = Subtype;
Subtype.prototype.sayAge = function() {
console.log(this.age);
}

var instance1 = new SubType("da",18);

instance1.colors.push("black");

consol.log(instance1.colors);//"red","blue","green","black"

instance1.sayName();//"EvanChen"

instance1.sayAge();//18

var instance2 = new SubType("dada",20);

console.log(instance2.colors);//"red","blue","green"

instance2.sayName();//"dada"

instance2.sayAge();//20
```

4.原型式继承：借助原型可以基于已有的对象创建新对象，同时还不必须因此创建自定义的类型。

5.寄生式继承：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真正是它做了所有工作一样返回对象。

6.寄生组合式继承：通过借用函数来继承属性，通过原型链的混成形式来继承方法

## 84. 说说你对作用域链的理解

作用域链与函数执行栈相对应。js运行环境分为全局、函数以及eval三类，每当代码执行进入了一个新的运行环境就会将环境的执行上下文入栈，退出环境时将其出栈，从栈顶到栈底形成从内层到外层的嵌套关系。

由执行上下文创建的词法环境持有外层执行上下文的词法环境引用，当JS引擎在当前词法环境中找不到相应的变量时，会逐层向外查找，如此形成的链表即为作用域链。

作用域链指的是代码执行时,查找变量的规则,先在当前自身的作用域查找,找不到在往上级作用域查找,查不到的话直至全局环境,当然全局环境不能访问局部作用域的变量

## 85. 说说JavaScript中的原型链

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ed6e2132af544b797b381836785f6e9~tplv-k3u1fbpfcp-watermark.image)

JavaScript中的每个对象都有一个prototype属性，称为原型，而原型的值也是一个对象，因此它也有自己的原型，这样就形成了一条原型链，原型链的链头是object，它的prototype比较特殊，值为null。

`__proto__`是在查找链中用于解析方法的实际对象等，`prototype`使用以下命令`__proto__`创建对象时用于构建的对象`new`：

```
(new Foo).__proto__ === Foo.prototype;
(new Foo).prototype === undefined;
```

`prototype`是`Function`对象的属性，它是由该功能构造的对象的原型。

`__proto__`是对象的内部属性，指向其原型。当前提供了`Object.getPrototypeOf(o)`方法，尽管事实上的标准`__proto__`更快。

可以使用`instanceof`通过将函数`prototype`与对象的`__proto__`链进行比较来找到关系，也可以通过更改来打破这些关系。

```
function Point(x, y) {
    this.x = x;
    this.y = y;
}

var myPoint = new Point();

// the following are all true
myPoint.__proto__ == Point.prototype
myPoint.__proto__.__proto__ == Object.prototype
myPoint instanceof Point;
myPoint instanceof Object;
```

## 86. 说说函数的三种定义方式

1. 有参函数
2. 无参函数
3. 空函数

1、 函数式声明
2、 函数表达式（函数字面量）
3、 函数构造法，参数必须加引号
4、 对象直接量
5、 原型继承
6、 工厂模式

```
// 通过函数字面量
function da() {}

// 函数表达式
var da = function() {}

// 通过构造函数
var da = new Function();
```

## 87. JavaScript里的全局对象是什么，如何调用

全局属性和函数可用于所有内建的 JavaScript 对象。默认的this指向window,默认全局对象的属性和方法不用在前面加window，可以直接调用。

顶层函数（全局函数）:
```
decodeURI()	解码某个编码的 URI。
decodeURIComponent()	解码一个编码的 URI 组件。
encodeURI()	把字符串编码为 URI。
encodeURIComponent()	把字符串编码为 URI 组件。
escape()	对字符串进行编码。
eval()	计算 JavaScript 字符串，并把它作为脚本代码来执行。
getClass()	返回一个 JavaObject 的 JavaClass。
isFinite()	检查某个值是否为有穷大的数。
isNaN()	检查某个值是否是数字。
Number()	把对象的值转换为数字。
parseFloat()	解析一个字符串并返回一个浮点数。
parseInt()	解析一个字符串并返回一个整数。
String()	把对象的值转换为字符串。
unescape()	对由 escape() 编码的字符串进行解码。
```

顶层属性（全局属性）

```
Infinity	代表正的无穷大的数值。
java	代表 java.* 包层级的一个 JavaPackage。
NaN	指示某个值是不是数字值。
Packages	根 JavaPackage 对象。
undefined	指示未定义的值。
```

## 88. 说说几个常见的JavaScript内置对象，并指出它们的优点

常用的是Array对象、Date对象、正则表达式对象、string对象、Global对象

```
Concat（）：表示把几个数组合并成一个数组。 
Join（）：返回字符串值，其中包含了连接到一起的数组的所有元素，元素由指定的分隔符分隔开来。 
Pop（）：移除数组最后一个元素。 
Shift（）：移除数组中第一个元素。 
Slice（start，end）：返回数组中的一段。 
Push（）：往数组中新添加一个元素，返回最新长度。 
Sort（）：对数组进行排序。 
Reverse（）：反转数组的排序。 
toLocaleString();返回当前系统时间。

ceil()：向上取整。
floor():向下取整。
round():四舍五入。
random():取随机数。

get/setDate()：返回或设置日期。
get/setFullYear():返回或设置年份，用四位数表示。
get/setYear():返回或设置年份。
get/setMonth():返回或设置月份。0为一月
get/setHours():返回或设置小时，24小时制
get/setMinutes():返回或设置分钟数。
get/setSeconds():返回或设置秒钟数。
get/setTime():返回或设置时间（毫秒为单位）。
```

## 89. 什么是DOM，DOM分为哪三种

> DOM，文档对象模型（Document Object Model）。DOM是 W3C（万维网联盟）的标准，DOM定义了访问HTML和XML文档的标准。在W3C的标准中，DOM是独于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。

分三种：

- 核心DOM，针对任何结构化文档的标准模型
- xml Dom，针对xml文档的标准模型
- html Dom，针对HTML文档的标准模型

## 90. 说说cookie的兼容性，缺点等

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63dc227d2f5849779866c315d3eb7336~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7468f6b0abd34a00bda44f8c957db831~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e38a8fb8ccf400e9df7a604b66ddf4d~tplv-k3u1fbpfcp-watermark.image)

## 91. 说说栈和队列的区别

- 队列是先进先出的，栈是先进后出的
-  栈和队列都是线性表，都是限制了插入删除点的线性表，都是只能在线性表的端点插入和删除

## 92. 说说cookie和session的区别

1. cookie数据存放在客户的浏览器上，session数据存放在服务器上
2. cookie不是很安全
3. session会在一定时间内保持在服务器上，当访问多时，会影响服务器的性能。
4. 用户验证这种场合一般会用 session
5. session 可以放在 文件、数据库、或内存中都可以
6. Cookie和Session都是会话技术
7. Cookie有大小限制以及浏览器在存cookie的个数也有限制，Session是没有大小限制和服务器的内存大小有关


我是Jeskson(达达前端)，感谢各位人才的：点赞、收藏和评论，我们下期见！

##

> 文章持续更新，可以微信搜一搜「 程序员哆啦A梦 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录，欢迎Star。

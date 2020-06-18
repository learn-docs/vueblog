## 前言

大家好啊，我是吒儿👦，每天努力一点点💪，就能升职加薪💰当上总经理出任CEO迎娶白富美走上人生巅峰🗻，想想还有点小激动呢😎。

这是我的第13期文章内容✍，希望能够把每一处知识点，说明白，（当然，如果哪一处不了解，可以在评论区进行探讨哦！）⏰，计时开始！

如果您发现本文有帮助，请您点赞，收藏，评论，留下您学习的脚印👣，我很乐意谈论😃

话不多说，开始学习！！！

> 我会不断修改这篇文章内容，一起来探讨吧！😁

### 学习css布局🤣

display属性，它是css中最重要的用于控制布局的属性，每个元素都有一个默认的display值，这与元素的类型有关，大多数元素的默认值一般是block或inline。

- 每个元素都有一个默认的display

block元素叫做块级元素；inline元素叫做行内元素

常用的display值，有时候为none，它是用来再不删除元素的情况下隐藏或显示，display:none。

display设置成none元素不会占据它本来应该显示的空间；使用visibility:hidden会占据空间，只是隐藏了，元素还在。

position属性：static是默认值，口诀，子绝父相。fixed，一个固定定位元素会相对于视窗来定位，即使页面滚动，它也会停留再相同的位置上。

css属性中的float，float可实现文字环绕图片效果：

```css
img {
    float: right;
    margin: 0 0 1em 1em;
}
```

clear属性可以用于被控制的浮动元素，如果一个盒子添加了float: left浮动，可以使用clear: left清楚元素的向左浮动。

清楚浮动，clearfix hack，可以使用新的css样式：

```css
.clearfix {
    overflow: auto;
}
```

百分比宽度，百分比是一种相对于包含块的计量单位。

```css
.clearfix {
    float: right;
    width: 50%;
}

nav {
  float: left;
  width: 15%;
}

section {
  margin-left: 15%;
}
```

**响应式设计**是一种让网站针对不同的浏览器和设备“呈现”不同显示效果的策略，可以让网站在不同情况下呈现很好的效果。

inline-block为行内块标签

```css
.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}

// 相同效果
.box1 {
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 1em;
}
```

flexbox是css3种的一种新的布局模式，用于满足现代web的复杂需求。

![](https://user-gold-cdn.xitu.io/2020/5/28/1725a9e9af764f27)

```html
<div class="flex-container">
    <div class="flex-item">flex item 1</div>
    <div class="flex-item">flex item 2</div>
</div>

.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 300px;
    height: 240px;
    background-color: Silver;
}

.flex-item {
    background-color: DeepSkyBlue;
    width: 100px;
    height: 100px;
    margin: 5px;
}
```

### JavaScript变量😊

1，Int整型
2，Float浮点
3，Boolean布尔
4，String字符串
5，Array数组
6，Object对象
7，Function函数
8，Regular Expression正则

> 驼峰命名法😀

- 全部小写，单词与单词间用下划线分割
- 大小写混合，大驼峰，每个单词首字母大写，小驼峰，第一个单词首字母小写，其他首字母大写。

> 规则😁

首字符，英文字母或者下划线；组成，英文字母，数字，下划线；（禁用，JavaScript关键词与保留字）

> 声明😃

显示声明，使用var变量名，（{没有类型，重复声明，隐式声明，不声明直接复制}），（{先声明，后读写，先赋值，后运算}）。

> 变量类型😃

值类型，占用空间固定，保存在栈中，保存与复制的是值本身，使用typeof检测数据的类型，基本类型数据是值类型。

引用类型，占用空间 不固定，保存在堆中，保存与复制的是指向对象的一个指针，使用instanceof检测数据的类型，使用new()方法构造出的对象是引用型。

> 作用域😄

全局变量，包括，在函数体外定义的变量，在函数体内部定义的无var的变量；调用，在任何位置。

局部变量，包括，在函数内部使用var声明的变量，函数的参数变量；调用，当前函数体内部。

优先级，局部变量高于同名全局变量，参数变量高于同名全局变量，局部变量高于同名参数变量。

特性：忽略块级作用域，全局变量是全局对象的属性，局部变量是调用对象的属性。

作用域链，内层函数可访问外层函数局部变量，外层函数不能访问内层函数局部变量。

声明周期：全局变量，除了被删除，否则一直在，局部变量，声明起到函数运行完毕或显示删除。回收机制，标记清楚，引用计数。

### 逻辑运算符😅

> ！逻辑非

返回true

```js
空字符串
0
null
NaN
undefined
```

返回false

```js
对象
非空字符串
非0数值（Infinity）
```

注意：逻辑非，连续使用两次，可以将任意类型转为布尔型值

> &&逻辑与😆

- 当第一个操作数是对象，返回第二个操作数
- 当第二个操作数是对象，第一个操作数值为true时返回该对象
- 两个操作数都是对象，返回第二个操作数

1. 一个操作数为null时，返回null
2. 一个操作数为NaN时，返回NaN
3. 一个操作数为undefined，返回undefined

注意：当第一个操作数的值时false，则不对第二个操作数进行求值。

> 逻辑或 ||😉

- 第一个操作数是对象，返回第一个操作数
- 第一个操作数值为false，返回第二个操作数
- 两个操作数都是对象，返回第一个操作数
- 两个操作数都是null，返回null
- 两个操作数都是NaN，返回NaN
- 两个操作数都是undefined，返回undefined

注意：如果第一个操作数值为true，就不会对第二个操作数求值。

### JavaScript数组

> 添加

push()在数组末尾添加数组
unshift()在数组头部添加元素
concat()合并两个数组

> 删除

pop()删除并返回数值的最后一个元素
shift()删除并返回数组的第一个元素

队列方法（先进先出）；栈方法（后进先出）。

> splice()和slice()

splice()

- 删除任意数量的项：1，要删除的起始下标，2，要删除的项数
- 在指定位置插入指定的项：1，起始下标，2，0（不删除任何项），3，要插入的项。
- 替换任意数量的项：1，起始下标，2，要删除的项数，3，要插入的项

splice()方法，注解，**该方法会改变原始数组**。用于添加或删除数组中的元素。

```js
arrayObject.splice(index,howmany,item1,.....,itemX)

var arr = ['a', 'b', 'c']

arr.splice(2,1) // 删除一个，返回删除元素的数组

['c']

arr.splice(2,0) // 删除0个，返回空数组

[]

var array = [1,2,3,4,5];
array.splice(3,2);
console.log(array);
// 结果: [1,2,3]

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);
// 从第 2 位开始删除所有元素
// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]
```

> 所有主要浏览器都支持splice()

Array数组的splice()方法，它的作用删除，插入，替换

插入的用法

```js
语法：array.splice(starti,0,值1，值2...);

// 表示要在哪个位置插入，0表示删除0个元素，因为插入和替换都是由删除功能拓展的，值1，值2，需要插入的值

var array = [1,2,3,4,5];
array.splice(2,0,11,22);

// 结果：[1,2,11,22,3,4,5]
```

替换的用法

```js
语法:array.splice(starti,n,值1，值2);

var array = [1,2,3,4,5];
array.splice(2,2,11,22);

// 结果：[1,2,11,22,5]
```

> slice()功能，从已有数组中选取部分元素构成新数组

1. 返回项的起始位置
2. 返回项的结束位置

特性，如果是负数，则用数组长度加上该值确定位置，启示位置实为数组的实际下标，结束位置的实际下标为结束数值减1。

Array.prototype.slice()

slice()方法返回一个新的数组对象。**原始数组不会被改变。**这一对象是一个由begin和end决定的**原数组的浅拷贝。**

表扬一下：

![](https://user-gold-cdn.xitu.io/2020/6/15/172b7869ec0a4984?w=609&h=191&f=png&s=19053)
```
const animals = ['1', '2', '3', '4', '5'];

console.log(animals.slice(2));
// expected output: Array ["3", "4", "5"]

console.log(animals.slice(2, 4));
// expected output: Array ["3", "4"]

console.log(animals.slice(1, 5));
// expected output: Array ["2", "3", "4", "5"]
```

slice(start,end)，从start开始截取到end单不包含end，返回值为截取出来的元素的集合(只是返回一个浅复制了原数组中的元素的要给新数组)

```js
var fruits = ['a', 'b', 'c', 'd', 'e'];
var citrus = fruits.slice(1, 3);

// fruits contains ['a', 'b', 'c', 'd', 'e']
// citrus contains ['b','c']
```

slice方法用一个类数组对象/集合转换成一个新数组。

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

在JavaScript中，几乎所有东西都是一个对象，除了string，number 和 booleans这样不可变的原始值。

Array.prototype.slice

```js
function myFunc() {
    // 错误, arguments是一个类数组对象, 不是一个真实的数组
    arguments.sort();
    // 借用 Array 原型中的方法 slice
    // 它接受一个类数组对象 (key:value)
    // 并返回一个真实的数组
    var args = Array.prototype.slice.call(arguments);
    // args 现在是一个真正的数组, 所以可以使用Array的sort()方法
    args.sort();
}
```

数组排序，reverse()颠倒数组中元素的顺序，sort()对字符数组或数字数组进行排序。

```js
function compare(value1, value2) {
    if(value1 < value2) {
        return -1;
    }else if(value1 > value2) {
        return 1;
    }else{
        return 0;
    }
}
```

> 数组转换

- toString()转换为字符串并返回
- toLocaleString()转换为本地格式字符串并返回
- join()用指定分割符分割数组并转换为字符串

toString()函数用于将当前对象已字符串的形式返回。该方法属于Object对象。

迭代方法：参数

- every 如果该函数对每一项都返回true，则返回true
- filter 返回值为true的所有数组成员
- forEach **无返回值**
- map 返回每次函数调用的结果数组
- some 有任意一项返回true，则返回true

接收参数：

1. 要在每一项上运行的函数
2. 运行该函数的作用域对象

传入参数：

1. 数组项的值item
2. 该项在数组中的位置index
3. 数组对象本身array

缩小方法：

- reduce 从数组起始位开始遍历
- reduceRight 从数组末尾开始遍历

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

reduce() 可以作为一个高阶函数，用于函数的 compose。

注意: reduce() **对于空数组是不会执行回调函数的**。

```js
var numbers = [1, 2, 3, 4];
numbers.reduce(回调函数);
```

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
//  10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
//  15

var arr = [1,2,3,4];
// 求和
var sum = arr.reduce((x,y)=>x+y)
var sum1 = arr.reduce((x,y)=>x*y)
```

求数组项的最大值

```js
var max = arr.reduce(function (prev, cur) {
    return Math.max(prev,cur);
});
```
取两值最大值后继续进入下一轮回调。

数组去重

![](https://user-gold-cdn.xitu.io/2020/5/29/1725fa6bc46a0a47?w=402&h=207&f=png&s=14990)

```js
arr.reduce(function(prev,cur,index,arr){
...
}, init);

arr 表示原数组；
prev 表示上一次调用回调时的返回值，或者初始值 init;
cur 表示当前正在处理的数组元素；
index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
init 表示初始值。

arr.reduce(callback,[initialValue])
initialValue （作为第一次调用 callback 的第一个参数。）
```

如果这个数组为空，运用reduce是什么情况？

```js
var  arr = [];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
//报错，"TypeError: Reduce of empty array with no initial value"

var  arr = [];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
}，0)
console.log(arr, sum); // [] 0
```

js 中in，一般用来遍历对象, 也可以用来遍历数组

in作用，判断属性是否存在于对象中，在true，不在false。

in作用，判断数组，索引号就是属性。

![](https://user-gold-cdn.xitu.io/2020/5/29/172605369c2a9855?w=274&h=259&f=png&s=10424)

对于数组循环出来的是数组元素；对于对象循环出来的是对象属性；当‘对象’是数组时：“变量”指的是数组的“索引”；当‘对象’为对象是，“变量”指的是对象的“属性”。

计算数组中每个元素出现的次数

![](https://user-gold-cdn.xitu.io/2020/5/29/172607ae4e9cc32c?w=435&h=389&f=png&s=27862)

```
// 求总成绩
var scoreReport = [
 {
   name: 'dada',
   score: 100
 },
 {
     name: '魔王哪吒',
     score: 99
 }
]

// for
var sum = 0
for(var i = 0; i<scoreReport.length; i++) {
    sum += scoreReport[i].score
}
```

如果使用reduce

```
var sum = scoreReport.reduce(function(prev, cur) {
    return cur.score + prev
},0);
```
### Vuex

Vuex中规则只能在mutations里修改state中的数据，actions不能直接修改state

创建Vuex.Store实例保存到变量store中，使用export default导出store

```js
import Vuex from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    
})
export default store
```

> state

常常写的文件store.js

 
```
import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
Vue.use(Vuex)
const state = {
    // 放置初始状态
    a: 123
};

const mutations = {
    // 放置我们的状态变更函数
};

export default new Vuex.Store({
    state,
    mutations,
    // getters
})
```

`this.$store.state`来获取定义的数据

```js
import Vuex from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 1
    }
})
export default store
```

```js
import Vuex from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        // getters相当与vue中的computed计算属性
        getStateCount: function(state){
            return state.count+1;
        }
    }
})
export default store
```

要修改state中的值，需要提交mutation来修改

Vuex中的getter，就像计算属性一样，getter的返回值会根据它的依赖被缓存起来，并且只有当它的依赖值发生了改变才会被重新计算。

Getter 接受 state 作为其第一个参数：

```js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```

> getter 在通过属性访问时，是作为 Vue 的响应式系统的一部分缓存其中的
> getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。

```js
某函数中{
    this.$store.commit('add');
}

import Vuex from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        // getters相当与vue中的computed计算属性
        getStateCount: function(state){
            return state.count+1;
        }
    },
    mutations: {
        add(state) {
            state.count += 1;
        },
    }
})
export default store

// xxx.vue
{{$store.getters.getStateCount}}
```

提交 mutation-对象风格的提交方式，直接使用包含 type 属性的对象：

```js
store.commit({
  type: 'increment',
  amount: 10
})
```

Vuex中还有一个Actions，这个目的是不想上面那样直接修改store里面的值，而是通过去提交一个actions，然后再在actions中提交mutations中去修改状态值。

> 先定义actions提交mutations的函数

示例：

```js
某函数中{
    this.$store.dispatch('addFun')
}

import Vuex from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        // getters相当与vue中的computed计算属性
        getStateCount: function(state){
            return state.count+1;
        }
    },
    mutations: {
        add(state) {
            state.count += 1;
        },
    },
    actions: {
    // 注册actions，相当于vue中的methods
        addFun(context){
            // context接收一个与store实例具有相同方法的属性的context对象
            context.commit('add')
        },
    }
})
export default store
```

> 使用mapState，mapGetters，mapActions，代替`this.$store.state.count和this.$store.dispatch('addFun')`这种写法。

如何使用：

```js
import {mapState, mapGetters, mapActions} from 'vuex';

// 使用computed 状态变化

computed: {
    ...mapState({
        countdada: state=>state.count
    })
}

// 将 store 中的 getter 映射到局部计算属性：
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}

...mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```

### JavaScript中的this

this，是什么，这个，this关键字执行为当前执行环境的ThisBinding。

大多数情况下，函数的调用方式决定了this的值。this指向是调用时决定，而不是创建时决定的。

```js
// this指向全局变量
function dadaqianduan() {
    return this;
}

console.log(dadaqianduan() === window); // true
```

使用call()，apply()，this指向为绑定的对象上。

```js
var person = {
    name: 'dada',
    age: 12
};
function sayHello(job) {
    console.log(this.name + "," + this.age + "," + job);
}

sayHello.call(person, 'it'); // dada,12,it
sayHello.apply(person, ['it']);
```

箭头函数，所有的箭头函数都没有自己的this，并指向外层。箭头函数会捕获其所在上下文的this值，作为自己的this值。(函数内部，this的值取决于函数被调用的方式)

箭头函数的this，总是指向定义时所在的对象。不是运行时所在的对象。

```js
function da() {
    setTimeout(()=>{
        console.log('this',this.id)
    },1000);
}

da.call({id: 12});
```

箭头函数位于da函数内部，只有da函数运行后，才会按照定义生成，so，da运行时所在的对象，刚好是箭头函数定义时所在的对象。

（值得探讨的一句话），在箭头函数里使用this，就像使用普通变量一样，在箭头函数的scope内找不都会一直向父scope寻找。

this又指向全局变量，如下：

感谢掘金网友：

![](https://user-gold-cdn.xitu.io/2020/6/11/172a38ce9a922ae1?w=618&h=143&f=png&s=15832)

```js
var name = 'da';
var person = {
    name: 'dadaqianduan',
    fun: function() {
        return this.name;
    }
}
var getName = person.getName();
console.log(getName()); // da

// 改为
var name = 'da';
var person = {
    name: 'dadaqianduan',
    getName: function() {
        return this.name;
    }
}
var fun = person.getName;
console.log(fun()); // da
```

作为一个构造函数，this被绑定到正在构造的新对象。

```
function Person(name) {
    this.name = name;
    this.age = 12;
    this.say = function() {
        console.log(this.name + ":" + this.age);
    }
}

var pserson = new Person('dadaqianduan');
person.say();
```

this的几种调用场景：

```js
var obj = {
    a: 1,
    b: function() {
        console.log(this);
    }
}
```

- 当作为对象调用时，指向该对象obj.b(); // 指向obj
- 当作为函数调用时，var b = obj.b; b(); // 指向全局window
- 当作为构造函数调用时，var b = new Fun(); // this.指向当前实例对象
- 当作为call与apply调用 obj.b.apply(object, []); // this指向当前的object

示例：

```js
var a = dadaqianduan;
var obj = {
    a: dada
}

function fun() {
    console.log(this.a);
}

fun(); // dadaqianduan
fun.call(obj); // dada
```

```js
function da(a,b,c) {
    console.log(arguments);
    // 使用call/apply将arguments转换为数组，返回结果为数组
    var arg = [].slice.call(arguments);
}

da(1,2,3)
```

全局上下文，非严格模式和严格模式中this指向顶层对象。

```js
this === window // true
```

函数上下文

```js
var name = 'dadaqianduan';
var fun = function() {
    console.log(this.name);
}
fun(); // 'dadaqianduan'
```

call()方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数。

> 该方法的语法和作用与apply()方法类似，只有一个区别，就是call()方法接受的是一个参数列表，apply()方法接受的是一个包含多个参数的数组。

示例：

```js
function da(name, age) {
    this.name = name;
    this.age = age;
}

function dada(name, age) {
    da.call(this, name, age);
    this.job = 'it';
}

console.log(new dada('dadaqianduan, 12').name);
// dadaqianduan
```

语法：

```js
function.call(thisArg, arg1, arg2, ...)
```

参数:`thisArg`，在function函数运行时使用的this值，this可能不是该方法看到的实际值。`arg1,arg2,...`指定的参数列表。

返回值，使用调用者提供的this值和参数调用该函数的返回值。若该方法没有返回值，则返回undefined。

描述：

`call()`允许为不同的对象分配和调用属于一个对象的函数/方法。提供新的this值给当前调用的函数/方法。你可以使用call来实现继承。

使用call方法调用父构造函数

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
} 

function Child1(name, age) {
    Person.call(this, name, age);
    this.eat = 'beff';
}

function Child2(name, age) {
    Person.call(this, name, age);
    this.eat = 'food';
}

var da1 = new Child1('魔王哪吒1', 12);
var da2 = new Child2('魔王哪吒2', 12);
```

使用call方法调用匿名函数

```js
var person = [
    {
        name: 'da1',
        age: 1
    },
    {
        name: 'da2',
        age: 2
    }
];

for(var i=0; i<person.length; i++) {
    (function(i){
        this.fun = function() {
            console.log('dadaqianduan');
        }
        this.fun();
    }).call(person[i], i);
}
```

```js
class Person{
    constructor(name) {
        this.name = name;
    }
    fun(){
        console.log(this.name);
    }
}
let da = new Person('达达前端');
da.fun(); // 达达前端
```

对于箭头函数调用，没有自己的this,super,arguments,new.target绑定，不能使用new来调用，没有原型对象，不可以改变this的绑定，形参名称不能重复。

this的绑定对象，通过new调用绑定到新创建的对象，return函数或对象，返回值不是新创建的对象，而是显式的返回函数或对象；call或apply的调用，非严格模式，为null和undefined；对象上的函数调用，绑定到这个对象；普通函数的调用，严格模式，为undefined。

> 注意：（一起来探讨）
> 也可以这样记住：对象中有this，对象中的方法（函数），以及普通函数来记住。

绑定例子，this在非严格模式下this指向全局对象，严格模式下this绑定到undefined，隐式绑定，obj.foo()的调用方式，foo内的this指向了obj。

显示绑定，call()或apply()方法直接指定this的绑定对象，箭头函数中this指向由外层作用域决定的。

示例：

```js
var a = "dadaqianduan";
function foo () {
  console.log(this.a)
}
foo();

window.a = "dadaqianduan";
function foo() {
  console.log(this.a)
}
window.foo();

// dadaqianduan
```

严格模式，只是使得函数内的this指向undefined，而不会改变全局中的this指向。只有var会把变量绑定到window上，而let和const不会。

```js
let a = "dada"
const b = "dada1"

function foo () {
  console.log(this.a)
  console.log(this.b)
}
foo();
console.log(window.a)

// undefined
// undefined
// undefined
```

```js
var a = "da";
function fun() {
    var a = "da1";
    console.log(this); // window
    console.log(this.a); // so, window.a -> da
}
fun(); // window调用的fun
```

```js
var a = "da";
function fun() {
   // this指向window
    var a = "da1";
    function inner() {
        console.log(this.a);
    }
    inner();
}
fun(); // da
```

> 谁最后调用函数，函数内的this指向最近原则

示例：

```js
function fun() {
    console.log(this.a)
}
var obj = {
    a: 'da',
    fun
}
var a = 'da1';
obj.fun(); // da

// var obj = {fun} => var obj = {fun: fun}

obj对象引用fun() 赋值 obj.fun上，调用的是obj对象，打印的就是obj中的a

var obj = {
    a: 'da',
    fun: function() {
    // this指向obj
        console.log(this.a)
    }
}

var a = 'da1'
obj.fun()
```

```js
function fun() {
    console.log(this.a);
};

var obj = {
    a: 'da',
    fun
};

var a = 'da1';

var fun1 = obj.fun;

obj.fun(); // this指向obj -> da

fun1(); // 指向obj.fun(); ，但调用的是window对象，so，this的指向为window
// window.fun1()
```

```js
function fun() {
  console.log(this.a);  
};

var obj = {
    a: 'da',
    fun
};

var a = 'da1';

var fun1 = obj.fun;

var ojb1 = {
    a: 'da2',
    fun2: obj.fun
};

obj.fun(); // this指向obj -> da

fun1(); // obj.fun() -> 调用者为window，so，this指向window，-> da1
obj1.fun2(); // 调用者为obj1，so，this指向obj1
```

```js
function fun() {
    console.log(this.a);
};

function doFun(fn) {
    console.log(this);
    fn();
};

var obj = {
    a: 'da',
    fun
};

var a = 'da1';

doFun(obj.fun); // obj.fun(); so，里面的this指向window -> da1
```

```js
function fun() {
    console.log(this.a);
};

function doFun(fn) {
    console.log(this);
    fn();
};

var obj = {
    a: 'da',
    fun
}

var a = 'da1';

var obj1 = {
    a: 'da2',
    doFun
};

obj1.doFun(obj.fun) // obj1对象调用doFun()，传参数obj.fun，this指向obj1.
// obj.fun() 打印 da1 

原因：把一个函数当做参数传递给另一个函数，会发生隐式丢失，就是回调函数丢失this绑定。

// 严格模式下，会绑定到undefined
```

### call,apply,bind

使用call和apply的函数会直接执行，bind是创建一个新的函数，需要手动调用才行。

示例：

```js
function fun() {
    console.log(this.a);
};

var obj = {
    a: 'da'
};

var a = 'da1';

fun(); // da1
fun.call(obj); // da
fun.apply(obj); // da
fun.bind(obj); // 使用bind创建一个新的函数，不会执行
```

示例：

```js
如果call,apply,bind接收 参数 为空或者null，undefined，会忽略这个参数

function fun() {
    console.log(this.a);
};

var a = 'da';

fun.call(); // da
fun.call(null); // da
fun.call(undefined); // da
```

```js
var ojb1 = {
    a: 'da'
};

var obj2 = {
    a: 'da1',
    fun1: function() {
        console.log(this.a); // da1
    },
    fun2: function() {
        setTimeout(function(){
           console.log(this); // window
           console.log(this.a); // window.a -> da2
        },0)
    }
}

var a = 'da2';

obj2.fun1(); // da1
obj2.fun2(); // 
```

```js
var obj1 = {
    a: 'da'
};

var obj2 = {
    a: 'da1',
    fun1: function() {
        console.log(this.a); // da1
    },
    fun2: function() {
        setTimeout(function() {
            console.log(this); // so，{a:'da'}
            console.log(this.a); // so，da
        }.call(obj1), 0) // 绑定外界对象obj1
    }
}
var a = 'da2';

obj2.fun1();
obj2.fun2();

// 使用 obj2.fun2.call(obj1) 即改变fun2函数中的this指向
```

```js
var obj1 = {
    a: 'da'
};

var obj2 = {
    a: 'da1',
    fun1: function() {
        console.log(this.a); // da1
    },
    fun2: function() {
        function inner() {
            console.log(this); // window{...}
            console.log(this.a); // da2
        }
        inner();
    }
}
var a = 'da2';
obj2.fun1();
obj2.fun2();
```

```js
function fun() {
    console.log(this.a);
};

var obj = {
    a: 'da'
};

var a = 'da1';

fun(); // da1
fun.call(obj); // da
fun().call(obj);  // 执行fun() -> da1，fun()函数返回值执行.call(obj)会报错
// fun()函数的返回值undefined -> 函数的返回值.call()
```

```js
function fun() {
    console.log(this.a);
    return function() {
        console.log(this.a);
    }
};

var obj = {
    a: 'da'
};

var a = 'da1';

fun(); // da1 -> 返回一个匿名函数，没有调用，可以使用fun()(); 调用匿名函数
fun.call(obj); // da -> 返回匿名函数，没有调用
fun().call(obj); // fun(),结果值 da1，返回一个匿名函数,并绑定obj,则this绑定到了obj，this.a 为obj.a -> 结果值为da

// fun().call(obj); -> da1,da
```

> bind绑定，只是返回一个新的函数

示例：

```js
function fun() {
    console.log(this.a);
    return function() {
        console.log(this.a);
    }
}

var obj = {
    a: 'da'
};

var a = 'da1';

fun(); // da1
fun.bind(obj); // 不会执行，返回一个新函数
fun().bind(obj); // da1 -> 匿名函数绑定obj，没有调用。
```

```js
function fun() {
    console.log(this.a);
    return function()  {
        console.log(this.a);
    }
}
var obj = {
    a: 'da'
};
var a = 'da1';
fun.call(obj)(); // da , da1

// fun绑定了obj,this指向了obj，匿名函数调用
```

```js
var obj = {
    a: 'da',
    fun: function() {
        console.log(this.a);
        return function() {
            console.log(this.a)
        }
    }
};

var a = 'da1';

var obj1 = {
    a: 'da2'
};

obj.fun()(); // 函数中的this.a , 匿名函数中的this.a->window
obj.fun.call(obj1)(); // 绑定obj1，匿名函数返回->window
obj.fun().call(obj1); // da1 ,绑定obj1，so, this指向obj2
```

![](https://user-gold-cdn.xitu.io/2020/6/9/172952cf5ad0259b?w=305&h=626&f=png&s=18096)

```js
var da1 = {
    name: '魔王哪吒',
    sayHello: function(age) {
        console.log(this.name + age);
    }
};

var da2 = {
    name: '达达前端',
};

da1.sayHello(12);

// apply,call
da1.sayHello.apply(da2, [12]); // 达达前端12
da1.sayHello.call(da2, 12); // 达达前端12
```

```js
模拟

Function.prototype.applyFun = function(context) {
    context.fn = this;
    context.fn();
    // 从上下文中删除函数引用
    delete context.fn;
}

// 参数
Function.prototype.applyFun = function(context) {
    context.fn = this;
    var args = arguments[1];
    context.fn(args.join(',')); // join -> string
    // 执行这个函数，用ES6的...运算符将arg展开
    // context.fn(...args);
    delete context.fn;
}
```

```js
var a = 'da';

function sayHello() {
    console.log(this.name);
}

sayHello.apply(null); // 传null或者不传参数，视为指向window

var a = 'da';

function sayHello() {
    console.log(this.name);
}

sayHello.apply(); // 传null或者不传参数，视为指向window
```

重写属性，ES5：

```js
var a = {
    name: 'da'
};

a.name = 'da1'
```

> es6引入一种原始数据类型Symbol，表示独一无二的值,Symbol函数可以接收一个字符串作为参数。Symbol函数不能使用new命令，生成Symbol是一个原始类型的值，不是对象。

示例：

```js
var s1 = Symbol();
var s2 = Symbol();

s1 === s2 // false

var s1 = Symbol("foo");
var s2 = Symbol("foo");

s1 === s2 // false
```

> Symbol值作为对象属性名时，不用点运算符。

示例：

```js
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = '魔王哪吒';

// 第二种写法
var a = {
  [mySymbol]: '魔王哪吒'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: '魔王哪吒' });

// 以上写法都得到同样结果
a[mySymbol] // "魔王哪吒"
```

```js
var a = {};
var name = Symbol();
a.name = 'da1';
a[name] = 'da2';
console.log(a.name,a[name]);             //da1,da2
```

```js
var obj = {
    a: 'da',
    fun: function(b) {
        b = b || this.a
        return function (c) {
            console.log(this.a + b + c)
        }
    }
}

var a = 'da1';

var obj1 = {
    a: 'da2'
}

obj.fun(a).call(obj1, 1)
// obj.fun(da1) -> da1传给参数b, call改变了this，绑定对象ojb1，so，this的指向改变，this.a指向对象obj1，为da2。
// 最后结果,da2 da1 1

obj.fun.call(obj1)(1)
// obj中fun函数内的this绑定对象Obj1，this指向了obj1
// obj.fun.call(obj1)没有传递参数， so， 因b = b || this.a
// so，b为(记住绑定了obj1)da2。最后调用匿名函数，匿名函数内的this指向window
// da1(this.a为指向window),da2,1
```

![](https://user-gold-cdn.xitu.io/2020/6/9/172977516ef828f3?w=352&h=456&f=png&s=21508)

```js

function fun1 () {
    console.log(this.a);
};

var a = 'da';

var obj = {
    a: 'da1'
}

var fun2 = function() {
    fun1.call(obj);
};

fun2(); // da1
fun2.call(window); // da1
```

```js
function fun1(b) {
    console.log(`${this.a} + ${b}`)
    return this.a + b
}
var a = 1
var obj = {
  a: 3
}

var fun2 = function () {
  return fun1.call(obj, ...arguments)
}

var dada = fun2(5)
console.log(dada)

'3 + 5'
8

// fun2(5)-> fun1绑定对象obj，so，this.a为obj中的a为3，5带入即可
```

```js
function fun(item) {
    console.log(item, this.a);
};
var obj = {
    a: '魔王哪吒'
};
var a = 'dada'

var arr = [1,2,3];
// forEach, map, filter的第二个参数可以绑定this的

arr.filter(function(i){
    console.log(i, this.a);
    return i>2
},obj)

1 '魔王哪吒'
2 '魔王哪吒'
3 '魔王哪吒'
```

```js
function da (name) {
    this.name = name
};

var name = 'da1';

var dada = new da('da2');
console.log(dada.name) // da2

// new 调用da函数，构造了一个新对象dada，dada对象绑定到da调用中的this
```

```js
var name = '魔王哪吒';
function fun (name) { // 构造函数
    this.name = name;
    this.daFun = function () {
        console.log(this.name);
        return function () {
            console.log(this.name);
        }
    }
}

var da1 = new fun('魔王哪吒1');
var da2 = new fun('魔王哪吒2');

da1.daFun.call(da2)()
da1.daFun().call(da2)
```

改变思路，改变想法：

```js
var name = '魔王哪吒';

// var da1 = new fun('魔王哪吒1');
var da1 = {
    name: '魔王哪吒1',
    daFun: function() {
        console.log(this.name);
        return function () {
            console.log(this.name);
        }
    }
}

// var da2 = new fun('魔王哪吒2');

var da2 = {
    name: '魔王哪吒2',
    daFun: function() {
        console.log(this.name);
        return function () {
            console.log(this.name);
        }
    }
}

da1.daFun.call(da2)() // daFun函数绑定了da2，指向了da2，so，this指向了da2，输出 魔王哪吒2，最后调用()，内部返回的匿名函数由window调用，打印出 魔王哪吒
// 魔王哪吒2 ，魔王哪吒

da1.daFun().call(da2)

// da1.daFun().call(da2) 将匿名函数的this绑定到了da2上

// da1.daFun() -> 魔王哪吒1 -> 魔王哪吒2
```

### 箭头函数

> 箭头函数里的this，由外层作用域决定，指向函数定义时的this，非执行时。（探讨）

```js
var obj = {
    name: '魔王哪吒',
    fun1: () => {
        // this指向由外层作用域决定，指向函数定义时的this，为window
        console.log(this.name)
    },
    fun2: function() {
        console.log(this.name)
        return () => {
            console.log(this.name);
        }
    }
}

var name = '达达前端';

obj.fun1(); // this.name -> 达达前端 ，调用时外层，则外层作用域时window

obj.fun2()(); // this.name , this.name(匿名函数)

// 先看obj.fun2() ，然后了解obj.fun2()()
// 这里的第一个指向调用它的对象 obj ， so，是 魔王哪吒，里面的匿名函数是箭头函数，箭头函数指向定义时，就是this的外层作用域决定，可见是fun2这个函数，so，那么匿名函数里的this会和fun2函数里的this一样。也是 魔王哪吒。
```

![](https://user-gold-cdn.xitu.io/2020/6/10/1729e816269221b0?w=501&h=363&f=png&s=20778)

```js
var name = '达达前端';

var obj1 = {
    name: '魔王哪吒1',
    fun: function() {
        console.log(this.name)
    }
}

var obj2 = {
    name: '魔王哪吒2',
    fun: () => {
        console.log(this.name)
    }
}

obj1.fun() // 由obj1调，so，魔王哪吒1
obj2.fun() // this定义时指向了window，so，达达前端
```

```js
var name = '达达前端';
var obj1 = {
    name: '魔王哪吒1',
    fun: function () {
        console.log(this.name);
        return function() {
            console.log(this.name);
        }
    }
}

obj1.fun()(); 
// obj1.fun() -> 魔王哪吒，调用匿名函数（）,第二个this.name调用外层，so，为达达前端

// 魔王哪吒，达达前端

var obj2 = {
    name: '魔王哪吒2',
    fun: function() {
        console.log(this.name);
        return () => {
            console.log(this.name);
        }
    }
}

obj2.fun()(); // obj2.fun() 第一个值为 魔王哪吒2， 第二个箭头函数，this定义时指向外层，即为obj2中的this，so，为 魔王哪吒2

// 魔王哪吒2，魔王哪吒2

var obj3 = {
    name: '魔王哪吒3',
    fun: () => {
        console.log(this.name);
        return function() {
            console.log(this.name)
        }
    }
}

obj3.fun()(); // 达达前端，达达前端

// 第一个this.name ，箭头函数由外层作用域决定，定义时指向window，内存函数，由调用者决定，so，也是 达达前端。

var obj4 = {
    name: '魔王哪吒4',
    fun: () => {
        console.log(this.name);
        return () => {
            console.log(this.name);
        }
    }
}

obj4.fun()(); // 达达前端，达达前端，定义时，不是调用时
```

```js
var name = '达达前端';

function dada (name) {
    this.name = name;
    this.fun1 = function() {
        console.log(this.name);
    }
    this.fun2 = () => {
        // 指向外层作用域函数dada
        console.log(this.name);
    }
}

var da2 = {
    name: 'da2',
    fun2: () => {
        console.log(this.name);
    }
}

var da1 = new dada('魔王哪吒');
da1.fun1(); // 魔王哪吒，普通函数，调用者是dada，（由最后调用者对象决定）
da1.fun2(); // 魔王哪吒，箭头函数，由外层作用域决定，函数定义时
// 外层作用域是函数dada，构造函数，new 来生成对象da1，指向了dada

da2.fun2(); // 达达前端, da2的作用域在window下，so，建呕吐函数内this指向window
```

```js
var name = '达达前端',
function dada(name) {
    this.name = name;
    this.fun1 = function() { // 普通函数
        console.log(this.name);  // 达达
        return function() { // 匿名函数
            console.log(this.name); // 达达前端
        }
    }
    this.fun2 = function() { // 普通函数
        console.log(this.name); // 达达
        return () => { // 箭头函数
            console.log(this.name); // 由外层决定，外层就是这个dada函数，值为 达达
        }
    }
    this.fun3 = () => { // 箭头函数
        console.log(this.name); // 外层决定，是dada，so，达达
        return function() { // 普通函数
            console.log(this.name) // 由调用者决定，da1.foo3()返回一个普通函数，调用者外层字面量da1，在window中，so，达达前端
        }
    }
    this.fun4 = () => { // 箭头函数
        console.log(this.name); // 定义时，this指向外层，达达
        return () => { // 箭头函数
            console.log(this.name); // 指向外层,达达
        }
    }
}

var da1 = new dada('达达');

da1.fun1()(); // 达达 达达前端
da1.fun2()(); // 达达 达达
da1.fun3()(); // 达达 达达前端
da1.fun4()(); // 达达 达达
```

> 箭头函数中的this，无法用bind，call，apply函数来直接修改，可以通过改变作用域中this的指向来修改。

示例：

```js
var name = '达达前端';

var obj1 = {
    name: '达达1',
    fun1: function() { // 普通函数
        console.log(this.name);
        return () => { // 箭头函数
            console.log(this.name);
        }
    },
    fun2: () => { 
        // 箭头函数
        console.log(this.name);
        return function() {
            // 普通函数
            console.log(this.name);
        }
    }
}

var obj2 = {
    name: '达达2'
};

obj1.fun1.call(obj2)() // .call绑定了对象obj2，第一个()运行，达达2，第二个()，箭头函数，由外层的fun1普通函数中的this相同，so，达达2

// 达达2 达达2

obj1.fun1().call(obj2) // 第一个调用obj1中，达达1，返回箭头函数，.call绑定对象obj2，想改变this的指向obj2，但是无效，因为是定义时就决定了的，this的执行还是obj1，so，输出 达达1

// 达达1 达达1

obj1.fun2.call(obj2)() // obj1字面量，.call绑定obj2无效，第一个是箭头函数，外层作用域window，达达前端，达达前端，obj1.fun2.call(obj2) 指向外层window

// 达达前端 达达前端

obj1.fun2().call(obj2) // 第一层，箭头函数，第二层，普通函数，第一层直接是外层作用域window，达达前端

// 第二层绑定一个了obj2，so, 达达2

// 达达前端， 达达2
```

> 注意：字面量创建的对象，作用域是window，如果是箭头函数，this指向window

示例：

```js
var name = '达达前端';

var da1 = {
    name: 'dada1',
    fun1: function() { // 普通函数
        console.log(this.name);
    },
    fun2: () => console.log(this.name); // 箭头函数
    fun3: function() { // 普通函数
        return function() { // 匿名函数，普通函数
            console.log(this.name);
        }
    },
    fun4: function() { // 普通函数
        return () => { // 箭头函数
            console.log(this.name);
        }
    }
}

var da2 = {
    name: 'dada2'
};

da1.fun1(); // 字面量da1, 普通函数，调用者da1，so，指向da1，dada1
// dada1

da1.fun1.call(da2); // this.name通过.call绑定了da2,so,dada2
// dada2

da1.fun2(); // 箭头函数，指向window，so，达达前端
// 达达前端
da1.fun2.call(da2); // .call想改变指向，但无效，达达前端
// 达达前端

da1.fun3()(); // 匿名函数，指向window，达达前端
da1.fun3.call(da2); // 返回匿名函数，指向window，达达前端
da1.fun3().call(da2); // 

da1.fun3() // 通过.call绑定da2，返回这个普通函数，绑定da2，so,dada2
//
() {
      console.log(this.name)
    }
//

// dada2

//
function() { // 普通函数
    return function() { // 匿名函数，普通函数
        console.log(this.name);
    }
},
//

da1.fun4()(); // this指向定义时，da1，so，dada1
// dada1

da1.fun4.call(da2)(); // 一个fun4通过绑定da2，再运行()，那么function() { 里的返回箭头函数 } ;外层function绑定了指向da2，dada2
// dada2

da1.fun4().call(da2); // 定义时，fun4()，运行了，this.name中返回 dada1
// dada1
```

```js
var name = '达达前端';
function dada(name) {
    this.name = name;
    this.fun1 = function() {
        console.log(this.name);
    },
    this.fun2 = () => console.log(this.name),
    this.fun3 = function() {
        return function() {
            console.log(this.name)
        }
    }，
    this.fun4 = function() {
        return () => {
            console.log(this.name)
        }
    }
}

var da1 = new dada('1');
var da2 = new dada('2');

da1.fun1(); // new 绑定了dada，1
da1.fun1.call(da2); // 绑定了 da2 ， 2

da1.fun2(); // 箭头函数，外层还是dada ,new dada绑定dada，1
da1.fun2.call(da2); // .call想改变this指向，但是对于箭头函数无效，1

da1.fun3()(); // 返回一个普通函数，this指向window，达达前端
da1.fun3.call(da2)(); // 绑定da2,但是，一样指向window，达达前端
da1.fun3().call(da2); // 绑定da2,返回运行()，绑定da2，this指向da2，2
// da1.fun3()
ƒ () {
      console.log(this.name)
    }
//

da1.fun4()(); // 返回箭头函数，调用da1，指向外层da1，1
// da1.fun4();
// ->返回
() => {
    console.log(this.name)
}

da1.fun4.call(da2)(); // .call()绑定了da2，调用()，外层改变为da2，2
da1.fun4().call(da2);
// da1.fun4();
// ->返回
() => {
    console.log(this.name)
}
// 定义时，指向了da1，new dada('1')新对象，so，为1
```

```js
var name = '达达前端'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    fun1: function () {
      return function () {
        console.log(this.name)
      }
    },
    fun2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var da1 = new Person('1')
var da2 = new Person('2')

da1.obj.fun1()(); // 达达前端， 匿名函数，this指向外层window，匿名函数指向window

da1.obj.fun1.call(da2)(); // 达达前端， 调用普通函数，绑定改变第一层函数this，再da2中的匿名函数还是指向了外层window

da1.obj.fun1().call(da2); // 2 ,运行了fun1()普通函数，返回匿名函数，绑定了da2，改变了匿名函数内的this，so，为2

da1.obj.fun2()(); // obj，普通函数内的返回箭头函数，箭头函数定义时的this指向的时obj，so，返回箭头函数内的this.name为 obj

da1.obj.fun2.call(da2)(); // 2 fun2，为function(){...}，绑定，改变了第一层的this，指向了da2，so，2

da1.obj.fun2().call(da2); // obj 箭头函数无效，so，obj
```

```js
function fun() {
    console.log(this.a); // this.a 外层window，da
};
var a = 'da';
(function(){
    // 这里的this，指向window，this在下面的use strict严格模式下，为undefined
    'use strict';
    fun(); // 普通函数调用 // da
    // this.fun(); 这样的话就会报错
})();
```

### this的指向

示例：

```js
function dada() {
    this.a = 'da'; // this指向window，window下 window.a = 'da'
    console.log(this.a); // window.a
}
dada(); // da 
```

> 函数dada中的this，在函数被调用时确定，指向函数当前运行的环境

示例：

```js
var a = 'da';
function da() {
    console.log(this.a);
};

var obj = {
    a: 'da1',
    fun: da
};

obj.fun(); // da1
```

对象方法调用，指向这个对象obj

![](https://user-gold-cdn.xitu.io/2020/6/11/172a10d7684a0a4f?w=549&h=344&f=png&s=24890)

### call模拟实现

示例：

```js
var obj = {
    name: 'dada'
};

function fun() {
    console.log(this.name); // window.name
};

fun.call(obj); // 绑定这个对象obj，dada
```

```js
// 想象一下改变

var obj = {
    // 对象
    name: 'dada', // 属性
    fun: function() {
        // 普通函数
        console.log(this.name); // obj.fun() - 对象obj调用fun() dada
    }
}
```

```js
obj.fun = 函数（赋值一个函数）// 将函数设为对象的属性
obj.fun()

delete obj.fun 这个属性

var obj = {
    name: 'dada'
};

function fun() {
    console.log(this.name); // window.name
};

fun.call(obj); // 绑定这个对象obj，dada
```

看着上面的写下面的方法：

```js
Function.prototype.myCall = function(一个对象context) {
    context.fun = this; // 这一步的this，指代dada()函数
    context.fun();
    delete context.fun;
}

var obj = {
    name: 'dada'
};

function dada() {
    console.log(this.name); 
};

dada.myCall(obj); // 对象obj，绑定这个对象,this，context.fun = this
```

![](https://user-gold-cdn.xitu.io/2020/6/11/172a12393ebde735?w=415&h=341&f=png&s=19668)

```js
// 模拟传参问题call
var obj = {
    value: 'dada'
};

function fun(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

fun.call(obj, 'da', 12);
// da
// 12
// dada
```

`arguments`是类数组对象

```js
看看arguments

arguments = {
    0: obj,
    1: 'da',
    2: 12,
    length: 3
}
```
下面一步是为了取出参数：

![](https://user-gold-cdn.xitu.io/2020/6/11/172a1341fe236391?w=407&h=92&f=png&s=5982)

call原方法，调用是分开的

![](https://user-gold-cdn.xitu.io/2020/6/11/172a1344e4fc4562?w=230&h=46&f=png&s=2214)

> JavaScript eval() 函数

定义和用法

> eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。

如果参数是一个表达式，eval() 函数将执行表达式。如果参数是Javascript语句，eval()将执行 Javascript 语句。

```js
eval(string)
```

![](https://user-gold-cdn.xitu.io/2020/6/11/172a135de1849d17?w=718&h=402&f=png&s=22638)

```js
Function.prototype.myCall = function(context) {
    context.fun = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fun(' + args +')');
    delete context.fun;
}
```

注意：参数可以为null

```js
var name = 'dada';
function fun() {
    console.log(this.name);
}
fun.call(null); // this指向window，dada
```
so改一下

```js
Function.prototype.myCall = function (context) {
    var context = context || window;
    context.fun = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fun(' + args +')');
    delete context.fun
    return result;
}
```

### apply模拟实现

示例：

```js
传入一个对象，和数组
代码来自于@掘金冴羽

Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
```

![](https://user-gold-cdn.xitu.io/2020/6/11/172a142ce80795eb?w=554&h=48&f=png&s=5749)

### bind模拟实现

bind绑定函数，特点，返回一个函数，可以传参

示例：

```js
var obj = {
    name: 'da';
};

function fun() {
    console.log(this.name);
}

// 返回一个函数
var da1 = fun.bind(obj);

da1(); // da
```

bind()方法创建一个新的函数，在bind()被调用时，新函数的this被指向bind()的第一个参数，绑定对象，其余参数将是新函数的参数。

bind改变函数this的指向，但bind并不会立即执行函数，而是返回一个绑定了this的新函数。

模拟实现：

模拟实现第一步：

```js
Function.prototype.myBind = function(context){
    var that = this
    return function(){
        return that.apply(context)
    }
}

// 写法2

Function.prototype.bind_ = function (obj) {
    var fn = this;
    return function () {
        fn.apply(obj);
    };
};
```

模拟实现第二步:支持函数传参

```js
Function.prototype.myBind = function (context) {
    var that = this; // 函数
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return that.apply(context,args.concat(bindArgs));
    }

}

// 写法2

Function.prototype.bind_ = function (obj) {
    // 第0位是this，所以从第一位开始
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function () {
        fn.apply(obj, args);
    };
};

Function.prototype.bind_ = function (obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function () {
        // 二次调用
        var params = Array.prototype.slice.call(arguments); 
        
        fn.apply(obj, args.concat(params));
    };
};
```

新增this判断以及原型继承

```js
Function.prototype.bind_ = function (obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    var instanceObj = function () {
        var params = Array.prototype.slice.call(arguments);
        // 通过constructor判断调用方式
        // 为true this指向实例，否则为obj
        fn.apply(this.constructor === fn ? this : obj, args.concat(params));
    };
    //原型链继承
    instanceObj.prototype = fn.prototype;
    return instanceObj;
};
```

模拟实现修改版：

```js
Function.prototype.bind = Function.prototype.bind || function (context) {
    var me = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var F = function () {};
    F.prototype = this.prototype;
    var bound = function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return me.apply(this instanceof F ? this : context || this, finalArgs);
    }
    bound.prototype = new F();
    return bound;
}

// 修改
Function.prototype.myBind = function(obj) {
  // 调用bind方法的一定要是一个函数
  if(typeof this !== "function")  {
      throw new Error('error')
  };
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  
  var fn_ = function () {};
  var instanceObj = function () {
       var params = Array.prototype.slice.call(arguments);
       fn.apply(this.constructor === fn ? this : obj, args.concat(params));
       console.log(this);
  };
   fn_.prototype = fn.prototype;
   instanceObj.prototype = new fn_();
   return instanceObj;
};
```

![](https://user-gold-cdn.xitu.io/2020/6/11/172a1918c5af66fe?w=647&h=197&f=png&s=51089)

看到了这样的实现:(一起探讨，您可以通过写一篇文章来给我看哦)

```js
bind: function bind(that) {
    var target = this;
    if (!isCallable(target)) {
        throw new TypeError('Function.prototype.bind called on incompatible ' + target);
    }
    var args = array_slice.call(arguments, 1);
    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                array_concat.call(args, array_slice.call(arguments))
            );
            if ($Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                array_concat.call(args, array_slice.call(arguments))
            );
        }
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        array_push.call(boundArgs, '$' + i);
    }
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

    if (target.prototype) {
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
}
```

### 扩展

MDN上的文档：

> bind()方法创建一个新的函数，当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供要给给定的参数序列

> apply()方法调用一个函数，其具有一个指定的this指，以及作为一个数组提供的参数

es6方式，示例：

```js
Function.protype.myCall = function(context) {
    var context = context || window;
    context.fun = this;
    var args = [];
    for(var i=1, len = arguments.length; i<len; i++) {
        args.push(arguments[i]);
    }
    context.fun(...args)
    delete context.fun
}
```

```js
Function.prototype.myCall = function(context,...args) {
    context = context || window;
    context.fun = this;
    let temp = context.fun(...args);
    delete context.fun;
    return temp;
}
```

注意：永远不要使用 eval！

![](https://user-gold-cdn.xitu.io/2020/6/11/172a14e6789365a8?w=710&h=364&f=png&s=85575)

### js中的new()

请你讲一下，在js中使用new操作符具体做了什么事情

1、创建一个空的对象

2、链接到原型

3、绑定this指向，执行构造函数

4、确保返回的是对象

示例：

```js
var obj = new da();

var obj = {};
obj.__proto__ = da.prototype;
da.call(obj);
```

```js
function A(){}
var a = new A();
a.__proto__ === A.prototype //true

// 原型链
	
A.__proto__ === Function.prototype //true
```

补充：prototype和`__proto__`

每一个函数都有一个prototype的属性，每一个由该函数实例化的对象都包含一个隐式指针（`__proto__`）指向该函数的prototype属性

> new运算符

- 创建一个空的JavaScript对象`{}`
- 链接该对象到另一个对象
- 将新创建的对象作为this的上下文
- 如果该函数没有返回对象，则返回this

示例：

```js
function da(name, age, year) {
  this.name = name;
  this.age = age;
  this.year = year;
}

const da1 = new da('dada', '12', 2333);

console.log(da1.name);
// expected output: "dada"
```

```js
function create(){
	// 创建一个空对象  
	let obj = new Object();
	// 获取构造函数
	let Constructor = [].shift.call(arguments);
	// 链接到原型
	obj.__proto__ = Constructor.prototype;
	// 绑定this
	let result = Constructor.apply(obj,arguments);
	// 返回新对象
	return typeof result === "object" ? result : obj; 
	// let obj = new Object();
}
```

`Object.create` 的模拟实现：

```js
Object.create = function( o ) {
    function f(){}
    f.prototype = o;
    return new f;
};
```

### 感谢提出的错误

不分顺序

[掘金网友：自知无知](https://juejin.im/user/5a05dee25188254a701e85b4)

[小小外星人ღ](https://juejin.im/user/5be55122f265da615f76c71d)

### 参考文献

如果静下心来看的话是一定会有收获的！

[不用call和apply方法模拟实现ES5的bind方法](https://github.com/jawil/blog/issues/16)

[【建议👍】再来40道this面试题酸爽继续(1.2w字用手整理)](https://juejin.im/post/5e6358256fb9a07cd80f2e70#heading-26)

[JavaScript深入之call和apply的模拟实现](https://juejin.im/post/5907eb99570c3500582ca23c)

[JavaScript深入之bind的模拟实现](https://juejin.im/post/59093b1fa0bb9f006517b906#heading-0)

[面试官问：能否模拟实现JS的bind方法](https://juejin.im/post/5bec4183f265da616b1044d7)

### 关于

作者：常混迹于前端江湖。
[个人博客](http://www.dadaqianduan.cn/#/)
[github blog](https://github.com/webVueBlog/vueblog)，求个star^_^~

### 微信公众号 达达前端

可能比较有趣的微信公众号，长按扫码关注。也可以加微信 xiaoda0423，注明来源，拉您进【达达前端交流群】。-注明来源

![](https://user-gold-cdn.xitu.io/2020/5/28/17258db8e4af50d1?w=900&h=500&f=png&s=195006)
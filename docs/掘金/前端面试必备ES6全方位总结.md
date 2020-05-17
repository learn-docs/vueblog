    大家好，我是魔王哪吒，话不多说，今天带来的是一篇《前端面试必备ES6全方位总结》文章，欢迎大家喜欢。
    
## 前言

学习ES6需要掌握的路线，了解什么是ECMAScript概述，了解Symbol数据类型，掌握let和const，以及变量的解构赋值，Set和Map的原理。

什么叫做箭头函数，ES6对于ES5都有哪些扩展，ES6的一些高级操作。

为了方便查看学习，我做了思维导图，如下图所示：

![](https://user-gold-cdn.xitu.io/2020/2/16/1704a0303646e9b5?w=739&h=360&f=png&s=38081)

## ESMAScript概述

ECMAScript是一种**脚本程序设计语言**，被称为JavaScript或是JScript。它的中文名为`ECMAScript`，英文名为`European Computer Manufacturers Association Script`，我们可以简称为`ES6`，其特点是万维网上应用广泛。

ECMAScript是网景的布兰登·艾克开发的一种脚本语言的标准化规范，最初命名为Mocha，后来改名为LiveScript，最后重命名为JavaScript。

1995年12月，升阳与网景联合发表了JavaScript。1996年11月，网景公司将JavaScript提交给欧洲计算机制造商协会进行标准化。ECMA-262的第一个版本于1997年6月被Ecma组织采纳。

ECMA Script是ECMA-262标准化的脚本语言的名称。尽管JavaScript和JScript与ECMAScript兼容，但包含超出ECMA Script的功能。

ECMAScript是一种可以在宿主环境中执行计算并能操作可计算对象的基于对象的程序设计语言。ECMAScript最先被设计成一种Web脚本语言，用来支持Web页面的动态表现以及为基于Web的客户机—服务器架构提供服务器端的计算能力。

作为一种脚本语言，ECMAScript具备同其他脚本语言一样的性质，即“用来操纵、定制一个已存在系统所提供的功能，以及对其进行自动化”。 

> ECMAScript和JavaScript是什么关系呢？

简单来生活，ECMAScript是JavaScript语言的国际标准，JavaScript是ECMAScript是ECMAScript的实现。

## Symbol数据类型

ES6引入一种新的原始数据类型为 Symbol ，表示为 独一无二 的值，用来定义独一无二的对象属性名。

### Symbol的讲解

4个方面说说Symbol数据类型：

1. Symbol的定义；
2. Symbol作为对象属性名；
3. Symbol使用场景；
4. Symbol获取。

#### Symbol的定义

- 一种Symbol类型可以通过使用Symbol()函数来生成；
- Symbol()函数可以接收一个字符串作为参数

示例代码：

    let s1 = Symbol('web');
    let s2 = Symbol('web');
    console.log(s1 === s2);
    console.log(typeof s1);
    console.log(typeof s2);

chrome截图：


![](https://user-gold-cdn.xitu.io/2020/2/18/170563012a3ecec6?w=296&h=179&f=png&s=8891)

由图可知：Symbol()函数接收的参数相同，其变量的值也不同，s1和s2是Symbol类型的变量，因为变量的值不同，所以打印的结果为false。使用typeof来获取相应的类型，所以打印的结果都为symbol。

### Symbol作为对象属性名

Symbol可以通过三种方式作为对象属性名。

- 第一种：

示例代码：

    let symbol = Symbol();
    let a = {};
    a[symbol] = 'web';

由代码可知：首先声明了一个Symbol类型的变量symbol，一个空的对象为a，通过a[symbol]给a对象赋值一个web的字符串。表示symbol作为对象属性名，web作为它的属性值。

- 第二种：

示例代码：

    let symbol = Symbol();
    let a = {
        [symbol]:'web'
    };

由代码可知：首先声明了一个Symbol类型的变量symbol，接着在声明对象a的同时通过[symbol]给a对象性赋值为web的字符串。

- 第三种：

示例代码：

    let symbol = Symbol();
    let a = {};
    Object.defineProperty(a, symbol, {value: 'web'});

由代码可知：首先声明了一个Symbol类型的变量symbol，一个空对象为a，通过Object.defineProperty()方法给a对象赋值为web的字符串。

> Symbol的值作为对象属性名，是不能用点运算符的。

### Symbol使用场景

一种有两种使用场景：

1. 因为Symbol的值是均不相等的，所以Symbol类型的值作为对象属性名，不会出现重复。
2. 代码形成强耦合的某一个具体的字符串。

### Symbol获取

通过Object.getOwnPropertySymbols()方法，可以获取指定对象的所有Symbols属性名。

## let和const

- let是ES6规范中定义用于声明变量的关键字。
- 使用let声明的变量有一个块级作用域范围。

> 为什么需要块级作用域？

为什么会添加这个块级作用域，就得了解ES5没有块级作用域时出现的问题。

1. 场景一是内层变量可能会覆盖外层变量。
2. 场景二是在if或者是for循环中声明的变量会泄漏成为全局变量。

场景一：

![](https://user-gold-cdn.xitu.io/2020/2/18/1705852fb21aacb8?w=483&h=296&f=png&s=18561)

场景二：

代码示例：

    if(true) {  
      var web = 'web';  
    }  
    console.log(web); // web 没在iF块中也可以访问

> 块级作用域的前提是进行let变量声明

1. 独立的一对大括号，两个大括号之间就是变量的块级作用域的范围。
2. 条件语句，函数声明语句，循环语句等的一对大括号中就是变量的块级作用域范围。

**const声明一个只读的常量。const一旦声明常量，其值不能被改变。**

const和let只在声明的块级作用域内有效。否则会报错。

const命令声明的常量只能在声明的位置后面使用。

![](https://user-gold-cdn.xitu.io/2020/2/18/1705895bb696c66e?w=625&h=203&f=png&s=19156)

const声明的常量，与let一样不可重复声明。

## 变量的解构赋值

在ES6中可以从数组和对象中提取值，对变量进行赋值，称为解构赋值。

解构赋值就是只要等号两边的模式相同，左边的变量就会被对应赋值。

示例代码：

    let [x,y='b'] = ['a'];
    console.log(y); // b
    
    let [x,y='b'] = ['a', undefined];
    console.log(y); // b
    
    let [x,y='b'] = ['a', null];
    console.log(y); // null

#### 解构赋值分类：

1. 数组的解构赋值
2. 对象的解构赋值
3. 字符串的解构赋值
4. 数字以及布尔值的解构赋值
5. 函数参数的解构赋值

#### 解构赋值的情况

两种情况：

1. 完全解构
2. 不完全解构

> 不完全解构

代码如下：

    let [a = 1, b] = []; 
    // a = 1, b = undefined

#### 数组的解构赋值

代码如下：

    let [a, [b], d] = [1, [2, 3], 4];
    a // 1
    b // 2
    d // 4

解构赋值允许指定默认值。

代码如下：

    let [foo = true] = [];
    foo // true
    
在使用默认值的时候，应该注意undefined，因为undefined是不能赋值的。

代码如下：

    let [x = 1] = [undefined];
    x // 1
     
    let [x = 1] = [null];
    x // null

#### 对象解构

代码如下：

    let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
    foo // "aaa"
    bar // "bbb"
     
    let { baz } = { foo: 'aaa', bar: 'bbb' };
    baz // undefined

通过解构，我们可以很容易的把对象的方法复制给变量。

代码如下：

    const { log } = console;
    log('hello') // hello

或者是：

    const { log:minelog } = console;
    minelog ('hello') // hello

当我们使用解构赋值的时候，需要注意声明变量的作用域问题：

    // 错误的写法
    let x;
    {x} = {x: 1};
     
    // 正确的写法
    let x;
    ({x} = {x: 1});

数组中是一个特殊的对象

    let arr = [1, 2, 3];
    let {0 : first, [arr.length - 1] : last} = arr;
    first // 1
    last // 3

不完全解构

    let obj = {p: [{y: 'world'}] };
    let {p: [{ y }, x ] } = obj;
    // x = undefined
    // y = 'world'

剩余运算符

    let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
    // a = 10
    // b = 20
    // rest = {c: 30, d: 40}

解构默认值

    let {a = 10, b = 5} = {a: 3};
    // a = 3; b = 5;
    let {a: aa = 10, b: bb = 5} = {a: 3};
    // aa = 3; bb = 5;

#### 字符串解构

字符串本身也是一个对象，有时候，可以当成一个数组解构

代码如下：

    const [a, b, c, d, e] = 'hello';
    a // "h"
    b // "e"
    c // "l"
    d // "l"
    e // "o"

当做一个对象解构

    let {length : len} = 'hello';
    len // 5

剩余运算符

    let [a, ...b] = [1, 2, 3];
    //a = 1
    //b = [2, 3]

#### 函数参数的解构赋值

    function add([x, y]){
      return x + y;
    }
     
    add([1, 2]); // 3

> 计算函数任意个参数之和：

代码：

    function sum(...num){
        var sumNum = 0;
        for(let i=0;i<num.length;i++){
            sumNum += parseInt(num[i])
        }
        console.log(sumNum)
    }

## Set和Map

Set类似于数组，但是成员的值都是唯一的，没有重复的值。

Set使用add()方法添加元素，不会添加重复的值，所以Set可以对数组进行去重操作。

Map类似于对象，键名的值可以是各种类型的值。

#### 声明

1. 使用new Set()构造函数来声明Set；
2. 使用new Map()构造函数来声明Map。

使用for...of来遍历数组中的值

![](https://user-gold-cdn.xitu.io/2020/2/19/170596c336d781d3?w=328&h=206&f=png&s=7943)

#### 操作方法

共有的方法：delete删除，has有无，clear清空。对于Set的添加操作是add()，而Map是set设置和get获取。

![](https://user-gold-cdn.xitu.io/2020/2/19/170598b1cf912cc9?w=356&h=97&f=png&s=7111)


![](https://user-gold-cdn.xitu.io/2020/2/19/170598bd1494515c?w=291&h=72&f=png&s=3973)

has是用来判断Set或者是Map中是否包含元素。

![](https://user-gold-cdn.xitu.io/2020/2/19/170599483f6bac49?w=275&h=118&f=png&s=6353)


![](https://user-gold-cdn.xitu.io/2020/2/19/1705995faf68871b?w=348&h=291&f=png&s=16952)

set可以用来新增或者是修改Map中的元，只有Map有。

## 遍历方法

有keys，values，entries，forEach。

keys获取所有键，values获取所有值，entries获取所有键和值，forEach遍历所有键和值。

## 箭头函数

ES6中使用箭头函数(=>)来定义函数。

### 带参数的箭头函数

代码：

    var single = a => a
    single('web')

### 没有参数的箭头函数

代码：

    var log = () => {
        alert('web')
    }

### 多个参数的箭头函数

代码：

    var add = (a,b) => a+b
    add(1,2)

## es6相对于es5的扩展

它主要分三种：

1. 函数的扩展
2. 对象的扩展
3. 数组的扩展

### 函数的扩展

es6中函数的扩展包含：默认值，剩余运算符，扩展运算符。

> 默认值

在es5中，函数的默认值设定是，通过`“||”`进行设定的，当函数参数为`undefine`时，取默认值。

在es6中，函数的默认值是写在参数定义的后面。

代码示例如下：

    // es5
    function log(x,y) {
        y = y || 'web';
        console.log(x,y);
    }
    
    function log(x,y="web"){
        console.log(x,y);
    }

> 剩余运算符

剩余运算符表示语句：`...arrr`表示参数，指定的是可以有多个参数。

代码示例如下：

    function web(...arr) {
        for(let item of arr) {
            console.log(item);
        }
    }
    web(1,3,4,5,6);

> 扩展运算符

示例代码如下：

    function add(a,b,c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    var arr = [1,2,3];
    add(...arr);

> 对象的扩展

1. es6中允许向对象直接写入变量和函数，作为对象的属性和方法。
2. es6中允许使用表达式作为对象的属性，并且函数名称定义也可以采用相同的方式。
3. setter和getter。JavaScript对象的属性是由名字，值和一组特性构成的。

es6中对象的操作方法：

`Object.is()`：比较两个值是否相等。
`Object.assign()`：用于将对象进行合并。
`Object.getOwnPropertyDescriptor`：返回对象属性的描述。
`Object.keys()`返回一个数组，包含对象自身所有的可枚举属性。

### 数组的扩展

`copyWithin(target,start,end)`：在当前数组内部，将指定位置的成员复制到其他位置，然后返回当前数组。

`target`表示从该位置开始替换数据。如果是负值，表示倒数。

`start`表示从该位置开始读取数据，默认为0。如果为负值，表示倒数。

`end`表示到该位置前停止读取数据，默认等于数组长度。如果负值，表示倒数。

`find()`表示用于找出第一个符号条件的数组成员。

`findIndex()`表示返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

`fill()`表示填充一个数组，fill()方法用于空数组的初始化。

`includes()`表示该方法返回一个布尔值，表示某个数组是否包含给定的值。

## es6高级操作

Promise对象用于表示一个异步操作的最终状态，完成或是失败。

Promise是异步编程的一种解决方案，将异步操作以同步操作的流程表现出来，避免了多层回调函数嵌套问题。

一个Promise有几种状态：

1. `pending`初始状态，既不是成功状态，也不是失败状态。
2. `fulfilled`表示操作成功完成。
3. `rejected`表示操作失败。

> 当其中任何一种情况出现时，Promise对象的`then()`方法绑定的处理方法就会被调用。

`then()`方法包含两个参数，`onfulfilled`和`onrejected`，他们都是`function`类型。

当`Promise`为`fulfilled`状态时，调用`then()`方法的`onfulfilled`，当`Promise`为`rejected`状态时，调用`then()`方法的`onrejected`。

`Promise.prototype.then`和`Promise.prototype.catch`方法返回`Promise`对象，所以它们可以被链式调用。

### Iterator

Iterator遍历器是一种接口，为各种不同的数据结构提供统一的访问机制。

任何数据结构只要部署了`Iterator`接口，就可以完成遍历操作。

`Iterator`的作用：

1. 为各种数据结构，提供一个统一的，简便的访问接口。
2. 使得数据结构的成员能够按某种次序排列。
3. ES6创造了一种新的遍历命令for...of循环。

原生具备Iterator接口的数据结构，数组，某些类似数组的对象，Set结构和Map结构。


![](https://user-gold-cdn.xitu.io/2020/2/19/1705b983dbda422c?w=874&h=900&f=png&s=107326)

## Generator

`Generator`是`es6`提供的一种异步编程解决方案，在语法上，可以把它理解为一个状态机，内部封装了多种状态。

执行Generator，会生成并返回一个遍历器对象。返回的遍历器对象，可以依次遍历Generator函数的每一个状态。

`Generator`函数是一个普通的函数。

第一，function关键字与函数名之间有一个`*`号。

第二，函数体内使用`yield`表达式来遍历状态。

代码如下：

    function* newGenerator() {
        yield 'web';
        yield 'it';
        return 'ending';
    }

代码理解，执行Generator函数之后，并不会被立即执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。

使用遍历器对象的Next()方法，使指针移向下一个状态。每一次调用next()方法，内部指针就会从函数头部或上一次停下的地方开始执行，直到遇到下一个yield表达式位置。

Generator是分段执行的，yield表达式是暂停执行的标志，而next()方法可以恢复执行。

next()函数带参数，该参数作为上一次yield表达式的返回值，因为yield本身是没有返回值的。

## Class

ES6引入Class类这个概念，使用Class关键字可以定义类。

示例代码：

    class Person {
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        say() {
            return '名字：'+this.name+'年龄'+this.age+"岁";
        }
    }
    var obj = new Person('web',12);
    console.log(obj.say());

### 简单数据类型

ES5中有5中简单数据类型，Undefined, Null, Boolean, Number, String.

### Set

1. 成员不能重复
2. 只有健值，没有健名，有点类似数组。
3. 可以遍历，方法有add, delete,has

#### Set 实例属性

1. constructor： 构造函数
2. size：元素数量

代码如下：

    let set = new Set([1, 2, 3, 2, 1])
    
    console.log(set.length)	// undefined
    console.log(set.size)	// 3

#### Set 实例方法

> 操作方法

- add(value)：新增，相当于 array里的push
- delete(value)：存在即删除集合中value
- has(value)：判断集合中是否存在 value
- clear()：清空集合

#### 遍历方法

1. keys()：返回一个包含集合中所有键的迭代器
2. values()：返回一个包含集合中所有值得迭代器
3. entries()：返回一个包含Set对象中所有元素得键值对迭代器
4. forEach(callbackFn, thisArg)：用于对集合成员执行callbackFn操作

### Map

1. 本质上是键值对的集合，类似集合
2. 可以遍历，方法很多可以跟各种数据格式转换

Set 和 Map 主要的应用场景在于 数据重组 和 数据储存

Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构

#### Map 的属性及方法

属性：

1. constructor：构造函数
2. size：返回字典中所包含的元素个数

代码如下：

    const map = new Map([
      ['name', 'web'],
      ['des', 'JS']
    ]);

    map.size // 2

#### 操作方法：

- set(key, value)：向字典中添加新元素
- get(key)：通过键查找特定的数值并返回
- has(key)：判断字典中是否存在键key
- delete(key)：通过键 key 从字典中移除对应的数据
- clear()：将这个字典中的所有元素删除

#### 遍历方法

- Keys()：将字典中包含的所有键名以迭代器形式返回
- values()：将字典中包含的所有数值以迭代器形式返回
- entries()：返回所有成员的迭代器
- forEach()：遍历字典的所有成员

### 字典（Map）

集合 与 字典 的区别：

1. 共同点：集合、字典 可以储存不重复的值
2. 不同点：集合 是以 [value, value]的形式储存元素，字典 是以 [key, value] 的形式储存


![](https://user-gold-cdn.xitu.io/2020/2/19/1705c3ebe60c8dee?w=1710&h=624&f=png&s=158784)
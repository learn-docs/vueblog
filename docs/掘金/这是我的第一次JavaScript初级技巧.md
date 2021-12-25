[Github来源：这是我的第一次JavaScript初级技巧](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

大家好，我是**魔王哪吒**，很高兴认识你~~

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

不要害怕做梦，但是呢，也不要光做梦，要做一个实干家，而不是空谈家，求真力行。

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

### JavaScript工作原理

1. `HTML`超文本标记语言 来指定**网页的内容和结构**
2. `CSS`层叠样式表 来指定**网页的外观**，`CSS`用于指定样式，独立于网页结构的方式实现的
3. `JavaScript`能够在网页中添加**行为**

### JavaScript的变量和值

1. 声明变量时，总是以关键字`var`打头。
2. 任何情况下，都应该这样做，尽管省略关键字`var`，`JavaScript`也不会报错。
3. 创建变量时，可以不给它指定初始值，以后再给它赋值。（变量说：**没有值，那我不是没什么用了，伤害不大，侮辱性极强**）

变量说，我也是有（名字）的。--- 可不能随随便便给我命名呢？

- 第一，要以**字母，下划线，或者美元符号**开头。
- 第二，然后可以使用任意数量的**字母，数字，下划线，或者美元符号**。

对了，还有不要使用任何内置的**关键字** 哦！（达达问：那我怎么知道有哪些关键字呢？变量：哈哈！是的，很多关键字，我也记不住，但是常用的，多了解的，慢慢就知道了，也不用去记住。让我变量告诉你哦，所以就别把这些给我命名了哦）

例如以下关键字：

```
break,delete,for,let,super,void,case,do,function,new,switch,
while,catch,package,this,with,class,enum,implements,
else,if,package,private,throw,yield,const,export,import,
protected,true,continue,extends,in,public,try,debugger,
false,instanceof,return,typeof,default,finally,
interface,static,var
```

> 达达问：那什么是关键字呢？

哪吒：关键字就是JavaScript用于特殊目的的，关键字是JavaScript保留字。

> 达达问：如果变量名中包含关键字

哪吒：可以的，只要变量名不和关键字完全相同就行。

注意写法规范：第一，每条语句后都要以分号结尾；第二，写代码要进行注解，用于你自己或其他开发人员的解释代码其作用；第三，JavaScript中是区分大小写的哦。

### 布尔运算符

> 布尔运算符用于结果为`true`或`false`的布尔表达式中。

有两种布尔运算符：1.比较运算符 和 2.逻辑运算符。

1. 比较运算符，比较运算符对两个值进行比较。

下面是一些常见的比较运算符：

```
< 表示小于
> 表示大于
== 表示等于
=== 表示正好等于
<= 表示小于或等于
>= 表示大于或等于
!= 表示不等于
```

2. 逻辑运算符：

逻辑运算符将两个布尔表达式合而为一，得到一个布尔结果。

```
|| 表示OR(或)，只要至少有一个表达式为true，结果就为true
&& 表示ADN(与)，仅当两个表达式都为true时，结果才为true
! 表示NOT(非)，仅当表达式为false时，结果才为true
```

### Math.random

1. `Math.random`生成`0~1`（不包含1）的数字，使用`Math.random`可生成的最大数字为`0.9999...`。
2. `Math.floor`总是向下取整，如`1.2`取整为`1`。

### 全局变量和局部变量

1. 如果变量在函数外声明的，它就是全局变量；
2. 如果变量是在函数中声明的，它就是局部变量。

### 了解局部变量和全局变量的作用域

> 变量的定义位置决定了其作用域，即变量在代码的哪些地方可见，哪些地方不可见。

生命周期：

1. 全局变量是在`JavaScript`代码中加载到网页之后降生的，在网页消失后死去。重新加载网页时，将销毁并重新创建所有的全局变量。
2. 局部变量一般是在函数结束时消失的，局部变量是在函数被调用后创建的，并一直活到函数返回，无论函数是否有返回值。

注意，别忘记了声明局部变量哦！因为使用未声明的变量时，它将会自动被视为全局变量，即使你在函数中首次使用它也是如此。

如果局部变量和全局变量同名，那么引用的都是局部变量，而不是全局变量，全局变量和局部变量不会相互影响，如果修改其中一个，对另一个不会有任何影响，它们是彼此独立的变量。

示例：

```
var dada = 12;
function getName(name) {
 var dada = 123;
 // 有一个名为dada的全局变量，还有一个名为dada的局部变量。
}
```

达达：所以可以将形参和全局变量同名吗？

哪吒：不可以的，和在函数中声明了与全局变量同名的局部变量一样，如果形参与全局变量同名，该形参会遮挡相应的全局变量。

> 规范：写代码是要将局部变量写在函数开头声明，在函数开头声明局部变量是一种良好的编程实践，这可以让别人阅读你的代码时能够容易找到这些声明，清楚看到函数使用了哪些变量。

### 函数的读取

`JavaScript`可将函数在使用前还是使用后声明。

例如：

```
var dada = 12;
var jeskson = dadaFun(dada);
console.log(jeskson);

function dadaFun(name) {
 run name;
}
```

实际上浏览器读取分：

1. 读取所有的函数定义；
2. 开始执行代码。

### JavaScript是如何与网页交互

DOM是浏览器在加载网页时创建的。

1. 在浏览器中加载网页时，浏览器不仅对`HTML`进行分析并将其渲染到显示器，还创建一系列表示标记的对象。这些对象存储在`DOM`中；
2. `JavaScript`代码可通过与`DOM`交互来访问元素及其内容，还可以使用`DOM`来创建或删除元素;
3. `JavaScript`代码修改`DOM`时，浏览器将动态地更新网页，让用户能够在网页中看到新内容。

### getElementById

注意事项：

根据`id`从`DOM`获取元素时，如果指定的`id`不存在，`getElementById`将返回`null`，调用`getElementById`时，检查返回的是否是`null`是不错的主意，可以确保只在返回了一个元素时才访问其属性。

### JavaScript是区分大小写的

`JavaScript`是区分大小写的语言，关键字，变量，函数名和所有标识符都必须采取一致的大小写形式。

### 使用注释

写代码时要多使用注解，示例：

```
// 这是单行注解
/* 这是一段注解 */
/*
* 这是一段注解
* 可以多行
*/
```

### undefined

使用未初始化的变量，访问不存在的属性，使用不存在的数组元素时，你都会遇到`undefined`。

`undefined`对于任何还没有值的东西，都会将`undefined`赋予给它。

示例：

```
var da;
if (da == undefined) {
 // da未定义
}
// 用于检查变量是否未定义，需和undefined进行比较
```

可检查属性是否是未定义的，例如：

```
var daObj = {
 name: 'dadaqianduan.cn'
};

if(daObj.age == undefined) {
 // 获取对象的age
}
```

> 使用`undefined`，如果你的代码中需要判断（如属性或变量可能没有值），就需要检查它是否是`undefined`。

### null与NaN

> `null`用于表示对象不存在。

有些数字在`JavaScript`中无法表示，提供了一个替代值：`NaN`。在`JavaScript`中使用`NaN`，来表示它无法表示的数值结果。`NaN`不仅用来表示所有无法表示的数值，还是`JavaScript`中唯一一个与自己不相等的值。

表示：`NaN != NaN`

因为`NaN`与任何东西，包含它自己都不相等，所以不能如下使用：

```
// 错误
if(myNum == NaN) {
 // 错误用法
}
```

可以使用函数`isNaN`表示：

```
if(isNaN(myNum)) {
 // 使用函数isNaN，当它传入的值不是数字时返回true
}
```

`NaN`表示：无法表示的数字（理解为`NaN`是一个数字，但只是没有办法表示），所以并非所有无法表示的数字都相同，则`NaN`与它自己不相等。

示例：`0/0`的结果为`NaN`，而`10/0`的结果为`Infinity`，在`JavaScript`中，`Infinity`指的是任何超过浮点数上限某值，`Infinity`的类型为数字。将`Infinity`与它自己相减时，结果为`NaN`，`null`的类型结果为`object`。

> `null`表示不存在的对象

### 赋值和相等

示例：

```
var da = 1;
// = 是赋值运算符，用于给变量赋值

da == 2;
// == 是比较运算符，用于对两个值进行比较，看看它们是否相等
```

### 判断两个对象是否相等

检查两个对象变量是否相等时，比较的是指向对象的引用，对象变量存储的是指向对象的引用。

只有两个引用指向的是同一个对象时，它们才相等。

### 记录为假的值

表示值为假值：5个假值

```
undefined, null, 0, 空字符串, NaN
```

### 标识符

什么是标识符呢，它就是一个名字，在`JavaScript`中，标识符用来对变量和函数进行命名，或者用做`JavaScript`代码中某些循环语句中的跳转位置的标记。

> `JavaScript`标识符必须以**字母，下划线，或美元符号**开始，后面的字符可以是**字母，数字，下划线，或者美元符号**。

### 字符串

> 在`JavaScript`中，支持字符串既可作为基本类型，又可作为对象。

字符串属性：`length`

属性`length`指出了字符串包含多少个字符，为迭代字符串中的字符提供了极大的便利。

方法`charAt`，将一个整数作为参数，这个参数必须在0和字符串长度减1之间，并返回一个字符串，其中包含指定位置处的字符，可以认为字符串像数组，其中每个字符都有对应的索引，而索引从0开始，如果指定的索引大于或等于字符串的长度，这个方法将返回一个空字符串。

方法`indexOf`，将一个字符串作为参数，并在字符串中该参数首次出现的位置返回该参数中第一个字符的索引。

第一个参数，目标字符串；第二个参数，它是一个索引，指定从什么位置开始查找；第三，如果没有找到指定的字符串，将返回索引`-1`。

方法`substring`，将两个索引作为参数，提取并返回这个两个索引之间的子串。如果省略第二个参数，将提取从指定索引到字符串末尾的子串。

```
var da = data.substring(1,5);

var da1 = data.substring(1);
```

方法`split`，将一个用作分隔符的字符作为参数，并根据这个分隔符分成多个部分。`split`根据分隔符将字符串分成多个部分，并返回一个包含这些部分的数组。

整理：

1. `toLowerCase`，将字符串中的所有大写字符都转换为小写，并返回结果
2. `slice`，删除字符串的一部分，并返回结果
3. `substring`，返回字符串的一部分
4. `lastIndexOf`，与`indexOf`类似，但查找最后一个子串
5. `match`，在字符串中查找与正则表达式匹配的子串
6. `trim`，删除字符串开头和末尾的空白字符，为处理用户输入提供了极大的便利
7. `replace`，查找子串并将它们都替换为另一个字符串
8. `concat`，将字符串拼接起来
9. `toUpperCase`，将字符串中的所有小写字符都转换为大写，并返回结果

### 事件

什么是事件，如：用户单击按钮，鼠标位置发生变化，通过网络获取数据，窗口大小发生变化，定时器到期，浏览器位置发生变化等，都会触发事件。

创建事件处理程序：

```
// 处理程序就是一个函数
function da() {
 console.log('dadaqianduan.cn');
}
```

访问`DOM`中的图片

```
var image = document.getElementById('dadapic'); // 获取指向图像元素的引用
// 只有网页加载完毕后，我们才能从DOM中获取图像
window.onload = init;
function init() {
 var image = document.getElementById('dadapic');
 // 创建init函数，并将其赋给属性onload，从而确保这些代码在网页加载完毕后才执行
}

// 添加图像处理程序
window.onload = init;
function init() {
 var image = document.getElementById("dadapic");
 image.onclick = dadaFun;
}
// 将一个处理程序赋给从DOM中获取的图像对象的onclick属性
// 编写函数dadaFun
function dadaFun() {
 var image = document.getElementById("dadapic");
 image.src = "dadaqianduan.jpg";
 // 将图像元素的src属性更换图片
}
```

### 事件和队列

> 浏览器不断地从这个队列中取出事件，并调用相应的事件处理程序来处理他们。

`mousemove`事件：

当鼠标在特定元素上移动时，`mousemove`事件通知相应的处理程序，要指定处理程序，可使用元素的属性`onmousemove`，这样会给这种事件处理程序传递一个`event`对象，其中包含如下属性：

`clientX`和`clientY`，鼠标相对于**浏览器**创建左边缘和上边缘的距离，单位为像素。

`screenX`和`screenY`，鼠标相对于**设备屏幕**左边缘和上边缘的距离，单位为像素。

`pageX`和`pageY`，鼠标相对于**网页**左边缘和上边缘的距离，单位为像素`

### 规范

编写可维护的代码，很重要，不然被骂得很惨！！！

1. 写代码，无需原始开发者的帮助，写代码要让任何人一看代码就知道它是在干什么，以及它是怎么实现的。
2. 写代码✍，要符合逻辑，无论操作有多么复杂，代码中的一切都要顺理成章。
3. 要重点思考，写代码，当使用数据发生变化时，也不用重写。
4. 要经过设计（代码架构），能够支持以后的扩展核心功能。
5. 要让自己或别人能够容易进行调试，能让代码可以给出明确的信息，可以通过调试定位问题。
6. 学习前要注重代码编写规范，要让代码容易维护，具有可读性。
7. 注意写注解，在函数和方法地方描述其用途，完成任务所用到的算法。在大型代码块中，复杂的算法中，加入注解。
8. 代码中变量和函数的适当命名对于其可读性和可维护性至关重要的。如变量名应该是名词，函数名应该是动词，返回布尔值的函数常以`is`开头，对变量和函数都使用符合逻辑的名称（长度适当），变量，函数和方法应该以小写字母开头，使用驼峰大小写形式，类名应该首字母 大写，常量值应该全部大写并以下划线相接，名称要尽量具有描述性和直观。

> `ES6`之前，初始化方式不适合函数声明中函数的参数，之后，可以在函数声明中为参数指定默认值来标明参数类型。

通过标明变量类型的方式是通过初始化。示例：

```
// 通过初始化标明变量类型
let daBoolean = false; // 布尔值
let daNumber = -1; // 数值
let daString = ""; // 字符串
let daObject = null; // 对象
```

通过匈牙利表示法，标明变量类型的方式。

`JavaScript`传统的匈牙利表示

```
o 表示 对象
s 表示 字符串
i 表示 整数
f 表示 浮点数
b 表示布尔值

let bDa; // 布尔值
let iDa; // 整数
let sDa; // 字符串
```

但是这种不好的是使用起来代码可读性下降，不够直观。

还可以使用类型注释，但是也不够优美。

### setTimeout工作原理

函数`setTimeout`创建一个倒计时的定时器，并将其关联到一个处理程序。当定时器计时到零后，将调用这个处理程序。

- `setInterval`返回一个`timer`对象。要停止该定时器，可将其传递给另一个函数`clearInterval`。
- 严格上说，应写`window.setTimeout`，因`window`是全局对象，可以省略。
- 调用`setTimeout`时，可以向处理程序传递任意数量的参数：0个，1个或更多。
- 事件对象主要用于`DOM`事件处理程序，`setTimeout`不向处理程序传递事件对象，因为时间事件并非由特定的元素触发。

### 事件

1. `click`，在网页中单击时将触发这个事件。
2. `resize`，每当用户调整浏览器窗口的大小时，都将触发这个事件。
3. `play`，用户单击网页中`video`元素的播放按钮时，将触发这个事件。
4. `pause`，用户单击`video`元素的暂停按钮时，将触发这个世界。
5. `load`，浏览器加载网页完毕后触发的事件。
6. `unload`，用户关闭浏览器窗口或切换其他网页时，将触发这个事件。
7. `dragstart`，用户拖拽网页中的元素时，将触发这个事件。
8. `drop`，用户放下拖拽的元素时，将触发这个事件。
9. `mousemove`，在元素上移动鼠标时，将触发这个事件。
10. `mouseover`，用户将鼠标指向元素时，将触发这个事件。
11. `touchstart`，在触摸设备上，用户触摸并按住元素时，将触发这个事件。
12. `touchend`，用户停止触摸时，将触发这个事件。
13. `keypress`，用户按下任何键都将触发这个事件。
14. `mouseout`，用户将鼠标从元素上移开时将触发这个事件。

### 鸭子方法

代码示例加描述：

```
window.onload = dada;
function dada() {
 var image = document.getElementById("dadaqianduan");
 image.onclick = showDa;
}

function showDa() {
 var image = document.getElementById("dadaqianduan");
 image.src="dada.jpg";
}
```

> 网页加载时，定义函数`dada和showDa`；将`dada`指定为加载事件处理程序，网页加载事件发生时，调用加载事件处理程序`dada`，获取`id为dadaqianduan`的图像元素，将该图像元素的单击事件处理程序设置为`showDa`，图像单击事件发生时，调用`showDa`，获取`id为dadaqianduan`的图像元素。将其`src属性设置为dada.jpg`。

### 函数是一等公民

一个标准的函数声明，由关键字`function，函数名，形参和代码块`组成。

示例声明函数：

```
function da(num) {
 for (var i = 0; i < num; i++) {
  console.log("魔王哪吒");
 }
}

// 调用这个函数
da(12);
```

展示另外一种（指向函数的引用）：

```
var da = function(num) {
 for (var i = 0; i < num; i++) {
  console.log("魔王哪吒");
 }
}
da(12);
```

> 函数声明 和 函数表达式

分析：在执行任何代码之前，浏览器查找函数声明，找到函数声明时，浏览器创建相应的函数，并将得到的函数引用赋给与函数同名的变量。

浏览器：遇到了一个函数声明，必须先对其进行处理，再做其他的事情，我们将这个函数存储起来，以便能够在它被调用时获取它。

这个函数名为`da`，因此创建一个名为`da`的变量来存储指向这个函数的引用。

1. 在处理其他代码之前，先处理函数声明。
2. 函数声明是完整的语句，而函数表达式只是语句的一部分。
3. 函数表达式随其他代码一起被处理。
4. 对于函数声明和函数表达式创建的函数，用相同的方式处理调用它们的语句。
5. 应尽可能使用函数声明，因它们先被处理。
6. 函数声明不返回指向函数的引用，而是创建一个与函数同名的变量，并将指向函数的引用赋给它。
7. 函数表达式返回一个引用，该引用指向函数表达式创建的变量。
8. 可在变量中存储指向函数的引用。

> 区别

1. 使用函数声明时，函数将在**执行代码前**创建
2. 使用函数表达式时，函数将在**运行阶段**执行代码时创建
3. 使用函数声明时，将**创建一个与函数同名的变量**，并让它指向函数
4. 使用函数表达式时，通常**不给函数指定名称**，因此你要么在代码中将函数赋给一个变量，要么以其他方式使用函数表达式

> 一等公民特点

第一，将其赋给变量或存储在数组和对象等数据结构中

第二，将其传递给函数

第三，从函数中返回它们

> 可以将函数赋给变量；可以将函数传递给函数；可以从函数返回函数。

1. 定义函数的方式：使用**函数声明**和使用**函数表达式**
2. 函数引用是一个指向**函数的值**
3. 函数声明在执行代码前处理
4. 函数表达式在运行阶段随其他代码一起执行
5. 处理函数声明时，浏览器创建一个函数以及一个与函数同名的变量，并将指向函数的引用存储到变量中
6. 处理函数表达式时，浏览器创建一个函数，但你必须显式地处理指向这个函数的引用
7. 函数引用是作为**一等**公民的值
8. 可将作为**一等公民**的值赋给变量，包含在数据结构中，传递给函数或从函数返回

### 作用域，闭包

浏览器分两次处理`JavaScript`代码：

1. 浏览器分析所有的函数声明，并定义这些函数声明创建的函数；
2. 浏览器按从上到下的顺序执行代码，并定义函数表达式创建的函数。

> 使用函数声明的函数是在使用函数表达式创建的函数之前定义的。

提升：函数声明放在任何地方，且可在任何地方调用它们。在代码任何地方，函数声明创建的函数都是已定义的。

函数表达式，它创建的函数要等到它执行后才被定义，就算你将函数表达式赋给全局变量，也要等到它创建的函数被定义后，才能使用这个全局变量来调用这个函数。

> 嵌套函数，影响函数的作用域

函数表达式是在它调用的时候，才定义的。

### 词法作用域介绍

词法，表示只需要**查看代码的结构** 就 可确定 变量的作用域，而不是等到代码执行时才明白。

所有的局部变量都存储在一个环境中，它存储了在局部作用域内定义的所有变量。

```
function da() {
 return daString;
} 
return da;
```

返回这个函数时，返回的不仅仅是函数，还有与之相关联的环境。（每个函数都有与之相关联的环境，其中包含它所处作用域内的局部变量）

> 什么是词法作用域

`JavaScript`的作用域规则完全基于**代码的结构**，而不是一些动态的运行阶段属性。（只需要查看代码的结构，就能确定变量是在什么地方定义的）

在`JavaScript`中，只有函数会引入新的作用域。

对于函数中引用的变量，要确定它是在哪里定义的，可以从最里面，既是当前函数中，开始依次向最外面进行查找，直到找到它为止。如果在这些函数中都找不到它，要么是全局，要么未定义。

形参变量包含在环境中，形参视为函数的局部变量，所以它们也在环境中。

### 闭包

闭包，名词，指的是**函数和引用环境**（闭包，一个函数及其环境）

示例：

```
function makeCounter() {
 var count = 0; // 局部变量
 function counter() { // 创建函数counter,它将变量count+1
  count = count + 1;
  return count;
 }
 return counter; // 返回函数counter
}
```

> 将函数传递给函数时，也将创建闭包。

示例：

```
function makeTimer(doDa, n) {
 setTimeout(function() { // 函数setTimeout传入一个函数表达式
  console.log(doDa);  // 函数表达式使用了自由变量doDa。
 }, n);
}
```

> 自由变量：不是在本地定义的变量，这些变量称为自由变量。

注意：（如果闭包函数外面的代码修改了变量，闭包函数执行时看到的将是变量的新值。）

> 点击事件使用闭包

示例：

```
window.onload = function() {
 var count = 0;
 var message = "dadaqianduan";
 var div = document.getElementById("message");
 
 var button = document.getElementById("clickme");
 button.onclick = function() {
  count++;
  div.innerHTML = message + count + "浏览量";
 };
};
```

### 对象

每个对象，都使用**对象字面量**来指定其所有属性。

> 使用对象字面量创建对象

示例：

```
var dadaqianduan = {
 name: '魔王哪吒',
 age: 'dada',
 name1: 'jeskson',
 name2: 'dada',
}
```

> 对象构造函数

构造函数命名时，采用首字母大写的形式，示例：

```
function Dadaqianduan(name, name1, name2) {
 this.name = name;
 this.name1 = name1;
 this.name2 = name2;
 this.sayName = function() { // this.sayName 属性 一个匿名函数
  console.log("dada");
 }
}
```

使用构造函数示例：

```
var dada = new Dadaqianduan("dada1", "dada2", "dada3");
```

变量`dada`将包含一个指向新对象的引用，有了构造函数后，可以不断地创建不同对象。

`this`，存储了一个引用，指向当前处理的对象。函数执行完毕后，运算符`new`返回`this`，指向新创建的对象的引用。

> 构造函数中返回值，除非返回的是`this`，否则这将导致构造函数不返回它创建的对象。

注意：调用构造函数来创建对象时，`this`被设置为一个引用，值向正在创建的新对象，因此构造函数的所有代码针对的都是这个新对象。

对象创建后，当你对其调用方法时，`this`被设置为方法被调用的对象。所以，在方法中，`this`总是表示方法被调用的对象。

### 对象实例

使用运算符`instanceof`来确定对象是由哪个构造函数创建的，如果对象是由指定的构造函数创建的，运算符`instanceof`将返回`true`。（根据创建对象时，运算符`new`在幕后存储了一些信息，随时都能确定对象是由哪个构造函数创建的）

### 内置构造函数

1. `Object`，可使用构造函数`Object`来创建对象。
2. `Math`，用于执行数学运算任务的属性和方法。
3. `RegExp`，用户创建正则表达式对象。
4. `Error`，在代码中捕获错误。

创建日期对象，示例：

```
// 只需要使用其构造函数即可
var now = new Date(); // 表示当前日期和时间的日期对象

// 构造函数Date返回一个表示本地当前日期和时间的Date实例
```

数组对象示例：

```
var emptyArray = new Array(); // 创建一个长度为零的空数组

var arrArray = new Array("a", "b", "c");
```

### 原型

> 在`JavaScript`中，对象从其他对象那里继承行为，称为**原型式继承**或基于原型的继承。（被继承的对象称为**原型**，继承既有属性包括方法，同时在新对象中添加属性）

`JavaScript`**对象**模型基于**原型**的概念，在这种模型中，可通过**扩展其他
对象**（即原型对象）来创建对象。

原型：对象构造函数。构造函数-继承原型。

如何在代码中访问原型，有一个构造函数`Da`，示例访问：

```
// 构造函数Da，将发现它有一个prototype属性，这是一个指向原型的引用
Da.prototype
```

在`JavaScript`中，函数也是对象，实际上，在`JavaScript`中，几乎所有的东西都是对象，数组也是。(函数有属性，而构造函数都包含属性`prototype`，来访问原型对象)

调用对象的方法时，`this`被设置为方法被调用的对象。即便在该对象中没有找到调用的方法，而是在原型中找到了它，也不会修改`this`的值，在任何情况下，`this`都指向原始对象，即方法被调用的对象，即便该方法位于原型中也是如此。

1. `JavaScript`对象系统使用原型式继承
2. 使用构造函数创建对象实例时，实例包含自己的自定义属性，还有构造函数中方法的副本
3. 给构造函数的原型添加属性后，使用这个构造函数创建的实例都将继承这些属性
4. 通过在原型中定义属性，可减少对象包含的重复代码
5. 要重写原型中的属性，只需在实例中添加该属性即可
6. 构造函数有默认的原型，你可通过构造函数的属性`prototype`来访问它
7. 可将你自己创建的对象赋给构造函数的属性`prototype`
8. 使用自定义的原型对象时，务必将原型的属性`constructor`设置为相应的构造函数，以保持一致性。
9. 要调用函数并指定函数体中`this`指向的对象，可调用其方法`call`

### JavaScript事件

`setTimeout`的描述：给定一个回调及`n`毫秒的延迟，`setTimeout`就会在`n`毫秒后运行该回调。

示例：

```
for (var i = 1; i <= 3; i++) {
 setTimeout(function() {
  console.log(i);
 }, 0);
}
// 4
// 4
// 4
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ab038d5afa24f87b545270e47408989~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b546ac3e612244448c6c1c852de4d20c~tplv-k3u1fbpfcp-watermark.image)

### 异步函数

`JavaScript`环境提供的异步函数通常可以分为两大类：`I/O`函数和计时函数。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74c1edfc5f254fd5bb2910e1c978de12~tplv-k3u1fbpfcp-watermark.image)

### 从原型到原型链

使用构造函数创建一个对象，示例：

```
// 构造函数首字母大写
function Da() {
 // 构造函数
}
var da = new Da(); // 实例化对象
da.name = 'jeskson'; // 添加属性
console.log(da.name); // jeskson
```

在示例中，`Da`是一个构造函数，使用`new`创建一个实例对象`da`。

记住：每个函数都有一个`prototype`属性，示例：

```
function Da() {
}
// 每个函数都有prototype属性
Da.prototype.name = 'jeskson';
var da1 = new Da();
var da2 = new Da();
console.log(da1.name); // jeskson
console.log(da2.name); // jeskson
```

注意：函数的`prototype`属性指向一个对象，这个对象是调用该构造函数而创建的实例原型。

既是构造函数和实例原型之间的关系：`Da`（构造函数）通过`prototype`而创建`Da.prototype`（实例原型）。

> 每个`JavaScript`对象，除`null`外，在创建的时候就会与之关联另一个对象，这个对象就是 原型。每个对象都会从原型“继承”属性。

实例化对象`da`，实例与实例原型`Da.prototype`之间的关系：

`__proto__`，每个`JavaScript`对象（`new`构造函数创建对象，如上述的`da`），除`null`外，都具有的一个属性，叫`__proto__`，这个属性会指向该对象的原型。

示例：

```
function Da() {
}

var da = new Da();
console.log(da.__proto__ === Da.prototype); // true
```

既是：`Da`构造函数，创建实例化对象`da`，`da`对象中都有一个属性`__proto__`，这个属性指向`Da.prototype`实例原型，而这个实例原型，是通过`Da`构造函数使用 每个函数中都有一个属性`prototype`，指向实例原型（`Da.prototype`）。

表示：构造函数 和 实例对象，都可以指向 原型。

有人问，那有没有原型 指向 （构造函数或者实例的），答：指向实例没有，指向构造函数就有。没有指向实例是 一个构造函数可以生成多个实例。

记住：每个原型都有一个`constructor`属性指向关联的 构造函数。

示例：

```
function Da() {
}
console.log(Da === Da.prototype.constructor); // true
```

既是关系：

1. 构造函数`Da`通过`prototype`指向实例原型`Da.prototype`
2. 构造函数`Da`创建的实例化对象`da`，通过`da`中（对象都有的属性）`__proto__`指向实例原型`Da.prototype`
3. 实例原型`Da.prototype`，每个原型中都有的属性`constructor`，通过`constructor`指向构造函数

示例：

```
function Da() {

}

var da = new Da();

console.log(da.__proto__ == Da.prototype) // true
console.log(Da == Da.prototype.constructor) // true
// 获取对象的原型
console.log(Object.getPrototypeOf(da) === Da.prototype) // true
```

> 实例与原型

当读取实例的属性时，如果找不到该属性，就会去查找与对象相关联的原型 中 的属性，如果查找不到， 就会去找 原型 的 原型，一直找到 最顶层为止。

示例：

```
function Da(){
}
Da.prototype.name = 'jeskson';
var da = new Da();
da.name = 'dadaqianduan';
console.log(da.name); // dadaqianduan
delete da.name;
console.log(da.name); // jeskson
```

> 原型的原型

示例：

```
var obj = new Object();
obj.name = 'jeskson';
console.log(obj.name); // jeskson
```

关系：构造函数，实例原型，实例化对象，原型的原型`Object.prototype`，构造函数`Object()`。

1. `Da`（构造函数），通过`prototype`指向，实例原型`Da.prototype`
2. `Da`构造函数，创建对象`da`，其`da`中的属性`__proto__`指向，实例原型`Da.prototype`
3. 实例原型`Da.prototype`，中属性`constructor`指向，构造函数`Da`
4. 实例原型`Da.prototype`，中原型的原型，（实例原型即是对象）对象中属性`__proto__`指向`Object.prototype`
5. `Object()`构造函数，通过`prototype`指向，`Object.prototype`原型
6. `Object.prototype`原型中属性`constructor`指向，构造函数`Object()`

> 原型链

示例：

```
// Object.prototype的原型 -> null
console.log(Object.prototype.__proto__ === null); // true
// null 表示 没有对象，即该处不应该有值。就是说Object.prototype没有原型，查找到Object.prototype就可以停止查找了
```

> 即`Object.prototype`（对象）中的属性`__proto__`指向 `null`

### constructor

示例：

```
function Da() {
}
var da = new Da();
console.log（da.constructor === Da); // true
```

当获取`da.constructor`时，`da`中其实没有`constructor`属性，当不能读取到`constructor`属性时，会从`da`的原型中`Da.prototype`中读取，找到原型中有该属性，即表示：

```
da.constructor === Da.prototype.constructor
```

### proto

大部分浏览器支持这个非标准的方法访问原型，它并不存在于`Da.prototype`中，而是来自于`Object.prototype`，与其说是一个属性，可以说是`getter/setter`，当使用`obj.__proto__`时，可以理解为返回了`Object.getPrototype(obj)`

注意：`Function`作为一个内置对象，是运行前就已经存在的东西，所以不会根据自己生成自己。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e317ffa58e84d4786fb74693ae7b4b4~tplv-k3u1fbpfcp-watermark.image)

原因：

1. 为量保持与其他函数一致
2. 标明是一种关系而已

> `prototype`是函数才会有的属性，而`__proto__`是几乎所有对象都有的属性。

接下来，说说什么是作用域：作用域指☞的是 **程序源代码中定义变量的区域**。

作用域规定了如何查找变量，也就是确定当前 执行代码 对变量 的访问权限。

### 词法作用域

在`JavaScript`中采用的是**词法作用域**，函数的作用域**在函数定义的时候就决定了**。

示例：

```
var name = 'jeskson'

function da1() {
 console.log(name);
}

function da2() {
 var name = 'dadaqianduan.cn';
 da1();
}

da2();
// 结果是jeskson ， 因为采用的是静态作用域
```

### 动态作用域

动态作用域 是 **在函数调用的时候才决定的**

> 面试题

```
var scope = "global scope";
function checkscope() {
 var scope = "local scope";
 function f() {
  return scope;
 }
 return f();
}
checkscope();
```

```
var scope = "global scope";
function checkscope() {
 var scope = "local scope";
 function f() {
  return scope;
 }
 return f;
}
checkscope()();
```

> 其结果都是打印：`local scope`，因采用的是词法作用域，函数的作用域 基于 函数 创建的位置。 （函数的作用域在函数定义的时候就决定了）

`JavaScript`是采用词法作用域的，表示函数的执行依赖于函数定义的时候所产生的变量作用域。 

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b609068e999c4ad3bace02c63a84bfcb~tplv-k3u1fbpfcp-watermark.image)

> 结果是10，因变量`a`读取不到对象`o`的属性`a`。改为`console.log(o.a)`就可以打印11。

### JavaScript设计模式之单例模式

1. 什么是设计模式：

设计模式是一套被反复使用，多数人知晓的，经过分类编目的，代码设计经验的总结

有人说：当封装一个函数时，你是在复用代码，当使用一个设计模式时，你是在复用他人的经验。

2. 设计模式的分类

- 创建型模式：单例模式，抽象工厂模式，建造者模式，工厂模式，原型模式。
- 结构型模式：适配器模式，桥接模式，装饰模式，组合模式，外观模式，享元模式，代理模式。
- 行为型模式：模板方法模式，命令模式，迭代器模式，观察者模式，中介者模式，备忘录模式，解释器模式，状态模式，策略模式，职责链模式，访问者模式。

3. 设计模式的好处

- 行之有效的解决方法
- 易于修改和维护
- 便于交流和沟通

4. 传统的单例模式

保证一个类仅有一个实例，并提供一个访问它的全局访问点。

```
{} 命名空间，防冲突
惰性单例
```

### 深入函数

1. 函数的定义

```
// 字面量
function fn() {};
函数声明
简洁，直观
声明提前

// 构造函数
var fn = new Function();
赋值语句
多此一举，效率低下
必须在调用语句之前

// 赋值表达式
var fn = function() {};
赋值语句
简洁，直观
必须在调用语句之前
```

2. 函数的调用

```
// 普通函数
fn()

// 匿名函数
(function() {})()

// 构造函数
new Object()

// 方法
Obj.method()

// 间接
fn.daFun()
```

3. 函数的参数

```
// 形参
函数定义时括号内的参数
接收实参的值
个数为fn_name.length

// 实参
函数调用时括号内实际传递的参数
将值赋值给形参
个数为arguments.length
```

4. 函数的返回值

```
// return
用在函数中
跳出函数

// continue
用在循环中
跳出本次循环

// break
用在循环中
跳出当前循环
```

### js表单验证案例

> 用户注册时，用户名，密码，手机的数据再输入的时候可能会格式不正确，所以需要对数据进行合法性校验。

用`js`的正则对象来进行数据的验证：`var reg = /正则表达式/;`

### js面向对象

> 面向对象：对代码的一种抽象，对外统一提供调用接口的编程思想。

基于原型的面向对象方式中，对象则是依靠构造器（`constructor`)利用原型`prototype`构造出来的。

1. 属性是事物的特性
2. 方法是事物的功能
3. 对象是事物的一个实例
4. 原型 是 `js`函数中由 `prototype` 属性引用了一个对象，即原型对象（原型）

> 闭包：是一个拥有许多变量和绑定了这些变量的环境的表达式

`js`字面式对象声明对象，示例：

```
var obj = {
 属性名称： 属性值，
 属性名称： 属性值，
 ...
 方法名称：function() {},
 方法名称：function() {},
 ...
}
```

`new`操作符后跟`Object`构造函数，示例：

```
var obj = new Object();

obj.属性 = 属性值；
obj.属性 = 属性值；
obj.方法 = function(str) {
 方法代码
};
```

`js`中构造函数声明对象，示例：

```
function Test([参数列表]) {
 this.属性 = 属性值；
 this.方法 = function() {
  // 方法中的代码
 }
}

var obj = new Test(参数列表);
```

`js`中工厂方式声明对象，示例：

```
function createObject(name, age) {
 var obj = new Object();
 obj.name = name;
 obj.age = age;
 obj.run = function() {
  // return 
 };
 return obj;
}

var da1 = createObject('dada', 1);
var da2 = createObject('jeskson', 2);
```

`js`中原型模式声明对象，示例：

```
function test() {

}
test.prototype.属性 = 属性值；
test.prototype.属性 = 属性值；
test.prototype.属性 = function() {
 // 执行代码
}
var obj = new test();
```

`js`中混合模式声明对象，示例：

```
function test(da1, da2, da3) {
 this.da1 = da1;
 this.da2 = da2;
 this.da3 = da3;
}
test.prototype.方法名称 = function() {
 // 执行代码
}
var obj = new Blog(da1, da2, da3);
```

`js`遍历对象的属性和方法，示例：

```
var da = {};
da.name = 'jeskson';
da.age = 1,
da.fn = function() {
 console.log('魔王哪吒');
}
for(var i in da) {
 // 遍历对象 in
 console.log(da[i]);
}
```

> 什么是封装

把对象内部数据和操作细节进行隐藏。

> 原型和原型链

1. 原型，利用`prototype`添加属性和方法
2. 原型链，`js`在创建对象的时候，都有一个叫做`__proto__`的内置属性，用于指向创建它的函数对象的原型对象`prototype`

> 原型继承

利用原型让一个引用类型继承另一个引用类型的属性和方法

> 构造函数继承

在子类内部构造父类的对象实现继承

> `call`和`apply`的用法

- `call`，调用一个对象的一个方法，以另一个对象替换当前对象
- `apply`，应用某一个对象的一个方法，用另一个对象替换当前对象

传参方式不同，`call`是参数列表，`apply`是数组。

> `js`面向对象的关键词

```
instanceof, delete, call, apply, arguments, callee, this
```

- 通过`new function()`创建的对象都是函数对象，其他的都是普通对象
- `js`中所有的函数对象都有一个`prototype`属性这个属性引用了一个对象，即是原型对象，简称原型，普通对象没有`prototype`，但有`__proto__`属性。

### 继承

1. 构造继承示例

```
function parents(name) {
 this.name = name;
 this.say = function() {
  console.log(this.name);
 }
}
function child(name, age {
 this.pobj = parents;
 this.pobj(name);
 this.age = age;
}

var da = new child('魔王哪吒', 1);
```

2. 原型继承示例

```
var da = function(){
};
da.prototype.say = function() {
 console.log('魔王哪吒');
}
da.prototype.name = 1;

var dada = function() {};
dada.prototype = new da();
dada.prototype.name = 2;
var obj = new dada();
// 子元素的成员属性name 会覆盖父元素
```

### 变量、作用域和内存问题

1. 变量：基本类型 和 引用类型

```
// 基本类型
不可修改
保持在栈内存中
按值访问
比较时，值相等即相等
复制时，创建一个副本
按值传递参数
用typeof检测类型

// 引用类型
可以修改
保存在堆内存中
按引用访问
比较时i，同一引用才相等
复制的其实是指针
按值传递参数
用instanceof检测类型
```

2. 作用域

- 作用域：全局作用域和局部作用域
- 作用域链 是用来 查询变量的
- `js`解析机制

3. 内存问题

- 离开作用域的值将被标记为 可回收， 将在垃圾收集期间 删除
- 标记清除 是 目前主流的垃圾收集算法
- 标记清除 是给 不用的值加标记，然后进行回收其内存
- 当变量不用的时候，可以手动解除它的引用
- 引用计算算法 可能 因为 循环引用的问题而得不到释放

### 执行上下文栈

执行代码顺序，示例（函数表达式）：

```
var da = function() {
 console.log("da1");
}
da(); // da1

var da = function() {
 console.log("da2");
}
da(); // da2
```

函数声明，先执行，展示：

```
function da() {
 console.log("da1");
}
da(); // da2

function da() {
 console.log("da2");
}
da(); // da2
```

代码是一段一段执行的。在`JavaScript`中的可执行代码，运行环境有三种，分全局代码（全局环境，代码首先进入的环境），函数代码（函数被调用时执行的环境），`eval`代码。

执行上下文（当执行到一个函数的时候，就会进行准备工作），概念：当代码运行时，会产生一个对应的执行环境，在这个环境中，所有变量会被事先提出来，有的直接赋值，有的默认值为`undefined`，代码从上往下开始执行，就叫做执行上下文。

示例：

```
function fn() {
 console.log(a); // undefined
 var a = 1;
}
fn();
```

> 执行上下文栈，`Execution context stack, ECS`，(如何管理创建的那么多执行上下文呢)，在`JavaScript`引擎中创建了执行上下文栈来管理执行上下文。

执行上下文生命周期：

创建-执行-执行完毕后出栈，等待被回收。

创建阶段：1，生成变量对象；2，建立作用域链；3，确定`this`指向。

执行阶段：1，变量赋值；2，函数引用；3，执行其他代码。

> 全局执行上下文

全局执行上下文只有一个，在客户端中一般由浏览器创建，也就是`window`对象，我们能通过`this`直接访问到它。

```
console.log(this);
// window
```

全局对象`window`上预定了大量的方法和属性，我们在全局环境的任意处都能直接访问这些属性方法，同时`window`对象还是`var`声明的全局变量的载体。

> 通过`var`创建的全局对象，都可以通过`window`访问。

> 函数执行上下文

函数执行上下文可存在无数个，每当一个函数被调用时会创建一个函数上下文，同一个函数被调用多次，都会创建一个新的上下文。

模拟执行上下文栈的行为，定义执行上下文栈数组：

```
ECStack = [];
```

`JavaScript`开始执行代码的时候，先遇到全局代码，即初始化的时候先向执行上文栈压入一个全局执行上下文，`globalContext`全局执行上下文，只有整个应用程序结束时，`ECStack`才会清空。即表示`ECStack`底部永远有个`globalContext`。

```
ECStack = [
 globalContext
];
```

执行上下文栈，也叫执行栈，或叫 调用栈，执行栈用于存储代码期间 创建的 所有上下文。

示例：

```
function da1() {
 da2();
 console.log(1);
}

function da2() {
 da3();
 console.log(2);
}

function da3() {
 console.log(3);
}

da1(); // 3 2 1
```

执行栈 与 上下文的关系，执行过程：

```
// 代码执行前创建全局执行上下文
ECStack = [
 globalContext
];

ECStack.push("da1 functionContext");

ECStack.push("da2 functionContext");

ECStack.push("da3 functionContext");

// da3 执行完毕，输出 3 并出栈
ECStack.pop();
// da2
ECStack.pop();
// da1
ECStack.pop();
// 最后执行栈中只剩下一个全局执行上下文
```

> 执行上下文创建阶段

分：1，创建阶段；2，执行阶段。

示例创建过程代码：

```
ExecutionContext = {
 // 确定this的值
 ThisBinding = <this value>,
 // 创建词法环境组件
 LexicalEnvironment = {},
 // 创建变量环境组件
 VariableEnvironment = {},
};
```

> 模拟写执行上下文栈的变化

示例1：

```
var scope = "global scope";

function da(){
    var scope = "local scope";
    function dada(){
        return scope;
    }
    return dada();
}

da();

// 执行上下文栈
ECStack.push(<da> functionContext);
ECStack.push(<dada> functionContext);
ECStack.pop();
ECStack.pop();
```

示例2：

```
var scope = "global scope";

function da(){
    var scope = "local scope";
    function dada(){
        return scope;
    }
    return dada;
}

da()();

ECStack.push(<da> functionContext);
ECStack.pop();
ECStack.push(<dada> functionContext);
ECStack.pop();
```

### 作用域链

上述说到：每个执行上下文，都有其三个重要属性：

1. 变量对象
2. 作用域链
3. `this`

作用域链就是：当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会 从父级执行上下文的变量对象中查找，一直找到全局上下文的变量对象为止，就就是全局对象。

像这样，由多个执行上下文的变量对象构成的链表，叫做作用域链。

回顾：函数的作用域在函数定义的时候就决定了，词法作用域。

示例：（函数有一个内部属性`[[scope]]`存储所有父变量对象）

```

function da1() {
    function da2() {
        ...
    }
}


da1.[[scope]] = [
  globalContext.VO
];

da2.[[scope]] = [
    da1Context.AO,
    globalContext.VO
];
```

示例2：

```
var scope = "global scope";
function da(){
    var scope2 = 'local scope';
    return scoped2;
}
da();

// 函数被创建
da.[[scope]] = [
    globalContext.VO
];

// 执行函数
ECStack = [
    daContext,
    globalContext
];

// 创建作用域链
daContext = {
    Scope: da.[[scope]],
}

// 用 arguments 创建活动对象
daContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    }
}

// 将活动对象压入 da 作用域链顶端
daContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, [[Scope]]]
}

// 开始执行函数
daContext = {
    AO: {
        arguments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO, [[Scope]]]
}

// 函数执行完毕
ECStack = [
    globalContext
];
```

### 事件

什么是事件呢？它是可以被`JavaScript`侦测到的行为，通俗的将就是当用户与`web`页面进行某些交互时，解释器就会创建响应的`event`对象以描述事件信息。

你知道哪些事件呢：

1. 用户点击页面上的某项内容
2. 鼠标经过特定的元素
3. 用户滚动窗口
4. 用户改变窗口大小
5. 用户按下键盘某个键
6. 页面元素加载完成或加载失败

> 事件周期

1. 第一阶段：事件捕获，事件对象沿`DOM`树向下传播，向下
2. 第二阶段：目标触发，运行事件监听函数
3. 第三阶段，事件冒泡，事件对象沿`DOM`树向上传播，向上

> `IE`的事件模型中没有“事件捕获”阶段。

> 事件的冒泡处理机制（向上）

当处于`DHTML`对象模型底部对象事件发生时，会依次激活上面对象定义的同类事件处理。

> 事件句柄

那么什么是事件句柄：事件句柄，称 事件处理函数，事件监听函数，指用于响应某个事件而调用的函数。

每一个事件均对应一个事件句柄，在程序执行时，将相应的函数或语句指定给事件句柄，则在该事件发生时，浏览器便执行指定的函数或语句。

> 事件定义

定义监听函数三种方式：

1. 直接在`HTML`中定义元素的事件相关属性。（应尽可能少用）
2. 在`JavaScript`中为元素的事件相关属性赋值。
3. 高级事件处理方式，一个事件可以绑定多个监听函数。

> `DOM`事件流

1. 添加事件：`addEventListener()`

语法：`element.addEventListener(event,function,useCapture)`，用于指定元素添加事件句柄。

参数：

```
event: 字符串，指定事件名

function：指定要事件触发时执行的函数

useCapture：指定事件是否在捕获或冒泡阶段执行
```

2. 移除事件：`removeEventListener()`

语法：`element.removeEventListener(event,function,useCapture)`，用于移除`addEventListener()`方法。

### 事件列表

> 一般事件示例

```
onclick 鼠标点击时触发此事件

ondblclick 鼠标双击时触发此事件

onmousedown 按下鼠标时触发此事件

onmouseup 鼠标按下后松开鼠标时触发此事件

onmouseover 当鼠标移动到某对象范围的上方时触发此事件

onmousemove 鼠标移动时触发此事件

onmouseout 当鼠标离开某对象范围时触发此事件

onkeypress 当键盘上的某个键被按下并且释放时触发此事件

onkeydown 当键盘上某个键被按下并且释放时触发此事件

onkeyup 当键盘上某个按键被放开时触发此事件
```

> 页面相关事件

```
onabort 图片在下载时被用户中断

onbeforeunload 当前页面的内容将要被改变时触发此事件

onerror 出现错误时触发此事件

onload 页面内容完成时触发此事件

onmove 浏览器的窗口被移动时触发此事件

onresize 当浏览器的窗口大小被改变时触发此事件

onscroll 浏览器的滚动条为止发生变化时触发此事件

onstop 浏览器的停止按钮被按下时触发此事件或正在下载的文件被中断

onunload 当前页面将被改变时触发此事件
```

> 滚动字幕事件

```
onbounce 在Marquee内的内容移动至Marquee显示范围之外时触发此事件

onfinish 当Marquee元素完成需要显示的内容后 触发此事件

onfinish 当Marquee元素完成需要显示的内容后触发此事件

onstart 当Marquee元素开始显示内容时触发此事件
```

> 表单相关事件

```
onblur 当前元素失去焦点时触发此事件

onchange 当前元素失去焦点并且元素的内容发生改变而触发此事件

onfocus 当某个元素获得焦点时触发事件

onrest 当表单中reset的属性被激发时触发此事件

onsubmit 一个表单被提交时触发此事件
```

> 数据绑定

```
oncellchange 当数据来源发生变化时
ondetaavailable 当数据接收完成时触发事件
onafterupdate 当数据完成由数据缘对象的传送时触发此事件
onrowexit 当前数据源的数据将要发生变化时触发的事件
onrowsdelete 当前数据记录将被删除时触发此事件
onrowsinserted 当前数据源将要插入新数据记录时触发此事件
```

### 小结

1. 在浏览器内部，使用**文档对象模型**`DOM`来表示网页
2. 浏览器在加载并分析`HTML`时创建网页的`DOM`
3. 在`JavaScript`代码中，使用`document`对象来访问`DOM`
4. `document`对象包含你可以用来访问和修改`DOM`的属性和方法
5. 方法`document.getElementById`根据`id`从`DOM`获取一个元素
6. 方法`document.getElementById`返回一个表示网页中元素的**元素对象**
7. 元素对象包含一些属性和方法，你可以使用它们来读取和修改元素的内容
8. 属性`innerHTML`包含元素的文本内容和全部嵌套的`HTML`内容
9. 要修改元素的内容，可以修改其属性`innerHTML`的值
10. 要获取元素的特性值，可使用方法`getAttribute`
11. 要设置元素的特性值，可使用方法`setAttribute`
12. 可使用`window`对象的`onload`属性给加载事件指定**事件处理程序**
13. 网页加载完毕后，将立即调用`window`对象的`onload`属性指向事件处理程序
14. `undefined`是一个值，其`undefined`的类型是`undefined`类型，它不是对象，不是数字，字符串或布尔值，也不是任何明确的东西
15. 在`JavaScript`中，类型分两组，**基本类型和对象**。不属于基本类型的值都是对象
16. 基本类型包含数字，字符串，布尔值，`null`和`undefined`，其他的值都是对象
17. `undefined`表示变量还没有初始化
18. `null`表示“无对象”
19. `NaN`表示的是“非数字”，但应该说在`JavaScript`中无法表示的数字，`NaN`的类型为数字
20. `NaN`与包含它自己在内的任何值都不相等，因此要检查一个值是否是`NaN`，应该使用函数`isNaN`
21. 在`JavaScript`中总共有5个假值：`undefined, null, 0, "", false`，其他值都是真值
22. 要响应事件，可以编写并注册一个事件处理程序。如，要指定单击事件处理程序，可将事件处理程序赋给元素的`onclick`属性。
23. 匿名韩寒是没有名称的函数表达式
24. 函数声明创建的函数是在执行其他代码前定义的
25. 函数表达式是在运行阶段与其他代码一起执行的，因此在函数表达式所在的语句执行前，它创建的函数是未定义的
26. 可将函数表达式传递给函数，还可从函数返回函数表达式
27. 闭包指的是函数及其引用的环境
28. 闭包捕获其创建时所处作用域内的变量的值
29. 自由变量指的是在函数体内未绑定的变量
30. `typeof`返回其操作数的类型，如果向它传递一个字符串，它将返回`string`
31. 需要创建少量对象时，使用对象字面量；需要创建大量对象时，使用构造函数
32. 使用构造函数可创建包含相同属性和方法的一致对象
33. 使用`new`来调用构造函数时，将新建一个空对象，并在构造函数中将其赋给`this`
34. 在构造函数中，使用`this`来访问正在创建的对象，进而给它添加属性，构造函数 自动返回 它创建的 新对象

## 回看笔者往期高赞文章，也许能收获更多喔！

- [一个合格的初级前端工程师需要掌握的模块笔记](https://juejin.cn/post/6925197705832562696)
- [Vue.js笔试题解决业务中常见问题](https://juejin.cn/post/6916664414422695949)
- [【初级】个人分享Vue前端开发教程笔记](https://juejin.cn/post/6923946134025191432)
- [长篇总结之JavaScript，巩固前端基础](https://juejin.cn/post/6844904078934278158)
- [前端面试必备ES6全方位总结](https://juejin.cn/post/6844904067764846600)
- [达达前端个人web分享92道JavaScript面试题附加回答](https://juejin.cn/post/6913480482638266382)
- [【图文并茂，点赞收藏哦！】重学巩固你的Vuejs知识体系](https://juejin.cn/post/6844904117337341959)
- [【思维导图】前端开发-巩固你的JavaScript知识体系](https://juejin.cn/post/6844904106243391495)
- [14期-连肝7个晚上，总结了计算机网络的知识点！（共66条）](https://juejin.cn/post/6850037263116533773)

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

## 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

## 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)

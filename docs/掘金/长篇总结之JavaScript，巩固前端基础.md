    大家好，我是魔王哪吒，话不多说，今天带来的是一篇《长篇总结之JavaScript，巩固前端基础》文章，欢迎大家喜欢。

## 前言

### 什么是JavaScript

JavaScript是一种基于对象和事件驱动的客户端脚本语言，最初是为了检验HTML表单输入的正确性，起源于Netscape公司的LiveScript语言。

### 了解JavaScript的发展历史

`liveScript ==> javaScript => ECMAscript`

关系是：`liveScript`是`javaScript`的一个曾用名，`ECMAscript`: 定义了`javascript`的语法规范，描述了语言的基本语法和数据类型。

### 了解JavaScript的组成

`JavaScript`是由`ECMAScript`语言，`Browser Objects(DOM,BOM)`组成。

1. 语法：

### 学习js的注解和分号

`//`单行注解

`/**/`多行注解

语句结束使用分号，如果省略，则由接下确定语句的结尾。

### 学习JavaScript的语法

ECMAScript中的一切是区分大小写的，如变量，函数名，操作符。

### 学习标识符

什么是标识符，变量，函数，属性的名称，或者是函数的参数。

#### 标识符的命名规则

1. 由字母，数字，下划线或者是美元符号组成。
2. 不能以数字开头。
3. 不能使用关键字，保留字等作为标识符。

### 学习什么是变量

什么是变量，ECMAScript的变量是松散类型的。松散类型是指可以用来保存任何类型的数据。

> 每个变量仅仅只是用于保存值的占位符而已。

### 学习变量的声明和赋值

变量的声明：变量的声明使用var操作符，语法：var变量名。

#### 变量的赋值：

1. 声明的同时赋值，var 变量名=值
2. 先声明后赋值，变量名 = 值

> 一次声明多个变量，用逗号隔开。

注意，省略var声明的变量是全局变量，不推荐省略var操作符来定义全局变量。

## 掌握JavaScript的数据类型

ECMAScript中分：简单数据类型和复杂数据类型。

简单数据类型也称为基本数据类型，注意，在ES6中新增了symbol数据类型。

基本数据类型5种：

`undefined, null, boolean, number, string`

复杂数据类型分：`object`

## 学习typeof操作符

typeof是用来检测变量的类型。

语法结构，`typeof 变量`或者是`typeof(变量)`

返回值，是string类型，或者是`number,boolean,object,function,undefined`等。

## 学习Undefined

`undefined`类型只有一个值，即是特殊的`undefined`。

说明：一般而言，不存在需要显式地把一个变量设置为`undefined`值的情况。

## 学习null

`null`值表示一个空对象指针；如果定义的变量准备在将来用于保存对象，那么最好将变量初始化为null而不是其他值。

> `undefined`值是派生自`null`值的，所以`undefined==null`的返回结果为`true`。

## 学习`number`知识点

`number`:表示整数和浮点数。

`NaN`是（`not a number`）是一个特殊的数值，表示非数字。

> 任何涉及`NaN`的操作，都会返回`NaN`。

`NaN`与任何值都不相等，包括`NaN`本身。

## 学习`isNaN`知识点

`isNaN(n)`表示检测`n`是否为“非数值”。返回结果为`boolean`。

说明:`isNaN()`对接收的数值，先尝试转换为数值，再检测是否为非数值。

![](https://user-gold-cdn.xitu.io/2020/2/25/1707c653497790a2?w=251&h=175&f=png&s=7117)

## 数值转换

1. `Number()`
2. `parseInt()`
3. `parseFloat()`

`Number()`可以用于任何数据类型，`parseInt()`和`parseFloat()`用于把字符串转成数值。

`parseInt()`是会忽略字符串前面的空格，直至找到第一个非空格字符。

`parseInt()`转换空字符串返回`NaN`。

`parseInt()`这个函数提供第二个参数，转换时使用的基数。

`parseFloat()`从第一个字符开始解析每个字符，直至遇见一个无效的浮点数字符为止。

> 除了第一个小数点有效外，`parseFloat()`与`parseInt()`的第二个区别在于它始终都会忽略前导的零。

## 学习Striing

`String`类型用于表示由零或多个16位`Unicode`字符组成的字符序列。

## 学习字符串转换

1. `String()`
2. `toString()`

`str.toString()`将`str`转换为字符串。使用`String()`函数，能够将任何类型的值转换为字符串。

## 学习Boolean

用于表示真假的类型，即是`true`表示真，`false`表示假。

## 学习类型转换

除了0之外的所有数字，转换为布尔型都为true。

除了“ ”之外的所有字符，转换为布尔型都为true。

`null`和`undefined`转换为布尔型为`false`。

## 算数操作符

1. 什么是表达式
2. JavaScript操作符的分类
3. 学习算数操作符

表达式是将同类型的数据，用运算符号按一定的规则连接起来的，有意义的式子。

> 操作符的分类

1. 算数操作符
2. 逻辑操作符
3. 赋值操作符
4. 比较操作符
5. 三元操作符

![](https://user-gold-cdn.xitu.io/2020/2/25/1707d0920cd14be0?w=170&h=199&f=png&s=10341)

#### 递增

`++a`与`a++`都对`a`进行递增的操作。

区别：

`++a`先返回递增之后的`a`的值，`a++`先返回`a`的原值，再返回递增之后的值。

递减同理。

1. 赋值操作符
2. 比较操作符
3. 三元操作符

![](https://user-gold-cdn.xitu.io/2020/2/26/1707d3c972256083?w=402&h=106&f=png&s=12070)

![](https://user-gold-cdn.xitu.io/2020/2/26/1707d4676a394d90?w=644&h=294&f=png&s=61598)

#### 三元操作符

语法：条件？执行代码1：执行代码2

## 逻辑操作符

![](https://user-gold-cdn.xitu.io/2020/2/26/1707d6bf25359066?w=320&h=228&f=png&s=13800)

### 逻辑与`&&`

如果第一个操作数隐式类型转换后为`true`，那么返回第一个操作数。

如果第一个操作数隐式类型转换后为`false`，那么返回第二个操作数。

如果，只有有一个操作数为`null,NaN,undefined`，其中一个，就会返回`null,NaN,undefined`。

## 逻辑或与逻辑非

`||`或,只要有一个条件成立，返回`true`

`!`非，无论操作数是什么数据类型，逻辑非都会返回一个布尔值。

## 流程控制语句

1. 学习掌握if，prompt()，alert()

`alert()`，弹出警告对话框

`if`语句

    if(condition){
        statement1;
    }else{
        statement2;
    }

语法：`prompt()`

弹出输入框，有确定和取消。

    var age = prompt("请输入您的年龄")

> `NaN`和任何内容都不相等，包括它本身

## document.wirte()，星期的获取方法，掌握switch

语法：`new Date().getDay()`

获取星期，返回值，`number(0-6)`

    var week = new Date().getDay();
    console.log(week);

多条件可以使用`switch`语句

语法：

    switch(expression) {
        case value: statement
        break;
        case value: statement
        break;
        ...
        defalut: statement
    }

向浏览器输出内容：`document.write("内容")`

## JavaScript中的循环语句

1. `for`
2. `for-in`
3. `while`
4. `do...while`

语法：

    while(条件){
        执行的代码;
    }

语法：

    do{
        需要执行的代码
    }while(条件)

循环至少要被执行一次。

## break语句和continue语句

`break`立即退出循环

`continue`结束本次循环，继续开始下一次循环

##  JavaScript中的函数

1. 作用
2. 定义
3. 调用

函数的作用就是通过函数可以封装任意多条语句，可以在任何地方，任何时候调用执行。

函数是如何定义的，使用`function`声明。

函数名属于标识符。

    <script>
    // 声明一个函数
    function myFun(){
        alert("我是一个函数");
    }
    // 函数的调用
    myFun();
    </script>

### 函数的返回值

声明一个带有参数的函数：

    function add(num1,num2){
        var sum = sum1+sum2;
        return sum;
    }
    
    console.log(add(2,3));

函数会在执行完`return`语句之后停止并立即退出，`return`语句也可以不带有任何返回值，用于提前停止函数执行又不需要返回值的情况。

> 掌握`arguments`

在`ECMAScript`中的参数在内部用一个数组来表示，在函数体内通过`arguments`对象来访问这个数组参数。

## 内置对象

对象：字符串，函数，数组

内置对象就是浏览器自己封装好的对象。

1. `Array`
2. `String`
3. `Math`
4. `Date`

数组是用来存储一组数据的，如何创建数组，数组元素的读和写，数组的`length`属性。

创建数组：使用`Array`构造函数，`new Array()`，使用字面量表示法。

### 数组的栈方法

1. `push()`，把参数添加到数组的最后。
2. `unshift()`，把参数添加到数组的前面。
3. `pop()`，删除最后一个元素，返回被删除的那个元素。
4. `shift()`删除第一个元素，返回被删除的那个元素。

`join`方法，语法：`arrayObject.join(separator)`，功能是用于把数组中的所有元素放入一个字符串，返回的值是字符串。

`reverse()`方法，语法：`arrayObject.reverse()`，功能是用于颠倒数组中元素的顺序，返回值为数组。

`sort()`方法，语法：`arrayObject.sort(sortby)`，功能是用于对数组的元素进行排序，返回值为数组。-按照字符串比较的。

代码：

    arr.sort(function(a,b){return b-a});

`concat()`方法，是用于连接两个或者多个数组，返回值为数组。

    arr3 = arr1.concat(arr2);

`slice()`截取，从已有的数组中返回选定的元素。

语法：`arrayObject.slice(start,end)`

## `splice()`方法-删除-插入-替换

删除，语法：`arrayObject.splice(index,count)`，功能：删除从`index`处开始的零个或多个元素。返回值为含有被删除的元素的数组。

如果`count`为0，不删除任何值，如果`count`不设置，删除从`index`开始的所有值。

插入，语法：`arrayObject.splice(index,0,item1,...itemx)`，功能为在指定位置插入值。

替换：语法：`arrayObject.splice(index,count,itemq,...itemx)`，功能，在指定位置插入值，同时删除任意数量的项。

`index`为起始位置，`count`为要删除的项数，`item1...itemx`为要插入的项。

## 位置-indexOf和lastIndexOf

`indexOf()`，语法，`arrayObject.indexOf(searchvalue,startIndex)`，功能，从数组的开头（位置为0）开始向后查找。

返回值为`number`，没有找到的话就是返回`-1`，查找到返回在数组中的位置。

`lastIndexOf()`，语法：`arrayObject.lastIndexOf(searchvalue,startIndex)`，功能是从数组的末尾开始向前查找。

`String`字符串的方法：

1. `charAt()`
2. `charCodeAt()`
3. `indexOf()`
4. `lastIndexOf()`

`charAt()`与`charCodeAt()`的区别

语法：`stringObject.charAt(index)`，功能返回`stringObject`中的`index`位置的字符。

语法：`stringObject.charCodeAt(index)`，功能返回`stringObject`中的`index`位置字符的字符编码。

### 字符串的截取

字符串对象的截取：

1. `slice()`
2. `substring()`
3. `substr()`

数组对象也有`slice()`的语法

对于字符串的截取：

语法：`stringObject.slice(start,end)`

功能，截取子字符串。

参数说明：

1. `start`为指定字符串的开始位置。
2. `end`为表示字符串到哪里结束，`end`本身不在截取范围之内。

#### `substring()`

`substring()`语法，主要区别是这个当参数为负数时，自动转换为0。

`substring()`会将小的数当作开始位置，把较大的数当作结束位置。

> `substr()`，语法：`stringObject.substr(start, len)`

功能是截取字符串。

`start`为指定字符串开始的位置，`len`为表示截取的字符总数，省略时截取到字符串的末尾。

当`start`为负数时，会将传入的负值与字符串的长度相加。而`len`为负值时，返回字符串。

代码：

字符串长度为11

    str.substring(6,9);
    str.substr(6,3);
    str.substr(-5,4); // (6,4)
    str.substr(3,-4);

### 获取扩展名

    var url="http://xxx/index.txt";
    function getFileFormat(url) {
        var pos = url.lastIndexOf(".");
        return url.substr(pos); // .txt
    }
    var formatName = getFileFormat(url);

### `split()`

语法：`stringObject.split(separator)`。

功能，把一个字符串分割成字符串数组。返回值为`array`。

`separator`为分隔符。

### `replace()`替换

语法：`stringObject.replace(regexp/substr,replacement)`

功能：在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。返回值为`String`。

## toUpperCase()和toLowerCase()

语法：`stringObject.toUpperCase()`，把字符串转换为大写。

语法：`stringObject.toLowerCase()`，把字符串转换为小写。

    str.charAt(6).toUpperCase();

将每一个单词的首字母转换为大写，连接剩余的字符

    var newStr = word.charAt(0).toUpperCase()+word.substr(1);

## 数学对象

1. `min()`
2. `max()`
3. `ceil()`，向上取整。
4. `floor()`，向下取整。
5. `round()`
6. `abs()`

取整，`ceil()`，`floor()`

`Math.ceil()`语法：`Math.ceil(num)`，功能为向上取整，即返回大于`num`的最小整数。

`Math.floor(num)`，向下取整，返回`num`的整数部分。

`Math.round()`语法，功能是将数值四舍五入为最接近的整数。

### 绝对值`Math.abs()`

功能是返回`num`的绝对值，语法：`Math.abs(num)`，返回值为`Number`。

### `random()`方法-随机数

封装一个求n到m之间的随机整数的函数。

`random=Math.floor(Math.random()*(m-n+1)+n);`

`Math.random()`语法，是返回大于等于0小于1的随机数。

## date对象

`new Date()`为创建一个日期时间对象。不传参，返回当前的日期时间对象。

### 常用的一些方法

1. `getFullYear()`返回4位数的年份。
2. `getMonth()`返回日期中的月份，返回值为0-11。
3. `getDate()`返回月份中的天数。
4. `getDay()`返回星期，返回值为0-6。
5. `getHours()`返回小时。
6. `getMinutes()`返回分。
7. `getSeconds()`返回秒。
8. `getTime()`返回表示日期的毫秒数。

代码：

    var today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth()+1,
    date = today.getDate(),
    week = today.getDay(), // 0-6
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds(),

#### 设置方法

1. `setFullYear(year)`设置4位数。
2. `setMonth(mon)`设置日期中的月份。
3. `setDate()`设置日期。
4. `setHours()`设置小时。
5. `setMinutes()`设置分。
6. `setSeconds()`设置秒。
7. `setTime()`以毫秒数设置日期，会改变整个日期。

## 错误处理

1. `Chrome DevTools`的基本使用

语法错误：不符合js语法的错误。

运行时错误，代码没有语法错误，但是在运行时发生错误。

### 如何区分语法错误与运行时错误

1. 语法错误是不可能运行成功的。
2. 运行时错误是有可能运行成功的。

#### 逻辑错误

什么是逻辑错误？就是指计算结果很想象的不一样。

代码：

    function foo() {
        try {
            throw new Error();
        }catch(e){
            return 1;
        }finally{
            return 2;
        }
    }

## DOM节点操作

DOM操作，添加节点，删除节点，修改节点，查找节点。

`DOM document(文档) object(对象) model(模型)`

### 创建节点

`document.write()`创建节点

`create`创建方法：

`document.createElement()`

`document.createTextNode()`

`document.createDocumentFragment()`

`document.createComment()`

代码`create`创建节点：

    myReady(function(){
        var ul = document.getElementById("myList");
        var li = document.createElement("li");
        ul.appendChild(li);
    });
    
    <ul id="myList"></ul>

创建节点的高效方法：

`outerText`，`innerText`

`innerHTML`,`outerHTML`

### 节点遍历

`documentElement`属性可返回文档的根节点

`tagName`属性返回元素的标签名

类数组对象`NodeList`

类数组对象`HTMLCollection`

- `Ele.getElementsByTagName()`
- `document.scripts`
- `document.links`
- `document.images`
- `document.forms`
- `tr.cells`
- `select.options`

示例：

    myReady(function(){
        var scripts = document.scripts;
        var links = document.links;
        var cells = document.getElementById("tr").cells;
        var imgs = document.images;
        var forms = document.forms;
        var options = document.getElementById("select").options;
        var ps = document.getElementsByTagName("p");
    }

> 类数组对象`NamedNodeMap`

- `Ele.attributes`

> 类数组对象的动态性

三个集合`NodeList`，`HTMLCollection`，`NamedNodeMap`都是动态的。

> 节点查找

1. `getElementById()`
2. `getElementByName()`
3. `getElementByTagName()`
4. `getElementByClassName()`
5. `querySelector()`
6. `querySelectorAll()`

#### 获取元素的方式

- `document.getElementById()`

1. 根据ID获取元素
2. 返回一个元素
3. 对ID区分大小写(IE8和IE8以上)

- `document.getElementsByClassName()`

1. 根据class名获取元素
2. 返回是一个伪数组
3. IE8和IE8以下不支持

- `document.getElementsByTagName()`

1. 根据标签名获取元素
2. 返回一个伪数组
3. 兼容很好

- `document.getElementsByName()`

1. 根据name名获取，一般应用于表单
2. 返回伪数组
3. 只针对对name属性有效的标签生效。

**伪数组**

1. 必须是对象
2. 必须有length属性
3. 存放内容必须以索引+内容
4. 有数组的一些基本特性，但是不能使用数组的方法。

**获取元素属性**

    ele.setAttribute("属性名","属性值")
    ele.getAttribute("属性名")
    ele.removeAttribute("属性名")
    ele.dataset.prop="值"

`dom.style.prop`

1. 可读写行间样式
2. 写入的值必须是字符串格式

`window.getComputeStyle(ele,null)`

1. null的地方可以存放伪类
2. 返回的都是绝对值
3. 是只读的，不可修改

`ele.currentStyle`

1. 是只读的，不可修改
2. 返回的是经过转换的绝对值
3. IE独有的属性

`ele.id ele.title`

1. 获取样式：ele.style.prop--效率低，维护不方便 
2. ele.className---维护方便

> 获取元素的内容

`innerHTML:`

1. 在赋值的时候：标签会被解析成标签，页面中不会输出
2. 在提取内容时：标签会一并被提取

`innerText:`

1. 在赋值的时候：标签会被解析成文本，在页面中输出
2. 在提取内容时：标签不会并被提取，只提取文本内容

`value:`

使用于表单

`offset`系列属性

滚动条滚动的距离：

    window.pageYOffset(ie9以下不支持)
    document.body.scrollTop
    document.documentElement.scrollTop;

可视窗口尺寸：

    window.innerWidth(IE8以下不兼容)
    document.documentElement.clientWidth
    document.body.clientWidth(怪异模式)
    
    判断怪异模型的方法
        document.compatMode

滚动到指定位置

    scroll(x,y)   scrollTo(x,y)  scrollBy(x,y);  

#### 节点查找`querySelector()`和`querySelectorAll()`

`querySelector()`返回指定`css`选择器的一个元素

`querySelectorAll()`返回指定`css`选择器的一组元素

## 操作节点

1. `appendChild()`
2. `insertBefore()`
3. `replaceChild()`
4. `cloneNode()`
5. `normalize()`
6. `splitText()`

`appendChild()`为指定元素节点的最后一个子节点之后添加节点，该方法返回新的子节点。

`insertBefore()`在指定的已有子节点之前插入新的子节点。

`replaceChild()`该方法用于新节点替换某个子节点。返回被替换的节点。

`cloneNode()`创建节点的拷贝，并返回该副本。

    var myUrl = document.getElementById("myUrl");
    var newNode = myUrl.cloneNode(true); // 深度，有其子节点，默认为false，只有父节点

`normalize()`能够合并相邻的`Text`节点。

代码：

    myReady(function(){
        var div = document.createElement("div");
        var textNode = document.createTextNode("dom");
        div.appendChild(textNode);
        
        var textNode2 = document.createTextNode("web");
        div.appendChild(textNode2);
        document.body.appendChild(div);
        
        console.log(div.childNodes.length);
        div.normalize();
        console.log(div.childNode);
        console.log(div.firstChild.nodeValue);
    }

`splitText()`按照指定的位置把文本节点分割为两个节点。

### 删除节点方法

1. `removeChild()`
2. `removeNode()`
3. `innerHTML`
4. `deleteContents()`
5. `textContent`

`removeChild()`删除某个节点中指定的子节点。

`removeChild()`必须有参数

    myReady(function(){
        var myUrl = document.getElementById("myUrl");
        console.log(myUrl.childNodes.length);
        
        var secondChild = myUrl.removeChild(myUrl.childNode[1]);
        console.log(secondChild);
        console.log(myUrl.childNodes.length);
    }

`removeNode()`

1. `ie`的私有实现
2. 将目标节点从文档删除，返回目标节点
3. 参数是布尔值，默认值为`false`

`removeChild()`和`innerHTML`比较

`HTML DOM removeChild()` 方法

    var list=document.getElementById("myList");
    list.removeChild(list.childNodes[0]);

移除前:

    Coffee
    Tea
    Milk
移除后:

    Tea
    Milk

浏览器支持
`Internet ExplorerFirefoxOperaGoogle ChromeSafari`

所有主要浏览器都支持 `removeChild` 方法

语法`node.removeChild(node)`

> 创建节点，查找节点，操作节点，删除节点

![](https://user-gold-cdn.xitu.io/2020/3/1/170940665321553d?w=624&h=284&f=png&s=20747)

![](https://user-gold-cdn.xitu.io/2020/3/1/17094071c28b498d?w=574&h=301&f=png&s=17661)

![](https://user-gold-cdn.xitu.io/2020/3/1/1709407f12cae30a?w=653&h=283&f=png&s=17428)

![](https://user-gold-cdn.xitu.io/2020/3/1/1709408f227ab776?w=699&h=305&f=png&s=24153)

## DOM属性

示例：

    <div
    id="div0"
    class="active"
    style=""
    url=""
    xxx=""></div>

![](https://user-gold-cdn.xitu.io/2020/3/1/170941199d00e6a2?w=452&h=346&f=png&s=20124)

属性分：`property`固有属性和`attribute`自定义属性

1. `getNamedItem()`
2. `removeNamedItem()`
3. `setNamedItem()`

示例：

    myReady(function(){
        var inputs = document.querySelectorAll("input”);
        inputs[0].checked = true;
    }
    <input type="checkbox">1
    <input type="checkbox" checked="checked">2
    <input type="checkbox" checked>3

性别:<br/>
<input type="radio" name="gender" value="male" checked>男
<input type="radio" name="gender" value="female">女

示例：

    性别:<br/>
    <input type="radio" name="gender" value="male" checked>男
    <input type="radio" name="gender" value="female">女

你去过的城市：<br/>
<select name="city" id="city">
 <option value="北京">北京</option>
 <option value="上海">上海</option>
</select>

示例：

    你去过的城市：<br/>
    <select name="city" id="city">
     <option value="北京">北京</option>
     <option value="上海">上海</option>
    </select>

你去过的城市：<br/>
<select name="city" id="city" multiple="multiple">
 <option value="北京">北京</option>
 <option value="上海" selected>上海</option>
 <option value="纽约">纽约</option>
</select>

示例：

    你去过的城市：<br/>
    <select name="city" id="city" multiple="multiple">
     <option value="北京">北京</option>
     <option value="上海" selected>上海</option>
     <option value="纽约">纽约</option>
    </select>

#### 常见的字符串属性

![](https://user-gold-cdn.xitu.io/2020/3/1/17094544f73ca169?w=777&h=476&f=png&s=42572)

<p style="text-align:center" title="前端">前端</p>

示例：

    <p style="text-align:center" title="前端">前端</p>

## 事件

什么是事件？是文档或浏览器窗口发生的一些交互瞬间。

事件方法：

1. `onload`页面加载时触发
2. `onclick`鼠标点击时触发
3. `onmouseover`鼠标滑过时触发
4. `onmouseout`鼠标离开时触发
5. `onfoucs`获取焦点时触发
6. `onblur`失去焦点时触发
7. `onchange`域的内容改变时发生

> HTML事件

<input type="button" value="弹出" onclick='alert("我是按钮")'>

示例：

    <input type="button" value="弹出" onclick='alert("我是按钮")'>

### 绑定事件

绑定事件的方法：

`1.onclick:`

1. 一个元素上只能绑定一个
2. `this`指向`dom`元素本身

`2.obj.addEventListener(type,fn,false);`

- `IE9`以下不兼容
- 可以为一个元素绑定多个事件
- `this`指向`dom`元素本身

`3.obj.attchEvent("on"+type,fn);`

- `IE`独有
- 可以为一个元素绑定多个事件
- `this`指向`window`

1. `onsubmit`表单中的确认按钮被点击时发生
2. `onmousedown`鼠标按钮在元素上按下时触发
3. `onmousemove`在鼠标指针移动时发生
4. `onmouseup`在元素上松开鼠标按钮时触发
5. `onresize`当调整浏览器窗口的大小时触发
6. `onscroll`拖动滚动条滚动时触发

### 键盘事件与`keyCode`属性

`onkeydown`在用户按下一个键盘按键时发生

`onkeypress`在按下键盘按键时发生

`onkeyup`在键盘按键被松开时发生

`keyCode`返回`onkeypress`,`onkeydown`或`onkeyup`事件触发的键的值的字符代码，或键的代码。

![](https://user-gold-cdn.xitu.io/2020/3/1/17094d21dac2e08d?w=582&h=478&f=png&s=37410)

当用户与web页面进行某些交互时，解释器就会创建响应的`event`对象以描述事件信息。

事件句柄，称事件处理函数，事件监听函数，指用于响应某个事件而调用的函数。

### 事件的解绑

移除事件，`removeEventListener()`

语法：`element.removeEventListener(event,function,useCapture)`，功能，移除`addEventListener()`方法添加的事件句柄。

示例：

    var btn2 = document.getElementById("btn2");
    btn2.addEventListener('click',function(){
        alert('btn2');
    },false);
    
    // 事件解绑
    btn2.removeEventListener('click',function(){
        alert('btn2');
    });

事件解绑成功的主要原因在保存addxx和removexx里面的参数相同。

`ie`事件流（`ie`事件处理程序）

添加事件：`attachEvent()`

语法：`element.attachEvent(event,function)`

功能是用于向指定元素添加事件句柄

移除事件

`detachEvent()`

语法：`element.detachEvent(event,function)`

功能是移除`attachEvent()`方法添加的事件句柄。

### 事件委托和事件冒泡

事件周期：事件捕获（事件对象沿`dom`树向下传播），目标触发(运行事件监听函数)，事件冒泡（事件沿着`dom`树向上传播）。

#### 事件冒泡和事件捕获

示例：

    // 事件冒泡
    document.getElementById('parent').addEventListener("click",function(e){
      alert("parent事件被触发"+this.id);  
    })
    
    document.getElementById("child").addEventListener("click",ffunction(e){
      alert("child事件被触发"+this.id);  
    })

事件委托的原理就是事件冒泡

`event`对象属性与方法

`type`事件的类型，`srcElement/target`事件源，就是发生事件的元素。

阻止默认行为

    var link = document.getElementById("mylink");
    link.onClick = function(event){
        event.preventDefault();
    }
    
取消事件捕获或者冒泡

    var btn = document.getElementById("myBtn");
    btn.onclick=function(event){
        alert("Click");
        event.stopPropagation();
    }
    document.body.onclick = function(event){
        alert("Body clicked");
    }

`target`点击谁谁就是`target`，事件源

`currentTarget`事件绑定在谁身上，就指向谁

`clientY`就是指浏览器顶部底边到鼠标的位置

`pageY`就是指浏览器顶部底边到鼠标的位置

`screenY`就是指屏幕顶部到鼠标位置

#### event对象中的属性和方法

- `srcElement/target`事件源，就是发生事件的元素。
- `cancelBubble`布尔属性，设置为`true`时，将停止事件进一步起泡到包容层次的元素。
- `returnValue`布尔属性，设置为`false`时可以组织浏览器执行默认的事件动作。

## event对象跨浏览器兼容

示例：

    var EventUtil = {
        addHandler: function(element, type, handler) {
            
        },
        getTarget: function(event){
            return event.target || event.srcElement;
        },
        preventDefault: function(event){
            if(event.preventDefault){
                event.preventDefault();
            }else{
                event.returnValue = false;
            },
            removeHandler: function(element,type,handler){
                
            },
            stopPropagation: function(event){
                if(event.stopPropagation){
                    event.stopPropagation();
                }else{
                    event.cancelBubble = true;
                }
            }
        }
    }

Event addEventListener attacEvent

示例：

    var EventUtil = {
        addHandler: function(element,type,handler){
            
        },
        removeHandler: function(element,type,handler){
            
        }
    }

什么是`bom`

`Bom`浏览器对象模型。

![](https://user-gold-cdn.xitu.io/2020/3/1/17095cbffb413993?w=505&h=623&f=png&s=37521)

### Window 对象

`Window` 对象表示浏览器中打开的窗口。

如果文档包含框架`（<frame> 或 <iframe> 标签）`，浏览器会为 `HTML` 文档创建一个 `window` 对象，并为每个框架创建一个额外的 `window` 对象。

全局变量

`window`声明和关键字声明

`window.变量名=值`和`var 变量名=值`

`window`对象的方法

语法：`window.alert("content")`

语法：`window.confirm("message")`

|Window| 对象属性|
|:---|:---|
|属性|	描述|
|closed|	返回窗口是否已被关闭。|
|defaultStatus|	设置或返回窗口状态栏中的默认文本。|
|document|	对 Document 对象的只读引用|
|frames|	返回窗口中所有命名的框架。该集合是 Window 对象的数组，每个 Window 对象在窗口中含有一个框架。|
|history|	对 History 对象的只读引用。|
|innerHeight|	返回窗口的文档显示区的高度。|
|innerWidth|	返回窗口的文档显示区的宽度。|
|localStorage|	在浏览器中存储 key/value 对。没有过期时间。|
|length|	设置或返回窗口中的框架数量。|
|location|	用于窗口或框架的 Location 对象。请参阅 Location 对象。|
|name|	设置或返回窗口的名称。|
|navigator|	对 Navigator 对象的只读引用|

## 定时器

超时调用，间歇调用

语法：`setTimeout(code,millisec)`

语法：`setInterval(code,millisec)`

示例：

    var intervalId = setInterval(function(){
        console.log("web");
    },1000);
    setTimeout(function(){
        clearInterval(intervalId);
    },10000);

函数可以访问由函数内部定义的变量，如：

实例

    function myFunction() {
        var a = 1;
        return a * a;
    }

函数也可以访问函数外部定义的变量，如：

实例

    var a = 1;
    function myFunction() {
        return a * a;
    }

## location对象

`location`对象提供了与当前窗口中加载的文档有关的信息，还提供了一些导航的功能，它既是`window`对象的属性，也是`document`对象的属性。

`location.href`返回当前加载页面的完整的url。

`location.host`返回服务器名称和端口号。

`location.hostname`返回不带端口号的服务器名称。

`location.pathname`返回`url`中的目录和文件名。

`location.port`返回`url`中指定的端口号，如果没有，返回空字符串。

`location.protocol`返回页面使用的协议。

`location.search`返回`url`的查询字符串。

改变浏览器位置的方法：

`location.href`属性。

`location`对象其他属性也是可以改变`url`

`location.hash`和`location.search`

`location.replace()`是重新定向`url`

`location.reload()`重新加载当前显示的页面

`history`对象保存了用户在浏览器中访问页面的历史记录

`history.back()`回到历史记录的上一步

示例：

    var btn = document.getElementById("btn");
    // 点击btn按钮时回到历史记录的上一步
    btn.onclick = function(){
        //history.back();
        history.go(-1);
    }

`history.forward()`历史记录的下一步

`history.go(-n)`回到历史记录的前n步

`history.go(n)`回到历史记录的后n步

`screen`对象属性

`screen.availWidth`返回可用的屏幕宽度

`screen.availHeight`返回可用的屏幕高度

获取窗口文档显示区的高度和宽度，可以使用`innerHeight`和`innerWidth`

`navigator`对象

示例：

    // 检测浏览器类型
    function getBrowser(){
        // 获取userAgent属性
        var explorer = navigator.userAgent.toLowerCase(),browser;
        if(explorer.indexOf("mise")>-1){
            browser = "IE";
        }else if(explorer.indexOf("chrome")>-1){
            browser = "chrome";
        }else if(explorer.indexOf("opera")>-1){
            browser = "opera";
        }else if(explorer.indexOf("safari")>-1){
            browser = "safari"
        }
        return browser;
    }

## 闭包

什么是执行上下文环境？

    console.log(a);  // undefined
    console.log(this)； //window
    b(); // b() is not a function 
    c(); // "c"
    var a = "a";
    var b = function () {
      var b = "b"
      console.log(b);
    }  
    
    function c () {
      var c = "c"
      console.log(c);
    }

上下文栈就是一个存储执行上下文的栈，栈中只有一个上下文是处于活动状态的，执行全局代码时就会有一个全局上下文被压入栈，调用一个函数时就会产生一个函数的上下文环境，然后将其压入栈

### js的作用域 - 词法作用域

js的作用域是词法作用域(静态作用域)，实际上大部分的语言作用域都是词法作用域，与词法作用域相对的是动态作用域

### 什么是闭包

闭包是指有权访问另一个函数作用域中变量的函数。

### 闭包的使用

作用域链指向的变量对象

#### 闭包的形成及优缺点

形成闭包即要把一个函数当成值传递，该函数还引用另一个函数的作用域链使得被引用的函数不能被回收

优点：

1. 闭包里的变量不会污染全局，因为变量被封在闭包里
2. 所有变量都在闭包里保证了隐私性和私有性

## 后记

扫码关注公众号，订阅更多精彩内容。

![](https://user-gold-cdn.xitu.io/2020/2/24/17077e3377137c5f?w=1710&h=624&f=png&s=158784)
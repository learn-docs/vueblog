### JavaScript基础语法

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/ld.png)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200329174710.png)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200329175600.png)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200329175846.png)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200329180735.png)

```
var a = [1, 2, 5];
for(var k in a){
    console.log(k);   // k 为当前元素的下标
}
for(var m of a){
    console.log(m);   // m 为当前元素的值
}
VM215:3 0
VM215:3 1
VM215:3 2
VM215:6 1
VM215:6 2
VM215:6 5
```

#### 变量声明

- `var` 声明一个变量，可赋一个初始值。
- `let` 声明一个块作用域的局部变量，可赋一个初始值。
- `const` 声明一个块作用域的只读命名的常量。
- 变量的名字又叫做“标识符”，`必须以字母、下划线（_）或者美元符号（$）开头，并且区分大小写`。
- 若没有为变量赋初始值，则值默认为`undefined`
- 若没有声明变量而直接使用，抛出`ReferenceError`错误
- 当变量值为`undefined`时，布尔值环境当做`false`
- 当变量值为`null`时，布尔值环境当做`false`

#### 数据类型

- Boolean布尔值，true和false
- null对大小写敏感
- undefined空类型，变量未定义时候的值
- Number数值类型
- String字符串类型
- Symbol（ES6新增）表示一种唯一且不可变的数据

#### 字面量

- 字面量是用来表示如何表达这个值
- 变量赋值时右边的都是字面量
- 数组字面量
- 布尔字面量
- 浮点数字面量
- 对象字面量
- 整数字面量
- 正则字面量
- 字符串字面量

#### 全局变量

代码：

```
// ES5

var a = 'web';

window.a; // 'web'

// ES6

let b = 'web';

window.b; // undefined
```

#### 注释

代码：

```
// 单行注释

/*

多行注释

*/
```

#### 变量作用域

- 全局变量：即声明在函数之外，当前文档所有地方都可以访问
- 局部遍历：即声明在函数内部，仅在当前函数内可以访问

代码：

```
// ES5及之前

console.log(a); // undefined

var a = 1;

console.log(a); // 1

// ES6开始

console.log(b); // Uncaught ReferenceError: b1 is not defined

let b = 2;

console.log(b); // 2
```

#### 函数声明有两种方式

代码：

```
// 函数声明

f(); // 'web'

function(){

console.log('web');

};
```

```
// 函数表达式

g(); // Uncaught TypeError: g is not a function

var g = function(){ // 换成 let 声明也一样

console.log('web');

}
```

#### 常量

- 使用const来声明一个只读的常量
- const声明的变量不能直接修改值，但是对于对象和数组，却是不受保护可以修改的

1. 一个完整的`javascript`实现由3个部分组成：核心`ECMAScript`，文档对象模型`DOM`,浏览器对象模型`BOM`。
2. `JavaScript`是一种直译式脚本语言，是一种动态类型，弱类型，基于原型的语言，内置支持类型。
3. `JavaScript`具有特点：一种解释性脚本语言，主要用于向HTML页面添加交互行为，可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离，
4. 跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行。
5. `JavaScript`语法区别：区分大小写，变量是弱类型，结尾的分号可有可无，解释与`java，c和php`语言中的注解是相同的，大括号表示代码块。

> 示例`{}`包含的内容表示一个代码块

代码：

```
if(test1=="red") {
    test1 = "blue";
    alert(test1);
}
```

`JavaScript`关键字：

```
break,else,new,var
case,finally,return,void
catch,for,switch,while
continue,function,this,with
default,if,throw
delete,in,try
do,instanceof,typeof
```

#### `JavaScript`的变量

在`javascript`中，变量是存储信息的容器，变量存在两种类型的值，即为原始值和引用值。

1. `JavaScript`的原始类型，即`Undefined`，`Null`，`Boolean`，`Number`和`String`型。 
2. 字符串`String`是`JavaScript`的基本数据类型。
3. 数据类型表示数据的类型，`JavaScript`语言的每个值都属于某一种数据类型。
4. `JavaScript`的数据类型分两类：值类型（原始值），引用数据类型（引用值）。
5. 值类型：字符串string，数字number,布尔boolean，对空null，未定义undefined，symbol为es6引入的一钟新的原始数据类型，表示独一无二的值。
6. 引用数据类型：对象object，数组array，函数function。
7. `JavaScript`提供`typeof`运算符用于判断一个值是否在某种类型的范围内。
8. `Undefined`类型只有一个值，即为`undefined`。
9. 当声明的变量未初始化时，该变量的默认值是`undefined`。
10. `Null`类型只有一个值为`null`，值`undefined`实际上是从值`null`派生来的，所以`JavaScript`将他们定义为相等的。
11. `null`与`undefined`表示这两个值相等，但含义不同。
12. `undefined`是声明了变量但未对其初始化时赋予该变量的值，`null`表示尚未存在的对象。

代码：

```
console.log( null == undefined); // true
```

13. `Boolean`类型的两个值是`true`和`false`。
14. `Number`类型，所有数学运算返回的都是十进制的结果。
15. `Number.MAX_VVALUE`和`Number.MIN_VALUE`，它们定义了`Number`值集合的外边界。
16. 如果生成的数值结果大于`Number.MAX_VALUE`时，将被赋予值`Number.POSITIVE_INFINITY`，表示不再有`Number`值。生成的数值小于`Number.MIN_VALUE`，会被赋予值`Number.NEGATIVE_INFINITY`，表示不再有`Number`值。
17. 有表示无穷大的值为`Infinity`。
18. `Number.POSITIVE_INFINITY`的值为`Infinity`，`Number.NEGATIVE_INFINITY`的值为`-Infinity`。

> 使用`isFinite()`方法判断参数值是否是有穷的。

19. 特殊的`NaN`，表示非数。与无穷大一样，`NaN`也不能用于算术计算。注意,`NaN`与自身不相等。

示例：

```
console.log(NaN == NaN) // false
console.log(isNaN("66")); // false
```

20. `String`类型，是唯一没有固定大小的原始类型，字符串字面量是用双引号或者单引号声明。

#### 类型判断

1. `typeof`操作符，用于获取一个变量或者表达式的类型。

返回值：

```
undefined，变量是Undefined类型
boolean，变量是Boolean类型的
number，变量是Number类型的
string，变量是String类型的
object，变量是一种引用类型或者Null类型
```

示例：

```
console.log(typeof 12); // number
```

> `typeof`运算符对`null`的值返回`Object`。

2. `instanceof`操作符，用于判断一个引用类型属于哪种类型。

示例：

```
<script>
 var a = new Array();
 if(a instanceof Array) {
     console.log('a是一个数组类型');
 }else{
     console.log('a不是一个数组类型');
 }
</script>
```

#### 类型转换

1. `Number`变量，将变量转化为数字类型。
2. `String`变量，将变量转化为字符串类型。
3. `Boolean`变量，将变量转化为布尔值类型。
4. `parseFloat`变量，将变量转化为浮点类型。
5. `parseInt`变量，将变量转化为整数类型。

#### 运算符

1. 运算符：赋值运算符，算数运算符，比较运算符，逻辑运算符，一元运算符，二元运算符，三元运算符。

|名称|	操作符|	含义|
| :--- | :--- | :--- |
|赋值|	x = y|	x = y|
|加法赋值|	`x += y`|	`x = x + y`|
|减法赋值|	`x -= y`|	`x = x - y`|
|乘法赋值|	`x *= y`|	`x = x * y`|
|除法赋值|	`x /= y`|	`x = x / y`|
|求余赋值|	`x %= y`|	`x = x % y`|
|求幂赋值|	`x **= y`|	`x = x ** y`|
|左移位赋值|	`x <<= y`|	`x = x << y`|
|右移位赋值|	`x >>= y`|	`x = x >> y`|
|无符号右移位赋值|	`x >>>= y`|	`x = x >>> y`|
|按位与赋值|	`x &= y`|	`x = x & y`|
|按位异或赋值|	`x ^= y`|	`x = x ^ y`|


示例：

```
赋值运算符的符号为=

算数运算符：+，-，*，/，%

比较运算符：>，>=，<，<=，!=，==，===，！==

逻辑运算符： 

&&，逻辑与，表示表达式前后全为true才能返回true

||，逻辑或，表示表达式前后只要有一个true就返回true

!，逻辑取反，表示表达式后若为true，则返回false，否则反之。
```

2. `++`自增长，每执行一次自身加1,`--`自减，每执行一次自身减1.
3. `i++`，值先参与外部表达式的运算，然后再将自身的值加1。
4. `++i`，i先自身的值加1，再参与外部表达式的运算。
5. `+=`，`a+=3`等于`a=a+3`。同理类似。
6. 三元运算符的表达式格式为：条件？正：假
7. 运算符优先级：算数运算符>比较运算符>逻辑运算符>赋值运算符。

- 算数运算符
- 比较运算符
- 逻辑运算符
- 赋值运算符

#### 分支循环

1. `if-else`条件判断语句
2. `switch-case`选择语句
3. `for`循环语句
4. `for-in`遍历语句
5. `while`循环语句
6. `do-while`循环语句

示例：

```
if(条件 1) {
    当条件1为true时执行的代码
}else if(条件 2){
    当条件2为true时执行的代码
}else{
    当条件1和条件2都不为true时执行的代码
}
```

示例：

```
switch(n){
    case1:
    执行代码块1
    break;
    case2:
    执行代码块2
    break;
    default:
    ...
}
```

示例：

```
for(语句1;语句2;语句3){
    被执行的代码块
}
```

7. `continue`表示为越过本次循环，继续下一次循环
8. `break`表示跳出整个循环，循环结束

#### 遍历

1. `for in`语句循环遍历对象的属性，多用于对象，数组等复合类型，以遍历其中的属性和方法。

示例：

```
for(键 in 对象) {
    代码块
}
```

2. `while`，只有表达式为真，就可以进入循环。

示例：

```
while(表达式){
    代码块
}
```

3. `do-while`

示例：

```
do {
    代码
}while(表达式)
```

#### 数组

数组的属性和方法：

| 方法 | 说明 |
|:---|:---|
| `concat()` | 连接两个或者更多的数组，并返回结果 |
| `join()` | 把数组的所有元素放入一个字符串，元素通过指定的分隔符进行分隔 |
| `pop()` | 删除并返回数组的最后一个元素 |
| `push()` | 向数组的末尾添加一个或者多个元素，并返回新的长度 |
| `reverse()` | 颠倒数组中元素的顺序 |
| `shift()` | 删除并返回数组的第一个元素 |
| `slice()` | 从某个已有的数组返回选定的元素 |
| `sort()` | 对数组的元素进行排序 |
| `splice()` | 删除元素，并向数组添加新元素 |
| `toSource()` | 返回该对象的源代码 |
| `toString()` | 将数组转换为字符串，并返回结果 |
| `toLocalString()` | 将数组转换为本地数组，并返回结果 |
| `unshift()` | 向数组的开头添加一个或者更多元素，并返回新的长度 |
| `valueOf()` | 返回数组对象的原始值 |
|`indexOf()`|	在数组中搜索指定元素并返回第一个匹配的索引|
|`lastIndexOf()`|	在数组中搜索指定元素并返回最后一个匹配的索引|

> concat()

连接两个或更多的数组，并返回一个新数组。

语法:
```
arr.concat(a1, a2, ..., an)
```
参数:
1. `arr`：目标数组
2. `a1,a2,...,an`：需要合并的元素

> `join()`

使用指定分隔符，连接两个或多个数组的元素，返回一个字符串。

#### 数组定义

1. 使用`new`关键字创建一个`array`对象，可以在内存中创建一个数组空间，添加元素。
2. 使用`new`关键字创建一个`array`对象的同时为数组赋予n个初始值。
3. 不用`new`，直接用`[]`声明一个数组，可以直接赋予初始值。

#### 数组操作

1. 添加元素
2. 删除元素，pop方法，shift方法，splice方法。
3. 遍历数组
4. 插入元素，unshift方法，splice方法插入。
5. 合并数组
6. 数组转字符串
7. 数组元素倒序

- `pop`方法，从尾部删除，删除后元素从数组上剥离并返回。
- `shift`方法，从头部删除元素，并返回。
- `splice`方法，从指定位置删除指定的元素。
- `unshift`方法，从头部插入。
- `splice`方法，从指定位置插入指定个数的元素。
- `concat`方法将多个数组连接成一个数组。
- `join`方法将数组中的元素合并成一个用指定分隔符合并起来的字符串。
- `reverse`方法可以将数组中的元素倒序排列，而且直接改变原来的数组，不会创建新的数组。
- `sort`方法可以将数组中的元素按照一定的规则自动排序（默认的是按照字符的ASCII码顺序排序）。

> pop()和push()

1. pop(): 删除并返回数组最后一个元素，改变原数组。
2. push(item): 向数组末尾添加一个或多个元素，改变原数组，返回新的数组长度。

> shift()和unshift()

1. shift(): 删除并返回数组第一个元素，改变原数组。
2. unshift(item): 向数组头部添加一个或多个元素，改变原数组，返回新的数组长度。

示例：

```
let arr = [1, 2, 3, 5, 6];
let a1 = arr.slice(2);    // [3, 5, 6]
let a2 = arr.slice(2,3);  // [3]

let arr = [1, 2, 3, 4];
let a = arr.splice(1, 2, "web", "a");
// a =>  [2, 3]
// arr =>  [1, "web", "a", 4]
```

#### forEach()

代码：

```
let a = [1,3,5,7];
a.forEach(function(val, index, arr){
    arr[index] = val * 2
})
a ; // [2, 6, 10, 14]
```

代码：

```
arr.every(callback)

测试数组的所有元素是否都通过了指定函数的测试。

some()

测试数组中的某些元素是否通过由提供的函数实现的测试。
```

#### filter()

示例：

```
let a = [1, "", "aa", 2, 6];
let res = a.filter(function(val, index, arr){
    return typeof val == "number";
})
res;//[1, 2, 6]
```

#### map()

对每个元素执行此方法，并返回一个执行后的数组。

示例：

```
let a = [1, 3, 5];
let b = a.map(function(val, index, arr){
    return val + 1;
})
b; //[2, 4, 6]
```

#### 拓展运算符

拓展运算符使用`(...)`

示例：

```
console.log(...[1, 2, 3]);   // 1 2 3 
console.log(1, ...[2,3], 4); // 1 2 3 4
```

```
// 通常情况 浅拷贝
let a1 = [1, 2];
let a2 = a1; 
a2[0] = 3;
console.log(a1,a2); // [3,2] [3,2]

// 拓展运算符 深拷贝
let a1 = [1, 2];
let a2 = [...a1];
// let [...a2] = a1; // 作用相同
a2[0] = 3;
console.log(a1,a2); // [1,2] [3,2]
```

```
let [a, ...b] = [1, 2, 3, 4]; 
// a => 1  b => [2,3,4]

let [a, ...b] = [];
// a => undefined b => []

let [a, ...b] = ["abc"];
// a => "abc"  b => []
```

#### fill()

1. 用于用指定值填充一个数组
2. 用来初始化空数组，并抹去数组中已有的元素
3. fill()的第二个和第三个参数指定填充的起始位置和结束位置

```
new Array(3).fill('a');   // ['a','a','a']
[1,2,3].fill('a');        // ['a','a','a']
[1,2,3].fill('a',1,2);//  [1, "a", 3]
```

#### entries(),keys(),values()

1. `entries()`对键值对遍历
2. `keys()`对键名遍历
3. `values()`对键值遍历。

#### includes()

1. `includes()`用于表示数组是否包含给定的值
2. 第二个参数为起始位置，默认为0，如果负数，则表示倒数的位置，如果大于数组长度，则重置为0开始。

代码：

```
[1,2,3].includes(3,3);    // false
[1,2,3].includes(3,4);    // false
[1,2,3].includes(3,-1);   // true
[1,2,3].includes(3,-4);   // true
```

#### flat(),flatMap()

示例：

```
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

```
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

语法
```
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

```
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

```
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

#### Array.prototype.reduce()

`reduce()` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

```
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// 和为 6

var total = [ 0, 1, 2, 3 ].reduce(
  ( acc, cur ) => acc + cur,
  0
);
```

语法
```
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

initialValue可选

作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
```

#### 字符串对象属性

字符串对象属性

| 属性 | 说明 |
| :--- | :--- |
| `constructor` | 对创建该对象的函数的引用 |
| `length` | 字符串的长度 |
| `prototype` | 允许向对象添加属性和方法 |

#### 字符串对象方法

字符串对象方法

| 属性 | 说明 |
| :--- | :--- |
| `anchor()` | 创建HTML锚 |
| `big()` | 用大号字体显示字符串 |
| `blink()` | 显示闪动字符串 |
| `bold()` | 使用粗体显示字符串 |
| `charAt()` | 返回在指定位置的字符 |
| `charCodeAt()` | 返回在指定位置的字符的Unicode编码 |
| `concat()` | 连接字符串 |
| `fixed()` | 以打字机文本显示字符串 |
| `fontcolor()` | 使用指定的颜色显示字符串 |
| `fontsize()` | 使用指定的尺寸显示字符串 |
| `fromCharCode()` | 从字符编码创建一个字符串 |
| `indexOf()` | 检查字符串 |
| `italics()` | 使用斜体显示字符串 |
| `lastIndexOf()` | 从后向前搜索字符串 |
| `link()` | 将字符串显示为链接 |
| `localeCompare()` | 用本地特定的顺序比较两个字符串 |
| `match()` | 找到一个或者多个正则表达式的匹配 |
| `replace()` | 替换与正则表达式匹配的子串 |
| `search()` | 检索与正则表达式匹配的值 |
| `slice()` | 提取字符串的片段，并在新的字符串中返回被提取的部分 |
| `small()` | 使用小字号显示字符串 |
| `split()` | 将字符串分割为字符串数组 |
| `strike()` | 使用删除线显示字符串 |
| `sub()` | 将字符串显示为下标 |
| `substr()` | 从起始索引号提取字符串中指定数目的字符 |
| `substring()` | 提取字符串中两个指定的索引号之间的字符 |
| `sup()` | 将字符串显示为上标 |
| `toLocaleLowerCase()` | 将字符串转换为小写 |
| `toLocaleUpperCase()` | 将字符串转换为大写 |
| `toLowerCase()` | 将字符串转换为小写 |
| `toUpperCase()` | 将字符串转换为大写 |
| `toString()` | 返回字符串 |
| `valueOf()` | 返回某个字符串对象的原始值 |
| `toSource()` | 代表对象的源代码 |

#### 字符串搜索

`indexOf()`，`lastIndexOf()`，`search()`和`match()`。

1. `indexOf()`，`indexOf(搜索词，起始索引位置)`，第2个参数不写则默认从0开始搜索。`indexOf()`用于检索指定的字符串值在字符串中首次出现的位置。
2. `lastIndexOf()`，`lastIndexOf(搜索词，起始索引位置)`，从后向前检索，返回的是一个指定的子字符串值最后出现的位置。
3. `search()`，语法为字符串，`search(搜索词)`或者字符串`search(正则表达式)`。
4. `match()`，语法为字符串。`match()`可在字符串内检索指定的值，或者找到一个或者多个正则表达式的匹配。没有匹配到结果，就返回`null`。有匹配到，会返回一个数组，数组的第0个元素存放的是匹配文本。

#### 字符串截取

3种字符串截取方法：`substring()`,`slice()`,`substr()`

1. `substring()`，语法为字符串，`substring(截取开始位置，截取结束位置)`，`substring()`是常用的字符串截取方法，接收两个参数，不能为负值，将返回一个新的字符串。
2. `slice()`，语法为字符串,`slice(截取开始位置，截取结束位置)`，`slice()`中的参数可以为负值，如果参数是负值，则该参数从字符串的尾部开始算起的位置。`-1`是指字符串的最后一个字符。
3. `substr()`，`substr(截取开始位置，length)`，在字符串中抽取从截取开始位置下标开始的指定数目的字符。返回一个字符串如果截取的开始位置为负数，则表示从字符串尾部开始算起。

> 字符串替换

`replace()`，`replace(正则表达式/要被替换的字符串，要替换成为的子字符串)`。

> 字符串切割

`split()`用于将一个字符串分割成字符串数组，语法为字符串。`split(用于分割的子字符串，返回数组的最大长度)`，返回数组的最大长度一般情况下不设置。

#### JS事件三个阶段

事件流：

1. 事件冒泡流
2. 事件捕获流

> 事件的处理过程主要有三个阶段：捕获阶段，目标阶段，冒泡阶段
> 事件流包含三个阶段：事件捕获阶段，处于目标阶段和事件冒泡阶段。

- 捕获，事件由页面元素接收，逐级向下，到具体的元素
- 目标，具体的元素本身
- 冒泡，元素本身，逐级向上，到页面元素

1. 事件捕获，当使用事件捕获时，父级元素先触发，子元素后触发。
2. 事件冒泡，当使用事件冒泡时，子级元素先触发，父元素后触发。

事件冒泡和事件捕获

1. 事件发生会产生事件流
2. `DOM`事件流：`DOM`结构是一个树形结构，当一个HTML元素产生一个事件时，该事件会在元素节点与根节点之间按特定的顺序传播，路径所经过的节点都会收到该事件。
3. 事件流顺序有两种类型：事件冒泡和事件捕获。

> 事件触发方式

代码：

```
addEventListener("click","doSomething","true")
```

第三个参数为true，表示采用事件捕获，若false，表示采用事件冒泡。

```
<!DOCTYPE html>
<html lang="en>
<head>
<meta charset="UTF-8">
<title>Document</title>
<style>
html,body{
    width:100%;
    height:100%;
}
</style>
<script>
 window.onload=function(){
     d1 = document.getElementById("d1");
     d2 = document.getElementById("d2");
     d3 = document.getElementById("d3");
     // true 表示在捕获阶段响应
     // false 表示在冒泡阶段响应

     d1.addEventListener("click",function(event){
         console.log("d1")
     },"true");

     d2.addEventListener("click",function(event){
         console.log("d2")
     },"true")

     d3.addEventListener("click",function(event){
         console.log("d3")
     },"true")
 }
</script>
</head>
<body>
<div id="d1" style="background: #0000ff; width: 500px; height: 500px">
<div id="d2" style="background: #00ff00; width: 400px; height: 400px">
<div id="d3" style="background: #ff0000; width: 200px; height: 200px">
</div>
</div>
</div>
</body>
</html>
```

addEventListener网页，点击跳转：[addEventListener.html](/前端复盘课/addEventListener.html)

#### 事件委托

一个响应事件委托到另一个元素。

```
<ul id="btn">
    <li id="btn1">按钮1</li>
    <li id="btn2">按钮2</li>
    <li id="btn3">按钮3</li>
</ul>

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

webbtn.myAddFun(btn1, 'click', function(event){
    alert('1点击');
});

webbtn.myAddFun(btn2, 'click', function(event){
    alert('2点击');
});

webbtn.myAddFun(btn3, 'click', function(event){
    alert('3点击');
});
```

添加一个事件处理函数，来做事件委托

```
var btn = document.getElementById('btn');
webbtn.myAddFun(btn, 'click', function(event){
    event = webbtn.getMyEvent(event);
    var target = webbtn.getMyTarget(event);
    switch(target.id){
        case "btn1":
            alert('1点击');
            break;
        case "btn2":
            alert('2点击');
            break;
        case "btn3":
            alert('3点击');
            break;
    }
});
```

#### 键盘事件

键盘事件就是有关键盘操作所触发的世界。

键盘事件：

| 方法 | 说明 |
| :--- | :--- |
| `keydown` | 当用户按下键盘上的任意键时触发。按住不放，会重复触发 |
| `keypress` | 当用户按下键盘上的字符键时触发。按住不放，会重复触发 |
| `keyup` | 当用户释放键盘上的键时触发 |

#### 鼠标拖拽效果

鼠标绑定`onmousedown()`，`onmousemove()`，`onmouseup()`事件。

mouse网页，点击跳转：[mouse.html](/前端复盘课/mouse.html)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>mouse</title>
    <style>
        html,body{
            width: 100%;
            height: 100%;
        }
        #dd {
            width: 120px;
            height: 120px;
            background: #00ff00;
            position: absolute;
        }
    </style>
    <script>
        var dd;
        var mflag = false;
        function ondown() {
            dd = document.getElementById('dd');
            mflag = true;
        }
        function onmove(e){
            if(mflag) {
                dd.style.left = e.clientX - 60 + "px";
                dd.style.top = e.clientY - 60 + "px";
            }
        }
        function onup() {
            mflag = false;
        }
    </script>

</head>
    <body onmousemove="onmove(event)">
        <div id="dd" onmousedown="ondown()" onmouseup="onup()" style="left: 80px;top: 120px;"
    </body>
</html>
```

#### 鼠标事件

鼠标事件：

| 方法 | 说明 |
| :--- | :--- |
| `click` | 用户单击鼠标左键或者按下`Enter`键触发 |
| `dbclick` | 用户双击鼠标触发 |
| `mousedown` | 在用户按下任意鼠标按钮时触发 |
| `mouseenter` | 在鼠标光标从元素外部首次移动到元素范围内时触发，不冒泡 |
| `mouseleave` | 元素上方的光标移动到元素范围之外时触发，不冒泡 |
| `mousemove` | 光标在元素的内部不断移动时触发 |
| `mouseover` | 用户指针位于一个元素外部，然后用户将首次移动到另一个元素边界之内时触发 |
| `mouseout` | 用户将光标从一个元素上方移动到另一个元素时触发 |
| `mouseup` | 在用户释放鼠标时触发 |
| `mousewheel` | 滚轮滚动时触发 |

示例：

```
function web(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log("x:"+mouseX + "," + "y:"+mouseY)
}

<body onclick="web(event)">
```

1. 鼠标悬停是`onmouseover`
2. 鼠标离开是`onmouseout`

#### 窗口事件

窗口事件：

1. `load`
2. `unload`
3. `abort`
4. `error`
5. `select`
6. `resize`
7. `scroll`

> `load`事件，表示当页面完全加载完之后，就会触发`window`上面的`load`事件。包含所有的图像，js文件，css文件等外部资源。

示例：

```
window.onload=function(){}
```

当页面完全加载完之后执行其中的函数。

示例：

```
<script>
 window.onload = function() {
     var mydiv = document.getElementById("mydiv");
     console.log(mydiv.innerText);
 }
</script>

<body>
 <div id="mydiv"></div>
</body>
```

示例：

```
function imgLoad() {
    myimg = document.getElementById("myimg");
    // 图片加载完成后，给图片加载框
    myimg.style.border = "9px solid $00ff00";
}

<img id="myimg src="" onload="imgLoad()">
```

> resize事件

1. 当调整浏览器的窗口到一个新的宽度或者高度时，会触发`resize`事件。

示例：

`document.body.clientWidth`和`document.body.clientHeight`获得窗口的宽和高。

```
html,body {
    width: 100%;
    height: 100%;
}

<script>
 function winChange() {
     winWidth = document.body.clientWidth;
     winHeight = document.body.clientHeight;
 }
</script>

<body onresize="winChange()">
</body>
```

> `scrol`事件，文档或者浏览器窗口被滚动时触发`scroll`事件

示例：

```
<script>
 function scrollChange() {
     srpos = document.getElementById("srpos");
     srpos.innerText = document.documentElement.scrollTop;
     srpos.style.top = docuemnt.documentElement.scrollTop+"px";
 }
</script>

<body onscroll="scrollChange()">
 <div style="height:300%;">
 <br/>
 <font id="srpos" style="position: relative;top: 0px">滚动条滚动到0px</font>
 </div>
</body>
```

> 焦点事件

| 方法 | 说明 |
| :--- | :--- |
| `blur` | 在元素失去焦点时触发，所有浏览器都支持 |
| `focus` | 在元素获得焦点时触发，所有浏览器都支持 |

示例：

```
<script>
var note;
function myfocus(fname,notename) {
    note = document.getElementById(notename);
    note.innerText = fname+'获得焦点';
}

function myblur(fname,notename) {
    note = document.getElementById(notename);
    note.innerText = fname + '失去焦点';
}
</script>

<body>

<form name="myform">

<input type="text" name="uname" onfocus="myfocus('uname','unote')" onblur="myblur('uname','unote')"/><font id="unote"></font>

<br/>

<input type="text" name="pwd" onfocus="myfocus('pwd','pnot')" onblur="myblur('pwd','pnote')"/><font id="pnote"></font>

</form>

</body>
```

#### 事件介绍

事件方法

| 方法 | 说明 |
| :--- | :--- |
|`onabort`| 图像加载被中断 |
| `onblur` | 元素失去焦点 |
| `onchange` | 用户改变域的内容 |
| `onclick` | 鼠标单击某个对象 |
| `ondblclick` | 鼠标双击某个对象 |
| `onerror` | 当加载文档或图像时发生某个错误 |
|`onfocus`|元素获得焦点|
|`onkeydown`|某个键盘的键被按下|
|`onkeypress`|某个键盘的键被按下或者按住|
|`onkeyup`|某个键盘的键被松开|
|`onload`|某个页面或者图像被完成加载|
|`onmousedown`|某个鼠标按键被按下|
|`onmousemove`|鼠标被移动|
|`onmouseout`|鼠标从某元素移开|
|`onmouseover`|鼠标被移到某元素之上|
|`onmouseup`|某个鼠标按键被松开|
|`onreset`|重置按钮被单击|
|`onresize`|窗口或者框架被调整尺寸|
|`onselect`|文本被选定|
|`onsubmit`|提交按钮被单击|
|`onunload`|用户退出页面|

> 窗口事件

1. `load`事件
2. `resize`事件
3. `scroll`事件
4. 焦点事件

> 鼠标事件

1. 获取鼠标单击位置
2. 鼠标悬停和离开
3. 鼠标拖拽

> 键盘事件与事件冒泡，获取

#### JavaScript内置对象

1. `window`对象
2. `document`对象
3. `location`对象
4. `navigator`对象
5. `screen`对象
6. `history`对象

> `JavaScript`的`DOM`操作，包含获取节点，获取，设置元素的属性值，创建，添加节点，删除节点，属性操作。

#### `DOM`对象

1. 当网页被加载时，浏览器会创建页面的文档对象模型，`Document Object Model`，文档对象模型属于`BOM`的一部分，用于对`BOM`中的核心对象`document`进行操作。
2. `html dom`模型被构造为对象的树。

#### `DOM`操作

获取节点的方法：

1. 标签`id`获取：

```
document.getElementById(idName)
```

2. 标签`name`属性获取：返回元素数组

```
document.getElementsByName(name)
```

3. 类别名称获取：返回元素数组

```
document.getElementsByClassName(className)
```

4. 标签名称获取：返回元素数组

```
document.getElementsByTagName(tagName)
```

> 获取，设置元素的属性值

1. `getAttribute(attributeName)`方法，//括号出入输入名，返回对应属性的属性值
2. `setAttribute(attributeName,attributeValue)`方法，//传入属性名以及设置的值

示例：

```
<script>
window.onload=function(){
    mytable = document.getElementById('mytable');
    // 获取mytable中标签名为tr的字节点
    trs = mytable.getElementsByTagName("tr");
    len = trs.length;
    flag = true;
    for(i=0;i<len;i++){
        if(flag){
            trs[i].setAttribute('bgcolor','#cccccc');
            flag = false;
        }else{
            flag = true;
        }
    }
    ww = mytable.getAttribute('width');
}
</script>

<body>
<table id="mytable' align='center' width="80%" border="1">
<tr bgcolor = "#cccccc">
 <td>aaa</td>
 <td>bbb</td>
 <td>ccc</td>
</tr>
</table>
</body>
```

> 创建，添加节点

1. 创建节点：

代码：

```
// 创建节点：

document.createElement("h1");
document.createTextNode(String);
document.createAttribute("class");
```

2. 添加节点：

代码：

```
element.appendChild(Node);

element.insertBefore(newNode, existingNode);
```

3. 删除节点

代码：

```
element.removeChild(Node)
```

> 属性操作：获取当前元素的父节点，获取当前元素的子节点，获取当前元素的同级元素，获取当前元素的文本，获取当前节点的节点类型，设置样式。

- 获取当前元素的父节点

代码：

```
element.parentNode
```

- 获取当前元素的子节点

代码：

```
element.chlidren
```

- 获取当前元素的同级元素

代码：

```
element.nextElementSibling

element.previousElementSibling
```

- 获取当前元素的文本

代码：

```
element.innerHTML

element.innerText
```

- 获取当前节点的节点类型

代码：

```
node.nodeType
```

#### BOM对象

1. `BOM`对象，称为内置对象，是浏览器对象模型，也是`JavaScript`的重要组成部分。
2. `window`-》`document,location,navigator,screen,history`
3. `window`对象表示浏览器窗口
4. `window.innerHeight`获取浏览器窗口的内部高度,`window.innerWidth`获取浏览器窗口的内部宽度。
5. `document.documentElement.clientHeight`，`document.documentElement.clientWidth`；`document.body.clientHeight`，`document.body.clientWidth`。
6. 打开新窗口，`window.open(url)`。
7. 关闭当前窗口，`window.close()`。
8. 调整当前窗口的尺寸，`window.resizeTo(宽，高)`

> document对象

`document`属性和方法：

| 属性和方法 | 说明 |
|:--- |:--- |
| `document.bgColor` | 设置页面背景颜色 |
| `document.fgColor` | 设置前景色 |
| `document.linkColor` | 未点击过的链接颜色 |
| `document.alinkCOlor` | 激活链接的颜色 |
| `document.vlinkColor` | 已点击过的链接颜色 |
| `document.URL` | 设置url属性，从而在同一窗口打开另一网页 |
| `document.cookie` | 设置或读出`cookie` |
| `document.write()` | 动态地向页面写入内容 |
| `document.createElement(Tag)` | 创建一个HTML标签对象 |
| `document.getElementById(ID)` | 获得指定`id`值的对象
| `document.getElementsByName(Name)` | 获得指定`name`值的对象 |
| `document.body` | 指定文档主体的开始和结束 |
| `document.location.href` | 完整url |
| `document.location.reload()` | 刷新当前网页 |
| `document.location.reload(url)` | 打开新的网页 |

> location对象

`location`属性和方法：

| 属性和方法 | 说明 |
|:--- |:--- |
| `location.href` | 显示当前网页的url链接 |
| `location.port` | 显示当前网页链接的端口 |
| `location.reload()` | 重新刷新当前页面 |

> `navigator` 对象

`navigator`对象包含有关浏览器的信息

| 属性 | 说明 |
| :--- | :--- | 
| `appName` | 返回浏览器的名称 |
| `appVersion` | 返回浏览器的平台和版本信息 |
| `cookieEnabled` | 返回指明浏览器的是否启用`cookie`的布尔值 |
| `platform` | 返回运行浏览器的操作系统平台 |

> screen对象

1. 每个`window`对象的`screen`属性都引用一个`scrren`对象。
2. `screen`对象中存放有关显示浏览器屏幕的信息。

`screen`对象的属性：

| 属性 | 说明 |
| :--- | :--- |
| `availHeight` | 返回显示屏幕的高度 |
| `availWidth` | 返回显示屏幕的宽度 |
| `bufferDepth` | 设置或者返回调色板的比特深度 |
| `Height` | 返回显示器屏幕的高度 |
| `Width` | 返回显示器屏幕的宽度 |

> history对象

1. `history`对象包含用户访问过url。

`history`对象的属性：

| 属性 | 说明 |
| :--- | :--- |
| `history.length` | 返回浏览器历史列表中的url数量 |
| `history.back()` | 加载`history`列表中的前一个url |
| `history.forward()` | 加载`history`列表中的下一个url |
| `history.go()` | 加载`history`列表中的某个具体页面 |

#### 内置函数

1. 字符串函数
2. 数组函数
3. 数学函数
4. 日期函数

> 数学函数

| 属性 | 说明 |
| :--- | :--- |
| `ceil` | 大于或等于该数的最小整数，向上取整 |
| `floor` | 小于或等于该数的最大整数，向下取整 |
| `min(参数1，参数2)` | 返回最小值 |
| `max(参数1，参数2)` | 返回最大值 |
| `pow(参数1,参数2)` |返回数值1的数值2次方 |
| `random()` | 返回随机数 |
| `round(数值)` | 四舍五入 |
| `sqrt(数值)` | 开平方根 |

> 日期函数

- `set`：用于设置`Date`对象的日期和时间的值。
- `get`：用去获取`Date`对象的日期和时间的值。
- `to`：用于返回`Date`对象的字符串格式的值。
- `parse和UTC`：用于解析`Date`字符串。

| 属性 | 说明 |
| :--- | :--- |
| `getFullYear()` | 获取完整的年份 |
| `getMonth()` | 获取当前月份 |
| `getDate()` | 获取当前日 |
| `getDay()` | 获取当前星期几 |
| `getTime()` | 获取当前时间（从1970.1.1开始) |
| `getHours()` | 获取当前小时数 |
| `getMinutes()` | 获取当前分数 |
| `getSeconds()` | 获取当前秒数 |
| `toLocalDateString()` | 获取当前日期 |
| `toLocalTimeString()` | 获取当前时间 |
| `toLocalString()` | 获取日期与时间 |

1. 秒/分： 0 - 59；
2. 时： 0 - 23；
3. 星期： 0(周日) - 6(周六)
4. 日期： 1 - 31
5. 月份： 0(一月) - 11(十二月)
6. 年份： 从1900开始的年数

#### 定时器函数

1. `setInterval()`，按照指定的周期调用函数或者计算表达式。
2. `setTimeout()`，在指定的毫秒数后调用函数或者计算表达式。
3. 区别：`setTimeout()`只运行一次，`setInterval()`是循环执行的。

#### 函数

1. 函数由函数名，参数，函数体，返回值4部分组成的。

代码：

```
function 函数名(参数){
    函数体
    return 返回值
}
```

2. 函数声明3种：通过函数名声明，在程序调用时才能执行；通过将匿名函数赋值给变量，调用时可以执行；通过new的方式来声明，不需要调用，直接执行。

代码：

```
function web1 () {
    document.write("1");
}
web1();

var web2 = function(){
    document.write("2")
}
web2();

// 无须调用，直接执行，此方法不常用
var web3 = new function(
    document.write("3")
);
```

3. 函数返回值，函数执行完可以有返回值，也可以没有。
4. 函数的调用：传值调用，传址调用，传函数调用。

#### 闭包函数

- 内部函数只能在外部函数中访问
- 内部函数形成闭包
- 可以访问外部函数的参数和变量
- 外部函数却不能使用这个内部函数的参数和变量
- 闭包可以给内部函数的变量提供一定的安全保障

在js中一个函数在另一个函数中定义，就可以访问到父函数的成员，内部的函数就称为闭合函数。

闭合是词法闭包的简称，是引用了自由变量的函数。

闭包函数的特点：

1. 闭包作为与函数成对的数据，在函数执行过程中属于激活状态。
2. 闭包运行结束后，保持运行过程中的最终数据状态
3. 闭包（英语：Closure），又称词法闭包（Lexical Closure）或函数闭包（function closures）
4. 闭包在实现上是一个结构体，它存储了一个函数（通常是其入口地址）和一个关联的环境（相当于一个符号查找表）。
5. 词法作用域

代码：

```
function init() {
    var name = "web"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();
```

`init()` 创建了一个局部变量 `name` 和一个名为 `displayName()` 的函数。

`displayName()` 是定义在 `init()` 里的内部函数，并且仅在 `init()` 函数体内可用。

`displayName()` 没有自己的局部变量。然而，因为它可以访问到外部函数的变量，所以 `displayName()` 可以使用父函数 `init()` 中声明的变量 `name` 。

`displayName()` 函数内的 `alert()` 语句成功显示出了变量 `name` 的值（该变量在其父函数中声明）。

这个词法作用域的例子描述了分析器如何在函数嵌套的情况下解析变量名。

> 词法指，词法作用域根据源代码中声明变量的位置来确定该变量在何处可用。嵌套函数可访问声明于它们外部作用域的变量。

闭包是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。

> `JavaScript`中所有的`function`都是一个闭包。不过一般来说，嵌套的`function`所产生的闭包更为强大，也是大部分时候我们所谓的“闭包”。

闭包的作用

在a执行完并返回后，闭包使得Javascript的垃圾回收机制GC不会收回a所占用的资源，因为a的内部函数b的执行需要依赖a中的变量。

6. 函数的执行环境(excution context)
7. 活动对象(call object)
8. 作用域(scope)
9. 作用域链(scope chain)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200329154617.png)

#### 定时器和闭包

代码如下：

```
for(var i = 0 ; i<10; i++){
    setTimeout(function(){
        console.log(i);
    },100);
}
```

返回的是10个10。

解决：

1. 使用ES6新增的let。
2. 使用闭包

```
for(var i = 0; i<10 ; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, i*100);
    })(i);
}
```

ES6之前，使用var声明变量会变量提升问题：

```
for(var i = 0 ; i<10; i++)
{
    console.log(i)
};

console.log(i);  

// 变量提升 返回10
```

#### 对象

1. 声明一个对象有两种方法：通过`new Object()`和`{}`实现。

示例：

```
// 1
var Person = function(id,name){
    this.id = di;
    this.name = name;
}
var user1 = new Person(1,"web");

// 2
var web1 = {id:1,name:"web"};
var web2 = Object.create({id:2,name:"web"});
```

#### 正则表达式太难了

> 创建正则表达式

使用一个正则表达式字面量：
```
let reg = /ab+c/;
let reg = /^[a-zA-z]/gi;
```

1. 记不住，记不住，记不住。
2. 正则表达式是由普通字符以及特殊字符组成的文字模式。
3. 正则表达式中包含匹配符，定位符，限定符，转义符等。
4. 正则表达式中有两种方法：字符串方法，正则对象方法。

> 字符串方法

| 属性 | 说明 |
| :--- | :--- |
| `search()` | 检索与正则表达式相匹配的值 |
| `match()` | 找到一个或者多个正则表达式的匹配 |
| `replace()` | 替换与正则表达式的字符串 |
| `split()` | 把字符串分割为字符串数组 |

> 正则对象方法

RegExp对象方法

| 属性 | 说明 |
| :--- | :--- |
| `test()`| 用于检测一个字符串是否匹配某个模式 |
| `exec()` | 该方法用于检索字符串中的正则表达式的匹配,该函数返回一个数组 |

```
[a-z]
匹配小写字母从a到z中的任意一个字符
```

```
[A-Z]
匹配大写字母从a到z中的任意一个字符
```

```
[0-9]
匹配数字0到9中任意一个字符，等于 \d
```

```
[0-9a-z]
匹配数字0到9或者小写字母a到z中任意一个字符。
```

```
[0-9a-zA-Z]
匹配数字0到9或小写a到z或大写A到Z中任意一个字符
```

```
[abcd]
匹配字符abcd中的任意一个字符
```

```
[^a-z]
匹配除小写字母a到z外的任意一个字符
```

```
[^0-9]
匹配除数字0到9外的任意一个字符
```

```
[^abcd]
匹配除abcd外的任意一个字符
```

元字符是拥有特殊含义的字符：

```
.
查找单个字符，除了换行和行结束符。
```
```
\w
查找单词字符。
```
```
\W
查找非单词字符。
```
```
\d
查找数字。
```
```
\D
查找非数字字符。
```
```
\s
查找空白字符。
\S
查找非空白字符。
```
```
\0
查找 NUL 字符。
\n
查找换行符。
\f
查找换页符。
\r
查找回车符。
\t
查找制表符。
\v
查找垂直制表符。
```
```
\xxx
查找以八进制数 xxx 规定的字符。
\xdd
查找以十六进制数 dd 规定的字符。
\uxxxx
查找以十六进制数 xxxx 规定的 Unicode 字符。
```
#### 量词

量词描述

|量词|	描述|
|:---|:---|
|`n+`|	至少一个 n 的字符串。|
|`n*`|	零个或多个 n 的字符串。|
|`n?`|	零个或一个 n 的字符串。|
|`n{X}`|	X 个 n 的序列的字符串。|
|`n{X,Y}`|	X 至 Y 个 n 的序列的字符串。|
|`n{X,}`|	至少 X 个 n 的序列的字符串。|
|`n$`|	匹配任何结尾为 n 的字符串。|
|`^n`|	匹配任何开头为 n 的字符串。|
|`?=n`|	匹配任何其后紧接指定字符串 n 的字符串。|
|`?!n`|	匹配任何其后没有紧接指定字符串 n 的字符串。|

```
.定位符

定位符可以将一个正则表达式固定在一行的开始或者结束，也可以创建只在单词内或者只在单词的开始或者结尾处出现的正则表达式。
```

```
^

匹配输入字符串的开始位置
```

```
$

匹配输入字符串的结束位置
```

```
\b

匹配一个单词边界
```

```
\B

匹配非单词边界
```

```
/^[\d]{4}-[\d]{1,2}-[\d]{1,2}${1,2}$]/
日期字符
```

```
转义符

使用转义符（反斜杠\)进行转义
```

`new RegExp(str[, attr])`接收2个参数，`str`是一个字符串，指定正则表达式匹配规则，`attr`可选，表示匹配模式，值有`g(全局匹配),i(区分大小写的匹配)和m(多行匹配)`。

```
表达式：g,i,m

g 表示全局模式

应用于所有字符串，而非在发现第一个匹配项就停止

i 表示不区分大小写模式

m 表示多行模式

继续查找下一行中是否存在模式匹配的项
```

|修饰符	|描述|
|:---|:---|
|`i`|	执行对大小写不敏感的匹配。|
|`g`|	执行全局匹配。|
|`m`|	执行多行匹配。|

#### arguments对象

函数的实际参数会被保存在一个类数组对象 arguments 对象中，通过索引访问具体的参数：

```
var a = arguments[i]
```

1. 使用`arguments.length`来获取实际传入参数的数量
2. `arguments`对象来获取每个参数

#### 文本框失去焦点事件、获得焦点事件

onBlur:当失去输入焦点后产生该事件

onFocus:当输入获得焦点后，产生该文件

Onchange:当文字值改变时，产生该事件

Onselect:当文字加亮后，产生该文件

### 记忆力最好的三个时间段

1. 睡觉前2个小时
2. 起床后的一个小时
3. 上午8-10点

### ❤️感谢大家

1.如果本文对你有帮助，就点个赞支持下吧，你的「赞」是我创作的动力。

2.添加微信【xiaoda0423】，拉你进技术交流群一起学习。
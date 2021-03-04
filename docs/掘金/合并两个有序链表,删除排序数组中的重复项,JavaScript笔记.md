[Github来源：力扣 (LeetCode)｜刷题打卡](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

> [已开启]任务一：刷题打卡 * 10 篇

大家好，我是**魔王哪吒**，很高兴认识你~~

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

**时间： 3 月 1 日 ～ 3 月 13 日**

- [力扣 (LeetCode)-两数之和,有效的括号,两数相加｜刷题打卡](https://juejin.cn/post/6934840493352157197)-3月1日

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

### 21. 合并两个有序链表

一、题目描述

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85a411bae2984bcf8fa49a4d017639dd~tplv-k3u1fbpfcp-watermark.image)

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

输入：l1 = [], l2 = []
输出：[]

输入：l1 = [], l2 = [0]
输出：[0]
```

二、思路分析

- 使用递归来解，将两个链表头部较小的一个与剩下的元素合并，并返回排好序的链表头，当两条链表中的一条为空时终止递归。
- 逐一比较最小


三、答案代码

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    // 创建一个空的链表
    let curr = new ListNode();
    // 创建一个头
    let dummy = curr;

    while(l1!== null && l2 !==null){
        // 判断那个链表的值小，把小的连接起来
        if(l1.val<l2.val){
            curr.next = l1;
            l1 = l1.next;
        }else{
            curr.next = l2;
             l2= l2.next
        }
        curr = curr.next;
    }

    if(l1!==null){
        curr.next = l1;
    }
    if(l2!==null){
        curr.next = l2;
    }
    return dummy.next;
};
```

```
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
```

> 知识补充

### JavaScript笔记

1. 变量

JavaScript的类型有**数字，字符串，布尔值，函数和对象**，还有`undefined`和`null`，数组，日期，正则表达式。

> 在`JavaScript`中，使用关键字`var`，而不必指定变量类型，所以，`JavaScript`不是强类型语言。

2. `typeof`操作符返回变量或表达式的类型

```
console.log(typeof num); // number
console.log(typeof 'jeskson'); // string
console.log(typeof true); // boolean
console.log(typeof [1,2,3]); // object
console.log(typeof {name:'jeskson'}); // object
```

3. `JavaScript`支持`delete`操作符，可以删除对象里的属性

```
var my = {name: 'jeskson', age: 1};
delete my.age;
console.log(my); // {name: 'jeskson'}
```

4. 真假

```
nudefined // false

null // false

布尔值 // true为true,false为false

数字 // +0,-0和NaN都为false,其他为true

字符串 // 如果字符串是空的就是false,其他为true

对象 // true
```

5. `JavaScript`面向对象编程

- a. `var obj = new Object();`
- b. `var obj = {}`

```
obj = {
 name: 'jeskson'
 age: 1
};
```

> 面向对象编程**OOP**，对象是类的实例，一个类定义了对象的特征

> 在原型的中，函数只会创建一次，在所有实例中共享，如果在类的定义里声明，会在每个实例都会创建自己的函数副本，使用原型方法可以节约内存和降低实例化的开销。原型方法只能声明公共函数和属性，而类定义可以声明只在类的内部访问的私有函数和属性。

6. `ECMAScript`是一种脚本语言规范，`JavaScript`是这个规范的一个实现。

### `ECMAScript6`的功能

1. `let`和`const`
2. 模板字面量
3. 解构
4. 展开操作符
5. 箭头函数`=>`
6. 类

> `ES6`引入了一个`let`关键字，可以直接把`var`关键字都替换成`let`，`ES6`还引入了`const`关键字`，区别于`const`定义的变量是只读的，也就是常量。

> 模板字面量：模板字面量用一对 ` 包裹。要插入变量的值，只要把变量放在${}里就可以了，模板字面量也可以用于多行的字符串

箭头函数：

```
let circleArea = (r) => 3.14 * r * r;
```

函数的参数默认值：

```
function sum (x = 1, y = 2, z = 3) { 
 return x + y + z 
}; 
console.log(sum(4,2)); //输出9
```

声明展开和剩余参数：

- 在`ES5`中，我们可以用`apply()`函数把数组转化为参数
- `ES6`有了展开操作符（`...`）
- 在函数中，展开操作符（`...`）也可以代替`arguments`，当作剩余参数使用

```
console.log(sum(...params));

console.log(sum.apply(undefined, params));

function da(x, y, ...a) {
 return (x + y) * a.length;
}

function da(x, y) {
 var a = Array.prototype.slice.call(arguments, 2);
 return (x + y) * a.length;
}
```

数组解构：

- 可以用来一次初始化多个变量
- 可以用来进行值的互换，而不需要创建临时变量

对象解构：

```
var [x, y] = ['a', 'b']; 
var obj = { x, y }; 
console.log(obj); // { x: "a", y: "b" }
```

方法属性:

```
var hello = { 
 name : 'dada魔王哪吒', 
 printHello() { 
 console.log('Hello'); 
 } 
}

var hello = { 
 name: 'dada魔王哪吒', 
 printHello: function printHello() { 
 console.log('Hello'); 
 } 
};
```

使用类进行面向对象编程:

```
function dada(name, age) {
 this.name = name;
 this.age = age;
}
dada.prototype.printWork = function() {
 console.log(this.name);
};

class dada {
 // 声明一个有constructor函数
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
 printWork() {
  console.log(this.name);
 }
}
```

### 继承

可以使用`extends`关键字扩展一个类并继承它的行为，在构造函数中，也可以使用`super`关键字引用父类的构造函数。

> `JavaScript`面向对象编程是基于原型实现的

```
class itBook extends Book {
 costructor(title, pages, isbn, technology) {
  super(title, pages, isbn);
  this.technology = technology;
 }
 printTechnology() {
  console.log(this.technology);
 }
}

let daBook = new itBook('魔王哪吒算法', '222', '1333', 'JavaScript');
```

### 使用属性存取器

是一个声明了`get`和`set`函数的类：

```
class Person {
 constructor (name) {
  this._name = name;
 }
 get name() {
  return this._name;
 }
 set name(value) {
  this._name = value;
 }
}

let dada = new Person('jeskson');

ddada.name = '魔王哪吒';
```

### 26. 删除排序数组中的重复项

一、题目描述

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

```
示例 1:

给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
```

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:
```
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

二、思路分析

使用快慢指针来记录遍历的坐标，如果两个指针指的数字相同，则快指针向前走一步，如果不同，则两个指针都向前走一步，当快指针走完整个数组后，慢指针当前的坐标加1，就是数组中不同数字的个数。

实际上这就是双指针中的快慢指针。在这里快指针是读指针， 慢指针是写指针。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/309faf775a154f1086369a5a98c44355~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86f1f6534c0343f4b5ee302c9be6809b~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17a34c33d52343fd9b7430555848aaa8~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73c5a9d813124cf3810973ecdcb98634~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f0f11c3c94847e79cb7b666405fcbc7~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68e9a83fd99f43889943e266fbc7bf7c~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d913b98051b468a9856eb6b6133d374~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55d7f96f798c477f935669d6f4fd896e~tplv-k3u1fbpfcp-watermark.image)

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9663252542448d5a90c15b1f202c842~tplv-k3u1fbpfcp-watermark.image)

三、答案代码

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (size == 0) return 0;
  let slowP = 0;
  for (let fastP = 0; fastP < nums.length; fastP++) {
    if (nums[fastP] !== nums[slowP]) {
      slowP++;
      nums[slowP] = nums[fastP];
    }
  }
  return slowP + 1;
};
```

总结：

> 删除排序数组中的重复项，合并两个有序链表-题解！

### 回看笔者往期高赞文章，也许能收获更多喔！

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

### 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

### 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
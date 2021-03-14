[Github来源：力扣 (LeetCode)｜刷题打卡](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

> [已开启]任务一：刷题打卡 * 10 篇

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

**时间： 3 月 1 日 ～ 3 月 13 日**

- [力扣 (LeetCode)-两数之和,有效的括号,两数相加｜刷题打卡](https://juejin.cn/post/6934840493352157197)-3月1日
- [力扣 (LeetCode)-合并两个有序链表,删除排序数组中的重复项,JavaScript笔记｜刷题打卡](https://juejin.cn/post/6935212632173445151)-3月2日
- [力扣 (LeetCode)-最大子序和,JavaScript数据结构与算法（数组）｜刷题打卡](https://juejin.cn/post/6935568341322956830)-3月3日
- [针对CSS说一说｜技术点评](https://juejin.cn/post/6935952741755781156)-3月4日
- [力扣 (LeetCode)-栈,括号生成 ｜刷题打卡](https://juejin.cn/post/6936378038129164319)-3月5日
- [原来也没有那么难！Vue商城开发 | 技术点评](https://juejin.cn/post/6936871299234922509)-3月6日
- [力扣 (LeetCode)-加一，队列 ｜刷题打卡](https://juejin.cn/post/6937296154132480007)-3月7日
- [JavaScript数据结构之链表 | 技术点评](https://juejin.cn/post/6937443215599468558)-3月8日

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

> 数组，栈，队列，链表

### 集合

> 集合是由一组无序且唯一的项组成的，（不能重复），可以理解为集合是一个既没有重复元素，也没有顺序概念的数组。

- 并集，交集，差集

```
// 使用ES6中的Set类

function Set() {
 let items = {};
}
```

- `add(value)`，向集合添加一个新的项
- `delete(value)`，从集合移除一个值
- `has(value)`，如果值在集合中，返回`true`，否则返回`false`
- `clear()`，移除集合中的所有项
- `size()`，返回集合所包含元素的数量
- `values()`，返回一个包含集合中所有值的数组

> `has(value)`方法

```
this.has = function(value) {
 return value in items;
};
```

```
this.has = function(value) {
 return items.hasOwnProperty(value);
};
```

实现`add`方法：

```
this.add = function(value) {
 if(!this.has(value)) {
  // 如果不存在，就把value添加到集合中
  items[value] = value;
  return true;
 }
 return false;
};
```

> 添加一个值的时候，把它同时作为键和值保存，因为这样有利于查找这个值。

实现`remove`方法：

```
this.remove = function(value) {
 if(this.has(value)) {
 // 如果存在，就从集合中移除value
  delete items[value];
  return true;
 }
 return false;
};
```

使用`Set`类的示例代码：

```
let set = new Set();
set.add(1);
set.add(2);
```

移除集合中的所有值：

```
// clear方法
this.clear = function() {
 items = {}
};
```

> `size`方法

1. 使用一个`length`变量，每当使用`add`或`remove`方法时控制它，像使用`LinkedList`类一样
2. 示例：

```
this.size = function() {
// 返回一个包含给定对象所有属性的数组
 return Object.keys(items).length;
};
```

3. 示例：

```
this.sizeLegacy = function() {
 let count = 0;
 for(let key in items) {
  // 遍历items对象的所有属性
  if(items.hasOwnProperty(key))
  // 检查它们是否是对象自身的属性
  // 如果是，递增count变量的值
  ++count;
 }
 // 最后在方法结束时返回这个数字
 return count;
};
```

> `values`方法，提取`items`对象的所有属性，以数组的形式返回

```
this.values = function() {
 let values = [];
 
 for(let i=0, keys = Object.keys(items); i < keys.length; i++) {
  values.push(items[keys[i]]);
 }
 return values;
};
```

```
this.valuesLegacy = function() {
 let values = [];
 
 for(let key in items) {
 // 遍历items对象的所有属性
  if(items.hasOwnProperty(key)) {
   values.push(item[key]);
  }
 }
 return values;
};
```

> 使用`Set`类

```
let set = new Set(0;
set.add(1);
console.log(set.values()); // 数组类型
console.log(set.has(1)); // true
console.log(set.size()); // 1
...
```

> 集合操作

给定的两个集合

1. 并集，返回一个包含两个集合中所有元素的新集合
2. 交集，返回一个包含两个集合中共有元素的新集合
3. 差集，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合
4. 子集，验证一个给定集合是否是另一集合的子集

- 并集

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dc9377722cd46648c89115fe7d3da1d~tplv-k3u1fbpfcp-watermark.image)

```
this.union = function(otherSet) {
// 需要创建一个新的集合，代表两个集合的并集
 let unionSet = new Set();
 // 获取第一个集合所有的值，遍历并全部添加到代表并集的集合中
 let values = this.values();
 
 for(let i=0; i<values.length; i++) {
  unionSet.add(values[i]);
 }
 values = otherSet.values();
 // 第二个集合做同样的事
 for(let i=0; i<values.length; i++) {
  unionSet.add(values[i]);
 }
 return unionSet;
}
```

- 交集

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/084804dfb5f645b686cb5a31ff5dde5c~tplv-k3u1fbpfcp-watermark.image)

```
this.intersection = function(otherSet) {
// 创建一个新的Set实例，这样就能用它返回共有的元素
 let intersectionSet = new Set();
 
 let values = this.vlues();
 // 遍历当前Set实例所有的值
 for (let i=0; i<values.length; i++) {
  if(otherSet.has(values[i])){
   intersectionSet.add(values[i]);
  }
 }
 return intersectionSet;
}
```

- 差集

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1240c2b4f52141f9ae38fd47a7310c3a~tplv-k3u1fbpfcp-watermark.image)

表示A-B,x元素存在于A中，且x不存在于B中。

```
this.difference = function(otherSet){
// 得到所有同时存在于两个集合中的值
 let differenceSet = new Set();
 
 let values = this.values();
 // 
 for(let i=0; i<values.length; i++){
 // 
  if(!otherSet.has(values[i])){
  // 会得到所有存在于集合A但不存在于B的值
   differenceSet.add(values[i]);
  }
 }
 return differenceSet
};
```

- 子集

集合A是集合B的子集：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98a95127d2f947739851fe93feb317ec~tplv-k3u1fbpfcp-watermark.image)

```
this.subset = function(otherSet){ 
 if (this.size() > otherSet.size()){ 
 //需要验证的是当前Set实例的大小
 return false; 
 // 如果当前实例中的元素比otherSet实例更多，它就不是一个子集
 } else { 
 let values = this.values(); 
 for (let i=0; i<values.length; i++){ 
 //要遍历集合中的所有元素
 if (!otherSet.has(values[i])){ 
 //验证这些元素也存在于otherSet中 
 return false; 
 //如果有任何元素不存在于otherSet中，就意味着它不是一个子集，返回false
 } 
 } 
 return true; 
 //如果所有元素都存在于otherSet中，那么就返回true
 } 
};
```

> Set类

```
let set = new Set(); 
set.add(1); 
// ES6的Set的values方法返回Iterator
// 而不是值构成的数组
console.log(set.values()); // 输出@Iterator 
console.log(set.has(1)); // 输出true 
console.log(set.size); // 输出1
```

> `ES6 Set` 类

```
let setA = new Set(); 
setA.add(1); 
setA.add(2); 
setA.add(3); 

let setB = new Set(); 
setB.add(2); 
setB.add(3); 
setB.add(4);
```

- 并集

```
let unionAb = new Set(); 
//创建一个新的集合，用来添加两个集合中所有的元素
//迭代这两个集合 
for (let x of setA) unionAb.add(x); 

for (let x of setB) unionAb.add(x); 
```

- 交集

```
// 创建一个辅助函数
// 来生成包含setA和setB都有的元素的新集合
let intersection = function(setA, setB) { 

 let intersectionSet = new Set(); 
 
 for (let x of setA) { 
 if (setB.has(x)) {  
 intersectionSet.add(x); 
 } 
 
 } 
 return intersectionSet; 
}; 
let intersectionAB = intersection(setA, setB);
```

简单语法：

```
intersectionAb = new Set([x for (x of setA) if (setB.has(x))]);
```

- 差集

```
let difference = function(setA, setB) { 

 let differenceSet = new Set(); 
 
 for (let x of setA) { 
   if (!setB.has(x)) {
    // 差集中只添加setA有而setB没有的元素
   	differenceSet.add(x); 
   } 
 } 
 
 return differenceSet; 
}; 
let differenceAB = difference(setA, setB);
```

简单语法：

```
differenceAB = new Set([x for (x of setA) if (!setB.has(x))]);
```

总结：JavaScript的数据结构-集合

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
- [这是我的第一次JavaScript初级技巧](https://juejin.cn/post/6929701436276097032)
- [localStorage和sessionStorage本地存储](https://juejin.cn/post/6923331849708109838)
- [HTML5中的拖放功能](https://juejin.cn/post/6922602775947771911)
- [挑战前端知识点HTTP/ECMAScript](https://juejin.cn/post/6918735942710722574)
- [必学必会-音频和视频](https://juejin.cn/post/6918011549231775751)
- [前端170面试题+答案学习整理（良心制作）](https://juejin.cn/post/6917635279423537165)
- [前端HTML5面试官和应试者一问一答](https://juejin.cn/post/6917044041863397383)
- [哪吒闹海，席卷图文学习前端Flex布局](https://juejin.cn/post/6916162359765663752)
- [腾讯位置服务开发应用](https://juejin.cn/post/6909784318856396808)
- [【进阶】面试官问我Chrome浏览器的渲染原理（6000字长文）](https://juejin.cn/post/6905946191193325582)
- [面试官一上来就问我Chrome底层原理和HTTP协议（万字长文）](https://juejin.cn/post/6900724539833516040)
- [熬夜总结了 “HTML5画布” 的知识点](https://juejin.cn/post/6855448306517344263)
- [this/call/apply/bind（万字长文）](https://juejin.cn/post/6844904186069401607)
- [HTTP/HTTPS/HTTP2/DNS/TCP/经典题](https://juejin.cn/post/6844904163453714445)
- [执行上下文/作用域链/闭包/一等公民](https://juejin.cn/post/6844904161532706823)
- [Web页面制作基础](https://juejin.cn/post/6844904104712470535)
- [学习总结之HTML5剑指前端（建议收藏，图文并茂）](https://juejin.cn/post/6844904082629459975)

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

### 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

### 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)

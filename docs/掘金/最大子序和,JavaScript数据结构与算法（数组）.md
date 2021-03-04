[Github来源：力扣 (LeetCode)｜刷题打卡](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

> [已开启]任务一：刷题打卡 * 10 篇

大家好，我是**魔王哪吒**，很高兴认识你~~

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

**时间： 3 月 1 日 ～ 3 月 13 日**

- [力扣 (LeetCode)-两数之和,有效的括号,两数相加｜刷题打卡](https://juejin.cn/post/6934840493352157197)-3月1日
- [力扣 (LeetCode)-合并两个有序链表,删除排序数组中的重复项,JavaScript笔记｜刷题打卡](https://juejin.cn/post/6935212632173445151)-3月2日

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

### 数组

1. 数组是最简单的内存数据结构
2. 数组存储一系列同一种数据类型的值，也可以在数组中保存不同类型的值
3. 使用`push`方法，能把元素添加到数组的末尾，能添加任意个元素
4. 使用`unshift`方法，可以把数值插入数组的首位
5. 使用`pop`方法，可以删除数组里最后的元素
6. 使用`shift`方法，删除数组的第一个元素

> 在任意位置添加或删除元素

使用`splice`方法，通过指定位置或索引，就可以删除相应位置和数量的元素。

示例：

```
numbers.splice(5,3);
// 删除了从数组索引5开始的3个元素

numbers.splice(5, 0, 1,2,3);
// 从索引5开始添加元素

numbers.splice(5, 3, 1,2,3);
// 从索引5开始删除了3个元素
```

> 二维数组

- 矩阵示例：

```
//二层
function printMatrix(myMatrix) { 
 for (var i=0; i<myMatrix.length; i++){
   for (var j=0; j<myMatrix[i].length; j++){ 
   	console.log(myMatrix[i][j]); 
   } 
 } 
}
```

```
//三层
for (var i=0; i<matrix3x3x3.length; i++){ 
 for (var j=0; j<matrix3x3x3[i].length; j++){ 
 for (var z=0; z<matrix3x3x3[i][j].length; z++){ 
 console.log(matrix3x3x3[i][j][z]); 
 } 
 } 
}
```

> 数组方法（数组结构和算法会用到的方法）

1. `concat`，连接2个或更多数组，并返回结果
2. `every`，对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
3. `filter`，对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
4. `forEach`，对数组中的每一项运行给定函数。这个方法没有返回值
5. `join`，将所有的数组元素连接成一个字符串
6. `indexof`，返回第一个与给定参数相等的数组元素的索引，没有找到则返回`-1`
7. `lastIndexOf`，返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
8. `map`，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
9. `reverse`，颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在
的第一个
10. `slice`，传入索引值，将数组里对应索引范围内的元素作为新数组返回
11. `some`，对数组中的每一项运行给定函数，如果任一项返回true，则返回true
12. `sort`，按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
13. `toString`，将数组作为字符串返回
14. `valueOf`，和toString类似，将数组作为字符串返回

> `every`方法会迭代数组中的每个元素，直到返回`false`；`some`方法迭代数组的每个元素，直到函数返回`true`

示例：

```
// 迭代整个数组，可以用forEach方法
numbers.forEach(function(ex){
 console.log((x % 2 == 0));
});
```

- `reduce`方法

`reduce`方法接收一个函数作为参数，这个函数有四个参数：`previousValue,currentValue,index和array`。

示例：

```
numbers.reduce(function(previous,current,index){
 return previous + current;
});
```

> `Es6`和`Es7`新增的数组方法：

- `@@iterator` 返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对
- `copyWithin` 复制数组中一系列元素到同一数组指定的起始位置
- `entries` 返回包含数组所有键值对的`@@iterator`
- `includes` 如果数组中存在某个元素则返回true，否则返回false。`ES7`新增
- `find` 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素
- `findIndex` 根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素在数组中的索引
- `fill` 用静态值填充数组
- `from` 根据已有数组创建一个新数组
- `keys` 返回包含数组所有索引的`@@iterator`
- `of` 根据传入的参数创建一个新数组
- `values` 返回包含数组中所有值的`@@iterator`

> 使用ES6新的迭代器`（@@iterator）`

`ES6`为`Array`增加了一个`@@iterator`属性，需要通过`Symbol.iterator`来访问

示例：

```
let iterator = numbers[Symbol.iterator](); 
console.log(iterator.next().value); // 1 
console.log(iterator.next().value); // 2 
console.log(iterator.next().value); // 3 
console.log(iterator.next().value); // 4 
console.log(iterator.next().value); // 5
```

> `entries`方法返回包含键值对的`@@iterator`

示例：

```
let aEntries = numbers.entries(); // 得到键值对的迭代器
console.log(aEntries.next().value); // [0, 1] - 位置0的值为1 
console.log(aEntries.next().value); // [1, 2] - 位置1的值为2 
console.log(aEntries.next().value); // [2, 3] - 位置2的值为3
```

> `keys`方法返回包含数组索引的`@@iterator`

示例：

```
let aKeys = numbers.keys(); // 得到数组索引的迭代器
console.log(aKeys.next()); // {value: 0, done: false } 
console.log(aKeys.next()); // {value: 1, done: false } 
console.log(aKeys.next()); // {value: 2, done: false }
```

如果done属性的值为false，就意味着还有可迭代的值。否则反之。

> `values`方法返回的`@@iterator`则包含数组的值

示例：

```
let aValues = numbers.values(); 
console.log(aValues.next()); // {value: 1, done: false } 
console.log(aValues.next()); // {value: 2, done: false } 
console.log(aValues.next()); // {value: 3, done: false }
```

> `Array.from`方法根据已有的数组创建一个新数组

示例：

```
// 创建数组，复制numbers数组
let copyNumbers = Array.from(numbers);
```

过滤值的函数：

```
let dada = Array.from(numbers, x=> (x % 2 == 0));
```

> `Array.of`方法根据传入的参数创建一个新数组

示例：

```
let da1 = Array.of(1); 
let da2 = Array.of(1, 2, 3, 4, 5, 6);

let da1 = [1]; 
let da2 = [1, 2, 3, 4, 5, 6];
```

用这个方法复制已有的数组

示例：

```
let copyNumbers = Array.of(...da2);
```

> `fill`方法用静态值填充数组

示例：

```
let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
numbersCopy.fill(0);

// [0, 0, 0, 0, 0, 0]

numbersCopy.fill(2, 1);

// [0, 2, 2, 2, 2, 2]

let da = Array(6).fill(1);

// [1, 1, 1, 1, 1, 1]
```

> `copyWithin`方法复制数组中的一系列元素到同一数组指定的起始位置

示例：

```
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3);
// [4, 5, 6, 4, 5, 6]

copyArray = [1, 2, 3, 4, 5, 6]; 
copyArray.copyWithin(1, 3, 5);
// [1, 4, 5, 4, 5, 6]
```

> 搜索

- `indexOf`方法返回与参数匹配的第一个元素的索引
- `lastIndexOf`返回与参数匹配的最后一个元素的索引

> `find和findIndex`的不同之处-`ECMAScript 6`

- `find`方法返回第一个满足条件的值；找不到，`find`会返回`undefined`
- `findIndex`方法则返回这个值在数组里的索引，找不到，`findIndex`返回-1

> 使用`includes`方法-`ECMAScript 7`

> `toString和join`

- 把数组里所有元素输出为一个字符串

示例：

```
console.log(numbers.toString());

var numbersString = numbers.join('-'); 
console.log(numbersString);
```

### 53. 最大子序和

一、题目描述

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

```
示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：

输入：nums = [1]
输出：1

示例 3：

输入：nums = [0]
输出：0

示例 4：

输入：nums = [-1]
输出：-1

示例 5：

输入：nums = [-100000]
输出：-100000
```

二、思路分析

方法一，贪心算法，若当前指针元素之前的和小于0，则丢弃当前元素之前的数列

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3dd8b76cdf8f43eaaa1ec8d19a587eb5~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9af892a9824842538623b17364f99c73~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d87d329b1eea4204aa23a7f183f4ad86~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc0c584c42de40d4a940ce20bde2df0b~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9735bf1a0baa45419328b1850a15e88f~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c06447fff6c644a48d3e2562836801f5~tplv-k3u1fbpfcp-watermark.image)

三、答案代码

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        if(sum>0) {
            sum += nums[i];
        }else {
            sum = nums[i];
        }
         res = Math.max(res,sum);
    }
    return res;
};
```

四、总结

> 最大子序和-题解！

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

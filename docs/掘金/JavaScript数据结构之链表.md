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

## 前言

如果这篇文章有帮助到你，给个❤️关注，❤️点赞，❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

❤️笔芯❤️~

### 链表

> 链表数据结构，向链表添加元素，从链表移除元素，使用LinkedList类，双向链表，循环链表。

链表存储有序的元素集合，但链表中的元素在内存中并不是连续放置的，每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（指针或链接）组成。

示例：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/963c46efec57480791e82e88f35b558e~tplv-k3u1fbpfcp-watermark.image)

链表的好处：添加或移除元素的时候不需要移动其他元素

访问链表中间的一个元素，需要从起点（表头）开始迭代列表直到找到所需的元素

链表：生活中的寻宝游戏例子。

> 创建链表

```
function LinkedList() {
 let Node = function(element) {
  // LinkedList数据结构还需要一个Node辅助类
  this.element = element;
  this.next = null;
 };
 
 // Node类表示要加入列表的项
 // 它包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点项的指针
 
 let length = 0;
 // LinkedList类也有存储列表项的数量的length属性
 let head = null;
 // 需要存储第一个节点的引用，这个引用存储在一个为head的变量中
 
 // append(element),向列表尾部添加一个新的项
 this.append = function(element){};
 
 // insert(position,element),向列表的特定位置插入一个新的项
 this.insert = function(position, element){};
 
 // removeAt(position),从列表的特定位置移除一项
 this.removeAt = function(position){};
 
 // remove(element),从列表中移除一项
 this.remove = function(element){};
 
 // indexOf(element),返回元素在列表中的索引，如果列表中没有该元素则返回-1
 this.indexOf = function(element){};
 
 // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
 this.isEmpty = function(){};
 
 // 返回链表包含的元素个数
 this.size = function(){};
 this.getHead = function(){};
 
 // 由于列表项使用了Node类，就需要重写继承来自JavaScript对象默认的toString方法，让其只输出元素的值
 this.toString = function(){};
 this.print = function(){};
}
```

> 向链表尾部追加元素

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7f30ec0140a457b8a245257568a83d4~tplv-k3u1fbpfcp-watermark.image)

场景：

1. 列表为空，添加第一个元素
2. 列表不为空，向其追加元素

```
this.append = function(element){
// 需要把element作为值传入，创建Node项
 let node = new Node(element),
 // 
 current;
 
 if(head === null) {
 // 列表中第一个节点
 // 在向列表添加第一个元素
 // 下一个node元素将会自动成为null
  head = node;
 }else{
 // 要向列表的尾部添加一个元素，首先需要找到最后一个元素
  current = head;
  
  // 循环列表，直到找到最后一项
  while(current.next){
  // 需要一个指向列表中current项的变量
   current = current.next
  }
  // 找到最后一项，将其next赋为node，建立链接
  current.next = node
 }
 length++; // 更新列表的长度
};
```

```
let list = new LinkedList();
list.append(1);
list.append(2);
```

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ea5acdd39d549c1bcb8b973fa0221cd~tplv-k3u1fbpfcp-watermark.image)

> 从链表中移除元素

场景：1,移除第一个元素；2,移除第一个以外的任一元素

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85a9c070d86d4086bb3635a1edd852ee~tplv-k3u1fbpfcp-watermark.image)

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee160a7a8cdc474f8425cd944b5e2880~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/631b68546f554e68935d7ffcf297ebb0~tplv-k3u1fbpfcp-watermark.image)

```
// 从特定位置移除一个元素

// 根据元素的值移除元素

this.removeAt = function(position) {
 // 检查越界值
 if(position > -1 && position < length) {
  // 该方法要得到需要移除的元素的位置，就需要验证这个位置是有效的
  let current = head, // 将用current变量创建一个对列表中第一个元素的引用
  previous, //
  index = 0; //
  
  // 移除第一项
  if(position === 0) {
   // 从列表中移除第一个元素 让head指向列表的第二个元素
   // 把head赋为current.next，就会移除第一个元素
   head = current.next;
  } else {
   while (index++ < position) {
    // 需要依靠一个细节来迭代列表，直到到达目标位置
    previous = current; // 对当前元素的前一个元
素的引用
    current = current.next; // current变量总是为对所循环列表的当前元素的引用
   }
   
   // 将previous与current的下一项链接起来，跳过current，从而移除它
   previous.next = current.next; 
   // 要从列表中移除当前元素，要做的就是将previous.next和current.next链接起来
  }
  length--; //
  return current.element;
 }else{
  return null; // 如果不是有效的位置，就返回null
 }
}
```

> 在任意位置插入元素

使用`insert`方法，可以在任意位置插入一个元素

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aaacaf36e2444278b4245c7643fd1ca6~tplv-k3u1fbpfcp-watermark.image)

```
this.insert = function(position, element){ 
 //检查越界值
 if (position >= 0 && position <= length){ 
 //需要检查越界值
 let node = new Node(element), 
 current = head, // current变量是对列表中第一个元素的引用
 previous, 
 index = 0; 
 if (position === 0){ //在第一个位置添加
 node.next = current; //把node.next的值设为current
 head = node; // 把head的引用改为node
 // head和node.next都指向了current
 } else { 
 // 在列表中间或尾部添加一个元素
 while (index++ < position){ //需要循环访问列表，找到目标位置
 previous = current; 
 current = current.next; 
 } 
 node.next = current; //当跳出循环时，current变量将是对想要插入新元素的位置之后一个元素的引用
 // previous.next指向node
 previous.next = node; //previous将是对想要插入新元素的位置之前一个元素的引用
 } 
 length++; //更新列表的长度
 return true; 
 } else { 
 return false; //返回false值，表示没有添加项到列表中
 } 
};
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02b253ee6ae645adb08714814f312bb8~tplv-k3u1fbpfcp-watermark.image)

- `previous`将是对列表最后一项的引用
- `current`将是`null`
- `node.next`将指向`current`，而`previous.next`将指向`node`

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11db72ee26324991b8264c4f59d56b16~tplv-k3u1fbpfcp-watermark.image)

- 需要把`node.next`的值指向`current`。然后把`previous.next`的值设为`node`

> `toString`方法会把`LinkedList`对象转换成一个字符串

```
this.toString = function(){ 
// 会把current变量当作索引
 let current = head, //需要有一个起点
 string = ''; //还需要初始化用于拼接元素值的变量
 
 while (current) { //循环访问列表中的每个元素
 
 string += current.element + (current.next ? 'n' : '');
 //得到了元素的内容，将其拼接到字符串中 
 
 current = current.next; 
 //继续迭代下一个元素
 } 
 return string; //返回列表内容的字符串 
};
```

> `indexOf`方法接收一个元素的值,如果在列表中找到它，就返回元素的位置，否则返回-1

```
this.indexOf = function(element){ 
 let current = head, //是current，它的初始值是head
 
 // 需要一个index变量来计算位置数
 index = -1; 
 // 循环访问元素
 while (current) {
 
 if (element === current.element) { 
 return index; //检查当前元素是否是我们要找的。如果是，就返回它的位置
 } 
 index++; //如果不是，就继续计数 
 current = current.next; //检查列表中下一个节点
 } 
 // 如果列表为空，或是到达列表的尾部
 // current = current.next将是null
 return -1; 
};
```

其他的方法：

```
this.remove = function(element){ 
 let index = this.indexOf(element); 
 return this.removeAt(index); 
};
```

```
this.isEmpty = function() { 
 return length === 0; 
};
```

```
this.size = function() { 
 return length; 
};
```

```
this.getHead = function(){ 
 return head; 
};
```

> 双向链表

- 在双向链表中，链接是双向的
- 一个链向下一个元素，另一个链向前一个元素

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b612a6ddfe7145448fb426706772c9b5~tplv-k3u1fbpfcp-watermark.image)

```
function DoublyLinkedList() { 

 let Node = function(element){ 
 this.element = element; 
 this.next = null; 
 this.prev = null; //新增的 一个新指针
 }; 
 let length = 0; 
 let head = null; 
 let tail = null; //新增的
 //这里是方法
}
```

> 在任意位置插入新元素

- 控制`next和prev`（`previous`，前一个）

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2caadf94f5a84869adc34ba878dd046e~tplv-k3u1fbpfcp-watermark.image)

```
this.insert = function(position, element){ 

 //检查越界值
 if (position >= 0 && position <= length){ 
 
 let node = new Node(element), 
 current = head, 
 previous, 
 index = 0; 
 
 // 在列表的第一个位置（列表的起点）插入一个新元素1
 
 if (position === 0){ //在第一个位置添加
 if (!head){ //新增的 
 // 只需要把head和tail都指向这个新节点
 head = node; 
 tail = node; 
 } else { 
 
 node.next = current; 
 // current.prev指针将由指向null变为指向新元素
 current.prev = node; //新增的
 head = node; 
 
 } 
 } else if (position === length) { //最后一项 //新增的
 current = tail; // 控制着指向最后一个元素的指针（tail）
 // current变量将引用最后一个元素
 
 current.next = node; //current.next指针（指向null）将指向node
 node.prev = current; //node.prev将引用current
 tail = node;  // 更新tail
 // 它将由指向current变为指向node
 
 } else { 
 // 在列表中间插入一个新元素
 while (index++ < position){ //直到到达要找的位置 
 previous = current; 
 current = current.next; 
 } 
 node.next = current; //node.next将指向current
 previous.next = node; // previous.next将指向node
 current.prev = node; //新增的current.prev将指向node
 node.prev = previous; //新增的node.prev将指向previous
 } 
 length++; //更新列表的长度
 return true; 
 } else { 
 return false; 
 } 
};
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf9c795c0ac441ad93af18a5e779cb75~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ee5ab1f06224958adcf2a7c46415893~tplv-k3u1fbpfcp-watermark.image)

> 从任意位置移除元素

示例：

从双向链表移除第一个元素的过程：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd776fed6d354d94b2616a74ba6f5fb5~tplv-k3u1fbpfcp-watermark.image)

```
this.removeAt = function(position){ 

 //检查越界值
 if (position > -1 && position < length){ 
 
 // current变量是对列表中第一个元素的引用
 let current = head, 
 previous, 
 index = 0; 
 
 //移除第一项
 if (position === 0){ 
 // 改变 head 的引用
 head = current.next; //将其从 current 改为下一个元素
 
 //如果只有一项，更新tail //新增的
 if (length === 1){ 
 //检查要移除的元素是否是第一个元素，如果是，只需要把tail也设为null 
 tail = null; 
 } else { 
 head.prev = null; //把head.prev的引用改为null 
 } 
 
 } else if (position === length-1){ //最后一项 //新增的
 // 从最后一个位置移除元素
 
 current = tail; //把tail的引用赋给current变量 
 tail = current.prev; 
 tail.next = null;
 
 } else { 
 // 从列表中间移除一个元素
 
 while (index++ < position){ 
 //需要迭代列表，直到到达要找的位置 
 // current变量所引用的就是要移除的元素
 // 更新previous.next和current.next.prev的引用
 
 // previous.next将指向current.next
 
 previous = current; 
 
 // current.next.prev将指向previous
 
 current = current.next; 
 
 } 
 
 //将previous与current的下一项链接起来——跳过current 
 previous.next = current.next; // {6} 
 current.next.prev = previous; //新增的
 
 } 
 length--; 
 return current.element; 
 
 } else { 
 return null; 
 } 
};
```

从最后一个位置移除元素

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9495ccbed149478a883f7096d4d6765d~tplv-k3u1fbpfcp-watermark.image)

从列表中间移除一个元素

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8c1e4d2bfeb4910bbe61743af02011f~tplv-k3u1fbpfcp-watermark.image)

> 从头部、从中间和从尾部移除一个元素

> 循环链表

循环链表和链表之间唯一的区别在于：最后一个元素指向下一个元素的指针（`tail.next`）不是引用`null`，而是指向第一个元素（`head`）

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d77d0c5f4aaa417db868b55269a008aa~tplv-k3u1fbpfcp-watermark.image)

双向循环链表有指向`head元素的tail.next`，和指向`tail元素的head.prev`。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6b06d7ab6984afea62d2fc5670b4370~tplv-k3u1fbpfcp-watermark.image)

总结：

> JavaScript数据结构之链表

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

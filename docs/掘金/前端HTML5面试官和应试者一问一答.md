哪吒人生信条：如果你所学的东西 处于喜欢 才会有强大的动力支撑。

> 把你的前端拿捏得死死的，每天学习得爽爽的，微信搜索【程序员哆啦A梦】关注这个不一样的程序员，如果你所学的东西 处于喜欢 才会有强大的动力支撑。
>
> 感谢不负每一份热爱前端的程序员，不论前端技能有多奇葩，欢迎关注加我入群vx:xiaoda0423

## 前言

希望可以通过这篇文章，能够给你得到帮助。(感谢一键三连)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fad8bec85154ff397f513f480e29c6b~tplv-k3u1fbpfcp-zoom-1.image)

### 1.`HTML5`表单增加的输入类型

1. `url`类型：专门为输入`url`地址定义的文本库，在验证输入文本的格式时，如果文本框中的的内容不符合`url`地址的格式，会提示验证错误。
2. `email`类型：专门是为输入`email`地址定义的文本框，在验证输入的文本的格式时，如果文本框中的内容不符合`email`地址的格式，会提示验证错误。在`email`类型的`input`元素还有一个`multiple`属性，表示在该文本框中可输入用逗号隔开的多个邮件地址。
3. `range`类型：用于把输入框显示为滑动条，可以作为某一特定范围内的数值选择器。`min`和`max`特性，分别表示范围的最小值，默认为0，范围的最大值，默认为100.`range`类型有一个`step`特性，表示拖动的步长，默认为1。
4. `number`类型：专门为输入特定的数字而定义的文本框，具有`min,max,step`特性。
5. `tel`类型：专门为输入电话号码而定义的文本框，没有特殊的验证规则。
6. `search`类型：专门为输入搜索引擎关键词定义的文本框，没有特殊的验证规则。
7. `color`类型：`color`类型的`input`元素默认会提供一个颜色选择器。
8. `date`类型：专门用于输入日期的文本框，默认带日期选择器的输入框。
9. `month，week，time，datetime，datetime-local`类型的`input`元素与`date`类型的`input`元素类似，提供一个相应的选择器。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/457e5d27a9f54e4f948ac8e2476f1d34~tplv-k3u1fbpfcp-zoom-1.image)

### 2.`HTML5`增加表单的特性以及元素

`form`特性在`HTML5`中，可以把从属于表单的元素放在任何地方，然后指定该元素的`form`特性值为表单的`id`，该元素就从属于表单。

```
<input name="da" type="text" form="form1" required/>
<form id="form1">
 <input type="submit" value="提交"/>
</form>
```

1. `formaction`特性：每个表单都会通过`action`特性把表单内容提交到另外一个页面，而在`html5`中，为不同的“提交”按钮分别添加`formaction`特性后，该特性会覆盖表单的`action`特性，将表单提交至不同的页面。

```
<form id="form1" method="post">
 <input name="name" type="text" form="form1"/>
 <input type="submit" value="提交page1" formaction="?page=1"/>
</form>
```

2. `formmethod,formenctype,formnovalidate,formtarget`特性：`formmethod`特性会覆盖表单的`method`特性；`formenctype`特性可覆盖表单的`enctype`；`formnovalidate`特性可覆盖`novalidate`特性，`formtarget`特性可以覆盖表单的`target`特性。

3. `placeholder`特性，向用户提示描述性的信息。

4. `autofocus`特性，用于所有类型的`input`元素，当页面加载完成时，可自动获取焦点，每个页面只允许出现一个有`autofocus`特性的`input`元素，如果设置多个，相当于未指定该行为。

5. `autocomplete`特性：应用于`form`元素和输入型的`input`元素，用于表单的自动完成。可以`autocomplete="on"`，其可以指定`"on","off"和" "` 不指定。

6. `list`特性和`datalist`元素，可以为某个可输入的`input`元素定义一个选值列表。

```
<input name="email" type="email" list="emaillist"/>

<datalist id="emaillist">
 <option value="1@qq.com"> dada </option>
 <option value="2@qq.com"> dada2 </option>
</datalist>
```

7. `keygen`元素：提供了一种安全的方式来验证用户，该元素有密钥生成的功能，在提交表单时，会分别生成一个私人密钥和一个公共密钥，私人密钥保存在客户端，公共密钥则通过网络传输至服务器。

```
<form action="">
 <input type="text" name="name"/> <br>
 <keygen name="security"/>
 <br><input type="submit"/>
</form>
```

8. `output`元素用于不同类型的输出，该元素必须从属于某个表单，即是写在表单的内部。

```
<form oninput="x.value=da.value">
 <input type="range" name="da" value="20"/>
 <output name="x"></output>
</form>
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62d8e4e780c742dab5f8e77adafe74c0~tplv-k3u1fbpfcp-zoom-1.image)

### 3.`HTML5`如何实现跨域

```
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Methods", "POST");
response.setHeader("Access-Control-Allow-Headers", "x-requested-width,content-type");
```

### 4.什么是`WebSql`

`WebSql`是一个在浏览器客户端的结构关系数据库，是浏览器内的本地`RDBMS`关系型数据库管理系统，可以使用`SQL`查询。

> `WebSql`是基于`SQLite`的。

### 5.应用缓存中网络命令的作用是啥

```
// 在代码login.php始终都不应该缓存或者离线访问
NETWORK：
login.php
```

> 网络命令描述不需要缓存的文件。

### 6.`Canvas`和`SVG`的区别是什么

> `SVG`是可缩放矢量图形，它是基于文本的图形语言，使用文本，线条，点等来绘制图像。

a. 一旦`Canvas`绘制完成将不能访问像素或操作它，任何使用`SVG`绘制的形状都能被记忆和操作，可以被浏览器再次显示。

b. `Canvas`对绘制动画和游戏有利，`SVG`对创建图像有利。

c. 因为不需要记住之后的事，所以`Canvas`运行快，而`SVG`需要记录坐标，所以运行慢。

d. 在`Canvas`中不能为绘制对象绑定相关事件；在`SVG`中可以为绘制对象绑定相关事件。

e. `Canvas`绘制出的是位图，因此与分辨率有个，`SVG`是矢量图，与分辨率无关。

使用`SVG`绘制：

```
<svg xmlns="http://ww.xx.xx/pic/svg" version="1.1">
 <rect stype="fill:rgb(255,100,0);" height="200" width="400"></rect>
</svg>
```

使用`Canvas`绘制：

```
<canvas id="myCanvas" width="500" height="500"></canvas>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.rect(100,100,300,200);
ctx.fillStyle="red"
ctx.fill()
```

### 7.本地存储的数据有生命周期吗

> 本地存储的数据没有生命周期，它将一直存储数据，直到用户从浏览器清除或者使用`javascript`代码移除。

### 8.表单验证的`API`

1. `required`特性：表示此项的值不能为空，否则无法提交表单。
2. `pattern`特性用于`input`元素定义一个验证模式。

```
<input name="code" type="text" value="" pattern="[0-9]{6}" placeholder="6为邮政编码"/>
```

3. `min,max,step`特性
4. `novalidate`用于指定表单或表单内的元素在提交时不验证，`form`元素应用`novalidate`特性，表示表单中的所有元素在提交时不再验证。
5. `validaty`属性用于获取表单元素的`ValidityState`对象，该对象包含8个方面的验证结果。`ValidityState`对象会持续存在，每次获取`validity`属性时，返回的是同一个`ValidityState`对象。

```
var validityState=document.getElementById("username").validity;
```

6. `willValidate`属性，用于获取一个布尔值，表示表单元素是否需要验证，如果表单元素设置了`required`特性或`pattern`特性，则`willValidate`属性为`true`，即表单的验证将执行。

```
var willValidate=document.getElementById("username").willValidate;
```

7. `validationMessage`属性，用于获取表单元素的错误提示信息

```
var validationMessage = document.getElementById("username").validationMessage;
```

> `ValidityState`对象，是通过`validity`属性获取的，该对象有8个属性。

a. `valueMissing`属性：必填的表单元素的值为空。如果表单元素设置了`required`特性，则表示必填，如果必填项为空，就无法通过表单的验证，`valueMissing`属性会返回`true`，否则反之。

b. `typeMismatch`属性：输入值与`type`类型不匹配。`html5`增加的表单类型`email`等，都包含一个原始的类型验证，如果用户输入的内容与表单类型不符合，`typeMismatch`属性将返回`true`，否则反之。

c. `patternMismatch`属性：输入值与`pattern`特性的正则不匹配。表单元素可通过`pattern`特性数组正则表达式的验证模式，如果输入内容不符，`patternMismatch`将返回`true`，否则反之。

d. `tooLong`属性：输入的内容大小超过了表单的元素的`maxLength`特性限定的字符长度。如果超过`tooLong`属性返回`true`，否则反之。

e. `rangeOverflow`属性：输入的值大于`max`特性的值。一般用于填写数值的表单元素，也可能会使用`max`特性设置数值范围的最大值，如果输入的数值大于最大值，则`rangeOverflow`返回`true`，否则反之。

f. `rangeUnderflow`属性，输入的值小于`min`特性的值，上述雷同。

g. `stepMismatch`属性，输入的值不符合`step`特性所推算出的规则。不符为`true`，否则反之。

h. `customError`属性，使用自定义的验证错误提示信息，在有些情况下不适合使用浏览器内置的验证错误提示信息，需要自定义，当输入值不符合语义规则，页面会提示自定义的错误信息。

> 表单验证的方法

1. `checkValidity()`方法，显式验证方法，每个表单元素都可以调用`checkValidity()`方法，它返回一个布尔值，表示是否通过验证。默认情况下，表单的验证发生在表单提交时，如果使用`checkValidity()`方法，可以在需要的任何地方验证表单。
2. `setCustomValidity()`方法，自定义错误提示信息的方法。当默认的提示错误满足不了需求时，可以通过该方法自定义错误提示。当通过此方法自定义错误提示信息时，元素的`validationMessage`属性值会更改为定义的错误提示信息，同时`ValidityState`对象的`customError`属性值变成`true`。

### 9.`cookie`,`sessionStorage`,`localStorage`

- `cookie`数据存放在客户的浏览器上，`session`数据存放在服务器上。
- `cookie`不是很安全，别人可以分析存放在本地的`cookie`并进行`cookie`欺骗。
- `session`会在一定时间内保存在服务器上，当访问增加时，会占用较多服务器的资源。为了减轻服务器的负担，应当使用`cookie`在适当的情况下。
- 单个`cookie`保存的数据不能超过4kb,很多浏览器都限制一个站点最多保存20个`cookie`
- 建议将登陆信息等重要内容存放在`session`中，其他可以存放在`cookie`中。
- `cookie`的数量和长度有限制，每个`domain`最多只能有20条`cookie`，每个`cookie`的长度不能超过4kb,否则会被裁掉。
- 安全问题，如果`cookie`被别人拦截了，就可以取得所有的`session`信息，即使加密也是没有用，拦截者不需要知道`cookie`的意义，只要原样转发`cookie`就可以到达目的。
- 有些状态不能保存在客户端。
- 通过良好的编程，控制保存在`cookie`中的`session`对象的大小。
- 通过加密和安全传输技术`ssl`，降低`cookie`被破解的可能性。
- 只在`cookie`中存放不敏感数据，即使被盗也不会有重大的损失。
- 控制`cookie`的生命周期，使之不会永远有效，数据偷盗者很可能得到一个过期的`cookie`。
- `cookie`最大为4096字节，为了兼容性，一般不能超过4095字节。
- 每个特定的域名下最多生成20个`cookie`
- `ie6`或更低版本最多有20个`cookie`
- `ie7`和之后的版本最多可以有50个`cookie`
- `firefox`最多可以有50个`cookie`
- `Chrome`和`Safari`没有硬性限制
- `sessionStorage`用于在本地存储一个会话中的数据，这些数据只有同一个会话中的页面才能访问，当会话结束后，数据也随之销毁，因此`sessionStorage`不是一种持久化的本地存储，仅仅是会话级别的存储。
- `localStorage`用于持久化本地存储，除非主动删除数据，否则数据一般是永久不会过期的。
- `localStorage`是为了更大容量的存储设计的，`cookie`的大小是有受限制的，并且每次请求一个新页面时，`cookie`都会被发送过去，这无形中浪费了带宽，`cookie`需要制定作用域，不可以跨域调用。

### 10.`HTML5`为浏览器提供了哪些数据存储方案

在较高版本的浏览器中，提供了`sessionStorage`和`globalStorage`，在`html5`规范中`localStorage`取代了`globalStorage`。

应用程序缓存：

- 离线浏览，让用户可在应用离线时使用它们。
- 速度，让已缓存资源加载更快。
- 减少服务器负载，让浏览器将指下载服务器更新过的资源。

`HTML5`应用缓存的目的是帮助用户离线浏览页面，如果网络连接不可用，打开的页面就来自浏览器缓存，离线应用缓存可以帮助用户达到这个目的。

本地存储数据持续永久，但是会话存储在浏览器打开时有效，在浏览器关闭时会话重置存储数据。

提升网站的性能：

```
<!doctype html>
<html manifest="dadda.appcache">
</html>
```

### 11.如何实现浏览器内多个标签页之间的通信

在标签页之间，调用`localstorage,cookies`等数据存储，可以实现标签页之间的通信。

### 12.`Web Worker`和`webSocket`的作用

`WebSocket`：它是`web`应用程序的传输协议，提供了双向的，按序到达的数据流，它是`html5`新增的协议，`WebSocket`的连接是持久的，它在客户端和服务器之间保持双工连接，服务器的更新可以及时推送到客户端，而不需要客户端以一定的时间间隔去轮询。

`Web Worker`：通过`worker=new Worker(url)`加载一个`javascript`文件，创建一个`Worker`，同时返回一个`Worker`实例；用`worker.postMessage(data)`向`Worker`发送数据；绑定`worker.onmessage`接收`Worker`发送过来的数据；可以使用`worker.terminate()`终止一个`Worker`的执行。

### 13. `HTML5`新特性

拖放`api`，语义化更好的内容标签，音频，视频，画布，地理`api`等，本地离线存储，会话存储，表单控件。

嵌入音频：

```
<audio controls>
 <source src="dada.mp3" type="audio/mpeg">
 dadaqianduan.cn
</audio>
```

嵌入视频：

```
<video width="450" height="100" controls>
 <source src="dada.mp4" type="video/mp4">
 dadaqianduan.cn
</video>
```

新增表单属性包括：`datalist,datetime,output,keygen,date,month,week,time,number,range,emailurl`

提供了很多新的`api`，包括`Media API, Text Track API, Application Cache API, User Interaction API, Data Transfer API, Command API, Constraint Validation API, History API`

### 14.如何区别`html`和`html5`

用`DOCTYPE`声明新增的结构元素和功能元素来区别它们。

`HTML5`使用的字符集`<meta charset="UTF-8">`

### 15.`HTML5 Canvas`元素有什么用

`Canvas`元素用于在网页上绘制图形，该元素标签的强大之处在于可以直接在`html`上进行图形操作。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8c9042f38ba4bedb835d4a2b99a73ac~tplv-k3u1fbpfcp-zoom-1.image)

## 点赞、收藏和评论

我是Jeskson(达达前端)，感谢各位人才的：点赞、收藏和评论，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞谢谢，一起学习了)

## 我们下期见！

> 文章持续更新，可以微信搜一搜「 程序员哆啦A梦 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> github收录，欢迎Star：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
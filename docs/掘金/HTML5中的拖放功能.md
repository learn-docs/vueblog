大家好，我是**魔王哪吒**，很高兴认识你~~

哪吒人生信条：**如果你所学的东西 处于喜欢 才会有强大的动力支撑**。

每天学习编程，让你离梦想更新一步，感谢不负每一份热爱编程的程序员，不论知识点多么奇葩，和我一起，让那一颗四处流荡的心定下来，一直走下去，加油，`2021`加油！欢迎关注加我`vx:xiaoda0423`，欢迎点赞、收藏和评论

不要害怕做梦，但是呢，也不要光做梦，要做一个实干家，而不是空谈家，求真力行。[投魔王哪吒一票，谢谢](https://rank.juejin.cn/?utm_campaign=annual_2020&utm_medium=web_entrance&utm_source=nav)记得为我投票哦！！！（**魔王哪吒**）

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/695d0fa0acfb4a76ade1ebf188201b43~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13676d0b080e4934bdc66ef18daaa45b~tplv-k3u1fbpfcp-zoom-1.image)

## 前言

如果这篇文章有帮助到你，❤️关注+点赞❤️鼓励一下作者，接收好挑战了吗？文章公众号首发，关注 **程序员哆啦A梦** 第一时间获取最新的文章

笔芯❤️~

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24a4ee28d65e4c33ab82452358df99fe~tplv-k3u1fbpfcp-zoom-1.image)

### 知识点

拖拽的体验，你享受过吗，在`HTML5`之前，可以使用事件`mousedown，mousemove，mouseup`巧妙实现页面的拖放操作，但注意**拖放的操作范围只是局限在浏览器内部**。

而`HTML5`的拖放`API`功能直接实现拖放操作，而且拖放的范围已经超出浏览器的边界，`HTML5`提供的文件`api`支持拖拽多个文件并上传。

要学会掌握`html5`中的拖放`api`和 文件`api`，光标拖放事件，从`web`网页上访问本地文件系统。

### 拖放api

在`html5`中的拖放`api`重点：

第一，为页面元素提供了拖放特性；

第二，为光标增加了拖放事件；

第三，提供了用于存储拖放数据的`DataTransfer`对象

### draggable特性

`draggable`特性用于定义元素是否允许用户拖放：提供了三个值

`true,false,auto`

把元素变成可以拖放的：

```
<div draggable="true"></div>
```

> `img`元素和`a`元素默认是可以拖放的

### 光标拖放事件

在`html5`中提供了7个与拖放相关的光标事件：

按照时间的顺序：

第一，开始拖拽时触发的事件，事件的作用**对象是被拖拽的元素**-`dragstart`事件

第二，拖放过程中触发的事件，事件的作用**对象是被拖拽的元素**-`drag`事件

第三，在拖放的元素**进入本元素的范围内时触发**，事件的作用对象是**拖放过程中光标经过的元素**-`dragenter`元素

第四，在拖放的元素**正在本元素的范围内移动时**触发，事件的作用对象是**拖放过程中光标经过的元素**-`dragover`元素

第五，在拖放的元素**离开本元素的范围时**触发，事件的作用对象是**拖放过程中光标经过的**元素-`dragleave`元素

第六，在拖放的元素**被拖放到本元素中时触发**，事件的作用对象是**拖放的目标元素**-`drop`元素

第七，在拖放操作**结束时**触发，事件的作用对象是**被拖拽的元素**-`dragend`事件

### DataTransfer对象

在`html5`中提供了`DataTransfer`对象，用来支持拖拽数据的存储。

实现拖放的过程中数据交换。

`DataTransfer`对象：

> 属性

第一，`dropEffect`属性：用来**设置或获取拖拽**操作的类型 和 要**显示的光标**类型。

如果该操作的效果与起初设置的`effectAllowed`效果不符，则拖拽操作失败。可以设置修改，包含值可为：`none, copy, link, move`

第二，`effectAllowed`属性：用来设置或获取数据传送操作可应用于操作对象的源元素，指定值：`none, copy, copyLink, copyMove, link, linkMove, move, all 和 uninitialized`

第三，`type`属性：获取在`dragstart`事件出发时为元素存储数据的格式，如果是外部文件的拖拽，则返回`Files`。

第四，`files`属性：获取存储在`DataTransfer`对象中的正在拖放的文件列表`FileList`，可以使用数组的方式去遍历。

> 方法

第一，`clearData()`方法：清除`DataTransfer`对象中存放的数据：

```
clearData([sDataFormat])
```

> `[sDataFormat]`为可选参数，取值可能为：`Text,URL,File,HTML,Image,`设置后，可删除指定格式的数据，如果省略该参数，则清除全部数据。

第二，`setData()`方法：向内存中的`DataTransfer`对象添加指定格式的数据：

```
setData([sDataFormat],[data])
```

第三，`getData()`方法：从内存的`DataTransfer`对象中获取数据

```
getData([sDataFormat])
```

第四，`setDragImage()`方法：设置拖放时跟随光标移动的图片

```
setDragImage([imgElement],[x],[y])
```

> `[imgElement]`表示图片对象，`[x],[y]`分别表示相对于光标位置的横坐标和纵坐标

第五，`addElement()`方法：添加一起跟随拖放的元素，如果想让某个元素跟随被拖动元素一起被拖放，则使用此方法

```
addElement([element])
```

> `[element]`表示一起跟随拖动的元素对象

### 示例

```
// 源元素
<div id="dragSource" draggable="true">
 拖动
 <img src="images/dadaqianduan.png" width="50" height="50">
</div>

// 目标元素
<div id="dropTarget"></div>
```

添加`ondragstart`监听事件，给拖放的源元素添加`ondragstart`监听事件，在事件触发时把源元素里的内容追加至`dataTransfer`对象中。

最后，把添加监听事件的处理函数`DragStart()`追加到`window.onload`事件中。

```
function DragStart() {
 var source = document.getElementById("dragSource"); // 拖放源元素
 // 监听dragstart事件，作用在源元素上
 source.addEventListener("dragstart", function(e){
  e.dataTransfer.setData('text/plain', e.target.innerHTML);
  // 向dataTransfer对象中追加数据
  e.dataTransfer.effectAllowed="copy";
 },false);
}
// 添加函数DragStart到window.onload监听事件
window.addEventListener("load",DragStart,false);
```

添加`dragover`监听事件，给拖放的目标元素添加`dragover`监听事件，在事件触发时改变目标元素的样式，并屏蔽浏览器的默认处理事件。

把添加监听事件的处理函数`DragOver()`追加到`window.onload`事件中，对于目标元素`preventDefault()`，必须取消浏览器的默认处理，否则将无法实现拖放功能。

```
function DragOver() {
// 拖放目标元素
 var target = document.getElementById('dropTarget');
 // 监听dragover事件，作用在目标元素上
 target.addEventListener("dragover", function(e){
 // 改变样式
  this.className = "dragover";
  // 取消浏览器的默认处理
  e.preventDefault();
 },false);
}
// 添加函数DragStart到window.onload监听事件
window.addEventListener("load", DragOver, false);
```

给拖放的目标元素添加`ondrop`监听事件，事件触发时获取`dataTransfer`对象中的数据，并追加到目标元素中，同时还还原了样式。

把添加监听事件的处理函数`Drop()`追加到`window.onload`事件中。

```
function Drop(){
// 拖放目标元素
 var target = document.getElementById('dropTarget');
 // 监听drop事件，作用在目标元素上
 target.addEventListener('drop',function(e){
  var data = e.dataTransfer.getData('text/plain');
  //取得dataTransfer对象中的数据
  this.innerHTML += data;
  e.dataTransfer.dropEffect = "copy";
  // 还原样式
  this.className=""
 },false);
}
// 添加函数DragStart到window.onload监听事件
window.addEventListener("load",Drop, false);
```

### 文件api

在`html5`中提供了**关于文件操作的文件api**,通过编程方式**选择和访问**文件数据。

如：`FileList`对象，`File`对象，`Blob`接口，`FileReader`接口

### 增加的标签特性

在`html5`中`file`类型的表单元素增加了`multiple`特性和`accept`特性

> multiple特性

`multiple`特性可允许用户同时选择多个上传文件。

```
<input type="file" multiple/>
```

> 得到一个`FileList`对象，是一个`File`对象的列表

> accept特性

规定了可通过文件上传提交的文件类型，实现了打开文件窗口时，默认选中指定的文件类型：

```
<input type="file" accept="image/gif"/>
```

### FileList对象和File对象

在`FileList`对象里的每一个文件又是一个`File`对象

示例：

```
<form action="" method="post">
 <input type="file" id="files" multiple/>
 <input type="button" value="显示文件" onclick="showFiles()"/>
 <p id="msg"></p>
</form>

function ShowFiles(){
// 获取FileList对象
 var fileList = document.getElementById("files").files;
 var msg = document.getElementById("msg");
 var file;
 for(var i=0; i<fileList.length; i++){
  file = fileList[i];
  msg.innerHTML += file.name + ";<br/>";
 }
}
```

### Blob对象

`Blob`对象表示**原始二进制数据**，该`Blob`接口有两个属性：**size和type**

第一，size属性，表示Blob对象的字节长度，可以借助

FileReader接口读取Blob对象的二进制数据，如果Blob对象没有字节数，则为0

第二，type属性，表示Blob对象的`MIME`类型，未知 类型，则返回一个 空字符串。

第三，slice()方法，使用slice()方法可以实现文件的切割，并返回一个新的Blob对象。

> File对象 和 Blob对象

File对象 继承了 Blob对象，所以 File对象 也可以使用 Blob对象的属性和方法（File对象可以使用size属性 和 type属性）

### 获取文件的大小和类型

示例：

```
<form action="" method="post">
 <input type="file" id="files" multiple accept="image/*"/>
 <input type="button" value="显示文件数据" onclick="ShowType()"/>
 <p id="msg"></p>
</form>

function ShowType(){
// 获取FileList对象
 var files = document.getElementById("files").files;
 var msg = document.getElementById("msg");
 var file;
 for(var i=0; i<files.length; i++){
  file=fileList[i];
  msg.innerHTML += "字节长度："+file.size+";<br/>";
  msg.innerHTML += "文件类型："+file.type+";<br/>";
 }
}
```

### FileReader接口卡

FileReader接口 提供了 一些 **读取文件的方法** 与 **一个波爱护读取结果**的 事件模型。

> FileReader接口 主要把 文件读入内存， 并读取文件中 的数据。

提前检测浏览器是否支持，实现该接口FileReader

```
if(typeof FileReader == "undefined"){
 console.log();
} else {
 var reader = new FileReader();
}
```

FileReader接口三个属性： 

1. 返回读取文件的状态
2. 数据
3. 读取时发生的错误

> readyState属性，只读

读取文件的状态：

1. `EMPTYP`，值为0， 表示新的`FileReader`接口已经构建，且 没有调用 任何读取方法 时的默认状态。
2. `LOADING`，值为1，表示有读取文件的方法正在读取 File 对象 或 Blob 对象，且没有错误发生。
3. `DONE`，值为2，表示读取文件结束，可能整个 File对象 或 Blob对象 已经完全 读入内存 中，在文件读取的过程中出现错误，或在读取过程中使用了 abort()方法 强行中断。

> result属性，只读

获取已经读取的文件 数据。 如是 图片，将返回 base64 格式的图片数据。

> error属性，只读

获取读取文件过程中出现的错误：4种类型

1. `NotFoundError`，找不到读取的资源文件。

FileReader接口 会 返回 NotFoundError 错误，同时读取文件 的方法也会 抛出 NotFoundError 错误异常

2. `SecurityError`，发生安全错误。

FileReader 接口 会返回 SecurityError 错误，同时读取文件的 方法也会抛出 SecurityError 错误异常

3. `NotReadableError`，无法读取的错误。

FileReader 接口会 返回 NotReadableError 错误，同时读取文件 的方法 也会抛出 NotReadableError 错误异常

4. `EncodingError`，编码限制的错误。

通常是数据的`URL`表示的网址 长度受到 限制

### FileReader接口的方法

第一，readAsArrayBuffer() 方法，将文件读取为 **数组缓冲区**


```
readAsArrayBuffer(<blob>);
```

其中的`<blob>`表示一个`Blob`对象的文件。

readAsArrayBuffer()方法 会把该 Blob 对象 的文件读取为 数组缓冲区

第二，readAsBinaryString()方法，将文件读取为二进制字符串。

```
readAsBinaryString(<blob>);
```

其中的`<blob>`表示一个`Blob`对象的文件。

readAsBinaryString()方法 会把该 Blob 对象 的文件读取为二进制字符串

第三，readAsText() 方法，将文件读取为二进制字符串

```
readAsText(<blob>,<encoding>);

// 读取为文本，encoding 为文本的编码方式
```

第四，readAsDataURL()方法 将文件读取为 DataURL 字符串：

```
readAsDataURL(<blob>);

// 读取为DataURL字符串
```

第五，abort()方法，中断读取操作

```
abort() // 没有参数
```

> 接口的事件

1. `loadstart`事件，当开始读取数据时 触发的事件
2. `proress`事件，当正在读取数据时触发的事件
3. `load`事件，当成功完成数据读取时触发的事件
4. `abort`事件，当中断读取数据时触发的事件
5. `error`事件，当读取数据发生错误时触发的事件
6. `loadend`事件，当结束读取数据时触发的事件，数据读取可能成功也可能失败

### FileReader接口

示例：

```
// 读取文件
function ReadAs(action){
 var blob = document.getElementById("files").files[0];
 if(blob){
  var reader = new FileReader(); // 声明接口对象
  // 读取文件的方法
  switch(action.toLowerCase()){
   case "binarystring":
    reader.readAsBinaryString(blob);
    break;
   case "arraybuffer":
    reader.readAsArrayBuffer(blob);
    break;
   case "text":
    reader.readAsText(blob);
    break;
   case "dataurl":
    reader.readAsDataURL(blob);
    break;
  }
  
  reader.onload = function(e){
   // 访问FileReader 的接口属性 result,把读取到内存里的内容获取出来
   var result = this.result;
   // 如果是图文件
   if(/image\/\w+/.test(blob.type) && action.toLowerCase() == "dataurl"){
    document.getElementById("result").innerHTML = "<img src='" + result + "'/>";
   } else {
    document.getElementById("result").innerHTML = result；
   }
  }
 }
}
```

### FileReader接口的事件

示例：

```
<form action="" method="post">
 <input type="file" id="files" multiple accept="image/*"/>
 <input type="button" value="读取文件" onclick="FileReaderEvent()"/>
 <p id="message"></p>
</form>

var blob = document.getElementById("files").files[0];
var message = document.getElementById("message");

var reader = new FileReader();
// 添加 loadstart 事件
reader.onloadstart = function(e){

}
// 添加 progress 事件
reader.onprogress = function(e){

}
// 添加 load 事件
reader.onload = function(e){

}
// 添加 abort 事件
reader.onabort = function(e){

}
// 添加 error 事件
reader.onerror = function(e){

}
// 添加 loadend 事件
reader.onloadend = function(e){

}
```

### 图片拖入浏览器

示例：

定义一个拖放的 drop 事件处理函数 dropHandle()

定义一个用于加载单个 文件的函数 loadImg()

```
// 目标元素的变量
var target;
// drop 事件处理函数
function dropHandle(e){
// 获取拖拽的文件
 var fileList = e.dataTransfer.files,
 fileType;
 // 遍历
 for(var i=0; i<fileList.length; i++){
  fileType = fileList[i].type;
  if(fileType.indexOf('image') == -1) {
   alert('');
   return;
  }
  // 加载单个文件
  loadImg(fileList[i]);
 }
}

// 加载
function loadImg(file){
// 声明接口对象
var reader = new FileReader();
// 添加load事件处理
reader.onload = function(e){
 var oImg = document.createElement("img");
 oImg.src = this.result;
 target.appendChild(oImg);
}
// 读取文件
reader.readAsDataURL(file);
}
```

页面加载完成后，可获取`target`目标容器，是用于存放拖放进的图片。

给`target`容器添加 `dragover`事件处理 和 `drop` 事件处理

```
window.onload = function() {
 // 获取目标元素
 target = document.getElementById('dropTarget')
 // 给目标元素添加 dragover 事件处理
 target.addEventListener('dragover', function(e){
  e.preventDefault();
 },false);
 
 target.addEventListener('drop', dropHandle, false);
}
```

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

## 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

## 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
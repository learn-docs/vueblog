## 前言

学习《HTML5与CSS3权威指南》这本书很不错，学完之后我颇有感触，觉得web的世界开明了许多。这本书是需要有一定基础的web前端开发工程师。

这本书主要学习HTML5和css3，看看这本书的书名就知道了，首先学习HTML5中新增的语法与标记方法，新增的元素和api。

读者了解内容：

![](https://user-gold-cdn.xitu.io/2020/3/1/170969ab5da15cf2?w=740&h=247&f=png&s=22061)

除了HTML5还有css3需要学习，css3中有各种新增的样式和属性。

![](https://user-gold-cdn.xitu.io/2020/3/1/170969e3a853ca9c?w=644&h=258&f=png&s=21639)

这本书也要感谢作者以及工作人员。

这本书还有实例，使用HTML5中新增结构元素来构建网页，和使用HTML5+css3来构建web应用程序。

![](https://user-gold-cdn.xitu.io/2020/3/1/17096b32846d7702?w=856&h=734&f=png&s=112894)

从2010年开始HTML5地推出，受到了世界各大浏览器的热烈支持，在业界很受欢迎。那么你需要了解一下HTML5与之前版本的大致区别吗，需要了解为啥支持HTML5吗，答案是不太需要也能工作。

但是如，一份前端你能敲出代码，但是问题你懂得什么是cookie吗？也许你懂个大概，组长或者高管问你什么是cookie？有时候大部分人都是一头晕，不过，百度查一下就能知道答案。

其实需要了解一下的，关于HTML5

![](https://user-gold-cdn.xitu.io/2020/3/2/17097208dd35eb5d?w=719&h=279&f=png&s=19206)

HTML5的出现就连微软也为此下一代的`ie9`做了标准上的改进，就是为了能够支持`html5`。

HTML4的代码示例：

<form>
<p><label>用户名：<input name="search" type="text" id="search"></label></p>
<script type="text/javascript">
 document.getElementById("search").focus();
</script>
</form>

示例代码：

    <form>
    <p><label>用户名：<input name="search" type="text" id="search"></label></p>
    <script type="text/javascript">
     document.getElementById("search").focus();
    </script>
    </form>

HTML5的示例：

    <form>
    <p><label>Search:<input name="search" autofocus></label></p>
    </form>
    <div id="header">...</div>
    <div id="nav">...</div>
    <div class="arcticle">...</div>
    <div id="side-bar">...</div>
    <div id="footer">...</div>

### HTML5的目的

HTML5的出现就是为了能够建立更简单的web程序，让程序员编写更简单的HTML代码，HTML5提供了很多api，新的属性，新的元素等等，这样HTML5就有理由成为受欢迎的了。

在HTML5中代替Cookie的sessionStorage功能与globalStorage功能在ie8里获得了支持。

一个新版本的出现，很多人都会有疑问，担心它会不会产生错误等。不过呢？它还是有它火的理由。

![](https://user-gold-cdn.xitu.io/2020/3/2/170976a7916bd2ff?w=873&h=306&f=png&s=27147)

1. 兼容性
2. 实用性
3. 非革命性的发展

HTML5的出现解决了各种问题，这是一次比较强大的版本。

![](https://user-gold-cdn.xitu.io/2020/3/2/170977852036ede1?w=809&h=286&f=png&s=27992)

> `contentEditable`属性，`designMode`属性，`hidden`属性，`spellcheck`属性，`tabindex`属性。

#### HTML5

内容类型`ContentType`还是`text/html`

`DOCTYPE`声明，在`HTML5`中的`DOCTYPE`声明方法如下，不区分大小写：`<!DOCTYPE html>`

指定字符编码，HTML5：`<meta charset="UTF-8">`

`<meta charset="UTF-8" http-equiv="Content-Type" content="text/html;charset=UTF-8">`

代码示例：

<input type="checkbox" checkbox>checkbox
<input type="checkbox">checkbox1
<input type="checkbox" checked="checked">checkbox2
<input type="checkbox" checked="">checkbox3

代码：

    <input type="checkbox" checkbox>checkbox
    <input type="checkbox">checkbox1
    <input type="checkbox" checked="checked">checkbox2
    <input type="checkbox" checked="">checkbox3

HTML5标记示例：

    <!DOCTYPE html>
    <meta charset="UTF-8">
    <title>html5</title>
    <p>html5
    <br/>html5

#### 新增元素

`section`元素，表示页面中的一个内容区块。

`article`元素，表示页面中的一块与上下文不相关的独立内容。

`aside`元素，表示`article`元素的内容之外的，与`article`元素的内容相关的辅助信息。

`header`元素，表示页面中一个内容区块或整个页面的标题。

`hgroup`元素，用于对整个页面或页面中一个内容区块的标题进行组合。

`footer`元素，表示整个页面或页面中一个内容区块的脚注。

`nav`元素，表示页面中导航链接的部分。

`figure`元素，表示一段独立的流内容，一般表示文档主体流内容中的一个独立单元。

效果：

<figure>
<figcaption>web</figcaption>
<p>web</p>
</figure>

代码：

    <figure>
    <figcaption>web</figcaption>
    <p>web</p>
    </figure>

`video`元素，定义视频。

`audio`元素，定义音频。

`embed`元素，用来插入各种多媒体。

`mark`元素，用来在视觉上向用户呈现那些需要突出显示或高亮显示的文字。

`progress`元素，表示运行中的进程。

`time`元素，表示日期或时间。

`ruby`元素，表示`ruby`注解。

`rt`元素，表示字符的解释或发音。

`rp`元素，表示在`ruby`注解中使用，以定义不支持`ruby`元素的浏览器所显示的内容。

`wbr`元素，表示软换行。

`canvas`元素，表示图形，比如图表和其他图像。

效果：

<canvas style="background-color: red;" id="myCanvas" width="100" height="100"></canvas>

代码示例：

    <canvas style="background-color: red;" id="myCanvas" width="100" height="100"></canvas>

`command`元素，表示命令按钮，比如单选按钮，复选框或按钮。

代码：

    <command onclick="cut()" label="cul">

`details`元素，表示用户要求得到并且可以得到的细节信息。

<details>
 <summary>html-详情</summary>
 web
</details>

代码：

    <details>
     <summary>html-详情</summary>
     web
    </details>

`datalist`元素，表示可选数据的列表

`datagrid`元素，表示可选数据的列表，它以树形的形式来显示。

`keygen`元素，表示生产密钥。

`output`元素，表示不同类型的输出，比如脚本的输出。

`source`元素，表示用来为媒介元素定义媒介资源。

`menu`元素，表示菜单列表。

效果：

<menu>
 <li><input type="checkbox"/>web</li>
 <li><input type="checkbox"/>it</li>
</menu>

代码：

    <menu>
     <li><input type="checkbox"/>web</li>
     <li><input type="checkbox"/>it</li>
    </menu>

#### `input`新增元素的类型

`email`表示必须输入`E-mail`地址的文本输入框。

`url`表示必须输入`url`地址的文本输入框。

`number`表示必须输入数值的文本输入框。

`range`表示必须输入一定范围内数字值的文本输入框。

`Date Pickers`

`date`-选取日，月，年

`month`-选取月，年

`week`-选取周和年

`time`-选取时间，日，月，年

`datetime`-选取时间，日，月，年

`datetime-local`-选取时间，日，月，年

> `html5`已不支持`frame`框架，只支持`iframe`框架。

#### 表单新增属性

`multiple`属性允许上传文件时一次上传多个文件。

为`input`元素，`button`元素，`form`元素增加了`novalidate`属性，该属性取消提交时进行的有关检查，表单可以被无条件地提交。

为`ol`元素添加`reversed`，表示列表倒序显示。

`meta`元素增加`charset`属性。

`menu`元素增加了两个新的属性——`type`与`label`。

为`style`元素增加`scoped`属性，用来规定样式的作用范围。

为`script`元素增加`async`属性，它定义脚本是否异步执行。

全局属性

`contentEditable`属性，功能是允许用户编辑元素中的内容，该元素是可以获得鼠标焦点的元素，而且在点击鼠标后，要向用户提供一个插入符号，提示用户该元素中的内容允许编辑。

除了`contentEditable`属性外，元素还具有一个`isContentEditable`属性，当元素可编辑时，该属性为`true`，当元素不可编辑时，该属性为`false`。

示例：

    <ul contentEditable="true">
    <li>元素1</li>
    </ul>

`designMode`属性，表示整个页面是否可编辑。使用`JavaScript`脚本来指定`designMode`属性的方法如下所示：`document.designMode="on"`。

`hidden`属性，所有的元素都允许使用一个`hidden`属性。该属性类似于`input`元素中的`hidden`元素，是用来不渲染该元素，让元素处于不可见状态。

`spellcheck`属性，是对用户输入的文本内容进行拼写和语法检查。`spellcheck`属性是一个布尔值的属性，具有`true`和`false`两种值。

`tabindex`属性，当不断敲击tab键让窗口或页面中的控件获得焦点，对窗口或页面中的所有控件进行遍历的时候，每一个控件的tabindex表示该控件是第几个被访问到的。

#### HTML5新增

`article`元素，`section`元素，`nav`元素，`aside`元素，`header`元素，`hgroup`元素，`footer`元素，`address`元素。

`article`元素代表文档，页面或应用程序中独立的，完整的，可以独自被外部引用的内容。

`article`示例：

    <article>
     <header>
      <h1>web</h1>
      <p>日期</p>
     </header>
     <footer>
      <p>web</p>
     </footer>
    </article>

 `aside`元素用来表示当前页面或文章的附属信息部分。
 
 `time`元素代表24小时中的某个时刻或某个日期，表示时刻时允许带时差。
 
 `pubdate`属性是一个可选的，`boolean`值的属性，用于`article`元素中的`time`元素上。
 
 代码：
 
    <header><h1>页面标题</h1></header>
    
`hgroup`元素是将标题以及其子标题进行分组的元素。

`footer`元素可以作为其上层父级内容区块或是一个根区块的脚注。

代码：

    <div id="footer">
    <ul>
     <li>web</li>
    </ul>
    </div>
 
 内容区块的编排，可以分“显示编排”与“隐式编排”两种方式。
 
 ## 表单与文件
 
 ### form属性示例
 
 <form id="testform">
 <input type="text">
 </form>
 <textarea form="testform"></textarea>
 
 示例代码：
 
     <form id="testform">
     <input type="text">
     </form>
     <textarea form="testform"></textarea>
 
 ### formaction属性
 
 `formaction`，增加不同的此属性，可以使得点击不同的按钮，将表单提交到不同的页面。
 
 ### `formmethod`属性
 
 每个表单内也只有一个`method`属性来指统一指定提交方法。在HTML5中，可以使用`formation`属性来对每个表单元素分别指定不同的提交页面，同时也可以使用`formmethod`属性来对每个表单元素分别指定不同的提交方法。
 
 `placeholder`是指当文本框处于未输入状态时显示的输入提示，`autofocus`属性自动获取光标焦点。
 
    <input type="text" autofocus>

`autocomplete`属性，辅助输入所用的自动完成功能。

`input`元素，`search`用于搜索，`tel`用于电话，`url`用于输入`url`格式，`email`用于输入`email`格式的文字，`number`用于数值输入文本框，`range`只允许输入一段范围内数值的文本框。`color`颜色选择文本框。`file`文本选择文本框。

<input name="url" type="url" value="http://www.microsoft.com">
<br/>
<input name="email" type="email" value="2397923107@qq.com">
<br/>
<input name="date"  type="date" value="2020-02-02">
<br/>
<input name="time" type="time" value="10:00">
<br/>
<input name="datetime" type="datetime">
<br/>
<input name="datetime-local" type="datetime-local">
<br/>
<input name="month" type="month" value="2010-10">
<br/>
<input name="week" type"week" value="2010-w40">
<br/>
<input name="number" type="number" value="23" min="10" max="100" step="5">
<br/>
<input name="range" type="range" value="30" min="0" max="100" step="5">

代码：

    <input name="url" type="url" value="http://www.microsoft.com">
    <br/>
    <input name="email" type="email" value="2397923107@qq.com">
    <br/>
    <input name="date"  type="date" value="2020-02-02">
    <br/>
    <input name="time" type="time" value="10:00">
    <br/>
    <input name="datetime" type="datetime">
    <br/>
    <input name="datetime-local" type="datetime-local">
    <br/>
    <input name="month" type="month" value="2010-10">
    <br/>
    <input name="week" type"week" value="2010-w40">
    <br/>
    <input name="number" type="number" value="23" min="10" max="100" step="5">
    <br/>
    <input name="range" type="range" value="30" min="0" max="100" step="5">

`output`元素的追加，定义不同类型的输出。

代码：

    <input name="range1" type="range" min="0" max="100" step="5"/>
    <output onforminput="value=range1.value">50</output>

`required`属性，提示用户这个元素中必须输入内容。

`pattern`属性，要求输入内容符合一定的格式。

`step`属性控制元素中的值增加或者减少时的步幅。

显式验证，`checkValidiity`方法，调用该方法，显式地对表单内所有元素内容或单个元素内容进行有效性验证。

`cite`元素表示作品的标题。

`file`控件内只允许放置一个文件，`multiple`属性，`file`控件内允许一次放置多个文件。`FileList`对象为这些`file`对象的列表，代表用户选择的所有文件。

### Blob对象

`Blob`对象表示二进制原始数据，它提供了一个`slice`方法。blob对象有两个属性，size属性表示一个blob对象的字节长度，type属性表示blob的mime类型。

`blob`对象使用示例

    var file;
    // 得到用户选择的第一个文件
    file=document.getElementById("file").files[0];
    var size = document.getElementById("size");
    // 显示文件字节长度
    size.innerHTML=file.size;
    var type=document.getElementById("type");
    // 显示文件类型
    type.innerHTML=file.type;

<input type="file" id="file" accept="image/*"/>

代码：

    <input type="file" id="file" accept="image/*"/>

`FileReader`接口主要用来把文件读入内存，并且读取文件中的数据。

    if(typeof FileReader == 'undefined'){
        alert("web")
    }else{
        var reader = new FileReader();
    }

支持拖动处理的mime的类型为以下几种：

`text/plain:`文本文字

`text/html:`HTML文字

`text/xml：`xml文字

`text/uri-list:url`列表，每个`url`为一行。

## canvas元素

`canvas`元素是很重要，可以画出图形与图像。

![](https://user-gold-cdn.xitu.io/2020/3/3/1709dad9646ab166?w=1202&h=332&f=png&s=43778)

`canvas`元素指定`id`，`width`，`height`三个属性。

在`body`的属性中，使用了`onload="draw('canvas');"`语句，调用脚本文件中的`draw`函数进行图形描画。

用`canvas`元素绘制图形时。

1. 取得`canvas`元素，用`document.getElementById`等方法取得`canvas`对象。
2. 取得上下文，进行绘制图形时，需要使用图形上下文，它是一个封装很多绘图功能的对象，需要使用`canvas`对象的`getContext`方法来获得图形上下文。
3. 填充和绘制边框，填充为`fill`，绘制边框`stroke`。填充表示填满图形内部，绘制边框是指只绘制图形的边框。
4. 设定绘图样式，主要是用于图形的颜色，但不限于图形的颜色。第一，设定填充图形的样式，`fillStyle`属性，填充的样式，在该属性中填充的颜色值。第二，设定图形边框的样式，`strokeStyle`属性，图形边框的样式，在该属性中填入边框的颜色值。
5. 指定线宽，使用图形上下文对象的`lineWidth`属性设置图形边框的宽度。在绘制图形的时候，任何直线都可以通过`lineWidth`属性来指定直线的宽度。
6. 指定颜色值，填充颜色和边框的颜色分别通过`fillStyle`属性和`strokeStyle`属性。（`rgb`（红，绿，蓝）或`rgba`（红，绿，蓝，通明度））。
7. 绘制矩形，使用`fillRect`方法和`strokeRect`方法来填充矩形和绘制矩形边框。

`context.fillRect(x,y,width,height)`
`context.strokeRect(x,y,width,height)`

坐标原点为`canvas`画布的最左上角

代码示例：

    <script>
    function draw(id) {
        var canvas = document.getElementById(id);
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        context.fillStyle="#EEEEFF";
        context.fillRect(0,0,400,300);
        context.fillStyle="red";
        context.strokeStyle="blue";
        context.lineWidth=1;
        context.fillRect(50,50,100,100);
        context.strokeRect(50,50,100,100);
    }
    </script>

`clearRect`方法，该方法将擦除指定的矩形区域中的图形，让矩形区域中的颜色全部变为透明。

`context.clearRect(x,y,width,height)`

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    <canvas id="canvasId"></canvas>
    <script>
        var canvas = document.getElementById('canvasId');
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        context.fillStyle="#EEEEFF";
        context.fillRect(0,0,400,300);
        var n = 0;
        for(var i=0;i<10;i++){
            context.beginPath();
            context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
            context.closePath();
            context.fillStyle = 'rgba(255,0,0,0.25)';
            context.fill();
        }
    </script>
    
    </body>
    </html>

图形绘制：

![](https://user-gold-cdn.xitu.io/2020/3/3/170a0e9d6dfbb534?w=930&h=360&f=png&s=44414)

- 使用图形上下文对象的`beginPath`方法：`context.beginPath()`，这个方法不使用参数。调用这个方法，开始路径的创建。
- `context.arc(x,y,radius,startAngle,endAngle,anticlockwise)`创建圆形路径。

`radius`为原型半径，`startAngle`为开始角度，`endAngle`为结束角度，`anticlockwise`为是否按顺时针方向进行绘制。

`arc`方法可以用来绘制圆形，和绘制圆弧，开始角度与结束角度决定了弧度，`anticlockwise`参数为布尔值的参数。`true`按顺时绘制，`false`按逆时针方向绘制。

- 关闭路径，使用图形上下文对象的`closePath`方法将路径关闭。`context.closePath()`，这步操作只是路径创建完成而已，并没有绘制任何图形。
- 绘制样式，`context.fillStyle='rgba(255,0,0,0.25)';`

## `moveTo`和`lineTo`

`moveTo`方法的作用是将光标移动到指定坐标点，绘制直线的时候以这个坐标点为起点。`moveTo(x,y)`，x为横坐标，y为纵坐标。

`lineTo`方法在`moveTo`方法中指定的直线起点与参数中指定的直线终点绘制一条直线。

`lineTo(x,y)`，x表示直线终点的横坐标，y为直线终点的纵坐标。

### 贝济埃曲线

贝济埃曲线绘制使用`bezierCurveTo`方法

该方法的定义：

`context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);`

拥有6个参数。绘制贝济埃曲线需要两个控制点，`cp1,cp2`，`x,y`分别为曲线终点的横纵坐标。

绘制贝济埃曲线示例：

效果

![](https://user-gold-cdn.xitu.io/2020/3/5/170ab4355f82d71a?w=493&h=256&f=png&s=45521)

![](https://user-gold-cdn.xitu.io/2020/3/5/170ab4384dfd3b75?w=463&h=248&f=png&s=46038)

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        context.fillStyle = '#EEEFF';
        context.fillRect(0,0,400,300);
        var n = 0;
        var dx = 150;
        var dy = 150;
        var s = 100;
        context.beginPath();
        context.globalCompositeOperation = 'and';
        context.fillStyle = 'rgb(100,255,100)';
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = Math.PI / 15 * 11;
        context.moveTo(dx,dy);
        for(var i=0; i<30; i++) {
            var x = Math.sin(i * dig);
            var y = Math.cos(i * dig);
            context.bezierCurveTo(dx+x+s,dy+y*s-100,dx+x*s+100,dy+y*s,dx+x*s,dy+y*s);
        }
        context.closePath();
        context.fill();
        context.stroke();
    }
    
    </script>
    
    </body>
    </html>

使用`quadraticCureTo`方法绘制二次样条曲线。

`context.quadraticCurveTo(in float cpx, in float cpy,in float x,in float y)`。

二次样条曲线比绘制贝济埃曲线容易绘制，二次样条曲线需要两个控制点，贝济埃曲线只需要一个控制点。

## 绘制渐变图形

### 绘制线性渐变

`fillStyle`方法可以填充颜色外，还可以指定填充的对象。

渐变：指填充时从一种是颜色慢慢过渡到另外一种颜色。

#### 两点之间的线性渐变

`context.createLinearGradient(xStart, yStart, xEnd, yEnd);`

使用四个参数。

使用这个方法创建了一个使用两个坐标点的`LinearGradient`对象。使用`addColorStop`方法进行设定渐变的颜色。

`context.addColorStop(offset, color);`

`offset`的值是一个范围在0到1之间的浮点值，渐变起始点的偏移量为0，结束点为1。它为所设定的颜色离开渐变起始点的偏移量。

渐变，需要至少使用两次`addColorStop`方法以追加两个颜色。

`HTML5 canvas fillRect() 方法`

绘制 150*100 像素的已填充矩形：

![](https://user-gold-cdn.xitu.io/2020/3/5/170ab6c8c19bf23e?w=377&h=192&f=png&s=2096)

`fillRect()` 方法绘制“已填色”的矩形。默认的填充颜色是黑色。

JavaScript:

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillRect(20,20,150,100);

JavaScript 语法：

`context.fillRect(x,y,width,height); `

**参数值**

|参数|	描述|
|:---|:---|
|x|	矩形左上角的 x 坐标|
|y|	矩形左上角的 y 坐标|
|width|	矩形的宽度，以像素计|
|height|	矩形的高度，以像素计|

`HTML5 canvas createLinearGradient()` 方法

定义从黑到白的渐变（从左向右），作为矩形的填充样式：

![](https://user-gold-cdn.xitu.io/2020/3/6/170ab6fadd166e6a?w=374&h=192&f=png&s=3525)

JavaScript:

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    
    var grd=ctx.createLinearGradient(0,0,170,0);
    grd.addColorStop(0,"black");
    grd.addColorStop(1,"white");
    
    ctx.fillStyle=grd;
    ctx.fillRect(20,20,150,100);

`createLinearGradient()` 方法创建线性的渐变对象。

`JavaScript` 语法：

`context.createLinearGradient(x0,y0,x1,y1);`

**参数值**

|参数|	描述|
|:---|:---|
|x0|	渐变开始点的 x 坐标|
|y0|	渐变开始点的 y 坐标|
|x1|	渐变结束点的 x 坐标|
|y1|	渐变结束点的 y 坐标|

#### 定义用蓝色填充的矩形：

![](https://user-gold-cdn.xitu.io/2020/3/6/170ab73be665685f?w=382&h=190&f=png&s=2174)

JavaScript:

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="#0000ff";
    ctx.fillRect(20,20,150,100);

渐变效果：

![](https://user-gold-cdn.xitu.io/2020/3/6/170ab75afb2b1212?w=484&h=232&f=png&s=32680)

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        var g1 = context.createLinearGradient(0,0,0,300);
        g1.addColorStop(0,'rgb(255,255,0)');
        g1.addColorStop(1,'rgb(0,255,255)');
        context.fillStyle=g1;
        context.fillRect(0,0,400,300);
        var n = 0;
        var g2 = context.createLinearGradient(0,0,300,0);
        g2.addColorStop(0, 'rgba(0,0,255,0.5)');
        g2.addColorStop(1, 'rgba(255,0,0,0.5)');
        for(var i=0; i<10; i++){
            context.beginPath();
            context.fillStyle = g2;
            context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
            context.closePath();
            context.fill();
        }
    
    }
    
    </script>
    
    </body>
    </html>

### 绘制径向渐变

径向渐变：指沿着圆形的半径向外进行扩散的渐变方式。

使用图形上下文对象的`createRadiaGradient`方法绘制。

`context.createRadiaGradient(xStart,yStart,radiusStart,xEnd,yEnd,radiusEnd);`

需要使用6个参数。

|参数|	描述|
|:---|:---|
|xStart|渐变开始圆的圆心横坐标|
|yStart|渐变开始圆的圆心纵坐标|
|radiusStart|开始圆的半径|
|xEnd|渐变结束圆的圆心横坐标|
|yEnd|渐变结束原型纵坐标|
|radiusEnd|结束圆的半径|

设定颜色也是使用`addColorStop`方法。同理的0到1之间的浮点数作为渐变转折点的偏移量。

绘制径向渐变效果：

使用`createRadialGradient`方法，使用`addColorStop`方法：

`HTML5 canvas beginPath()` 方法

在画布上绘制两条路径；红色和蓝色：

![](https://user-gold-cdn.xitu.io/2020/3/6/170ab86feb0a6dbd?w=377&h=186&f=png&s=7330)

**定义和用法**

`beginPath()` 方法开始一条路径，或重置当前的路径。

开始一条路径，移动到位置 0,0。创建到达位置 300,150 的一条线：

![](https://user-gold-cdn.xitu.io/2020/3/6/170ab89d3d0beec1?w=376&h=190&f=png&s=7431)

`JavaScript:`

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.stroke();

`JavaScript:`

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    
    ctx.beginPath();
    ctx.lineWidth="5";//设置线段厚度的属性
    ctx.strokeStyle="red"; // 红色路径
    ctx.moveTo(0,75);
    ctx.lineTo(250,75);
    ctx.stroke(); // 进行绘制
    
    ctx.beginPath();
    ctx.strokeStyle="blue"; // 蓝色路径
    ctx.moveTo(50,0);
    ctx.lineTo(150,130);
    ctx.stroke(); // 进行绘制

绘制径向渐变效果：

![](https://user-gold-cdn.xitu.io/2020/3/6/170ab9576a767cd9?w=479&h=243&f=png&s=59397)

代码：（注意单词拼写）

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        var g1 = context.createRadialGradient(400,0,0,400,0,400);
        g1.addColorStop(0.1,'rgb(255,255,0)');
        g1.addColorStop(0.3,'rgb(255,0,255)');
        g1.addColorStop(1,'rgb(0,255,255)');
        context.fillStyle=g1;
        context.fillRect(0,0,400,300);
        var n = 0;
        var g2 = context.createRadialGradient(250,250,0,250,250,300);
        g2.addColorStop(0.1,'rgba(255,0,0,0.5)');
        g2.addColorStop(0.7,'rgba(255,255,0,0.5)');
        g2.addColorStop(1,'rgba(0,0,255,0.5)');
        for(var i=0; i<10; i++){
            context.beginPath();
            context.fillStyle = g2;
            context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
            context.closePath();
            context.fill();
        }
    }
    
    </script>
    
    </body>
    </html>

## 绘制变形图形

### 坐标变换

变形：使用`Canvas API`的坐标轴变换处理功能可以实现。

绘制图形，默认情况下，`Canvas`画布的最左上角对应的是坐标轴的原点。即为`（0，0）`。

对坐标进行处理，就可以实现图形的变形。

三种方式：

1. 平移
2. 扩大
3. 旋转

平移：使用图形上下文对象的`translate`方法移动坐标轴原点。

方法：`context.translate(x,y)`，`x,y`为移动多少个单位。

扩大：使用图形上下文对象的`scale`方法将图形放大。

方法：`context.scale(x,y)`，`x,y`为该方向上放大倍数。

旋转：使用图形上下文对象的`rotate`方法将图形进行旋转。

方法：`context.rotate(angle)`，`angle`为旋转的角度，旋转为顺时针方向，逆时针需要将参数设置为负数。

坐标变换示例：

![](https://user-gold-cdn.xitu.io/2020/3/6/170aba57e4a4e097?w=457&h=237&f=png&s=13725)

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        context.fillStyle = '#EEEEFF';
        context.fillRect(0,0,400,300);
        // 图形绘制
        context.translate(200,50);
        context.fillStyle='rgba(255,0,0,0.25)';
        for(var i=0; i<50; i++){
            context.translate(25,50);
            context.scale(0.95,0.95);
            context.rotate(Math.PI/10);
            context.fillRect(0,0,100,50);   
        }
        
    }
    
    </script>
    
    </body>
    </html>

#### 对使用路径绘制出来的图像进行变形

学习`translate`,`scale`,`rotate`方法。

效果：将坐标变换和路径结合使用

![](https://user-gold-cdn.xitu.io/2020/3/6/170abafadfd63286?w=464&h=224&f=png&s=16476)

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        context.fillStyle = '#EEEEFF';
        context.fillRect(0,0,400,300);
        // 图形绘制
        context.translate(200,50);
        for(var i=0; i<50; i++){
            context.translate(25,50);
            context.scale(0.95,0.95);
            context.rotate(Math.PI/10);
            create5Star(context);
            context.fill();
        }
        
    }
    function create5Star(context){
        var n = 0;
        var dx=100;
        var dy=0;
        var s=50;
        context.beginPath();
        context.fillStyle='rgba(255,0,0,0.5)';
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig =Math.PI/5*4;
        for(var i=0;i<5;i++){
            var x =Math.sin(i*dig);
            var y =Math.cos(i*dig);
            context.lineTo(dx+x*s,dy+y*s);
        }
        context.closePath();
    }
    
    </script>
    
    </body>
    </html>

## 矩阵变换

利用矩阵变换实现的变形技术

使用图形上下文对象的`transforms`方法修改变换矩阵

`context.transform(m11, m12, m21, m22, dx, dy)`

|参数|	描述|
|:---|:---|
|dx|将坐标原点在x轴上向右移动x个单位|
|dy|将坐标原点在y轴上向下移动y个单位|

矩阵方法需要重新找文档进行深入学习。之前的图形变形提到的三个方法，实际上是隐式地修改了变换矩阵。

下面可以使用`transform`方法进行代替：`translate(x,y)`,`scale(x,y)`,`rotate(angle)`。

> 用`transform`方法实现变形的示例

![](https://user-gold-cdn.xitu.io/2020/3/6/170abbf53d38d5a3?w=407&h=256&f=png&s=31049)

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        var colors = ["red","orange","yellow","green","blue","navy","purple"];
        context.lineWidth = 10;
        context.transform(1,0,0,1,100,0)
        for(var i=0;i<colors.length;i++){
            context.transform(1,0,0,1,0,10);
            context.strokeStyle=colors[i];
            context.beginPath();
            context.arc(50,100,100,0,Math.PI,true);
            context.stroke();
        }
    }
    
    
    </script>
    
    </body>
    </html>

使用`setTransform`方法：

`context.setTransform(m11, m12, m21, m22, dx, dy)`

绘制变形图形的示例：

`HTML 5 canvas strokeStyle` 属性

绘制一个矩形。请用蓝色的笔触颜色：

![](https://user-gold-cdn.xitu.io/2020/3/6/170abcab496521ee?w=381&h=189&f=png&s=2379)

`strokeStyle` 属性设置或返回用于笔触的颜色、渐变或模式。

`JavaScript:`

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.strokeStyle="#0000ff";
    ctx.strokeRect(20,20,150,100);

绘制一个矩形。使用渐变笔触：

![](https://user-gold-cdn.xitu.io/2020/3/6/170abcbaf1844ce4?w=376&h=190&f=png&s=5063)

`JavaScript: `

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    
    var gradient=ctx.createLinearGradient(0,0,170,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    
    // 用渐变进行填充
    ctx.strokeStyle=gradient;
    ctx.lineWidth=5;
    ctx.strokeRect(20,20,150,100);

`HTML5 canvas strokeRect()` 方法

绘制 150*100 像素的矩形：

![](https://user-gold-cdn.xitu.io/2020/3/6/170abcc9f0e68343?w=378&h=187&f=png&s=2372)

JavaScript:

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.strokeRect(20,20,150,100);

**效果：**

![](https://user-gold-cdn.xitu.io/2020/3/6/170abc952d318590?w=380&h=231&f=png&s=7592)

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        context.strokeStyle = "red";
        context.strokeRect(30,10,60,20);
        var rad = 45*Math.PI/180;
        context.setTransform(Math.cos(rad),Math.sin(rad),-Math.sin(rad),Math.cos(rad),0,0);
        context.strokeStyle = "blue";
        context.strokeRect(30,10,60,20);
        context.setTransform(2.5,0,0,2.5,0,0);
        context.strokeStyle = "green";
        context.strokeRect(30,10,60,20);
        context.setTransform(1,0,0,1,40,80);
        context.strokeStyle = 'gray';
        context.strokeRect(30,10,60,20);
    }
    
    
    </script>
    
    </body>
    </html>

在h5中，只要使用图形上下文对象的`globalCompositeOperation`属性就能决定图形的组合方式：

`context.globalCompositeOperation=type`

`type`的值：

1. `source-over`默认值，表示新图形覆盖在原有的图形之上。
2. `destination-over`，表示在原有图形之下绘制新图形。
3. `source-in`新图形与原有图形作`in`运算，只显示新图形中与原有图形相重叠的部分，新图形与原有图形的其他部分均变成透明。
4. `destination-in`，原有图形与新图形作`in`运算，只显示原有图形中与新图形重叠的部分，新图形与原有图形的其他部分均变成透明。
5. `source-out`新图形与原有图形作`out`运算，只显示新图形中与原有图形不重叠的部分，新图形与原有图形的其他部分均变成透明。
6. `destination-out`原有图形与新图形作`out`运算，只显示原有图形中与新图形不重叠的部分，新图形与原有图形的其他部分均变成透明。
7. `source-atop`只绘制新图形中与原有图形重叠的部分与未重叠覆盖的原有图形，新图形的其他部分变成透明。
8. `destination-atop`只绘制原有图形中被新图形重叠覆盖的部分与新图形的其他部分，原有图形中的其他部分变成透明，不绘制新图形中与原有图形相重叠的部分。
9. `lighter`原有图形与新图形均绘制，重叠部分做加色处理。
10. `xor`只绘制新图形中与原有图形不重叠的部分，重叠部分变成透明。
11. `copy`只绘制新图形，原有图形中未与新图形重叠的部分变成透明。

图形组合示例效果：

![](https://user-gold-cdn.xitu.io/2020/3/6/170ad194e85a6b46?w=334&h=234&f=png&s=5914)

代码：

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=utf-8>
        <meta name=description content="">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>1</title>
    </head>
    <body>
    
    
    <button onclick="draw()">
        点击
    </button>
    
    <canvas id="can"> </canvas>
    
    <script>
    
    function draw(){
        var canvas = document.getElementById('can')
        if(canvas == null){
            return false;
        }
        var context = canvas.getContext('2d');
        var oprtns = new Array(
            "source-atop",
            "source-in",
            "source-out",
            "source-over",
            "destination-atop",
            "destination-in",
            "destination-out",
            "destination-over",
            "lighter",
            "copy",
            "xor"
        );
        i=8;
        context.fillStyle = "blue";
        context.fillRect(10,10,60,60);
        context.globalCompositeOperation = oprtns[i];
        context.beginPath();
        context.fillStyle = "red";
        context.arc(60,60,30,0,Math.PI*2,false);
        context.fill();
    }
    
    
    </script>
    
    </body>
    </html>

### 给图形绘制阴影

利用图形上下文对象的属性：

1. `shadowOffsetX`-阴影的横向位移量
2. `shadowOffsetY`-阴影的纵向位移量
3. `shadowColor`阴影的颜色
4. `shadowBlur`阴影的模糊范围

### 绘制图像

使用`drawImage`方法，绘制图像：

- `context.drawImage(image,x,y)`
- `context.drawImage(image,x,y,w,h);`
- `context.drawImage(image,sx,sy,sh,dx,dy,dw,dh)`

### 平铺效果

`createPattern`方法：

`context.createPattern(image,type)`

|参数|	描述|
|:---|:---|
|image|要平铺的图像|
|type|参数的值`no-repeat`，`repeat-x`，`repeat-y`，`repeat`|

1. `no-repeat`不平铺
2. `repeat-x`橫方向平铺
3. `repeat-y`纵方向平铺
4. `repeat`全方向平铺

### 像素处理

使用图形上下文对象的`getImageData`方法来获取图像中的像素：

`var imagedata = context.getImageData(sx,sy,sw,sh)`

在HTML5中：绘制文字

### 绘制文字

使用`fillText`方法或者`strokeText`方法：

`fillText`方法用来填充方式绘制字符串：

`void fillText(text,x,y,[maxWidth]);`

`strokeText`方法用轮廓方式绘制字符串：

`void stroke Text(text, x, y, [maxWidth]);`

使用`measureText`方法来得到文字的宽度：

`metrics = context.measureText(text)`

#### 保存与恢复状态

使用`Canvas API`中的`save`和`restore`两个方法。

保存文件，在`Canvas API`中保存文件的原理实际上是把当前的绘画状态输出到一个`data URL`地址所指向的数据中的过程。为`data URL`，是目前大多数浏览器能够识别的一种`base64`位编码的`URL`。

主要用于小型的，可以在网页中嵌入的，不需要从外部文件嵌入的数据。

使用`toDataURL`方法把绘画状态输出到一个`data URL`中，然后重新装载。

`toDataURL`的使用方法：

`canvas.toDataURL(type)`

## 后记

阅读文章：

**《HTML5与CSS3权威指南》**

- 拉你进技术群，长期交流学习...
- 欢迎关注，认真学前端，做个有专业的技术人...

扫码关注公众号，订阅更多精彩内容。

![](https://user-gold-cdn.xitu.io/2020/3/6/170ad2cd57dd5dd4?w=1080&h=394&f=jpeg&s=42763)

![](https://user-gold-cdn.xitu.io/2020/2/24/17077e3377137c5f?w=1710&h=624&f=png&s=158784)
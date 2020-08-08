## 前言

html5Canvas的知识点，是程序员开发者必备技能，在实际工作中也常常会涉及到。

最近熬夜总结html5Canvas相关的知识点，大家一起看一下吧：

![](https://user-gold-cdn.xitu.io/2020/6/12/172a4e2e48155751?w=180&h=182&f=jpeg&s=9330)

### 1.html5Canvas基础知识

- Canvas，它是画布
- Canvas元素用于在网页上绘制2D图形和图像

Canvas使用的场景有：1，动画；2，H5游戏；3，图表。

效果动画，加载Loading:
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25384904d98840d68cca211acf320557~tplv-k3u1fbpfcp-zoom-1.image)

H5游戏效果：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2721181f4274ab1a6780688d23970a9~tplv-k3u1fbpfcp-zoom-1.image)


对于Canvas需要掌握：

1. 使用Canvas画**直线，矩形，圆形**以及设置它们的样式。
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d69d62066fc4c548891aba348f2c55e~tplv-k3u1fbpfcp-zoom-1.image)
2. Canvas中的**图形变换，渐变，文字和图片**。
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0426c89059a4cf783d4b6072646b609~tplv-k3u1fbpfcp-zoom-1.image)
3. Canvas的**像素获取，阴影和曲线绘制以及区域的剪辑**。
4. Canvas**动画，交互和离屏**技术。

> 使用Canvas画基本图形

- Canvas的坐标体系
- 使用Canvas画直线，矩形，圆形
- 为圆形设置样式

> Canvas坐标体系

- canvas默认大小，300*150
- 通过HTML，css，JavaScript设置width和height的区别
- HTML和JavaScript设置的画布大小
- css设置的是画布缩放后的大小
- 坐标系原点及方向（原点在左上角，向右为x方向，向下为y方向）

> 画直线，矩形和原型

- 画直线：`ctx.moveTo(x1,y1)，ctx.lineTo(x2,y2)`
- 画圆形: `ctx.arc(x,y,radius,0,Math.PI*2,true)`
- 画矩形：可以通过直线来画，也可以直接用（`ctx.strokeRect(x1,y1,x2,y2`）

> beginPath和closePath

1. beginPath和closePath**并不是成对出现的**
2. beginPath的作用是**开始一条新路径**
3. closePath的作用是**使当前路径闭合**

> 描边和填充样式

1. strokeStyle用来设置画笔样式，也就是**直线，曲线，边框的样式**
2. fillStyle用来设置 填充样式
3. lineWidth用来设置线条的粗细

> Canvas中的图形变换，渐变，文字和图片

1. Canvas中的图像变换
2. Canvas中的渐变
3. Canvas中的文字
4. Canvas中的图片

> Canvas中的图形变换

图形变换都是针对坐标系来说的：

- 平移：`ctx.translate(x,y)`
- 旋转：`ctx.rotate(rad)`
- 缩放：`ctx.scale(x,y)`

> save和restore

用来保存和恢复上下文的环境ctx，**一般成对出现**

- `ctx.save()`，保存当前上下文环境。
- `ctx.restore()`，恢复到上一次的上下文环境

> Canvas中的渐变

1. 线性渐变：`ctx.createLinearGradient(xStart,yStart,xEnd,yEnd)`

`(xStart,yStart)`是线段的起点，`(xEnd,yEnd)`是线段终点。起点到终点之间的颜色呈渐变。

2. `gradient.addColorStop`可以来控制渐变的颜色
3. 渐变可以理解为一种颜色

4. 径向渐变：

`ctx.createRadialGradient(xStart,yStart, radiusStart,xEnd,yEnd,radiusEnd);`

`(xStart,yStart)`是第一个圆的原心，`radiusStart`是第一个圆的半径，`(xEnd,yEnd)`是第二个圆的原心，`radiusEnd`是第二个圆的半径

第一圆到第二个圆之间的颜色呈现渐变。

> Canvas中的文字

描边文字：`ctx.strokeText(text,x,y)`

填充文字：`ctx.fillText(text,x,y);`

设置字体样式：`ctx.font`

- 例如：`ctx.font="bold 100px sans-serif"`
- 设置水平对齐方式：`ctx.textAlign`
- left,start，左对齐，center居中对齐，end,right，右对齐

设置垂直对齐方式：`ctx.textBaseline`

- top，顶对齐，middle，居中，bottom，底部对齐
- 计算文本宽度：`ctx.measuerText(text).width` 须在设置字体样式之后计算

> Canvas图片

绘制图片3种方法

- `ctx.drawImage(image,x,y)`，该方法把图片绘制在`(x,y)`处
- `ctx.drawImage(image,x,y,w,h)`，该方法把图片绘制在`(x,y)`处，并缩放为宽w,高h
- `ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)`，该方法把图片中`(sx,sy)`处的宽sw，高sh的区域，绘制到`(dx,dy)`处，并缩放为宽`dw`，高`dh`

在image加载完成之后绘制：

示例：

```js
var img = new Image();
img.src = 'logo.png';
img.onload = function() {
    ctx.drawImage(img,0,0,40,40,0,0,80,80);
}
```

> Canvas绘制

- Canvas的图形绘制和像素获取
- Canvas阴影绘制
- Canvas剪辑区域
- Canvas曲线绘制

> Canvas图形画刷

`ctx.createPattern`可以创建一个画刷模式，进而可以设置到fillStyle里，进行画刷的填充。

- 函数原型：`ctx.createPattern(image,type)`

type取值:

- `no-repeat`不平铺
- `repeat-x`橫方向平
- `repeat-y`纵方向平铺
- `repeat`全方向平铺

> Canvas像素操作

1. 获取像素

```js
var imageData = ctx.getImageData(x,y,w,h)

返回的是一维数组：[r1,g1,b1,a1,r2,g2,b2,a2...]
```

2. 设置像素

```js
ctx.putImageData(imageData,x,y)

把imageData放在(x,y)处
```

3. 设置像素

```js
ctx.putImageData(imageData, x, y, dirtyX, dirtyY, dirtyW, dirtyH)

只显示（dirtyX,dirtyY）处的宽dirtyW,dirtyH的区域
```

> Canvas阴影绘制

1. `ctx.shadowOffsetX:`阴影x方向的偏移距离
2. `ctx.shadowOffsetY:`阴影y方向的偏移距离
3. `ctx.shadowColor：`阴影的颜色
4. `ctx.shadowBlur：`阴影的模糊半径

效果图：
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0843ce415f044c3db6fa1eba9d91f7dd~tplv-k3u1fbpfcp-zoom-1.image)

> Canvas剪辑区域

1. 设置一个路径；
2. 调用ctx.clip();
3. 再绘制图形。

> Canvas绘制曲线

狐线：

```js
context.arc(x,y,radius, starAngle,endAngle, anticlockwise)

圆心(x,y)  半径radius
从starAngle到endAngle
anticlockwise代表是否逆时针方向
```

> 生成工具

Canvas Quadratic Curve Example

![](https://user-gold-cdn.xitu.io/2020/7/12/17343af6ee133411?w=1137&h=360&f=png&s=43134)

http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html

http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html

二次样条曲线：

```js
context.quadraticCurveTo(qcpx,qcpy, qx,qy)
```

贝塞尔曲线：

```js
context.bezierCurveTo(cp1x,cp1y, cp2x, cp2y, x,y)
```

- Canvas动画，Canvas离屏技术

1. `ctx.clearRect(x,y, width,height)`

清除`(x,y)`点起， 宽width,高height的区域，用于重新绘制

离屏技术是什么：通过在离屏Canvas中绘制元素，再复制到显示Canvas中，从而大幅提高性能的一种技术。

使用离屏技术：

- 静态场景绘制特别耗资源，动态场景绘制简单。为了不每次更新动态场景的时候，都去绘制静态场景。
- 一般把静态场景绘制在离屏canvas上，更新动态场景的时候，把静态场景copy过来，而不是重新绘制。

离屏技术：

一个Canvas中的图形绘制到另一个Canvas方法：

```js
ctx.drawImage(canvas,x,y),该方法把canvas绘制在(x,y)处

ctx.drawImage(canvas,x,y, w,h),该方法把canvas绘制在(x,y)处，并缩放为宽w,高h

ctx.drawImage(canvas, sx, sy, sw, sh, dx, dy, dw, dh)，该方法把canvas中（sx, sy）处的宽sw,高sh的区域，绘制到(dx,dy)处，并缩放为宽dw, 高dh
```

> 对canvas插件的相关了解

什么是Canvas插件，掌握Chart.js插件，了解Chartist.js和HighCharts.js插件

（图表）Chart.js插件：https://www.chartjs.org/

Chartist.js插件是一个简单的响应式图表插件：支持SVG格式（http://gionkunz.github.io/chartist-js/）

HighCharts.js插件：方便快捷的HTML5交互性图标库：https://www.highcharts.com/

> Chartist.js插件与HighCharts.js插件

- Chartist.js配置简单，css和JavaScript分离，响应式图表，支持不同的浏览器尺寸和分辨率。
- HighCharts.js，兼容当今所有的浏览器，包含iPhone，IE，火狐等。

> 响应式布局，它的用户体验友好，响应式网站可以根据不同终端，不同尺寸和不同应用环境，自动调整界面布局，展示内容，提供非常好的视觉效果。响应式布局就是一个网站能够兼容多个终端

### 2. 构建Canvas元素

示例：
```
<style>
#canva {
    border: 1px solid red;
}
</style>
<div>
<canvas id="canva" width="200" height="200"></canvas>
// 绘制宽高200的canvas
</div>
```

1. 使用JavaScript实现绘图的流程

在开始绘图时，先要获取Canvas元素的对象，在获取一个绘图的上下文。

获取Canvas对象 ,使用document对象的getElementById()方法获取。

```js
var canvas = document.getElementById("canvas")

可以使用通过标签名称来获取对象的getElementsByTagName方法
```

2. 创建二维的绘图上下文对象

使用getContext()方法来获取

```js
var context  = canvas.getContext("2d")
```

3. 在Canvas上绘制文字

```js
context.font="98px 黑体"; // 文字样式
context.fillStyle="red"; // 文字颜色
context.textAlign = "center"; // 文字对齐方式
// 绘制文字
context.fillText("达达前端"，100, 123, 234);
```

绘制图像：

使用drawImage()方法可以将图像添加到Canvas画布中，绘制一幅图像，需要有三个重载的方法：

使用：

```js
drawImage(image, x, y) 
// 在画布上定位图像
// 方法在画布上绘制图像、画布或视频。
// 方法也能够绘制图像的某些部分，以及/或者增加或减少图像的尺寸。

drawImage(image, x, y, width, height)
// 在画布上定位图像，并规定图像的宽度和高度

drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight)
// 剪切图像，并在画布上定位被剪切的部分
```

参数：

| 参数 | 描述 |
| :--- | :--- |
| image | 规定要使用的图像，画布或视频 |
| sourceX | 开始剪切的x坐标位置 |
| sourceY | 开始剪切的y坐标位置 |
| sourceWidth | 被剪切图像的宽度 |
| sourceHeight | 被剪切图像的高度 |
| destX | 在画布上放置图像的 x 坐标位置 |
| destY | 在画布上放置图像的 y 坐标位置 |
| destWidth | 要使用的图像的宽度 |
| destHeight | 要使用的图像的高度 |

插入图像：

```js
function Draw() {
    // 获取canvas对象
    var canvas = document.getElementById("canvas"); 
    // 获取2d上下文绘图对象
    var context = canvas.getContext("2d"); 
    // 使用Image()构造函数创建图像对象
    var newImg = new Image(); 
    // 指定图像的文件地址
    newImg.src = "../images/dadaqianduan.jpg"; 
    newImg.onload = function () {
        // 左上角开始绘制图像
        context.drawImage(newImg, 0, 0); 
        context.drawImage(newImg, 250, 100, 150, 200); 
        context.drawImage(newImg, 90, 80, 100, 100, 0, 0, 120, 120);
    }
}
```

在Canvas中绘制文字“达达前端”:

```html
// canvas 宽高200
<canvas id="canvas" width="200" height="200"></canvas>
<style type="text/css">
canvas {
    border: 2px solid #ccc;
}
</style>
<script>
    // 获取canvas
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    // 设置字体
    context.font="98px 黑体";
    // 填充
    context.fillStyle="#036";
    // 文本水平位置
    context.textAlign="center";
    // 执行绘制
    context.fillText("达达前端",100, 120, 200);
</script>
```

### 3.绘制矩形

两个方法：

1. strokeRect() - **矩形边框**
2. fillRect() - **填充矩形区域**
3. strokeStyle - **设置线条的颜色**
4. lineWidth - **设置线条宽度**，默认宽度为1，单位是像素
5. fillStyle - 设置区域或文字的**填充颜色**

绘制矩形边框，使用strokeStyle方法：

```js
// 绘制矩形边框
strokeRect(x,y, width, height);
```

填充矩形区域，使用fillRect()方法：

```js
// 填充矩形区域
fillRect(x,y,width,height);
```

> 绘制矩形

```js
// 绘制矩形
function drawRect() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    // 描边
    context.strokeStyle = "#000";
    // 线条宽度
    context.lineWidth = 1;
    // 矩形边框
    context.strokeRect(50,50, 150, 100);
    // 填充
    context.fillStyle="#f90";
    // 矩形
    context.fillRect(50,50,150,100);
}
window.addEventListener("load",DrawRect,true);
```

使用clearRect方法，可以擦除指定的矩形区域：

```js
// 擦除指定的矩形区域
context.clearRect(x,y,width,height)
```

### 4.体验canvas绘图

在实际开发中，画布是默认300*150的大小。

![](https://user-gold-cdn.xitu.io/2020/7/14/1734a2c8e447ddfc?w=318&h=202&f=png&s=7257)

示例：

```html
// 为画布设置边框
canvas {
    border: 1px solid #ccc;
}
// 准备画布，默认是300*150
// 设置画布的大小
<canvas width="1200" height="800"></canvas>
// 准备绘制工具
<script>
// 获取元素
var myCanvas = document.querySelector('canvas');
// 获取上下文，绘制工具箱
var ctx = myCanvas.getContext('2d');
// 移动画笔
ctx.moveTo(100,100);
// 绘制直线，轨迹
ctx.lineTo(200,100);
// 描边
ctx.stroke()
```

#### 创建Canvas元素 

向 HTML5 页面添加 canvas 元素

```html
// 规定元素的 id、宽度和高度
<canvas id="myCanvas" width="200" height="100"></canvas>
```

#### 图形绘制

需要理解些概念：  

- 路径的概念
- 路径的绘制
    + 描边 `stroke()`  
    + 填充 `fill()`  
- 闭合路径
    + 手动闭合
    + 程序闭合 `closePath()`
- 开启新的路径 `beginPath()`

#### 设置样式

- 画笔的状态
    + lineWidth 线宽，默认`1px`
    + lineCap 线末端类型：`(butt默认)、round、square` 
    + lineJoin 相交线的拐点 `miter(默认)、round、bevel`
    + strokeStyle 线的颜色
    + fillStyle 填充颜色
    + `setLineDash()` 设置虚线
    + `getLineDash()` 获取虚线宽度集合
    + `lineDashOffset` 设置虚线偏移量（负值向右偏移）

#### 矩形绘制

- `rect(x,y,w,h)` 没有独立路径
- `strokeRect(x,y,w,h)` 有独立路径，不影响别的绘制
- `fillRect(x,y,w,h)` 有独立路径，不影响别的绘制
- `clearRect(x,y,w,h)` 擦除矩形区域

#### 圆弧绘制

- 弧度概念
- arc()
    + x 圆心横坐标
    + y 圆心纵坐标
    + r 半径
    + `startAngle` 开始角度
    + `endAngle` 结束角度
    + `anticlockwise` 是否逆时针方向绘制（默认false表示顺时针；true表示逆时针）

#### 绘制文本

- `ctx.font` = '微软雅黑' 设置字体
- `strokeText()`
- `fillText(text,x,y,maxWidth)`
    + text 要绘制的文本
    + x,y 文本绘制的坐标（文本左下角）
    + maxWidth 设置文本最大宽度，可选参数
- `ctx.textAlign` 文本水平对齐方式，相对绘制坐标来说的
    + left
    + center
    + right
    + start 默认
    + end
- `ctx.direction` 属性`css(rtl ltr) start和end`于此相关
    + 如果是`ltr,start和left`表现一致
    + 如果是`rtl,start和right`表现一致
- `ctx.textBaseline` 设置基线（垂直对齐方式  ）
    + top 文本的基线处于文本的正上方，并且有一段距离
    + middle 文本的基线处于文本的正中间
    + bottom 文本的基线处于文本的证下方，并且有一段距离
    + hanging 文本的基线处于文本的正上方，并且和文本粘合
    + alphabetic 默认值，基线处于文本的下方，并且穿过文字
    + ideographic 和bottom相似，但是不一样
- `measureText()` 获取文本宽度obj.width

#### 绘制图片

- `drawImage()`
    + 三个参数`drawImage(img,x,y)`
        - img 图片对象、canvas对象、video对象
        - x,y 图片绘制的左上角
    + 五个参数`drawImage(img,x,y,w,h)`
        - img 图片对象、canvas对象、video对象
        - x,y 图片绘制的左上角
        - w,h 图片绘制尺寸设置(图片缩放，不是截取)
    + 九个参数`drawImage(img,x,y,w,h,x1,y1,w1,h1)`
        - img 图片对象、canvas对象、video对象
        - x,y,w,h 图片中的一个矩形区域
        - x1,y1,w1,h1 画布中的一个矩形区域

#### 坐标变换

- 平移 移动画布的原点
    + `translate(x,y)` 参数表示移动目标点的坐标
- 缩放
    + `scale(x,y)` 参数表示宽高的缩放比例
- 旋转
    + `rotate(angle)` 参数表示旋转角度

### 5.使用路径

1. lineTo()
2. rect()
3. arc()
4. fill()
5. stroke()

> 创建绘图路径

使用方法：`beginPath()和closePath()`，分别表示开始一个新的路径和关闭当前的路径

1. 使用beginPath()方法创建一个新的路径
2. moveTo(x,y)，开始绘图时的坐标
3. lineTo(x,y)，绘制直线到目标坐标
4. arc(x,y, radius, startAngle,endAngle, counterclockwise)

- x,y描述弧的圆形的圆心坐标
- radius圆形的半径
- startAngle描述弧的开始点的角度
- endAngle描述弧的结束点的角度
- counterclockwise，true值，表示逆时针方向，否则反之

5. `rect(x,y, width, height)`：xy,起点坐标，矩形的宽高，绘制矩形路径

> closePath方法关闭当前路径

#### 绘制图形样式

1. `stokeStyle` 属性设置矩形边框的颜色
2. `lineWidth` 属性设置边框的宽度
3. `fillStyle` 属性设置填充的颜色

绘制网格，网格大小

```js
var grid = 10;
// 画多少条x轴方向的线，横向的条数，画布的高度
var canvasHeight = myCanvas.height
var canvasWidth = myCanvas.width
// 画布宽高
ctx.canvas.width
ctx.canvas.height
// 网格大小
var gridSize = 10;
var canvasHeight = ctx.canvas.height;
var xLineTotal = canvasHeight / gridSize
// 总线条
var xLineTotal = Math.floor(canvasHeight / gridSize);
for (var i=0; i<=xLineTotal; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i*gridSize-0.5);
    ctx.lineTo(canvasWidth, i*gridSize-0.5);
    ctx.strokeStyle='#eee';
    ctx.stroke();
}
// 画多少条y轴方向的线
var yLineTotal = canvasWidth / gridSize
var yLineTotal = Math.floor(canvasWidth / gridSize);
for (var i=0; i <= yLineTotal; i++) {
    ctx.beginPath();
    ctx.moveTo(i*gridSize-0.5,0);
    ctx.lineTo(i*gridSize-0.5,canvasHeight);
    ctx.strokeStyle='#eee';
    ctx.stroke();
}
```

绘制坐标系，确定圆点，确定离画布旁边的距离，确定坐标轴的长度，确定箭头的大小，绘制箭头填充。

```js
// 绘制坐标系
var space = 20;
var arrowSize = 10;
// 画布宽高
var canvasWidth = ctx.canvas.width;
var canvasHeight = ctx.canvas.height;
// 坐标系
var x0 = space;
var y0 = canvasHeight - space;
// 绘制x轴
ctx.moveTo(x0,y0);
ctx.lineTo(canvasWidth-space, y0);
ctx.stroke();
// 箭头
ctx.lineTo(canvasWidth-space-arrowSize, y0 + arrowSize/2);
ctx.lineTo(canvasWidth-space-arrowSize, y0 - arrowSize/2);
ctx.lineTo(canvasWidth-space, y0);
ctx.fill();
ctx.stroke();
// 绘制y轴
ctx.beginPath();
ctx.moveTo(x0, y0);
ctx.lineTo(space, space);
ctx.stroke();
// 箭头
ctx.lineTo(space+space-arrowSize/2, space + arrowSize);
ctx.lineTo(space-space-arrowSize/2, space - arrowSize);
ctx.lineTo(space, space);
ctx.fill();
ctx.stroke();
// 绘制点
var coordinate = {
    x: 146,
    y: 356
}
// 点尺寸
var dottedSize = 6;
ctx.moveTo(coordinate.x - dottedSize/2, coordinate.y - dottedSize/2);
ctx.lineTo(coordinate.x + dottedSize/2, coordinate.y - dottedSize/2);
ctx.lineTo(coordinate.x + dottedSize/2, coordinate.y + dottedSize/2);
ctx.lineTo(coordinate.x - dottedSize/2, coordinate.y + dottedSize/2);
ctx.closePath();
ctx.fill();
```

#### arc方法和rect方法

arc创建一个圆形，rect创建一个矩形，最后调用stroke()方法和fill()方法

```js
// 圆形
context.arc(100,100,30,0,Math.PI*2,true);
```

使用beginPath()方法可以新创建一个子路径，closePath()方法用来闭合路径的。

> 绘制两条直线

```js
function DrawLine() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    // 创建绘制过程
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(120,120);
    context.lineTo(120,60);
    context.closePath();
    context.strokeStyle="#000";
    // 执行绘制
    context.stroke();
}
```

- beginPath() **方法开始一条路径，或者重置当前的路径**
- closePath() **方法创建从当前点到开始点的路径**

如果不用`beginPath()`方法，绘制图形时不再创建子路径，第一次的图形在执行过程中会被绘制填充两次。

> 图形组合

属性 `globalCompositeOperation` 设置如何在画布上组合颜色

12中组合类型：

| 值 | 说明 |
| :--- | :--- |
| copy | 只绘制新图形，删除其他所有内容 |
| darker | 在图形重叠的地方，颜色由两个颜色值相减后决定 |
| destination-atop | 已有的内容只在它和新的图形重叠的地方保留，新图形绘制在内容后 |
| destination-in | 在新图形和已有画布重叠的地方，已有内容都保留，所有其他内容成为透明 |
| destination-out | 在新图形和已有内容不重叠的地方，已有内容保留所有其他内容成为透明 |
| destination-over | 新图形绘制于已有内容的后面 |
| lighter | 在图形重叠的地方，颜色由两种颜色值的叠加值来决定 |
| source-atop | 只在新图形和已有内容重叠的地方才绘制新图形 |
| source-in | 在新图形和已有内容重叠的地方，新图形才会被绘制，所有其他内容成为透明 |
| source-out | 只在和已有图形不重叠的地方绘制新图形 |
| source-over | 新图形绘制于已有图形的顶部 |
| xor | 在重置和正常绘制的其他地方，图形都成为透明 |

> 绘制曲线

```js
// 圆形，曲线
arc(x, y, radius, startAngle, endAngle, counterclockwise);
```

- `x,y` 表示弧的圆形的**圆心坐标**
- `radius` 表示弧的圆形的**半径**
- `startAngle` 表示圆弧的**开始点的角度**
- `endAngle` 表示圆弧的**结束点的角度**
- `counterclockwise` 若true表示逆时针，false反之顺时针

```js
<style>
// 画布背景颜色
#canvas {
    background: #000;
}
</style>
// 画布宽度400
<canvas id="canvas" width="400" height="400">
<script>
 var canvas = document.getElementById('canvas');
 var context= canvas.getContext('2d')
 // 开始
 context.beginPath();
 // 绘制圆形
 context.arc(100, 100, 50, 0, Math.PI*2, true);
 // 关闭
 context.closePath();
 // 填充颜色
 context.fillStyle = 'rgb(255,255,255)';
 context.fill();
</script>
```

如果使用`css`设置宽高，画布会按照`300*150`的比例进行缩放，将`300*150`的页面显示在`400*400`的容器中。

```js
// 设置画布宽度
var cx = canvas.width = 400;
var cy = canvas.height = 400;
```

使用js动态设置宽高。

> 建议使用HTML中的width和height，或者js动态设置宽高

创建一个canvas标签，第一步：

```js
// 获取这个canvas的上下文对象
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
```

方法：

- `fill()` 填充路径
- `stroke()` 描边
- `arc()` 创建圆弧
- `rect()` 创建矩形
- `fillRect()` 绘制矩形路径区域
- `strokeRect()` 绘制矩形路径描边
- `clearRect()` 在给定的矩形内清除指定的像素
- `beginPath()` 起始一条路径，或重置当前路径
- `moveTo()` 把路径移动到画布中的指定点，不创建线条
- `lineTo()`添加一个新点，在画布中创建从该点到最后指定点的线条
- `clip()` 从原始画布剪切任意形状和尺寸的区域
- `arcTo()` 创建两切线之间的弧/曲线
- `quadraticCurveTo()` 创建二次方贝塞尔曲线
- `bezierCurveTo()` 创建三次方贝塞尔曲线
- `isPointInPath()` 如果指定的点位于当前路径中，则返回 true，否则返回 false

辅助线绘制弧线：`arcTo()` 方法

语法：

```js
// 辅助线绘制弧线
arcTo(x1, y1, x2, y2, radius)
```

> arcTo()方法绘制一条弧线

代码：

```js
// 绘制一条弧线
function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    // 开始绘制
    context.beginPath();
    // 移动点
    context.moveTo(80, 120);
    // 绘制线条
    context.lineTo(150, 60);
    context.lineTo(180, 130);
    // 描边
    context.strokeStyle="rgba(0,0,0,0.4)";
    context.lineWidth=2;
    context.stroke();
    context.beginPath();
    context.moveTo(80,120);
    context.arcTo(150,60,180,130,50);
    context.strolkeStyle="rgba(255,135,0,1)";
    context.stroke();
}
```

#### 绘制二次样条曲线

`quadraticCurveTo()`方法：

```js
quadraticCurveTo(cpX, cpY, x, y);
// cpX, cpY描述了控制点的坐标，x, y描述了曲线的终点坐标
```

#### 绘制贝济埃曲线

`bezierCurveTo()`方法：它是应用于二维图形应用程序的数学曲线。

```
bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, x, y);
// cp1X, cp1Y 表示第一个控制点的坐标 
// cp2X, cp2Y 表示第二个控制点的坐标 
// x, y表示曲线的终点坐标
```

绘制曲线：

```js
function draw() {
    // 绘制曲线
    var canvas = document..getElementById('canvas');
    var context = canvas.getContext('2d');
    // 开始绘制
    context.beginPath();
    // 移动
    context.moveTo(100,180);
    // 连线
    context.lineTo(110,80);
    context.moveTo(260,100);
    context.lineTo(300,200);
    // 描边
    context.strokeStyle="rgba(0,0,0,0.4)";
    // 设置宽度
    context.lineWidth=3;
    context.stroke();
    context.beginPath();
    context.moveTo(100,180);
    // 绘制贝济埃曲线
    context.bezierCurveTo(110,80,260,100,300,200);
    // 设置宽度
    context.lineWidth = 3;
    context.strokeStyle="rgba(255,135,0,1)";
    context.stroke();
}
```

#### 四分之一圆

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be8e79ce5eca49449c3935e3f5bbb902~tplv-k3u1fbpfcp-zoom-1.image)

```js
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// 画布宽度200
var canX = canvas.width = 200
var canY = canvas.height = 200;
// 开始绘制
context.beginPath();
// 四分之一圆
context.arc(100, 100, 50, 0, Math.PI*0.5, false);
context.strokeStyle="white"
context.stroke();

context.beginPath();
context.lineTo(200, 200);
context.lineTo(200, 100);
context.lineTo(100,50);
context.strokeStyle = '#fff';
context.stroke();
```

- `lineCap` 设置或返回线条的**结束断点样式**
- `lineJoin` 设置或返回**两条线相交时，产生拐角类型**
- `lineWidth` 设置或返回**当前的线条宽度**
- `miterLimit` 设置或返回**最大斜接长度**

1. `fillRect()` 绘制一个实心矩形
2. `strokeRect()` 绘制一个空心矩形

设置阴影，`shadowBlur` -`context.shadowBlur` = 20

- `createLinearGradient()`	创建**线性渐变**
- `createPattern()`	**在指定的方向上重复指定的元素**
- `createRadialGradient()`	创建**放射状/环形的渐变**
- `addColorStop()`	规定渐变对象中的**颜色和停止位置**

```js
gradient.addColorStop(stop,color)
```

1. `scale()` 缩放当前绘图变大或变小
2. `rotate()` 旋转当前绘图
3. `translate()` 重新映射画布的(0,0)位置

### 6.使用图像

> 使用三种方法插入图像

```js
function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    // image实例
    var newImg = new Image();
    newImg.src='../images/dada.jpg' // 指定图像的文件地址
    newImg.onload = function(){
        // 绘图
        context.drawImage(newImg, 0, 0);
        context.drawImage(newImg, 250,100, 150,200);
        context.drawImage(newImg, 90,80,100,100,0,0,120,120);
    }
}
```

> 在插入图像之前，需要考虑**图像加载的时间**，如果图像没加载完成就已经执行drawImage()方法，就不会显示任何图片。

### 7.绘制渐变

提供了两种渐变的创建的方法：

```js
// 创建线性渐变
createLinearGradient()方法

// 创建径向渐变
createRadialGradient()方法
```

> 设置渐变颜色和过渡方式

语法如下：

1. offset是一个范围在0.0到1.0之间的浮点值
表示渐变的开始点和结束点之间的一部分
2. offset的0为开始点，1为结束点

```js
addColorStop(offset, color);
```

#### 绘制线性渐变的矩形

```js
function draw() {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    // 创建渐变对象，线性渐变
    var grd = context.createLinearGradient(0,0,300,0)
    // 设置渐变颜色
    grd.addColorStop(0, '#xxx'); // 设置颜色
    grd.addColorStop(1, '#xxx'); // 设置颜色
    // 将填充样式设置为线性渐变对象
    context.fillStyle = grd;
    context.fillRect(0,0,300,80);
}
```

#### 绘制径向渐变的矩形

```js
function draw() {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    // 径向渐变
    var grd = context.createRadialGradient(50,50,0,100,100,90);
    // 设置渐变颜色以及方式
    grd.addColorStop(0,'#xxx');
    grd.addColorStop(1,'#xxx');
    context.fillStyle = grd;
    context.beginPath();
    // 圆形
    context.arc(100,100,90,0,Math.PI*2,true);
    context.fill();
}
```

#### 描边属性

线帽属性：`lineCap`，表示**指定线条的末端如何绘制**
值：`lineCap: butt, round, square`，当线条具有一定的宽度才能表现出来。

```js
butt
// 定义了线段没有线帽
round
// 定义了线段的末端为一个半圆形的线帽
square
// 定义了线段的末端为一个矩形的线帽
```

线条的连接属性`lineJoin`，用于两条线条到的连接方式：

`miter` 
两条线段的外边缘一直延伸到它们相交，属性miterLimit是用来描述如何绘制两条线段的交点，是表示延伸长度和线条长度的比值。

默认为10，只有`miter`使用时有效

```js
lineJoin = [value];

round 
// 两条线段的外边缘应该和一个填充的弧结合
bevel 
// 两条线段的外边缘应该和一个填充的三角形相交
```

### 8.模式

语法如下：

```js
createPattern(image, repetitionStyle)
```

1. `repeat` 表示图像在各个方向上循环平铺
2. `repeat-x` 表示图像在横向上循环平铺
3. `repeat-y` 表示图像在纵向上循环平铺
4. `no-repeat` 表示图像只使用一次

```js
function draw() {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    var img = new Image(); 
    // 使用Image()构造函数创建图像对象
    img.src='../images/xxx' 
    // 指定图像的文件地址
    img.onload = function() {
        // 绘图模式
        var ptrn = context.createPattern(img, 'repeat');
        // 填充样式
        context.fillStyle = ptrn;
        // 填充矩形
        context.fillReat(0,0,500,200);
    }
}
```

移动变化：

```js
// 移动
translate(dx,dy);
// 绘制
function draw() {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    // 设置移动偏移量
    context.translate(200, 200);
    // 绘制一个圆形
    ArcFace(context);
}
// 绘制一个圆形
function ArcFace(context) {
    // 绘制一个圆形边框
    context.beginPath();
    // 绘制圆形
    context.arc(0,0,90,0,Math.PI*2,true);
    // 线宽
    context.lineWidth=5;
    // 描边
    context.strokeStyle='#f90';
    context.stroke();
    // 绘制
    context.beginPath();
    context.moveTo(-30, -30);
    context.lineTo(-30, -20);
    context.moveTo(30, -30);
    context.lineTo(30, -20);
    context.moveTo(-20, 30);
    // 曲线
    context.bezierCurveTo(-20, 44, 20, 30, 30, 20);
    context.strokeStyle='#000';
    context.lineWidth=10;
    context.lineCap = 'round';
    // 笑脸😀
    context.stroke();
}
```

缩放变换，语法如下：

```js
scale(sx, sy);
// sx为水平方向上的缩放因子，sy为垂直方向上的缩放因子
```

```js
// 示例
function draw() {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContent('2d')
    // 移动
    context.translate(200,200);
    // 缩放
    context.scale(0.5,0.5);
    ArcFace(context);
}
```

旋转变换：

```js
rotate(angle)
```

```js
// 旋转例子
function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d')
    context.translate(200,200);
    // 旋转
    context.rotate(Math.PI/6);
    context.scale(0.5, 0.5)
    ArcFace(context)
}
```

矩形变形，语法如下：

```js
transform(m1x,m1y,m2x,m2y,dx,dy); // 移动，缩放，旋转

1. 移动translate (dx, dy)
2. 缩放scale (sx,sy)
3. 旋转rotate (A)
```

### 9.使用文本

绘制文本的方法：

1. `fillText(text, x, y, maxwidth)`
2. `strokeText(texxt, x, y, maxwidth)`

- `text`表示要绘制的文本
- 参数x表示绘制文字的**起点横坐标**
- 参数y表示绘制文字的**起点纵坐标**
- 参数`maxwidth`表示显示文本的最大宽度

文本属性表：

| 属性 | 说明 |
| :--- | :--- |
| font | 数组字体样式 |
| textAlign | start,end,left,right,center |
| textBaseline | top,hanging,middle,alphabetic,ideographic,bottom |

> 绘制文本

```js
// 绘制文本示例
function draw() {
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    // 填充颜色
    context.fillStyle = '#000';
    context.font = 'bold 12px impact';
    // 绘制文本
    context..fillText('达达前端，魔王哪吒', 10, 10);
    context.strokeStyle = '#000';
    context.font = 'bold italic 12px impact';
    // 绘制文本
    context.strokeText('jeskson', 10, 10);
}
```

绘制获取文本宽度的`measureText()`方法：

```js
measureText(text)
```

测量文本的宽度：

```js
function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillStyle='#000';
    context.font='bold 10px impact';
    // 测量文本的宽度
    var tm = context.measureText(txt);
    context.fillText(txt,10,10);
    context.fillText(tm.width, tm.width+10, 50);
    context.strokeStyle = '#000';
    context.font = 'bold italic 10px impact';
    // 测量文本的宽度
    tm = context.measureText(txt);
    context.strokeText(txt,10,10);
    context.strokeText(tm.width, tm.width+10, 100);
}
```

> 阴影效果

阴影属性表：

| 属性 | 说明 |
| :--- | :--- |
| shadowColor | 使用半透明颜色 |
| shadowOffsetX | 阴影的横向位移量 |
| shadowOffsetY | 阴影的纵向位移量 |
| shadowBlur | 高斯模糊 |

> 状态保存和恢复

1. 状态保存方法`save()`
2. 状态恢复方法`restore()`，恢复最后一次保存的状态

状态的保存和恢复是**通过数据栈进行的**

### 10.操作像素

1. 图像数据对象`ImageData`
2. 获取图像数据的方法`getImageData()`，用于从`Canvas`上下文中获取图像数据。`getImageData(sx, sy, sw, sh);`
3. 绘制图像数据的方法`putImageData()`
`getImageData(imagedata,dx,dy[,..])`
4. 创建图像数据的方法`createImageData()`

### 绘制海报

```
<template>
	<view class="backgroundColor">
	    // 画布
		<canvas class="isCan" canvas-id="dadaPoster" :style="{ width: cansWh.cansWidth + 'px', height: cansWh.cansHeight + 'px' }"></canvas>
		// 效果图
		<image class="showImg" mode="aspectFit" v-if="tempImgShow" @longpress="longpress" :src="tempImg"></image>
		// 按钮
		<view v-if="tempImgShow" class="fixedBox flex flex-direction">
			<view class="boxTop text-white">长按图片发送给朋友</view>
			<view class="boxDown">
				<button class="flexBtn" hover-class="btnHover" @click="closeCans">关闭</button>
			</view>
		</view>
	</view>
</template>
data() {
	return {
		tempImgShow: false,
		tempImg: '',
		cansWh: { // 画布宽高
			cansWidth: 800,
			cansHeight: 900,
		},
		qrcode: { // 举例二维码
			top: 0.85,
			left: 0.035,
			width: 0.23,
			qrHeight: null,
		},
		...
		productImg: { // 产品图
			top: 0.1,
			left: 0.03,
			width: 1,
			height: 0.5,
		},
	};
},
```

```js
// 绘制图
drawImg(method,param){
	return new Promise((resolve, reject)=>{
		if(param.url.indexOf('http') === 0){
			uni.downloadFile({
				url: param.url,
				success(res) {
					param.url = res.tempFilePath
					method(param).then(res=>{
						resolve(res)
					}).catch(err=>{
						reject(err)
					})
				},
				fail(error) {
					console.log(error)
				}
			})
		}else{
			method(param).then(res=>{
				resolve(res)
			}).catch(err=>{
				reject(err)
			})
		}
	})
}
```

```js
// 绘制圆形
drawCircle(param) {
var that = this,x = param.x,y = param.y,r = param.r,url = param.url;
return new Promise((resolve, reject) => {
	x = Math.ceil(that.cansWh.cansWidth * x);
	y = Math.ceil(that.cansWh.cansHeight * y);
	r = r > 1 ? r : Math.ceil(that.cansWh.cansWidth * r);
	that.ctx.save();
	var d = 2 * r;
	var cx = x + r;
	var cy = y + r;
	that.ctx.arc(cx, cy, r, 0, 2 * Math.PI);
	that.ctx.clip();
	that.ctx.drawImage(url, x, y, d, d);
	that.ctx.restore();
	that.ctx.draw(true, res=>{
		resolve();
	});
});
}
```

```js
// 绘制图
drawPic(item) {
return new Promise((resolve, reject) => {
	let x, y, w, h, r;
	y = item.sTop <= 1 ? this.cansWh.cansHeight * item.sTop : item.sTop;
	w = item.sWidth <= 1 ? this.cansWh.cansWidth * item.sWidth : item.sWidth;
	h = item.sHeight <= 1 ? this.cansWh.cansHeight * item.sHeight : item.sHeight;
	if (item.sLeft == 'center') {
		x = item.sWidth <= 1 ? this.cansWh.cansWidth * (0.5 - item.sWidth / 2) : this.cansWh.cansWidth * 0.5 - item.sWidth /
			2;
	} else {
		x = this.cansWh.cansWidth * item.sLeft;
	}
	if (item.r) {
		r = item.r;
		this.ctx.save();
		if (w < 2 * r) r = w / 2;
		if (h < 2 * r) r = h / 2;
		this.ctx.beginPath();
		this.ctx.moveTo(x + r, y);
		this.ctx.arcTo(x + w, y, x + w, y + h, r);
		this.ctx.arcTo(x + w, y + h, x, y + h, r);
		this.ctx.arcTo(x, y + h, x, y, r);
		this.ctx.arcTo(x, y, x + w, y, r);
		this.ctx.closePath();
		this.ctx.clip();
		this.ctx.drawImage(item.url, x, y, w, h);
		this.ctx.restore(); // 返回上一状态
	} else {
		this.ctx.drawImage(item.url, x, y, w, h);
	}
	this.ctx.draw(true, res=>{
		resolve();
	});
});
}
```

```js
// 保存
saveCans() {
let tempRatio = 1;
uni.canvasToTempFilePath({
x: 0,
y: 0,
width: this.cansWh.cansWidth * tempRatio,
height: this.cansWh.cansHeight * tempRatio,
destWidth: this.cansWh.cansWidth * tempRatio * 2,
destHeight: this.cansWh.cansHeight * tempRatio * 2,
canvasId: 'dadaPoster',
success: (res) => {
	this.tempImg = res.tempFilePath;
	setTimeout(() => {
		this.tempImgShow = true;
	}, 100);
	uni.hideLoading();
},
fail: (res) => {
	console.log(res);
	uni.hideLoading();
}
},
);
}
```

### 小结

#### canvas标签的使用

```js
// canvas标签的使用
<canvas width="100" height="100"></canvas>
// 获取canvas
var canvas = document.getElementById('target')
if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
}else {
    alert('该浏览器版本过低，请更换')
}

// 矩形
fillRect( x , y , width , height) // 填充
strokeRect( x , y , width , height) // 空心
clearRect( x, y , width , height ) // 清除透明 
var grd = ctx.createLinearGradient( x1 ,y1 ,x2 ,y2); //线性渐变
var grd = ctx.createRadialGradient(x1 ,y1 ,r1 ,x2 ,y2 ,r2);//径向渐变
```

曲线

1. 二次贝塞尔曲线`quadraticCurveTo( cp1x, cp1y , x ,y )`   
`(cp1x,cp1y) 控制点    (x,y)结束点`
2. 三次贝塞尔曲线`bezierCurveTo( cp1x, cp1y ,cp2x , cp2y ,x , y )`
`（cp1x,cp1y）控制点1   (cp2x,cp2y) 控制点2  (x,y)结束点`

![](https://user-gold-cdn.xitu.io/2020/7/25/1738553538813986?w=950&h=771&f=png&s=82322)

![](https://user-gold-cdn.xitu.io/2020/7/25/173855636861d554?w=1051&h=714&f=png&s=86062)

![](https://user-gold-cdn.xitu.io/2020/7/25/1738559b299af0ea?w=1102&h=684&f=png&s=83476)

![](https://user-gold-cdn.xitu.io/2020/7/25/173855beb2e70d9b?w=1149&h=723&f=png&s=94019)

![](https://user-gold-cdn.xitu.io/2020/7/25/17385604db325aa3?w=1172&h=673&f=png&s=82228)

![](https://user-gold-cdn.xitu.io/2020/7/25/173856508c115fae?w=1049&h=476&f=png&s=46552)

### HTML5绘图制作海报

```html
<body>
    <img src="img/bg.png" id="img1" style="display: block" width="1200" height="800" />
    <img src="img/dada.png" id="img2" style="display: block" width="100" height="100" />
    <img id="img3" />
    <button onclick="draw()" id="btn">点击下载</button>
    
    <script>
        function draw() {
            var img1 = document.getElementById("img1"),
            var img2 = document.getElementById("img2"),
            var img3 = document.getElementById("img3");
            
            var img1.width = 1200;
            var img1.height = 800;
            var img2.width = 100;
            var img2.height = 100;
            
            var canvas = document.createElement("canvas"),
                context = canvas.getContext("2d");
            // 绘制宽度
            canvas.width = img1.width;
            // 绘制高度
            canvas.height = img1.height; 
            /**
             * context.drawImage(image,x,y,w,h)
             * var img=new Image(); img.src="url(...)";
             * x:绘制图像的x坐标
             * y:绘制图像的y坐标
             * w:绘制图像的宽度
             * h:绘制图像的高度
             */
             
            context.drawImage(img1, 0, 0, img1.width, img1.height);
            // 将 img2 加入画布
            context.drawImage(img2, 100, 100, img2.width, img2.height);
            // 文字填充颜色
            context.fillStyle = '#333';
            // 文字字体
            context.font = 'bold 45px 黑体';
            // 设置文字
            var name_text = '达达前端，魔王哪吒';
            // 获取文字的宽度
            var name_width = context.measureText(name_text).width;
            // 获取除去文本后的一半的宽度
            var x = (canvas.width - name_width) / 2;
            
            /**
             * context.font:设置字体样式
             * context.textAlign:水平对齐方式
             * context.textBaseline:垂直对齐方式
             * context.measureText(text):计算字体长度(px)
             */
            context.fillText(name_text, x, 450);
            context.fillStyle = '#333'; // 文字填充颜色
            context.font = '25px bold 黑体';
            var con_1 = 'dadaqianduan';
            var con_2 = '达达';
            /**
             * text:要绘制的文字
             * x:文字起点的x坐标轴
             * y:文字起点的y坐标轴
             */
            context.fillText(con_1, x, 400);
            var con_width_2 = context.measureText(con_2).width;
            context.fillText(con_2, canvas.width - x - con_width_2, 400);
            context.stroke();
            // 将画布内容导出
            var src = canvas.toDataURL();
            img3.src = src;
            const a = document.createElement("a");
            a.href = src;
            a.download = '自定义.png';
            a.click();
        }
    </script>
</body>
```

### html5绘图操作（html2canvas）

```js
script引入文件

html2canvas(content, { //content是将要截图的div元素
    scale: 2,
    logging: false,  //在console中输出信息
    useCORS: true  //允许跨域
    //proxy: string,   //代理地址
    //timeout: number   //超时时间
}).then(function(canvas) {
    let dataUrl = canvas.toDataURL()
    console.log(dataUrl)
})
```

`crossOrigin`属性设置成`Anonymous`就可以跨域? - 并不可以的哦！

1. 后台解决跨域问题
2. 转成`base64`格式（后端，前端，建议前端）

### html5移动端生成海报

大致效果：
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c99a8a537d54b9bbaeb61ecaead1eda~tplv-k3u1fbpfcp-zoom-1.image)

```js
<script>
var code_model = '<div id="qrcode" style="position: fixed; opacity: 0;"></div>', // 放置二维码
    canvas_model = '<canvas width="1200" height="800" style="position: fixed;opacity:0;" id="myCanvas"></canvas>', // 放置canvas
    poster_model = '<div class="poster_container"><div class="poster"><img src="" alt="" class="poster_img"><p class="save_poster">长按保存图片至手机相册</p><p style="margin-top: 0.5rem" class="aaaa"></p></div></div>';
    //poster_model为效果图
$("body").append(code_model, canvas_model, poster_model);
$.ajax({
    url: "/photo/dada",
    data: {
        id: id
    },
    success: function (res) {
        $.hideLoading();
        if (res.e = "1111") {
            if (!res.data.is_buy) {
                location.href = res.data.jump_url;
                return false;
            }
            $(".poster").show();
            
            var data_base = res.data.poster_info;
            new QRCode('qrcode', {
                text: data_base.url,
                width: 100,
                height: 100,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
            var c = document.getElementById("myCanvas"), 
            cxt = c.getContext("2d");
            var img = new Image(), imgUrl, personName = data_base.name;
            //跨域问题
            img.crossOrigin = 'anonymous';
            img.src = data_base.image;
            img.onload = function () {
                //图片加载为异步加载
                cxt.drawImage(img, 0, 0);
                cxt.save();
                cxt.beginPath();
                cxt.arc(100, 200, 33, 0, 2 * Math.PI, true);
                cxt.strokeStyle = '#fff';
                cxt.stroke();
                cxt.clip();
                var img_head = new Image();
                img_head.crossOrigin = 'anonymous';
                var avatar_height = data_base.avatar_height, avatar_width = data_base.avatar_width;
                img_head.src = data_base.avatar;
                img_head.onload = function () {
                    cxt.drawImage(img_head, 0, 0, avatar_height, avatar_width, 54, 520, 80, 80);
                    cxt.restore();
                    var img_code = new Image();
                    img_code.crossOrigin = 'anonymous';
                    cxt.lineWidth = "4";
                    cxt.strokeStyle = '#FFF';
                    cxt.rect(80, 80, 400, 400);
                    cxt.stroke();
                    setTimeout(function () {
                        img_code.src = $("#qrcode").find("img").attr("src");
                        img_code.onload = function () {
                            cxt.drawImage(img_code, 0, 0, 100, 100, 450, 450, 80, 80);
                            cxt.font = '21px 黑体';
                            cxt.fillStyle = "#000";
                            cxt.fillText(personName, 250, 520);
                            imgUrl = c.toDataURL("image/png", 1);
                            $(".poster_img").attr("src", imgUrl);
                            $(".poster_container").show();
                        };
                    }, 0);
                };
            };
        } else {
            $.toast(res.m, "text");
        }
    }
});
</script>
```

### 微信小程序所使用的绘图api

`CanvasContext``canvas` 组件的绘图上下文

`CanvasContext` 是旧版的接口， 新版 `Canvas 2D` 接口与 `Web` 一致。

- `string|CanvasGradient fillStyle` - 填充颜色
- `string|CanvasGradient strokeStyle` - 边框颜色
- `number shadowOffsetX` - 阴影相对于形状在水平方向的偏移
- `number shadowOffsetY` - 阴影相对于形状在竖直方向的偏移
- `number shadowColor` - 阴影的颜色
- `number shadowBlur` - 阴影的模糊级别
- `number lineWidth` - 线条的宽度
- `string lineCap` - 线条的端点样式
- `string lineJoin` - 线条的交点样式

lineJoin

| 值 | 说明 |
| :--- | :--- |
| bevel | 斜角 |
| round | 圆角 |
| miter | 尖角 |

- `number miterLimit` - 最大斜接长度
- `number lineDashOffset` - 虚线偏移量，初始值为0

几个相关的画图api [点这里](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html)

```html
<view class="photoCan">
  <canvas style="width: 375px; height: 612px; position:fixed; top:9999px; left:0; z-index:223;" canvas-id="mycanvas"></canvas>
  <image src="{{imagePath}}" mode="widthFix"></image>
</view>
```

```js
const app = getApp()
const setText = (context, fs, color, x, y, c) => {
  context.setFontSize(fs);
  context.setFillStyle(color);
  context.setTextAlign('left');
  context.fillText(c, x, y);
  context.restore();
};

Page({
  data: {
    imagePath:''
  },
  onLoad(){
    var that=this;
    wx.downloadFile({
       url: 'https://xxxx.com/image',
       success: function (res) {
           that.setData({
              path: res.tempFilePath
           })
        }
     })
    var ctx = wx.createCanvasContext('mycanvas');
    var c_avatar = '../image/timg2.jpg';
    var wechat = '../image/wechat.png';
    var path = that.data.path;
    ctx.fillStyle = "#ffe200";
    ctx.fillRect(0, 0, 375, 612);
    setText(ctx, 16, '#xxx', 90, 45, '达达);
    // 绘制画报背景图
    ctx.drawImage(path, 30, 95, 400, 500);
    //头像
    ctx.arc(45, 45, 25, 0, 2 * Math.PI)
    ctx.strokeStyle = "#fff";
    ctx.clip();
    ctx.drawImage(c_avatar, 20, 20, 50, 50);
    // 绘制生成画报
    ctx.draw(true, setTimeout(function () {
      // 保存
      wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success: function (res) {
          console.log(res)
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath
          });
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }, 1000));
  }
})
```

### 点关注，不迷路

好了各位，以上就是这篇文章的全部内容，能看到这里的人都是人才。我后面会不断更新网络技术相关的文章，如果觉得文章对你有用，欢迎给个“赞”，也欢迎分享，感谢大家 ！！

喜欢本文的朋友们，欢迎长按下图关注公众号达达前端，收看更多精彩内容

![](https://user-gold-cdn.xitu.io/2020/5/28/17258db8e4af50d1?w=900&h=500&f=png&s=195006)
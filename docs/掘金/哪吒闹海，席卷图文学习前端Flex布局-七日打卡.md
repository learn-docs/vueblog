哪吒人生信条：如果你所学的东西 处于喜欢 才会有强大的动力支撑。

> 把你的前端拿捏得死死的，每天学习得爽爽的，微信搜索【程序员哆啦A梦】关注这个不一样的程序员，如果你所学的东西 处于喜欢 才会有强大的动力支撑。
>
> 感谢不负每一份热爱前端的程序员，不论前端技能有多奇葩，欢迎关注加我入群vx:xiaoda0423

## 前言

本篇文章进行学习`css`中的一个重点应用，布局样式为`flex`布局，相信你学习了解过`display`属性，`position`属性，`float`属性，但今天只学习新东西就是`flex`布局。

### flex布局是什么

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8ffd800befd46a88eca07598f461807~tplv-k3u1fbpfcp-watermark.image)

`flex`是`flexible box`的缩写，意思是弹性布局，代码样式如下：

```
.box {
 display: flex;
}
```

`Flexbox Layout`模块是提供一个更有效的方式来布置，对齐和`item`之间在一个容器中分配的控件，即使它们的大小是未知的，或者是动态的，所以单词命名`flex`(弹性工作制的)

`flex`布局可以使容器更改其`item`的宽度，高度，以便最好地填充可用空间，或者收缩它们来防止溢出。`flexbox`布局使用比较合适应用程序地组件和小规模布局上。

在`webkit`内核地浏览器中，要加上`-webkit`前缀哦，代码格式如下：

```
.box {
 display: -webkit-flex;
 display: flex;
}
```

当设置`flex`布局之后，子元素（`item`）的`float`，`clear`，`vertical-align`属性会失效。

### 学习前要先了解概念

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61719301624348b988bca8a5bff255e0~tplv-k3u1fbpfcp-watermark.image)

> `flex container` `flex items`

设置`flex`布局的元素为`flex`容器（`flex container`），简称为容器。它的所有子元素都是容器的成员，`flex`项目（`flex item`），简称为项目。那么请查看如下图，解析`flex`布局背后的主要思想。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c463531d1f4649cb87760c6877611688~tplv-k3u1fbpfcp-watermark.image)

如图可以看出，`main axis`是从`main-start`到`main-end`，交叉轴`cross axis`从`cross-start`到`cross-end`。

容器默认有两根轴的，水平的主轴`main axis`和垂直的交叉轴`cross axis`，从`main-start`到`main-end`叫（`main start`）主轴；从`cross axis`从`cross-start`到`cross-end`叫（`cross axis`）交叉轴

单个项目占据的主轴空间叫`main size`，占据的交叉轴空间叫`cross size`

`container`弹性容器：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2725cf55473f4f2691e7bfd601d82cab~tplv-k3u1fbpfcp-watermark.image)

```
.container {
 display: flex;
}
```

`items`弹性项目:

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fbc14e3abb344897bcff101026eec847~tplv-k3u1fbpfcp-watermark.image)

### 容器的属性

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58560a50fd79479e99aac2b8d1603d07~tplv-k3u1fbpfcp-watermark.image)

1. `flex-direction`
2. `flex-wrap`
3. `flex-flow`
4. `justify-content`
5. `align-items`
6. `align-content`

> flex-direction属性决定的是主轴的方向，即是项目的排列方向

```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}

.flex-container {
  -webkit-flex-direction: row; /_ Safari _/
  flex-direction:         row;
}

.flex-container {
  -webkit-flex-direction: row-reverse; /_ Safari _/
  flex-direction:         row-reverse;
}

.flex-container {
  -webkit-flex-direction: column; /_ Safari _/
  flex-direction:         column;
}

.flex-container {
  -webkit-flex-direction: column-reverse; /_ Safari _/
  flex-direction:         column-reverse;
}
```

其使用`flex-direction`的`box`格式如下：

```
// 水平
.box {
	flex-direction: row; 
}

// 水平倒置
.box {
	flex-direction: row-reverse; 
}

// 垂直
.box {
	flex-direction: column ; 
}

// 垂直倒置
.box {
	flex-direction: column-reverse; 
}
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ea836cd10a4449fa932fdc7070cda87~tplv-k3u1fbpfcp-watermark.image)

```
.box {
	width: 400upx;
	height: 300upx;
	background-color: #007AFF;
	margin: 10upx;
}

.item {
	width: 80upx;
	height: 80upx;
	background-color: #1CBBB4;
	border: 1upx solid #FFFFFF;
}
```

`row`：`flex`容器的主轴与当前写入模式的内联轴具有相同的方向。主开始方向和主结束方向分别相当于当前写入模式的开始方向和结束方向。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5da5ad1d2ed4ea4bc5ef44c037e506a~tplv-k3u1fbpfcp-watermark.image)

```
.box-row {
	display: flex;
	flex-direction: row;
}
```

`row-reverse`: 与`'row'`相同，只是主开始方向和主结束方向交换了。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe7fe073b2c84123beb603ea0706557c~tplv-k3u1fbpfcp-watermark.image)

```
.box-row-reverse {
	display: flex;
	flex-direction: row-reverse;
}
```

`column`: `flex`容器的主轴与当前写入模式的块轴方向相同。主开始方向和主结束方向分别相当于当前书写模式的前/头和后/脚方向。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb7307f57f4b489686f08bd0cd1f7f4c~tplv-k3u1fbpfcp-watermark.image)

```
.box-column {
	display: flex;
	flex-direction: column;
}
```

`column-reverse`: 与`'column'`相同，只是主开始方向和主结束方向交换了。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b961967b7acb43698f0f6203953a4855~tplv-k3u1fbpfcp-watermark.image)

```
.box-column-reverse {
	display: flex;
	flex-direction: column-reverse;
}
```

> `flex-wrap`属性：根据伸缩容器中的可用空间，指定伸缩项是否换行以及它们换行到多行或多列的方向。

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}

.flex-container {
  -webkit-flex-wrap: nowrap; /_ Safari _/
  flex-wrap:         nowrap;
}

.flex-container {
  -webkit-flex-wrap: wrap; /_ Safari _/
  flex-wrap:         wrap;
}

.flex-container {
  -webkit-flex-wrap: wrap-reverse; /_ Safari _/
  flex-wrap:         wrap-reverse;
}
```

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/023e753d988248f0b395e26075c5a783~tplv-k3u1fbpfcp-watermark.image)

`flex-wrap: nowrap`: 不换行。（所有弹性项目都将在一行上）

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0659e7c1484d481ab5bec908482b9397~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-wrap-nowrap {
	display: flex;
	flex-wrap: nowrap;
}
```

`flex-wrap: wrap`: 换行，第一行在上方。（弹性项目将从上到下缠绕在多行上）

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/591e8239e0e642d1a6788fcea17938f1~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-wrap-wrap {
	display: flex;
	flex-wrap: wrap;
}
```

`wrap-reverse`: 换行，第一行在下方。（弹性项目将从下到上缠绕在多行上）

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e045e51a8a2b493aa36c70337212b846~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-wrap-wrap-reverse {
	display: flex;
	flex-wrap: wrap-reverse;
}
```

> `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}

.container {
  flex-flow: column wrap;
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d167e5bef5864508bd0a16989b8496ed~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-flow-1 {
	display: flex;
	flex-flow: auto; // flex-flow: row nowrap;
}
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b2e471db3f94b7aa33af850635fd190~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-flow-2 {
	display: flex;
	flex-flow: row wrap;
}
```

> `justify-content`属性:指定在解析了任意灵活长度和自动边距后，伸缩项如何沿伸缩容器的主轴对齐。(定义了项目在主轴上的对齐方式)

```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

> `flex-start`

初始值。伸缩项目被打包在行首。第一个伸缩项的起始边被放置在伸缩容器的开始处。下一个伸缩项的起始边与第一个伸缩项的结束边按布局轴方向依次放置。所有沿布局轴保留的空间都放置在布局轴的末端。

```
.box-flex-justify-content-1 {
	display: flex;
	justify-content: flex-start;
}
```

如图效果：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fab185ee0d0e42d6936d9a4ab4eedf80~tplv-k3u1fbpfcp-watermark.image)

> `flex-end`

弹性物品被打包到行尾。第一个伸缩项的结束边缘被放置在伸缩容器的末端。下一个伸缩项目的结束边缘与第一个伸缩项目的开始边缘按布局轴方向依次放置。沿布局轴剩下的所有空间都放置在布局轴的起点。

```
.box-flex-justify-content-2 {
	display: flex;
	justify-content: flex-end;
}
```

如图效果：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbb0e46478714104aceb9de85ecbf1b3~tplv-k3u1fbpfcp-watermark.image)

> `center`

弹性物品被打包在线的中间。`flex`项目在直线上放置冲洗彼此对齐线的中心,与等量的`main-start`边缘之间的空白行和第一项之间的线,主要目的的边缘线,最后一项。(如果剩余的空闲空间是负的，伸缩项将在两个方向上相等地溢出。)

```
.box-flex-justify-content-3 {
	display: flex;
	justify-content: center;
}
```

如图效果：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f522ef5a4c23418b8a4ececd52225051~tplv-k3u1fbpfcp-watermark.image)

> `space-between`

弹性项目均匀地分布在这条线上。如果剩余的自由空间是负的，或者一行上只有一个`flex`项目，这个值与`' flex-start '`相同。否则,`main-start`保证的第一`flex`项目线的边缘放置充裕的`main-start`边缘线,最后一个`flex`项的主要目的利润边缘线放置充裕的主要目的边缘线,和其余的`flex`项目的分布之间的间距与任何两个相邻物品是一样的。

```
.box-flex-justify-content-4 {
	display: flex;
	justify-content: space-between;
}
```

如图效果：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73414e42e94441958ab38909a75afc46~tplv-k3u1fbpfcp-watermark.image)

> `space-around`

弹性项目均匀地分布在线中，在两端有一半大小的空间。如果剩余的自由空间是负的，或者一行上只有一个伸缩项，这个值与`' center '`相同。否则，行上的伸缩项的分布使行上任意两个相邻伸缩项之间的间距相同，并且第一个/最后一个伸缩项与伸缩容器边缘之间的间距为伸缩项之间间距的一半。

```
.box-flex-justify-content-5 {
	display: flex;
	justify-content: space-around;
}
```

如图效果：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86be7b9b346841728880e7e7a8ae6027~tplv-k3u1fbpfcp-watermark.image)

`space-evenly`：分配项目，以使任意两个项目之间的间距（以及到边缘的间距）相等。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/968d0742ffba4b0494458f49ae2fc066~tplv-k3u1fbpfcp-watermark.image)

> `align-items`属性：指定伸缩容器中伸缩项的对齐值(垂直于由伸缩方向属性定义的布局轴)。

```
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

修改`item`样式如图:

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1929d322f1d48f08a07a385e9d433a6~tplv-k3u1fbpfcp-watermark.image)

```
.item1 {
	width: 100upx;
	height: 120upx;
}

.item2 {
	width: 100upx;
	height: 130upx;
}

.item3 {
	width: 100upx;
	height: 140upx;
}
```

> `flex-start`：交叉轴的起点对齐。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4a1aab3c670478b9a2d5510e3df0d9f~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-align-items-1 {
	display: flex;
	align-items: flex-start;
}
```

> `flex-end`：交叉轴的终点对齐。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abb2e941409146c9b4ddb135f51de46b~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-align-items-2 {
	display: flex;
	align-items: flex-end;
}
```

> `center`：交叉轴的中点对齐。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58c8a841b51f4bf7946255dad607f18a~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-align-items-3 {
	display: flex;
	align-items: center;
}
```

> `baseline`: 项目的第一行文字的基线对齐。

修改`item`，以第一行文字的基线对齐，想如图效果，`itme3-text`顶部没有剩余空间，就被强迫这样了。如果有空间，已第一个为标准对齐，第一个`item`文本底线对齐。

```
.item1-text {
	padding: 5upx;
	width: 120upx;
	height: 120upx;
}

.item2-text {
	width: 120upx;
	height: 130upx;
}

.item3-text {
	padding: 15upx;
	width: 120upx;
	height: 140upx;
}
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c61e5f260f5a45618c4669cd32fe5414~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-align-items-4 {
	display: flex;
	align-items: baseline;
}
```

> `stretch`（默认值）：如果项目未设置高度或设为`auto`，将占满整个容器的高度。

修改`item`，没有定义高度，如果有高度还是按照原来的高度呈现。

```
.item-noheight {
	width: 100upx;
	border: 1upx solid #FFFFFF;
}
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7db417ab0b98447b86f47f54441c5414~tplv-k3u1fbpfcp-watermark.image)

```
.box-flex-align-items-5 {
	display: flex;
	align-items: stretch;
}
```

> `align-content`属性：指定当与`flex-direction`属性定义的轴垂直的轴上有额外空间时，`flex`项目的行如何在`flex`容器内对齐。

`align-content`属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。

```
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

`flex-start`：交叉轴的起点对齐

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49d026e93554464ea043191c8abef59e~tplv-k3u1fbpfcp-watermark.image)

`flex-end`：与交叉轴的终点对齐

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34923428d2644fa0a4c0880aaaee7122~tplv-k3u1fbpfcp-watermark.image)

`center`：与交叉轴的中点对齐

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7ba0ee4852e4b71b38680f8a8405a90~tplv-k3u1fbpfcp-watermark.image)

`space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05e208b08bea45c39defc69d373cf65d~tplv-k3u1fbpfcp-watermark.image)

`space-around`：每根轴线两侧的间隔都相等，轴线之间的间隔比轴线与边框的间隔大一倍

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3618d4f75e734c2ca9ea7fc60def01d0~tplv-k3u1fbpfcp-watermark.image)

`stretch`：轴线占满整个交叉轴

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b579ea1885f4b7cbb3d6fdf4cfe62da~tplv-k3u1fbpfcp-watermark.image)

### 项目的属性

1. `order`
2. `flex-grow`
3. `flex-shrink`
4. `flex-basis`
5. `flex`
6. `align-self`

> `order`属性定义项目的排序时，数值越小，排列越靠前，默认为0

```
.item {
  order: <integer>;
}
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4021e26102584273be498c70652f71e4~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/381f64a8250840ff9e4820ab1698bf77~tplv-k3u1fbpfcp-watermark.image)

`flex-grow`属性定义项目的放大比例，默认为0，如果还有存在剩余空间，也不会放大

如果所有项目的`flex-grow`属性都为1，那么它们将等分剩余的空间，如果一个项目的`flex-grow`属性为2，其他项目都为1，那么前者占据的剩余空间将比其他项目多一倍。

```
.item {
  flex-grow: <number>; /* default 0 */
}
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05aeaaf462134c33933ff6815832539d~tplv-k3u1fbpfcp-watermark.image)

`flex-shrink`属性定义了项目的缩小的比例，默认为1，如果空间不足，该项目将缩小

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小，如果一个项目的`flex-shrink`属性都为0，其他项目都为1，则空间不足时，前者不缩小，负值对该属性无效。

```
.item {
  flex-shrink: <number>; /* default 1 */
}
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fcf1874bea164427aae9e360f3b68df1~tplv-k3u1fbpfcp-watermark.image)

`flex-basis`属性：定义了在分配多余空间之前，项目占据的主轴空间`main size`，浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即是项目的本来的大小。

```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15acfad57092476c84736fd0fb40fcec~tplv-k3u1fbpfcp-watermark.image)

`flex`属性是`flex-grow`，`flex-shrink`和`flex-basis`的简写，默认值为` 0 1 auto `，后两个属性可选。

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto`（`1 1 auto`）和`none`（`0 0 auto`）

`align-self`属性：允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性，默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acd1cc321c90482d85cf79e49db818ba~tplv-k3u1fbpfcp-watermark.image)

## 点赞、收藏和评论

我是Jeskson(达达前端)，感谢各位人才的：点赞、收藏和评论，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞谢谢，一起学习了)

## 我们下期见！

> 文章持续更新，可以微信搜一搜「 程序员哆啦A梦 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录，欢迎Star。
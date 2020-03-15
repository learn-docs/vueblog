## DOM之详解节点操作

- 添加节点
- 删除节点
- 修改节点
- 查找节点

代码：

    document.write()
    document.createComment()
    document.createDocumentFragment()
    document.createTextNode()
    document.createElement()

document.createElement还支持创建当前浏览器不支持的标签名，在ie6-8下，这是一个著名的hack。

代码：

    outerText
    innerText
    outerHTML
    innerHTML

高效创建节点的方法

用来设置或获取当前标签的起始和结束里面的内容

## innerHTML

使用innerHTML

1. 字符串的最左边不能出现空白，ie6-8会自动移除掉它
2. 大多数浏览器不会对script标签进行脚本执行操作
3. 不能单独创建meta，style，link等元素，一定要在前面加上一些字符

outerHTML返回调用它的元素以及所有子节点的HTML标签

outerHTML设置或获取位于对象起始和结束标签内的文本

innerText-outerHTML

- 查找节点
- 节点遍历

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/QQ截图20200315191311.png)

代码：

    firstChild
    lastChild
    parentNode
    nextSibing
    previousSibling

    childeNodes[0]
    childeNodes.item(0)

    childeNodes[1]
    childeNodes.item(1)

    childeNodes[2]
    childeNodes.item(2)

代码：

    document
    parentNode
    Node
    ownerDocument
    hasChildNodes

代码：

    childElementCount
    firstElementChild
    lastElementChild

    nextElementSibing
    previousElementSibling
    children[0]

## NodeList

NodeList对象的特点

- NodeList是一种类数组对象，用于保存一组有序的节点
- 可以通过方括号语法来访问NodeList的值，有item方法和length属性
- 它并不是array的实例，没有数组对象的方法

类数组对象HTMLCollection

- Ele.getElementsByTagName()
- document.scripts
- document.links
- document.images
- document.forms
- tr.cells
- select.options

类数组对象NamedNodeMap

- Ele.attributes

类数组对象的动态性

- NodeList,HTMLCollection,NamedNodeMap三个集合都是动态的，是有生命，有呼吸的对象
- 他们实际上是基于DOM结构动态执行查询的结果，因此DOM结构的变化能够自动反映这些对象中
- 每当文档结构发生变化时，它们都会得到更新。因此，它们始终都会保存着最新，最准确的信息

## 节点查找

- getElementById()
- getElementsByName()
- getElementsByTagName()
- getElementsByClassName()
- querySelector()
- querySelectorAll()

## 操作节点

- appendChild()
- insertBefore()
- replaceChild()
- cloneNode()
- normalize()
- splitText()

appendChild()

为指定元素节点的最后一个子节点之后添加节点。
该方法返回新的子节点

insertBefore()
在指定的已有子节点之前插入新的子节点

replaceChild()

该方法用新节点替换某个子节点

有两个参数：
replaceChild(要插入的节点，被替换的节点)

返回被替换的节点

cloneNode()

- 创建节点的拷贝。并返回该副本
- 拷贝的节点要有父节点，如果没有父节点，要通过appendChild()，insertBefore(),replaceChild()等方法对齐添加

normalize()

- 合并相邻的Text节点

splitText()

- 按照指定的位置把文本节点分割为两个节点
- 返回新的文本节点

删除节点

- removeChild()
- removeNode()
- innerHTML
- deleteContents()
- textContent

removeChild()

- 删除某个节点中指定的子节点

removeNode()

- ie的私有实现
- 将目标节点从文档中删除，返回目标节点
- 参数是布尔值，默认值为false

> removeChilde()与innerHTML比较

## 总结：

创建节点：

1. document.write创建节点的方法
2. create系列创建节点的方法
3. 高效创建节点的方法

操作节点：

1. appendChild()
2. insertBefore()
3. replaceChild()
4. cloneNode()
5. normalize()
6. splitText()

查找节点：

1. 节点遍历的两套方案
2. NodeList
3. 节点查找的方法

删除节点：

1. removeChild
2. removeNode
3. innerHTML和removeChild
# JS简介

## 五大主流浏览器

- IE：Trident 内核
- Chrome：Webkit Blink（以前是Webkit内核，现在是Blink内核）
- Safari：Webkit内核
- Firefox：Gecko内核
- Opera：Presto（最初是自己的Presto内核，后来是Webkit，现在是Blink内核）

## 浏览器历史与JS诞生

- 1990蒂姆-伯纳斯-李（Tim Berners-Lee），超文本分享咨询的人，发明了word wide web，移植到C libwww下，后改名为nexus，允许别人浏览他人编写的网站。

- 1993美国伊利诺大学NCSA组织，马克 安德森（Marc Andreessen），发布了Mosaic浏览器，可以显示图片，是一款图形化浏览器。

- 1994马克 安德森和吉姆 克拉克（ Jim Clark）硅图（SGI）成立了Mosaic（Mosaic communication corporation）通信公司。由于Mosaic商标属于伊利诺大学（在马克 安德森离开之后，转让给Spy Glass公司），后改名为网景公司（Netscape communication corporation），在Mosaic基础上开发了新一代浏览器Netscape Navigator。

- 1996微软公司收购了Spy Glass公司，开发出了IE（Internet Exploror 1.0），同年随后发布了IE3，出现了Jscript。

- 网景公司布兰登·艾奇（Brendan Eich）在Netscape Navigator基础上开发出了LiveScript。

- Java流行起来了，网景的LiveScript不温不火，就和SUN公司商量，合作推广和宣传产品，LiveScript更名为JavaScript。

- 2001IE6和XP诞生，出现了JS引擎。

- 2003Mozilla公司根据Netscape Navigator开发了Firefox浏览器。

- 2008Google基于Webkit Blink内核，加上Gears（离线上网）开发出了Chrome浏览器，带来了V8引擎（JS引擎）。V8优点：

- 直接翻译机器码,独立于浏览器运行

- 2009甲骨文（Oracle）收购了SUN公司，JS的所有权转给甲骨文。

## ECMA

- ECMA是“European Computer Manufactures Association”的缩写，中文称欧洲计算机制造联合会。
- 目标是评估，开发和认可电信和计算机标准
- 总部位于瑞士日内瓦
- ECMA-262 ECMAScript （规范化 脚本(script)语言）
- ECMAscript是基于Netscape javaScript的一种标准脚本语言（ES5、ES6）

## JavaScript定义

- JavaScript简称“JS”
- 一种直译式的解释性脚本语言
- 一种动态类型、弱类型、基于原型的语言，内置支持类型
- 它的解释器被称为JavaScript引擎，为浏览器的一部分

## JavaScript组成

- ECMAScript（核心）：描述了该语言的语法和基本对象、包括：语法、变量、关键字、保留字、值、原始类型、引用类型运算、对象、继承、函数
- DOM（Document Object Model）：描述了处理网页内容的方法和接口、W3C规范
- BOM（Browser Object Model ）：描述了与浏览器进行交互的方法和接口、没有规范

## JS单线程 - 模拟多线程

轮转时间片：短时间之内轮流执行多个任务的片段。
过程如下：

- 1、任务1 任务2
- 2、切分任务1 任务2
- 3、随机排列这些任务片段，组成队列
- 4、按照这个队列顺序将任务片段送进JS进程
- 5、JS线程执行一个又一个的任务片段
## css的语法和选择器

## css
	概念：CSS 全称为层叠样式表，它主要是用于定义HTML内容在浏览器内的显示样式。

## 引入方式：
    1.外部样式引入
        link
        @import
    2.内部样式
        代码通常存放在<style></style>标签内
    3.内联样式
	语法：css 样式由选择符和声明组成，而声明又由属性和值组成
		选择符{属性:值}例：p{color:red;}
		选择符：又称选择器，指明网页中要应用样式规则的元素

## 选择器：

1. 标签选择器
2. 类选择器
3. id选择器
4. 通配符选择器
5. 后代选择器
6. 子元素选择器
7. 群组选择器
8. 伪类选择器

## 背景：
	背景颜色 background-color
	背景图片 background-image
	背景图片位置 background-position
	背景图片重复 background-repeat
	背景图片定位 background-attachment:scroll/fixed
	简写：
	background:#ff0000 url(bg01.jpg) no-repeat fixed center


## 重点：

1. link和@import的区别（无样式闪烁问题FOUC）
    
    @import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

    加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。

    @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。

2. 三种引入样式的优先级

3. 选择符的优先级

    通配符* 	0   
    标签 	1    
    类/伪类/属性 	10   
    ID 	100   
    行内样式 	1000   
    important 1/0(无穷大)
## DOM属性详解

属性系统：

1. 认识属性
2. 布尔属性
3. 字符串属性
4. data属性
5. class属性

认识属性：

1. Property固有属性
2. Attribute自定义属性

property 与 attribute 使用小结

• attribute属性在html上设置，会反应在html代码上，两者同步；

• property属性则可以看做是DOM对象的键值对，用点(.)操作符对它们进行操作。

实际编程中，基本上的DOM操作都是使用property的点操作符。

只有以下两种情况使用attribute： 

• 第一、自定义 HTML attributes，因为它不能同步到DOM property上 

• 第二、访问内置的 HTML attributes，这些 attribute 不能从 property 同步
过来，例如 input 标签的value值

布尔属性：

1. checked
2. selected
3. readonly
4. multiple
5. disabled
6. hidden
7. contentEditable
8. async

常见的字符串属性：

1. id
2. titlt
3. href
4. src
5. lang
6. dir
7. accesskey
8. name
9. value
10. class

W3C全局属性

1. accesskey
2. class
3. contenteditable
4. dir
5. hidden
6. id
7. lang
8. spellcheck
9. style
10. tabindex
11. title
12. translate

> data属性和class属性
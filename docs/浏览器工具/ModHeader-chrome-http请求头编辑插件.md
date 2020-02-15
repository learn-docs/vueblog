## Chrome插件之ModHeader

> ModHeader是什么

ModHeader让我们可以自定义HTTP请求头或者是重写响应头，包括新增请求头/响应头或者覆盖Chrome浏览器设置的请求头的默认值，同时还可以根据URL Pattern来只对特定网站生效。

Request header用来定义请求头

Response header用来定义响应头

Filter用来设置针对特定网站生效

> 为什么我需要这么一款看上去没啥用的插件呢？

因为在实际的爬虫任务中碰到一个问题，要爬取的网站是个国外的网站，而现在稍具规模的网站都喜欢搞国际化，就是针对不同国家的访客显示不同的语言，理论上这样对用户更友好（实际上国际化如果做得不够好的话会有点奇怪...），这样就不用让用户再去找翻译软件翻译了，而且国际化是人设置的理论上要比翻译软件更好一些。

> 那国际化是通过什么实现的呢？

HTTP请求头有一项叫做Accept-Language，就是用来向服务器声明应该优先给自己显示什么语言。

## chrome http请求头编辑插件

?> modheader插件是一款简单实用的chrome http请求头添加、修改或删除请求头和响应的浏览器插件。

> ModHeader Chrome插件开发背景

header类似于session的功能，以`（key，value）`形式存储，业务系统也都通过http中request请求拿到header值：`String value=request.getHeader(key)`。

遇到一问题就是，门户系统不在我们手里，所以如果想测试自己业务系统，就需要模拟门户header里面的数据，这时chrome插件ModHeader便可以解决这个问题ModHeader是很好的测试httpheader，支持在线修改http header的小工具。

`modheader`插件是一款简单实用的`chrome http`请求头添加插件，主要能为网页添加、修改或删除请求头和响应头，并可以为网页使用多个不同的配置文件来配置请求头，另外也可以将之前使用过的`http`请求头导入进该插件的配置中，或将正在使用的请求头导出以在别的地方使用，欢迎免费下载。

modheader插件的主要功能有：

- 1、添加/修改/删除请求头和响应头
- 2、根据URL和/或资源类型有条件地启用报头修改
- 3、添加评论到标题
- 4、多个不同的配置文件
- 5、排序标题和名称，值或注释
- 6、将值附加到现有请求或响应头
- 7、导出和导入标题
- 8、克隆配置文件

> [怎么在谷歌浏览器中安装.crx扩展名的离线Chrome插件？](https://chromecj.com/utilities/2014-09/181.html)

最新chrome浏览器下载地址：`https://chromecj.com/category/chrome/`

如图所示，输入Request Headers的信息，包括了Name、Value、Comment等数据。

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/modheader-0-2.1.2.jpg)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/modheader-2-2.1.2.jpg)

![](https://cdn.jsdelivr.net/gh/webVueBlog/dadapic/img/modheader-3-2.1.2.jpg)

> ModHeader ModHeader

?> 请求标头

点击右上角的  加 图标，然后选择“请求标头”
在“名称”和“值”列上添加请求标头

?> 响应头

点击右上角的  加 图标，然后选择“响应标题”
在“名称”和“值”列上添加响应头

?> 禁用/启用标题

找到您要禁用的标题
取消选中标题左侧的复选框以禁用标题，或选中它以启用标题

?> 卸下标题

找到您要删除的标题
单击  关 标题右侧的，以将其删除（请记住，您可以禁用标题而不删除它！）

?> 筛选

点击右上角的  加 图标，然后选择“过滤器”
您只能在某些URL或某些类型的请求上启用`ModHeader`。通过URL过滤可以使用`JavaScript`正则表达式`（例如。*。google.com。*）`。按资源类型过滤可以是列表中可能的一种或多种资源类型。

本文参考来自： Chrome插件 » ModHeader：chrome http请求头编辑插件 `https://chromecj.com/web-development/2018-04/1029.html`
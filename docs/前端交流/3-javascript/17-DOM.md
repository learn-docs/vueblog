## DOM

DOM  document(文档) object(对象) model(模型)

获取元素的方式：

document.getElementById()

1. 根据ID获取元素
2. 返回一个元素
3. 对ID区分大小写(IE8和IE8以上)

document.getElementsByClassName()

1. 根据class名获取元素
2. 返回是一个伪数组
3. IE8和IE8以下不支持

document.getElementsByTagName()

1. 根据标签名获取元素
2. 返回一个伪数组
3. 兼容很好

document.getElementsByName()

1. 根据name名获取，一般应用于表单
2. 返回伪数组
3. 只针对对name属性有效的标签生效。

伪数组

1. 必须是对象
2. 必须有length属性
3. 存放内容必须以索引+内容
4. 有数组的一些基本特性，但是不能使用数组的方法。

获取元素属性

    ele.setAttribute("属性名","属性值")
    ele.getAttribute("属性名")
    ele.removeAttribute("属性名")
    ele.dataset.prop="值"

dom.style.prop

1. 可读写行间样式
2. 写入的值必须是字符串格式

window.getComputeStyle(ele,null)

1. null的地方可以存放伪类
2. 返回的都是绝对值
3. 是只读的，不可修改

ele.currentStyle

1. 是只读的，不可修改
2. 返回的是经过转换的绝对值
3. IE独有的属性

ele.id   ele.title

获取样式：ele.style.prop--效率低，维护不方便   ele.className---维护方便

获取元素的内容    

innerHTML:

- 在赋值的时候：标签会被解析成标签，页面中不会输出，
- 在提取内容时：标签会一并被提取

innerText:

在赋值的时候：标签会被解析成文本，在页面中输出，

在提取内容时：标签不会并被提取，只提取文本内容

value:

使用于表单

offset系列属性

滚动条滚动的距离：

    window.pageYOffset(ie9以下不支持)
    document.body.scrollTop
    document.documentElement.scrollTop;

可视窗口尺寸：

    window.innerWidth(IE8以下不兼容)
    document.documentElement.clientWidth
    document.body.clientWidth(怪异模式)

    判断怪异模型的方法
        document.compatMode
            
查看元素在页面中的位置

    ele.offsetWidth--包含padding

        对于无定位的父级，返回相对文档的位置
        对于有定位的父级，返回相对于最近的有定位的父级的位置

    ele.offsetParent
    
        返回最近的有定位的父级，如无，返回body，body.offsetParent为null

滚动到指定位置

    scroll(x,y)   scrollTo(x,y)  scrollBy(x,y);  

代码：

    <div class="header" id="cc" style="width: 500px;height: 300px;">
        <input type="radio" name="sex" value="0">男<input type="radio" name="sex" value="1">女
        <span class="login" name="login">注册</span>
    </div>

代码：

    <ul class="list" id="ul">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
            <a hreft="">百度</a>
        </li>
    </ul>

代码：

    <ul class="list2">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
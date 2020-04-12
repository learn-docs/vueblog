## jquery ajax

### ajax 

AJAX = 异步 JavaScript 和 XML。

AJAX 是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

### status:

获取HTTP状态码  

    101 表示服务器收到web浏览器的请求，正在处理
    200  成功，表示用户请求被正确接受、理解和处理 
    301 重定向，表示请求没有成功，客户需要采取进一步动作 
    404 客户端错误，表示客户端提交的请求错误
    500 服务器错误，表示服务器不能完成对请求的处理 

readyState:获取AJAX状态值

    0:请求未初始化，open还没有调用
    1:服务器连接已经建立，open已经调用了
    2:接收到了请求头信息
    3:请求处理中，接收到了响应主体
    4:请求成功，响应完成

ajax的工作原理

原生的写法

代码：

    <script type="text/javascript">
        //第一步：
        xhr = new XMLHttpRequest();
        //第二步
        xhr.open("post","test.php");
        //第三步：
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //第四步：
        xhr.send("a=1&b=10");
        //get 请求报文体写法
        //第五步：
        xhr.onreadystatechange=function(){
            if(xhr.status==200 && xhr.readyState==4){
                var result=xhr.responseText;
                //获取到结果
                alert(result);
            }
        }
    </script>
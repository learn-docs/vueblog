## axios

?> Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

### 可以提供以下服务:

1、从浏览器中创建XMLHttpRequests

2、从node.js创建http请求

3、支持PromiseAPI

4、拦截请求和响应

5、转换请求数据和响应数据

6、取消请求

7、自动转换JSON数据

8、客户端支持防御XSRF

?> axios概述--采用 promise封装的 Ajax 异步请求工具

### axios使用

安装命令：

在项目文件夹下安装  

    npm install axios;

main.js中

    import axios from "axios"
    Vue.prototype.$axios=axios

在使用的地方get请求

    this.$axios.get('路径').then((res)=>{结果})

post请求头的设置：post请求的时候，我们需要加上一个请求头

	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

### axios是对ajax请求的封装

原生ajax请求实现

    //步骤一:创建异步对象
    var ajax = new XMLHttpRequest();
    //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
    ajax.open('get', 'http://。。。');
    //步骤三:发送请求
    ajax.send();
    //步骤四:注册事件 onreadystatechange 状态改变就会调用
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            console.log(ajax.responseText);//输入相应的内容
        }
    }


    //创建异步对象  
    var xhr = new XMLHttpRequest();
    //设置请求的类型及url
    //打开xhr
    xhr.open('post', 'http://。。。');
    //post请求一定要添加请求头才行不然会报错
    //设置请求头，请求头的设置必须在xhr打开之后，并且在send之前
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //发送请求
    xhr.send();
    xhr.onreadystatechange = function () {
        // 这步为判断服务器是否正确响应
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };

    // 给axios设置baseURL
    axios.defaults.baseURL = ' https:、api';

    let url = /film/getList';
    axios.get(url).then(res => {
        console.log(res);
    })

    // 设置请求头
    axios.defaults.headers['sessionToken'] = 'asd234';


我们在发送请求前可以进行一个请求的拦截，比如，有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据。这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。

    // 请求拦截器
    axios.interceptors.request.use(    
        config => {        
            // 每次发送请求之前判断vuex中是否存在token        
            // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
            // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
            const token = store.state.token;        
            token && (config.headers.Authorization = token);        
            return config;    
        },    
        error => {        
            return Promise.error(error);    
    })

一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过。

响应拦截器很好理解，就是服务器返回给我们的数据，我们在拿到之前可以对他进行一些处理。

### 同源策略：

跨域的产生来源于现代浏览器所通用的‘同源策略’，所谓同源策略，是指只有在地址的： 

    协议名
    域名
    端口名

?> 均一样的情况下，才允许访问相同的cookie、localStorage或是发送Ajax请求等等。若在不同源的情况下访问，就称为跨域。

!> 如何解决axios跨域问题？

解决办法：

服务器（后台）设置允许跨域

浏览器设置跨域

通过代理允许跨域

    header('Access-Control-Allow-Origin:*');
    //允许所有来源访问 
    header('Access-Control-Allow-Method:POST,GET');
    //允许访问的方式 

#### 拦截器分为

请求（request）拦截器和 响应（response）拦截器
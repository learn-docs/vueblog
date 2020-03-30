## Node是什么

`Node`是一个`JavaScript`运行平台。特征：异步和事件驱动机制，还有它的标准库。

`Node`的动力源来自`V8 JavaScript`引擎，是由服务于`Google Chrome`的`Chromium`项目组开发的。

`V8`负责`JavaScript`代码的解释和执行。用`c++`绑定层可将`libuv`和`v8`结合起来。

`node`包含`v8`特性：`shipping,staged,in progress`三组。

`npm`要求`Node`项目所在的目录下有一个`package.json`文件。创建`package.json`文件的最简单方法使用`npm`。

`node`程序主要分：

1. web应用程序
2. 命令行工具
3. 后台程序
4. 桌面程序

> web应用程序：提供单页应用的简单程序，rest微服务和全栈的`web`应用。

```
mkdir example-project
cd example-project
npm init -y
```

核心模块:

`node`的核心模块就相当于其他语言的标准库，它们是编写服务器端`JavaScript`所需的工具。

事件模块是一个处理事件的小型库，`node`的大多数`api`都是以它为基础来做的。

`node`有文件系统库，`fs,path`，`tcp`客户端和服务端库`net`，`http`库，域名解析库`dns`，测试的断言库`assert`，查询平台信息的操作系统库`os`。

## 异步I/O

发起一个`Ajax`请求：

```
$.post('/url',{title: 'web'}, function(data){
    console.log('收到响应了');
});

console.log('发送ajax结束');
```

> 收到响应是在发送ajax结束之后输出的。

`Ajax`通过`post`请求发送`ajax`请求到服务器，服务器进行处理请求，然后返回响应数据到执行回调。

读取文件：

```
var fs = require('fs');

fs.readFile('/path',function(err,file){
    console.log('读取文件完成')
});

console.log('发起读取文件');
```

`readFile()`通过`fs.readFile()`异步调用`node`处理请求，然后返回数据到执行回调。

两个文件读取任务的耗时取决于最慢的那个文件读取的耗时：

```
fs.readFile('/path1', function(err,file){
    console.log('读取文件1完成');
});

fs.readFile('/path2',function(err, file){
    console.log('读取文件2完成');
});
```

使用核心模块和流

```
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const outStream = fs.createWriteStream('output.js.gz');

fs.createReadStream('./node-stream.js')
.pipe(gzip)
.pipe(outStream)
```

对于同步而言，它们的耗时是两个任务的耗时之和。

## 非阻塞I/O

非阻塞I/O是底层术语，表示你的程序可以在做其他事件时发起一个请求来获取网络资源，然后当网络操作完成时，将会运行一个回调函数来处理这个操作的结果。

一个典型的`Node Web`应用程序，用`Web`应用库`Express`来处理商店的订单流程。

`Node`和`Express`中含，`http`路由器，非阻塞网络I/O,线程等，libuv。

浏览器通过发起一个请求，通过非阻塞I/O，传到应用程序检查库存，注册用户，发送回执邮件，进行`http`响应返回到非阻塞网络I/O，并返回一个`JSON HTTP`响应给浏览器。同时进行发送了一封回执邮件，更新数据库。

## 事件与回调函数

`Node`内置的`http`服务器库，即核心模块`http.Server`，负责用流，事件，Node的`http`请求解析器的组合来处理请求。

事件轮询：三个非阻塞网络调用：

1. 用于请求
2. 用于数据库
3. 用于响应

> 事件轮询是单向运行的先入先出队列。

`ajax`异步提交的服务端处理过程：

```
var http = require('http');

var querystring = require('querystring');

http.createServer(function(req, res){
    var postData = '';
    req.setEncoding('urf8');
    req.on('data',function(num) {
        postData += num;
    });
    req.on('end',function(){
        res.end(postData);
    });
}).listen(8080);
console.log('服务器启动完成');
```

`ajax`请求绑定了`success`事件。

```
$.ajax({
    'url': '/url',
    'method': 'POST',
    'data': {},
    'success': function(data){
        // success事件
    }
});
```

> 用`node`的`http`写`hello world`

示例：

```
const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.end('hello');
});

server.listen(port,()=>{
    console.log('server');
});
```

## 单线程

1. `Node`保持了`JavaScript`在浏览器中单线程的特点。
2. 单线程的缺点是：无法利用多核`cpu`；错误会引起整个应用退出，应用的健壮性值得考验。
3. 大量计算占用`cpu`导致无法继续调用异步I/O。
4. `Web Workers`能够创建工作线程来进行计算，以解决`JavaScript`大计算阻塞`UI`渲染的问题。
5. 工作线程为了不阻塞主线程，通过消息传递的方式来传递运行结果，这也使工作线程不能访问到主线程中的`UI`。
6. 子线程的出现，表示`Node`可以从容应对单线程在健壮性和无法利用多核`CPU`方面问题。

## I/O密集型和CPU密集型

1. `Node`面向网络并且擅长并行I/O，能够有效地组织起更多的硬件资源，提供更好的服务。
2. I/O密集的优势主要在于`Node`利用事件循环的处理能力，而不是启动每一个线程为每一个请求服务，资源占用极少。
3. `Node`前后端编程语言环境统一；带来的高性能I/O用于实时应用。
4. 并行I/O使得使用者可以高效利用分布式环境，有效利用稳定接口提升web渲染能力。

## `prototype`对象

类的结构：

```
function User() {
    // 构造器
}

User.prototype.method = function() {
    // 方法
};
```

es6

```
class User {
    constructor(){

    }
    method(){

    }
}
```

```
[1,2,3].map(n=>n*2).filter(n=>n>3);
```

生成器能把异步I/O变成同步编程风格。`Koa Web`应用库中用到了生成器。

## 模板字符串

`web`应用

```
this.body = `
<div>
<h1>web</h1>
<p>jeskson</p>
</div>
`;
```

## 调试器

1. `node`自带的调式器支持单步执行和`REPL`，读取，计算，输出，循环。
2. `node`支持`Chrome`调试协议。

一个`express web`应用程序：

```
mkdir hello_express
cd hello_express
npm init -y
npm i express --save
```

在`JavaScript`中，函数是一等对象，`node`由有内建的事件模型，可以用它来写异步实时程序比用其他脚本语言好。

`libuv`是提供快速，跨平台，非阻塞I/O的本地库。

`node`自带了一个调试器和一个依赖管理器`npm`。

`v8`被用作`JavaScript`运行时。
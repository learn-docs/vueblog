## BOM

### BOM 浏览器对象模型

window:
    
    window.alter();提示框
    <!-- <script>
    	alert(2);
    </script> -->

    window.prompt():提问框
    <script>
    	// var res=window.prompt("请输入您要打开的网站","http://www.baidu.com");
    	// if(res){
    	// 	window.open(res,"_blank","width=500,height=300");
    	// }
    </script>
    
    <!-- window.confirm();询问框 -->
    <script>
    	// var res=window.confirm("您确定要关闭吗？");
    	// console.log(res);
    </script>

代码：

    window.open("href","_self/_blank","option");
    
    1. 打开指定地址
    2. _self 自身窗口打开   _blank 新窗口打开

window.close();

不能关闭非脚本打开的窗口

计时器：

var timer=setInterval()  间隔计时器

语法：

    setInterval(function(){代码},1000)
        匿名函数不重复调用
    setInterval(test,1000);
        函数可以重复调用，但是不能传递参数
        test  函数名
    setInterval("test(参数)",1000)
        函数可以重复调用，也可以传递参数
        1000 是1秒，这里以毫秒计

clearInterval(id)

id：是setInterval产生的值。

    <script>
        var timer=setInterval(test,1000);
        var num=0;
        function test(){
            if(num>10){
                clearInterval(timer);
                return;
            }
            num++;
            console.log(num);
        }
    </script>

计时器的间隔时间有误差

代码：

    <script>
        var end=new Date();
        setInterval(function(){
            var start=new Date();
            console.log(start.getTime()-end.getTime());
            end=new Date();
        },1000);
    </script>

setTimeout() 延时计时器

代码：

    <script>
        // setTimeout(test,1000);
        // var num=0;
        // var timer;
        function test(){
            if(num>5){
                clearTimeout(timer);
                return;
            }
            num++;
            console.log(num);
            timer=setTimeout(test,1000);
        }
        test();
    </script>

history：

    history.back();返回上一页===浏览器的后腿键
    history.forward();进入到下一页===浏览器的前进键
    history.go(n);

直接进入指定的页面，n是数值

- n为0,是当前页
- n为负数，是返回
- n为正数，是前进

location:

    location.href
    location.prot
    location.host
    location.hostname
    location.search 
    location.hash
    location.path
    window.location.reload() 页面重载

screen

- window.screen.width 返回当前屏幕宽度(分辨率值)
- window.screen.height 返回当前屏幕高度(分辨率值)

navigator

window.navigator.userAgent 浏览器类型、版本、操作系统类型、浏览器引擎类型等信息

document

window 的 document 的属性，代表所有 html 的元素

    <script type="text/javascript">
        for (var i = 0; i < 5; i++) {
        var start=new Date();
        setTimeout(function() {
            var end=new Date();
            console.log(i,end.getTime()-start.getTime());
        }, 1000 * i);
        }
        for(var b=0;b<5;b++){}
        console.log(b);
        
        以上的代码输出的结果是什么？

        setTimeout是异步执行的，1000毫秒后向任务队列里添加一个任务，只有主线上的全部执行完才会执行任务队列里的任务，所以当主线程for循环执行完之后 i 的值为5，这个时候再去任务队列中执行任务，i全部为5；

        每次for循环的时候setTimeout都会执行，但是里面的function则不会执行被放入任务队列，因此放了5次；for循环的5次执行完之后不到1000毫秒；

        1000毫秒后全部执行任务队列中的函数，所以就是输出五个5啦

        console.log((function(){
            console.log(1);
            setTimeout(function(){
                console.log(2)
            },1000)
            setTimeout(function(){
                console.log(3)
            },0);
            setTimeout(function(){
                console.log(4)
            },0);
            console.log(5);
        })())
    </script>
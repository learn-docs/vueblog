## for...in语句的使用

1. 定义:for...in 语句用于遍历数组或者对象的属性。也就是说，for...in 循环中的代码每执行一次，就会对数组的元素或者对象的属性进行一次操作。

2. 语法：

代码：

    for(变量 in 对象){
        执行代码
    }

"变量" 可以是数组的元素，也可以是对象的属性。

3. 实例：

代码：

    var arr = ["html","css","js"];
    for(p in arr){
        console.log(p)
        console.log(arr[p])
    }
// fs是 file-system的简写,就是文件夹系统的意思
// 在Node中如果想要进行文件操作,就必须引入fs这个核心模块
// 在js这个核心模块中,就提供了所有的文本操作相关的api
// fs.readFile 就是用来读取文件的

// 使用require方法加载fs核心模块
var fs = require('fs')

// 读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数就是一个回调函数
// error
// 如果读取失败,error就是错误对象
// 如果读取成功,error就是Null
// data
// 如果读取失败,error就是错误对象
// 如果读取成功,data就是读取到的数据

// 成功
// data 数据
// error null
// 失败
// data null
// error 错误对象

fs.readFile('./dada.txt', function(error, data){
	// 文件中存储的其实都是二进制数据0或1
	// 看到的是二进制转16进制
	// toString方法
	console.log(data.toString())
})


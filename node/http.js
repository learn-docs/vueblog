// http 帮你创建服务器

// 加载核心模块
var http = require('http')

// 使用http.createServer()方法创建一个web服务器

// 返回一个server实例
var server = http.createServer()

// 服务器提供服务:对数据的服务
// 发请求
// 接收请求
// 处理请求
// 给个反馈

// 注册 当客户端请求过来,就会自动触发服务器的request请求事件
// 然后执行第二个参数
// 回到处理函数

// request请求事件处理函数,需要接收两个参数:
// Request 请求对象
// 请求对象可以用来获取客户端的一些请求信息,例如请求路径
// Response 响应对象
// 
server.on('request', function(request, response){
	console.log('收到客户端的请求了'+request.url)
	
	// response 对象有一个方法
	// write 用来给客户端发送响应数据
	// write 可以使用多次
	// 最后一定一定要使用end来结束响应
	// 否则客户端会一直等待
	response.write('dada')
	response.write('掘金魔王哪吒')
	response.end()
})

// 绑定端口号 启动服务器
server.listen(3000, function(){
	console.log('服务器启动成功')
})




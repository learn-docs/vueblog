var http = require('http')

// 创建server
var server = http.createServer()

// 监听request 请求事件,设置请求处理函数
server.on('request',function(req,res){
	console.log('收到请求'+req.url)
	
	res.end('达达前端,魔王哪吒-掘金')
	
	// 根据不同的请求路径发送不同的响应结果
	// 获取请求路径
	// 判断路径响应
	
	// res.end() 响应内容必须是字符串,或二进制数据
	// res.end(JSON.stringify())
	
	var url = req.url
	
	if(url === '/') {
		res.end('index')
	}else if(url === '/login') {
		res.end('login page')
	}else {
		res.end('404 not found')
	}
	
})

// 绑定端口号,启动服务
server.listen(80,function(){
	console.log('服务器启动')
})


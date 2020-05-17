var http = require('http')

// 创建 server 
var server = http.createServer()

// 监听 server 的 request 请求事件

// 请求 处理
// 响应
server.on('request', function(req, res){
	console.log(req.url)
})


// 绑定端口号,启动服务
server.listen(3000, function(){
	console.log('runing...')
})



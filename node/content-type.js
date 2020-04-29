var http = require('http')

var server = http.createServer()

server.on('request', function(req, res){
	// 解决编码问题
	// res.setHeader('Content-Type','text/plain;charset=urf-8')
	// res.end('dadaqianduan')
	
	var url = req.url
	// text/plain 普通文本
	if(url === '/plain'){
		res.setHeader('Content-Type', 'text/plain;charset=utf-8')
		res.end('dadaqianduan')
	}else if(url === '/html'){
		res.setHeader('Content-Type', 'text/html;charset=utf-8')
		res.end('<p>dadaqianduan</p>')
	}
	
})

server.listen(3000, function(){
	console.log('server is runing...')
})
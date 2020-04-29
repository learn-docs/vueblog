var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function(req, res){
	var url = req.url
	if(url === '/'){
		fs.readFile('./resource/index.html', function(err,data){
			if(err){
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				res.end('文件读取失败,请稍后重试')
			}else{
				// data默认是二进制数据
				// toString转为字符串
				res.end(data)
			}
		})
	}
})

server.listen(3000, function(){
	
})
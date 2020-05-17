// app application 应用程序
// 把当前模块所有的依懒项都声明再文件模块最上面

var http = require('http')
var fs = require('fs')

http
 .createServer(function(req,res){
	 res.end('dadaqianduan')
 })
 .listen(3000,function(){
	 console.log('running...')
 })
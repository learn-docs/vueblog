var fs = require('fs')

// 第一个参数:文件路径
// 第二个参数:文件内容
// 第三个参数:回调函数

// 成功
// 文件写入成功,error是null
// 失败
// 文件写入失败,error是错误对象
fs.writeFile('./da.md', '大家好,我是达达前端', function(error){
	console.log('文件写入成功')
})
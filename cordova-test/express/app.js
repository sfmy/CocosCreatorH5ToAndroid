var express = require("express");//引入express
var cors = require('cors');
var app = express();//创建express实例

app.get("/get",function(req,res){//定义路由 还有post delete方法 是express定义的
	console.log(req.query);
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	res.send("服务器返回成功！");
});

app.listen(3000);
console.log("listening to port 3000")

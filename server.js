var https = require("https");
var http = require("http");
var mod = require("./model/jobfamily");

http.createServer(function(req, res) {	
		res.writeHead(200, {"Content-Type": "text/json"});
		mod.getAllRecords(res);
}).listen(3000);
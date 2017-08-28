var https = require("https");
var http = require("http");
var fs = require("fs");
qs = require('querystring');
var user = require("./model/user");

http.createServer(function(req, res) {
	if (req.url === "/") {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("Homepage");
	} else if (req.url === "/users") {
		res.writeHead(200, {"Content-Type": "text/json"});
		user.getRecords(res);
	} else if (req.url === "/users/active") {
		res.writeHead(200, {"Content-Type": "text/json"});
		user.getActiveRecords(res);
	} else if (req.url === "/users/inactive") {
		res.writeHead(200, {"Content-Type": "text/json"});
		user.getInactiveRecords(res);
	} else if(req.url === "/users/add" && req.method === "GET") {
		res.writeHead(200, {"Content-Type": "text/html"});
	    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
	} else if(req.url === "/users/add" && req.method === "POST") {
		console.log("POST");
		var body = '';
		req.on('data', function (data) {
			body += data;
			console.log("Partial body: " + body);
		});
		req.on('end', function () {
			qs = require('querystring');
			
			var json = qs.parse(body);
			res.writeHead(200, {'Content-Type': 'text/html'});	
			res.end(JSON.stringify(json));
		});
	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Whoops... Data not found");
	}
}).listen(3000);
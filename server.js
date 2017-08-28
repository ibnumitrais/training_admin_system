var https = require("https");
var http = require("http");
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
	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Whoops... Data not found");
	}
}).listen(3000);
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var user = require("./model/user");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/user-api", function(req, res) {
	var filter = req.query.filter;
	
	user.getRecords(function(status, data){
		if(status > 0) {
			var active = data.filter(function(item) {
				return item.user_status == filter;
			});
			res.json(active);
		}
		else {
			console.log(data);
		}
	}, '');
});

app.post("/user-api", function(req, res) {
	var filter = req.body.filter;
    user.storeRecord(function(status, message){
		if(status > 0) {
			user.getRecords(function(status, data){
				if(status > 0) {
					var active = data.filter(function(item) {
						return item.user_status == filter;
					});
					res.json(active);
				}
				else {
					console.log(data);
				}
			}, '');
		}
		else {
			console.log(message);
		}
	}, req.body);
});

app.delete("/user-api/:userid", function(req, res) {
	var filter = "active    ";
    user.deleteRecord(function(status, message){
		if(status > 0) {
			user.getRecords(function(status, data){
				if(status > 0) {
					var active = data.filter(function(item) {
						return item.user_status == filter;
					});
					res.json(active);
				}
				else {
					console.log(data);
				}
			}, '');
		}
		else {
			console.log(message);
		}
	}, req.param("userid"));
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;
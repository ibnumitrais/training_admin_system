var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var user = require("./model/user");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	// console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/user-api", function(req, res) {
	user.getRecords(function(status, data){
		if(status > 0) {
			console.log(req.query);
			var draw 		= req.query.draw;
			var start 		= req.query.start;
			var length 		= req.query.length;
			var searchValue = req.query.search.value;
			var searchRegex = req.query.search.regex;

			// SEARCH
			data = data.filter(function(item) {
				return item.user_account_name.indexOf(searchValue) >= 0 
				|| item.user_full_name.indexOf(searchValue) >= 0
				|| item.user_full_name.indexOf(searchValue) >= 0
				|| item.user_full_name.indexOf(searchValue) >= 0;
			});

			//SORT
			data.sort(function(a, b) {
				var orderColumn = req.query.order[0].column;
				var orderDir 	= req.query.order[0].dir;
				var orderNameColumn = req.query.columns[orderColumn].data;

				if(orderDir == 'asc') {
					var nameA = a[orderNameColumn].toUpperCase(); 
					var nameB = b[orderNameColumn].toUpperCase(); 
				} else {
					var nameB = a[orderNameColumn].toUpperCase(); 
					var nameA = b[orderNameColumn].toUpperCase(); 
				}
				
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				// names must be equal
				return 0;
			});
			console.log(data.length);
			recordsFiltered = data.slice(start, start+length);
			res.json({
				"draw": draw,
				"recordsTotal": parseInt(data.length),
				"recordsFiltered": parseInt(data.length),
				"data": recordsFiltered,
			});
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
			res.json(1);
		}
		else {
			res.json(-1);
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
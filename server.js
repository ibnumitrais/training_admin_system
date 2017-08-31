//===========================> START EXPRESS
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

// INITIALIZE EXPRESS APP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {next();});
app.use(express.static("./public"));
app.use(cors());

app.set('view engine', 'ejs');

//MODEL
var user = require("./model/user");
var grade = require("./model/grade");

//GRADES ROUTE
app.get('/', function (req, res) {
	res.render('index', {
		filename: 'index.ejs',
		menuCode: 'dashboard',
		menuName: 'Dashboard',
		menuDes: 'Dashboard for all users',
	});
})

app.get('/grades', function (req, res) {
	res.render('grade', {
		filename: 'grade.ejs',
		menuCode: 'grades',
		menuName: '[Exprerss] Grade',
		menuDes: '[PBI 6, PBI 5]',
	});
	// fs.createReadStream("./views/grade.html", "UTF-8").pipe(res);
})
app.get("/grade-api", function(req, res) {
	grade.getRecords(function(status, data){
		if(status > 0) {
			var draw 		= req.query.draw;
			var start 		= req.query.start;
			var length 		= req.query.length;
			var searchValue = req.query.search.value;
			var searchRegex = req.query.search.regex;

			// SEARCH
			data = data.filter(function(item) {
				return item.grade_code.indexOf(searchValue) >= 0 
				|| item.grade_name.indexOf(searchValue) >= 0
				|| item.grade_description.indexOf(searchValue) >= 0;
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
				
				if (nameA < nameB) return -1;
				if (nameA > nameB) return 1;
				return 0;
			});
			
			recordsFiltered = data.slice(start, start+length);
			res.json({
				"draw": draw,
				"recordsTotal": parseInt(data.length),
				"recordsFiltered": parseInt(data.length),
				"data": recordsFiltered,
			});
		}
		else {console.log(data);}
	}, '');
});
app.post("/grade-api", function(req, res) {
    grade.storeRecord(function(status, message){
		if(status > 0) res.json(1);
		else res.json(-1);
	}, req.body);
});
app.delete("/grade-api/:id", function(req, res) {
    grade.deleteRecord(function(status, message){
		if(status > 0) res.json(1);
		else res.json(-1);
	}, req.param("id"));
});

//USER ROUTE
app.get('/users', function (req, res) {
	res.render('user', {
		filename: 'user.ejs',
		menuCode: 'users',
		menuName: '[Exprerss] User',
		menuDes: '[PBI 6, PBI 5]',
	});
	// fs.createReadStream("./views/user.html", "UTF-8").pipe(res);
})
app.get("/user-api", function(req, res) {
	
	user.getRecords(function(status, data){
		if(status > 0) {
			var draw 		= req.query.draw;
			var start 		= req.query.start;
			var length 		= req.query.length;
			var searchValue = req.query.search.value;
			var searchRegex = req.query.search.regex;

			// SEARCH
			data = data.filter(function(item) {
				return item.user_account_name.indexOf(searchValue) >= 0 
				|| item.user_full_name.indexOf(searchValue) >= 0
				|| item.user_email.indexOf(searchValue) >= 0
				|| item.user_status.indexOf(searchValue) >= 0;
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

				if (nameA < nameB) return -1;
				if (nameA > nameB) return 1;
				return 0;
			});
			
			recordsFiltered = data.slice(start, start+length);
			res.json({
				"draw": draw,
				"recordsTotal": parseInt(data.length),
				"recordsFiltered": parseInt(data.length),
				"data": recordsFiltered,
			});
		}
		else {console.log(data);}
	}, '');
});
app.post("/user-api", function(req, res) {
    user.storeRecord(function(status, message){
		if(status > 0) res.json(1);
		else res.json(-1);
	}, req.body);
});
app.delete("/user-api/:userid", function(req, res) {
    user.deleteRecord(function(status, message){
		if(status > 0) res.json(1);
		else res.json(-1);
	}, req.param("userid"));
});
app.listen(3000);
console.log("Express app running on port 3000");
module.exports = app;
//===========================> END EXPRESS
////////////////////////////
////////////////////////////
////////////////////////////
//===========================> START NON EXPRESS
var https = require("https");
var http = require("http");
var ejs = require('ejs');
var fs = require("fs");
var qs = require("querystring");

var user = require("./model/user");
http.createServer(function(req, res) {
    if(req.method === "GET") {
        if (req.url === "/") {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(ejs.render(fs.readFileSync('./views/index.ejs', 'utf8'), { 
				filename: './views/index.ejs',
				menuCode: 'dashboard',
				menuName: 'Dashboard',
				menuDes: 'Dashboard for all users',
			}));
		} else if(req.url === "/request") {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(ejs.render(fs.readFileSync('./views/noexpress/request.ejs', 'utf8'), { 
				filename: './views/index.ejs',
				menuCode: 'request',
				menuName: 'PBI Priority 2',
				menuDes: 'The back end application can be called through browser.',
			}));
		} else if(req.url === "/form") {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(ejs.render(fs.readFileSync('./views/noexpress/form.ejs', 'utf8'), { 
				filename: './views/index.ejs',
				menuCode: 'form',
				menuName: 'PBI Priority 3 and 4',
				menuDes: 'NodeJS HTTP Module Serving JSON Data and collecting POST data.',
			}));
		} else if(req.url.split('?')[0] === "/user-api") {
			var reqData = qs.parse(req.url.split('?')[1]);
			
			user.getRecords(function(status, data){
				if(status > 0) {
					// FILTER
					data = data.filter(function(item) {
						return item.user_status == reqData.filter;
					});
					
					res.writeHead(200, {"Content-Type": "text/plain"});
					res.end(JSON.stringify({ data: data}));
				}
				else {console.log(data);}
			}, '');
		} else {
			// READ the assets
            fs.readFile('./public' + req.url, function(err, data) {
                if (!err) {
                    var dotoffset = req.url.lastIndexOf('.');
                    var mimetype = dotoffset == -1
                                    ? 'text/plain'
                                    : {
                                        '.html' 	: 'text/html',
                                        '.ico' 		: 'image/x-icon',
                                        '.jpg' 		: 'image/jpeg',
                                        '.png' 		: 'image/png',
                                        '.gif' 		: 'image/gif',
                                        '.css' 		: 'text/css',
                                        '.js' 		: 'text/javascript',
                                        '.woff2'	: 'font/opentype',
                                        '.woff' 	: 'font/opentype',
                                        '.ttf' 		: 'font/opentype',
                                        }[ req.url.substr(dotoffset) ];
                    
                    res.setHeader("Content-Type", mimetype);
                    res.write(data);
                    res.end();
                } else {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Cannot ' + req.method + ' ' + req.url);
                }
            });
        }
    } else if(req.method === "POST") {
       	if(req.url === '/requestURL') {

			var body = "";
			req.on("data", function(chunk) {
				body += chunk;
			});

			req.on("end", function(data) {
				var reqJson = qs.parse(body);
				var options = {
					hostname: reqJson.pbi2_url,
					path: reqJson.pbi2_path,
					method: "GET"
				};

				var urlReq = https.request(options, function(urlRes) {
					var responseBody = "";
					urlRes.setEncoding("UTF-8");	
					urlRes.on("data", function(chunk) {
						responseBody += chunk;
					});
					urlRes.on("end", function() {
						res.setHeader('Content-Type', 'text/html');
						res.end(responseBody);
					});
				});
				
				urlReq.on("error", function(err) {
					console.log(err);
					res.end("err");
				});
				
				urlReq.end();
			});
        } else if(req.url === "/user-api") {
			// var reqData = qs.parse(req.url.split('?')[1]);
			var body = "";
			req.on("data", function(chunk) {
				body += chunk;
			});
			req.on("end", function(chunk) {
				var dataPost = qs.parse(body);
				
				user.storeRecord(function(status, message){
					if(status > 0) {
						res.end(JSON.stringify(dataPost));
					} else res.end(-1);
				}, dataPost);

			});

			
			
		}
    }

}).listen(3001);
console.log("Non Express app running on port 3001");

//var PORT = process.env.PORT || 8080;
var express = require("express");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var handlebars = require("handlebars");
//var models= require("/models")

mongoose.Promise = Promise;
var databaseUrl = "PP";
var collections = ["scrapedData"];

var app = express();
	app.use(bodyParser.urlencoded({extended:false}));
	app.use(express.static("public"));
	app.engine("handlebars", exphbs({ defaultLayout: "main" }));
	app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/PP")
var db= mongoose.connection;
	
	db.on("error", function(error){
	console.log("Mongoose Error",error)
	});
	db.once("open", function(error){
	console.log("Mongoose Rocks")
	});

require("./routes/news.js")(app);
//require("./routes/post.js")(app);

app.listen(3000, function() {
 	console.log("App running on port 3000!");
});
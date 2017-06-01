//var models=require("../models");
var post = require("../models/post.js");
var cheerio = require("cheerio");
var request = require("request");
module.exports=function(app){

app.get("/", function(req,res){
// var id = req.params.id;
});

app.post("/articles/:id", function(req, res) {
	var Newpost= new post(req.body);
		Newpost.save(function(error, doc) {
 			if (error) {
    			 res.send(error);
    		}
    		else {
            news.findOneaAndUpdate({"_id": req.params.id},{"note":doc._id}).exec(function(error,data){
            if (error) {
                res.send(error);
            }
            else {
                 res.send(data);
            }

            })

    		}
   });
});




app.get("/post", function(req, res) {
  // var id = req.params.id;
  post.find({}).exec(function(err,data){
      if (error) {
           res.send(error);
        }
        else {
            res.send(data);
        }
      });

  });
}
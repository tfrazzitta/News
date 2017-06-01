
var news = require("../models/news.js")
var news2 = require("../models/news2.js")
var cheerio = require("cheerio");
var request = require("request");
var post = require("../models/post.js")
module.exports=function(app){

app.get("/",function(req,res){
    res.render("index2");  
})

app.get("/scrape", function(req,res){
  request("http://www.nj.com/camden/index.ssf/2017/05/man_involved_in_autumn_pasquale_murder_injured_dur.html#incart_2box_nj-homepage-featured", function(error,response,html){
      var $= cheerio.load(html);
      $("#entryContent p").each(function(i,element){
        var result={};
        result.title= $(this).text();
        var entry= new news(result);
          entry.save(function(err,doc){
            if (err){
            console.log('err: ' + error);
            //res.json('error: there was an error');
            }
            else{

             //console.log('article1: ' + doc);
            }
          })
      })
  })

request("http://www.espn.com/golf/story/_/id/19490176/tiger-woods-arrested-dui-florida", function(error,response,html){
      var $= cheerio.load(html);
      $(".article-body p").each(function(i,element){
        var result2={};
        result2.title= $(this).text();
        //result.link=$(this).children('a').attr('href')
        var entry2= new news(result2);
        //console.log(result2)

          entry2.save(function(err,doc){
            if (err){
            console.log('err: ' + error);
            //res.json('error: there was an error');
            }
            else{
               //console.log('=-------' + doc);
              //console.log('ARTICLE2: ' + doc);
            }

          })

      })
   })

request("http://trump.news/2017-05-28-self-assigned-2.html", function(error,response,html){
      var $= cheerio.load(html);
      // $(".PostArticle p").each(function(i,element){
        $(".PostArticle p").each(function(i,element){
         var result3={};
        // result3.title= $(this).text();
        result3.title= $(this).text();
        result3.link="wp-content/uploads/sites/79/2017/05/Terrorist-Bomb-Explosive-715x403.jpg"
        //result3.link=$(this).find('img').attr('src')
        var entry3= new news(result3);
          entry3.save(function(err,doc){
            if (err){
            console.log('err: ' + error);
            //res.json('error: there was an error');
            }
            else{
               //console.log('=-------' + doc);
              //console.log('ARTICLE3: ' + doc);
              
            }

          })
     })
       
  })
res.send("go to index")
 })



app.get("/articles",function(req,res){
  news.find({}).exec(function(error,data){
    
     if(error){
        res.send(error)
      }
      else{
        res.send(data)
        //console.log(data)
      }
   })
     
})


// app.get("/post",function(req,res){
//   console.log(req.body)
//   news.find({_id: req.params.id}).exec(function(error,data){
    
//      if(error){
//         res.send(error)
//       }
//       else{
//         res.send(data)
//         console.log(data)
//       }
//    })
     
// })




app.get("/post/:id",function(req,res){
  console.log("app.GET/articles/:id " + req.params.id);
    news.findOne({_id: req.params.id}).populate("post").exec(function(error,doc) {
       if (error) {
           res.send(error);
        }
  })
     post.find({params: req.params.id}).exec(function(error,data) {
      console.log(data.params)
      if (error) {
           res.send(error);
        }
            res.json(data);
            //console.log("doc 2" + data)
        })
})






app.post("/post/:id", function(req, res) {
  //console.log(req.body)
  console.log("app.post/articles/:id " + req.params.id);
    req.body.params=req.params.id;  
//console.log(req.body)
    var Newpost= new post(req.body);
  //console.log(Newpost)
    Newpost.save(function(error,doc) {
      if (error) {
           res.send(error);
        }
        else {
           //console.log("doc " +doc);
           //console.log(doc._id)
            //console.log(req.params.id)
            news.findOneAndUpdate({"_id": req.params.id},{"note":doc._id}).exec(function(error,data){
            if (error) {
                res.send(error);
            }
            else {
                 res.send(data);
                 //console.log("data" +data);

            }

            })

        }
   });
});


app.post("/delete/:id", function(req, res) {
  console.log(req.body)
//app.get("/horse",function(req,res){
  post.remove({_id: req.body.params}).exec(function(error,data){
    
     if(error){
        res.send(error)
      }
      // else{
      //   //res.send(data)
      //   console.log(data)
      // }
   })
     post.find({params: req.body.title}).exec(function(error,data) {
      console.log(data)
      if (error) {
           res.send(error);
        }
            res.json(data);
            // console.log("doc 2" + data)
        })
     
})

}


var mongoose = require("mongoose");
var Schema = mongoose.Schema; 


var newsSchema = new Schema({

	title: {
		type:String,
		required:true	
	},
	link:  {
		type:String
	},
	note:{
		type: Schema.Types.ObjectId,
		ref:"post"
			}
});

var news = mongoose.model("news", newsSchema);
module.exports= news;
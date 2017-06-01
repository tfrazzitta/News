var mongoose = require("mongoose");
var Schema = mongoose.Schema; 


var postSchema = new Schema({
	title:{
		type:String,
	},
	body:{
		type:String,
	},

	params:{
		type:String,
	},

	id:{
		type: Schema.Types.ObjectId,
		//ref:"news"
	},

	boolean: Boolean,
	

})


var post = mongoose.model("post", postSchema);
module.exports= post;
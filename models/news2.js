var mongoose = require("mongoose");
var Schema = mongoose.Schema; 


var news2Schema = new Schema({

	title: {
		type:String,
		required:true	
	},
	link:  {
		type:String,
	},
	note:{
		type: Schema.Types.ObjectId,
		ref:"post"
			}
});

var news2 = mongoose.model("news2", news2Schema);
module.exports= news2;
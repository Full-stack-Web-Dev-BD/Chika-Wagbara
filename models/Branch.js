const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const branchSchema=new Schema({
	name:{
		type:String,
		require:true
	},
	location:{
		type:String,
		require:true
	},
	address:{
		type:String,
		require:true
	},
	city:{
		type:String,
		require:true
    },
    state:{
		type:Array
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Project=mongoose.model('projects', projectSchema);
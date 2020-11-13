const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const departmentSchema=new Schema({
	name:{
		type:String,
		require:true
    },
    revenueTarget:{
        type:String
    },
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Department=mongoose.model('departments', departmentSchema);
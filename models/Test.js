const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const testSchema=new Schema({
	testInfo:{
		type:Array,
		require:true
    },
	date:{
		type:Date,
		default:Date.now
	}
})
module.exports=Test=mongoose.model('Test', testSchema);
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const categorySchema=new Schema({
	name:{
		type:String,
		require:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'departments'
    },
    revenueTarget:{
        type:String
    },
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Category=mongoose.model('categories', categorySchema);
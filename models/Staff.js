const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const staffSchema=new Schema({
	staffNo:{
		type:String,
		required:true
	},
	title:{
		type:String,
		require:true
	},
	firstName:{
		type:String,
		require:true
	},
	lastName:{
		type:String,
		require:true
	},
	otherName:{
		type:String,
		require:true
    },
    gender:{
		type:String
	},
	dateOfBirth:{
		type:String,
		required:true
	},
	age:{
		type:Number
	},
	maritialStatus:{
		type:String
	},
	mobileNumber1:{
		type:String
	},
	mobileNumber2:{
		type:String
	},
	email1:{
		type:String
	},
	email2:{
		type:String
	},
	jobTitle:{
		type:String
	},
	department:{
		type:String
	},
	level:{
		type:String
	},
	salaryBand:{
		type:String
	},
	manager:{
		type:String
	},
	primaryJobLocation:{
		type:String
	},
	address:{
		type:String
	},
	locationofAddress:{
		type:String
	},
	nationality:{
		type:String
	},
	stateofOrigin:{
		type:String
	},
	lga:{
		type:String
	},
	religion:{
		type:String
	},
	primaryInsurer:{
		type:String
	},
	emergencyContactName:{
		type:String
	},
	emergencyContactEmail:{
		type:String
	},
	emergencyContactPhone:{
		type:String
	},
	nextofKinName:{
		type:String
	},
	nextofKinContactEmail:{
		type:String
	},
	nextofKinContactPhone:{
		type:String
	},
	nextofKinContactAddress:{
		type:String
	},
	dateofEmployment:{
		type:String
	},
	bankName:{
		type:String
	},
	bankAccountNumber:{
		type:String
	},
	digitalSignature:{
		type:String
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Staff=mongoose.model('staffs', staffSchema);
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const patientTestSchema=new Schema({
	patient:{
		type:Schema.Types.ObjectId,
		ref:'guardians'
	},
	guardian:{
		type:Schema.Types.ObjectId,
		ref:'guardians'
	},
	referringPerson:{
		type:Schema.Types.ObjectId,
		ref:'referringPersons'
	},
	referringCenter:{
		type:Schema.Types.ObjectId,
		ref:'referringCenters'
	},
	tests:{
		type:Array
	},
	totalAmountToPay:{
		type:Number
	},
	paidAmount:{
		type:Number
	},
	remainingBalance:{
		type:Number
	},
	paymentMode:{
		type:Array
	},
	isComplete:{
		type:Boolean,
		default:false
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=PatientTest=mongoose.model('patientTests', patientTestSchema);
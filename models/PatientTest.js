const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const patientTestSchema=new Schema({
	patient:{
		type:Schema.Types.ObjectId,
		ref:'patients'
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
		ref:'referralCenter'
	},
	tests:[{
		test:{
			type:Schema.Types.ObjectId,
			ref:'tests'
		},
		discount:{
			type:Number
		},
		finalPrice:{
			type:Number
		},
		isComplete:{
			type:Boolean,
			default:false
		}
	}],
	billId:{
		type:String,
		required:true
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
	totalDiscount:{
		type:Number
	},
	additionalBill:{
		type:Object
	},
	isComplete:{
		type:Boolean,
		default:false
	},
	isSign:{
		type:Boolean,
		default:false
	},
	emergency:{
		type:Boolean,
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=PatientTest=mongoose.model('patientTests', patientTestSchema);
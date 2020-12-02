const express=require('express');
const passport=require('passport');
const bcrypt=require('bcryptjs');

const Patient=require('../models/Patient');
const User=require('../models/User');
const router=express.Router();

router.post('/newPatient', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    const newPatient= new Patient(req.body)
    newPatient.save()
    .then(patient=>{
      const newUser= new User({
				name    :patient.firstName + patient.lastName,
				email   :patient.email,
				//photo:req.file.path,
				user_role:patient.user_role,
				password:patient.password
			})

			bcrypt.genSalt(10, (err,salt)=>{
				bcrypt.hash(newUser.password, salt, (err,hash)=>{
					if(err) throw err;
					newUser.password=hash;
					newUser.save()
					.then((user)=>{
						res.json(user);
					})
					.catch((err)=>{
						console.log(err);
					})
				})

			})
    })
    .catch(err=>{
      console.log(err)
    });
  }  
})

router.post('/:id/sign', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    Patient.updateOne({_id:req.params.id}, {$set:{isComplete:true}})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/allPatient', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    Patient.find({isComplete:false})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/allCompletePatient', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    Patient.find({isComplete:true})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})



router.get('/edit/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    Patient.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    Patient.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    Patient.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;
const express=require('express');
const passport=require('passport');
const bcrypt=require('bcryptjs');

const PatientTest=require('../models/PatientTest');
const router=express.Router();

router.post('/newPatientTest', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    console.log(req.body)
    const newPatientTest= new PatientTest(req.body)
    newPatientTest.save()
    .then(patientTest=> res.json(patientTest))
    .catch(err=>{
      res.json(err)
    });
  }  
})

router.post('/:id/sign', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.updateOne({_id:req.params.id}, {$set:{isComplete:true}})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/allPatientTest', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.find({isComplete:false}).populate('patient')
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/allCompletePatientTest', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.find({isComplete:true})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})



router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    console.log(req.body)
    PatientTest.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;
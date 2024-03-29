const express=require('express');
const passport=require('passport');
const Branch=require('../models/Branch');

const router=express.Router();

router.post('/newBranch', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    const newBranch= new Branch({
      name:req.body.name,
      location:req.body.location,
      city:req.body.city,
      address:req.body.address,
      state:req.body.state,
      phone1:req.body.phone1,
      phone2:req.body.phone2,
      email:req.body.email,
      branchId:req.body.branchId
    })
    newBranch.save()
    .then(branch=> res.json(branch))
    .catch(err=> res.json(err));
  }  
})

router.get('/allBranch', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Branch.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})
// you was put "edit " insted of getSingle 
router.get('/getSingle/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    Branch.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Branch.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Branch.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;
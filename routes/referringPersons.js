const express=require('express');
const passport=require('passport');
const ReferringPerson=require('../models/ReferringPerson');

const router=express.Router();

router.post('/newReferringPerson', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    const newReferringPerson= new ReferringPerson(req.body)
    newReferringPerson.save()
    .then(rperson=>{
      const newUser= new User({
				name    :rperson.firstName + rperson.lastName,
				email   :patient.email,
				//photo:req.file.path,
				user_role:rperson.user_role,
				password:rperson.password
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
    .catch(err=> res.json(err));
  }  
})

router.get('/allRPerson', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferringPerson.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})



router.get('/edit/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferringPerson.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferringPerson.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferringPerson.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;
const express = require('express');
const passport = require('passport');
const Test = require('../models/Test');
const router = express.Router();

router.post('/newTest', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('calling');
  if (req.user.user_role === "admin") {
    console.log('calling');
    new Test({
      testInfo: [req.body.testInfo]
    }).save()
    .then(test=>{
      res.json(test)
    })
    .catch(err=>{
      console.log(err);
    })
  }
})
module.exports = router;
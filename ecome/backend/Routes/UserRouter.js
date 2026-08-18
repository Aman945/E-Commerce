const express= require("express")

 const {createuser}= require('../controllers/usercontroller')
 const router=express.Router()
 

  router.post('/create',createuser);

  module.exports = router  
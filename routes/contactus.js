

const express=require('express');

const router=express.Router();

const contactusController=require('../controllers/contact');

router.get('/contactus',contactusController.getContactUs)

router.post('/success',contactusController.postSuccess)

module.exports=router
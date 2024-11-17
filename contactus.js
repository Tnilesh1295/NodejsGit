const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
//import{contactusController} from '../controllers/contactus'// or 
const contactusController=require('../controllers/contactus');
const router=express.Router();

router.get('/contactus',contactusController.contactusController)

router.post('/contactus',contactusController.postcontactus)

module.exports=router;
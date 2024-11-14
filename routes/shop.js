const express=require('express');
const path=require('path');
const router=express.Router();
router.use('/shop',(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','Views','shop.html'))  
         //console.log("Another middleware");//res.set
         const username1 = req.body.name1; // Access the username directly
         console.log(username1);
         const email = req.body.email; // Access the name directly
         console.log(email);
    })
    
    module.exports=router;
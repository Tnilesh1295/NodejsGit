const express=require('express');
const { LocalStorage } = require('node-localstorage');
const path=require('path');

const router=express.Router();
router.get('/add-product',(req,res,next)=>{  //use get in place of'use'
    res.sendFile(path.join(__dirname,'..','Views','add-product.html'));
    //localStorage.setItem('username','username');
    
})
router.post('/add-product',(req,res,next)=>{
   console.log(req.body);
    const username = req.body.username; // Access the username directly
   console.log(username);
   //const localStorage = new LocalStorage();
   //localStorage.setItem('username','username');
   // res.redirect('/');
   res.sendFile(path.join(__dirname,'..','Views','shop.html'))
   // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="msg"><button type="submit">Send</button></form>');
    const msg=req.body.msg;
    //console.log(msg);
   
    
})
module.exports = router;
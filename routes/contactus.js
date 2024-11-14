const express=require('express');
const path=require('path');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','Views','contactus.html'))
})
router.post('/',(req,res,next)=>{
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
const express=require('express');
const bodyParesr=require('body-parser');
const path=require('path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactus=require('./routes/contactus');
const app=express();
app.use(bodyParesr.urlencoded({extended:true}));
app.use('/admin',adminRoutes);
app.use('/',shopRoutes);
app.use('/contactus',contactus);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'..','Views','404.html')) //for any dummy page it give this
})
app.listen(3001);
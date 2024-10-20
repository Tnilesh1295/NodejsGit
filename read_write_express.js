//const http=require('http');
const express=require('express');
const bodyParesr=require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const app=express();


/*app.use((req,res,next)=>{console.log('it is middleware');next();});
app.use('/',(req,res,next)=>{console.log("This run always");    next();})*/
/*app.use('/add-product',(req,res,next)=>{console.log("In another middleware"); res.send('<h1>Add Product Page</h1>')})*/

app.use(bodyParesr.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(shopRoutes);


/*app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>')
})
/*app.use('/product',(req,res,next)=>{console.log(req.body);res.redirect('/');  })    //  Because it can run for both get and post so replace use with post
app.post('/product',(req,res,next)=>{ console.log(req.body); res.redirect('/');})*/
//const server=http.createServer(app); server.listen(3001)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>'); //for any dummy page it give this
})
app.listen(3001);
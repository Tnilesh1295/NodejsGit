const http=require('http');
const express=require('express');
//const routes1=require('./routes_express');
//console.log(routes1.someText);
const app=express();

app.use((req,res,next)=>{
    console.log('it is middleware')
next();
});

app.use((req,res,next)=>{
console.log("Another middleware");
//res.set
res.send('<h1>Hello Html</h1>')
})
const server=http.createServer(app);
server.listen(3001);
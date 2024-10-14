const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('my name is Rahul');
    //console.log(req);
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Check the console for the logged name.\n');
})
server.listen(4000);
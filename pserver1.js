const http=require('http');
const server=http.createServer((req,res)=>{
    
    res.setHeader('content-type','text/html')
    res.write('<html>');
    res.write('<head><title>My first Server</title></head>');
    res.write('<body>Welcome to my Node Js project</body>')
    res.write('</html>');
    //res.end();

    if(req.url==='/home')
    res.end('Welcome home');
    else
    if(req==='/about')
    res.end(' Welcome to About Us page');
    else
    if(req.url==='/node')
    req.end('Welcome to my Node Js project');
    else
    res.end("Page not found")
})
server.listen(4000);
//process.exit();
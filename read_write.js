const http=require('http');

const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log('my server');
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
    res.write('<head><title>Read and Write From a file</title></head>')
    res.write('<body> <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button> </form>' );
    res.write('</body>')
    res.write('</html>')
    return res.end();
    }
    if(url==='/message' && method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);

            
        });
       return req.on('end',()=>{
            const parsebody=Buffer.concat(body).toString();
            //console.log(parsebody);
            const message=parsebody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
            
        });
        

    }
    res.write('<html>');
    res.write('<head><title>Read and Write From a file</title></head>')
    res.write('<body> this is my first page' );
    res.write('</body>')
    res.write('</html>');
})
server.listen(3000);
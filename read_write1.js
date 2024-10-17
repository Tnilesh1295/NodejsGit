const http=require('http');

const routes1=require('./routes1');
console.log(routes1.someText);
const server=http.createServer(routes1.handler);
server.listen(3001);
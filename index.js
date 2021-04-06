const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});

    res.write("<h1>I Walk on Air</h1>");
    res.end();

});

server.listen(5000,()=>{
    console.log("Server On");
})
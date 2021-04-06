const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});

    if(req.url==='/'){
        res.end(fs.readFileSync('./views/home.html'));
    } else if(req.url==='/sobre'){
        res.end(fs.readFileSync('./views/sobre.html'));
    }else{
        res.writeHead(400,{'Content-type':'text/html;charset=utf-8'});
        res.end(fs.readFileSync('./views/erro.html'));
    }
});

server.listen(8000,()=>{
    console.log("Servidor Online");
});
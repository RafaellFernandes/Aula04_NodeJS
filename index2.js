const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});

    if(req.url==='/'){
        res.write('<h3>Pagina da Casa, arrota rruuuuueerr </h3>');
    } else if(req.url==='/sobre'){
        res.write('<h3>Sobre Trenóis</h3>');
    } else{
        res.writeHead(400,{'Content-type':'text/html;charset=utf-8'});
        res.write('<h1>A Pagina nao foi encontrada no Lixao da Wolf</h1>');
    }
    res.end();
})

server.listen(8000,()=>{
    console.log('Server on');
})
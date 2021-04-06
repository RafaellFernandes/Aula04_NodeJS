const http=require('http');
const fs=require('fs');
const url=require('url');
const child=require('child_process');

const pingFile=fs.readFileSync('./views/ping.html');
const erroFile=fs.readFileSync('./views/erro.html');

const server=http.createServer((req,res)=>{

    if(url.parse(req.url).pathname==='/'){
        res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
        res.end(pingFile);
    }else{
        res.writeHead(400,{'Content-type':'text/html;charset=utf-8'});
        res.end(erroFile);
    }
}).listen(8000,()=>{
    console.log("Server On");
});

function execPing(args){
    const ping=child.spawn('ping',['-t',args]);
    ping.stdout.on('data',(data)=>{
        io.emit('output',data.toString())
    });
    
    ping.stderr.on('data',(data)=>{
        io.emit('output',data.toString())
    });

    ping.on('close',(code)=>{
        io.emit('Processo Finalizado')
    })

}


const io=require('socket.io')(server);

io.on('connection',socket=>{

    socket.on('ip',(data)=>execPing(data));

   // socket.emit('comando', 'mensagem para o usuario'); //emite uma mensagem para o usuario
    /*socket.on('usuario',data=>{ //** recebe do usuario a mensagem
        console.log(data);
    }) //***/
})
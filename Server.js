const http=require('http')
const fs =require('fs')
const { error } = require('console')

const server=http.createServer((req,res)=>{
    console.log(req.url)
   if(req.url=="/about"){
    res.end('<h1>Aman,Hello from About side</h1>')
   }else if(req.url=="/"){
  
    res.end('<h1>Aman,Hello from Home side</h1>')
  
   }else if(req.url=="/api"){
    res.writeHead(200,{'content-type':'application/json'})
  fs.readFile("Api.json","utf-8",(err,data)=>{
    res.end(data);
    
  })
   
   }else{
    res.writeHead(404,{'content-type':'text/html'})
    res.end("<h1>404 Page Not found</h1>")
   }
    
})

server.listen(4000,'127.0.0.1',()=>{
    console.log("listining...")
})
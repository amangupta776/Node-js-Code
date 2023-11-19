const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    const rstream=fs.createReadStream("input.txt")
    // rstream.on('data',(chunkData)=>{
    //     res.write(chunkData);

    // });
   rstream.pipe(res)
})
// server.on('end',()=>{
//     res.end();
// });

// server.on('error',(err)=>{
//  res.end("File not found");
//  console.log(err);
// });
  server.listen(4000,'127.0.0.1');
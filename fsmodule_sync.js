const fs =require("fs");

// fs.writeFileSync("example/first.txt","Hello world");
// fs.appendFileSync("example/first.txt"," Kese hai ap log");
// fs.mkdirSync("example")
// fs.rmdirSync("example")
// fs.unlinkSync("example/first.txt")
// const a=fs.readFileSync("first.txt","utf-8")
// console.log(a)
fs.renameSync("first.txt","f.txt")
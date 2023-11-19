const EventEmitter=require('events');
const event=new EventEmitter();

event.on('sayMyname',()=>{
    console.log("My name is Aman");
})
event.on('checkPage',(res,msg)=>{
console.log(`Page code is ${res} and Message is ${msg}`)
})
event.emit('sayMyname');
event.emit('checkPage',200,"ok");
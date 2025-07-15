import {  WebSocketServer } from "ws";

// creating a websocket server
const wss = new WebSocketServer ({
    port: 8080
});

// event handler like app.get("/user")
// wss = websocketserver
wss.on("connection", function(socket){
console.log("user connected")
// setInterval(()=>{
//     socket.send("I am learning websocket");
// },500)

// socket.on("message", (e)=>{
//     console.log(e.toString());
// })

socket.on("message",(e)=>{
    if(e.toString()=== "ping"){
        socket.send("pong");
    }
})
  
})
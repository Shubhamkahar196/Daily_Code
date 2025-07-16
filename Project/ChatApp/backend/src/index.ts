 import  WebSocket ,{ WebSocketServer } from "ws";

 const wss = new WebSocketServer({
    port: 8080
 })

 wss.on("connection", function(socket){
    console.log("user connected")
    socket.send("hiii")
 })


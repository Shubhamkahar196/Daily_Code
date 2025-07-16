 import   WebSocket,{ WebSocketServer } from "ws";

 const wss = new WebSocketServer({
    port: 8080
 })

 let userCount = 0;
 let allSockets: WebSocket[]  = [];

 wss.on("connection", function(socket){
    allSockets.push(socket);


    userCount++;
    console.log("user connected "  + userCount)
    socket.send("hiii")

    socket.on("message", (event)=>{
       console.log("message receive " + event.toString() + " from  user connected " + userCount);
          
    //    1way 
       
    //    for(let i = 0; i<allSockets.length; i++){
    //     const s = allSockets[i];
    //      s.send(event.toString() + " : sent from the server");
    //    }

    // 2nd way

    allSockets.forEach(s =>{
        s.send(event.toString() + " : sent from the server");
    })

    //    jo msge aaya use wapas send kr dena
    // setTimeout(()=>{
    //     socket.send(event.toString() + " : sent from the server");
    // },3000)
   
    })

    socket.on("disconnect",()=>{
        allSockets = allSockets.filter(x => x != socket);
    })
 })


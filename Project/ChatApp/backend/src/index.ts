



import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {

    socket.on("message", (message) => {
        // @ts-ignore
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type == "join") {
            console.log("user joined room " + parsedMessage.payload.roomId);
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if (parsedMessage.type == "chat") {
            console.log("user wants to chat");
            // const currentUserRoom = allSockets.find((x) => x.socket == socket).room
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room
                }
            }

            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }
        }

    })

})







//  one way

//  let userCount = 0;
// //  let allSockets: WebSocket[]  = [];

// let allSockets = {};  

//  wss.on("connection", function(socket){
//     allSockets.push(socket);


//     userCount++;
//     console.log("user connected "  + userCount)
//     socket.send("hiii")

//     socket.on("message", (event)=>{
//        console.log("message receive " + event.toString() + " from  user connected " + userCount);
          
//     //    1way 
       
//     //    for(let i = 0; i<allSockets.length; i++){
//     //     const s = allSockets[i];
//     //      s.send(event.toString() + " : sent from the server");
//     //    }

//     // 2nd way

//     allSockets.forEach(s =>{
//         s.send(event.toString() + " : sent from the server");
//     })

//     //    jo msge aaya use wapas send kr dena
//     // setTimeout(()=>{
//     //     socket.send(event.toString() + " : sent from the server");
//     // },3000)
   
//     })

//     socket.on("disconnect",()=>{
//         allSockets = allSockets.filter(x => x != socket);
//     })
//  })


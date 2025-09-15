

import { WebSocket, WebSocketServer } from "ws";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "@repo/backend-common/config";
import {prismaClient} from '@repo/db/client'
const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: number[]; // Changed to number[] since roomId seems to be a number
  userId: string;
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded == 'string') {
      return null;
    }
    if (!decoded || !decoded.userId) {
      return null;
    }
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

wss.on('connection',  function connection(ws, request) {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || "";
  const userId = checkUser(token);
  if (!userId) {
    ws.close();
    return;
  }
  users.push({ userId, rooms: [], ws });

  ws.on('message', async function message(data) {
    const parsedData = JSON.parse(data as unknown as string);

    if (parsedData.type === 'join_room') {
      const user = users.find((x) => x.ws === ws);
      user?.rooms.push(parsedData.roomId); // Changed to roomId (camelCase)
    }

    if (parsedData.type === 'leave_room') {
      const user = users.find((x) => x.ws === ws);
      if (!user) {
        return;
      }
      user.rooms = user.rooms.filter((x) => x !== parsedData.roomId); // Changed to !== and roomId
    }

    if (parsedData.type === "chat") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;

      await prismaClient.chat.create({
        data:{
          roomId,
          message,
          userId
        }
      })
      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(JSON.stringify({
            type: "chat",
            message: message,
            roomId,
          }));
        }
      });
    }
  });
});



















// import { WebSocket, WebSocketServer } from "ws";
// import jwt, { decode, JwtPayload } from 'jsonwebtoken'
// import { JWT_SECRET } from "@repo/backend-common/config";


// const wss = new  WebSocketServer({ port : 8080});

// // state management

// interface User{
//   ws: WebSocket,
//   rooms: string[],
//   userId: string
// }

// const users: User[] = [];


// function checkUser(token: string): string | null{


//   try {
//      const decoded = jwt.verify(token,JWT_SECRET);

//   if(typeof decoded == 'string'){
//     return null;
//   }

//   if(!decoded || !decoded.userId){
//     return null
//   }
//   return decoded.userId;
    
//   } catch (error) {
//     return null;
//   }

// }


// wss.on('connection',function connection(ws, request){

//    const url = request.url;

//    if(!url){
//     return;
//    }

//    const queryParams = new URLSearchParams(url.split('?')[1]);
//    const token = queryParams.get('token') || "";

//    const userId = checkUser(token);

//    if(!userId){
//     ws.close()
//     return null;
//    }

//    users.push({
//     userId,
//     rooms:[],
//     ws
//    })
 
//      ws.on('message', function message(data){
//        const parsedData = JSON.parse(data as unknown as string); // type: join-room,roomid: 1
          
//       //  todo - add check room exist or not
//        if(parsedData.type === 'join_room'){
//         const user = users.find(x=> x.ws === ws);
//         user?.rooms.push(parsedData.roomid)
//        }

//        if(parsedData.type === 'leave_room'){
//         const user = users.find(x=> x.ws ===ws);
//         if(!user){
//           return;
//         }
//         user.rooms = user?.rooms.filter(x=>x === parsedData.room)
//        }


//          if(parsedData.type === "chat"){
//       const roomId = parsedData.roomId;
//       const message = parsedData.message;

//       users.forEach(user=>{
//         if(user.rooms.includes(roomId)){
//           user.ws.send(JSON.stringify({
//             type: "chat",
//             message: message,
//             roomId
//           }))
//         }
//       })
//      }
        
//      });


   
     
// })
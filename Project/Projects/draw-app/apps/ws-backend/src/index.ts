

import { WebSocket, WebSocketServer } from 'ws';
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from '@repo/backend-common/config';
import { prismaClient } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket,
  rooms: string[],
  userId: string
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded == "string") {
      return null;
    }
    if (!decoded || !decoded.userId) {
      return null;
    }
    return decoded.userId;
  } catch (e) {
    return null;
  }
}

wss.on('connection', function connection(ws, request) {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || "";
  const userId = checkUser(token);
  // if (userId == null) {
  //   ws.close()
  //   return;
  // }
  // Temporary: allow connection without token for debugging
  const finalUserId = userId || "testuser";

  users.push({ userId: finalUserId, rooms: [], ws })

  ws.on('message', async function message(data) {
    try {
      let parsedData;
      if (typeof data !== "string") {
        parsedData = JSON.parse(data.toString());
      } else {
        parsedData = JSON.parse(data);
      }

      if (parsedData.type === "join_room") {
        const user = users.find(x => x.ws === ws);
        if (!user) {
          console.error("User not found for join_room");
          return;
        }
        const roomIdNum = Number(parsedData.roomId);
        if (isNaN(roomIdNum)) {
          console.error(`Invalid roomId: ${parsedData.roomId}`);
          ws.send(JSON.stringify({ type: "error", message: "Invalid room ID" }));
          return;
        }
        const room = await prismaClient.room.findUnique({ where: { id: roomIdNum } });
        if (!room) {
          console.error(`Room ${roomIdNum} not found`);
          ws.send(JSON.stringify({ type: "error", message: "Room not found" }));
          return;
        }
        if (!user.rooms.includes(parsedData.roomId)) {
          user.rooms.push(parsedData.roomId);
          console.log(`User ${user.userId} joined room ${parsedData.roomId}`);
        } else {
          console.log(`User ${user.userId} already in room ${parsedData.roomId}`);
        }
      }

      if (parsedData.type === "leave_room") {
        const user = users.find(x => x.ws === ws);
        if (!user) {
          return;
        }
        user.rooms = user.rooms.filter(x => x !== parsedData.roomId);
        console.log(`User ${user.userId} left room ${parsedData.roomId}`);
      }

      console.log("message received")
      console.log(parsedData);

      if (parsedData.type === "chat") {
        const roomId = parsedData.roomId;
        const message = parsedData.message;
        console.log(`Chat message from user ${finalUserId} in room ${roomId}: ${message}`);
        await prismaClient.chat.create({ data: { roomId: Number(roomId), message, userId: finalUserId } });
        users.forEach(user => {
          if (user.rooms.includes(roomId) && user.ws.readyState === WebSocket.OPEN) {
            user.ws.send(JSON.stringify({ type: "chat", message: message, roomId, userId: finalUserId }))
          }
        })
      }
    } catch (e) {
      console.error(e);
    }
  });

  ws.on('close', () => {
    const index = users.findIndex(x => x.ws === ws);
    if (index !== -1 && users[index]) {
      console.log(`User ${users[index].userId} disconnected`);
      users.splice(index, 1);
    }
  });

  // Optional: Implement heartbeat to keep connection alive and detect dead clients
  // (ws as any).isAlive = true;
  // ws.on('pong', () => {
  //   (ws as any).isAlive = true;
  // });
});

// const interval = setInterval(() => {
//   wss.clients.forEach((ws: any) => {
//     if (ws.isAlive === false) {
//       return ws.terminate();
//     }
//     ws.isAlive = false;
//     ws.ping();
//   });
// }, 30000);

// wss.on('close', () => {
//   clearInterval(interval);
// });









// import { WebSocket, WebSocketServer } from "ws";
// import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from "@repo/backend-common/config";
// import {prismaClient} from '@repo/db/client'
// const wss = new WebSocketServer({ port: 8080 });

// interface User {
//   ws: WebSocket;
//   rooms: number[]; // Changed to number[] since roomId seems to be a number
//   userId: string;
// }

// const users: User[] = [];

// function checkUser(token: string): string | null {
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     if (typeof decoded == 'string') {
//       return null;
//     }
//     if (!decoded || !decoded.userId) {
//       return null;
//     }
//     return decoded.userId;
//   } catch (error) {
//     return null;
//   }
// }

// wss.on('connection',  function connection(ws, request) {
//   const url = request.url;
//   if (!url) {
//     return;
//   }
//   const queryParams = new URLSearchParams(url.split('?')[1]);
//   const token = queryParams.get('token') || "";
//   const userId = checkUser(token);
//   if (!userId) {
//     ws.close();
//     return;
//   }
//   users.push({ userId, rooms: [], ws });

//   ws.on('message', async function message(data) {
//     const parsedData = JSON.parse(data as unknown as string);

//     if (parsedData.type === 'join_room') {
//       const user = users.find((x) => x.ws === ws);
//       user?.rooms.push(parsedData.roomId); // Changed to roomId (camelCase)
//     }

//     if (parsedData.type === 'leave_room') {
//       const user = users.find((x) => x.ws === ws);
//       if (!user) {
//         return;
//       }
//       user.rooms = user.rooms.filter((x) => x !== parsedData.roomId); // Changed to !== and roomId
//     }

//     if (parsedData.type === "chat") {
//       const roomId = parsedData.roomId;
//       const message = parsedData.message;

//       await prismaClient.chat.create({
//         data:{
//           roomId,
//           message,
//           userId
//         }
//       })
//       users.forEach((user) => {
//         if (user.rooms.includes(roomId)) {
//           user.ws.send(JSON.stringify({
//             type: "chat",
//             message: message,
//             roomId,
//           }));
//         }
//       });
//     }
//   });
// });



















// // import { WebSocket, WebSocketServer } from "ws";
// // import jwt, { decode, JwtPayload } from 'jsonwebtoken'
// // import { JWT_SECRET } from "@repo/backend-common/config";


// // const wss = new  WebSocketServer({ port : 8080});

// // // state management

// // interface User{
// //   ws: WebSocket,
// //   rooms: string[],
// //   userId: string
// // }

// // const users: User[] = [];


// // function checkUser(token: string): string | null{


// //   try {
// //      const decoded = jwt.verify(token,JWT_SECRET);

// //   if(typeof decoded == 'string'){
// //     return null;
// //   }

// //   if(!decoded || !decoded.userId){
// //     return null
// //   }
// //   return decoded.userId;
    
// //   } catch (error) {
// //     return null;
// //   }

// // }


// // wss.on('connection',function connection(ws, request){

// //    const url = request.url;

// //    if(!url){
// //     return;
// //    }

// //    const queryParams = new URLSearchParams(url.split('?')[1]);
// //    const token = queryParams.get('token') || "";

// //    const userId = checkUser(token);

// //    if(!userId){
// //     ws.close()
// //     return null;
// //    }

// //    users.push({
// //     userId,
// //     rooms:[],
// //     ws
// //    })
 
// //      ws.on('message', function message(data){
// //        const parsedData = JSON.parse(data as unknown as string); // type: join-room,roomid: 1
          
// //       //  todo - add check room exist or not
// //        if(parsedData.type === 'join_room'){
// //         const user = users.find(x=> x.ws === ws);
// //         user?.rooms.push(parsedData.roomid)
// //        }

// //        if(parsedData.type === 'leave_room'){
// //         const user = users.find(x=> x.ws ===ws);
// //         if(!user){
// //           return;
// //         }
// //         user.rooms = user?.rooms.filter(x=>x === parsedData.room)
// //        }


// //          if(parsedData.type === "chat"){
// //       const roomId = parsedData.roomId;
// //       const message = parsedData.message;

// //       users.forEach(user=>{
// //         if(user.rooms.includes(roomId)){
// //           user.ws.send(JSON.stringify({
// //             type: "chat",
// //             message: message,
// //             roomId
// //           }))
// //         }
// //       })
// //      }
        
// //      });


   
     
// // })




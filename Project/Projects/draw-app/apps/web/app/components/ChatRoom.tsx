// import axios from "axios"
// import { BACKEND_URL } from "../config"
// import { ChatRoomClient } from "./ChatRoomClient";

// async function getChats(roomId: string) {
//     const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
//     return response.data.messages;
// }

// export async function ChatRoom({id}: {
//     id: string
// }) {
//     const messages = await getChats(id);
//     return <ChatRoomClient id={id} messages={messages} />
// }


// import axios from "axios";
// import { BACKEND_URL } from "../config";
// import { ChatRoomClient } from "./ChatRoomClient";

// async function getChats(roomId: string) {
//   try {
//     const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
//     return response.data.messages || []; 
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export async function ChatRoom({ id }: { id: string }) {
//   const messages = await getChats(id);
//   return <ChatRoomClient id={id} messages={messages} />;
// }



import axios from "axios";
import { BACKEND_URL } from "../config";
import { ChatRoomClient } from "./ChatRoomClient";

async function getChats(roomId: string) {
  try {
    const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
    return response.data.messages || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function ChatRoom({ id }: { id: string }) {
  const messages = await getChats(id);
  return <ChatRoomClient id={id} messages={messages} />;
}

import {BACKEND_URL} from '../../config'
import axios from "axios"
import { ChatRoom } from '../../components/ChatRoom';

async function getRoomId(slug: string){

const response =axios.get(`${BACKEND_URL}/room/${slug}`)
// return response.data.room.id;
return (await response).data.roomId;
}


export default  async function ChatRoom1({
    params
}:{
    params: Promise<{
        slug : string
    }>
}){
    const { slug } = await params;
      const roomId = await getRoomId(slug);

      return <ChatRoom id={roomId}></ChatRoom>
}


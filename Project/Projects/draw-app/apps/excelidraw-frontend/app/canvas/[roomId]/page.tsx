import RoomCanvas from "@/components/RoomCanvas";


export default async function Canvas({params}: {
  params:{
    roomId: string
  }
}){
  const roomId = (await params).roomId;
  console.log(roomId)

  return <RoomCanvas roomId = {roomId} />
}
import { RoomCanvas } from "@/components/RoomCanvas";

export default async function CanvasPage({ params }: {
    params: {
        roomId: string
    }
}) {
    const roomId = (await params).roomId;

    return <RoomCanvas roomId={roomId} />
   
}

"use client";
import { useEffect, useRef,useState } from "react";
import initDraw from "@/draw";
import { WS_URL } from "@/config";

export default function Canvas({ roomId }: { roomId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);




  useEffect(() =>{
    const ws = new WebSocket(WS_URL);
    
    ws.open = () =>{
        setSocket(ws);

         if (canvasRef.current) {
      initDraw(canvasRef.current, roomId);
    }
    }

  },[])



 useEffect(() => {
    // if (canvasRef.current) {
    //   initDraw(canvasRef.current, roomId);
    // }
  }, [canvasRef]);
 

  if(!socket){
    return <div>
        Connection to server...
    </div>
  }

  return (
    <div>
      <canvas ref={canvasRef} width={2000} height={2000}></canvas>
      <div className="absolute bottom-0 right-0">
        <div className="bg-white">Rect</div>
        <div>Circle</div>
      </div>
    </div>
  );
}

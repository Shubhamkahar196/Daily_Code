import axios from "axios";
import { HTTP_BACKEND } from "@/config";


type Shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      conterX: number;
      centerY: number;
      radius: number;
    };

export default  async function initDraw(canvas: HTMLCanvasElement, roomId:string) {
  const ctx = canvas.getContext("2d");

  const exitingShapes: Shape[] = await getExistingShapes(roomId);

  if (!ctx) {
    return;
  }

  // ctx.fillStyle = "rgba(0,0,0)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  clearCanvas(exitingShapes,canvas,ctx);

  let clicked = false;
  let startX = 0;
  let startY = 0;

  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    clicked = false;
    const width = e.clientX - startX;
    const height = e.clientY - startY;
    exitingShapes.push({
      type: "rect",
      x: startX,
      y: startY,
      height,
      width,
    });
  });

  canvas.addEventListener("mousemove", (e) => {
    if (clicked) {
      const width = e.clientX - startX;
      const height = e.clientY - startY;
      clearCanvas(exitingShapes,canvas,ctx);
      ctx.strokeStyle = "rgba(255,255,255)";
      ctx.strokeRect(startX, startY, width, height);
    }
  });
}

//   let's check it 
// working 

function clearCanvas(
  exitingShapes: Shape[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0)";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  exitingShapes.map((shape)=>{
    if(shape.type === 'rect'){
        ctx.strokeStyle = "rgba(255,255,255)"
        ctx.strokeRect(shape.x,shape.y,shape.height,shape.width);
    }
  })
}


async function getExistingShapes (roomId: string){
 const res = await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);
 const messages = res.data.message;

 const shapes = messages.map((x: {message: string})=>{
     const messageData = JSON.parse(x.message)
     return messageData;
 })
 return shapes;
}

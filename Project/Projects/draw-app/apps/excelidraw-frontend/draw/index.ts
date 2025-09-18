type Shape =
  | {
      type: "react";
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

export default function initDraw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");

  let exitingShapes: Shape[] = [];

  if (!ctx) {
    return;
  }

  ctx.fillStyle = "rgba(0,0,0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      type: "react",
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
    if(shape.type === 'react'){
        ctx.strokeStyle = "rgba(255,255,255)"
        ctx.strokeRect(shape.x,shape.y,shape.height,shape.width);
    }
  })
}

"use client";

import initDraw from "@/draw";
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      initDraw(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} width={2000} height={2000}></canvas>
        <div className="absolute bottom-0 right-0">
            <div className="bg-white">
                React
            </div>

            <div>Circle</div>
        </div>
    </div>
  );
}

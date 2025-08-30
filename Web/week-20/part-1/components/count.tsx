"use client"
import { useState } from "react";
export function Button(){
    const[count,setCount] = useState(0);
    return <div>
    <button className="text-2xl border-4 bg-green-700" onClick={()=>{
            setCount(c => c+ 1)
        }}>
            Click me! ({count})
        </button>
        </div>
}
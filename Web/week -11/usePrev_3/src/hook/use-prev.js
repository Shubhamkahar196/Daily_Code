import { useEffect, useRef } from "react";

//usePrev => allows you to access the previous value 
// of a state or prop in your functional components
export const usePrev = (value) =>{
    const ref = useRef();

    useEffect(()=>{
      ref.current = value;
    },[value]);

    return ref.current;
}
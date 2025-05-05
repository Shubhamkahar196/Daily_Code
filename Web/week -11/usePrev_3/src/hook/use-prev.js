import { useEffect, useRef } from "react";

//usePrev => allows you to access the previous value 
// of a state or prop in your functional components
export const usePrev = (value) =>{

    const ref = useRef();
    console.log("Re-render happened with new value" + value);
    useEffect(()=>{
      console.log("updated the ref to be" + value);
      ref.current = value;
    },[value]);

    return ref.current;
}
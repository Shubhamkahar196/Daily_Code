import type { ReactElement } from "react";

interface ButtonProps{
    variant: "primary"|"secondary";
    size: "sm" |"lg"
    text: string; 
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?:()=> void
}

const variantStyle = {
    "primary" : "bg-blue-500 text-white hover:bg-blue-600",
    "secondary" : "bg-blue-200 text-blue-600 hover:bg-blue-300"
}

const variantSize = {
    "sm": "px-3 py-2",
    "lg": "px-5 py-2"
}

const defaultStyle = "flex gap-2 rounded-lg text-lg item-center justify-center text-xl"

const ButtonUI = (props: ButtonProps)=>{
    return <button onClick={props.onClick}
    className={`${variantStyle[props.variant]} ${variantSize[props.size]} ${defaultStyle}`}>
       {props.startIcon ? props.startIcon : null}
       {props.text}
       {props.endIcon ? props.endIcon : null}
    </button>
}

export default ButtonUI;
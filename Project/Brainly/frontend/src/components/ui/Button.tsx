interface ButtonProps {
  variant : "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: string;
  endIcon?: string;
  onClick: ()=> void;
}



export const Button = (props: ButtonProps) =>{

  return <button></button>


}


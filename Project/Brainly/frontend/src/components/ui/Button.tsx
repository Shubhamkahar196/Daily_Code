import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyle = "rounded-md p-4 flex";

const sizeStyle = {
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]}   ${defaultStyle} ${
        sizeStyle[props.size]
      } `}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon} </div> : null}
      {props.text}
      {props.endIcon}
    </button>
  );
};

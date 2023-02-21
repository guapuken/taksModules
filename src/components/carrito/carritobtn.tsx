// aqui ira el componente
// ya quedo prro
// ahi va
import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};



export default Button;

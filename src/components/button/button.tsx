import React from "react";

interface ButtonProps {
  legend?: string;
}

const Button = (props:ButtonProps)=>{
  const {legend='Clic here'}=props
  return <button>{legend}</button>
}

export default Button;
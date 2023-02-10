import React from "react";
import './button.scss';

interface ButtonProps {
  legend?: string;
  onClick(): any;
}

const Button = (props:ButtonProps)=>{

  const {legend='Clic here', onClick}=props

  return <button onClick={onClick}>{legend}</button>
}

export default Button;
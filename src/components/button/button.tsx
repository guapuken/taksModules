import React, { useEffect, useState } from "react";
import './button.scss';

//types
type hierarchyTypes= 
"Primary" | 
"Secondary" | 
"Tertiary";
type sizeTypes= 
"Small" | 
"Medium" | 
"Large";
type styleButtonTypes = 
"Flat" | 
"Border" | 
"Float";

//interface
export interface ButtonProps {
  hierarchy?: hierarchyTypes ;
  legend?: string;
  onClick?(): any;
  key?: string;
  id?: string;
  title?: string;
  style?: {};
  size?: sizeTypes;
  styleButton?: styleButtonTypes;
  disabled?: boolean;
  primary?:boolean,
  secondary?:boolean,
  tertiary?:boolean,
}

//functions
// function classGenerate(hierarchy="Primary",size="Medium") {
//   const hierarchySlice= hierarchy.slice(0,3)
//   const sizeSlice= size.slice(0,3)
//   return hierarchySlice+sizeSlice
// }

function classStyleButton(e="Flat"){
  return( 
    e==="Flat"?"FlatButton":
      e==="Border"?"BorderButton":
      e==="Float"?"FloatButton":
    "FlatButton"
    )
}

//component
const Button = (props:ButtonProps)=>{

  const {
    legend='Clic here', 
    onClick, 
    key, 
    id, 
    title=legend, 
    style, 
    styleButton= "Flat", 
    size= "Medium", 
    primary=false,
    secondary=false,
    tertiary=false,
    disabled = false
  }=props

  const classGenerate = (size='Medium') =>{
    const hierarchySlice= primary?'Pri':secondary?'Sec':tertiary?'Ter':''
    const sizeSlice= size.slice(0,3)
    return hierarchySlice+sizeSlice
  }

  return (
    <div className={classStyleButton(styleButton)}>
      <button disabled={disabled} className={classGenerate(size)} title={title} key={key} id={id} style={style} onClick={onClick}>
        {legend}
      </button>
    </div>
  )
}

export default Button;



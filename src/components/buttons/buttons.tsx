import React from "react";
import Button from "../button/button";

//types
type compositionTypes = 'horizontal' | 'vertical' | 'box';
type sizeTypes='small' | 'medium' | 'large';
type stringTypes = {
  primary?:string, 
  secondary?:string, 
  tertiary?:string
}
type BooleanTypes = {
  primary?:boolean, 
  secondary?:boolean, 
  tertiary?:boolean
}
type ObjectTypes = {
  primary?:{},
  secondary?:{},
  tertiary?:{}
}
type FunctionTypes = {
  primary?():any,
  secondary?():any,
  tertiary?():any
}

//interface
export interface ButtonsProps {
  composition?:compositionTypes;
  legends?: stringTypes;
  colorButtons?:stringTypes;
  buttons?: BooleanTypes;
  icons?:stringTypes;
  colorHover?:stringTypes;
  className?:stringTypes;
  disabled?:BooleanTypes;
  style?:ObjectTypes;
  styleIcon?:ObjectTypes;
  id?:stringTypes;
  keys?:stringTypes;
  onClick?:FunctionTypes;
  size?: sizeTypes;
  styleComposition?:{};
  rounded?:boolean;
  border?:boolean;
  float?:boolean;
}

//component
const Buttons = (props:ButtonsProps)=>{
  const {
    legends,
    buttons,
    colorButtons,
    icons,
    colorHover,
    className,
    keys,
    id,
    style,
    styleIcon,
    size='medium',
    rounded,
    disabled,
    border,
    composition='horizontal',
    styleComposition,
    onClick={
      primary:()=>alert('change the function'),
      secondary:()=>alert('change the function'),
      tertiary:()=>alert('change the function'),
    }
  }=props

  function returnButtons(){
    function dataButton(tipo='primary'){
      return {
        legend: tipo ==='primary'?legends?.primary : tipo==='secondary'?legends?.secondary: tipo==='tertiary'?legends?.tertiary:'clic here',
        onClick: tipo ==='primary'?onClick?.primary : tipo==='secondary'?onClick?.secondary: tipo==='tertiary'?onClick?.tertiary:undefined,
        size: size,
        color: tipo ==='primary'?colorButtons?.primary : tipo==='secondary'?colorButtons?.secondary: tipo==='tertiary'?colorButtons?.tertiary:undefined,
        colorHover:tipo ==='primary'?colorHover?.primary : tipo==='secondary'?colorHover?.secondary: tipo==='tertiary'?colorHover?.tertiary:undefined,
        className: tipo ==='primary'?className?.primary : tipo==='secondary'?className?.secondary: tipo==='tertiary'?className?.tertiary:undefined,
        primary: tipo==='primary'?buttons?.primary:false,
        secondary: tipo==='secondary'?buttons?.secondary:false,
        tertiary: tipo==='tertiary'?buttons?.tertiary:false,
        rounded: rounded?rounded:false,
        disabled: tipo ==='primary'?disabled?.primary : tipo==='secondary'?disabled?.secondary: tipo==='tertiary'?disabled?.tertiary:undefined,
        style: tipo ==='primary'?style?.primary : tipo==='secondary'?{...style?.secondary}: tipo==='tertiary'?style?.tertiary:undefined,
        styleIcon: tipo ==='primary'?styleIcon?.primary : tipo==='secondary'?styleIcon?.secondary: tipo==='tertiary'?styleIcon?.tertiary:undefined,
        border: border?border:false,
        id: tipo ==='primary'?id?.primary : tipo==='secondary'?id?.secondary: tipo==='tertiary'?id?.tertiary:undefined,
        key: tipo ==='primary'?keys?.primary : tipo==='secondary'?keys?.secondary: tipo==='tertiary'?keys?.tertiary:undefined,
        icon: tipo ==='primary'?icons?.primary : tipo==='secondary'?icons?.secondary: tipo==='tertiary'?icons?.tertiary:undefined
      }
    }
    return( 
    composition === 'horizontal' ? 
      <div style={{
        display:'flex',
        justifyContent:buttons?.secondary && !buttons?.primary && !buttons?.tertiary ?'right': 'space-between',
        gap:'10px', 
        width:'100%',
        ...styleComposition
        }}>
        {buttons?.secondary && <Button {...dataButton('secondary')} style={{width:!buttons?.primary?'50%':'25%',...style?.secondary}}/>}
        {buttons?.tertiary && <Button {...dataButton('tertiary')}  style={{width:'25%',...style?.tertiary}}/>}
        {buttons?.primary && <Button {...dataButton('primary')} style={{width:'50%',...style?.primary}}/>}
      </div>
    : composition === 'vertical' ? 
      <div style={{
        display:'flex',
        justifyContent:buttons?.secondary && !buttons?.primary && !buttons?.tertiary ?'right': 'space-between',
        flexDirection:'column',
        gap:'10px', 
        width:'100%',
        flexWrap:'wrap',
        ...styleComposition
        }}>
        {buttons?.primary && <Button {...dataButton('primary')} style={{width:'100%',...style?.primary}}/>}
        {buttons?.secondary && <Button {...dataButton('secondary')} style={{width:'100%',...style?.secondary}}/>}
        {buttons?.tertiary && <Button {...dataButton('tertiary')}  style={{width:'100%',...style?.tertiary}}/>}
      </div>
    : composition === 'box' ? 
      <div style={{
        display:'flex',
        justifyContent:buttons?.secondary && !buttons?.primary && !buttons?.tertiary ?'right': 'space-between',
        flexDirection:'column',
        gap:'10px', 
        width:'100%',
        flexWrap:'wrap',
        ...styleComposition
        }}>
        {buttons?.primary && <Button {...dataButton('primary')} style={{width:'100%',...style?.primary}}/>}
          <div style={{display:'flex',gap:'10px',maxWidth:'100%',justifyContent:'right'}}>
            {buttons?.tertiary && <Button {...dataButton('tertiary')}  style={{width:'50%',...style?.tertiary}}/>}
            {buttons?.secondary && <Button {...dataButton('secondary')} style={{width:'50%',...style?.secondary}}/>}
          </div>
      </div>
    :
    <></>
    )
  }
  return  returnButtons()
}

export default Buttons;
import React, { useState } from "react";
import './button.scss';

//types
type sizeTypes='small' | 'medium' | 'large';

export interface ButtonProps {
  legend?: string;
  onClick(): any;
  size?: sizeTypes;
  color?: string;
  colorHover?:string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  style?: {};
  styleIcon?: {};
  border?: boolean;
  float?: boolean;
  id?: string;
  key?: string;
  icon?: string;
}


const Button = (props:ButtonProps) => {

  //Hooks
  const [isHover, setIsOver] = useState(false);

  //Destructuring
  const { 
    style, 
    styleIcon,
    color,
    colorHover,
    primary, 
    secondary, 
    tertiary, 
    legend='button', 
    size, 
    className,
    onClick=()=>alert('Cambia la función'), 
    rounded, 
    disabled, 
    border,
    float, 
    id, 
    key, 
    icon
  } = props;

  //functions
  const handleMouseEnter = ()=>{
    setIsOver(true)
  }
  const handleMouseLeave = ()=>{
    setIsOver(false)
  }
  function backgroundGenerate(){
    switch(border){
      case true:
        return (
          primary && isHover?'#126EFA':
            secondary && isHover? '#FC3D38' : 
            tertiary && isHover? '#7BAFFF' : 
            !primary && !secondary && !tertiary && isHover? '#525252' :
            colorHover && isHover ?colorHover:
          'transparent'
          )
      default:
        return (
          disabled && (primary || color) ? '#dedede':
            color? isHover ? colorHover : color:
              primary ? isHover ?'#0523E3': '#126EFA':
                secondary? isHover? '#FC3D38' :'transparent':
              tertiary ? isHover? '#7BAFFF' : 'transparent':
            isHover?'#525252':
          '#DEDEDE'
          )
    }
  }

  //Component
  return (
    <button
    onClick={onClick} 
    id={id} 
    key={key} 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={
    float? `FloatButton ${className}`: className
    }
    disabled={disabled} 
    style={{
      borderRadius:
      rounded?'20px': '5px',
      padding: icon?
      size==='small'?
        '5px 10px 5px 5px': 
        size==='medium'?'7.5px 15px 7.5px 7.5px': 
        size==='large'?'10px 30px 10px 10px':
        '10px 20px 10px 10px': 
      size==='small'? '5px 10px':
        size==='medium'?'7.5px 15px':
        size==='large'?'10px 30px':
      '7.5px 15px',
      background:backgroundGenerate(),
      color:
      isHover?'#fff':
        !border && (primary || color) ?'#fff':
          disabled?'#dedede':
            primary?'#126EFA': 
            secondary?'#FC3D38':
          tertiary?'#7BAFFF':
        color?color:
      '#525252',
      border: 'none',
      fontSize: size==='small'?'15px':size==='medium'?'16px':size==='large'?'18px':'16px',
      boxShadow:
      isHover?'none':
        border || secondary ?`inset 0 0 0 2px ${disabled? '#dedede':
            color?color:
            primary?'#126EFA': 
          secondary? '#FC3D38':
        tertiary? '#7BAFFF':
        'gray'}`:
      '',
      display:'flex', 
      alignItems:'center',
      justifyContent:'space-around',
      cursor:'pointer',
      ...style
    }} 
    >
      {icon && <span 
      style={{
      marginRight:'10px',
      marginLeft:'5px', 
      }} > 
      <img
      src={icon} 
      // accept='.svg,.png'
      alt=''
      style={{
      maxHeight: 
      size==='small'?'15px':
        size==='medium'?'16px':
        size==='large'?'18px':
      '16px',
      ...styleIcon}} 
      />
      </span>}
      {legend && legend}
      {icon && <span></span>} 
    </button>
  )
}

export default Button;



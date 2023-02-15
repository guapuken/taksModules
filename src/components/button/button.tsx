import React, { useState } from "react";
import './button.scss';

//types
type sizeTypes='small' | 'medium' | 'large';

export interface ButtonProps {
  legend?: string;
  onClick?(): any;
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
    className={className}
    disabled={disabled} 
    style={float?{
      background:backgroundGenerate(),
      position:'relative',
      border: 'none',
      boxShadow:
        isHover || (tertiary && border)?'none':
          border || secondary ?`inset 0 0 0 2px ${disabled? '#dedede':
              color?color:
              primary?'#126EFA': 
            secondary? '#FC3D38':
          tertiary? '#7BAFFF':
          'gray'}`:
        '',
      height:size==='small'?'30px':size==='medium'?'40px':size==='large'?'50px':'30px',
      width:size==='small'?'30px':size==='medium'?'40px':size==='large'?'50px':'30px',
      borderRadius:'50px',
      color: isHover?'#fff':
        !border && (primary || color) ?'#fff':
          disabled?'#dedede':
            primary?'#126EFA': 
            secondary?'#FC3D38':
          tertiary?'#7BAFFF':
        color?color:
      '#525252',
      fontWeight:'bold',
      fontSize: '20px'
    }:{
      position:'relative',
      borderRadius:rounded?'20px': '5px',
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
      color: isHover?'#fff':
        !border && (primary || color) ?'#fff':
          disabled?'#dedede':
            primary?'#126EFA': 
            secondary?'#FC3D38':
          tertiary?'#7BAFFF':
        color?color:
      '#525252',
      border: 'none',
      fontSize: size==='small'?'15px':size==='medium'?'16px':size==='large'?'18px':'16px',
      maxHeight:'100%',
      boxShadow:
      isHover || (tertiary && border)?'none':
        border || secondary ?`inset 0 0 0 2px ${disabled? '#dedede':
            color?color:
            primary?'#126EFA': 
          secondary? '#FC3D38':
        tertiary? '#7BAFFF':
        'gray'}`:
      '',
      display:'flex', 
      alignItems:'center',
      justifyContent:icon?'space-around':'center',
      cursor:'pointer',
      ...style
    }} 
    >
      {
        icon && legend && float ? 
        <span>
          <img
          src={icon} 
          // accept='.svg,.png'
          alt=''
          style={{
            height: 
            size==='small'?'18px':
              size==='medium'?'25px':
              size==='large'?'30px':
            '16px',
            fill:'#000',
            position:'absolute',
            left:'50%',
            top:'50%',
            transform:'translate(-50%,-50%)',
            ...styleIcon
          }} 
          />
        </span>: 
        !float && legend && icon ?
        <span >
          <img
          src={icon} 
          // accept='.svg,.png'
          alt=''
          style={{
            height: 
            size==='small'?'18px':
              size==='medium'?'25px':
              size==='large'?'30px':
            '16px',
            marginBottom:'0',
            marginRight:'10px',
            marginLeft:'10px',
            width:size==='small'?'18px':
              size==='medium'?'25px':
              size==='large'?'30px':
            '16px',
            ...styleIcon
          }}
          />
        </span>:
        <span></span>
      }

      {legend && !float && legend}
      {icon && !float && <span style={{width:'10px'}}></span>} 
    </button>
  )
}

export default Button;
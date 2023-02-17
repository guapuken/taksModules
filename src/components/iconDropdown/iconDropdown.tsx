import React, { useState } from "react";
//
import '../../index.css';
import './iconDropdown.scss';

type submenus = {
  submenu?:string;
  onClick?():any;
}
type menus = {
  submenus?: submenus[];
  menu?:string;
  onClick?():any;
}
export interface IconDropdownProps{
  icon?: string;
  menus?: menus[];
  submenus?: menus[];
}

const IconDropdown = (props:IconDropdownProps) => {
  const [isHover,setIsOver]=useState(false)
  const {icon, menus}=props

  
  const handleMouseEnter = ()=>{
    setIsOver(true)
  }
  const handleMouseLeave = ()=>{
    setIsOver(false)
  }
  
  const Menu = (props:any)=>{
    const {menus}=props
    return (
    <>
      {menus.map((e:any)=>(
        <>
          <button onClick={e.onClick} className={e.submenus?'dropbtn':''}>{e.menu}</button>
        </>
      ))}
    </>
    )
  }

  let iconStyles = {
    height:'2rem'
  }
  let menusito = [{
    submenus:{
      submenu:'Kaori',
      onClick:()=>alert('hola Kaori')
    }
  }]
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          <img src={icon} alt="" />
        </button>
        {menus &&
          <div className="dropdown-content">
            <Menu menus={menusito}/>
          </div>  
        }
      </div> 
    </div>
  )
}

export default IconDropdown;
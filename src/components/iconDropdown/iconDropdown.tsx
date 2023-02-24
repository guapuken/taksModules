import React, { useState } from "react";
import button from "../button";
import './iconDropdown.scss';
type submenusArray = {
  title?:string;
  onClick?():any;
}
type optionsType = {
  submenus?: submenusArray[];
  title?:string;
  onClick?():any;
}
export interface IconDropdownProps{
  icon?: string | any;
  options?: optionsType[];
  submenus?: submenusArray[];
  style?: {};
}

const IconDropdown = (props:IconDropdownProps) => {
  const [isHover,setIsOver]=useState(false)
  const {icon, options, style}=props

  const StructureGenerator = ()=>{
    const menus = options?.map((menu)=>(
      <>
        <div className={menu.submenus?"dropdownSubmenu":''}>
          <button onClick={menu.submenus?()=>{}:menu.onClick} className={menu.submenus?'dropbtnmenu':''}>
            {menu.title}
          </button>
          { menu.submenus &&
            <div className="dropdown-contentSubmenu">
              {menu.submenus.map((submenu)=>(
                <button onClick={submenu.onClick}>
                  {submenu.title}
                </button>
              ))}
            </div>
          }
        </div>
      </>
    ))
    return menus
  }
  return (
    <div className="navbar" style={style}>
      <div className="dropdown">
        <button className="dropbtn">
          <img src={icon} alt="" style={{background:'transparent'}}/>
        </button>
        {options &&
          <div className={"dropdown-content"}>
            <StructureGenerator/>
          </div>  
        }
      </div> 
    </div>
  )
}

export default IconDropdown;
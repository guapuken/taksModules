import React from "react";
import '../../index.css';

export interface InputTaskProps {

}
const InputTask = ()=>{

  let inputsStyles = {
    width:'100%',
  }
  return (
  <div>
    <input style={{fontSize:'1.8rem',...inputsStyles}} placeholder='Nombre de la tarea' type="text" />
    <input style={{fontSize:'1.8rem',...inputsStyles}} placeholder='Descripción de la tarea' type="text" />
  </div>
    )
}

export default InputTask;
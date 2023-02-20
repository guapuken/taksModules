import React, { useState } from "react";
import '../../index.css';
import './inputTask.scss';



export interface InputTaskProps {
  disabled?:boolean; 
  tarea?:boolean; 
  subtarea?:boolean;
  checked?:boolean;
  onChangeName?():any; 
  onChange?():any; 
  onChangeDescrption?():any;
  data?:any;
}
const InputTask = (props:InputTaskProps)=>{

  const {
    disabled, 
    tarea, 
    subtarea,
    onChangeName,
    onChangeDescrption,
    onChange,
    checked,
  } = props
  const [check,setCheck] = useState(checked)

  let inputStyles = {
    width:'100%',
    border:'none',
    opacity:check?'.5':'1',
  }
  return (
    <div style={{display:'flex'}}>
      <div style={{marginTop:tarea?'.5rem':subtarea?'.2rem':'.5rem'}}>
        <input type="checkbox" id="test2" onClick={()=>setCheck(!check)} checked={check} disabled={disabled}  onChange={onChange}/>
        <label htmlFor="test2"></label>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', width:'100%'}}>
        <input
        type="text"
        placeholder={`Nombre de la ${tarea?'tarea':subtarea?'subtarea':'tarea'}`}
        style={{
          fontSize:tarea?'2rem':subtarea?'1.6rem':'2rem',
          fontWeight:'bold',
          textDecoration:check?'line-through':'none',
          marginBlock:'0',
          ...inputStyles
        }}
        onChange={onChangeName}
        />
        <input
        type='text'
        placeholder={`Descripción de la ${tarea?'tarea':subtarea?'subtarea':'tarea'}`}
        style={{
          fontSize:tarea?'1.6rem':subtarea?'1.4rem':'1.6rem',
          fontWeight:'lighter',
          marginTop:'.2rem',
          ...inputStyles
        }}
        onChange={onChangeDescrption}
        />
      </div>
    </div>
    )
}

export default InputTask;
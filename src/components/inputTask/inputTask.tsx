import React, { useState } from "react";
import '../../index.css';
import './inputTask.scss';

export interface InputTaskProps {

}
const InputTask = ()=>{
  const [checked,setChecked] = useState(false)

  let inputsStyles = {
    width:'100%',
    border:'none'
  }
  return (
  <div>
    <p>
      <input type="checkbox" id="test2" onClick={()=>setChecked(!checked)} checked={checked} />
      <label htmlFor="test2">Yellow</label>
    </p>
  </div>
    )
}

export default InputTask;
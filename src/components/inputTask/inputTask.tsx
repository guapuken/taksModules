import React, { useEffect, useRef, useState } from "react";
import './inputTask.scss';



export interface InputTaskProps {
  disabled?:boolean; 
  principalTask?: boolean;
  isSubtask?:boolean;
  checked?:boolean;
  onChangeName?():any; 
  onChange?():any; 
  onChangeDescrption?():any;
  data?:any;
}
const InputTask = (props:InputTaskProps)=>{

  const {
    disabled, 
    principalTask,
    onChange,
    checked,
    isSubtask
  } = props
  const [check,setCheck] = useState(checked)
  const [nameTask,setNameTask]=useState('')
  const [descriptionTask,setDescriptionTask]=useState('')

  //this component allow change the height textarea automatically
  const AutoResizeInput = (props:any)=>{
    //destructuring properties
    const{ 
      style, 
      onBlur, 
      initialValue,
      taskType,
      placeholder,
      tabIndex,
      disabled
      
    }=props

    function taskTypes(type:string){
      switch (type) {
        case 'principal':
          return 'PrincipalTask-TaskModule'
        case 'task':
          return 'Task-TaskModule'
        case 'subtask':
          return 'SubTask-TaskModule'
        default: return 'SubTask-TaskModule'
      }
    }

    //Hooks 
    const [value, setValue] = useState(initialValue);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (textAreaRef.current) {
        // We need to reset the height momentarily to get the correct scrollHeight for the textarea
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
  
        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will product an incorrect value.
        textAreaRef.current.style.height = scrollHeight + "px";
      }
    }, [value]);
    
    return(
      <textarea 
      ref={textAreaRef} 
      disabled={disabled}
      onChange={(e:any)=>setValue(e.target?.value)}
      onBlur={(e)=>onBlur(e.target.value)}
      tabIndex={tabIndex}
      placeholder={placeholder} 
      rows={1}
      value={value}
      className={taskTypes(taskType)}
      style={style}
      />
    )
  }

  //Final render in principal component
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', width:'100%', alignItems:'flex-start'}}>
        <div style={{marginTop:principalTask?'1rem':'.8rem'}}>
          <input type="checkbox" id="test2" onClick={()=>setCheck(!check)} checked={check} disabled={disabled}  onChange={onChange}/>
          <label htmlFor="test2"></label>
        </div>
        <AutoResizeInput
          taskType={principalTask?'principal':'task'}
          style={{textDecoration:check?'line-through':'none',opacity:check?'.5':'1', with:'100%'}}
          onBlur={(value:any)=>{setNameTask(value)}}
          initialValue={nameTask}
          placeholder={`Nombre de la ${isSubtask?'subtarea':'tarea'}`}
          tabIndex={1}
          disabled={check?true:false}
          />
      </div>
          <AutoResizeInput
            taskType={'subtask'}
            style={{opacity:check?'.3':'.5', marginLeft:'2rem'}}
            onBlur={(value:any)=>{setDescriptionTask(value)}}
            initialValue={descriptionTask}
            placeholder={`Descripción de la ${isSubtask?'subtarea':'tarea'}`}
            tabIndex={2}
            disabled={check?true:false}
          />
    </div>
    )
}

export default InputTask;
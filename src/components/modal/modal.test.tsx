import React from "react";
import Buttons from "../buttons";
import IconDropdown from "../iconDropdown";
import InputTask from "../inputTask";
import Modal from "./modal";

describe('Modal',()=>{
    test('render the Modal component',()=>{
        expect(
        <Modal
        Content={()=>(
            <div style={{position:'relative', height:'100%', width:"76rem"}}>
                <InputTask />
                <div style={{marginLeft:'2rem', marginTop:'1rem', borderLeft:'.2rem solid #000',paddingLeft:'1rem'}}>
                    <InputTask isSubtask checked/>
                    <InputTask isSubtask checked/>
                    <InputTask isSubtask />
                    <InputTask isSubtask />
                    <InputTask isSubtask />
                </div>
                <div style={{marginTop:'1rem'}}>
                    <InputTask />
                    <div style={{marginLeft:'2rem', marginTop:'1rem', borderLeft:'.2rem solid #000',paddingLeft:'1rem'}}>
                        <InputTask isSubtask />
                        <InputTask isSubtask />
                        <InputTask isSubtask />
                        <InputTask isSubtask />
                        <InputTask isSubtask />
                    </div>
                </div>
                <Buttons
                styleComposition={{marginTop:'2rem', width:'inherit', paddingBottom:'2rem'}}
                buttons={{primary:true, secondary:true}}
                legends={{
                    primary:'Finalizar creación de tarea',
                    secondary:'Cancelar creación de tarea'
                }}
                composition='vertical'
                />
            </div>
            )}
        />
        )
    })
})
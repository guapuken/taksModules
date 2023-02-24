import React from "react";
import { Meta,Story } from "@storybook/react";

import Modal,{ModalProps} from "./modal";
import IconDropdown from "../iconDropdown";
import InputTask from "../inputTask";
import Buttons from "../buttons";

const Template: Story<ModalProps> = (args)=>(
    <Modal {...args}/>
)
export const Initial = Template.bind({})
Initial.args={}

export const Tareas = Template.bind({})
Tareas.args = {
    Content:()=>(
        <div >
            <InputTask isSubtask/>
            <Buttons
            buttons={{primary:true, secondary:true}}
            legends={{
                primary:'Finalizar creación de tarea',
                secondary:'Cancelar creación de tarea'
            }}
            composition='vertical'
            />
        </div>
        ),
}

export default{
    title:'Modal',
    component:Modal
} as Meta;
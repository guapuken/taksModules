import { Meta, Story } from "@storybook/react";
import React from "react";

import IconDropdown, { IconDropdownProps } from "./iconDropdown";


const Template: Story<IconDropdownProps> = (args)=>(
  <IconDropdown {...args}/>
)

export const Basic = Template.bind({})
Basic.args={
  menus:[
    {
      menu:'Responsable',
      onClick:()=>alert('Hola')
    },
    {
      menu:'Equipo',
      onClick:()=>alert('Hola')
    },
    {
      menu:'Revisión',
      onClick:()=>alert('Hola')
    }
  ]
}

export default {
  title:'IconDropdown',
  component:IconDropdown,
  argTypes:{
    icon:{
      control:'text'
      // control:{
      //   type:'file',
      //   accept:'svg'
      // }
    },
  }
} as Meta;
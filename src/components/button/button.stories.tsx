import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from "./button";

  export default {
    title:'Mi fantástico botón',
    component: Button,
  } as ComponentMeta<typeof Button>;

  const Template : ComponentStory<typeof Button> = (args)=> <Button {...args}/>;

export const Default = Template.bind({});

  Default.args = {
    legend:'Hola',
    onClick: ()=>alert('Hola')
  }
export const Secondary = Template.bind({});

  Secondary.args = {
    legend:'Adios',
    onClick: ()=>alert('Adios')
  }

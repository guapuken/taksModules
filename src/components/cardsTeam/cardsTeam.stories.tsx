import { Meta, Story } from "@storybook/react";
import React from "react";
import CardsTeam, { CardsTeamProps} from "./cardsTeam"

const Template: Story<CardsTeamProps> = (args) =>(
  <CardsTeam {...args}/>
)
export const Small= Template.bind({});
Small.args={
  rounded:true
}
export const Proyectos= Template.bind({});
Proyectos.args={}

export default {
  title: "Cards", 
  component: CardsTeam,
  // size: {
  //   control: {
  //     type: "select",
  //     options: ["small","medium","large"]
  //   }
  // },
  // border: {
  //   control: {
  //     type:"",
  //     options: "",
  //   }
  // },
  // margin: {
  //   type:"",
  //   options: "",
  // }
  argTypes:{titulo:{
    control:'text'
  },
  Contenido:{
    control: 'text'
  },}
} as Meta;

import React from "react";
//imports storybook
import { Meta, Story } from "@storybook/react";
//import component
import ProgressBar, { ProgressBarProps } from './progressBar';

const Template: Story<ProgressBarProps> = (args)=>(
  <ProgressBar {...args}/>
);
export const Basic = Template.bind({})
Basic.args = {}
export const OnTime = Template.bind({})
OnTime.args = {
  valor: 75,
  status:'onTime'
}
export const Delayed = Template.bind({})
Delayed.args = {
    valor: 75,
    status:'delayed'
}
export const OutOfTime = Template.bind({})
OutOfTime.args = {
    valor: 75,
    status:'outOfTime'
}

export default{
  title:'ProgressBar',
  component:ProgressBar,
  argTypes:{
    valor:{
      control:{
        type:'number',
        min: 0,
        max:100
      }
    },
    width:{
      control:'number',
    },
    status:{
      control:{
        type:'select',
        options:['onTime', 'delayed', 'outOfTime']
      }
    }
  }
} as Meta;
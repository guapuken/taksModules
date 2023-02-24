import { Meta, Story } from "@storybook/react";
import React from "react";
import IconDropdown from "../iconDropdown";
import Cards, { CardsProps} from "./cards"

const Template: Story<CardsProps> = (args) =>(
  <Cards {...args}/>
)
export const Initial= Template.bind({});
Initial.args={ 
}
export const Team= Template.bind({});
Team.args={
  rounded:true,
  Content:()=>{
    return(
      <div style={{width:'100%', height:'100%', position:'relative'}}>
        <div style={{position:'absolute', top:'50%', transform:'translateY(-50%)', marginLeft:'1rem'}}>
          <div style={{
            width:'100%',
            height:'100%',
            borderRadius:'1rem 0 0 1rem'
            }}>
            <h3 style={{marginBlock:'0', fontSize:'1.6rem'}}>
              Traffic
            </h3>
            <p style={{marginBlock:'0', fontSize:'1.4rem'}}>5 Integrantes...</p>
          </div>
        </div>
        <div style={{background:'green', height:'10rem', width:'1.5rem', position:'absolute', top:'-1rem', right:'-1rem'}}>
        </div>
      </div>
    )
  },
  width:25,
  height:10,
  Aside:()=>{
    return (
      <div style={{display:'flex', flexWrap:'wrap', gap:'2rem'}}>
        <img src={require('../../img/vaciar.svg')} alt="editar" style={{height:'3rem'}}/>
        <IconDropdown icon={require('../../img/opciones.svg')} 
        options={[
          {title:'Editar'},
          {title:'Compartir'},
          {title:'Previsualizar'},
        ]}
        style={{marginLeft:'-.2rem'}}
        />
      </div>
    )
  }
}


export default {
  title: "Cards", 
  component: Cards,
  argTypes:{
    height:{
      control:'number'
    },
    width:{
      control:'number'
    },
    titulo:{
      control:'text'
    },
    rounded:{
      control:'boolean'
    },
  }
} as Meta;

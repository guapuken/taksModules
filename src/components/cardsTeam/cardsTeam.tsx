// import React, { useEffect, useState } from "react";
import React from 'react';
import cardsTeam from '.';
import './cardsTeam.scss';

//Type casos de las cards 
// type sizetypes=
// "small"|
// "medium"|
// "large";

export interface CardsTeamProps{
  width?: number,
  height?:number;
  border?: string,
  margin?: string,
  padding?: string;
  rounded?: boolean;
  valueBadge?: number;
  titulo?: string;
  Contenido?: any;
  data?: any;
}

const CardsTeam = (props:CardsTeamProps) => {
  const {width=100, height=300,data={}, rounded=false, titulo='Cards', Contenido}=props
return (
  <div className='ContenedorGeneral' style={{    
    height: width,
    width: height,
    borderRadius: rounded ? '20px' : '0px',
    background: "wait"
    }}>
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', position:'relative', width:'100%', height:'100%'}}>
        <div>{titulo}</div>
        {Contenido && <div>
          <Contenido data={data}/>
        </div>}
      </div>
      <div className='contenedorinterno' style={{
        height:"",
        width:"",
       }}>
        <div style={{display:"flex",}}>

        </div>

      </div>
  </div>
  )
}

export default CardsTeam; 










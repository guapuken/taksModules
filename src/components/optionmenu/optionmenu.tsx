import React, { useState } from "react";
import "./optionmenu.scss";



export interface OptionmenuProps{};

const Optionmenu= (props:OptionmenuProps) => {
  const [menu, setMenu]=useState(false)
  // setMenu(!menu)

  const datosConCategoria =[
      {nombre: 'Tarea',
        menus:[
          {
            title:'Nuevo',
            onClick:()=>alert('onClick')
          },
          {
            title:'Gestionar',
            onClick:()=>alert('onClick')
          }
        ]
    },
      {nombre: 'Plantillas',
        menus:[
          {
            title:'Nuevo',
            onClick:()=>alert('onClick ')
          },
          {
            title:'Gestionar',
            onClick:()=>alert('onClick')
          }
        ]
    },
    {nombre: 'Equipo',
        menus:[
          {
            title:'Nuevo',
            onClick:()=>alert('onClick ')
          },
          {
            title:'Gestionar',
            onClick:()=>alert('onClick')
          }
        ]
    },
    {nombre: 'Proyectos',
        menus:[
          {
            title:'Gestionar',
            onClick:()=>alert('onClick ')
          },
          {
            title:'Estatus de proyectos',
            onClick:()=>alert('onClick')
          }
        ]
    },
    {nombre: 'Grafica de avances',
        menus:[
          {
            title:'Generales',
            onClick:()=>alert('onClick ')
          },
          {
            title:'Personales',
            onClick:()=>alert('onClick')
          }
        ]
    },
  ]
  const datosSinCategoria = [
    {
      title:'Nueva proyecto',
      onClick:()=>alert('onClick')
    },
    {
      title:'Gestionar proyecto',
      onClick:()=>alert('onClick')
    }
  ]
 
  const Menu = datosConCategoria.map((categoria)=>
    <div style={{display:'flex', flexDirection:'column'}}>
      <h1>{categoria.nombre}</h1>
      <div>
        <h2 className="datosConCategoria">{categoria.menus.map((e)=>e.title)}</h2>
      </div>
    </div>
  )

  const menusSinCategoria = datosSinCategoria.map((menu)=>
  <div style={{display:'flex', flexDirection:'column'}}>
    <li ><a href=""><h3 className="datosSinCategoria"></h3>{menu.title}</a></li>
</div>
  )

  const CategoritaDeMenu = datosConCategoria.map((nombre)=>
  <div style={{display:'flex', flexDirection:'column'}}>
    <li><a href=""><h4 className="datosConCategoria"></h4>{""}</a></li>
    </div>
  )
  

  type objectMenustypes={title?:string, onClick?:()=>void}

interface MenuConCategoriasProps {
  nombre?: string;
  datosMenu?:objectMenustypes[]
}

  const MenuConCategoria = (props:MenuConCategoriasProps)=>{
    return(
    <div>
      <h2>{props.nombre}</h2>
        <ul className="datosConCategoria">
          {props.datosMenu?.map((e:objectMenustypes)=><li style={{fontSize:'2rem'}}><a onClick={e.onClick}>{e.title}</a></li>)}
        </ul>
    </div>)
  }

  

  // const categoria= datos.map((categorias)=> categorias.Categoria?.map((menuCategoria)=> menuCategoria))

  // const menuCategorias= categoria.map((menuCategoria)=> menuCategoria)


  // console.log('Datos categorias: ',categoria)
  // console.log('Datos menuCategorias: ',menuCategorias)
  return <>
  <MenuConCategoria nombre='Tareas' datosMenu={datosSinCategoria}/>
  <MenuConCategoria nombre='Pantillas' datosMenu={datosSinCategoria}/>
  <MenuConCategoria nombre= 'Equipo' datosMenu={datosSinCategoria}/>
  <MenuConCategoria nombre= 'Proyectos' datosMenu={datosSinCategoria}/>
  <MenuConCategoria nombre= 'Grafica de avances' datosMenu={datosSinCategoria}/>
  </>
  

}

export default Optionmenu;
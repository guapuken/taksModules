import React from 'react';
//Importación de funciones
import { cardH, cardW } from '../../utils/functions/functions';
//importación de types comunes
import { Modo } from '../../types';
// importación de estilos
import './cards.scss';

//definición de interfaces
export interface cardIntrfc {
	// tema de visualización
	modo?: Modo;
	//componentes
	Content?: any;
	Aside?: any;
	data?: any;
	// booleanos
	rounded?: boolean;
}
// creación del componente principal
const Cards = (props: cardIntrfc) => {
	//desestructuración de propiedades
	const { rounded = false, Content, data, Aside, modo = 'Light' } = props;

	//renderizado del componente
	return (
		//Contenedor general de la card
		<div
			className={
				Content
					? `ctn${Aside ? 'Asd' : ''}${rounded ? 'Rnd' : ''}${
							modo === 'Dark' ? 'Dark' : ''
					  }_CC`
					: `noCtn${modo === 'Dark' ? 'Dark' : ''}_CC`
			}
		>
			{/* Si no existe contenido para ser mostrado en las cards se renderiza este bloque de código */}
			{!Content && (
				<>
					<h4>Without content 😥</h4>
					<p style={{ fontSize: '13px' }}>Add property Content and see it </p>
				</>
			)}

			{/* Cuando existe el Contente se ejecuta esta acción */}
			{Content && (
				<div className="contentCtn">
					{/* Contenedor general del children */}
					<div className="childrenCtn">{<Content data={data} />}</div>
					{/* Si existe la propiedad de Aside se renderiza este código */}
					{Aside && (
						<div className="asideCtn">
							{/* Contenedor general del Aside */}
							<div className="asideChildren">
								<Aside />
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Cards;

import React from 'react';
//importación de types comunes
import { cardIntrfc } from './types';
// importaciónde componentes de error
import ErrorNC from './files/errorNoContent';
// importación de estilos
import './cards.scss';

// creación del componente principal
const Cards = (props: cardIntrfc) => {
	//desestructuración de propiedades
	const { rounded = false, Content, data, Aside, modo = 'Light', className } = props;

	//renderizado del componente
	return (
		//Contenedor general de la card
		<div
			className={
				Content
					? `ctn${Aside ? 'Asd' : ''}${rounded ? 'Rnd' : ''}${modo}_CC`
					: `noCtn${modo}_CC ${className}`
			}
		>
			{/* Si no existe contenido para ser mostrado en las cards se renderiza este bloque de código */}
			{Content ?? <ErrorNC />}

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

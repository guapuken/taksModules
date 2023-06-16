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
	const {
		rounded = false,
		Content,
		data,
		Aside,
		modo = 'Light',
		className,
		height,
		themeStyle,
	} = props;

	return (
		<div
			className={`card ${className}`}
			theme-config={modo}
			theme-style={themeStyle}
			contenido-card={Content ? 'conContenido' : 'sinContenido'}
			aside-element={Aside ? 'aside' : 'NoAside'}
			card-style={rounded ? 'redondeada' : 'cuadrada'}
			style={{ height: height ?? '' }}
		>
			{Content ? (
				<div className="card__contenido">
					<div className="card__contenido-children">{<Content data={data} />}</div>
					{Aside && (
						<div className="card__contenido-aside">
							<div className="card__contenido-aside-children">
								<Aside />
							</div>
						</div>
					)}
				</div>
			) : (
				<ErrorNC />
			)}
		</div>
	);
};

export default Cards;

import React from 'react';
//importación de types comunes
import { cardIntrfc } from './types';
// importaciónde componentes de error
import ErrorNC from './files/errorNoContent';
// importación de estilos
import './cards.scss';
import { SimpleContainer, ValidationComponent } from '../Atoms';

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
		<SimpleContainer
			labels={{
				className: `cardComponent ${className ?? ''}`,
				'theme-config': modo,
				'theme-style': themeStyle,
				'contenido-card': Content ? 'conContenido' : 'sinContenido',
				'aside-element': Aside ? 'aside' : 'NoAside',
				'card-style': rounded ? 'redondeada' : 'cuadrada',
				style: { height: height ?? '' },
			}}
		>
			{Content ? (
				<SimpleContainer className="cardComponent__contenido">
					<SimpleContainer className="cardComponent__contenido-children">
						<Content data={data} />
					</SimpleContainer>
					<ValidationComponent validate={Aside}>
						<SimpleContainer className="cardComponent__contenido-aside">
							<SimpleContainer className="cardComponent__contenido-aside-children">
								<Aside />
							</SimpleContainer>
						</SimpleContainer>
					</ValidationComponent>
				</SimpleContainer>
			) : (
				<ErrorNC modo={modo} />
			)}
		</SimpleContainer>
	);
};

export default Cards;

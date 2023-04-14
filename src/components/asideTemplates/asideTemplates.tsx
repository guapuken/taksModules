import React from 'react';

// types
import { aside } from './types';
// styles
import './aside.scss';
// types para la documentación
import { Modo } from '../../types';

/** documentación del componente
 *
 * @param {boolean} props.isWhite - define si el Aside contiene un color de fondo
 * @param {any} props.children - obtiene el componente o el children que será usado
 * @param {Modo} props.modo - define el tema en el que se encuentra el componente
 * @returns - renderiza un aside que recibe elementos y los muestra con un bg dependiendo el color
 */
const AsideTemplates = (props: aside) => {
	// desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const { modo = 'Light' } = props;

	return (
		<div className={`ctn${datos.isWhite ? 'White' : ''}${modo}_ATC`}>
			{!datos.children && (
				<div className={`noCtn${modo}`}>
					<h1>Ups!</h1>
					<p>parece que olvidaste agregar tu contenido</p>
				</div>
			)}
			{datos.children && datos.children}
		</div>
	);
};

export default AsideTemplates;

import React from 'react';

// types
import { aside } from './types';
// styles
import './aside.scss';
// componentes principales
import { ErrorNc } from './files';
// types para la documentación
import { Modo } from '../../types';

/** documentación del componente
 *
 * @param {boolean} isWhite - define si el Aside contiene un color de fondo
 * @param {any} children - obtiene el componente o el children que será usado
 * @param {Modo} modo - define el tema en el que se encuentra el componente
 * @param {boolean} visible - define si el aside será visible o no
 * @returns - renderiza un aside que recibe elementos y los muestra con un bg dependiendo el color
 */
const AsideTemplates = ({ isWhite = false, children, modo = 'Light', visible }: aside) => {
	return (
		<div className={`ctn${isWhite ? 'White' : ''}${visible ? 'Vis' : ''}${modo}_ATC`}>
			{children ?? <ErrorNc modo={modo} />}
		</div>
	);
};

export default AsideTemplates;

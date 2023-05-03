import React from 'react';
// types
import { aside } from './types/types';
// componentes principales
import { ErrorNc } from './principalComponents';
// types que se utilizan en documentación
import { Modo } from '../../types';

// estilos del componente
import './styles/aside.scss';

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
			<div className="children">{children ?? <ErrorNc />}</div>
		</div>
	);
};

export default AsideTemplates;

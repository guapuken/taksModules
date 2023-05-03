import React, { Fragment } from 'react';
// types
import { aside } from './types/types';
// componentes principales
import { ErrorNc, NoTasks } from './principalComponents';
// types que se utilizan en documentación
import { Modo } from '../../types';

// estilos del componente
import './styles/aside.scss';
import Button from '../button/Button';
import CardTaskReview from '../cardTaskReview/cardTaskReview';
import { useWindowSize } from '../../utils/windowSize';

/** documentación del componente
 *
 * @param {boolean} isWhite - define si el Aside contiene un color de fondo
 * @param {any} children - obtiene el componente o el children que será usado
 * @param {Modo} modo - define el tema en el que se encuentra el componente
 * @param {boolean} visible - define si el aside será visible o no

 * @returns - renderiza un aside que recibe elementos y los muestra con un bg dependiendo el color
 */
const AsideTemplates = ({
	modo = 'Light',
	visible,
	imageNoTasks,
	priText,
	secText,
	tasks,
	legendBtn,
	idSection,
	onCl_btn,
}: aside) => {
	return (
		// <div className={`ctn${isWhite ? 'White' : ''}${visible ? 'Vis' : ''}${modo}_ATC`}>
		<div className={`ctn${modo}_ATC`} vs-asd={visible ? 'Visible' : 'Normal'}>
			<div className="children">
				{!tasks && !priText && !secText ? (
					<ErrorNc />
				) : (
					<div className="ctnCards">
						{tasks?.map((individualTask) => (
							<CardTaskReview
								modo={!visible && modo === 'Light' ? 'Light' : 'Dark'}
								{...individualTask}
							/>
						))}
					</div>
				)}
				{!tasks && (priText || secText) && (
					<NoTasks
						idSection={idSection}
						imageNoTasks={imageNoTasks}
						legendBtn={legendBtn}
						onCl_btn={onCl_btn}
						priText={priText}
						secText={secText}
					/>
				)}
			</div>
		</div>
	);
};

export default AsideTemplates;

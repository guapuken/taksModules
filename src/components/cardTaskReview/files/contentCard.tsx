import React from 'react';

// componentes auxiliares
import { CardContainer, LateIcon, SimpleButtonText, TitleCard } from '../../../utils/cardsUtils';
// types
import { cardTaskReview } from '../types';
//importación de estilos
import '../cardTaskReview.scss';

export const Content = ({
	taskName = 'Titulo',
	taskDescription = 'Descripción',
	statusTask,
	onCl_showDetails,
	modo = 'Light',
}: cardTaskReview) => {
	return (
		<CardContainer className={`ctn${modo}_CTR`}>
			{/* Renderea el título de la tarea */}
			<div>
				<TitleCard title={taskName} modo={modo} />
				{statusTask === 'outOfTime' && (
					<div className={'lateIcon'}>
						<LateIcon />
					</div>
				)}
				{/* renderea la descripción de la tarea */}
				<SimpleButtonText className={'description'}>
					<span className="TextOverflow" title={taskDescription}>
						{taskDescription}
					</span>
				</SimpleButtonText>
			</div>

			{/*  renderea el boton para abrir el modal de edición de la tarea  */}
			<div className=".ctnProgressBar_showDtls">
				<SimpleButtonText
					legend={`mostrar detalles...`}
					onClick={onCl_showDetails}
					className={'btnShowDtls'}
				/>
			</div>
		</CardContainer>
	);
};

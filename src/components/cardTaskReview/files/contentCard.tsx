import React from 'react';
import { CardContainer, LateIcon, SimpleButtonText, TitleCard } from '../../../utils/cardsUtils';
// types
import { Modo, onClickType, statusTask } from '../../../types';
//importación de estilos
import '../cardTaskReview.scss';

interface ContentProps {
	onClickShowDetails?: onClickType;
	statusTask?: statusTask;
	modo?: Modo;
	taskName?: string;
	taskDescription?: string;
}
export const Content = (props: ContentProps) => {
	const {
		taskName = 'Titulo',
		taskDescription = 'Descripción',
		statusTask,
		onClickShowDetails,
		modo = 'Light',
	} = props;
	return (
		<CardContainer className={`ctn${modo}_CTR`}>
			{/* Renderea el título de la tarea */}
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

			{/*  renderea el boton para abrir el modal de edición de la tarea  */}
			<div className=".ctnProgressBar_showDtls">
				<SimpleButtonText
					legend={`mostrar detalles...`}
					onClick={onClickShowDetails}
					className={'btnShowDtls'}
				/>
			</div>
		</CardContainer>
	);
};

import React from 'react';
import { CardContainer, LateIcon, SimpleButtonText, TitleCard } from '../../../utils/cardsUtils';
import { Modo, onClickType, statusTask } from '../../../utils/types/typesUtils';
import { screenSize } from '../../dragAndDrop/types';
//importación de estilos
import '../../../global.scss';
import css from './cardTaskReview.module.scss';

interface ContentProps {
	onClickShowDetails?: onClickType;
	statusTask?: statusTask;
	taskName?: string;
	taskDescription?: string;
	subtasks?: number;
	modo?: Modo;
	scrSize: screenSize;
}
export const Content = (props: ContentProps) => {
	const {
		taskName = 'Titulo',
		taskDescription,
		scrSize,
		statusTask,
		onClickShowDetails,
		modo = 'Light',
	} = props;
	return (
		<CardContainer className={modo === 'Dark' ? css.DarkMode : css.LightMode}>
			{/* Renderea el título de la tarea */}
			<TitleCard title={taskName} modo={modo} />
			{statusTask === 'outOfTime' && (
				<div className={css.lateIcon}>
					<LateIcon />
				</div>
			)}

			{/* renderea la descripción de la tarea */}
			<SimpleButtonText className={css.description}>
				<span
					className="TextOverflow"
					style={{
						WebkitLineClamp: scrSize.width >= 834 ? 2 : 1,
					}}
					title={taskDescription}
				>
					{taskDescription}
				</span>
			</SimpleButtonText>

			{/*  renderea el boton para abrir el modal de edición de la tarea  */}
			<div className="ContainerProgressBarAndShowDetails">
				<SimpleButtonText
					legend={`mostrar detalles ${scrSize.width >= 834 ? 'o editar' : ''}...`}
					onClick={onClickShowDetails}
					className={css.btn}
				/>
			</div>
		</CardContainer>
	);
};

export default Content;

import React from 'react';

// componentes auxiliares
import { CardContainer, LateIcon } from '../../../../utils/cardsUtils';
import { Title, Texts, TextButton, SimpleContainer, ValidationComponent } from '../../../Atoms';
// types
import { cardTaskReview } from '../types/types';
//importación de estilos
import '../styles/cardTaskReview.scss';
import FooterCard from '../../UtilsCards/FooterCard';

export const Content = ({
	taskName = 'Titulo',
	taskDescription = 'Descripción',
	statusTask,
	onCl_showDetails,
	modo = 'Light',
}: cardTaskReview) => {
	return (
		<CardContainer className={`cardTaskReview`}>
			<SimpleContainer className={`cardTaskReview__contenido`}>
				<Title modo={modo} maxLines={1} title={taskName}>
					{taskName}
				</Title>
				<Texts modo={modo} maxLines={2} className="descr">
					{taskDescription}
				</Texts>
			</SimpleContainer>
			<SimpleContainer className="cardTaskReview__footer">
				<FooterCard
					legendButton="Mostrar detalles..."
					modo={modo}
					percentTask={0}
					statusTask={1}
					onCl_showDetails={onCl_showDetails}
				/>
				<ValidationComponent
					validate={
						statusTask === 'outOfTime' ||
						statusTask === 3 ||
						statusTask === 2 ||
						statusTask === 'delayed'
					}
				>
					<div
						status-task={statusTask}
						className={'cardTaskReview__icon'}
						title={
							statusTask === 3 || statusTask === 'outOfTime'
								? 'Tarea fuera de tiempo'
								: 'Tarea atrasada'
						}
					></div>
				</ValidationComponent>
			</SimpleContainer>
		</CardContainer>
	);
};

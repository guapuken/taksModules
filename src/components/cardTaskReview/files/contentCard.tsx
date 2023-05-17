import React from 'react';

// componentes auxiliares
import { CardContainer, LateIcon } from '../../../utils/cardsUtils';
import { Title, Texts, TextButton, SimpleContainer } from '../../Atoms';
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
			<SimpleContainer>
				<Title modo={modo} maxLines={1}>
					{taskName}
				</Title>
				<Texts modo={modo} maxLines={2} className="descr">
					{taskDescription}
				</Texts>
			</SimpleContainer>
			{statusTask === 'outOfTime' ||
				(statusTask === 3 && (
					<div className={'lateIcon'}>
						<LateIcon />
					</div>
				))}
			<TextButton onClick={onCl_showDetails} modo={modo}>
				mostrar detalles...
			</TextButton>
		</CardContainer>
	);
};

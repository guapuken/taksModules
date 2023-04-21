import React from 'react';
import { CardContainer, SimpleButtonText, Spans, TitleCard } from '../../../utils/cardsUtils';
import { content } from '../types';
import ProgressBar from '../../progressBar/progressBar';
import { cardW } from '../../../utils/functions/functions';

export const Content = ({
	modo = 'Light',
	title = 'Nombre de la tarea',
	statusTask,
	percentTask,
	pendingTasks = 0,
}: content) => {
	return (
		<CardContainer style={{ display: 'grid', placeItems: 'center' }}>
			<div>
				<TitleCard modo={modo} title={title} />
				<div style={{ margin: '10px 0' }}>
					<Spans
						modo={modo}
						legend={`subtareas pendientes`}
						boldLegend={pendingTasks}
						style={{ color: '#00000075' }}
					/>
				</div>
				<ProgressBar status={statusTask} width={cardW(true) - 5} valor={percentTask} />
			</div>
		</CardContainer>
	);
};

import React from 'react';
import { CardContainer, Spans } from '../../../utils/cardsUtils';
import { content } from '../types';
import ProgressBar from '../../progressBar/progressBar';
import { cardW } from '../../../utils/functions/functions';
import { Title } from '../../Atoms';

export const Content = ({
	modo = 'Light',
	title = 'Nombre de la tarea',
	statusTask,
	percentTask,
	pendingTasks = 0,
	onCl_preview,
}: content) => {
	return (
		<CardContainer style={{ display: 'grid', placeItems: 'center' }}>
			<div>
				<Title modo={modo} maxLines={2}>
					{title}
				</Title>
				<div style={{ margin: '10px 0' }}>
					<Spans
						modo={modo}
						legend={`subtareas pendientes`}
						boldLegend={pendingTasks}
						style={{ color: '#00000075' }}
					/>
				</div>
				<ProgressBar
					modo={modo}
					onClick={onCl_preview}
					status={statusTask}
					width={cardW(true) - 5}
					valor={percentTask}
				/>
			</div>
		</CardContainer>
	);
};

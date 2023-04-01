import React from 'react';
import { CardContainer, SimpleButtonText, Spans, TitleCard } from '../../../utils/cardsUtils';
import { content } from '../types';
import ProgressBar from '../../progressBar/progressBar';
import { cardW } from '../../../utils/functions/functions';

export const Content = (props: content) => {
	const {
		modo = 'Light',
		title = 'Nombre de proyecto',
		statusTask,
		percentTask,
		tasks = 0,
	} = props;
	return (
		<CardContainer style={{ display: 'grid', placeItems: 'center' }}>
			<div>
				<TitleCard modo={modo} title={title} />
				<div style={{ margin: '1rem 0' }}>
					<Spans
						modo={modo}
						legend={`tareas pendientes`}
						boldLegend={tasks}
						style={{ color: '#00000075' }}
					/>
				</div>
				<ProgressBar status={statusTask} width={cardW(true) - 5} valor={percentTask} />
			</div>
		</CardContainer>
	);
};

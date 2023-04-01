import React from 'react';
import { CardContainer, SimpleButtonText, Spans, TitleCard } from '../../../utils/cardsUtils';
import { content } from '../types';

export const Content = (props: content) => {
	const { modo = 'Light', title = 'Nombre de plantilla', tasks = 0 } = props;
	return (
		<CardContainer style={{ display: 'grid', placeItems: 'center' }}>
			<div>
				<TitleCard modo={modo} title={title} />
				<div style={{ marginTop: '1rem' }}>
					<Spans
						modo={modo}
						legend={`tareas registradas`}
						boldLegend={tasks}
						style={{ color: '#00000075' }}
					/>
				</div>
			</div>
		</CardContainer>
	);
};

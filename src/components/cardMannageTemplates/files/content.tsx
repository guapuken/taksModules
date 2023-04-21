import React from 'react';
import { CardContainer, Spans, TitleCard } from '../../../utils/cardsUtils';
import { content } from '../types';

const Content = (props: content) => {
	const { modo = 'Light', templateName = 'Nombre de plantilla', totalTasks = 0 } = props;
	return (
		<CardContainer style={{ display: 'grid', placeItems: 'center' }}>
			<div>
				<TitleCard modo={modo} title={templateName} />
				<div style={{ marginTop: '10px' }}>
					<Spans
						modo={modo}
						legend={`tareas registradas`}
						boldLegend={totalTasks}
						style={{ color: '#00000075' }}
					/>
				</div>
			</div>
		</CardContainer>
	);
};
export default Content;

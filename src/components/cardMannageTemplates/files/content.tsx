import React from 'react';
import { CardContainer, Spans } from '../../../utils/cardsUtils';
import { content } from '../types';
import { Title } from '../../Atoms';

const Content = (props: content) => {
	const { modo = 'Light', templateName = 'Nombre de plantilla', totalTasks = 0 } = props;
	return (
		<CardContainer style={{ display: 'grid', placeItems: 'center' }}>
			<div>
				<Title modo={modo} maxLines={2}>
					{templateName}
				</Title>
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

import React from 'react';
// componentes auxiliares
import { CardContainer, Spans, TitleCard } from '../../../utils/cardsUtils';
import ProgressBar from '../../progressBar/progressBar';
// functions
import { cardW } from '../../../utils/functions/functions';
// types
import { content } from '../types';

const Content = ({
	modo = 'Light',
	title = 'Nombre de proyecto',
	statusTask,
	percentTask,
	onCl_preview,
	tasks = 0,
}: content) => {
	return (
		<CardContainer style={{ display: 'grid', placeItems: 'center' }}>
			<div>
				<TitleCard modo={modo} title={title} />
				<div style={{ margin: '10px 0' }}>
					<Spans
						modo={modo}
						legend={`tareas pendientes`}
						boldLegend={tasks}
						style={{ color: '#00000075' }}
					/>
				</div>
				<ProgressBar
					status={statusTask}
					width={cardW(true) - 5}
					valor={percentTask}
					onClick={onCl_preview}
				/>
			</div>
		</CardContainer>
	);
};
export default Content;

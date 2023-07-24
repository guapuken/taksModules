import React from 'react';
// componentes auxiliares
import { CardContainer } from '../../../../utils/cardsUtils';

// types
import { content } from '../types';
import { SimpleContainer, TextBoldLight, Title } from '../../../Atoms';

// styles
import '../styles/cardMannageTasks.scss';
import FooterCard from '../../UtilsCards/FooterCard';

export const Content = ({
	modo = 'Light',
	title = 'Nombre de la tarea',
	statusTask,
	percentTask = 0,
	pendingTasks = 0,
	onCl_preview,
}: content) => {
	const optionsIconMoreOptions = [] as any;

	return (
		<CardContainer className="cardMannageTask">
			<SimpleContainer className="cardMannageTask__contenido">
				<SimpleContainer>
					<Title modo={modo} maxLines={2}>
						{title}
					</Title>
					<SimpleContainer>
						<TextBoldLight
							modo={modo}
							legend={` subtareas pendientes`}
							boldLegend={pendingTasks}
						/>
					</SimpleContainer>
				</SimpleContainer>
			</SimpleContainer>
			<FooterCard
				legendButton="Ver más..."
				modo={modo}
				percentTask={percentTask}
				statusTask={statusTask}
				moreOptions
				options={optionsIconMoreOptions}
				onCl_showDetails={onCl_preview}
				progressBar
			/>
		</CardContainer>
	);
};

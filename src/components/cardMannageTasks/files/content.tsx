import React from 'react';
// componentes auxiliares
import { CardContainer, Spans } from '../../../utils/cardsUtils';
import ProgressBar from '../../progressBar/progressBar';

// types
import { content } from '../types';
import { CircularProgressBar } from '../../../components';
import { IconMoreOptions } from '../../task/files';
import { SimpleContainer, Texts, Title } from '../../Atoms';

import { getWidth } from '../../../utils/functions/functions';

// styles
import '../styles/cardMannageTasks.scss';

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
		<CardContainer className="ctn_CMTasks">
			<SimpleContainer id="ctnCMTasks" className="gnrlCtn">
				<SimpleContainer className="infoCtn">
					<SimpleContainer>
						<Title modo={modo} maxLines={2}>
							{title}
						</Title>
						<SimpleContainer>
							<Spans
								modo={modo}
								legend={`subtareas pendientes`}
								boldLegend={pendingTasks}
								style={{ color: '#00000075' }}
							/>
						</SimpleContainer>
					</SimpleContainer>
				</SimpleContainer>
				<SimpleContainer className="ctnProgressBar_showDtls">
					<ProgressBar
						modo={modo}
						status={statusTask}
						width={getWidth('ctnCMTasks').width}
						valor={percentTask}
						onClick={onCl_preview}
					/>
				</SimpleContainer>
				<SimpleContainer className="ctnCircularProgressBar" style={{ width: '100%' }}>
					<SimpleContainer>
						<CircularProgressBar
							percentTask={percentTask}
							statusTask={statusTask}
							size={40}
						/>
						<Texts modo={modo}>{`${percentTask}%`}</Texts>
					</SimpleContainer>
					<SimpleContainer>
						<IconMoreOptions options={optionsIconMoreOptions} />
					</SimpleContainer>
				</SimpleContainer>
			</SimpleContainer>
		</CardContainer>
	);
};

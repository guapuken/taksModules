import React from 'react';
// componentes auxiliares
import { CardContainer, Spans } from '../../../utils/cardsUtils';
import ProgressBar from '../../progressBar/progressBar';
// types
import { content } from '../types';
import CircularProgressBar from '../../circularProgressBar';
import { IconMoreOptions } from '../../task/files';
import { SimpleContainer, Texts, Title } from '../../Atoms';

//functions
import { getWidth } from '../../../utils/functions/functions';

// styles
import '../styles/cardMannageProjects.scss';

const Content = ({
	modo = 'Light',
	title = 'Nombre de proyecto',
	statusTask,
	percentTask = 0,
	onCl_preview,
	tasks = 0,
	onCl_edit,
	onCl_delete,
}: content) => {
	const optionsIconMoreOptions = [
		{
			id: 'edit',
			title: 'Editar',
			onClick: onCl_edit,
		},
		{
			id: 'preview',
			title: 'Previsualizar',
			onClick: onCl_preview,
		},
		{
			id: 'delete',
			title: 'Eliminar',
			onClick: onCl_delete,
		},
	];
	return (
		<CardContainer className="ctn_CMProjects">
			<SimpleContainer id="gnrlCtnCMProjects" className="gnrlCtn">
				<SimpleContainer className="infoCtn">
					<SimpleContainer>
						<Title modo={modo} maxLines={2}>
							{title}
						</Title>
						<SimpleContainer>
							<Spans
								modo={modo}
								legend={`tareas pendientes`}
								boldLegend={tasks}
								style={{ color: '#00000075' }}
							/>
						</SimpleContainer>
					</SimpleContainer>
				</SimpleContainer>
				<SimpleContainer className="ctnProgressBar_showDtls">
					<ProgressBar
						modo={modo}
						status={statusTask}
						width={getWidth('gnrlCtnCMProjects').width}
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
export default Content;

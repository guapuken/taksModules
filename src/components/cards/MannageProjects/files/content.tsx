import React from 'react';
// componentes auxiliares
import { CardContainer, Spans } from '../../../../utils/cardsUtils';
import ProgressBar from '../../../progressBar/progressBar';
// types
import { content } from '../types/types';
import CircularProgressBar from '../../../circularProgressBar';
import { IconMoreOptions } from '../../../task/files';
import { SimpleContainer, TextBoldLight, Texts, Title } from '../../../Atoms';

//functions
import { getWidth } from '../../../../utils/functions/functions';

// styles
import '../styles/cardMannageProjects.scss';
import FooterCard from '../../UtilsCards/FooterCard';

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
		<CardContainer className="cardMannageProjects">
			<SimpleContainer className="cardMannageProjects__contenido">
				<SimpleContainer>
					<Title modo={modo} maxLines={2}>
						{title}
					</Title>
					<TextBoldLight
						style={{ marginTop: '10px' }}
						modo={modo}
						boldLegend={tasks}
						legend={' tareas pendientes'}
					/>
				</SimpleContainer>
			</SimpleContainer>
			<FooterCard
				legendButton="Ver mas..."
				modo={modo}
				percentTask={percentTask}
				statusTask={statusTask}
				onCl_showDetails={onCl_preview}
				moreOptions
				options={optionsIconMoreOptions}
				progressBar
			/>
		</CardContainer>
	);
};
export default Content;

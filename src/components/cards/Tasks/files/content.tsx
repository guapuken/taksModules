import React from 'react';

//componentes auxiliares
import { CardContainer, Spans } from '../../../../utils/cardsUtils';
import { Button, CircularProgressBar, ProgressBar } from '../../../../components';
//funciones auxiliares
import { aspectRatio, cardW } from '../../../../utils/functions/functions';
// estilos
import '../styles/cardTask.scss';
import { IconMoreOptions } from '../../../task/files';
import { SimpleContainer, TextButton, Texts, Title, ValidationComponent } from '../../../Atoms';
import FooterCard from '../../UtilsCards/FooterCard';

//componente principal
const Content = ({
	taskName = 'Tarea',
	taskDescription = 'Descripción',
	statusTask,
	percentTask,
	onCl_showDetails,
	// subtasks = 0,
	modo = 'Light',
	className,
	onCl_edit,
	onCl_reasignDate,
	onCl_asignTask,
	onCl_follow,
	onCl_reminder,
	// dndCard,
	onCl_status,
}: any) => {
	const options = [
		{
			id: 'edit',
			title: 'Editar',
			onClick: onCl_edit,
		},
		{
			id: 'reasignDate',
			title: 'Reasignar fecha',
			onClick: onCl_reasignDate,
		},
		{
			id: 'reasignTask',
			title: 'Reasignar tarea',
			onClick: onCl_asignTask,
		},
		{
			id: 'follow',
			title: 'Seguir tarea',
			onClick: onCl_follow,
		},
		{
			id: 'reminder',
			title: 'Programar recordatorio',
			onClick: onCl_reminder,
		},
	];
	return (
		<CardContainer
			labels={{
				className: `cardTask ${className ?? ''}`,
				'theme-config': modo,
			}}
		>
			<SimpleContainer className={`cardTask__contenido ${'dndCard'}`}>
				<Title modo={modo} maxLines={1} title={taskName}>
					{taskName}
				</Title>
				<Texts modo={modo} maxLines={2}>
					{taskDescription}
				</Texts>
			</SimpleContainer>
			<FooterCard
				modo={modo}
				progressBar
				legendButton={aspectRatio().tablet ? 'Cambiar estatus' : 'Ver más...'}
				percentTask={percentTask}
				statusTask={statusTask}
				onCl_showDetails={aspectRatio().tablet ? onCl_status : onCl_showDetails}
				moreOptions
				options={options}
			/>
		</CardContainer>
	);
};

export default Content;

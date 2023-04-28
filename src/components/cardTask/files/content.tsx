import React from 'react';

//componentes auxiliares
import { CardContainer, SimpleButtonText, Spans, TitleCard } from '../../../utils/cardsUtils';
import { Button, CircularProgressBar, IconDropdown, ProgressBar } from '../../../components';
//funciones auxiliares
import { cardW } from '../../../utils/functions/functions';
// estilos
import '../cardTask.scss';
import { IconMoreOptions } from '../../task/files';

//componente principal
const Content = ({
	taskName = 'Tarea',
	taskDescription = 'Descripción',
	statusTask,
	percentTask,
	onCl_showDetails,
	subtasks = 0,
	modo = 'Light',
	className,
	onCl_edit,
	onCl_reasignDate,
	onCl_asignTask,
	onCl_follow,
	onCl_reminder,
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
		<CardContainer className={`ctn${modo}_CTaskC ${className}`}>
			<div className="ctnTexts">
				<div>
					<TitleCard modo={modo} title={taskName} />
					<SimpleButtonText className="descTask ttlTask">
						<span className="TextOverflow" title={taskDescription}>
							{taskDescription}
						</span>
					</SimpleButtonText>
				</div>
			</div>

			<div className="ctnProgressBar_showDtls">
				<ProgressBar
					status={statusTask}
					valor={percentTask}
					width={cardW(true)}
					onClick={onCl_showDetails}
					styleContent={{ cursor: 'pointer' }}
				/>
				<div className="ctnDtls">
					<SimpleButtonText className="tasks">
						<Spans boldLegend={subtasks} legend="más" />
					</SimpleButtonText>
					<SimpleButtonText
						className="showDtls"
						legend="mostrar detalles..."
						onClick={onCl_showDetails}
					/>
				</div>
			</div>
			<div className="ctnCircularProgressBar">
				<div>
					<CircularProgressBar percentTask={percentTask} size={40} />
					<p>{`${percentTask}%`}</p>
				</div>
				<div>
					<Button
						legend="Cambiar estatus"
						size="small"
						style={{ height: '25px' }}
						primary
						onCl={onCl_status}
					/>
					<IconMoreOptions options={options} />
				</div>
			</div>
		</CardContainer>
	);
};

export default Content;

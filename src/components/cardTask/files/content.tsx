import React from 'react';

//componentes auxiliares
import { CardContainer, Spans } from '../../../utils/cardsUtils';
import { Button, CircularProgressBar, ProgressBar } from '../../../components';
//funciones auxiliares
import { cardW } from '../../../utils/functions/functions';
// estilos
import '../cardTask.scss';
import { IconMoreOptions } from '../../task/files';
import { TextButton, Texts, Title } from '../../Atoms';

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
				<Title modo={modo} maxLines={1}>
					{taskName}
				</Title>
				<Texts modo={modo} className="descTask ttlTask" maxLines={2}>
					{taskDescription}
				</Texts>
			</div>

			<div className="ctnProgressBar_showDtls">
				<ProgressBar
					modo={modo}
					status={statusTask}
					valor={percentTask}
					width={cardW(true)}
					onClick={onCl_showDetails}
					styleContent={{ cursor: 'pointer' }}
				/>
				<div className="ctnDtls">
					<Spans boldLegend={subtasks} legend="más" />
					<TextButton className={'showDtls'} onClick={onCl_showDetails} modo={modo}>
						Mostrar detalles...
					</TextButton>
				</div>
			</div>
			<div className="ctnCircularProgressBar">
				<div>
					<CircularProgressBar
						percentTask={percentTask}
						statusTask={statusTask}
						size={40}
					/>
					<p>{`${percentTask}%`}</p>
				</div>
				<div>
					<Button
						modo={modo}
						legend="Cambiar estatus"
						size="small"
						style={{ height: '25px', padding: '2px 10px' }}
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

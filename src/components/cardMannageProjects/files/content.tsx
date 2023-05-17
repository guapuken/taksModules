import React from 'react';
// componentes auxiliares
import { CardContainer, Spans, TitleCard } from '../../../utils/cardsUtils';
import ProgressBar from '../../progressBar/progressBar';
// types
import { content } from '../types';
import CircularProgressBar from '../../circularProgressBar';
import { IconMoreOptions } from '../../task/files';
import { useWindowSize } from '../../../utils/windowSize';

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
	const scrW = useWindowSize().width;
	const options = [
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
		<CardContainer>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
				}}
			>
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
				</div>
				<div className="ctnProgressBar_showDtls">
					<ProgressBar
						modo={modo}
						status={statusTask}
						width={scrW / 10 / 4 - 8}
						valor={percentTask}
						onClick={onCl_preview}
					/>
				</div>
				<div className="ctnCircularProgressBar" style={{ width: '100%' }}>
					<div>
						<CircularProgressBar
							percentTask={percentTask}
							statusTask={statusTask}
							size={40}
						/>
						<p>{`${percentTask}%`}</p>
					</div>
					<div>
						<IconMoreOptions options={options} />
					</div>
				</div>
			</div>
		</CardContainer>
	);
};
export default Content;

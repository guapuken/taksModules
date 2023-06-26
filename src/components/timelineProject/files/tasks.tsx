import React from 'react';
// estilos
import { tasks } from '../types';
import '../timelineProject.scss';
import { Button } from '../../../components';
import { Texts } from '../../Atoms';

const Tasks = (props: tasks) => {
	const { completed, taskName, duration, onCl_showDetails, legendBtn, modo } = props;
	return (
		<div className="timeline__contenido-contenedorTasks">
			<div
				className={`timeline__contenido-contenedorTasks-circle ${
					completed ? 'complete' : ''
				}`}
			></div>
			<div className="timeline__contenido-contenedorTasks-duration">
				{duration && (
					<Texts
						modo={modo}
						className="timeline__contenido-contenedorTasks-duration-duration"
					>{`${duration} ${duration <= 1 ? 'día hábil' : 'días hábiles'}`}</Texts>
				)}
				{taskName && !onCl_showDetails ? (
					<Texts
						modo={modo}
						className="timeline__contenido-contenedorTasks-duration-name"
					>
						{taskName}
					</Texts>
				) : (
					<div>
						<Texts
							modo={modo}
							className="timeline__contenido-contenedorTasks-duration-name"
						>
							{taskName}
						</Texts>
						<Button
							modo={modo}
							border
							primary
							legend={legendBtn}
							onCl={onCl_showDetails as any}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Tasks;

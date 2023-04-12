import React from 'react';
// estilos
import { tasks } from '../types';
import '../timelineProject.scss';

const Tasks = (props: tasks) => {
	const { completed, taskName, duration, link } = props;
	return (
		<div className="ctnTasks">
			<div className={`circle${completed ? 'Complete' : ''}`}></div>
			<div>
				{taskName && !link ? (
					<p className="nmTask">{taskName}</p>
				) : (
					<a href={link} target="_blank" className="nmTask">
						{taskName}
					</a>
				)}
				{duration && <p className="drtnTask">{duration} días hábiles</p>}
			</div>
		</div>
	);
};

export default Tasks;

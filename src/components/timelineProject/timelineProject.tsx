import React from 'react';
// types
import { timelineProps } from './types';
// componentes princiaples
import { Header, Tasks } from './files';
// estilos
import './timelineProject.scss';

// componente principal
const TimelineProject = (props: timelineProps) => {
	const { modo = 'Light', tasks } = props;
	return (
		<div className={`ctn${modo}_TLPC`}>
			<Header />
			<h2 className="ttlTimeline">Progreso del proyecto</h2>
			<div className="ctnTimeline" style={{ height: tasks ? `${tasks.length * 50}px` : '0' }}>
				<div className="line"></div>
				{tasks &&
					tasks.map((e) => (
						<Tasks
							completed={e.completed}
							duration={e.duration}
							taskName={e.taskName}
							link={e.link}
						/>
					))}
			</div>
		</div>
	);
};

// exportación del componente principal
export default TimelineProject;

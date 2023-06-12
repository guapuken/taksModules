import React from 'react';
// types
import { tasks, timelineProps } from './types';
// componentes princiaples
import { Tasks } from './files';
// estilos
import './timelineProject.scss';

// componente principal
const Timeline = (props: timelineProps) => {
	const { modo = 'Light', tasks } = props;
	// constantes que validan si la tarea final contiene boton y con base a ello renderiza la altura de la linea correctamente
	let mapTask = tasks ? tasks?.map((e) => e) : [];
	let finalTask = mapTask.length - 1;
	let isBtninFinalTask =
		mapTask[finalTask]?.legendBtn || mapTask[finalTask]?.onCl_showDetails ? true : false;

	//
	return (
		<div className={`ctn${modo}_TLPC`}>
			<div className="ctnTimeline">
				<div
					className="line"
					style={{
						height: `calc(100% - ${isBtninFinalTask ? '90px' : '30px'})`,
					}}
				></div>
				{tasks &&
					tasks?.map((e: tasks) => (
						<Tasks
							modo={modo}
							completed={e?.completed}
							duration={e?.duration}
							taskName={e?.taskName}
							onCl_showDetails={e?.onCl_showDetails}
							legendBtn={e?.legendBtn}
						/>
					))}
			</div>
		</div>
	);
};

// exportación del componente principal
export default Timeline;

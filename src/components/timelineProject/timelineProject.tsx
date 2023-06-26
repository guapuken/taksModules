import React from 'react';
// types
import { tasks, timelineProps } from './types';
// componentes princiaples
import { Tasks } from './files';
// estilos
import './timelineProject.scss';
import { SimpleContainer, ValidationComponent } from '../Atoms';

// componente principal
const Timeline = (props: timelineProps) => {
	const { modo, tasks } = props;
	// constantes que validan si la tarea final contiene boton y con base a ello renderiza la altura de la linea correctamente
	let mapTask = tasks ? tasks?.map((e) => e) : [];
	let finalTask = mapTask.length - 1;
	let isBtninFinalTask =
		mapTask[finalTask]?.legendBtn || mapTask[finalTask]?.onCl_showDetails ? true : false;

	//
	return (
		<SimpleContainer
			labels={{
				className: 'timeline',
				'theme-config': modo,
			}}
		>
			{/* <SimpleContainer className="ctnTimeline"> */}
			<SimpleContainer className="timeline__contenido">
				<SimpleContainer
					labels={{
						className: 'timeline__contenido-line',
						style: {
							height: `calc(100% - ${isBtninFinalTask ? '90px' : '35px'})`,
						},
					}}
					children={null}
				/>
				<ValidationComponent validate={tasks}>
					{tasks?.map((e: tasks) => (
						<Tasks
							modo={modo}
							completed={e?.completed}
							duration={e?.duration}
							taskName={e?.taskName}
							onCl_showDetails={e?.onCl_showDetails}
							legendBtn={e?.legendBtn}
						/>
					))}
				</ValidationComponent>
			</SimpleContainer>
		</SimpleContainer>
	);
};

// exportación del componente principal
export default Timeline;

import React from 'react';
import { contentProps, subtasks } from '../types';
import { Comentarios } from './index';
import '../modalTaskWithComents.scss';
import { SimpleButtonText } from '../../../utils/cardsUtils';

const Content = (props: contentProps) => {
	const { subtasks, taskName = 'Tarea', modo = 'Light', comentarios, taskComplete } = props;
	const [showTasks, setShowTasks] = React.useState(false);
	return (
		<div className={`ctn${modo}${comentarios ? 'Cmts' : 'noCmts'}_TWCC`}>
			<div style={{ overflow: 'hidden', height: '100%' }}>
				<h5 className={`taskName${taskComplete ? 'Check' : 'Incompleted'}`}>{taskName}</h5>
				<SimpleButtonText
					legend={`${showTasks ? 'Ocultar' : 'Ver'} ${
						subtasks?.length || 0
					} subtareas más`}
					style={{ fontSize: '13px' }}
					onClick={() => setShowTasks(!showTasks)}
				/>
				{showTasks ? (
					subtasks ? (
						<div className="subtaskCtn">
							{subtasks?.map((e: subtasks) => (
								<div
									className={`subtasksElements${
										e.complete ? 'Check' : 'Incompleted'
									}`}
								>
									<h6>{e.taskName}</h6>
									<p>{e.taskDescription}</p>
								</div>
							))}
						</div>
					) : (
						<p> no hay tareas para mostrar</p>
					)
				) : (
					<></>
				)}
			</div>
			{comentarios ? <Comentarios comentarios={comentarios} /> : <></>}
		</div>
	);
};
export default Content;

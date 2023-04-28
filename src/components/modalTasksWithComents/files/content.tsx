import React from 'react';
import { contentProps, subtasks } from '../types';
import { Comentarios } from './index';
import '../modalTaskWithComents.scss';
import { SimpleButtonText } from '../../../utils/cardsUtils';
import { onChangeType } from '../../../types';

const Content = (props: contentProps) => {
	const {
		subtasks,
		taskName = 'Tarea',
		modo = 'Light',
		comments,
		taskComplete,
		onCh_addFile,
		onCl_addComent,
	} = props;
	const [showTasks, setShowTasks] = React.useState(false);
	return (
		<div className={`ctn${modo}${comments ? 'Cmts' : 'noCmts'}_TWCC`}>
			<div className="ctnTaskDtls" /* style={{ overflow: 'hidden', height: '100%' }} */>
				<div className="ctnPrnlTask">
					<h5 className={`taskName${taskComplete ? 'Check' : 'Incompleted'}`}>
						{taskName}
					</h5>
					<SimpleButtonText
						legend={`${showTasks ? 'Ocultar' : 'Ver'} ${
							subtasks?.length || 0
						} subtareas más`}
						style={{ fontSize: '13px' }}
						onClick={() => setShowTasks(!showTasks)}
					/>
				</div>
				{showTasks ? (
					subtasks ? (
						<div className="subtaskCtn">
							{subtasks?.map((e: subtasks) => {
								console.log(e);
								return (
									<div
										className={`subtasksElements${
											e.complete ? 'Check' : 'Incompleted'
										}`}
										key={e.id}
									>
										<h6>{e.taskName}</h6>
										<p>{e.taskDescription}</p>
									</div>
								);
							})}
						</div>
					) : (
						<p> no hay tareas para mostrar</p>
					)
				) : (
					<></>
				)}
			</div>
			<Comentarios
				comments={comments}
				showTasks={showTasks}
				onCh_addFile={onCh_addFile}
				onCl_addComent={onCl_addComent}
			/>
		</div>
	);
};
export default Content;

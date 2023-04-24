import React from 'react';
import { taskItem } from '../types';

export const TaskItem = (props: taskItem) => {
	const datos = { ...props };
	return (
		<>
			{datos.Card && <datos.Card {...datos.data} />}
			{!datos.Card && (
				<div className="CardTask">
					<h3>Nombre de la tarea</h3>
				</div>
			)}
		</>
	);
};
export default TaskItem;

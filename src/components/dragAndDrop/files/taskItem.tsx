import React from 'react';
import { taskItem } from '../types';

export const TaskItem = (props: taskItem) => {
	const datos = { ...props };
	return (
		<>
			{datos.Card ? (
				<datos.Card {...datos.data} />
			) : (
				<div className="CardTask">
					<p>{datos.data.taskName}</p>
				</div>
			)}
		</>
	);
};
export default TaskItem;

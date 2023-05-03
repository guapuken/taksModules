import React from 'react';
import { taskItem } from '../types';
import NoCard from './noCard';

export const TaskItem = (props: taskItem) => {
	const datos = { ...props };
	console.log('render card');
	return (
		<>
			{datos.Card ? (
				<datos.Card {...datos.data} />
			) : (
				<NoCard taskName={datos.data.taskName} />
			)}
		</>
	);
};
export default TaskItem;

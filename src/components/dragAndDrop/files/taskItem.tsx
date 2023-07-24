import React from 'react';
import { taskItem } from '../types';
import NoCard from './noCard';
import { SimpleContainer, Title } from '../../Atoms';

export const TaskItem = (props: taskItem) => {
	const datos = { ...props };
	return (
		<>
			{datos.Card ? (
				<SimpleContainer>
					{(datos.approved || datos.pendingToReview) && (
						<Title
							modo={'Light'}
							className="dndLabelStatus"
							labels={{
								'status-task': datos.approved ? 'approved' : 'pending',
							}}
						>
							{datos.approved ? 'Revisada' : 'Pendiente de revisar'}
						</Title>
					)}
					<datos.Card modo={datos.modo} {...datos.data} />
				</SimpleContainer>
			) : (
				<NoCard taskName={datos.data.taskName} />
			)}
		</>
	);
};
export default TaskItem;

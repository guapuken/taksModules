import React from 'react';
import { taskItem } from '../types';
import NoCard from './noCard';

export const TaskItem = (props: taskItem) => {
	const datos = { ...props };
	return (
		<>
			{datos.Card ? (
				<div>
					{datos.approved && (
						<h3
							style={{
								position: 'absolute',
								right: '20px',
								top: '-10px',
								fontSize: '12px',
								background: '#1cbf59',
								padding: '5px',
								borderRadius: '5px',
								color: '#fff',
							}}
						>
							Revisada
						</h3>
					)}
					<datos.Card {...datos.data} />
				</div>
			) : (
				<NoCard taskName={datos.data.taskName} />
			)}
		</>
	);
};
export default TaskItem;

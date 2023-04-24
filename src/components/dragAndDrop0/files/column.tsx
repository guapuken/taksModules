import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Column = (props) => {
	const { modo = 'Light' } = props;
	return (
		<div className={`ctn${modo}_DNDC`} style={{}}>
			<h3 style={{ padding: '8px' }}>{props.column.title}</h3>
			<Droppable droppableId={props.column.id}>
				{(provided, snapshot) => (
					// task list
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						style={{
							padding: '8px',
							border: snapshot.isDraggingOver
								? '2px dashed red'
								: '2px solid #dedede',
							transition: 'border .5s ease',
						}}
					>
						{props.tasks.map((task: any, index: any) => (
							<Task key={task.id} task={task} index={index} />
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default Column;

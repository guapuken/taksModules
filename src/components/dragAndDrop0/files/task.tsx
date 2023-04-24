import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
	return (
		<Draggable draggableId={props.task.id} index={props.index}>
			{(provided, snapshot) => (
				<div
					{...provided.draggableProps}
					// {...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<div
						className={`taskItem${snapshot.isDragging ? 'Drag' : ''}`}
						style={{ background: snapshot.isDragging ? '#4BEB5F' : '#fff' }}
					>
						<div className={'hndlElement'} {...provided.dragHandleProps}></div>
						<button onClick={() => alert('click')}>{props.task.content}</button>
					</div>
				</div>
			)}
		</Draggable>
	);
};
export default Task;

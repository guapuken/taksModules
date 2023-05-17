import React from 'react';
import initialData from './files/initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './files/column';
import './dragAndDrop.scss';

const DragAndDrop0 = () => {
	const [data, setData] = React.useState(initialData);

	// // drag starts
	// function onDragStart() {
	// 	document.body.style.color = 'orange';
	// 	document.body.style.transition = 'background-color 0.5s ease';
	// }

	// // drag update
	// function onDragUpdate(update) {
	// 	const { destination } = update;
	// 	const opacity = destination ? destination.index / Object.keys(data.tasks).length : 0;

	// 	document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
	// }

	// drag end
	function onDragEnd(result: any) {
		// document.body.style.color = 'inherit';

		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}

		const column = data.columns[source.droppableId];
		const newTaskIds = Array.from(column.taskIds);
		newTaskIds.splice(source.index, 1);
		newTaskIds.splice(destination.index, 0, draggableId);

		const newColumn = {
			...column,
			taskIds: newTaskIds,
		};

		const newData = {
			...data,
			columns: {
				...data.columns,
				[newColumn.id]: newColumn,
			},
		};

		setData(newData);
	}

	return (
		<DragDropContext
			// onDragStart={onDragStart}
			// onDragUpdate={onDragUpdate}
			onDragEnd={onDragEnd}
		>
			{data.columnOrder.map((columnId) => {
				const column = data.columns[columnId];
				const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

				return <Column key={column.id} column={column} tasks={tasks} />;
			})}
		</DragDropContext>
	);
};

export default DragAndDrop0;

// Functions Drag and Drop
// onDragStart
const start = {
	draggableId: 'task-1',
	type: 'TYPE',
	source: {
		droppableId: 'column-1',
		index: 0,
	},
};

// onDragUpdate
const update = {
	...start,
	destination: {
		droppableId: 'column-1',
		inddex: 1,
	},
};

// onDragEnd
const result = {
	...update,
	reason: 'DROP',
};

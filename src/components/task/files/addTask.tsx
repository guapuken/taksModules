import React from 'react';

interface AddTaskProps {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	legend?: string;
	style?: {};
}
const AddTask = (props: AddTaskProps) => {
	const { onClick, legend = '+ Añadir', style } = props;
	return (
		<button
			onClick={onClick}
			className="ButtonAddTaskComponent"
			style={{ marginBlock: '0', margin: '0 0 20px 0', fontSize: '15px', ...style }}
		>
			{legend}
		</button>
	);
};

export default AddTask;

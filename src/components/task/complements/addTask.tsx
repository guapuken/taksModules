import React from 'react';

interface AddTaskProps {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	legend?: string;
	style?: {};
}
export const AddTask = (props: AddTaskProps) => {
	const { onClick, legend = '+ Añadir', style } = props;
	return (
		<button
			onClick={onClick}
			className="ButtonAddTaskComponent"
			style={{ marginBlock: '0', margin: '1rem 0 2rem 0', fontSize: '1.5rem', ...style }}
		>
			{legend}
		</button>
	);
};

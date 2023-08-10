import React from 'react';
import { Modo } from '../../../types';

interface AddTaskProps {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	legend?: string;
	style?: {};
	modo: Modo;
}
const AddTask = (props: AddTaskProps) => {
	const { onClick, legend = '+ Añadir', style, modo } = props;
	return (
		<button
			theme-config={modo}
			onClick={onClick}
			className="ButtonAddTaskComponent"
			style={{ marginBlock: '0', margin: '0 0 20px 0', fontSize: '15px', ...style }}
		>
			{legend}
		</button>
	);
};

export default AddTask;

import React from 'react';
import { InputTask } from '../../components';

const Icons = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};
const Tasks = ({ children, ...props }) => {
	return (
		<div {...props}>
			<InputTask
				check={false}
				id=""
				idCheckbox=""
				modo="Light"
				onCh_checkbox={() => {}}
				onCh_descriptionTask={() => {}}
				onCh_nameTask={() => {}}
				valueDescription=""
				valueTask=""
			/>
			{children}
		</div>
	);
};

Tasks.Icons = Icons;

export default Tasks;

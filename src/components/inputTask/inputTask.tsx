import React, { useEffect, useState } from 'react';
// import { AutoResizeInput } from './complements/autoResizeInput';
import { CheckboxInput } from './complements/checkboxInput';
import { AutoresizeInput } from '../../components';
import { inputTasks } from './types';

const InputTask = ({
	check,
	showTask,
	style,
	modo,
	principalTask,
	disabled,
	onCh_checkbox,
	idCheckbox,
	id,
	onCh_nameTask,
	valueTask,
	onCh_descriptionTask,
	valueDescription,
	isSubtask,
}: inputTasks) => {
	// const [checked, setChecked] = useState(check);
	// useEffect(() => {
	// 	console.log('checkIn', check);
	// 	setChecked(check);
	// }, [check]);

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				alignItems: 'start',
				...style,
			}}
		>
			{/* Si existe la propiedad de showTask no se muestra el componente de Checkbox */}
			{showTask && (
				<CheckboxInput
					style={{ marginTop: '.5vh' }}
					modo={modo}
					principalTask={principalTask}
					onCh_checkbox={onCh_checkbox}
					check={check}
					idCheckbox={idCheckbox}
				/>
			)}
			<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
				<AutoresizeInput
					modo={modo}
					id={`task${id}`}
					taskType={principalTask ? 'principal' : 'task'}
					style={{
						textDecoration: check ? 'line-through' : 'none',
						opacity: check ? '.7' : '1',
						width: '100%',
						marginBottom: '0',
					}}
					onCh={onCh_nameTask}
					initialValue={valueTask}
					placeholder={`Nombre de la ${isSubtask ? 'subtarea' : 'tarea'}`}
					tabIndex={1}
					disabled={check ? true : disabled ? disabled : false}
				/>
				<AutoresizeInput
					modo={modo}
					id={`description${id}`}
					taskType={'subtask'}
					style={{
						opacity: check ? '.5' : '.5',
						marginLeft: showTask ? '0' : '10px',
					}}
					onCh={onCh_descriptionTask}
					initialValue={valueDescription}
					placeholder={`Descripción de la ${isSubtask ? 'subtarea' : 'tarea'}`}
					tabIndex={2}
					disabled={check ? true : disabled ? disabled : false}
				/>
			</div>
		</div>
	);
};

export default InputTask;

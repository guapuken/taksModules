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
	// Estilos que se asignan al componente
	let nameTaskStyles = {
		textDecoration: check ? 'line-through' : 'none',
		opacity: check ? '.7' : '1',
		with: '100%',
	};
	let descriptionTaskStyles = {
		opacity: check ? '.5' : '.8',
		marginLeft: showTask ? '0' : '20px',
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'column', ...style }}>
			<div style={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
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
				<div style={{ width: '100%' }}>
					<AutoresizeInput
						modo={modo}
						id={`task${id}`}
						taskType={principalTask ? 'principal' : 'task'}
						style={nameTaskStyles}
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
						style={descriptionTaskStyles}
						onCh={onCh_descriptionTask}
						initialValue={valueDescription}
						placeholder={`Descripción de la ${isSubtask ? 'subtarea' : 'tarea'}`}
						tabIndex={2}
						disabled={check ? true : disabled ? disabled : false}
					/>
				</div>
			</div>
		</div>
	);
};

export default InputTask;

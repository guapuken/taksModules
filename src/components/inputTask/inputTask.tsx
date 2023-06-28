import React, { useEffect, useState } from 'react';
// import { AutoResizeInput } from './complements/autoResizeInput';
import { CheckboxInput } from './complements/checkboxInput';
import { AutoresizeInput } from '../../components';
import { inputTasks } from './types';
//Estilos
import './styles/inputTask.scss';
import { ValidationComponent } from '../Atoms';

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
	return (
		<div className="inputTask" style={style}>
			<ValidationComponent
				validate={showTask} // valida si existe la propiedad de show task para mostrar u ocultar el checkbox
			>
				<CheckboxInput
					style={{ marginTop: '7px' }}
					modo={modo}
					principalTask={principalTask}
					onCh_checkbox={onCh_checkbox}
					check={check}
					idCheckbox={idCheckbox}
				/>
			</ValidationComponent>

			<div className="inputTask__inputs">
				<AutoresizeInput
					modo={modo}
					id={`task${id}`}
					taskType={principalTask ? 'principal' : 'task'}
					className={`inputTask__inputs-name ${check ? 'check' : ''}`}
					onCh={onCh_nameTask}
					initialValue={valueTask}
					placeholder={`Nombre de la ${isSubtask ? 'subtarea' : 'tarea'}`}
					disabled={check ? true : disabled ? disabled : false}
				/>
				<AutoresizeInput
					modo={modo}
					id={`description${id}`}
					taskType={'subtask'}
					className={`inputTask__inputs-description ${check ? 'check' : ''}`}
					onCh={onCh_descriptionTask}
					initialValue={valueDescription}
					placeholder={`Descripción de la ${isSubtask ? 'subtarea' : 'tarea'}`}
					disabled={check ? true : disabled ? disabled : false}
				/>
			</div>
		</div>
	);
};

export default InputTask;

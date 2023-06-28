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
					style={{ marginTop: '.5vh' }}
					modo={modo}
					principalTask={principalTask}
					onCh_checkbox={onCh_checkbox}
					check={check}
					idCheckbox={idCheckbox}
				/>
			</ValidationComponent>

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

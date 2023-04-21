import React from 'react';
// import { AutoResizeInput } from './complements/autoResizeInput';
import { CheckboxInput } from './complements/checkboxInput';
import { AutoresizeInput } from '../../components';
import { inputTasks } from './types';

const InputTask = (props: inputTasks) => {
	//desestucturación de propiedades
	const datos = { ...props };

	// Estilos que se asignan al componente
	let nameTaskStyles = {
		textDecoration: datos.check ? 'line-through' : 'none',
		opacity: datos.check ? '.7' : '1',
		with: '100%',
	};
	let descriptionTaskStyles = {
		opacity: datos.check ? '.5' : '.8',
		marginLeft: datos.showTask ? '0' : '20px',
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'column', ...datos.style }}>
			<div style={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
				{/* Si existe la propiedad de showTask no se muestra el componente de Checkbox */}
				{datos.showTask && (
					<CheckboxInput
						style={{ marginTop: '.5vh' }}
						modo={datos.modo}
						principalTask={datos.principalTask}
						disabled={datos.disabled}
						chCheck={datos.chCheck}
						check={datos.check}
						idCheckbox={datos.idCheckbox}
					/>
				)}
				<div style={{ width: '100%' }}>
					<AutoresizeInput
						id={datos.id}
						taskType={datos.principalTask ? 'principal' : 'task'}
						style={nameTaskStyles}
						onChange={datos.onChangeNameTask}
						initialValue={datos.valueTask}
						placeholder={`Nombre de la ${datos.isSubtask ? 'subtarea' : 'tarea'}`}
						tabIndex={1}
						disabled={datos.check ? true : datos.disabled ? datos.disabled : false}
					/>
					<AutoresizeInput
						id={datos.id}
						taskType={'subtask'}
						style={descriptionTaskStyles}
						onChange={datos.onChangeDescriptionTask}
						initialValue={datos.valueDescription}
						placeholder={`Descripción de la ${datos.isSubtask ? 'subtarea' : 'tarea'}`}
						tabIndex={2}
						disabled={datos.check ? true : datos.disabled ? datos.disabled : false}
					/>
				</div>
			</div>
		</div>
	);
};

export default InputTask;

import React from 'react';
// import { AutoResizeInput } from './complements/autoResizeInput';
import { CheckboxInput } from './complements/checkboxInput';
import { AutoresizeInput } from '../../components';
import { Modo, onBlurType, onChangeType, onClickType } from '../../types';

export interface InputTaskProps {
	onChangeNameTask?: onBlurType;
	onChange?: onChangeType;
	onChangeDescriptionTask?: onBlurType;
	onClickCheck?: onClickType;
	disabled?: boolean;
	principalTask?: boolean;
	isSubtask?: boolean;
	checked?: boolean;
	check?: boolean;
	showTask?: boolean;
	valueTask?: string;
	valueDescription?: string;
	idCheckbox?: string;
	data?: any;
	style?: React.CSSProperties;
	modo?: Modo;
}

const InputTask = (props: InputTaskProps) => {
	//desestucturación de propiedades
	const {
		disabled,
		principalTask,
		onChange,
		check,
		onClickCheck,
		isSubtask,
		style,
		showTask,
		onChangeNameTask,
		onChangeDescriptionTask,
		valueTask,
		valueDescription,
		idCheckbox,
		modo,
	} = props;

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
			<div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
				{/* Si existe la propiedad de showTask no se muestra el componente de Checkbox */}
				{showTask && (
					<CheckboxInput
						modo={modo}
						onClick={onClickCheck}
						principalTask={principalTask}
						disabled={disabled}
						onChange={onChange}
						check={check}
						idCheckbox={idCheckbox}
					/>
				)}
				<AutoresizeInput
					taskType={principalTask ? 'principal' : 'task'}
					style={nameTaskStyles}
					onChange={onChangeNameTask}
					initialValue={valueTask}
					placeholder={`Nombre de la ${isSubtask ? 'subtarea' : 'tarea'}`}
					tabIndex={1}
					disabled={check ? true : disabled ? disabled : false}
				/>
			</div>
			<AutoresizeInput
				taskType={'subtask'}
				style={descriptionTaskStyles}
				onChange={onChangeDescriptionTask}
				initialValue={valueDescription}
				placeholder={`Descripción de la ${isSubtask ? 'subtarea' : 'tarea'}`}
				tabIndex={2}
				disabled={check ? true : disabled ? disabled : false}
			/>
		</div>
	);
};

export default InputTask;

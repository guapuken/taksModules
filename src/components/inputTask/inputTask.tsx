import React from 'react';
import { AutoResizeInput } from './complements/autoResizeInput';
import { CheckboxInput } from './complements/checkboxInput';
import { Modo } from '../../types';

export interface InputTaskProps {
	onChangeNameTask?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeDescriptionTask?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onClickCheck?: (e: React.MouseEvent<HTMLElement>) => void;
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
	style?: {};
	modo: Modo;
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
				<AutoResizeInput
					taskType={principalTask ? 'principal' : 'task'}
					style={nameTaskStyles}
					onBlur={onChangeNameTask}
					initialValue={valueTask}
					placeholder={`Nombre de la ${isSubtask ? 'subtarea' : 'tarea'}`}
					tabIndex={1}
					disabled={check ? true : disabled ? disabled : false}
				/>
			</div>
			<AutoResizeInput
				taskType={'subtask'}
				style={descriptionTaskStyles}
				onBlur={onChangeDescriptionTask}
				initialValue={valueDescription}
				placeholder={`Descripción de la ${isSubtask ? 'subtarea' : 'tarea'}`}
				tabIndex={2}
				disabled={check ? true : disabled ? disabled : false}
			/>
		</div>
	);
};

export default InputTask;

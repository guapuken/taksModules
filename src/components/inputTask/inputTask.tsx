import React, { useEffect, useRef, useState } from 'react';
import { onBlurType, onChangeType, onClickType } from '../../utils/types/typesUtils';
import { AutoResizeInput } from './complements/autoResizeInput';
import { CheckboxInput } from './complements/checkboxInput';
import './inputTask.scss';

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
	style?: {};
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
	} = props;

	// Estilos que se asignan al componente
	let nameTaskStyles = {
		textDecoration: check ? 'line-through' : 'none',
		opacity: check ? '.7' : '1',
		with: '100%',
	};
	let descriptionTaskStyles = {
		opacity: check ? '.5' : '.8',
		marginLeft: showTask ? '0' : '2rem',
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'column', ...style }}>
			<div style={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
				{/* Si existe la propiedad de showTask no se muestra el componente de Checkbox */}
				{showTask && (
					<div style={{ marginTop: '-.3rem' }}>
						<CheckboxInput
							onClick={onClickCheck}
							principalTask={principalTask}
							disabled={disabled}
							onChange={onChange}
							check={check}
							idCheckbox={idCheckbox}
						/>
					</div>
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

import React from 'react';
import './checkboxInput.scss';
import { Modo } from '../../../types';

interface CheckboxInputProps {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	onChange?: (e: React.FormEvent<HTMLInputElement>) => void;

	principalTask?: boolean;
	disabled?: boolean;
	check?: boolean;

	modo?: Modo;
	idCheckbox?: string;
}
export const CheckboxInput = (props: CheckboxInputProps) => {
	const { onClick, disabled, onChange, check, idCheckbox = '', modo = 'Light' } = props;

	return (
		<div className={`ctn${modo}_CBIC`}>
			<input
				type="checkbox"
				id={idCheckbox}
				onClick={onClick}
				checked={check}
				disabled={disabled}
				onChange={onChange}
			/>
			<label htmlFor={idCheckbox}></label>
		</div>
	);
};

import React from 'react';

interface CheckboxInputProps {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	onChange?: (e: React.FormEvent<HTMLInputElement>) => void;

	principalTask?: boolean;
	disabled?: boolean;
	check?: boolean;

	idCheckbox?: string;
}
export const CheckboxInput = (props: CheckboxInputProps) => {
	const { principalTask, onClick, disabled, onChange, check, idCheckbox = '' } = props;

	return (
		<div
			className="CheckBoxInputTaskComponent"
			style={{ marginTop: principalTask ? '1rem' : '.8rem' }}
		>
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

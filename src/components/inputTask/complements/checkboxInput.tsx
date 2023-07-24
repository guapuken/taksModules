import React, { useEffect, useRef, useState } from 'react';
import './checkboxInput.scss';
import { Modo, css } from '../../../types';
import { SimpleContainer } from '../../Atoms';

interface CheckboxInputProps {
	onCh_checkbox?: (e: React.FormEvent<HTMLInputElement>) => void;

	principalTask?: boolean;
	disabled?: boolean;
	check?: boolean;

	modo?: Modo;
	idCheckbox: string;
	style?: css;
}
export const CheckboxInput = (props: CheckboxInputProps) => {
	const { disabled, onCh_checkbox, check, idCheckbox, modo = 'Light', style } = props;

	const [checkValue, setCheckValue] = useState(check);
	const inputRef = useRef<any>(null);

	useEffect(() => {
		setCheckValue(check);
	}, [check]);

	return (
		<SimpleContainer labels={{ className: `checkbox`, style: style, 'theme-config': modo }}>
			<input
				type="checkbox"
				className="checkbox__input"
				ref={inputRef}
				id={idCheckbox}
				checked={checkValue}
				disabled={disabled}
				onChange={onCh_checkbox}
			/>
			<label htmlFor={idCheckbox}></label>
		</SimpleContainer>
	);
};

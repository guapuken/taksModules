import React, { useEffect, useRef, useState } from 'react';
import './checkboxInput.scss';
import { Modo, css } from '../../../types';

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
		console.log('nivelInicial', check);
		setCheckValue(check);
	}, [check]);

	return (
		<div className={`ctn${modo}_CBIC`} style={style}>
			<input
				type="checkbox"
				ref={inputRef}
				id={idCheckbox}
				checked={checkValue}
				disabled={disabled}
				onChange={onCh_checkbox}
			/>
			<label htmlFor={idCheckbox}></label>
		</div>
	);
};

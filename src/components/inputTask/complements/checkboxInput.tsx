import React from 'react';
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
	const { disabled, onCh_checkbox, check, idCheckbox = '1', modo = 'Light', style } = props;

	const [checkValue, setCheckValue] = React.useState(check || false);
	const inputRef = React.useRef<any>(null);

	function handleClick() {
		const inputElement = inputRef.current;
		if (inputElement) {
			inputElement.click();
		}
	}

	return (
		<div className={`ctn${modo}_CBIC`} style={style}>
			<input
				type="checkbox"
				ref={inputRef}
				id={idCheckbox}
				checked={checkValue}
				disabled={disabled}
				onChange={(e) => {
					setCheckValue(!checkValue);
					if (onCh_checkbox) {
						onCh_checkbox(e);
					}
				}}
			/>
			<label htmlFor={idCheckbox} onClick={handleClick}></label>
		</div>
	);
};

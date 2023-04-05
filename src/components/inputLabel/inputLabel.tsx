import React, { CSSProperties, useState } from 'react';
import '../../global.scss';
import './inputLabel.scss';
import { onChangeType } from '../../types';

export interface InputLabelProps {
	type?: 'text' | 'number' | 'email' | 'password';
	legend?: string;
	initialValue?: string;
	min?: number;
	max?: number;
	onChange: onChangeType;
	style?: CSSProperties;
}
const InputLabel = (props: InputLabelProps) => {
	const {
		legend = 'Change the legend',
		type = 'text',
		initialValue,
		onChange,
		min = 0,
		max = 30,
		style,
	} = props;

	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState(initialValue || '');

	function handleTextChange(text: string) {
		setValue(text);
		if (text !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}

	return (
		<div id="LblInpt_ILC" style={style}>
			<input
				type={type}
				min={min}
				max={max}
				value={value}
				onChange={(e) => {
					handleTextChange(e.target.value);
					onChange(e);
				}}
			/>

			<label
				className={isActive || value ? 'isActLbl' : ''}
				style={{ display: 'flex', alignItems: 'center' }}
			>
				{legend}
				{!isActive && <></>}
			</label>
		</div>
	);
};

export default InputLabel;

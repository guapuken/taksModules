import React, { CSSProperties, useState } from 'react';
import '../../global.scss';
import './inputLabel.scss';
import { inputLabel } from './types/types';

const InputLabel = ({
	legend = 'Change the legend',
	id,
	type = 'text',
	initialValue,
	onCh,
	min = 0,
	max = 30,
	style,
}: inputLabel) => {
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
				id={id}
				onChange={(e) => handleTextChange(e.target.value)}
				onBlur={(e) => {
					if (onCh) {
						onCh(e);
					}
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

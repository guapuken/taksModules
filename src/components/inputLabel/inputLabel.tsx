import React, { useEffect, useState } from 'react';
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
	modo,
}: inputLabel) => {
	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState(initialValue);

	function handleTextChange(text: string) {
		setValue(text);

		if (text !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}
	useEffect(() => {
		setValue(initialValue as string);
	}, [initialValue]);

	return (
		<div style={style} className="inputLabel" theme-config={modo}>
			<input
				className="inputLabel__input"
				type={type}
				min={min}
				max={max}
				value={value}
				id={id}
				onChange={(e: any) => {
					handleTextChange(e.target.value);
					if (onCh) onCh(e);
				}}
			/>

			<label
				className={`inputLabel__label ${(isActive || value) && 'active'}`}
				style={{ display: 'flex', alignItems: 'center' }}
			>
				{legend}
				{!isActive && <></>}
			</label>
		</div>
	);
};

export default InputLabel;

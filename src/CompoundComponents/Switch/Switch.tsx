import React, { useEffect, useState } from 'react';
import { Texts } from '../../components';
import './style/style.scss';
const SwitchSiNo = ({ check, id, onChange, disabled, ...props }: any) => {
	const [isChecked, setIsChecked] = useState(check ?? false);

	useEffect(() => {
		setIsChecked(check);
	}, [check]);

	return (
		<div className="flex flex-column w-full h-full align-items-start">
			{props?.label && <Texts modo={props?.modo}>{props.label}</Texts>}
			<div className="OBP_SwitchSiNo " check-btn={isChecked ? 'check' : 'noCheck'}>
				<input
					id={`OBP_SwitchSiNo${id}`}
					style={{ display: 'none', cursor: disabled ? 'not-allowed' : 'pointer' }}
					type="checkbox"
					onChange={(e) => {
						setIsChecked(!isChecked);
						if (onChange) onChange(e);
					}}
					checked={check}
					disabled={disabled}
					{...props}
				/>
				<label
					htmlFor={`OBP_SwitchSiNo${id}`}
					className="OBP_SwitchSiNo__text"
					style={{
						color: '#fff',
					}}
				></label>
			</div>
		</div>
	);
};

export default SwitchSiNo;

import React, { useState } from 'react';
import { InputTask, Texts } from '../../components';
import { ButtonCompound } from '..';

const IconsPopUp = ({ children, ...props }) =>
	props?.visible && (
		<div
			style={{
				background: 'var(--bg)',
				boxShadow: 'var(--boxShadow)',
				maxWidth: '200px',
				minWidth: '200px',
				padding: '5px 10px',
				borderRadius: '5px',
				top: '15px',
				right: '-190px',
				position: 'absolute',
			}}
		>
			{children}
		</div>
	);
const Icons = ({ children, ...props }: any) => {
	return (
		<div style={{ position: 'relative', height: props?.size, width: props?.size }}>
			<ButtonCompound color="transparent" {...props}>
				{props?.counter && (
					<ButtonCompound.Counter style={{ background: 'var(--errorColor)' }}>
						{props?.counter}
					</ButtonCompound.Counter>
				)}
				<ButtonCompound.Svg>{props?.icon}</ButtonCompound.Svg>
			</ButtonCompound>
			{children}
		</div>
	);
};
Icons.Popup = IconsPopUp;

const Tasks = ({ children, ...props }) => {
	return (
		<div {...props}>
			<InputTask
				check={false}
				id=""
				idCheckbox=""
				modo="Light"
				onCh_checkbox={() => {}}
				onCh_descriptionTask={() => {}}
				onCh_nameTask={() => {}}
				valueDescription=""
				valueTask=""
			/>
			<div style={{ display: 'flex', gap: '15px' }}>{children}</div>
		</div>
	);
};

Tasks.Icons = Icons;

export default Tasks;

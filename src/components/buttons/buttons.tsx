import React from 'react';
import { Button } from '../../components';

import { buttons } from './types';
// styles
import './styles/buttons.scss';

//component
const Buttons = ({
	icons,
	modo = 'Light',
	composition /* = 'horizontal' */,
	styleComposition,
	buttons,
	id,
	border,
	rounded,
	size = 'small',
	onCl_buttons,
	disabled,
	legends,
	style,
	className,
}: buttons) => {
	// inicialización de props

	return (
		<div
			className={`ctn${modo}_BtnsC`}
			comp-btns={composition}
			style={styleComposition}
			ty-btns={`${buttons.primary ? 'Pr' : ''}${buttons.secondary ? 'Sc' : ''}${
				buttons.tertiary ? 'Tr' : ''
			}`}
		>
			{buttons.primary && (
				<Button
					icon={icons?.primary}
					id={id?.primary}
					border={border}
					rounded={rounded}
					size={size}
					modo={modo}
					primary
					onCl={onCl_buttons.primary}
					disabled={disabled?.primary}
					legend={legends?.primary}
					style={{
						width:
							composition === 'horizontal'
								? buttons.secondary && buttons.tertiary
									? '40%'
									: buttons.secondary || buttons.tertiary
									? '50%'
									: ''
								: '100%',
						maxWidth: '100%;',
						// se aplican los estilos que recibe
						...style?.primary,
					}}
					className={className?.primary}
				/>
			)}
			{buttons.secondary && (
				<Button
					icon={icons?.secondary}
					id={id?.secondary}
					border={border}
					rounded={rounded}
					size={size}
					modo={modo}
					secondary
					onCl={onCl_buttons.secondary}
					disabled={disabled?.secondary}
					legend={legends?.secondary}
					style={{
						width:
							buttons.primary && buttons.tertiary
								? '25%'
								: buttons.primary || buttons.tertiary
								? '50%'
								: '',
						//se aplican cuando reciben los estilos
						...style?.secondary,
					}}
					className={className?.secondary}
				/>
			)}
			{buttons.tertiary && (
				<Button
					icon={icons?.tertiary}
					id={id?.tertiary}
					border={border}
					rounded={rounded}
					size={size}
					tertiary
					modo={modo}
					onCl={onCl_buttons.tertiary}
					disabled={disabled?.tertiary}
					legend={legends?.tertiary}
					style={{
						maxWidth: 'calc(20%- 20px)',
						//se aplican cuando reciben los estilos
						...style?.tertiary,
					}}
					className={className?.tertiary}
				/>
			)}
		</div>
	);
};

export default Buttons;

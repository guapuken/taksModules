import React from 'react';
import { Button } from '../../components';

import { buttons } from './types';
// styles
import './styles/buttons.scss';
import { ValidationComponent } from '../Atoms';

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
			className={`botones`}
			theme-config={modo}
			composition-buttons={composition}
			style={styleComposition}
			primary-button={buttons.primary ? 'botonPrimario' : ''}
			secondary-button={buttons.secondary ? 'botonSecundario' : ''}
			tertiary-button={buttons.tertiary ? 'botonTerciario' : ''}
		>
			<ValidationComponent validate={buttons?.primary}>
				<Button
					icon={icons?.primary}
					id={id?.primary}
					border={border ?? false}
					rounded={rounded}
					size={size}
					modo={modo}
					primary
					onCl={onCl_buttons.primary}
					disabled={disabled?.primary}
					legend={legends?.primary}
					style={{ ...style?.primary }}
					className={`botones__primario ${className?.primary}`}
				/>
			</ValidationComponent>
			<ValidationComponent validate={buttons?.secondary}>
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
					style={style?.secondary}
					className={`botones__secondary ${className?.secondary}`}
				/>
			</ValidationComponent>
			<ValidationComponent validate={buttons?.tertiary}>
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
					style={style?.tertiary}
					className={`botones__tertiary ${className?.tertiary}`}
				/>
			</ValidationComponent>
		</div>
	);
};

export default Buttons;

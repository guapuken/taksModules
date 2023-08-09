import React from 'react';

// types
import { button } from './types/types';
import { Modo } from '../../types';

// componentes auxiliares
import { SimpleContainer, Texts, ValidationComponent } from '../Atoms';

// styles
import './styles/button.scss';

const Button = ({
	id,
	onCl,
	size = 'medium',
	style,
	styleIcon,
	legend = 'Simple button',
	icon,
	className = '',
	primary,
	secondary,
	tertiary,
	rounded,
	disabled,
	border,
	float,
	modo = 'Light',
	textStyle,
	color,
	valueSuccess,
	successColor,
}: button) => {
	return (
		<button
			id={id}
			color-btn={color}
			className={`boton ${className}`}
			onClick={onCl}
			theme-config={modo}
			disabled={disabled}
			style={{
				background: !border && color ? color : '',
				boxShadow: color && border ? `inset 0 0 0 2px ${color}` : '',
				opacity: '1',
				...style,
			}}
			color-button={color}
			rounded-button={rounded ? 'rounded' : ''}
			disabled-button={disabled ? 'disabled' : ''}
			border-button={border ? 'border' : ''}
			style-button={
				primary ? 'primary' : secondary ? 'secondary' : tertiary ? 'tertiary' : ''
			}
			float-button={float ? 'float' : 'noFloat'}
			size-button={size}
			success-color={successColor ? 'successColor' : ''}
		>
			{valueSuccess && <span className={`boton__number`} value-success={valueSuccess}></span>}
			<span className={`boton__contenido`} style={textStyle}>
				{icon && <img className="boton__contenido-icon" src={icon} style={styleIcon} />}
				{/* <ValidationComponent validate={icon}>
				</ValidationComponent> */}
				<Texts modo={'' as Modo} className="boton__contenido-legend">
					{legend}
				</Texts>
			</span>
		</button>
	);
};

export default Button;

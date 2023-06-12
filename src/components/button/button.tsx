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
	className,
	primary,
	secondary,
	tertiary,
	rounded,
	disabled,
	border,
	float,
	modo = 'Light',
	textStyle,
}: button) => {
	return (
		<button
			id={id}
			className={`ctn${modo}_BtnC ${className}`}
			onClick={onCl}
			disabled={disabled}
			style={style}
			rd-btn={rounded ? 'rounded' : ''}
			ds-btn={disabled ? 'disabled' : ''}
			brd-btn={border ? 'border' : ''}
			jrq-btn={primary ? 'Pr' : secondary ? 'Sc' : tertiary ? 'Tr' : ''}
			fl-btn={float ? 'float' : ''}
			sz-btn={size}
		>
			<SimpleContainer className={`ctnIcnLgnd_${size}`} style={textStyle}>
				<ValidationComponent validate={icon}>
					<img className="icn" src={icon} style={styleIcon} />
				</ValidationComponent>
				<Texts modo={'' as Modo} className="lgnd">
					{legend}
				</Texts>
			</SimpleContainer>
		</button>
	);
};

export default Button;

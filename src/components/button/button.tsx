import React from 'react';
import './styles/button.scss';
import { button } from './types/types';

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
			<span className={`ctnIcnLgnd_${size}`}>
				{icon && <img className="icn" src={icon} style={styleIcon} />}
				<span className="lgnd">{legend}</span>
			</span>
		</button>
	);
};

export default Button;

import React from 'react';
import { Legend, Icon, Svg, Counter } from '../Atoms';
// styles
import './Styles/Button.scss';
import { obtenerColorLetra } from '../helpers/Functions';

const Button = ({ children, color, rounded, border, style, ...props }: any) => {
	return (
		<button
			{...props}
			id={props.id}
			className={`_GTL_button_component ${props.className}`}
			style={{
				color: border ? color : obtenerColorLetra(color ?? 'inherit'),
				borderRadius: rounded ? '50px' : '',
				background: !border ? color : '',
				boxShadow: border && `inset 0 0 0 2px ${color}`,
				height: props.height,
				...style,
			}}
		>
			{children}
		</button>
	);
};

Button.Legend = Legend;
Button.Icon = Icon;
Button.Svg = Svg;
Button.Counter = Counter;

export default Button;

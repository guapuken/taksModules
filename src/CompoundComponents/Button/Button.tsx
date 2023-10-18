import React, { useState } from 'react';
import { Legend, Icon, Svg, Counter } from '../Atoms';
// styles
import './Styles/Button.scss';
import { obtenerColorLetra } from '../helpers/Functions';

const Button = ({ children, color, rounded, border, style, ...props }: any) => {
	const [isOver, setIsOver] = useState(false);
	return (
		<button
			{...props}
			id={props.id}
			onMouseEnter={() => setIsOver(true)}
			onMouseLeave={() => setIsOver(false)}
			className={`_GTL_button_component ${props.className}`}
			style={{
				color: border && !isOver ? color : obtenerColorLetra(color ?? 'inherit'),
				borderRadius: rounded ? '50px' : '',
				background: !border ? color : isOver ? color : 'var(--bg)',
				boxShadow: border && `inset 0 0 0 2px ${color}`,
				height: props.height ?? 30,
				fontWeight: '700',
				transition: 'all .2s ease-in-out',
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

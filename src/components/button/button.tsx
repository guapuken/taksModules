import React, { CSSProperties, useState } from 'react';

//importación de types
import { onClickType } from '../../types';
//importación de estilos
import '../../global.scss';

// types
type size = 'small' | 'medium' | 'large';

//interfaces
export interface ButtonProps {
	//types
	onClick?: onClickType;
	size?: size;
	//css properties
	style?: CSSProperties;
	styleIcon?: CSSProperties;
	//string properties
	legend?: string;
	color?: string;
	id?: string;
	key?: string;
	icon?: string;
	colorHover?: string;
	className?: string;
	//boolean properties
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	rounded?: boolean;
	disabled?: boolean;
	border?: boolean;
	float?: boolean;
}

const Button = (props: ButtonProps) => {
	//Hooks
	const [isHover, setIsOver] = useState(false);

	//Destructuring
	const {
		style,
		styleIcon,
		color,
		colorHover,
		primary,
		secondary,
		tertiary,
		legend = 'button',
		size,
		className,
		onClick = () => alert('Cambia la función'),
		rounded,
		disabled,
		border,
		float,
		id,
		key,
		icon,
	} = props;

	//functions
	const handleMouseEnter = () => {
		setIsOver(true);
	};
	const handleMouseLeave = () => {
		setIsOver(false);
	};

	//styles
	function backgroundGenerate() {
		switch (border) {
			case true:
				return primary && isHover
					? '#126EFA'
					: secondary && isHover
					? '#FC3D38'
					: tertiary && isHover
					? '#7BAFFF'
					: !primary && !secondary && !tertiary && isHover
					? '#525252'
					: colorHover && isHover
					? colorHover
					: 'transparent';
			default:
				return disabled && (primary || color)
					? '#dedede'
					: color
					? isHover
						? colorHover
						: color
					: primary
					? isHover
						? '#0523E3'
						: '#126EFA'
					: secondary
					? isHover
						? '#FC3D38'
						: 'transparent'
					: tertiary
					? isHover
						? '#7BAFFF'
						: 'transparent'
					: isHover
					? '#525252'
					: '#DEDEDE';
		}
	}
	let generalStyles = {
		boxShadow:
			isHover || (tertiary && border)
				? 'none'
				: border || secondary
				? `inset 0 0 0 1px ${
						disabled
							? '#dedede'
							: color
							? color
							: primary
							? '#126EFA'
							: secondary
							? '#FC3D38'
							: tertiary
							? '#7BAFFF'
							: 'gray'
				  }`
				: 'gray',
		border: 'none',
		color: isHover
			? '#fff'
			: !border && (primary || color)
			? '#fff'
			: disabled
			? '#dedede'
			: primary
			? '#126EFA'
			: secondary
			? '#FC3D38'
			: tertiary
			? '#7BAFFF'
			: color
			? color
			: '#525252',
		background: backgroundGenerate(),
		cursor: 'pointer',
		borderRadius: float ? '50px' : rounded ? '20px' : '5px',
	};
	let individualStyles = float
		? {
				height:
					size === 'small'
						? '30px'
						: size === 'medium'
						? '40px'
						: size === 'large'
						? '50px'
						: '30px',
				width:
					size === 'small'
						? '30px'
						: size === 'medium'
						? '40px'
						: size === 'large'
						? '50px'
						: '30px',
				fontWeight: 'bold',
				fontSize: 'calc(20px + 0.390625vw)',
		  }
		: {
				padding: icon
					? size === 'small'
						? '5px 10px 5px 5px'
						: size === 'medium'
						? '7.5px 15px 7.5px 7.5px'
						: size === 'large'
						? '10px 30px 10px 10px'
						: '10px 20px 10px 10px'
					: size === 'small'
					? '5px 10px'
					: size === 'medium'
					? '7.5px 15px'
					: size === 'large'
					? '10px 30px'
					: '7.5px 15px',
				fontSize:
					size === 'small'
						? '15px'
						: size === 'medium'
						? '16px'
						: size === 'large'
						? '18px'
						: '16px',
				maxHeight: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: icon ? 'space-around' : 'center',
		  };

	let iconGeneralStyles = {
		height:
			size === 'small'
				? '18px'
				: size === 'medium'
				? '25px'
				: size === 'large'
				? '30px'
				: '16px',
	};

	let iconStyles =
		icon && legend && float
			? {
					fill: '#000',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)',
			  }
			: !float && legend && icon
			? {
					marginBottom: '0',
					marginRight: '10px',
					marginLeft: '10px',
					width:
						size === 'small'
							? '18px'
							: size === 'medium'
							? '25px'
							: size === 'large'
							? '30px'
							: '16px',
			  }
			: {};

	//Component
	return (
		<button
			// data-tasks-modules
			onClick={onClick}
			id={id}
			key={key}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={className}
			disabled={disabled}
			style={{
				position: 'relative',
				...generalStyles,
				...individualStyles,
				...style,
			}}
		>
			{icon && legend && float ? (
				<span>
					<img
						src={icon}
						alt=""
						style={{
							position: 'absolute',
							...iconGeneralStyles,
							...iconStyles,
							...styleIcon,
						}}
					/>
				</span>
			) : !float && legend && icon ? (
				<span>
					<img
						src={icon}
						alt=""
						style={{
							...iconGeneralStyles,
							...iconStyles,
							...styleIcon,
						}}
					/>
				</span>
			) : (
				<span></span>
			)}
			{legend && !float && legend}
			{icon && !float && <span style={{ width: '10px' }}></span>}
		</button>
	);
};

//exports
export default Button;

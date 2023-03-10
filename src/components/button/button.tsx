import React, { useState } from 'react';
import { onClickType } from '../../utils/types/typesUtils';

//types
type sizeTypes = 'small' | 'medium' | 'large';

export interface ButtonProps {
	legend?: string;
	onClick?: onClickType;
	size?: sizeTypes;
	color?: string;
	colorHover?: string;
	className?: string;
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	rounded?: boolean;
	disabled?: boolean;
	style?: {};
	styleIcon?: {};
	border?: boolean;
	float?: boolean;
	id?: string;
	key?: string;
	icon?: string;
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
				? `inset 0 0 0 .2rem ${
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
		borderRadius: float ? '5rem' : rounded ? '2rem' : '.5rem',
	};
	let individualStyles = float
		? {
				height:
					size === 'small'
						? '3rem'
						: size === 'medium'
						? '4rem'
						: size === 'large'
						? '5rem'
						: '3rem',
				width:
					size === 'small'
						? '3rem'
						: size === 'medium'
						? '4rem'
						: size === 'large'
						? '5rem'
						: '3rem',
				fontWeight: 'bold',
				fontSize: 'calc(2rem + 0.390625vw)',
		  }
		: {
				padding: icon
					? size === 'small'
						? '.5rem 1rem .5rem .5rem'
						: size === 'medium'
						? '.75rem 1.5rem .75rem .75rem'
						: size === 'large'
						? '1rem 3rem 1rem 1rem'
						: '1rem 2rem 1rem 1rem'
					: size === 'small'
					? '5px 1rem'
					: size === 'medium'
					? '.75rem 1.5rem'
					: size === 'large'
					? '1rem 3rem'
					: '.75rem 1.5rem',
				fontSize:
					size === 'small'
						? '1.5rem'
						: size === 'medium'
						? '1.6rem'
						: size === 'large'
						? '1.8rem'
						: '1.6rem',
				maxHeight: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: icon ? 'space-around' : 'center',
		  };

	let iconGeneralStyles = {
		height:
			size === 'small'
				? '1.8rem'
				: size === 'medium'
				? '2.5rem'
				: size === 'large'
				? '3rem'
				: '1.6rem',
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
					marginRight: '1rem',
					marginLeft: '1rem',
					width:
						size === 'small'
							? '1.8rem'
							: size === 'medium'
							? '2.5rem'
							: size === 'large'
							? '3rem'
							: '1.6rem',
			  }
			: {};

	//Component
	return (
		<button
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
			{icon && !float && <span style={{ width: '1rem' }}></span>}
		</button>
	);
};

//exports
export default Button;

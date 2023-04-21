import React, { CSSProperties, useState } from 'react';

//importación de types
import { button } from './types';
//importación de estilos
import './button.scss';

const Button = (props: button) => {
	//Hooks
	const [isHover, setIsOver] = useState(false);
	// desestructurando propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const { legend = 'button', onCl_button = () => alert('Cambia la función') } = props;

	//functions
	const handleMouseEnter = () => {
		setIsOver(true);
	};
	const handleMouseLeave = () => {
		setIsOver(false);
	};

	//styles
	function backgroundGenerate() {
		switch (datos.border) {
			case true:
				return datos.primary && isHover
					? '#126EFA'
					: datos.secondary && isHover
					? '#FC3D38'
					: datos.tertiary && isHover
					? '#7BAFFF'
					: !datos.primary && !datos.secondary && !datos.tertiary && isHover
					? '#525252'
					: datos.colorHover && isHover
					? datos.colorHover
					: 'transparent';
			default:
				return datos.disabled && (datos.primary || datos.color)
					? '#dedede'
					: datos.color
					? isHover
						? datos.colorHover
						: datos.color
					: datos.primary
					? isHover
						? '#0523E3'
						: '#126EFA'
					: datos.secondary
					? isHover
						? '#FC3D38'
						: 'transparent'
					: datos.tertiary
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
			isHover || (datos.tertiary && datos.border)
				? 'none'
				: datos.border || datos.secondary
				? `inset 0 0 0 1px ${
						datos.disabled
							? '#dedede'
							: datos.color
							? datos.color
							: datos.primary
							? '#126EFA'
							: datos.secondary
							? '#FC3D38'
							: datos.tertiary
							? '#7BAFFF'
							: 'gray'
				  }`
				: 'gray',
		border: 'none',
		color: isHover
			? '#fff'
			: !datos.border && (datos.primary || datos.color)
			? '#fff'
			: datos.disabled
			? '#dedede'
			: datos.primary
			? '#126EFA'
			: datos.secondary
			? '#FC3D38'
			: datos.tertiary
			? '#7BAFFF'
			: datos.color
			? datos.color
			: '#525252',
		background: backgroundGenerate(),
		cursor: 'pointer',
		borderRadius: datos.float ? '50px' : datos.rounded ? '20px' : '5px',
	};
	let individualStyles = datos.float
		? {
				height:
					datos.size === 'small'
						? '30px'
						: datos.size === 'medium'
						? '40px'
						: datos.size === 'large'
						? '50px'
						: '30px',
				width:
					datos.size === 'small'
						? '30px'
						: datos.size === 'medium'
						? '40px'
						: datos.size === 'large'
						? '50px'
						: '30px',
				fontWeight: 'bold',
				fontSize: 'calc(20px + 0.390625vw)',
		  }
		: {
				padding: datos.icon
					? datos.size === 'small'
						? '5px 10px 5px 5px'
						: datos.size === 'medium'
						? '7.5px 15px 7.5px 7.5px'
						: datos.size === 'large'
						? '10px 30px 10px 10px'
						: '10px 20px 10px 10px'
					: datos.size === 'small'
					? '5px 10px'
					: datos.size === 'medium'
					? '7.5px 15px'
					: datos.size === 'large'
					? '10px 30px'
					: '7.5px 15px',
				fontSize:
					datos.size === 'small'
						? '15px'
						: datos.size === 'medium'
						? '16px'
						: datos.size === 'large'
						? '18px'
						: '16px',
				maxHeight: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: datos.icon ? 'space-around' : 'center',
		  };

	let iconGeneralStyles = {
		height:
			datos.size === 'small'
				? '18px'
				: datos.size === 'medium'
				? '25px'
				: datos.size === 'large'
				? '30px'
				: '16px',
	};

	let iconStyles =
		datos.icon && legend && datos.float
			? {
					fill: '#000',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%,-50%)',
			  }
			: !datos.float && legend && datos.icon
			? {
					marginBottom: '0',
					marginRight: '10px',
					marginLeft: '10px',
					width:
						datos.size === 'small'
							? '18px'
							: datos.size === 'medium'
							? '25px'
							: datos.size === 'large'
							? '30px'
							: '16px',
			  }
			: {};

	//Component
	return (
		<button
			// datos-tasks-modules
			onClick={onCl_button}
			id={datos.id}
			key={datos.key}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			// className={datos.className}
			className={`ctn${datos.modo}_BtnC ${datos.className}`}
			disabled={datos.disabled}
			style={{
				...generalStyles,
				...individualStyles,
				...datos.style,
			}}
		>
			{datos.icon && legend && datos.float ? (
				<span>
					<img
						src={datos.icon}
						alt=""
						style={{
							position: 'absolute',
							...iconGeneralStyles,
							...iconStyles,
							...datos.styleIcon,
						}}
					/>
				</span>
			) : !datos.float && legend && datos.icon ? (
				<span>
					<img
						src={datos.icon}
						alt=""
						style={{
							...iconGeneralStyles,
							...iconStyles,
							...datos.styleIcon,
						}}
					/>
				</span>
			) : (
				<span></span>
			)}
			{legend && !datos.float && legend}
			{datos.icon && !datos.float && <span style={{ width: '10px' }}></span>}
		</button>
	);
};

//exports
export default Button;

import React, { CSSProperties, useState } from 'react';
import './information.scss';
import { Modo } from '../../types';

//definición de la interface y sus datos que recibirá el componente
export interface InformationProps {
	width?: number;
	height?: number;
	info?: string;
	positionInfo?:
		| 'left'
		| 'right'
		| 'top'
		| 'bottom'
		| 'left_top'
		| 'left_bottom'
		| 'right_top'
		| 'right_bottom'
		| 'center';
	color?: string;
	iconInfo?: string;
	style?: CSSProperties;
	className?: string;
	modo: Modo;
}

//Componente de Información permite mostrar instrucciones o Datos que deban especificarse para explicar un proceso
const Information = (props: InformationProps) => {
	//hook para definir si hace hover o no
	const [isHover, setIsHover] = useState(false);

	//Funciones para saber si hace hover
	const onHoverMouse = () => {
		setIsHover(true);
	};
	const onLeaveMouse = () => {
		setIsHover(false);
	};

	function searchWord(word: string, string: string) {
		return string.includes(word);
	}

	//destructurar propiedades
	const {
		width = 20,
		height = 20,
		info = 'Add your instructions here...',
		positionInfo = 'right_bottom',
		iconInfo = '?',
		style,
		className,
		modo = 'Light',
		color = modo === 'Dark' ? '#282828' : '#525252',
	} = props;

	//Estilos de posicionamiento del pop up
	const positionStyles = {
		left: searchWord('right', positionInfo)
			? `${width}px`
			: searchWord('center', positionInfo)
			? '50%'
			: '',
		top: searchWord('bottom', positionInfo)
			? `${height}px`
			: searchWord('center', positionInfo)
			? '50%'
			: '',
		right: searchWord('left', positionInfo) ? `${width}px` : '',
		bottom: searchWord('top', positionInfo) ? `${height}px` : '',
		transform: `translateX(${
			positionInfo === 'bottom' || positionInfo === 'top' || positionInfo === 'center'
				? '-50px'
				: '0'
		}) translateY(${
			positionInfo === 'left' || positionInfo === 'right' || positionInfo === 'center'
				? '-50px'
				: '0'
		})`,
		background: color,
	};

	return (
		<p
			onMouseEnter={onHoverMouse}
			onMouseLeave={onLeaveMouse}
			onClick={() => setIsHover(true)}
			className={`ctn${modo}_InfoC ${className}`}
			style={{
				background: color,
				width: `${!width ? height : width}px`,
				height: `${!height ? width : height}px`,
				borderRadius: `${width + height}px`,
				...style,
			}}
		>
			<span
				className={'icnBtn'}
				style={{
					fontSize: `${width > height ? height - 8 : width - 8}px`,
				}}
			>
				{iconInfo}
			</span>

			{/* Se valida si hay un Hover en el componente y sólo si existe el hover se renderea el bloque de código, de lo contrario no */}
			{isHover && (
				<span className={'popUp'} style={positionStyles}>
					<span className={'ctnPopUp'}>{info}</span>
				</span>
			)}
			{/* Finalización del código con validación */}
		</p>
	);
};

export default Information;

import React, { useState } from 'react';
import '../../styles.scss';
import './information.scss';

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
	style?: {};
	className?: string;
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
		width = 2,
		height = 2,
		info = 'Add your instructions here...',
		color = '#525252',
		positionInfo = 'right_bottom',
		iconInfo = '?',
		style,
		className,
	} = props;

	//Estilos de posicionamiento del pop up
	const positionStyles = {
		left: searchWord('right', positionInfo)
			? `${width}rem`
			: searchWord('center', positionInfo)
			? '50%'
			: '',
		top: searchWord('bottom', positionInfo)
			? `${height}rem`
			: searchWord('center', positionInfo)
			? '50%'
			: '',
		right: searchWord('left', positionInfo) ? `${width}rem` : '',
		bottom: searchWord('top', positionInfo) ? `${height}rem` : '',
		transform: `translateX(${
			positionInfo === 'bottom' || positionInfo === 'top' || positionInfo === 'center'
				? '-5rem'
				: '0'
		}) translateY(${
			positionInfo === 'left' || positionInfo === 'right' || positionInfo === 'center'
				? '-5rem'
				: '0'
		})`,
		background: color,
	};

	return (
		<p
			onMouseEnter={onHoverMouse}
			onMouseLeave={onLeaveMouse}
			onClick={() => setIsHover(true)}
			className={`ContainerInfoComponent ${className}`}
			style={{
				background: color,
				width: `${!width ? height : width}rem`,
				height: `${!height ? width : height}rem`,
				borderRadius: `${width + height}rem`,
				...style,
			}}
		>
			<span
				className="ContainerIconInfoComponent"
				style={{
					fontSize: `${width > height ? height - 0.8 : width - 0.8}rem`,
				}}
			>
				{iconInfo}
			</span>

			{/* Se valida si hay un Hover en el componente y sólo si existe el hover se renderea el bloque de código, de lo contrario no */}
			{isHover && (
				<span className="PopUpInfoComponent" style={positionStyles}>
					<span className="ContentInfoComponent">{info}</span>
				</span>
			)}
			{/* Finalización del código con validación */}
		</p>
	);
};

export default Information;

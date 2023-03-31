import React, { CSSProperties, useEffect } from 'react';
import { useWindowSize } from './widthSize';
import { Modo, onClickType } from '../types';

/*-----------------------------------------------------------------------------------------------
functions
-----------------------------------------------------------------------------------------------*/
//función que retorna el número de involucrados en una activodad
export function involucrados(valueResponsable: any, valueRevision: any) {
	if (valueResponsable && valueRevision) {
		return 2;
	} else if ((valueResponsable && !valueRevision) || (!valueResponsable && valueRevision)) {
		return 1;
	} else return 0;
}
export function sizeCard() {
	const sizetoShow = (useWindowSize().width * 0.21) / 10;
	useEffect(() => {
		sizetoShow;
	}, [useWindowSize()]);
	return sizetoShow;
}
export function returnSize() {
	return useWindowSize().width < 415
		? useWindowSize().width / 10 - 7
		: useWindowSize().width < 835
		? useWindowSize().width / 10 / 2 - 7
		: sizeCard();
}
/*-----------------------------------------------------------------------------------------------
components
-----------------------------------------------------------------------------------------------*/
//contenedor general de cualquier elemento
interface CardContainerProps {
	width?: string;
	height?: string;
	className?: string;
	children?: any;
}
export const CardContainer = (props: CardContainerProps) => {
	const { width = '100%', height = '100%', children, className } = props;
	return (
		<div
			style={{ width: width, height: height }}
			className={`ContainerCardTeamComponent ${className}`}
		>
			{children}
		</div>
	);
};

interface TitleCardProps {
	title: string;
	modo: Modo;
}
export const TitleCard = (props: TitleCardProps) => {
	const { title, modo } = props;
	return (
		<p
			className="TextOverflow"
			style={{
				WebkitLineClamp: 2,
				color: modo === 'Dark' ? '#fff' : '#000',
			}}
			title={title}
		>
			{title}
		</p>
	);
};
interface SimpleButtonTextProps {
	onClick?: onClickType;
	style?: CSSProperties;
	className?: string;
	legend?: string;
	children?: any;
}
export const SimpleButtonText = (props: SimpleButtonTextProps) => {
	const { onClick, legend, style, children, className } = props;
	return (
		<p
			style={{
				marginBlock: '0',
				paddingRight: '1rem',
				cursor: onClick ? 'pointer' : '',
				...style,
			}}
			onClick={onClick}
			className={className}
		>
			{children && !legend && children}
			{legend && !children && legend}
		</p>
	);
};

//Renderiza un conjunto de spans con un estilo en el que se aplican con diferentes pesos visuales
interface SpansProps {
	legend?: string | number;
	boldLegend?: string | number;
	positionBold?: 'start' | 'end';
	styleBold?: {};
	style?: {};
	fontSize?: string;
}
export const Spans = (props: SpansProps) => {
	const {
		legend,
		boldLegend,
		positionBold = 'start',
		styleBold,
		fontSize = '1.3rem',
		style,
	} = props;
	return (
		<span style={{ fontSize: fontSize ? fontSize : 'inherit', marginBlock: '0', ...style }}>
			{positionBold === 'start' && (
				<strong style={{ fontSize: 'inherit', marginBlock: '0', ...styleBold }}>
					{boldLegend}{' '}
				</strong>
			)}
			{legend}
			{positionBold === 'end' && (
				<strong style={{ fontSize: 'inherit', marginBlock: '0', ...styleBold }}>
					{boldLegend}{' '}
				</strong>
			)}
		</span>
	);
};

//renderiza el icono de atraso en una tarea
//components
export const LateIcon = () => {
	let outOfTimeICon = {
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	};
	return (
		<div style={{ position: 'absolute', ...outOfTimeICon }}>
			<div>
				<h2
					style={{
						position: 'absolute',
						top: '30%',
						left: '45%',
						fontSize: '20px',
						color: '#fff',
					}}
				>
					!
				</h2>
				<svg width="54" height="54" viewBox="-50 -50 300 300">
					<polygon
						style={{ fill: '#FC3D38', stroke: '#fff', strokeWidth: '15' }}
						stroke-linejoin="round"
						points="100,0 0,200 200,200"
					/>
				</svg>
			</div>
		</div>
	);
};

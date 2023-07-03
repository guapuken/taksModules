import React, { CSSProperties, useEffect } from 'react';
import { useWindowSize } from './windowSize';
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
	style?: CSSProperties;
	labels?: any;
}
export const CardContainer = (props: CardContainerProps) => {
	const { width = '100%', height = '100%', children, className, style, labels } = props;
	return (
		<div
			style={{ width: width, height: height, ...style }}
			className={`ContainerCardTeamComponent ${className}`}
			{...labels}
		>
			{children}
		</div>
	);
};
//Renderiza un conjunto de spans con un estilo en el que se aplican con diferentes pesos visuales
interface SpansProps {
	legend?: string | number;
	boldLegend?: string | number;
	positionBold?: 'start' | 'end';
	styleBold?: CSSProperties;
	style?: CSSProperties;
	fontSize?: string;
	className?: string;
	modo?: Modo;
}
export const Spans = (props: SpansProps) => {
	const {
		legend,
		boldLegend,
		positionBold = 'start',
		styleBold,
		fontSize = '14px',
		style,
		className,
	} = props;
	return (
		<span
			className={className}
			style={{ fontSize: fontSize ? fontSize : 'inherit', marginBlock: '0', ...style }}
		>
			{positionBold === 'start' && (
				<strong style={{ fontSize: 'inherit', marginBlock: '0', ...styleBold }}>
					{boldLegend}{' '}
				</strong>
			)}
			{legend}
			{positionBold === 'end' && (
				<strong
					style={{
						fontSize: 'inherit',
						marginBlock: '0',
						color: 'inherit',
						...styleBold,
					}}
				>
					{boldLegend}{' '}
				</strong>
			)}
		</span>
	);
};

//renderiza el icono de atraso en una tarea
//components
export const LateIcon = ({ height = 54 }) => {
	return (
		<div style={{ position: 'absolute' }}>
			<div>
				<svg width={height} height={height} viewBox="-50 -50 300 300">
					<polygon
						style={{ fill: '#FC3D38', stroke: '#fff', strokeWidth: '15' }}
						strokeLinejoin="round"
						points="100,0 0,200 200,200"
					/>
				</svg>
				<h2
					style={{
						position: 'absolute',
						top: '30%',
						left: '45%',
						fontSize: `${height / 2.5}px`,
						color: '#fff',
					}}
				>
					!
				</h2>
			</div>
		</div>
	);
};

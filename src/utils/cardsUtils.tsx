import React from 'react';
import { windowSize } from './widthSize';

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
	const sizetoShow = (windowSize().width * 0.21) / 10;
	// useEffect(() => {
	// 	sizetoShow;
	// }, [windowSize]);
	// console.log(sizetoShow);
	return sizetoShow;
}
export function returnSize() {
	return windowSize().width < 415
		? windowSize().width / 10 - 7
		: windowSize().width < 835
		? windowSize().width / 10 / 2 - 7
		: sizeCard();
}
/*-----------------------------------------------------------------------------------------------
components
-----------------------------------------------------------------------------------------------*/
//contenedor general de cualquier elemento
interface CardContainerProps {
	width?: string;
	height?: string;
	children?: any;
}
export const CardContainer = (props: CardContainerProps) => {
	const { width = '100%', height = '100%', children } = props;
	return (
		<div style={{ width: width, height: height }} className="ContainerCardTeamComponent">
			{children}
		</div>
	);
};

interface SimpleButtonTextProps {
	legend?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	style?: {};
	children?: any;
}
export const SimpleButtonText = (props: SimpleButtonTextProps) => {
	const { onClick, legend, style, children } = props;
	return (
		<p
			style={{ marginBlock: '0', cursor: onClick ? 'pointer' : '', ...style }}
			onClick={onClick}
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

import React from 'react';
import { onClickType } from './types/typesUtils';

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
	onClick?: onClickType;
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

type positionBoldTypes = 'start' | 'end';
interface SpansProps {
	legend?: string | number;
	boldLegend?: string | number;
	positionBold?: positionBoldTypes;
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

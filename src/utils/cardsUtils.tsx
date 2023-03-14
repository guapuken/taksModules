import React from 'react';
import { onClickType } from './types/typesUtils';

export const CardContainer = ({ children }: any) => {
	return <div className="ContainerCardTeamComponent">{children}</div>;
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
}
export const Spans = (props: SpansProps) => {
	const { legend, boldLegend, positionBold, styleBold } = props;
	return (
		<span style={{ fontSize: 'inherit', marginBlock: '0' }}>
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

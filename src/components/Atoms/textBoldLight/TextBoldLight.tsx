import React from 'react';

// types
import { textBoldLightProps } from './types/types';
import ValidationComponent from '../validationComponent/ValidationComponent';
import Texts from '../texts/Texts';
import Title from '../titles/Title';
import SimpleContainer from '../simpleContainer/SimpleContainer';

const TextBoldLight = (props: textBoldLightProps) => {
	const {
		legend,
		boldLegend,
		positionBold = 'start',
		styleBold,
		style,
		className,
		modo = 'Light',
	} = props;
	return (
		<SimpleContainer
			className={className}
			style={{
				display: 'flex',
				...style,
			}}
		>
			<ValidationComponent validate={positionBold === 'start'}>
				<Title modo={modo} style={styleBold}>
					{boldLegend}
				</Title>
			</ValidationComponent>
			<Texts modo={modo}>{legend}</Texts>
			<ValidationComponent validate={positionBold === 'end'}>
				<Title modo={modo} style={styleBold}>
					{boldLegend}{' '}
				</Title>
			</ValidationComponent>
		</SimpleContainer>
	);
};

export default TextBoldLight;

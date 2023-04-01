import React from 'react';
import Cards from '../cards';
import { Modo, onClickType, statusTask } from '../../types';
import { Aside } from './files/aside';
import { Content } from './files/content';
import { cardH, cardW } from '../../utils/functions/functions';

export interface cardTemplate {
	onClickDelete?: onClickType;
	onClickPreview?: onClickType;
	modo?: Modo;
	title?: string;
	statusTask?: statusTask;
	percentTask?: number;
	tasks?: number;
}

const CardTemplate = (props: cardTemplate) => {
	const heightCard = cardH();

	const properties = {
		Aside: () => <Aside height={heightCard} />,
		Content: () => <Content {...props} />,
		height: heightCard,
		rounded: true,
		width: cardW(true),
	};
	return (
		<div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
			<Cards {...properties} />
		</div>
	);
};

export default CardTemplate;

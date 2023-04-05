import React from 'react';
import Cards from '../cards';
import { Modo, onClickType, statusTask } from '../../types';
import { Aside, Content } from './files';
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

const CardMannageTemplates = (props: cardTemplate) => {
	const heightCard = cardH();

	const properties = {
		Aside: () => <Aside height={heightCard} />,
		Content: () => <Content {...props} />,
		height: heightCard,
		rounded: true,
		width: cardW(true),
	};
	return <Cards {...properties} />;
};

export default CardMannageTemplates;

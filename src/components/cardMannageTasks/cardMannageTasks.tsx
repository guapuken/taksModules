import React from 'react';
import Cards from '../cards';
import { cardH, cardW } from '../../utils/functions/functions';
import { Aside } from './files/aside';
import { Content } from './files/content';
import { onClickType, statusTask } from '../../types';

export type cardMannageTasks = {
	onClickDelete?: onClickType;
	onClickPreview?: onClickType;
	title?: string;
	tasks?: number;
	percentTask?: number;
	statusTask?: statusTask;
};
const CardMannageTask = (props: cardMannageTasks) => {
	const heightCard = cardH();

	const properties = {
		Aside: () => <Aside height={heightCard} {...props} />,
		Content: () => <Content {...props} />,
		height: heightCard,
		rounded: true,
		width: cardW(true),
	};
	return <Cards {...properties} />;
};

export default CardMannageTask;

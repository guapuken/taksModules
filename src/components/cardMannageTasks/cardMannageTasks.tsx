import React from 'react';
import Cards from '../cards';
import { cardH, cardW } from '../../utils/functions/functions';
import { Aside } from './files/aside';
import { Content } from './files/content';
import { Modo, onClickType, statusTask } from '../../types';

export type cardMannageTasks = {
	onClickDelete?: onClickType;
	onClickPreview?: onClickType;
	title?: string;
	tasks?: number;
	percentTask?: number;
	statusTask?: statusTask;
	modo: Modo;
};
const CardMannageTask = (props: cardMannageTasks) => {
	const properties = {
		Aside: () => <Aside {...props} />,
		Content: () => <Content {...props} />,
		rounded: true,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};

export default CardMannageTask;

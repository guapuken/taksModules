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
	const properties = {
		Aside: () => <Aside {...props} />,
		Content: () => <Content {...props} />,
		rounded: true,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};

export default CardMannageTemplates;

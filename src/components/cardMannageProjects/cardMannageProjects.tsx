import React from 'react';
import { Aside } from './files/aside';
import { Content } from './files/content';
import { cardH, cardW } from '../../utils/functions/functions';
import Cards from '../cards';
import { Modo, onClickType, statusTask } from '../../types';

export interface cardMannageProjects {
	onClickDelete?: onClickType;
	onClickPreview?: onClickType;
	modo?: Modo;
	title?: string;
	statusTask?: statusTask;
	tasks?: number;
	percentTask?: number;
}
const CardMannageProjects = (props: cardMannageProjects) => {
	const properties = {
		Aside: () => <Aside {...props} />,
		Content: () => <Content {...props} />,
		rounded: true,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};
export default CardMannageProjects;

import React from 'react';
import { Aside } from '../cardTemplate/files/aside';
import { cardH, cardW } from '../../utils/functions/functions';
import Cards from '../cards';
import { Content } from './files/content';

export interface cardMannageProjects {}
const CardMannageProjects = (props: cardMannageProjects) => {
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
export default CardMannageProjects;

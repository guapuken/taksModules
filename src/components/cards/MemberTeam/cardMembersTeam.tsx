import React from 'react';
// componentes auxiliares
import { CardContainer } from '../../../utils/cardsUtils';
// types
import { cardMembersTeam } from './types/types';
import { SimpleContainer, TextBoldLight, Texts, Title } from '../../Atoms';

const CardMembersTeam = (props: cardMembersTeam) => {
	const {
		name = 'Nombre del integrante',
		role = 'Puesto',
		incompletedTasks = 0,
		modo,
		colorTeam,
	} = props;
	return (
		<SimpleContainer style={{ minWidth: ' 100px' }}>
			<Title modo={modo} maxLines={1}>
				{name}
			</Title>
			<Texts modo={modo} maxLines={1}>
				{role}
			</Texts>
			<SimpleContainer
				style={{ borderBottom: `3px solid ${colorTeam}`, width: '30%' }}
				children={null}
			/>
			<TextBoldLight modo={modo} boldLegend={incompletedTasks} legend={' Pendientes'} />
		</SimpleContainer>
	);
};

export default CardMembersTeam;

import React from 'react';
// componentes auxiliares
import { CardContainer, Spans } from '../../utils/cardsUtils';
// types
import { cardMembersTeam } from './types';
import { TextBoldLight, Texts, Title } from '../Atoms';

const CardMembersTeam = (props: cardMembersTeam) => {
	const { name = 'Nombre del integrante', role = 'Puesto', incompletedTasks = 0, modo } = props;
	return (
		<CardContainer>
			<Title modo={modo}>{name}</Title>
			<Texts modo={modo}>{role}</Texts>
			<TextBoldLight
				modo={modo}
				boldLegend={'Tareas pendientes: '}
				legend={incompletedTasks}
			/>
		</CardContainer>
	);
};

export default CardMembersTeam;

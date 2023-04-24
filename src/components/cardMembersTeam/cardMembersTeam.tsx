import React from 'react';
// componentes auxiliares
import { CardContainer, Spans } from '../../utils/cardsUtils';
// types
import { cardMembersTeam } from './types';

const CardMembersTeam = (props: cardMembersTeam) => {
	const { name = 'Nombre del integrante', role = 'Puesto', incompletedTasks = 0 } = props;
	return (
		<CardContainer>
			<h6>{name}</h6>
			<p style={{ fontSize: '13px', marginBottom: '5px' }}>{role}</p>
			<Spans boldLegend={'Tareas pendientes: '} legend={incompletedTasks} />
		</CardContainer>
	);
};

export default CardMembersTeam;

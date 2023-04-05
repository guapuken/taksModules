import React from 'react';
import { CardContainer, Spans } from '../../utils/cardsUtils';
import '../../global.scss';

export interface CardMembersTeamProps {
	name?: string;
	role?: string;
	incompletedTasks?: number;
}

const CardMembersTeam = (props: CardMembersTeamProps) => {
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

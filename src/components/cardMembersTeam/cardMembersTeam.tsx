import React from 'react';
import { CardContainer, Spans } from '../../utils/cardsUtils';
import '../../styles.scss';

export interface CardMembersTeamProps {
	name?: string;
	role?: string;
	incompletedTasks?: number;
}

const CardMembersTeam = (props: CardMembersTeamProps) => {
	const { name = 'Nombre del integrante', role = 'Puesto', incompletedTasks = 0 } = props;
	return (
		<CardContainer width="20rem">
			<h6>{name}</h6>
			<p style={{ fontSize: '1.3rem', marginBottom: '.5rem' }}>{role}</p>
			<Spans boldLegend={'Tareas pendientes: '} legend={incompletedTasks} />
		</CardContainer>
	);
};

export default CardMembersTeam;

import React from 'react';
//componentes auxiliares
import Cards from '../cards';
// componentes principales
import { Content, Aside } from './files';
// types
import { Modo, onClickType } from '../../types';
// estilos
import './cardTeam.scss';

export interface CardTeamProps {
	onClickEdit?: onClickType;
	onClickView?: onClickType;
	onClickDelete?: onClickType;
	modo?: Modo;
	teamName?: string;
	teamColor?: string;
	members?: string[];
}
const CardTeam = (props: CardTeamProps) => {
	return (
		<Cards
			rounded={true}
			Content={() => <Content {...props} />}
			Aside={() => <Aside {...props} />}
			modo={props.modo}
		/>
	);
};

export default CardTeam;

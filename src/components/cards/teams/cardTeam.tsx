import React from 'react';
//componente contenedor
import Cards from '..';
// componentes principales
import { Content, Aside } from './files';
// types
import { cardTeam } from './types/types';
// estilos
import './styles/cardTeam.scss';

const CardTeam = (props: cardTeam) => {
	return (
		<Cards
			rounded={true}
			Content={() => <Content {...props} />}
			Aside={() => <Aside {...props} />}
			modo={props.modo}
			height="20vh"
		/>
	);
};

export default CardTeam;

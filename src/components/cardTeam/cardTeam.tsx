import React from 'react';
//componente contenedor
import Cards from '../cards';
// componentes principales
import { Content, Aside } from './files';
// types
import { cardTeam } from './types';
// estilos
import './cardTeam.scss';

const CardTeam = (props: cardTeam) => {
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

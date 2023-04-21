import React from 'react';
// componentes principales
import { Content, Aside } from './files';

// componente contenedor
import Cards from '../cards';

// types
import { cardMannageProjects } from './types';

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

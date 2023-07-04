import React from 'react';

// types
import { cardTemplate } from './types/types';
// componentes principales
import { Aside, Content } from './files';
// componente contenedor
import Cards from '../cards';

const CardMannageTemplates = (props: cardTemplate) => {
	const properties = {
		Aside: () => <Aside {...props} />,
		Content: () => <Content {...props} />,
		rounded: true,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};

export default CardMannageTemplates;

import React from 'react';

// componente contenedor
import Cards from '../cards';
// componente principales
import { Aside } from './files/aside';
import { Content } from './files/content';
// types
import { cardMannageTasks } from './types';

const CardMannageTask = (props: cardMannageTasks) => {
	const properties = {
		Aside: () => <Aside {...props} />,
		Content: () => <Content {...props} />,
		rounded: true,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};

export default CardMannageTask;

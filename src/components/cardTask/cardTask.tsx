import React from 'react';
// funciones
import { useWindowSize } from '../../utils/windowSize';
// componentes
import Cards from '../cards';
//types
import { cardTask } from './types';
//importación de componentes principales
import { Content, Aside } from './files';

const CardTask = (props: cardTask) => {
	const scrSize = useWindowSize();

	//Definición de los argumentos
	const properties = {
		rounded: true,
		Content: () => <Content {...props} />,
		Aside: scrSize.width >= 834 ? () => <Aside {...props} /> : null,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};

export default CardTask;

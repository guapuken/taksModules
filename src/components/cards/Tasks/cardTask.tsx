import React from 'react';
// funciones
// componentes
import Cards from '../cards';
//types
//importación de componentes principales
import { Content, Aside } from './files';
import { useWindowSize } from '../../../utils/windowSize';
import { cardTask } from './types/types';
import { aspectRatio } from '../../../utils/functions/functions';

const CardTask = (props: cardTask) => {
	const { percentTask = 0 } = props;
	const scrSize = useWindowSize();

	//Definición de los argumentos
	const properties = {
		rounded: true,
		Content: () => <Content {...props} percentTask={percentTask} />,
		Aside: !aspectRatio().tablet ? () => <Aside {...props} /> : null,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};

export default CardTask;

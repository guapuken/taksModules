import React from 'react';
// componentes principales
import { Content, Aside } from './files';

// componente contenedor
import Cards from '../cards';

// types
import { cardMannageProjects } from './types/types';
import { useWindowSize } from '../../../utils/windowSize';
import { aspectRatio } from '../../../utils/functions/functions';

const CardMannageProjects = (props: cardMannageProjects) => {
	const scrW = useWindowSize().width;
	const properties = {
		Aside: !aspectRatio().tablet ? () => <Aside {...props} /> : null,
		Content: () => <Content {...props} />,
		rounded: true,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};
export default CardMannageProjects;

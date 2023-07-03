import React from 'react';
// types
import { cardProject } from './types/types';
// componentes auxiliares
import { Cards } from '../../../components';
// componentes principales
import { Content } from './files';
// estilos

const CardProject = (props: cardProject) => {
	return <Cards rounded Content={() => <Content {...props} />} modo={props.modo} />;
};

export default CardProject;

import React from 'react';
// types
import { cardProject } from './types';
// componentes auxiliares
import { Cards } from '../../components';
// componentes principales
import { Content } from './files';
// estilos
import './cardProject.scss';

const CardProject = (props: cardProject) => {
	return <Cards rounded Content={() => <Content {...props} />} modo={props.modo} />;
};

export default CardProject;

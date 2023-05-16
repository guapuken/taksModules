import React from 'react';

//componentes principales
import { Content, Footer } from './files';
//componentes auxiliares
import Modal from '../modal';
// types
import { ModalProjectsProps } from './types';

const ModalProjects = (props: ModalProjectsProps) => {
	return (
		<Modal
			header="Creación de proyectos"
			Content={<Content {...props} />}
			Footer={<Footer {...props} />}
			modo={props.modo}
			onCl_close={props.onCl_close}
		/>
	);
};

export default ModalProjects;

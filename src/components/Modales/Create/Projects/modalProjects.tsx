import React from 'react';

//componentes principales
import { Content, Footer } from '../Projects/files';
//componentes auxiliares
import Modal from '../../../Atoms/modal/modal';
// types
import { ModalProjectsProps } from './types/types';

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

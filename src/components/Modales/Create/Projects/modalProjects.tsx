import React from 'react';
//componentes principales
import { Content, Footer } from '../Projects/files';
//componentes auxiliares
import Modal from '../../../../CompoundComponents/Modal/Modal';
// types
import { ModalProjectsProps } from './types/types';

const ModalProjects = (props: ModalProjectsProps) => {
	return (
		<Modal modo={props?.modo}>
			<Modal.Header modo={props?.modo} closeIcon onClickClose={props.onCl_close}>
				Registro de proyectos
			</Modal.Header>
			<Modal.Contenido height="100%">
				<Content {...props} />
			</Modal.Contenido>
			<Modal.Footer>
				<Footer {...props} />
			</Modal.Footer>
		</Modal>
	);
};

export default ModalProjects;

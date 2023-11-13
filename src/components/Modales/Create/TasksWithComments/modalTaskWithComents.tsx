import React from 'react';
// import Modal from '../../../Atoms/modal/modal';
import { Content, Footer } from './files';
import { contentProps } from './types/types';
import Modal from '../../../../CompoundComponents/Modal/Modal';

const ModalTaskWithComments = (props: contentProps) => {
	return (
		<Modal modo={props?.modo} width="50vw" height="100%">
			<Modal.Header onClickClose={props?.onCl_close} closeIcon modo={props?.modo}>
				Detalles de la tarea
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

export default ModalTaskWithComments;

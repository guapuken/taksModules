import React from 'react';
// import Modal from '../../../Atoms/modal/modal';
import Modal from '../../../../CompoundComponents/Modal/Modal';
// types
import { tasksProps } from './types/types';
// componentes principales
import { Footer, Content } from './files';

const ModalTask = (props: tasksProps) => (
	<Modal modo={props?.modo} width="50vw" height="100%">
		<Modal.Header modo={props?.modo} closeIcon onClickClose={props?.onCl_close}>
			Registro de tarea
		</Modal.Header>
		<Modal.Contenido height="100%">
			<Content {...(props as any)} />
		</Modal.Contenido>
		<Modal.Footer>
			<Footer {...props} />
		</Modal.Footer>
	</Modal>
);

export default ModalTask;

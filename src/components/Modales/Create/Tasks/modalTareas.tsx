import React from 'react';
import Modal from '../../../Atoms/modal/modal';
// types
import { tasksProps } from './types/types';
// componentes principales
import { Footer, Content } from './files';

const ModalTask = (props: tasksProps) => (
	<Modal
		modo={props.modo}
		header="Creación de tareas"
		Content={<Content {...(props as any)} />}
		Footer={<Footer {...props} />}
		onCl_close={props.onCl_close}
	/>
);

export default ModalTask;

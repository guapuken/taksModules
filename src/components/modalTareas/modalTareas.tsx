import React from 'react';
import Modal from '../modal';
// types
import { tasksProps } from './types';
// componentes principales
import { Footer, Content } from './files';

const ModalTask = (props: tasksProps) => (
	<Modal
		modo={props.modo}
		header="Creación de tareas"
		Content={<Content {...props} />}
		Footer={<Footer {...props} />}
	/>
);

export default ModalTask;

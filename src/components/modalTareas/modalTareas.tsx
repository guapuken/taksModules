import React from 'react';
import Modal from '../modal';
// types
import { tasksProps } from './types';
// componentes principales
import { Footer, Content } from './files';

const ModalTareas = (props: tasksProps) => (
	<Modal
		header="Creación de tareas"
		Content={() => <Content {...props.content} />}
		Footer={() => <Footer {...props.footer} />}
	/>
);

export default ModalTareas;

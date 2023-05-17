import React from 'react';
import { Modal } from '../../components';
import { Content, Footer } from './files';
import { contentProps } from './types';

const ModalTaskWithComments = (props: contentProps) => {
	const args = {
		Content: <Content {...props} />,
		Footer: <Footer {...props} />,
		header: 'Detalles de tarea',
		modo: props.modo,
		onCl_close: props.onCl_close,
	};
	return <Modal {...args} />;
};

export default ModalTaskWithComments;
